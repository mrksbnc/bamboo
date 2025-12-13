<template>
	<button
		:id="id"
		:type="type"
		:disabled="disabled || isLoading"
		:role="role"
		:style="buttonStyle"
		:class="buttonClasses"
		:tabindex="computedTabIndex"
		:aria-live="ariaLive"
		:aria-label="computedAriaLabel"
		:data-testid="dataTestId"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			<div class="bo-button__content">
				<bo-loading-spinner
					v-if="isLoading && loaderType === BoLoaderType.spinner"
					:size="loadingSpinnerSize"
					:variant="variant"
					:custom-container-css-class="'bo-button__loader'"
				/>
				<bo-loading-ring
					v-else-if="isLoading && loaderType === BoLoaderType.ring"
					:size="loadingSpinnerSize"
					:variant="variant"
					:custom-container-css-class="'bo-button__loader'"
				/>
				<bo-icon
					v-if="prefixIcon && !isLoading"
					:icon="prefixIcon"
					:size="iconSize"
					:cursor="componentCursorState"
					custom-css-class="bo-button__icon bo-button__icon--prefix"
				/>
				<bo-text
					v-if="label"
					:value="label"
					:cursor="componentCursorState"
					:font-size="textFontSize"
					:variant="BoTextVariant.current"
					:font-weight="BoFontWeight.medium"
					custom-css-class="bo-button__label"
				/>
				<bo-icon
					v-if="suffixIcon"
					:icon="suffixIcon"
					:size="iconSize"
					:cursor="componentCursorState"
					custom-css-class="bo-button__icon bo-button__icon--suffix"
				/>
			</div>
		</slot>
	</button>
</template>

<script lang="ts" setup>
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
	import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { AriaLive } from '@/core/accessibility';
	import type { ConditionalCssProperties } from '@/core/css';
	import { BoLoaderType } from '@/core/loader';
	import { BoSize } from '@/core/size';
	import { BoVariant } from '@/core/variant';
	import { ColorService } from '@/services/color-service';
	import { IdentityService } from '@/services/identity-service';
	import { computed, type HTMLAttributes, type StyleValue } from 'vue';
	import { BoButtonType, type BoButtonProps } from './bo-button';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-button'),
		size: BoSize.default,
		variant: BoVariant.primary,
		type: BoButtonType.button,
		loaderType: BoLoaderType.spinner,
		ariaLive: AriaLive.polite,
	});

	const emit = defineEmits<{
		click: [event: MouseEvent];
	}>();

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}

		if (props.label) {
			return props.label;
		}

		if (props.ariaLabelledBy) {
			return undefined;
		}

		return undefined;
	});

	const computedTabIndex = computed<number | undefined>(() => {
		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}

		if (props.disabled || props.isLoading) {
			return -1;
		}

		return undefined;
	});

	const componentCursorState = computed<string>(() => {
		if (props.disabled) {
			return 'not-allowed';
		}

		if (props.isLoading) {
			return 'wait';
		}

		return 'pointer';
	});

	const textFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoFontSize.xs;
			case BoSize.small:
				return BoFontSize.sm;
			case BoSize.large:
				return BoFontSize.lg;
			case BoSize.extra_large:
				return BoFontSize.xl;
			case BoSize.default:
			default:
				return BoFontSize.default;
		}
	});

	const loadingSpinnerSize = computed<BoSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoSize.extra_small;
			case BoSize.large:
			case BoSize.extra_large:
				return BoSize.default;
			case BoSize.small:
			case BoSize.default:
			default:
				return BoSize.small;
		}
	});

	const iconSize = computed<number>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return 12;
			case BoSize.small:
				return 14;
			case BoSize.large:
				return 20;
			case BoSize.extra_large:
				return 24;
			case BoSize.default:
			default:
				return 16;
		}
	});

	const buttonStyle = computed<StyleValue>(() => {
		if (props.customColor) {
			const colorStyle = ColorService.instance.getValidCssColor(props.customColor);
			return {
				backgroundColor: colorStyle,
				borderColor: colorStyle,
			};
		}
		return {};
	});

	const componentBaseClasses = computed<ConditionalCssProperties>(() => ({
		'bo-button': true,
		'bo-button--loading': props.isLoading,
		'bo-button--full-width': props.fullWidth,
		'bo-button--disabled': props.disabled || props.isLoading,
		[`bo-button--size-${props.size}`]: true,
		[`bo-button--variant-${props.variant}`]: true,
	}));

	const buttonClasses = computed<HTMLAttributes['class']>(() => {
		return [componentBaseClasses.value, props.customCssClass];
	});
</script>

<style scoped lang="scss">
	button {
		margin: 0;
		padding: 0;
		border: none;
		color: inherit;
		cursor: pointer;
		text-align: center;
		box-sizing: border-box;
		vertical-align: middle;
		transition:
			background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out,
			color 0.15s ease-in-out;
	}

	.bo-button {
		user-select: none;
		align-items: center;
		display: inline-flex;
		justify-content: center;
		border: 1px solid transparent;

		&:focus-visible {
			outline: 2px solid var(--button-focus-ring);
			outline-offset: 2px;
		}

		&--full-width {
			width: 100%;
		}

		&--disabled {
			opacity: 0.5;
			cursor: not-allowed;
			pointer-events: none;
		}

		&--loading {
			cursor: wait;
		}

		&__loader {
			margin-right: 0.5rem;
		}

		&__content {
			display: inline-flex;
			align-items: center;
			gap: inherit;
		}

		&__icon {
			display: inline-flex;
			align-items: center;
		}

		&--variant-primary {
			color: var(--button-text-primary);
			background-color: var(--button-bg-primary);
			border-color: var(--button-border-primary);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-primary-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-primary-active);
			}
		}

		&--variant-secondary {
			color: var(--button-text-secondary);
			background-color: var(--button-bg-secondary);
			border-color: var(--button-border-secondary);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-secondary-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-secondary-active);
			}
		}

		&--variant-success {
			color: var(--button-text-success);
			background-color: var(--button-bg-success);
			border-color: var(--button-border-success);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-success-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-success-active);
			}
		}

		&--variant-warning {
			color: var(--button-text-warning);
			background-color: var(--button-bg-warning);
			border-color: var(--button-border-warning);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-warning-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-warning-active);
			}
		}

		&--variant-danger {
			color: var(--button-text-danger);
			background-color: var(--button-bg-danger);
			border-color: var(--button-border-danger);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-danger-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-danger-active);
			}
		}

		&--variant-light {
			color: var(--button-text-light);
			background-color: var(--button-bg-light);
			border-color: var(--button-border-light);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-light-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-light-active);
			}
		}

		&--variant-dark {
			color: var(--button-text-dark);
			background-color: var(--button-bg-dark);
			border-color: var(--button-border-dark);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-dark-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-dark-active);
			}
		}

		&--size-extra-small {
			height: 1.75rem;
			padding: 0 0.5rem;
			border-radius: 0.25rem;
			gap: 0.25rem;
		}

		&--size-small {
			height: 2rem;
			padding: 0 0.75rem;
			border-radius: 0.375rem;
			gap: 0.375rem;
		}

		&--size-default {
			height: 2.5rem;
			padding: 0 1rem;
			border-radius: 0.375rem;
			gap: 0.5rem;
		}

		&--size-large {
			height: 3rem;
			padding: 0 1.25rem;
			border-radius: 0.5rem;
			gap: 0.5rem;
		}

		&--size-extra-large {
			height: 3.5rem;
			padding: 0 1.5rem;
			border-radius: 0.5rem;
			gap: 0.625rem;
		}
	}
</style>
