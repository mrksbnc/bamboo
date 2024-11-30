<template>
	<div
		role="status"
		:class="[
			defaultContainerClasses,
			textPosition === 'side' ? 'flex-row' : 'flex-col',
		]"
	>
		<div
			role="status"
			:class="classes"
			:style="customColorStyle"
		></div>
		<span v-if="displayLoaderText">
			<bo-text
				role="status"
				:text="loaderText ?? ''"
				:color="BoTextColor.disabled"
				:font-family="BoFontFamily.graphik"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontFamily, BoText, BoTextColor } from '@/components/bo_text';
import { BoSize } from '@/data/bo_size.constant';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/data/loader.constant';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import type { BoLoadingSpinnerProps } from './types';

const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
});

const { size, variant, loaderText, customColor } = toRefs(props);

const defaultContainerClasses =
	/*tw*/ 'flex h-full w-full content-center items-center justify-center gap-2';

const defaultClasses =
	/*tw*/ 'inline-block animate-spin rounded-full border-[2px] border-current border-t-transparent';

const displayLoaderText = computed<boolean>(() => {
	return !StringUtils.isEmptyStr(loaderText.value ?? '');
});

const loaderTailwindCssSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'w-2 h-2';
		case BoSize.small:
			return /*tw*/ 'w-3 h-3';
		case BoSize.extra_large:
			return /*tw*/ 'w-7 h-7';
		case BoSize.large:
			return /*tw*/ 'w-5 h-5';
		case BoSize.default:
		default:
			return /*tw*/ 'w-4 h-4';
	}
});

const customColorStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(customColor.value ?? '')) {
		return {
			color: customColor.value,
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
			return /*tw*/ 'text-gray-600';
		case BoLoaderVariant.danger:
			return /*tw*/ 'text-red-600';
		case BoLoaderVariant.warning:
			return /*tw*/ 'text-yellow-600';
		case BoLoaderVariant.success:
			return /*tw*/ 'text-green-600';
		case BoLoaderVariant.dark:
			return /*tw*/ 'text-black';
		case BoLoaderVariant.white:
			return /*tw*/ 'text-white';
		case BoLoaderVariant.primary:
		default:
			return /*tw*/ 'text-blue-600';
	}
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		loaderTailwindCssSizeClasses.value,
		tailwindCssVariantClasses.value,
	);
});
</script>
