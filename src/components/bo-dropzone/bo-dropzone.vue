<template>
	<div :class="['bo-dropzone__wrapper', customCssClass]" :data-testid="dataTestId">
		<bo-text
			v-if="label"
			:value="label"
			:font-size="BoFontSize.sm"
			:font-weight="BoFontWeight.medium"
			:custom-css-class="'bo-dropzone__label'"
		/>

		<div
			:class="dropzoneContainerClasses"
			:aria-label="computedAriaLabel"
			:aria-labelledby="ariaLabelledBy"
			:aria-describedby="computedAriaDescribedBy"
			:aria-live="ariaLive"
			:aria-invalid="hasError"
			:tabindex="disabled ? -1 : (tabIndex ?? 0)"
			role="button"
			@click="triggerFileInput"
			@dragover.prevent="handleDragOver"
			@dragleave.prevent="handleDragLeave"
			@drop.prevent="handleDrop"
			@keydown.enter.prevent="triggerFileInput"
			@keydown.space.prevent="triggerFileInput"
		>
			<input
				:id="id"
				ref="fileInputRef"
				type="file"
				:name="name"
				:disabled="disabled"
				:multiple="multiple"
				:accept="accept"
				class="bo-dropzone__input"
				@change="handleChange"
			/>

			<div class="bo-dropzone__content">
				<bo-icon :icon="Icon.upload" :size="iconSize" class="bo-dropzone__icon" />

				<bo-text
					:value="dropzoneText"
					:font-size="BoFontSize.sm"
					:font-weight="BoFontWeight.medium"
					:custom-css-class="'bo-dropzone__text'"
				/>

				<bo-text
					v-if="hintText"
					:value="hintText"
					:font-size="BoFontSize.xs"
					:custom-css-class="'bo-dropzone__hint'"
				/>

				<div v-if="selectedFiles.length > 0" class="bo-dropzone__files">
					<div v-for="(file, index) in selectedFiles" :key="index" class="bo-dropzone__file">
						<bo-icon :icon="Icon.file" :size="16" />
						<bo-text
							:value="file.name"
							:font-size="BoFontSize.xs"
							:custom-css-class="'bo-dropzone__file-name'"
						/>
						<button
							type="button"
							class="bo-dropzone__file-remove"
							:aria-label="`Remove ${file.name}`"
							@click.stop="removeFile(index)"
						>
							<bo-icon :icon="Icon.x" :size="14" />
						</button>
					</div>
				</div>
			</div>
		</div>

		<bo-text
			v-if="displayMessage"
			:value="displayMessage"
			:font-size="BoFontSize.xs"
			:custom-css-class="messageClasses"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, ref } from 'vue';
	import { BoDropzoneSize, type BoDropzoneProps } from './bo-dropzone';

	const props = withDefaults(defineProps<BoDropzoneProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-dropzone'),
		size: BoDropzoneSize.md,
		dropzoneText: 'Click to upload or drag and drop',
		hintText: 'Supported formats: All files',
		ariaLive: AriaLive.polite,
	});

	const emit = defineEmits<{
		change: [files: File[]];
		error: [error: string];
	}>();

	const fileInputRef = ref<HTMLInputElement | null>(null);
	const selectedFiles = ref<File[]>([]);
	const isDragging = ref(false);

	const iconSize = computed<number>(() => {
		switch (props.size) {
			case BoDropzoneSize.sm:
				return 24;
			case BoDropzoneSize.lg:
				return 40;
			case BoDropzoneSize.md:
			default:
				return 32;
		}
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.label) {
			return props.label;
		}
		return 'File dropzone';
	});

	const computedAriaDescribedBy = computed<string | undefined>(() => {
		if (props.ariaDescribedBy) {
			return props.ariaDescribedBy;
		}
		if (displayMessage.value) {
			return `${props.id}-message`;
		}
		return undefined;
	});

	const displayMessage = computed<string | undefined>(() => {
		if (props.hasError && props.errorText) {
			return props.errorText;
		}
		return props.helperText;
	});

	const messageClasses = computed<string>(() => {
		const classes = ['bo-dropzone__message'];
		if (props.hasError) {
			classes.push('bo-dropzone__message--error');
		}
		return classes.join(' ');
	});

	const dropzoneContainerClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-dropzone': true,
			[`bo-dropzone--size-${props.size}`]: true,
			'bo-dropzone--disabled': props.disabled,
			'bo-dropzone--error': props.hasError,
			'bo-dropzone--dragging': isDragging.value,
			'bo-dropzone--has-files': selectedFiles.value.length > 0,
		};
	});

	function triggerFileInput(): void {
		if (!props.disabled) {
			fileInputRef.value?.click();
		}
	}

	function handleDragOver(event: DragEvent): void {
		if (!props.disabled) {
			isDragging.value = true;
			if (event.dataTransfer) {
				event.dataTransfer.dropEffect = 'copy';
			}
		}
	}

	function handleDragLeave(): void {
		isDragging.value = false;
	}

	function handleDrop(event: DragEvent): void {
		isDragging.value = false;
		if (props.disabled) return;

		const files = Array.from(event.dataTransfer?.files || []);
		processFiles(files);
	}

	function handleChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		const files = Array.from(target.files || []);
		processFiles(files);
	}

	function processFiles(files: File[]): void {
		// Validate max files
		if (props.maxFiles && files.length > props.maxFiles) {
			emit('error', `Maximum ${props.maxFiles} files allowed`);
			return;
		}

		// Validate file size
		if (props.maxSize) {
			const oversizedFiles = files.filter((file) => file.size > props.maxSize!);
			if (oversizedFiles.length > 0) {
				const error = `File size exceeds maximum allowed size of ${formatFileSize(props.maxSize)}`;
				emit('error', error);
				return;
			}
		}

		// Validate file types
		if (props.accept) {
			const acceptedTypes = props.accept.split(',').map((type) => type.trim());
			const invalidFiles = files.filter((file) => {
				return !acceptedTypes.some((type) => {
					if (type.startsWith('.')) {
						return file.name.endsWith(type);
					}
					if (type.endsWith('/*')) {
						const category = type.split('/')[0];
						return file.type.startsWith(category + '/');
					}
					return file.type === type;
				});
			});

			if (invalidFiles.length > 0) {
				emit('error', `Invalid file type. Accepted: ${props.accept}`);
				return;
			}
		}

		selectedFiles.value = files;
		emit('change', files);
	}

	function removeFile(index: number): void {
		selectedFiles.value.splice(index, 1);
		emit('change', selectedFiles.value);
	}

	function formatFileSize(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
	}

	defineExpose({
		focus: () => fileInputRef.value?.focus(),
		blur: () => fileInputRef.value?.blur(),
		clear: () => {
			selectedFiles.value = [];
			if (fileInputRef.value) {
				fileInputRef.value.value = '';
			}
		},
	});
