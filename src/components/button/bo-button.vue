<template>
	<button
		:id="id"
		:type="type"
		:class="buttonClasses"
		:disabled="isDisabled"
		:autofocus="autofocus"
		:aria-busy="isLoading"
		:aria-disabled="isDisabled"
		:aria-label="computedAriaLabel"
		:data-testid="constructAttribute(id, 'button')"
	>
		<slot>
			<span
				:class="BUTTON_STYLE.layout.content"
				:data-testid="constructAttribute(id, 'button-content')"
			>
				<bo-icon
					v-if="renderPrefixIcon"
					:icon="prefixOrIconOnlyIcon"
					:size="iconSize"
					:class="BUTTON_STYLE.layout.prefixIcon"
					aria-hidden="true"
					:data-testid="constructAttribute(id, 'button-prefix-icon')"
				/>
				<bo-text
					v-if="renderLabel"
					:size="textSize"
					:color="BoTextColor.current"
					:weight="BoFontWeight.semibold"
					:class="BUTTON_STYLE.layout.label"
					:value="StringService.instance.safeString(label)"
					:cursor="isDisabled ? /*tw*/ 'cursor-not-allowed' : /*tw*/ 'cursor-pointer'"
					:data-testid="constructAttribute(id, 'button-label')"
				/>
				<bo-icon
					v-if="renderSuffixIcon"
					:icon="suffixIcon"
					:size="iconSize"
					:class="BUTTON_STYLE.layout.suffixIcon"
					aria-hidden="true"
					:data-testid="constructAttribute(id, 'button-suffix-icon')"
				/>
				<bo-loading-spinner
					v-if="isLoading && loaderType === BoLoaderType.spinner"
					:size="loaderSize"
					:variant="loaderVariant"
					:class="BUTTON_STYLE.layout.loader"
					aria-hidden="true"
					:data-testid="constructAttribute(id, 'button-loader')"
				/>
				<bo-loading-pulse
					v-if="isLoading && loaderType === BoLoaderType.pulse"
					:size="loaderSize"
					:variant="loaderVariant"
					:class="BUTTON_STYLE.layout.loader"
					aria-hidden="true"
					:data-testid="constructAttribute(id, 'button-loader')"
				/>
			</span>
		</slot>
	</button>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import BoLoadingPulse from '@/components/loading-pulse/bo-loading-pulse.vue';
import BoLoadingSpinner from '@/components/loading-spinner/bo-loading-spinner.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoLoaderType, BoLoaderVariant } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { HtmlButtonType } from '@/shared/html-button.js';
import { computed } from 'vue';
import { BoButtonShape, BoButtonVariant, type BoButtonProps } from './bo-button';

const props = withDefaults(defineProps<BoButtonProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	type: () => HtmlButtonType.button,
	shape: () => BoButtonShape.default,
	variant: () => BoButtonVariant.primary,
	loaderType: () => BoLoaderType.spinner,
});

const { constructAttribute } = useAttributes();

