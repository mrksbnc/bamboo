<template>
	<div
		role="status"
		:class="[defaultContainerClasses, textPosition === 'side' ? 'flex-row' : 'flex-col']"
	>
		<div
			:class="classes"
			:style="customColorStyle"
		></div>
		<span
			v-if="displayLoaderText || $slots.default"
			class="bo-loading-spinner__text"
		>
			<slot>
				<bo-text
					:size="BoFontSize.xs"
					:color="BoTextColor.secondary"
					:text="safeString(loaderText)"
					:font-family="BoFontFamily.sans"
				/>
			</slot>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontFamily, BoFontSize, BoText, BoTextColor } from '@/components/bo_text';
import { useString, useTailwind } from '@/composables';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo_loader';
import { BoSize } from '@/shared/bo_size';
import { computed, toRefs, type StyleValue } from 'vue';
import type { BoLoadingSpinnerProps } from './types';

const { merge } = useTailwind();
const { isEmptyStr, safeString } = useString();

const slots = defineSlots<{
	default?: () => unknown;
}>();

const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
});

const { size, variant, loaderText, customColor } = toRefs(props);

const defaultContainerClasses =
	/*tw*/ 'bo-loading-spinner__container flex h-full w-full content-center items-center justify-center gap-1';

const defaultClasses =
	/*tw*/ 'bo-loading-spinner__animation inline-flex animate-spin rounded-full border-[2px] border-current border-t-transparent';

const displayLoaderText = computed<boolean>(() => {
	return !isEmptyStr(loaderText.value);
});

const loaderTailwindCssSizeClasses = computed<string>(() => {
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
	if (!isEmptyStr(customColor.value)) {
		return {
			color: customColor.value,
		};
	}

	return {};
});

const tailwindCssVariantClasses = computed<string>(() => {
	if (!isEmptyStr(customColor.value)) {
		return '';
	}

	switch (variant.value) {
		case BoLoaderVariant.secondary:
			return /*tw*/ 'text-gray-600 dark:text-gray-400';
		case BoLoaderVariant.danger:
			return /*tw*/ 'text-red-600 dark:text-red-500';
		case BoLoaderVariant.warning:
			return /*tw*/ 'text-yellow-600 dark:text-yellow-500';
		case BoLoaderVariant.success:
			return /*tw*/ 'text-green-600 dark:text-green-500';
		case BoLoaderVariant.dark:
			return /*tw*/ 'text-black dark:text-white';
		case BoLoaderVariant.white:
			return /*tw*/ 'text-white dark:text-gray-300';
		case BoLoaderVariant.primary:
		default:
			return /*tw*/ 'text-blue-600 dark:text-blue-500';
	}
});

const classes = computed<string>(() => {
	return merge(defaultClasses, loaderTailwindCssSizeClasses.value, tailwindCssVariantClasses.value);
});
</script>
