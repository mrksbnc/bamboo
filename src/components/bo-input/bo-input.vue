<template>
	<div :class="['bo-input-wrapper', customCssClass]">
		<bo-text
			v-if="label"
			:value="label"
			:font-size="BoFontSize.sm"
			:font-weight="BoFontWeight.medium"
			custom-css-class="bo-input-wrapper__label"
		>
			<span v-if="required" class="bo-input-wrapper__required">*</span>
		</bo-text>

		<div :class="inputContainerClasses">
			<bo-icon
				v-if="prefixIcon"
				:icon="prefixIcon"
				:size="iconSize"
				class="bo-input__icon bo-input__icon--prefix"
			/>

			<input
				:id="id"
				ref="inputRef"
				v-model="modelValue"
				:type="type"
				:name="name"
				:placeholder="placeholder"
				:disabled="disabled"
				:required="required"
				:readonly="readonly"
				:aria-label="computedAriaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="computedAriaDescribedBy"
				:aria-live="ariaLive"
				:aria-invalid="state === BoInputState.error"
				:tabindex="tabIndex"
				:autocomplete="autocomplete"
				:maxlength="maxlength"
				:minlength="minlength"
				:pattern="pattern"
				:data-testid="dataTestId"
				class="bo-input__field"
				@blur="handleBlur"
				@focus="handleFocus"
			/>

			<bo-icon
				v-if="suffixIcon && !showClearButton && !actionText"
				:icon="suffixIcon"
				:size="iconSize"
				class="bo-input__icon bo-input__icon--suffix"
			/>

			<button
				v-if="showClearButton && !actionText"
				type="button"
				class="bo-input__button bo-input__button--clear"
				:aria-label="'Clear input'"
				@click="handleClear"
			>
				<bo-icon :icon="Icon.x" :size="14" />
			</button>

			<button
				v-if="actionText"
				type="button"
				class="bo-input__button bo-input__button--action"
				:disabled="actionDisabled"
				@click="handleAction"
			>
				{{ actionText }}
			</button>
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
	import { computed, ref } from 'vue';
	import { BoInputSize, BoInputState, BoInputType, type BoInputProps } from './bo-input';

	const props = withDefaults(defineProps<BoInputProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-input'),
		type: BoInputType.text,
		size: BoInputSize.md,
		state: BoInputState.default,
		ariaLive: AriaLive.polite,
	});

	const modelValue = defineModel<string | number>({ default: '' });

	const emit = defineEmits<{
		blur: [event: FocusEvent];
		focus: [event: FocusEvent];
		clear: [];
		action: [];
	}>();

	const inputRef = ref<HTMLInputElement | null>(null);
	const isFocused = ref(false);

	const iconSize = computed<number>(() => {
		switch (props.size) {
			case BoInputSize.sm:
				return 14;
			case BoInputSize.lg:
				return 18;
			case BoInputSize.md:
			default:
				return 16;
		}
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.label) {
			return props.label;
		}
		return undefined;
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

	const showClearButton = computed<boolean>(() => {
		return (
			props.clearable &&
			!props.disabled &&
			!props.readonly &&
			modelValue.value !== '' &&
			modelValue.value !== null &&
			modelValue.value !== undefined
		);
	});

	const displayMessage = computed<string | undefined>(() => {
		if (props.state === BoInputState.error && props.errorText) {
			return props.errorText;
		}
		if (props.state === BoInputState.success && props.successText) {
			return props.successText;
		}
		return props.helperText;
	});

	const messageClasses = computed<string>(() => {
		const classes = ['bo-input-wrapper__message'];
		if (props.state === BoInputState.error) {
			classes.push('bo-input-wrapper__message--error');
		} else if (props.state === BoInputState.success) {
			classes.push('bo-input-wrapper__message--success');
		}
		return classes.join(' ');
	});

	const inputContainerClasses = computed<string>(() => {
		return [
			'bo-input',
			`bo-input--size-${props.size}`,
			`bo-input--state-${props.state}`,
			props.disabled && 'bo-input--disabled',
			props.readonly && 'bo-input--readonly',
			isFocused.value && 'bo-input--focused',
			props.prefixIcon && 'bo-input--with-prefix',
			(props.suffixIcon || showClearButton.value) && 'bo-input--with-suffix',
			props.actionText && 'bo-input--with-action',
		]
			.filter(Boolean)
			.join(' ');
	});

	function handleBlur(event: FocusEvent): void {
		isFocused.value = false;
		emit('blur', event);
	}

	function handleFocus(event: FocusEvent): void {
		isFocused.value = true;
		emit('focus', event);
	}

	function handleClear(): void {
		modelValue.value = '';
		emit('clear');
		inputRef.value?.focus();
	}

	function handleAction(): void {
		emit('action');
	}

	defineExpose({
		focus: () => inputRef.value?.focus(),
		blur: () => inputRef.value?.blur(),
	});
</script>

<style scoped lang="scss">
	.bo-input-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.375rem; /* 6px */
		width: 100%;
		max-width: 100%;
		min-width: 12.5rem; /* 200px */

		&__label {
			color: var(--input-label);
		}

		&__required {
			color: var(--red-500);
			margin-left: 0.25rem; /* 4px */
		}

		&__message {
			color: var(--input-message-default);

			&--error {
				color: var(--input-message-error);
			}

			&--success {
				color: var(--input-message-success);
			}
		}
	}

	.bo-input {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		background-color: var(--input-bg);
		border: 1px solid var(--input-border-default);
		border-radius: 0.375rem; /* 6px */
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
		transition:
			border-color 300ms ease,
			box-shadow 300ms ease;

		&:hover:not(&--disabled, &--readonly) {
			border-color: var(--input-border-hover);
		}

		&--focused {
			outline: none;
			border-color: var(--input-border-focus);
			box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
		}

		/* Size variants */
		&--size-sm {
			min-height: 2rem; /* 32px */

			.bo-input__field {
				padding: 0.375rem 0.75rem; /* 6px 12px */
				font-size: 0.875rem; /* 14px */
			}

			&.bo-input--with-prefix .bo-input__field {
				padding-left: 2rem; /* 32px */
			}

			&.bo-input--with-suffix .bo-input__field,
			&.bo-input--with-action .bo-input__field {
				padding-right: 2rem; /* 32px */
			}
		}

		&--size-md {
			min-height: 2.5rem; /* 40px */

			.bo-input__field {
				padding: 0.5rem 0.75rem; /* 8px 12px */
				font-size: 0.875rem; /* 14px */
			}

			&.bo-input--with-prefix .bo-input__field {
				padding-left: 2.5rem; /* 40px */
			}

			&.bo-input--with-suffix .bo-input__field,
			&.bo-input--with-action .bo-input__field {
				padding-right: 2.5rem; /* 40px */
			}
		}

		&--size-lg {
			min-height: 3rem; /* 48px */

			.bo-input__field {
				padding: 0.75rem; /* 12px 12px */
				font-size: 0.875rem; /* 14px */
			}

			&.bo-input--with-prefix .bo-input__field {
				padding-left: 3rem; /* 48px */
			}

			&.bo-input--with-suffix .bo-input__field,
			&.bo-input--with-action .bo-input__field {
				padding-right: 3rem; /* 48px */
			}
		}

		/* State variants */
		&--state-error {
			border-color: var(--input-border-error);

			&:hover:not(.bo-input--disabled, .bo-input--readonly) {
				border-color: var(--input-border-error-hover);
			}

			&.bo-input--focused {
				border-color: var(--input-border-error-focus);
			}

			.bo-input__field {
				color: var(--input-text-error);

				&::placeholder {
					color: var(--input-placeholder-error);
				}
			}
		}

		&--state-success {
			border-color: var(--input-border-success);

			&:hover:not(.bo-input--disabled, .bo-input--readonly) {
				border-color: var(--input-border-success-hover);
			}

			&.bo-input--focused {
				border-color: var(--input-border-success-focus);
			}

			.bo-input__field {
				color: var(--input-text-success);

				&::placeholder {
					color: var(--input-placeholder-success);
				}
			}
		}

		&--disabled {
			background-color: var(--input-bg-disabled);
			cursor: not-allowed;
			opacity: 0.6;
		}

		&--readonly {
			cursor: default;
		}

		&__icon {
			position: absolute;
			color: var(--input-icon);
			pointer-events: none;

			&--prefix {
				left: 0.75rem; /* 12px */
			}

			&--suffix {
				right: 0.75rem; /* 12px */
			}
		}

		&__field {
			flex: 1;
			min-width: 0;
			width: 100%;
			height: 100%;
			background-color: transparent;
			border: none;
			outline: none;
			color: var(--input-text);
			font-size: 0.875rem; /* 14px - native input needs explicit font-size */
			font-weight: 400;
			line-height: 1.25;
			appearance: none;

			&::placeholder {
				color: var(--input-placeholder);
				opacity: 1;
			}

			&:disabled {
				cursor: not-allowed;
				color: var(--input-text-disabled);
			}

			&:read-only {
				cursor: default;
			}

			/* Remove default browser styles */
			&::-webkit-search-decoration,
			&::-webkit-search-cancel-button,
			&::-webkit-search-results-button,
			&::-webkit-search-results-decoration {
				display: none;
			}

			&[type='number']::-webkit-inner-spin-button,
			&[type='number']::-webkit-outer-spin-button {
				appearance: none;
				margin: 0;
			}

			&[type='number'] {
				appearance: textfield;
			}
		}

		&__button {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0;
			border: none;
			cursor: pointer;
			transition:
				color var(--transition-base) var(--transition-timing),
				background-color var(--transition-base) var(--transition-timing),
				box-shadow var(--transition-base) var(--transition-timing);

			&--clear {
				right: 0.75rem; /* 12px */
				padding: 0.25rem; /* 4px */
				background: none;
				border-radius: 0.25rem; /* 4px */
				color: var(--input-icon);

				&:hover {
					color: var(--input-icon-hover);
					background-color: var(--input-icon-hover-bg);
				}

				&:focus-visible {
					outline: 2px solid var(--input-border-focus);
					outline-offset: 1px;
				}
			}

			&--action {
				right: 0.25rem; /* 4px */
				padding: 0.25rem 0.625rem; /* 4px 10px */
				border: 1px solid transparent;
				background-color: var(--input-action-bg);
				color: var(--input-action-text);
				font-size: 0.875rem; /* 14px */
				font-weight: 500;
				border-radius: 0.25rem; /* 4px */
				box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

				&:hover:not(:disabled) {
					background-color: var(--input-action-bg-hover);
					box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
				}

				&:focus-visible {
					background-color: var(--input-action-bg-hover);
					box-shadow: none;
					outline: 2px solid var(--input-border-focus);
					outline-offset: 1px;
				}

				&:active:not(:disabled) {
					background-color: var(--input-action-bg-hover);
					box-shadow: none;
				}

				&:disabled {
					opacity: 0.5;
					cursor: not-allowed;
					pointer-events: none;
				}
			}
		}
	}
</style>