const BUTTON_STYLE = {
	layout: {
		container:
			/*tw*/ 'bo-button inline-flex items-center justify-center font-semibold transition-all duration-300',
		content: /*tw*/ 'bo-button__content flex items-center justify-center gap-2',
		prefixIcon: /*tw*/ 'bo-button__prefix-icon',
		suffixIcon: /*tw*/ 'bo-button__suffix-icon',
		label: /*tw*/ 'bo-button__label',
		loader: /*tw*/ 'bo-button__loader',
	},
	size: {
		container: {
			[BoSize.extra_small]: /*tw*/ 'bo-button--extra-small px-1.5 py-1 text-xs',
			[BoSize.small]: /*tw*/ 'bo-button--small px-2 py-1.5 text-sm',
			[BoSize.default]: /*tw*/ 'bo-button--default px-3 py-2 text-sm',
			[BoSize.large]: /*tw*/ 'bo-button--large px-4 py-2.5 text-base',
			[BoSize.extra_large]: /*tw*/ 'bo-button--extra-large px-5 py-3 text-lg',
		},
		iconOnly: {
			[BoSize.extra_small]: /*tw*/ 'bo-button--extra-small h-[26px] p-1.5',
			[BoSize.small]: /*tw*/ 'bo-button--small h-[32px] p-2',
			[BoSize.default]: /*tw*/ 'bo-button--default h-[38px] p-2.5',
			[BoSize.large]: /*tw*/ 'bo-button--large p-3',
			[BoSize.extra_large]: /*tw*/ 'bo-button--extra-large p-4',
		},
	},
	shape: {
		[BoButtonShape.default]: /*tw*/ 'bo-button--default rounded-md',
		[BoButtonShape.pill]: /*tw*/ 'bo-button--pill rounded-full',
		[BoButtonShape.outline]: /*tw*/ 'bo-button--outline rounded-md',
		[BoButtonShape.link]: /*tw*/ 'bo-button--link rounded-none',
	},
	variant: {
		[BoButtonShape.default]: {
			[BoButtonVariant.primary]:
				/*tw*/ 'bo-button--primary bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 dark:bg-blue-700 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600',
			[BoButtonVariant.secondary]:
				/*tw*/ 'bo-button--secondary bg-neutral-600 text-white border border-neutral-600 hover:bg-neutral-700 hover:border-neutral-700 active:bg-neutral-800 dark:bg-neutral-700 dark:border-neutral-700 dark:hover:bg-neutral-600 dark:hover:border-neutral-600',
			[BoButtonVariant.danger]:
				/*tw*/ 'bo-button--danger bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 active:bg-red-800 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-600 dark:hover:border-red-600',
			[BoButtonVariant.warning]:
				/*tw*/ 'bo-button--warning bg-yellow-500 text-white border border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-700 dark:bg-yellow-600 dark:border-yellow-600 dark:hover:bg-yellow-500 dark:hover:border-yellow-500',
			[BoButtonVariant.success]:
				/*tw*/ 'bo-button--success bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 active:bg-green-800 dark:bg-green-700 dark:border-green-700 dark:hover:bg-green-600 dark:hover:border-green-600',
			[BoButtonVariant.light]:
				/*tw*/ 'bo-button--light bg-neutral-100 text-neutral-800 border border-neutral-100 hover:bg-neutral-200 hover:border-neutral-200 active:bg-neutral-300 dark:bg-neutral-200 dark:border-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-100 dark:hover:border-neutral-100',
			[BoButtonVariant.dark]:
				/*tw*/ 'bo-button--dark bg-neutral-800 text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-900 active:bg-black dark:bg-black dark:border-black dark:hover:bg-neutral-800 dark:hover:border-neutral-800',
		},
		[BoButtonShape.pill]: {
			[BoButtonVariant.primary]:
				/*tw*/ 'bo-button--primary bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 dark:bg-blue-700 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600',
			[BoButtonVariant.secondary]:
				/*tw*/ 'bo-button--secondary bg-neutral-600 text-white border border-neutral-600 hover:bg-neutral-700 hover:border-neutral-700 active:bg-neutral-800 dark:bg-neutral-700 dark:border-neutral-700 dark:hover:bg-neutral-600 dark:hover:border-neutral-600',
			[BoButtonVariant.danger]:
				/*tw*/ 'bo-button--danger bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 active:bg-red-800 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-600 dark:hover:border-red-600',
			[BoButtonVariant.warning]:
				/*tw*/ 'bo-button--warning bg-yellow-500 text-white border border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 active:bg-yellow-700 dark:bg-yellow-600 dark:border-yellow-600 dark:hover:bg-yellow-500 dark:hover:border-yellow-500',
			[BoButtonVariant.success]:
				/*tw*/ 'bo-button--success bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 active:bg-green-800 dark:bg-green-700 dark:border-green-700 dark:hover:bg-green-600 dark:hover:border-green-600',
			[BoButtonVariant.light]:
				/*tw*/ 'bo-button--light bg-neutral-100 text-neutral-800 border border-neutral-100 hover:bg-neutral-200 hover:border-neutral-200 active:bg-neutral-300 dark:bg-neutral-200 dark:border-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-100 dark:hover:border-neutral-100',
			[BoButtonVariant.dark]:
				/*tw*/ 'bo-button--dark bg-neutral-800 text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-900 active:bg-black dark:bg-black dark:border-black dark:hover:bg-neutral-800 dark:hover:border-neutral-800',
		},
		[BoButtonShape.outline]: {
			[BoButtonVariant.primary]:
				/*tw*/ 'bo-button--outline bo-button--primary bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white',
			[BoButtonVariant.secondary]:
				/*tw*/ 'bo-button--outline bo-button--secondary bg-transparent border border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white active:bg-neutral-700 dark:border-neutral-500 dark:text-neutral-500 dark:hover:bg-neutral-500 dark:hover:text-white',
			[BoButtonVariant.danger]:
				/*tw*/ 'bo-button--outline bo-button--danger bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white',
			[BoButtonVariant.warning]:
				/*tw*/ 'bo-button--outline bo-button--warning bg-transparent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-700 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-white',
			[BoButtonVariant.success]:
				/*tw*/ 'bo-button--outline bo-button--success bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white active:bg-green-700 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white',
			[BoButtonVariant.light]:
				/*tw*/ 'bo-button--outline bo-button--light bg-transparent border border-neutral-500 text-neutral-500 hover:bg-neutral-500 hover:text-white active:bg-neutral-600 dark:border-neutral-400 dark:text-neutral-400 dark:hover:bg-neutral-400 dark:hover:text-neutral-900',
			[BoButtonVariant.dark]:
				/*tw*/ 'bo-button--outline bo-button--dark bg-transparent border border-black text-black hover:bg-black hover:text-white active:bg-neutral-800 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black',
		},
		[BoButtonShape.link]: {
			[BoButtonVariant.primary]:
				/*tw*/ 'bo-button--link bo-button--primary bg-transparent text-blue-600 hover:text-blue-700 hover:underline active:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400',
			[BoButtonVariant.secondary]:
				/*tw*/ 'bo-button--link bo-button--secondary bg-transparent text-neutral-600 hover:text-neutral-700 hover:underline active:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300',
			[BoButtonVariant.danger]:
				/*tw*/ 'bo-button--link bo-button--danger bg-transparent text-red-600 hover:text-red-700 hover:underline active:text-red-800 dark:text-red-500 dark:hover:text-red-400',
			[BoButtonVariant.warning]:
				/*tw*/ 'bo-button--link bo-button--warning bg-transparent text-yellow-600 hover:text-yellow-700 hover:underline active:text-yellow-800 dark:text-yellow-500 dark:hover:text-yellow-400',
			[BoButtonVariant.success]:
				/*tw*/ 'bo-button--link bo-button--success bg-transparent text-green-600 hover:text-green-700 hover:underline active:text-green-800 dark:text-green-500 dark:hover:text-green-400',
			[BoButtonVariant.light]:
				/*tw*/ 'bo-button--link bo-button--light bg-transparent text-neutral-500 hover:text-neutral-600 hover:underline active:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300',
			[BoButtonVariant.dark]:
				/*tw*/ 'bo-button--link bo-button--dark bg-transparent text-black hover:text-neutral-800 hover:underline active:text-neutral-700 dark:text-white dark:hover:text-neutral-200',
		},
	},
	state: {
		disabled:
			/*tw*/ 'bo-button--disabled disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
		loading: /*tw*/ 'bo-button--loading cursor-wait',
		fullWidth: /*tw*/ 'bo-button--full-width w-full',
	},
	appearance: {
		shadow: /*tw*/ 'shadow-sm hover:shadow-md',
		noShadow: /*tw*/ 'shadow-none',
	},
} as const;

