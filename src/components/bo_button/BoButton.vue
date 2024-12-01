<template>
	<button
		:type="type"
		:class="buttonClasses"
		:disabled="disabled || isLoading"
		:aria-disabled="disabled || isLoading"
		:aria-readonly="isLoading || disabled"
	>
		<span
			:class="[
				'bo-button__content inline-flex items-center justify-center gap-2',
				buttonContentPaddingClasses,
			]"
		>
			<bo-icon
				v-if="
					prefixIcon !== Icon.none &&
					prefixIcon != null &&
					iconOnlyButton &&
					!isLoading
				"
				:icon="iconOnlyIcon"
				:size="size"
				class="bo-button__prefix-icon"
			/>
			<bo-text
				v-if="label != null && !iconOnlyButton"
				:text="label"
				:clickable="true"
				:weight="BoFontWeight.medium"
				:size="buttonContentSize"
				class="bo-button__label min-w-fit"
			/>
			<bo-icon
				v-if="
					suffixIcon !== Icon.none &&
					suffixIcon != null &&
					!isLoading &&
					!iconOnlyButton
				"
				:icon="suffixIcon"
				:size="size"
				class="bo-button__suffix-icon"
			/>
			<bo-loading-spinner
				v-if="isLoading"
				:size="loaderSize"
				:variant="loaderVariant"
				:loader-text="loaderText"
			/>
		</span>
	</button>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import { BoSize } from '@/data/bo_size.constant';
import { BoLoaderVariant } from '@/data/loader.constant';
import { HtmlButtonType } from '@/global/html_button';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import { BoButtonShape, BoButtonVariant } from './constants';
import type { BoButtonProps } from './types';

const props = withDefaults(defineProps<BoButtonProps>(), {
	loaderType: 'spinner',
	size: () => BoSize.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	type: () => HtmlButtonType.button,
	shape: () => BoButtonShape.default,
	variant: () => BoButtonVariant.primary,
});

const { label, type, variant, size, prefixIcon, suffixIcon, shape } =
	toRefs(props);

const defaultClasses: string =
	/*tw*/ 'bo-button inline-flex items-center justify-center cursor-pointer';

const disabledClasses: string =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none';

const iconOnlyButton = computed<boolean>(() => {
	return (
		!StringUtils.isEmptyStr(prefixIcon.value ?? '') &&
		StringUtils.isEmptyStr(label.value ?? '')
	);
});

const iconOnlyIcon = computed<Icon>(() => {
	if (iconOnlyButton.value) {
		return prefixIcon.value ?? suffixIcon.value ?? Icon.none;
	}

	if (prefixIcon.value != null) {
		return prefixIcon.value;
	}

	return Icon.none;
});

const buttonShapeClasses = computed<string>(() => {
	switch (shape.value) {
		case BoButtonShape.pill:
			return /*tw*/ 'rounded-full';
		case BoButtonShape.outline:
		case BoButtonShape.default:
		default:
			return /*tw*/ 'rounded-lg';
	}
});

const buttonVariantClasses = computed<string>(() => {
	switch (shape.value) {
		case BoButtonShape.outline:
			switch (variant.value) {
				case BoButtonVariant.primary:
					return /*tw*/ 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600 text-blue-600 hover:text-white';
				case BoButtonVariant.secondary:
					return /*tw*/ 'border border-gray-600 hover:bg-gray-400 focus:ring-gray-400 text-gray-400 hover:text-white';
				case BoButtonVariant.danger:
					return /*tw*/ 'border border-red-600 hover:bg-red-600 focus:ring-red-600 text-red-600 hover:text-white';
				case BoButtonVariant.warning:
					return /*tw*/ 'border border-yellow-500 hover:bg-yellow-500 focus:ring-yellow-500 text-yellow-500 hover:text-white';
				case BoButtonVariant.success:
					return /*tw*/ 'border border-green-600 hover:bg-green-600 focus:ring-green-600 text-green-600 hover:text-white';
				case BoButtonVariant.dark:
					return /*tw*/ 'border border-black hover:bg-black focus:ring-black text-black hover:text-white';
				case BoButtonVariant.link:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600';
				case BoButtonVariant.link_secondary:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600';
				case BoButtonVariant.link_danger:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 hover:text-red-700 focus:ring-red-600';
				case BoButtonVariant.link_warning:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-500 hover:text-yellow-700 focus:ring-yellow-500';
				case BoButtonVariant.link_success:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 hover:text-green-700 focus:ring-green-600';
				case BoButtonVariant.link_dark:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-black hover:text-black/50 focus:ring-black';
				default:
					return /*tw*/ 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600 text-blue-600 hover:text-white';
			}
		case BoButtonShape.pill:
		case BoButtonShape.default:
		default:
			switch (variant.value) {
				case BoButtonVariant.primary:
					return /*tw*/ 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white';
				case BoButtonVariant.secondary:
					return /*tw*/ 'bg-gray-400 hover:bg-gray-700 focus:ring-gray-400 text-white';
				case BoButtonVariant.danger:
					return /*tw*/ 'bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white';
				case BoButtonVariant.warning:
					return /*tw*/ 'bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 text-white';
				case BoButtonVariant.success:
					return /*tw*/ 'bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white';
				case BoButtonVariant.dark:
					return /*tw*/ 'bg-black hover:bg-black/50 focus:ring-black text-white';
				case BoButtonVariant.link:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600';
				case BoButtonVariant.link_secondary:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-gray-600 hover:text-gray-700 focus:ring-gray-600';
				case BoButtonVariant.link_danger:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 hover:text-red-700 focus:ring-red-600';
				case BoButtonVariant.link_warning:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-500 hover:text-yellow-700 focus:ring-yellow-500';
				case BoButtonVariant.link_success:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 hover:text-green-700 focus:ring-green-600';
				case BoButtonVariant.link_dark:
					return /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-black hover:text-black/50 focus:ring-black';
				default:
					return /*tw*/ 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white';
			}
	}
});

