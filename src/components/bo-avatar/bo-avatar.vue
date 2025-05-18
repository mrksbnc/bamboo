<template>
	<div
		:id="id"
		:style="containerStyle"
		:class="avatarContainerClasses"
		:data-testid="`bo-avatar-${id}`"
	>
		<div
			v-if="showFallbackImage"
			class="bo-avatar__fallback-img flex items-center justify-center"
			:data-testid="`bo-avatar-image-${id}`"
		>
			<img
				alt="avatar"
				ref="fallbackImage"
				:src="DefaultAvatarSvg"
				class="'bo-avatar__image object-cover"
				:data-testid="`bo-avatar__image-${id}`"
				@error="handleImageError"
			/>
		</div>
		<div
			v-else-if="type === BoAvatarType.image"
			class="bo-avatar-image"
			:data-testid="`bo-avatar-image-${id}`"
		>
			<img
				ref="imageElement"
				:src="data?.src"
				:alt="data?.alt ?? 'avatar'"
				class="'bo-avatar__image object-cover"
				:data-testid="`bo-avatar__image-${id}`"
				@error="handleImageError"
			/>
		</div>
		<div
			v-else
			:class="['bo-avatar__initials flex items-center justify-center', textColorClass]"
			:data-testid="`bo-avatar__initials-${id}`"
		>
			<bo-text
				:value="label"
				:size="labelSize"
				:color="BoTextColor.current"
				:weight="BoFontWeight.medium"
				:data-testid="`bo-avatar__label-${id}`"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import DefaultAvatarSvg from '@/assets/img/avatar.png?url';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/bo-text/bo-text.js';
import BoText from '@/components/bo-text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, ref, toRefs, type StyleValue } from 'vue';
import { BoAvatarShape, BoAvatarType, BoAvatarVariant, type BoAvatarProps } from './bo-avatar.js';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	type: () => BoAvatarType.initials,
	shape: () => BoAvatarShape.rounded,
	variant: () => BoAvatarVariant.primary,
});

const { clickable, data, type, shape, size, variant, color } = toRefs(props);

const imgError = ref<boolean>(false);

const fallbackImage = ref<HTMLImageElement>();
const imageElement = ref<HTMLImageElement>();

const containerClasses = {
	default:
		/*tw*/ 'bo-avatar relative flex items-center justify-center overflow-hidden object-cover',
};

const cursorClasses = {
	default: 'cursor-default',
	clickable: 'cursor-pointer hover:opacity-80',
};

const avatarSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'bo-avatar--extra-small size-6',
	[BoSize.small]: /*tw*/ 'bo-avatar--small size-8',
	[BoSize.default]: /*tw*/ 'bo-avatar--default size-10',
	[BoSize.large]: /*tw*/ 'bo-avatar--large size-14',
	[BoSize.extra_large]: /*tw*/ 'bo-avatar--extra-large size-20',
};

const avatarShapeClasses = {
	[BoAvatarShape.circle]: /*tw*/ 'bo-avatar--circle rounded-full',
	[BoAvatarShape.rounded]: /*tw*/ 'bo-avatar--rounded rounded-md',
	[BoAvatarShape.flat]: /*tw*/ 'bo-avatar--flat rounded-none',
	[BoAvatarShape.outline_circle]: /*tw*/ 'bo-avatar--outline-circle rounded-full border',
	[BoAvatarShape.outline_rounded]: /*tw*/ 'bo-avatar--outline-rounded rounded-md border',
	[BoAvatarShape.outline_flat]: /*tw*/ 'bo-avatar--outline-flat rounded-none border',
};

const variantColors = {
	[BoAvatarVariant.primary]: /*tw*/ ' bo-avatar--primary bg-blue-500 dark:bg-blue-700 text-white',
	[BoAvatarVariant.secondary]:
		/*tw*/ ' bo-avatar--secondary bg-gray-400 dark:bg-gray-700 text-white',
	[BoAvatarVariant.danger]: /*tw*/ ' bo-avatar--danger bg-red-500 dark:bg-red-700 text-white',
	[BoAvatarVariant.warning]:
		/*tw*/ ' bo-avatar--warning bg-yellow-500 dark:bg-yellow-600 text-white',
	[BoAvatarVariant.success]: /*tw*/ ' bo-avatar--success bg-green-600 dark:bg-green-700 text-white',
	[BoAvatarVariant.dark]: /*tw*/ ' bo-avatar--dark bg-black dark:bg-black text-white',
};