const isDisabled = computed<boolean>(() => {
	return props.disabled || props.isLoading;
});

const iconOnly = computed<boolean>(() => {
	return (
		StringService.instance.isEmptyStr(props.label) &&
		(props.prefixIcon !== Icon.none || props.suffixIcon !== Icon.none)
	);
});

const renderPrefixIcon = computed<boolean>(() => {
	return (props.prefixIcon !== Icon.none || iconOnly.value) && !props.isLoading;
});

const renderSuffixIcon = computed<boolean>(() => {
	return props.suffixIcon !== Icon.none && !props.isLoading && !iconOnly.value;
});

const renderLabel = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.label) && !iconOnly.value;
});

const prefixOrIconOnlyIcon = computed<Icon>(() => {
	if (iconOnly.value) {
		return props.prefixIcon !== Icon.none ? props.prefixIcon : props.suffixIcon;
	}
	return props.prefixIcon;
});

const computedAriaLabel = computed<string>(() => {
	if (props.ariaLabel) {
		return props.ariaLabel;
	}

	if (props.label) {
		return props.label;
	}

	if (iconOnly.value) {
		return 'Button with icon';
	}

	return 'Button';
});

const sizeClasses = computed<string>(() => {
	if (iconOnly.value) {
		return BUTTON_STYLE.size.iconOnly[props.size];
	}
	return BUTTON_STYLE.size.container[props.size];
});

