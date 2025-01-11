<template>
	<div role="status" :class="[defaultClasses, textPosition === 'side' ? 'flex-row' : 'flex-col']">
		<span :class="['bo-loading-pulse__inner-pulse-relative', loaderSizeClasses, 'relative flex']">
			<span
				:style="customColorStyle"
				:class="[loaderPulseVariantClasses, defaultOuterPulseAbsoluteClasses]"
			></span>
			<span
				:class="[
					loaderSizeClasses,
					shiftedPulseLoaderVariantClasses,
					defaultInnerPulseRelativeClasses,
				]"
				:style="customColorStyle"
			></span>
		</span>
		<span v-if="displayLoaderText" class="bo-loading-pulse__text">
			<bo-text
				role="text"
				:color="BoTextColor.secondary"
				:font-family="BoFontFamily.sans"
				:text="StringUtils.safeString(loaderText)"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontFamily, BoText, BoTextColor } from '@/components/bo_text';
import { BoSize } from '@/shared/bo_size';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo_loader';
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
	/*tw*/ 'bo-loading-pulse__container flex h-full w-full content-center items-center justify-center gap-2';

const defaultOuterPulseAbsoluteClasses =
	/*tw*/ 'bo-loading-pulse__outer-pulse-absolute absolute inline-flex h-full w-full animate-ping rounded-full opacity-75';

const defaultInnerPulseRelativeClasses =
	/*tw*/ 'bo-loading-pulse__inner-pulse-relative relative inline-flex rounded-full';

const displayLoaderText = computed<boolean>(() => {
	return !StringUtils.isEmptyStr(loaderText.value);
});

const loaderSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'size-[8px]';
		case BoSize.small:
			return /*tw*/ 'size-[12px]';
		case BoSize.default:
		default:
			return /*tw*/ 'size-[16px]';
		case BoSize.large:
			return /*tw*/ 'size-[20px]';
		case BoSize.extra_large:
			return /*tw*/ 'size-[24px]';
	}
});

const customColorStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(customColor.value)) {
		return {
			backgroundColor: customColor.value,
		};
	}

	return {};
});

const loaderPulseVariantClasses = computed<string>(() => {
	if (!StringUtils.isEmptyStr(customColor.value)) {
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

const shiftedPulseLoaderVariantClasses = computed<string>(() => {
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