const buttonVariantShadowClasses = computed<string>(() => {
	switch (variant.value) {
		case BoButtonVariant.primary:
			return /*tw*/ 'shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80';
		case BoButtonVariant.secondary:
			return /*tw*/ 'shadow-sm shadow-gray-500/50 dark:shadow-sm dark:shadow-gray-800/80';
		case BoButtonVariant.danger:
			return /*tw*/ 'shadow-sm shadow-red-500/50 dark:shadow-sm dark:shadow-red-800/80';
		case BoButtonVariant.warning:
			return /*tw*/ 'shadow-sm shadow-yellow-500/50 dark:shadow-sm dark:shadow-yellow-800/80';
		case BoButtonVariant.success:
			return /*tw*/ 'shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80';
		case BoButtonVariant.dark:
			return /*tw*/ 'shadow-sm shadow-black-500/50 dark:shadow-sm dark:shadow-black-800/80';
		case BoButtonVariant.link:
		case BoButtonVariant.link_secondary:
		case BoButtonVariant.link_danger:
		case BoButtonVariant.link_warning:
		case BoButtonVariant.link_success:
		case BoButtonVariant.link_dark:
			return /*tw*/ 'shadow-none';
		default:
			return /*tw*/ 'shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80';
	}
});

const buttonClasses = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		disabledClasses,
		buttonShapeClasses.value,
		buttonVariantClasses.value,
		buttonVariantShadowClasses.value,
	);
});

const buttonContentSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.extra_small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoFontSize.body;
		case BoSize.small:
		case BoSize.default:
		default:
			return BoFontSize.small;
	}
});

const buttonContentPaddingClasses = computed<string>(() => {
	switch (iconOnlyButton.value) {
		case true:
			switch (size.value) {
				case BoSize.extra_small:
					return /*tw*/ 'p-1.5';
				case BoSize.small:
					return /*tw*/ 'p-2.5';
				case BoSize.default:
				default:
					return /*tw*/ 'p-2.5';
				case BoSize.large:
					return /*tw*/ 'p-3';
				case BoSize.extra_large:
					return /*tw*/ 'p-3.5';
			}
		default:
			switch (size.value) {
				case BoSize.extra_small:
					return /*tw*/ 'px-2.5 py-1.5';
				case BoSize.small:
					return /*tw*/ 'px-3 py-2.5';
				case BoSize.default:
				default:
					return /*tw*/ 'px-3.5 py-2.5';
				case BoSize.large:
					return /*tw*/ 'px-4 py-3';
				case BoSize.extra_large:
					return /*tw*/ 'px-5 py-3.5';
			}
	}
});

const loaderVariant = computed<BoLoaderVariant>(() => {
	switch (shape.value) {
		case BoButtonShape.outline:
			switch (variant.value) {
				case BoButtonVariant.primary:
					return BoLoaderVariant.primary;
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
				case BoButtonVariant.link:
				default:
					return BoLoaderVariant.primary;
			}
		case BoButtonShape.default:
		case BoButtonShape.pill:
		default:
			switch (variant.value) {
				case BoButtonVariant.link:
					return BoLoaderVariant.primary;
				case BoButtonVariant.primary:
				case BoButtonVariant.secondary:
				case BoButtonVariant.danger:
				case BoButtonVariant.warning:
				case BoButtonVariant.success:
				case BoButtonVariant.dark:
				default:
					return BoLoaderVariant.white;
			}
	}
});

const loaderSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.default;
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.small;
		case BoSize.default:
		default:
			return BoSize.default;
	}
});
</script>