const variantClasses = computed<string>(() => {
	return BUTTON_STYLE.variant[props.shape][props.variant];
});

const shadowClasses = computed<string>(() => {
	if (props.shape === BoButtonShape.link) {
		return BUTTON_STYLE.appearance.noShadow;
	}
	return BUTTON_STYLE.appearance.shadow;
});

const buttonClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		sizeClasses.value,
		shadowClasses.value,
		variantClasses.value,
		BUTTON_STYLE.state.disabled,
		BUTTON_STYLE.layout.container,
		BUTTON_STYLE.shape[props.shape],
		props.isLoading ? BUTTON_STYLE.state.loading : '',
		props.fullWidth ? BUTTON_STYLE.state.fullWidth : '',
	);
});

const textSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return BoFontSize.xs;
		case BoSize.small:
			return BoFontSize.sm;
		case BoSize.large:
			return BoFontSize.base;
		case BoSize.extra_large:
			return BoFontSize.lg;
		case BoSize.default:
		default:
			return BoFontSize.sm;
	}
});

const iconSize = computed<BoSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.large;
		case BoSize.default:
		default:
			return BoSize.default;
	}
});

const loaderSize = computed<BoSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return BoSize.extra_small;
		case BoSize.small:
			return BoSize.small;
		case BoSize.large:
			return BoSize.default;
		case BoSize.extra_large:
			return BoSize.large;
		case BoSize.default:
		default:
			return BoSize.small;
	}
});

const loaderVariant = computed<BoLoaderVariant>(() => {
	if (props.shape === BoButtonShape.outline || props.shape === BoButtonShape.link) {
		switch (props.variant) {
			case BoButtonVariant.secondary:
				return BoLoaderVariant.secondary;
			case BoButtonVariant.danger:
				return BoLoaderVariant.danger;
			case BoButtonVariant.warning:
				return BoLoaderVariant.warning;
			case BoButtonVariant.success:
				return BoLoaderVariant.success;
			case BoButtonVariant.dark:
				return BoLoaderVariant.dark;
			case BoButtonVariant.primary:
			default:
				return BoLoaderVariant.primary;
		}
	}

	switch (props.variant) {
		case BoButtonVariant.light:
			return BoLoaderVariant.secondary;
		case BoButtonVariant.primary:
		case BoButtonVariant.secondary:
		case BoButtonVariant.danger:
		case BoButtonVariant.warning:
		case BoButtonVariant.success:
		case BoButtonVariant.dark:
		default:
			return BoLoaderVariant.white;
	}
});
</script>
