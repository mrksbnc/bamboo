<template>
	<button
		:id="id"
		:type="type"
		:disabled="disabled || isLoading"
		:role="role"
		:class="[componentBaseClasses, customCssClass]"
		:style="buttonStyle"
		:aria-live="ariaLive"
		:aria-label="computedAriaLabel"
		:data-testid="dataTestId"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:tabindex="computedTabIndex"
		@keydown="onKeyDown"
	>
		<slot>
			<div class="bo-button__content">
				<bo-loading-spinner
					v-if="isLoading && loaderType === BoLoaderType.spinner"
					:size="size"
					:variant="variant"
					:custom-container-css-class="'bo-button__loader'"
				/>
				<bo-loading-ring
					v-else-if="isLoading && loaderType === BoLoaderType.ring"
					:size="size"
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
	import { ColorService } from '@/services/color-service';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { BoLoaderType } from '@/shared/loader';
	import { BoSize } from '@/shared/size';
	import { BoVariant } from '@/shared/variant';
	import { computed, type StyleValue } from 'vue';
	import { BoButtonType, type BoButtonProps } from './bo-button';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-button'),
		size: BoSize.md,
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
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.sm;
			case BoSize.lg:
				return BoFontSize.lg;
			case BoSize.xl:
				return BoFontSize.xl;
			case BoSize.md:
			default:
				return BoFontSize.default;
		}
	});

	const iconSize = computed<number>(() => {
		switch (props.size) {
			case BoSize.xs:
				return 12;
			case BoSize.sm:
				return 14;
			case BoSize.lg:
				return 20;
			case BoSize.xl:
				return 24;
			case BoSize.md:
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

	function onKeyDown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ') {
			if (!props.disabled && !props.isLoading && props.type !== BoButtonType.submit) {
				event.preventDefault();
				emit('click', event as unknown as MouseEvent);
			}
		}
	}
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

		/* Variant styles - color tokens from components.css */
		&--variant-primary {
			background-color: var(--button-bg-primary);
			color: var(--button-text-primary);
			border-color: var(--button-border-primary);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-primary-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-primary-active);
			}
		}

		&--variant-secondary {
			background-color: var(--button-bg-secondary);
			color: var(--button-text-secondary);
			border-color: var(--button-border-secondary);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-secondary-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-secondary-active);
			}
		}

		&--variant-success {
			background-color: var(--button-bg-success);
			color: var(--button-text-success);
			border-color: var(--button-border-success);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-success-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-success-active);
			}
		}

		&--variant-warning {
			background-color: var(--button-bg-warning);
			color: var(--button-text-warning);
			border-color: var(--button-border-warning);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-warning-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-warning-active);
			}
		}

		&--variant-danger {
			background-color: var(--button-bg-danger);
			color: var(--button-text-danger);
			border-color: var(--button-border-danger);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-danger-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-danger-active);
			}
		}

		&--variant-light {
			background-color: var(--button-bg-light);
			color: var(--button-text-light);
			border-color: var(--button-border-light);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-light-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-light-active);
			}
		}

		&--variant-dark {
			background-color: var(--button-bg-dark);
			color: var(--button-text-dark);
			border-color: var(--button-border-dark);

			&:hover:not(.bo-button--disabled) {
				background-color: var(--button-bg-dark-hover);
			}

			&:active:not(.bo-button--disabled) {
				background-color: var(--button-bg-dark-active);
			}
		}

		/* Size variants */
		&--size-xs {
			height: 1.75rem; /* 28px - matches input xs */
			padding: 0 0.5rem;
			border-radius: 0.25rem;
			gap: 0.25rem;
		}

		&--size-sm {
			height: 2rem; /* 32px - matches input sm */
			padding: 0 0.75rem;
			border-radius: 0.375rem;
			gap: 0.375rem;
		}

		&--size-md {
			height: 2.5rem; /* 40px - matches input md */
			padding: 0 1rem;
			border-radius: 0.375rem;
			gap: 0.5rem;
		}

		&--size-lg {
			height: 3rem; /* 48px - matches input lg */
			padding: 0 1.25rem;
			border-radius: 0.5rem;
			gap: 0.5rem;
		}

		&--size-xl {
			height: 3.5rem; /* 56px - matches input xl */
			padding: 0 1.5rem;
			border-radius: 0.5rem;
			gap: 0.625rem;
		}
	}
</style>
