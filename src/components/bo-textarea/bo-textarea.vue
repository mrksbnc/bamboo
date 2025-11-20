<template>
	<div :class="['bo-textarea', customCssClass]">
		<label v-if="label" :for="id" class="bo-textarea__label-wrapper">
			<bo-text
				:value="label"
				:font-size="BoFontSize.sm"
				:font-weight="BoFontWeight.medium"
				custom-css-class="bo-textarea__label-text"
			/>
			<bo-text
				v-if="required"
				value="*"
				:font-size="BoFontSize.sm"
				:font-weight="BoFontWeight.medium"
				custom-css-class="bo-textarea__required"
			/>
		</label>
		<textarea
			:id="id"
			:name="name"
			:value="modelValue"
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:required="required"
			:rows="rows"
			:maxlength="maxLength"
			:minlength="minLength"
			:class="componentBaseClasses"
			:aria-label="computedAriaLabel"
			:aria-labelledby="ariaLabelledBy"
			:aria-describedby="computedAriaDescribedBy"
			:aria-live="ariaLive"
			:aria-invalid="!!error"
			:data-testid="dataTestId"
			:tabindex="tabIndex"
			@input="handleInput"
			@blur="handleBlur"
		/>
		<div v-if="helperText || error || showCount" class="bo-textarea__footer">
			<bo-text
				v-if="error"
				:value="error"
				:font-size="BoFontSize.xs"
				custom-css-class="bo-textarea__message bo-textarea__message--error"
			/>
			<bo-text
				v-else-if="helperText"
				:value="helperText"
				:font-size="BoFontSize.xs"
				custom-css-class="bo-textarea__message bo-textarea__message--default"
			/>
			<bo-text
				v-if="showCount && maxLength"
				:value="`${characterCount}/${maxLength}`"
				:font-size="BoFontSize.xs"
				custom-css-class="bo-textarea__count"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import { BoSize } from '@/shared/size';
	import { computed, nextTick, ref, watch } from 'vue';
	import type { BoTextareaProps } from './bo-textarea';

	const props = withDefaults(defineProps<BoTextareaProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-textarea'),
		size: BoSize.md,
		rows: 3,
		ariaLive: AriaLive.polite,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		blur: [event: FocusEvent];
	}>();

	const textareaRef = ref<HTMLTextAreaElement | null>(null);

	const characterCount = computed(() => props.modelValue?.length || 0);

	const computedAriaLabel = computed<string | undefined>(() => {
		return props.ariaLabel || props.label || undefined;
	});

	const computedAriaDescribedBy = computed<string | undefined>(() => {
		const ids: string[] = [];
		if (props.ariaDescribedBy) ids.push(props.ariaDescribedBy);
		if (props.error) ids.push(`${props.id}-error`);
		if (props.helperText) ids.push(`${props.id}-helper`);
		return ids.length > 0 ? ids.join(' ') : undefined;
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-textarea__field',
			`bo-textarea__field--size-${props.size}`,
			props.disabled && 'bo-textarea__field--disabled',
			props.readonly && 'bo-textarea__field--readonly',
			props.error && 'bo-textarea__field--error',
		]
			.filter(Boolean)
			.join(' ');
	});

	function handleInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		emit('update:modelValue', target.value);

		if (props.autoResize) {
			autoResize(target);
		}
	}

	function handleBlur(event: FocusEvent): void {
		emit('blur', event);
	}

	function autoResize(element: HTMLTextAreaElement): void {
		element.style.height = 'auto';
		element.style.height = `${element.scrollHeight}px`;
	}

	watch(
		() => props.modelValue,
		async () => {
			if (props.autoResize && textareaRef.value) {
				await nextTick();
				autoResize(textareaRef.value);
			}
		},
	);
</script>

<style scoped lang="scss">
	.bo-textarea {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.bo-textarea__label-wrapper {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.bo-textarea__label-text {
		color: var(--textarea-label);
	}

	.bo-textarea__required {
		color: var(--textarea-message-error);
	}

	.bo-textarea__field {
		width: 100%;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--textarea-border);
		border-radius: 0.375rem;
		font-family: inherit;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--textarea-text);
		background-color: var(--textarea-bg);
		resize: vertical;
		transition: border-color 0.15s ease-in-out;

		&:hover:not(:disabled):not(:focus) {
			border-color: var(--textarea-border-hover);
		}

		&:focus {
			outline: none;
			border-color: var(--textarea-border-focus);
			box-shadow: 0 0 0 3px rgb(59 130 246 / 10%);
		}

		&::placeholder {
			color: var(--textarea-placeholder);
		}

		&--disabled {
			opacity: 0.5;
			cursor: not-allowed;
			background-color: var(--textarea-bg-disabled);
			color: var(--textarea-text-disabled);
		}

		&--readonly {
			background-color: var(--textarea-bg-disabled);
		}

		&--error {
			border-color: var(--textarea-border-error);

			&:hover:not(:disabled):not(:focus) {
				border-color: var(--textarea-border-error-hover);
			}

			&:focus {
				border-color: var(--textarea-border-error-focus);
				box-shadow: 0 0 0 3px rgb(239 68 68 / 10%);
			}
		}

		&--size-xs {
			padding: 0.25rem 0.5rem;
			font-size: 0.75rem;
		}

		&--size-sm {
			padding: 0.375rem 0.625rem;
			font-size: 0.8125rem;
		}

		&--size-md {
			padding: 0.5rem 0.75rem;
			font-size: 0.875rem;
		}

		&--size-lg {
			padding: 0.625rem 0.875rem;
			font-size: 1rem;
		}

		&--size-xl {
			padding: 0.75rem 1rem;
			font-size: 1.125rem;
		}
	}

	.bo-textarea__footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bo-textarea__message {
		&--error {
			color: var(--textarea-message-error);
		}

		&--default {
			color: var(--textarea-message-default);
		}
	}

	.bo-textarea__count {
		color: var(--textarea-message-default);
		margin-left: auto;
	}
</style>