const outlineVariantColors = {
	[BoAvatarVariant.primary]:
		/*tw*/ 'bo-avatar--outline-primary bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
	[BoAvatarVariant.secondary]:
		/*tw*/ 'bo-avatar--outline-secondary bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
	[BoAvatarVariant.danger]:
		/*tw*/ 'bo-avatar--outline-danger bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
	[BoAvatarVariant.warning]:
		/*tw*/ 'bo-avatar--outline-warning bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
	[BoAvatarVariant.success]:
		/*tw*/ 'bo-avatar--outline-success bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
	[BoAvatarVariant.dark]:
		/*tw*/ 'bo-avatar--outline-dark bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
};

const variantTextColors = {
	[BoAvatarVariant.primary]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.secondary]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.danger]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.warning]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.success]: /*tw*/ 'text-white dark:text-white',
	[BoAvatarVariant.dark]: /*tw*/ 'text-white dark:text-white',
};

const outlineVariantTextColors = {
	[BoAvatarVariant.primary]: /*tw*/ 'text-blue-500 dark:text-blue-400',
	[BoAvatarVariant.secondary]: /*tw*/ 'text-gray-500 dark:text-neutral-300',
	[BoAvatarVariant.danger]: /*tw*/ 'text-red-500 dark:text-red-400',
	[BoAvatarVariant.warning]: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
	[BoAvatarVariant.success]: /*tw*/ 'text-green-500 dark:text-green-400',
	[BoAvatarVariant.dark]: /*tw*/ 'text-black dark:text-neutral-300',
};

const label = computed<string>(() => {
	const safeStr = StringService.instance.safeString(data.value?.label);

	if (safeStr.length > 2) {
		return safeStr.slice(0, 2).toUpperCase();
	}

	return safeStr.toUpperCase();
});

const bgConstruct = computed<string>(() => {
	if (
		!StringService.instance.isEmptyStr(color.value?.bgColorHex) ||
		(type.value === BoAvatarType.image && !imgError.value)
	) {
		return /*tw*/ 'bg-transparent';
	}

	const isOutlineShape = shape.value.includes('outline');

	if (isOutlineShape) {
		return variant.value in outlineVariantColors
			? outlineVariantColors[variant.value]
			: generateRandomOutlineColor();
	}

	return variant.value in variantColors ? variantColors[variant.value] : generateRandomColor();
});

const textColorClass = computed<string>(() => {
	if (!StringService.instance.isEmptyStr(color.value?.colorHex)) {
		return '';
	}

	const isOutlineShape = shape.value.includes('outline');

	if (isOutlineShape && variant.value in outlineVariantTextColors) {
		return outlineVariantTextColors[variant.value];
	}

	if (variant.value in variantTextColors) {
		return variantTextColors[variant.value];
	}

	return 'text-gray-600 dark:text-gray-300';
});

const cursorClassConstruct = computed<string>(() => {
	return clickable.value ? cursorClasses.clickable : cursorClasses.default;
});

const avatarContainerDefaultClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		bgConstruct.value,
		containerClasses.default,
		cursorClassConstruct.value,
		!shape.value.includes('outline') ? /*tw*/ 'shadow-md' : 'shadow-none',
	);
});

const labelSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.xs;
		case BoSize.small:
			return BoFontSize.sm;
		case BoSize.large:
			return BoFontSize.lg;
		case BoSize.extra_large:
			return BoFontSize.xl;
		case BoSize.default:
		default:
			return BoFontSize.base;
	}
});

const containerStyle = computed<StyleValue>(() => {
	return {
		backgroundColor: color.value?.bgColorHex,
		color: color.value?.colorHex,
	};
});

const avatarContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		avatarSizeClasses[size.value],
		avatarShapeClasses[shape.value],
		avatarContainerDefaultClasses.value,
	);
});

const showFallbackImage = computed<boolean>(() => {
	const invalidImage = imgError.value || (!data.value?.src && type.value === BoAvatarType.image);
	const invalidInitials = !data.value?.label && type.value === BoAvatarType.initials;

	return !data.value || invalidImage || invalidInitials;
});

function handleImageError(e: Event) {
	imgError.value = true;

	if (imageElement.value) {
		imageElement.value.src = DefaultAvatarSvg;
	}

	console.error('Error loading image', e);
}

function generateRandomColor(): string {
	const colors = [
		/*tw*/ 'bg-blue-500 dark:bg-blue-600 text-white',
		/*tw*/ 'bg-gray-400 dark:bg-gray-600 text-white',
		/*tw*/ 'bg-red-500 dark:bg-red-600 text-white',
		/*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
		/*tw*/ 'bg-green-500 dark:bg-green-600 text-white',
		/*tw*/ 'bg-black dark:bg-black text-white',
	];

	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomOutlineColor(): string {
	const colors = [
		/*tw*/ 'bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
		/*tw*/ 'bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
		/*tw*/ 'bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
		/*tw*/ 'bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
		/*tw*/ 'bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
		/*tw*/ 'bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
	];

	return colors[Math.floor(Math.random() * colors.length)];
}
</script>
