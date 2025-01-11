<template>
	<span :class="classes">
		<span v-if="prefixIcon !== Icon.none || iconOnly || isCircle">
			<bo-icon :size="boBadgeIconSize" :icon="preficOrIconOnlySrc" class="bo-badge__prefix-icon" />
		</span>
		<bo-text
			v-if="rederLabel && label != null && !iconOnly && !isCircle"
			:text="label"
			:size="badgeFontSize"
			:weight="BoFontWeight.semibold"
			class="bo-badge__label"
		/>
		<span v-if="suffixIcon !== Icon.none && !iconOnly && !isCircle">
			<bo-icon :icon="suffixIcon" :size="boBadgeIconSize" class="bo-badge__suffix-icon" />
		</span>
	</span>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import { BoSize } from '@/shared/bo_size';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant, type BoBadgeProps } from './bo_badge';

const props = withDefaults(defineProps<BoBadgeProps>(), {
	type: () => BoBadgeType.default,
	size: () => BoSize.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoBadgeVariant.primary,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
});

const { label, type, size, variant, shape, prefixIcon, suffixIcon } = toRefs(props);

const defaultClasses: string =
	/*tw*/ 'bo-badge flex items-center justify-center select-none gap-1.5';

const iconOnly = computed<boolean>(() => {
	return prefixIcon.value != null && StringUtils.isEmptyStr(label.value);
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
	return !StringUtils.isEmptyStr(label.value) && !iconOnly.value;
});

const boBadgeShapeClasses = computed<string>(() => {
	switch (shape.value) {
		case BoBadgeShape.pill:
		case BoBadgeShape.circle:
			return /*tw*/ 'rounded-full';
		case BoBadgeShape.default:
		default:
			return /*tw*/ 'rounded-md';
	}
});

const boBadgeVariantClasses = computed<string>(() => {
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

const boBadgeSizeClasses = computed<string>(() => {
	switch (isCircle.value) {
		case true:
			switch (size.value) {
				case BoSize.extra_small:
					return /*tw*/ 'w-[16px] h-[16px]';
				case BoSize.small:
					return /*tw*/ 'w-[20px] h-[20px]';
				case BoSize.default:
				default:
					return /*tw*/ 'w-[24px] h-[24px]';
				case BoSize.large:
					return /*tw*/ 'w-[28px] h-[28px]';
				case BoSize.extra_large:
					return /*tw*/ 'w-[32px] h-[32px]';
			}
		default:
			switch (size.value) {
				case BoSize.extra_small:
					return /*tw*/ 'h-[16px] px-1.5 max-w-fit';
				case BoSize.small:
					return /*tw*/ 'h-[20px] px-1.5 max-w-fit';
				case BoSize.default:
				default:
					return /*tw*/ 'h-[24px] px-1.5 max-w-fit';
				case BoSize.large:
					return /*tw*/ 'h-[28px] px-2 max-w-fit';
				case BoSize.extra_large:
					return /*tw*/ 'h-[32px] px-3 max-w-fit';
			}
	}
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		boBadgeSizeClasses.value,
		boBadgeShapeClasses.value,
		boBadgeVariantClasses.value,
	);
});

const badgeFontSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
		case BoSize.default:
		default:
			return BoFontSize.xs;
		case BoSize.large:
		case BoSize.extra_large:
			return BoFontSize.base;
	}
});

const boBadgeIconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.extra_small;
		case BoSize.default:
		default:
			return BoSize.small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.default;
	}
});
</script>
