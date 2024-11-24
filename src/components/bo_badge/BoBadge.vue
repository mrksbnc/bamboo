<template>
	<span
		class="bo-badge"
		:class="classes"
	>
		<span v-if="prefixIcon !== Icon.none || iconOnly || isCircle">
			<bo-icon
				:size="boBadgeIconSize"
				:icon="preficOrIconOnlySrc"
			/>
		</span>
		<bo-text
			v-if="rederLabel && label != null && !iconOnly && !isCircle"
			:text="label"
			:size="badgeFontSize"
			:weight="BoFontWeight.medium"
		/>
		<span v-if="suffixIcon !== Icon.none && !iconOnly && !isCircle">
			<bo-icon
				:icon="suffixIcon"
				:size="boBadgeIconSize"
			/>
		</span>
	</span>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import { BoSize } from '@/data/bo_size.constant';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './constants';
import type { BoBadgeProps } from './types';

const props = withDefaults(defineProps<BoBadgeProps>(), {
	type: () => BoBadgeType.default,
	size: () => BoSize.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoBadgeVariant.primary,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
});

const { label, type, size, variant, shape, prefixIcon, suffixIcon } =
	toRefs(props);

const defaultClasses: string =
	/*tw*/ 'flex items-center justify-center select-none font-bold font-graphik gap-2 w-fit';

const iconOnly = computed<boolean>(() => {
	return prefixIcon.value != null && StringUtils.isEmpty(label.value ?? '');
});

const preficOrIconOnlySrc = computed<Icon>(() => {
	if (iconOnly.value) {
		return prefixIcon.value ?? suffixIcon.value ?? Icon.none;
	}

	return prefixIcon.value ?? Icon.none;
});

const isCircle = computed<boolean>(() => {
	return shape.value === BoBadgeShape.circle && iconOnly.value;
});

const rederLabel = computed<boolean>(() => {
	return !StringUtils.isEmpty(label.value ?? '') && !iconOnly.value;
});

const tailwindcssShapeClasses = computed<string>(() => {
	switch (shape.value) {
		case BoBadgeShape.pill:
		case BoBadgeShape.circle:
			return /*tw*/ 'rounded-full';
		case BoBadgeShape.default:
		default:
			return /*tw*/ 'rounded-lg';
	}
});

const tailwindcssVariantClasses = computed<string>(() => {
	switch (type.value) {
		case BoBadgeType.outline:
			switch (variant.value) {
				case BoBadgeVariant.primary:
				default:
					return /*tw*/ 'border border-blue-600  focus:ring-blue-600 text-blue-600';
				case BoBadgeVariant.secondary:
					return /*tw*/ 'border border-gray-600 focus:ring-gray-600 text-gray-600 ';
				case BoBadgeVariant.danger:
					return /*tw*/ 'border border-red-600 focus:ring-red-600 text-red-600 ';
				case BoBadgeVariant.warning:
					return /*tw*/ 'border border-yellow-600 focus:ring-yellow-600 text-yellow-600 ';
				case BoBadgeVariant.success:
					return /*tw*/ 'border border-green-600 focus:ring-green-600 text-green-600 ';
				case BoBadgeVariant.dark:
					return /*tw*/ 'border border-black focus:ring-black text-black ';
			}
		case BoBadgeType.default:
		default:
			switch (variant.value) {
				case BoBadgeVariant.primary:
				default:
					return /*tw*/ 'bg-blue-600 focus:ring-blue-600 text-white';
				case BoBadgeVariant.secondary:
					return /*tw*/ 'bg-gray-600 focus:ring-gray-600 text-white';
				case BoBadgeVariant.danger:
					return /*tw*/ 'bg-red-600 focus:ring-red-600 text-white';
				case BoBadgeVariant.warning:
					return /*tw*/ 'bg-yellow-600 focus:ring-yellow-600 text-white';
				case BoBadgeVariant.success:
					return /*tw*/ 'bg-green-600 focus:ring-green-600 text-white';
				case BoBadgeVariant.dark:
					return /*tw*/ 'bg-black focus:ring-black text-white';
			}
	}
});

const tailwindcssBadgePaddingClasses = computed<string>(() => {
	if (isCircle.value) {
		switch (size.value) {
			case BoSize.extra_small:
				return /*tw*/ 'p-1';
			case BoSize.small:
				return /*tw*/ 'p-1.5';
			case BoSize.default:
			default:
				return /*tw*/ 'p-2';
			case BoSize.large:
				return /*tw*/ 'p-3';
			case BoSize.extra_large:
				return /*tw*/ 'p-4';
		}
	} else {
		switch (size.value) {
			case BoSize.extra_small:
				return /*tw*/ 'px-1.5 py-1';
			case BoSize.small:
				return /*tw*/ 'px-2 py-1';
			case BoSize.default:
			default:
				return /*tw*/ 'px-3 py-1.5';
			case BoSize.large:
				return /*tw*/ 'px-4 py-2';
			case BoSize.extra_large:
				return /*tw*/ 'px-5 py-2.5';
		}
	}
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		tailwindcssShapeClasses.value,
		tailwindcssVariantClasses.value,
		tailwindcssBadgePaddingClasses.value,
	);
});

const badgeFontSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.extra_small;
		case BoSize.small:
		case BoSize.default:
		default:
			return BoFontSize.small;
		case BoSize.large:
			return BoFontSize.default;
		case BoSize.extra_large:
			return BoFontSize.body;
	}
});

const boBadgeIconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoSize.extra_small;
		case BoSize.small:
		case BoSize.default:
		default:
			return BoSize.small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.default;
	}
});
</script>
