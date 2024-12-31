<template>
	<hr :class="dividerClasses" />
</template>

<script setup lang="ts">
import { TailwindUtils } from '@/utils'
import { computed, toRefs } from 'vue'
import { BoDividerType, BoDividerVariant } from './constants'
import type { BoDividerProps } from './types'

const props = withDefaults(defineProps<BoDividerProps>(), {
	variant: () => BoDividerVariant.primary,
	type: () => BoDividerType.default,
})

const { variant, type } = toRefs(props)

const defaultDividerClasses = /*tw*/ 'my-2 w-full'

const tailwindCssColorClasses = computed<string>(() => {
	switch (variant.value) {
		case BoDividerVariant.primary:
			return /*tw*/ 'border-blue-600'
		case BoDividerVariant.secondary:
			return /*tw*/ 'border-gray-200'
		case BoDividerVariant.danger:
			return /*tw*/ 'border-red-600'
		case BoDividerVariant.warning:
			return /*tw*/ 'border-yellow-600'
		case BoDividerVariant.success:
			return /*tw*/ 'border-green-600'
		case BoDividerVariant.dark:
			return /*tw*/ 'border-black'
		default:
			return /*tw*/ 'border-gray-300'
	}
})

const tailwindCssTypeClasses = computed<string>(() => {
	switch (type.value) {
		case BoDividerType.dotted:
			return /*tw*/ 'border-t border-dotted'
		case BoDividerType.dashed:
			return /*tw*/ 'border-t border-dashed'
		case BoDividerType.default:
		default:
			return /*tw*/ 'border-t'
	}
})

const dividerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		defaultDividerClasses,
		tailwindCssColorClasses.value,
		tailwindCssTypeClasses.value,
	)
})
</script>
