<template>
	<div :class="FILE_INPUT_MANIFEST.styles.base">
		<div v-if="label || description" :class="FILE_INPUT_MANIFEST.styles.labels.container">
			<label :for="id" :class="FILE_INPUT_MANIFEST.styles.labels.label"
				>{{ label
				}}<span v-if="required" :class="FILE_INPUT_MANIFEST.styles.labels.required">*</span></label
			>
			<span
				v-if="description"
				:id="`${id}-description`"
				:class="FILE_INPUT_MANIFEST.styles.labels.description"
				>{{ description }}</span
			>
		</div>
		<div :class="FILE_INPUT_MANIFEST.styles.container">
			<input
				ref="inputRef"
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				:accept="accept"
				:multiple="multiple"
				:disabled="disabled"
				:required="required"
				:aria-label="ariaLabel"
				:aria-describedby="describedBy"
				:aria-invalid="error || selectionError ? 'true' : undefined"
				:class="FILE_INPUT_MANIFEST.styles.input"
				type="file"
				@change="onInputChange"
			/>
			<label
				:for="id"
				:data-disabled="disabled ? 'true' : undefined"
				:class="FILE_INPUT_MANIFEST.styles.trigger"
			>
				<bo-icon icon="upload_cloud" :class="FILE_INPUT_MANIFEST.styles.icon" aria-hidden="true" />
				<span :class="FILE_INPUT_MANIFEST.styles.triggerContent">
					<span :class="FILE_INPUT_MANIFEST.styles.triggerTitle">
						{{
							selectedFiles.length
								? 'Choose another file'
								: multiple
									? 'Choose files'
									: 'Choose a file'
						}}
					</span>
					<span :class="FILE_INPUT_MANIFEST.styles.triggerHint">
						{{ accept || 'Any supported file type' }}
					</span>
				</span>
				<span :class="FILE_INPUT_MANIFEST.styles.triggerAction">Browse</span>
			</label>
		</div>
		<ul v-if="selectedFiles.length" :class="FILE_INPUT_MANIFEST.styles.fileList">
			<li
				v-for="(file, index) in selectedFiles"
				:key="`${file.name}-${index}`"
				:class="FILE_INPUT_MANIFEST.styles.file"
			>
				<span class="min-w-0 flex-1 truncate" :title="file.name">{{ file.name }}</span
				><button
					type="button"
					:class="FILE_INPUT_MANIFEST.styles.remove"
					:aria-label="`Remove ${file.name}`"
					:title="`Remove ${file.name}`"
					@click="removeFile(index)"
				>
					<bo-icon icon="trash_2" size="sm" aria-hidden="true" />
				</button>
			</li>
		</ul>
		<div
			v-if="error || selectionError || hint"
			:id="`${id}-help`"
			:class="FILE_INPUT_MANIFEST.styles.helpers.container"
		>
			<span v-if="error || selectionError" :class="FILE_INPUT_MANIFEST.styles.helpers.error">{{
				error || selectionError
			}}</span>
			<span v-else :class="FILE_INPUT_MANIFEST.styles.helpers.hint">{{ hint }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	FILE_INPUT_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoFileInputProps,
} from '@workspace/bamboo-core';
import { computed, useTemplateRef } from 'vue';
import { useFileSelection } from '../../composables/use-file-selection';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoFileInputProps>(), {
	id: () => generateComponentId('file-input'),
	dataTestId: () => generateDataTestId('file-input'),
});
const emit = defineEmits<{
	(event: 'change', files: File[]): void;
	(event: 'error', message: string): void;
}>();
const model = defineModel<File | File[] | null>({ default: null });
const inputRef = useTemplateRef<HTMLInputElement>('inputRef');
const selection = useFileSelection({
	accept: props.accept,
	multiple: props.multiple,
	maxFiles: props.maxFiles,
	maxSize: props.maxSize,
});
const selectedFiles = computed(() => {
	return selection.files.value;
});
const describedBy = computed(() => {
	const ids: string[] = [];
	if (props.description) {
		ids.push(`${props.id}-description`);
	}
	if (props.error || selectionError.value || props.hint) {
		ids.push(`${props.id}-help`);
	}
	return ids.length ? ids.join(' ') : undefined;
});
const selectionError = computed(() => {
	return selection.error.value;
});
function onInputChange(event: Event): void {
	selection.onInputChange(event);
	model.value = props.multiple ? selection.files.value : (selection.files.value[0] ?? null);
	emit('change', selection.files.value);
	if (selection.error.value) {
		emit('error', selection.error.value);
	}
}

function syncModel(): void {
	model.value = props.multiple ? selection.files.value : (selection.files.value[0] ?? null);
	emit('change', selection.files.value);
}

function removeFile(index: number): void {
	selection.removeFile(index);
	syncModel();
}

function reset(): void {
	selection.reset();
	if (inputRef.value) {
		inputRef.value.value = '';
	}
	syncModel();
}

defineExpose({ focus: () => inputRef.value?.click(), reset });
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/file-input.manifest.css';
</style>
