<template>
	<div
		:class="avatarContainerClasses"
		:style="containerStyle"
	>
		<span
			v-if="showDefaultAvatar"
			class="bo-avatar__default relative overflow-hidden"
		>
			<img
				:src="defaultAvatarSrc"
				alt="avatar"
				class="h-full w-full object-cover"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.initials && !StringUtils.isEmptyStr(data.label)"
			class="bo-avatar__initials flex h-full w-full items-center justify-center"
		>
			<bo-text
				alt="avatar"
				:size="labelSize"
				:clickable="clickable"
				:custom-color="fontColorHex"
				:weight="BoFontWeight.medium"
				:text="StringUtils.safeString(data.label)"
				:class="textColorClass"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.image && data.src !== undefined"
			class="bo-avatar__unknown relative h-full w-full overflow-hidden"
		>
			<img
				:src="data.src"
				:alt="data.alt ?? 'avatar'"
				class="h-full w-full object-cover"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text'
import { BoSize } from '@/shared'
import { StringUtils, TailwindUtils } from '@/utils'
import { computed, toRefs, type StyleValue } from 'vue'
import { BoAvatarShape, BoAvatarType, BoAvatarVariant, type BoAvatarProps } from './bo_avatar'

const props = withDefaults(defineProps<BoAvatarProps>(), {
	data: () => {
		return {
			alt: undefined,
			src: undefined,
			label: undefined,
		}
	},
	withDefaultImage: false,
	size: () => BoSize.default,
	type: () => BoAvatarType.initials,
	shape: () => BoAvatarShape.rounded,
	variant: () => BoAvatarVariant.primary,
})

const { clickable, data, type, shape, size, colorHex, withDefaultImage, fontColorHex, variant } =
	toRefs(props)

const defaultAvatarSrc = new URL('@/assets/img/avatar.jpg', import.meta.url).href

const containerClasses = {
	default: /*tw*/ 'bo-avatar relative inline-flex overflow-hidden',
}

const cursorClasses = {
	default: 'cursor-default',
	clickable: 'cursor-pointer hover:bg-opacity-80',
}

const avatarSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'w-6 h-6',
	[BoSize.small]: /*tw*/ 'w-8 h-8',
	[BoSize.default]: /*tw*/ 'w-10 h-10',
	[BoSize.large]: /*tw*/ 'w-20 h-20',
	[BoSize.extra_large]: /*tw*/ 'w-36 h-36',
}

const avatarShapeClasses = {
	[BoAvatarShape.circle]: /*tw*/ 'rounded-full',
	[BoAvatarShape.rounded]: /*tw*/ 'rounded-md',
	[BoAvatarShape.flat]: /*tw*/ 'rounded-none',
	[BoAvatarShape.outline_circle]: /*tw*/ 'rounded-full',
	[BoAvatarShape.outline_rounded]: /*tw*/ 'rounded-md',
	[BoAvatarShape.outline_flat]: /*tw*/ 'rounded-none',
}

const variantColors = {
	[BoAvatarVariant.primary]: /*tw*/ 'bg-blue-600 dark:bg-blue-700 text-white',
	[BoAvatarVariant.secondary]: /*tw*/ 'bg-gray-400 dark:bg-gray-700 text-white',
	[BoAvatarVariant.danger]: /*tw*/ 'bg-red-600 dark:bg-red-700 text-white',
	[BoAvatarVariant.warning]: /*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
	[BoAvatarVariant.success]: /*tw*/ 'bg-green-600 dark:bg-green-700 text-white',
	[BoAvatarVariant.dark]: /*tw*/ 'bg-black dark:bg-black text-white',
}

const outlineVariantColors = {
	[BoAvatarVariant.primary]:
		/*tw*/ 'border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
	[BoAvatarVariant.secondary]:
		/*tw*/ 'border border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
	[BoAvatarVariant.danger]:
		/*tw*/ 'border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
	[BoAvatarVariant.warning]:
		/*tw*/ 'border border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
	[BoAvatarVariant.success]:
		/*tw*/ 'border border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
	[BoAvatarVariant.dark]:
		/*tw*/ 'border border-black text-black dark:border-neutral-700 dark:text-neutral-300',
}

