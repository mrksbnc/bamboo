<template>
	<div
		role="status"
		:class="[defaultClasses, textPosition === 'side' ? 'flex-row' : 'flex-col']"
	>
		<span
			:class="[loaderTailwindCssSizeClasses, 'relative flex']"
			role="status"
		>
			<span
				role="status"
				:style="customColorStyle"
				:class="[tailwindCssVariantClasses, defaultOuterPulseAbsoluteClasses]"
			></span>
			<span
				role="status"
				:class="[
					loaderTailwindCssSizeClasses,
					tailwindCssShiftedVariantClasses,
					defaultInnerPulseRelativeClasses,
				]"
				:style="customColorStyle"
			></span>
		</span>
		<span v-if="displayLoaderText">
			<bo-text
				role="text"
				:text="loaderText ?? ''"
				:color="BoTextColor.secondary"
				:font-family="BoFontFamily.graphik"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontFamily, BoText, BoTextColor } from '@/components/bo_text';
import { BoSize } from '@/data/bo_size.constant';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/data/loader.constant';
import { StringUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import type { BoLoadingPulseProps } from './types';

const props = withDefaults(defineProps<BoLoadingPulseProps>(), {
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
});

const { size, variant, loaderText, customColor } = toRefs(props);

const defaultClasses =
	/*tw*/ 'flex h-full w-full content-center items-center justify-center gap-2';

const defaultOuterPulseAbsoluteClasses =
	/*tw*/ 'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75';

const defaultInnerPulseRelativeClasses =
	/*tw*/ 'relative inline-flex rounded-full';

const displayLoaderText = computed<boolean>(() => {
	return !StringUtils.isEmptyStr(loaderText.value ?? '');
});

const loaderTailwindCssSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'size-2';
		case BoSize.small:
			return /*tw*/ 'size-3';
		case BoSize.large:
			return /*tw*/ 'size-5';
		case BoSize.extra_large:
			return /*tw*/ 'size-7';
		case BoSize.default:
		default:
			return /*tw*/ 'size-4';
	}
});

const customColorStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(customColor.value ?? '')) {
		return {
			backgroundColor: customColor.value,
		};
	}

	return {};
});

const tailwindCssVariantClasses = computed<string>(() => {
	if (!StringUtils.isEmptyStr(customColor.value ?? '')) {
		return '';
	}

	switch (variant.value) {
		case BoLoaderVariant.secondary:
			return /*tw*/ 'bg-gray-600';
		case BoLoaderVariant.danger:
			return /*tw*/ 'bg-red-600';
		case BoLoaderVariant.warning:
			return /*tw*/ 'bg-yellow-600';
		case BoLoaderVariant.success:
			return /*tw*/ 'bg-green-600';
		case BoLoaderVariant.dark:
			return /*tw*/ 'bg-black';
		case BoLoaderVariant.white:
			return /*tw*/ 'bg-white';
		case BoLoaderVariant.primary:
		default:
			return /*tw*/ 'bg-blue-600';
	}
});

const tailwindCssShiftedVariantClasses = computed<string>(() => {
	switch (variant.value) {
		case BoLoaderVariant.secondary:
			return /*tw*/ 'bg-gray-500';
		case BoLoaderVariant.danger:
			return /*tw*/ 'bg-red-500';
		case BoLoaderVariant.warning:
			return /*tw*/ 'bg-yellow-500';
		case BoLoaderVariant.success:
			return /*tw*/ 'bg-green-500';
		case BoLoaderVariant.dark:
			return /*tw*/ 'bg-black';
		case BoLoaderVariant.white:
			return /*tw*/ 'bg-white';
		case BoLoaderVariant.primary:
		default:
			return /*tw*/ 'bg-blue-500';
	}
});
</script>
