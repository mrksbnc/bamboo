<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:type="type"
		:role="role"
		:class="classes"
		:disabled="disabled"
		:tabindex="tabIndex"
		:style="buttonStyle"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			<div class="bo-button__content">
				<bo-loading-spinner
					v-if="isLoading && loaderType === BoLoaderType.spinner"
					:size="loadingSpinnerSize"
					:variant="loadingSpinnerVariant"
					custom-container-css-class="bo-button__loader"
				/>
				<bo-loading-ring
					v-else-if="isLoading && loaderType === BoLoaderType.ring"
					:size="loadingSpinnerSize"
					:variant="loadingSpinnerVariant"
					custom-container-css-class="bo-button__loader"
				/>
				<bo-icon
					v-if="prefixIcon && !isLoading"
					:icon="prefixIcon"
					:size="iconSize"
					:cursor="cursor"
					custom-css-class="bo-button__icon bo-button__icon--prefix"
				/>
				<bo-text
					v-if="label"
					:value="label"
					:font-size="fontSize"
					:cursor="cursor"
					:variant="BoTextVariant.inherit"
					:font-weight="BoFontWeight.semibold"
					custom-css-class="bo-button__label"
				/>
				<bo-icon
					v-if="suffixIcon"
					:icon="suffixIcon"
					:size="iconSize"
					:cursor="cursor"
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
	import { BoFontSize, BoFontWeight, BoTextVariant } from '@/components/bo-text/bo-text.js';
	import BoText from '@/components/bo-text/bo-text.vue';
	import {
		AriaLive,
		BoButtonVariant,
		BoLoaderType,
		BoSize,
		ColorService,
		IdentityService,
		type ConditionalCssProperties,
	} from '@bamboo/core';
	import { computed, type HTMLAttributes, type StyleValue } from 'vue';
	import { BoButtonType, type BoButtonProps } from './bo-button.js';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => IdentityService.instance.getComponentId(),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-button'),
		size: () => BoSize.default,
		variant: () => BoButtonVariant.primary,
		type: () => BoButtonType.button,
		loaderType: () => BoLoaderType.spinner,
		ariaLive: () => AriaLive.polite,
	});

	const ariaLabel = computed<string | undefined>(() => {
		if (props.ariaLabelledBy) {
			return undefined;
		}

		if (props.ariaLabel) {
			return props.ariaLabel;
		}

		if (props.label) {
			return props.label;
		}

		return undefined;
	});

	const tabIndex = computed<number | undefined>(() => {
		if (props.disabled || props.isLoading) {
			return -1;
		}

		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}

		return undefined;
	});

	const cursor = computed<string>(() => {
		if (props.disabled) {
			return 'not-allowed';
		}

		if (props.isLoading) {
			return 'wait';
		}

		return 'pointer';
	});

	const fontSize = computed<BoFontSize>(() => {
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

	const iconSize = computed<BoSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoSize.extra_small;
			case BoSize.large:
			case BoSize.extra_large:
				return BoSize.default;
			default:
			case BoSize.small:
			case BoSize.default:
				return BoSize.small;
		}
	});

	const loadingSpinnerVariant = computed<BoVariant>(() => {
		switch (props.variant) {
			case BoVariant.secondary:
				return BoVariant.secondary;
			case BoVariant.white:
				return BoVariant.white;
			case BoVariant.success:
			case BoVariant.warning:
			case BoVariant.danger:
			case BoVariant.black:
			case BoVariant.primary:
			default:
				return BoVariant.white;
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
		'bo-button--disabled': props.disabled,
		[`bo-button--size-${props.size}`]: true,
		'bo-button--full-width': props.fullWidth,
		[`bo-button--variant-${props.variant}`]: true,
	}));

	const classes = computed<HTMLAttributes['class']>(() => {
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
			opacity: 0.8;
			cursor: not-allowed;
		}

		&--loading {
			cursor: wait;
			opacity: 0.8;
		}

		&__content {
			gap: inherit;
			display: inline-flex;
			align-items: center;
		}

		&__icon {
			align-items: center;
			display: inline-flex;
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
			padding: 0 0.85rem;
			border-radius: 0.375rem;
			gap: 0.5rem;
		}

		&--size-large {
			height: 3rem;
			padding: 0 1rem;
			border-radius: 0.5rem;
			gap: 0.5rem;
		}

		&--size-extra-large {
			height: 3.5rem;
			padding: 0 1.25rem;
			border-radius: 0.5rem;
			gap: 0.625rem;
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

		&--variant-white {
			color: var(--button-text-white);
			background-color: var(--button-bg-white);
			border-color: var(--button-border-white);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-white-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-white-active);
			}
		}

		&--variant-black {
			color: var(--button-text-black);
			background-color: var(--button-bg-black);
			border-color: var(--button-border-black);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-black-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-black-active);
			}
		}
	}
</style>
