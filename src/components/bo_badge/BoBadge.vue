<template>
	<span :class="classes">
		<span v-if="prefixIcon !== Icon.none || iconOnly || isCircle">
			<bo-icon
				:size="boBadgeIconSize"
				:icon="prefixOrIconOnlySrc"
				class="bo-badge__prefix-icon"
			/>
		</span>
		<bo-text
			v-if="renderLabel && label && !iconOnly && !isCircle"
			:text="label"
			:size="badgeFontSize"
			:weight="BoFontWeight.semibold"
			class="bo-badge__label"
		/>
		<span v-if="suffixIcon !== Icon.none && !iconOnly && !isCircle">
			<bo-icon
				:icon="suffixIcon"
				:size="boBadgeIconSize"
				class="bo-badge__suffix-icon"
			/>
		</span>
	</span>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text'
import { BoSize } from '@/shared/bo_size'
import { StringUtils, TailwindUtils } from '@/utils'
import { computed, toRefs } from 'vue'
import { BoBadgeShape, BoBadgeType, BoBadgeVariant, type BoBadgeProps } from './bo_badge'

const props = withDefaults(defineProps<BoBadgeProps>(), {
	type: () => BoBadgeType.default,
	size: () => BoSize.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoBadgeVariant.primary,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
})

const { label, type, size, variant, shape, prefixIcon, suffixIcon } = toRefs(props)

const containerClasses = {
	[BoBadgeShape.default]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-md shadow-sm',
	[BoBadgeShape.circle]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-full shadow-sm',
	[BoBadgeShape.pill]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-full shadow-sm',
	[BoBadgeShape.flat]:
		/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 rounded-none shadow-sm',
}

const variantClasses = {
	[BoBadgeType.default]: {
		[BoBadgeVariant.primary]:
			/*tw*/ 'bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800/50',
		[BoBadgeVariant.secondary]:
			/*tw*/ 'bg-neutral-50 text-neutral-800 border border-neutral-200 dark:bg-neutral-800/30 dark:text-neutral-200 dark:border-neutral-700/50',
		[BoBadgeVariant.danger]:
			/*tw*/ 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800/50',
		[BoBadgeVariant.warning]:
			/*tw*/ 'bg-yellow-50 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-800/50',
		[BoBadgeVariant.success]:
			/*tw*/ 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800/50',
		[BoBadgeVariant.light]:
			/*tw*/ 'bg-white text-neutral-800 border border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700',
		[BoBadgeVariant.dark]:
			/*tw*/ 'bg-neutral-800 text-white border border-neutral-700 dark:bg-black dark:text-white dark:border-neutral-800',
	},
	[BoBadgeType.outline]: {
		[BoBadgeVariant.primary]:
			/*tw*/ 'border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400',
		[BoBadgeVariant.secondary]:
			/*tw*/ 'border border-neutral-600 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400',
		[BoBadgeVariant.danger]:
			/*tw*/ 'border border-red-600 text-red-600 dark:border-red-500 dark:text-red-400',
		[BoBadgeVariant.warning]:
			/*tw*/ 'border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-400',
		[BoBadgeVariant.success]:
			/*tw*/ 'border border-green-600 text-green-600 dark:border-green-500 dark:text-green-400',
		[BoBadgeVariant.light]:
			/*tw*/ 'border border-neutral-400 text-neutral-400 dark:border-neutral-400 dark:text-neutral-300',
		[BoBadgeVariant.dark]:
			/*tw*/ 'border border-neutral-800 text-neutral-800 dark:border-white dark:text-white',
	},
	[BoBadgeType.filled]: {
		[BoBadgeVariant.primary]:
			/*tw*/ 'bg-blue-600 text-white border border-blue-700 dark:bg-blue-700 dark:border-blue-800 dark:text-white',
		[BoBadgeVariant.secondary]:
			/*tw*/ 'bg-neutral-600 text-white border border-neutral-700 dark:bg-neutral-700 dark:border-neutral-800 dark:text-white',
		[BoBadgeVariant.danger]:
			/*tw*/ 'bg-red-600 text-white border border-red-700 dark:bg-red-700 dark:border-red-800 dark:text-white',
		[BoBadgeVariant.warning]:
			/*tw*/ 'bg-yellow-500 text-white border border-yellow-600 dark:bg-yellow-600 dark:border-yellow-700 dark:text-white',
		[BoBadgeVariant.success]:
			/*tw*/ 'bg-green-600 text-white border border-green-700 dark:bg-green-700 dark:border-green-800 dark:text-white',
		[BoBadgeVariant.light]:
			/*tw*/ 'bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-200 dark:border-neutral-300 dark:text-neutral-800',
		[BoBadgeVariant.dark]:
			/*tw*/ 'bg-neutral-800 text-white border border-neutral-900 dark:bg-black dark:border-neutral-800 dark:text-white',
	},
}

const iconOnly = computed<boolean>(() => {
	return (
		(prefixIcon.value !== Icon.none || suffixIcon.value !== Icon.none) &&
		StringUtils.isEmptyStr(label.value)
	)
})

const prefixOrIconOnlySrc = computed<Icon>(() => {
	if (iconOnly.value) {
		return prefixIcon.value ?? suffixIcon.value ?? Icon.none
	}

	return prefixIcon.value ?? Icon.none
})

const isCircle = computed<boolean>(() => {
	return shape.value === BoBadgeShape.circle && iconOnly.value
})

const renderLabel = computed<boolean>(() => {
	return !StringUtils.isEmptyStr(label.value) && !iconOnly.value
})

const boBadgeVariantClasses = computed<string>(() => {
	return variantClasses[type.value][variant.value]
})

const boBadgeSizeClasses = computed<string>(() => {
	if (shape.value === BoBadgeShape.circle) {
		switch (size.value) {
			case BoSize.extra_small:
				return /*tw*/ 'p-0'
			case BoSize.small:
				return /*tw*/ 'p-0.5'
			case BoSize.default:
				return /*tw*/ 'p-0.75'
			case BoSize.large:
				return /*tw*/ 'p-1.25'
			case BoSize.extra_large:
				return /*tw*/ 'p-2'
			default:
				return /*tw*/ 'p-0.75'
		}
	}

	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'px-1 py-0'
		case BoSize.small:
			return /*tw*/ 'px-1.5 py-0.5'
		case BoSize.default:
			return /*tw*/ 'px-2 py-0.75'
		case BoSize.large:
			return /*tw*/ 'px-2.5 py-1'
		case BoSize.extra_large:
			return /*tw*/ 'px-3 py-1.5'
		default:
			return /*tw*/ 'px-2 py-0.75'
	}
})

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		/*tw*/ 'cursor-default',
		boBadgeSizeClasses.value,
		boBadgeVariantClasses.value,
		containerClasses[shape.value],
	)
})

const badgeFontSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
		case BoSize.default:
		default:
			return BoFontSize.xs
		case BoSize.large:
			return BoFontSize.base
		case BoSize.extra_large:
			return BoFontSize.lg
	}
})

const boBadgeIconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.small
		case BoSize.default:
		default:
			return BoSize.default
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.large
	}
})
</script>
