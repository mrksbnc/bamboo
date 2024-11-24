<template>
	<div
		role="status"
		class="flex flex-row items-center gap-4"
	>
		<div
			role="status"
			:class="classes"
			aria-label="loader"
			:style="customColorStyle"
		></div>
		<span v-if="displayLoaderText">
			<BoText
				role="status"
				:text="loaderText ?? ''"
				aria-label="label"
				:color="BoTextColor.disabled"
				:font-family="BoFontFamily.graphik"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoSize } from '@/data/bo_size.constant';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import { BoFontFamily, BoTextColor } from '../bo_text';
import BoText from '../bo_text/BoText.vue';
import { BoLoadingSpinnerVariant } from './bo_loading_spinner.constant';
import type { BoLoadingSpinnerProps } from './bo_loading_spinner.type';

const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
	size: () => BoSize.default,
	variant: () => BoLoadingSpinnerVariant.primary,
});

const { size, variant, loaderText, customColor } = toRefs(props);

const defaultClasses =
	/*tw*/ 'inline-block animate-spin rounded-full border-[2px] border-current border-t-transparent';

const displayLoaderText = computed<boolean>(() => {
	return !StringUtils.isEmpty(loaderText.value ?? '');
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
	if (!StringUtils.isEmpty(customColor.value ?? '')) {
		return {
			color: customColor.value,
		};
	}

	return {};
});

const tailwindCssVariantClasses = computed<string>(() => {
	if (!StringUtils.isEmpty(customColor.value ?? '')) {
		return '';
	}

	switch (variant.value) {
		case BoLoadingSpinnerVariant.secondary:
			return /*tw*/ 'text-gray-600';
		case BoLoadingSpinnerVariant.danger:
			return /*tw*/ 'text-red-600';
		case BoLoadingSpinnerVariant.warning:
			return /*tw*/ 'text-yellow-600';
		case BoLoadingSpinnerVariant.success:
			return /*tw*/ 'text-green-600';
		case BoLoadingSpinnerVariant.dark:
			return /*tw*/ 'text-black';
		case BoLoadingSpinnerVariant.white:
			return /*tw*/ 'text-white';
		case BoLoadingSpinnerVariant.primary:
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
