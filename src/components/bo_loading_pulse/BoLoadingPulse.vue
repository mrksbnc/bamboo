<template>
	<div
		role="status"
		class="flex flex-row items-center gap-4"
	>
		<span
			:style="customColorStyle"
			role="status"
			:class="classes"
			aria-label="loader"
		></span>

		<span v-if="displayLoaderText">
			<BoText
				role="status"
				aria-label="label"
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
import { BoLoaderVariant } from '@/data/loader.constant';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import type { BoLoadingPulseProps } from './bo_loading_pulse.type';

const props = withDefaults(defineProps<BoLoadingPulseProps>(), {
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
});

const { size, variant, loaderText, customColor } = toRefs(props);

const defaultClasses =
	/*tw*/ 'inline-flex h-full w-full animate-ping rounded-full opacity-75';

const displayLoaderText = computed<boolean>(() => {
	return !StringUtils.isEmpty(loaderText.value ?? '');
});

const loaderTailwindCssSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'h-2 w-2';
		case BoSize.small:
			return /*tw*/ 'h-3 w-3';
		case BoSize.large:
			return /*tw*/ 'h-5 w-5';
		case BoSize.extra_large:
			return /*tw*/ 'h-7 w-7';
		case BoSize.default:
		default:
			return /*tw*/ 'h-4 w-4';
	}
});

const customColorStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmpty(customColor.value ?? '')) {
		return {
			backgroundColor: customColor.value,
		};
	}

	return {};
});

const tailwindCssVariantClasses = computed<string>(() => {
	if (!StringUtils.isEmpty(customColor.value ?? '')) {
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

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		loaderTailwindCssSizeClasses.value,
		tailwindCssVariantClasses.value,
	);
});
</script>