const variantTextColors = {
	[BoAvatarVariant.primary]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.secondary]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.danger]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.warning]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.success]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.dark]: /*tw*/ 'text-white dark:text-white',
}

const outlineVariantTextColors = {
	[BoAvatarVariant.primary]: /*tw*/ 'text-blue-600 dark:text-blue-500',
	[BoAvatarVariant.secondary]: /*tw*/ 'text-gray-500 dark:text-neutral-300',
	[BoAvatarVariant.danger]: /*tw*/ 'text-red-600 dark:text-red-500',
	[BoAvatarVariant.warning]: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
	[BoAvatarVariant.success]: /*tw*/ 'text-green-600 dark:text-green-500',
	[BoAvatarVariant.dark]: /*tw*/ 'text-black dark:text-neutral-300',
}

const bgConstruct = computed<string>(() => {
	if (
		!StringUtils.isEmptyStr(colorHex.value) ||
		withDefaultImage.value ||
		type.value === BoAvatarType.image
	) {
		return /*tw*/ 'bg-transparent'
	}

	const isOutlineShape =
		shape.value === BoAvatarShape.outline_circle ||
		shape.value === BoAvatarShape.outline_rounded ||
		shape.value === BoAvatarShape.outline_flat

	if (isOutlineShape) {
		return variant.value in outlineVariantColors
			? outlineVariantColors[variant.value]
			: generateRandomOutlineColor()
	}

	return variant.value in variantColors ? variantColors[variant.value] : generateRandomColor()
})

const textColorClass = computed<string>(() => {
	if (!StringUtils.isEmptyStr(fontColorHex.value)) {
		return ''
	}

	const isOutlineShape =
		shape.value === BoAvatarShape.outline_circle ||
		shape.value === BoAvatarShape.outline_rounded ||
		shape.value === BoAvatarShape.outline_flat

	if (isOutlineShape && variant.value in outlineVariantTextColors) {
		return outlineVariantTextColors[variant.value]
	}

	if (variant.value in variantTextColors) {
		return variantTextColors[variant.value]
	}

	return 'text-gray-600 dark:text-gray-300'
})

const cursorClassConstruct = computed<string>(() => {
	return clickable.value ? cursorClasses.clickable : cursorClasses.default
})

const avatarContainerDefaultClasses = computed<string>(() => {
	return TailwindUtils.merge(
		bgConstruct.value,
		containerClasses.default,
		cursorClassConstruct.value,
		!shape.value.includes('outline') ? /*tw*/ 'shadow-sm dark:shadow-gray-800' : '',
	)
})

const showDefaultAvatar = computed<boolean>(() => {
	if (withDefaultImage.value) {
		return true
	}

	return data.value.src === undefined && StringUtils.isEmptyStr(data.value.label)
})

const labelSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.xs
		case BoSize.small:
			return BoFontSize.sm
		case BoSize.large:
			return BoFontSize.lg
		case BoSize.extra_large:
			return BoFontSize.xl
		case BoSize.default:
		default:
			return BoFontSize.base
	}
})

const containerStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(colorHex.value)) {
		return {
			backgroundColor: colorHex.value,
			color: fontColorHex.value,
		}
	}

	return {}
})

const avatarContainerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		avatarSizeClasses[size.value],
		avatarShapeClasses[shape.value],
		avatarContainerDefaultClasses.value,
	)
})

function generateRandomColor(): string {
	const colors = [
		/*tw*/ 'bg-blue-600 dark:bg-blue-700 text-white',
		/*tw*/ 'bg-gray-400 dark:bg-gray-700 text-white',
		/*tw*/ 'bg-red-600 dark:bg-red-700 text-white',
		/*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
		/*tw*/ 'bg-green-600 dark:bg-green-700 text-white',
		/*tw*/ 'bg-black dark:bg-black text-white',
	]

	return colors[Math.floor(Math.random() * colors.length)]
}

function generateRandomOutlineColor(): string {
	const colors = [
		/*tw*/ 'border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
		/*tw*/ 'border border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
		/*tw*/ 'border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
		/*tw*/ 'border border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
		/*tw*/ 'border border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
		/*tw*/ 'border border-black text-black dark:border-neutral-700 dark:text-neutral-300',
	]

	return colors[Math.floor(Math.random() * colors.length)]
}
</script>
