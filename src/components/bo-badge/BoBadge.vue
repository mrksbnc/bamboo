<template>
	<span
		:class="classes"
		:data-testid="`bo-badge-${id}`"
	>
		<span v-if="renderPrefixIcon">
			<bo-icon
				:size="boBadgeIconSize"
				:icon="prefixOrIconOnlySrc"
				class="bo-badge__prefix-icon"
				:data-testid="`bo-badge-icon-${id}`"
			/>
		</span>
		<slot name="default">
			<span
				v-if="renderLabel && label && !iconOnly && !isCircle"
				class="bo-badge__label flex items-center justify-center"
				:data-testid="`bo-badge-text-${id}`"
			>
				<bo-text
					:value="label"
					:size="badgeFontSize"
					:weight="BoFontWeight.semibold"
				/>
			</span>
		</slot>
		<span v-if="icon?.suffix && renderSuffixIcon">
			<bo-icon
				:icon="icon.suffix"
				:size="boBadgeIconSize"
				class="bo-badge__suffix-icon"
				:data-testid="`bo-badge-icon-${id}`"
			/>
		</span>
	</span>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo-text';
import { IdentityService, StringService, TailwindService } from '@/services';
import { BoSize } from '@/shared/bo-size';
import { computed, toRefs } from 'vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant, type BoBadgeProps } from './bo-badge';

const slots = defineSlots<{
	default?: unknown;
}>();

const props = withDefaults(defineProps<BoBadgeProps>(), {
	id: () => IdentityService.instance.generateId(),
	type: () => BoBadgeType.default,
	size: () => BoSize.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoBadgeVariant.primary,
	icon: () => ({
		prefix: Icon.none,
		suffix: Icon.none,
	}),
});

const { label, type, size, variant, shape, icon } = toRefs(props);

const containerClasses = {
	[BoBadgeShape.default]:
		/*tw*/ 'bo-badge--default inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-md shadow-sm hover:shadow',
	[BoBadgeShape.circle]:
		/*tw*/ 'bo-badge--circle inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-full shadow-sm hover:shadow',
	[BoBadgeShape.pill]:
		/*tw*/ 'bo-badge--pill inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-full shadow-sm hover:shadow',
	[BoBadgeShape.flat]:
		/*tw*/ 'bo-badge--flat inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-none shadow-sm hover:shadow',
};

const variantClasses = {
	[BoBadgeType.default]: {
		[BoBadgeVariant.primary]:
			/*tw*/ 'bo-badge--primary bg-blue-600 text-white border border-blue-600 dark:bg-blue-700 dark:text-white',
		[BoBadgeVariant.secondary]:
			/*tw*/ ' bo-badge--secondary bg-neutral-600 text-white border border-neutral-600 dark:bg-neutral-700 dark:text-white',
		[BoBadgeVariant.danger]:
			/*tw*/ ' bo-badge--danger bg-red-600 text-white border border-red-600 dark:bg-red-700 dark:text-white',
		[BoBadgeVariant.warning]:
			/*tw*/ ' bo-badge--warning bg-yellow-500 text-white border border-yellow-500 dark:bg-yellow-600 dark:text-white',
		[BoBadgeVariant.success]:
			/*tw*/ 'bo-badge--success bg-green-600 text-white border border-green-600 dark:bg-green-700 dark:text-white',
		[BoBadgeVariant.light]:
			/*tw*/ 'bo-badge--light bg-neutral-100 text-neutral-800 border border-neutral-100 dark:bg-neutral-200 dark:border-neutral-200 dark:text-neutral-800',
		[BoBadgeVariant.dark]:
			/*tw*/ 'bo-badge--dark bg-neutral-800 text-white border border-neutral-800 dark:bg-black dark:text-white',
	},
	[BoBadgeType.outline]: {
		[BoBadgeVariant.primary]:
			/*tw*/ ' bo-badge--outline bo-badge--primary bg-transparent border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400',
		[BoBadgeVariant.secondary]:
			/*tw*/ ' bo-badge--outline bo-badge--secondary bg-transparent border border-neutral-600 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400',
		[BoBadgeVariant.danger]:
			/*tw*/ ' bo-badge--outline bo-badge--danger bg-transparent border border-red-600 text-red-600 dark:border-red-500 dark:text-red-400',
		[BoBadgeVariant.warning]:
			/*tw*/ ' bo-badge--outline bo-badge--warning bg-transparent border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-400',
		[BoBadgeVariant.success]:
			/*tw*/ ' bo-badge--outline bo-badge--success bg-transparent border border-green-600 text-green-600 dark:border-green-500 dark:text-green-400',
		[BoBadgeVariant.light]:
			/*tw*/ ' bo-badge--outline bo-badge--light bg-transparent border border-neutral-400 text-neutral-400 dark:border-neutral-400 dark:text-neutral-300',
		[BoBadgeVariant.dark]:
			/*tw*/ ' bo-badge--outline bo-badge--dark bg-transparent border border-black text-black dark:border-white dark:text-white',
	},
};

const iconOnly = computed<boolean>(() => {
	return (
		(icon?.value?.prefix !== Icon.none || icon?.value?.suffix !== Icon.none) &&
		StringService.instance.isEmptyStr(label.value)
	);
});

const prefixOrIconOnlySrc = computed<Icon>(() => {
	if (iconOnly.value) {
		return icon?.value?.prefix ?? icon?.value?.suffix ?? Icon.none;
	}

	return icon?.value?.prefix ?? Icon.none;
});

const isCircle = computed<boolean>(() => {
	return shape.value === BoBadgeShape.circle && iconOnly.value;
});

const renderPrefixIcon = computed<boolean>(() => {
	return (
		(!StringService.instance.isEmptyStr(icon?.value?.prefix) && icon.value.prefix !== Icon.none) ||
		iconOnly.value ||
		isCircle.value
	);
});

const renderSuffixIcon = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(icon?.value?.suffix) && icon.value.suffix !== Icon.none;
});

const renderLabel = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(label.value) && !iconOnly.value;
});

const boBadgeVariantClasses = computed<string>(() => {
	return variantClasses[type.value][variant.value];
});

const boBadgeSizeClasses = computed<string>(() => {
	if (shape.value === BoBadgeShape.circle) {
		switch (size.value) {
			case BoSize.extra_small:
				return /*tw*/ 'p-0';
			case BoSize.small:
				return /*tw*/ 'p-0.5';
			case BoSize.large:
				return /*tw*/ 'p-1';
			case BoSize.extra_large:
				return /*tw*/ 'p-1.5';
			case BoSize.default:
			default:
				return /*tw*/ 'p-1';
		}
	}

	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'px-1 py-0 text-xs rounded-md';
		case BoSize.small:
			return /*tw*/ 'px-1.5 py-0.5 text-xs rounded-md';
		case BoSize.large:
			return /*tw*/ 'px-2.5 py-1 text-sm rounded-md';
		case BoSize.extra_large:
			return /*tw*/ 'px-3 py-1.5 text-base rounded-md';
		default:
		case BoSize.default:
			return /*tw*/ 'px-2 py-1 text-sm rounded-md';
	}
});

const classes = computed<string>(() => {
	return TailwindService.instance.merge(
		/*tw*/ 'cursor-default',
		boBadgeSizeClasses.value,
		boBadgeVariantClasses.value,
		containerClasses[shape.value],
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
			return BoFontSize.base;
		case BoSize.extra_large:
			return BoFontSize.lg;
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
