<template>
	<span :class="classes">
		<span v-if="prefixIcon !== Icon.none || iconOnly || isCircle">
			<bo-icon :size="boBadgeIconSize" :icon="prefixOrIconOnlySrc" class="bo-badge__prefix-icon" />
		</span>
		<bo-text
			v-if="renderLabel && label != null && !iconOnly && !isCircle"
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

const containerClasses = {
	[BoBadgeShape.default]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center select-none gap-1.5 rounded-md shadow-md',
	[BoBadgeShape.circle]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center select-none gap-1.5 rounded-full shadow-md',
	[BoBadgeShape.pill]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center select-none gap-1.5 rounded-full shadow-md',
	[BoBadgeShape.flat]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center select-none gap-1.5 rounded-none shadow-md',
};

const variantClasses = {
	[BoBadgeType.default]: {
		[BoBadgeVariant.primary]:
			/*tw*/ 'bg-blue-100 text-blue-800 focus:ring-blue-100 border border-blue-200',
		[BoBadgeVariant.secondary]:
			/*tw*/ 'bg-gray-100 text-gray-800 focus:ring-gray-100 border border-gray-200',
		[BoBadgeVariant.danger]:
			/*tw*/ 'bg-red-100 text-red-800 focus:ring-red-100 border border-red-200',
		[BoBadgeVariant.warning]:
			/*tw*/ 'bg-yellow-100 text-yellow-800 focus:ring-yellow-100 border border-yellow-200',
		[BoBadgeVariant.success]:
			/*tw*/ 'bg-green-100 text-green-800 focus:ring-green-100 border border-green-200',
		[BoBadgeVariant.dark]: /*tw*/ 'bg-black focus:ring-black text-white border border-black',
	},
	[BoBadgeType.outline]: {
		[BoBadgeVariant.primary]: /*tw*/ 'border border-blue-600  focus:ring-blue-600 text-blue-600',
		[BoBadgeVariant.secondary]: /*tw*/ 'border border-gray-600 focus:ring-gray-600 text-gray-600',
		[BoBadgeVariant.danger]: /*tw*/ 'border border-red-600 focus:ring-red-600 text-red-600',
		[BoBadgeVariant.warning]:
			/*tw*/ 'border border-yellow-600 focus:ring-yellow-600 text-yellow-600',
		[BoBadgeVariant.success]: /*tw*/ 'border border-green-600 focus:ring-green-600 text-green-600',
		[BoBadgeVariant.dark]: /*tw*/ 'border border-black focus:ring-black text-black',
	},
};

const sizeClasses = {
	[BoBadgeShape.default]: {
		[BoSize.extra_small]: /*tw*/ 'px-1.5 py-0',
		[BoSize.small]: /*tw*/ 'px-2 py-0.5',
		[BoSize.default]: /*tw*/ 'px-2.5 py-1',
		[BoSize.large]: /*tw*/ 'px-3 py-1.5',
		[BoSize.extra_large]: /*tw*/ 'px-3.5 py-2.5',
	},
	[BoBadgeShape.pill]: {
		[BoSize.extra_small]: /*tw*/ 'px-1.5 py-0',
		[BoSize.small]: /*tw*/ 'px-2 py-0.5',
		[BoSize.default]: /*tw*/ 'px-2.5 py-1',
		[BoSize.large]: /*tw*/ 'px-3 py-1.5',
		[BoSize.extra_large]: /*tw*/ 'px-3.5 py-2.5',
	},
	[BoBadgeShape.flat]: {
		[BoSize.extra_small]: /*tw*/ 'px-1.5 py-0',
		[BoSize.small]: /*tw*/ 'px-2 py-0.5',
		[BoSize.default]: /*tw*/ 'px-2.5 py-1',
		[BoSize.large]: /*tw*/ 'px-3 py-1.5',
		[BoSize.extra_large]: /*tw*/ 'px-3.5 py-2.5',
	},
	[BoBadgeShape.circle]: {
		[BoSize.extra_small]: /*tw*/ 'p-0',
		[BoSize.small]: /*tw*/ 'p-0.5',
		[BoSize.default]: /*tw*/ 'p-1',
		[BoSize.large]: /*tw*/ 'p-1.5',
		[BoSize.extra_large]: /*tw*/ 'p-2.5',
	},
};

const iconOnly = computed<boolean>(() => {
	return (
		(prefixIcon.value !== Icon.none || suffixIcon.value !== Icon.none) &&
		StringUtils.isEmptyStr(label.value)
	);
});

const prefixOrIconOnlySrc = computed<Icon>(() => {
	if (iconOnly.value) {
		return prefixIcon.value ?? suffixIcon.value ?? Icon.none;
	}

	return prefixIcon.value ?? Icon.none;
});

const isCircle = computed<boolean>(() => {
	return shape.value === BoBadgeShape.circle && iconOnly.value;
});

const renderLabel = computed<boolean>(() => {
	return !StringUtils.isEmptyStr(label.value) && !iconOnly.value;
});

const boBadgeVariantClasses = computed<string>(() => {
	return variantClasses[type.value][variant.value];
});

const boBadgeSizeClasses = computed<string>(() => {
	return sizeClasses[shape.value][size.value];
});

const classes = computed<string>(() => {
	let container = containerClasses.default;

	if (shape.value === BoBadgeShape.circle) {
		container = containerClasses.circle;
	} else if (shape.value === BoBadgeShape.pill) {
		container = containerClasses.pill;
	} else if (shape.value === BoBadgeShape.flat) {
		container = containerClasses.flat;
	}

	return TailwindUtils.merge(
		/*tw*/ 'cursor-default',
		container,
		boBadgeSizeClasses.value,
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
			return BoSize.small;
		case BoSize.default:
		default:
			return BoSize.default;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.large;
	}
});
</script>