</script>

<style scoped lang="scss">
	.bo-dropzone__wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		width: 100%;
	}

	.bo-dropzone__label {
		color: var(--dropzone-label);
	}

	.bo-dropzone {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: var(--dropzone-bg);
		border: 2px dashed var(--dropzone-border);
		border-radius: 0.5rem;
		cursor: pointer;
		transition:
			border-color 300ms ease,
			background-color 300ms ease;

		&:hover:not(&--disabled) {
			background-color: var(--dropzone-bg-hover);
			border-color: var(--dropzone-border-hover);
		}

		&:focus-visible {
			outline: 2px solid var(--dropzone-focus-ring);
			outline-offset: 2px;
		}

		&--dragging {
			background-color: var(--dropzone-bg-dragging);
			border-color: var(--dropzone-border-dragging);
		}

		&--error {
			border-color: var(--dropzone-border-error);
		}

		&--disabled {
			background-color: var(--dropzone-bg-disabled);
			cursor: not-allowed;
			opacity: 0.6;
		}

		&__input {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			text-align: center;
		}

		&__icon {
			color: var(--dropzone-icon);
		}

		&__text {
			color: var(--dropzone-text);
		}

		&__hint {
			color: var(--dropzone-hint);
		}

		&__files {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			width: 100%;
			margin-top: 0.5rem;
		}

		&__file {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.5rem;
			background-color: var(--dropzone-file-bg);
			border-radius: 0.25rem;
		}

		&__file-name {
			flex: 1;
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: var(--dropzone-file-text);
		}

		&__file-remove {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.25rem;
			margin: 0;
			border: none;
			background: none;
			border-radius: 0.25rem;
			cursor: pointer;
			color: var(--dropzone-file-remove-icon);
			transition: color 200ms ease;

			&:hover {
				color: var(--dropzone-file-remove-icon-hover);
			}
		}

		/* Size variants */
		&--size-sm {
			min-height: 8rem;
			padding: 1rem;
		}

		&--size-md {
			min-height: 12rem;
			padding: 1.5rem;
		}

		&--size-lg {
			min-height: 16rem;
			padding: 2rem;
		}
	}

	.bo-dropzone__message {
		color: var(--dropzone-message);

		&--error {
			color: var(--dropzone-message-error);
		}
	}
</style>
