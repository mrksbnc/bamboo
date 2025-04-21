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
				alt="avatar"
				:src="defaultAvatarSrc"
				class="h-full w-full object-cover"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.initials && !StringService.instance.isEmptyStr(data.label)"
			class="bo-avatar__initials flex h-full w-full items-center justify-center"
		>
			<bo-text
				alt="avatar"
				:value="label"
				:size="labelSize"
				:clickable="clickable"
				:class="textColorClass"
				:weight="BoFontWeight.medium"
				:custom-color="color?.colorHex"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.image && data.src !== undefined"
			class="bo-avatar__image relative h-full w-full overflow-hidden"
		>
			<img
				:src="data.src"
				:alt="data.alt ?? 'avatar'"
				class="h-full w-full object-cover"
				@error="handleImageError"
			/>
		</span>
		<span
			v-if="withIndicator && indicator?.status !== BoAvatarIndicatorStatus.none"
			:class="indicatorClasses"
			class="status-indicator"
		></span>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo-text';
import { StringService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, ref, toRefs, type StyleValue } from 'vue';
import {
	BoAvatarIndicatorPosition,
	BoAvatarIndicatorStatus,
	BoAvatarShape,
	BoAvatarType,
	BoAvatarVariant,
	type BoAvatarProps,
} from './bo-avatar';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	withDefaultImage: false,
	size: () => BoSize.default,
	type: () => BoAvatarType.initials,
	shape: () => BoAvatarShape.rounded,
	variant: () => BoAvatarVariant.primary,
	data: () => ({
		src: undefined,
		label: undefined,
		alt: undefined,
	}),
});

const { clickable, data, type, shape, size, variant, indicator, color, withDefaultImage } =
	toRefs(props);

const defaultAvatarSrc = new URL('@/assets/img/avatar.png', import.meta.url).href;
const imgError = ref(false);

const containerClasses = {
	default: /*tw*/ 'bo-avatar relative inline-flex overflow-hidden',
};

const cursorClasses = {
	default: 'cursor-default',
	clickable: 'cursor-pointer hover:opacity-80',
};

const avatarSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'w-6 h-6',
	[BoSize.small]: /*tw*/ 'w-8 h-8',
	[BoSize.default]: /*tw*/ 'w-10 h-10',
	[BoSize.large]: /*tw*/ 'w-12 h-12',
	[BoSize.extra_large]: /*tw*/ 'w-36 h-36',
};

const avatarShapeClasses = {
	[BoAvatarShape.circle]: /*tw*/ 'rounded-full',
	[BoAvatarShape.rounded]: /*tw*/ 'rounded-md',
	[BoAvatarShape.flat]: /*tw*/ 'rounded-none',
	[BoAvatarShape.outline_circle]: /*tw*/ 'rounded-full border',
	[BoAvatarShape.outline_rounded]: /*tw*/ 'rounded-md border',
	[BoAvatarShape.outline_flat]: /*tw*/ 'rounded-none border',
};

const indicatorStatusClasses = {
	[BoAvatarIndicatorStatus.online]: /*tw*/ 'bg-green-500 ring-2 ring-white dark:ring-gray-800',
	[BoAvatarIndicatorStatus.offline]: /*tw*/ 'bg-gray-400 ring-2 ring-white dark:ring-gray-800',
	[BoAvatarIndicatorStatus.busy]: /*tw*/ 'bg-red-500 ring-2 ring-white dark:ring-gray-800',
	[BoAvatarIndicatorStatus.away]: /*tw*/ 'bg-yellow-500 ring-2 ring-white dark:ring-gray-800',
	[BoAvatarIndicatorStatus.none]: '',
};

const indicatorPositionClasses = {
	[BoAvatarIndicatorPosition.topLeft]: /*tw*/ 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
	[BoAvatarIndicatorPosition.topRight]: /*tw*/ 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
	[BoAvatarIndicatorPosition.bottomLeft]: /*tw*/ 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
	[BoAvatarIndicatorPosition.bottomRight]:
		/*tw*/ 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
};

const indicatorSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'w-2 h-2',
	[BoSize.small]: /*tw*/ 'w-2.5 h-2.5',
	[BoSize.default]: /*tw*/ 'w-3 h-3',
	[BoSize.large]: /*tw*/ 'w-4 h-4',
	[BoSize.extra_large]: /*tw*/ 'w-5 h-5',
};

const variantColors = {
	[BoAvatarVariant.primary]: /*tw*/ 'bg-blue-500 dark:bg-blue-700 text-white',
	[BoAvatarVariant.secondary]: /*tw*/ 'bg-gray-400 dark:bg-gray-700 text-white',
	[BoAvatarVariant.danger]: /*tw*/ 'bg-red-500 dark:bg-red-700 text-white',
	[BoAvatarVariant.warning]: /*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
	[BoAvatarVariant.success]: /*tw*/ 'bg-green-600 dark:bg-green-700 text-white',
	[BoAvatarVariant.dark]: /*tw*/ 'bg-black dark:bg-black text-white',
};

const outlineVariantColors = {
	[BoAvatarVariant.primary]:
		/*tw*/ 'bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
	[BoAvatarVariant.secondary]:
		/*tw*/ 'bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
	[BoAvatarVariant.danger]:
		/*tw*/ 'bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
	[BoAvatarVariant.warning]:
		/*tw*/ 'bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
	[BoAvatarVariant.success]:
		/*tw*/ 'bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
	[BoAvatarVariant.dark]:
		/*tw*/ 'bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
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
	const safeStr = StringService.instance.safeString(data.value.label);

	if (safeStr.length > 2) {
		return safeStr.slice(0, 2).toUpperCase();
	}

	return safeStr.toUpperCase();
});

const bgConstruct = computed<string>(() => {
	if (
		!StringService.instance.isEmptyStr(color.value?.bgColorHex) ||
		withDefaultImage.value ||
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

const withIndicator = computed<boolean>(() => {
	return !!indicator.value;
});

const indicatorClasses = computed<string>(() => {
	if (indicator.value?.status === BoAvatarIndicatorStatus.none) {
		return '';
	}

	return TailwindService.instance.merge(
		'absolute rounded-full shadow-sm',
		indicatorSizeClasses[size.value],
		indicatorStatusClasses[indicator.value?.status ?? BoAvatarIndicatorStatus.none],
		indicatorPositionClasses[indicator.value?.position ?? BoAvatarIndicatorPosition.bottomRight],
		'transition-all duration-200 ease-in-out',
	);
});

const cursorClassConstruct = computed<string>(() => {
	return clickable.value ? cursorClasses.clickable : cursorClasses.default;
});

const avatarContainerDefaultClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		bgConstruct.value,
		containerClasses.default,
		cursorClassConstruct.value,
		!shape.value.includes('outline') ? /*tw*/ 'shadow-sm dark:shadow-gray-800' : '',
	);
});

const showDefaultAvatar = computed<boolean>(() => {
	if (withDefaultImage.value || imgError.value) {
		return true;
	}

	return data.value.src === undefined && StringService.instance.isEmptyStr(data.value.label);
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

function handleImageError(e: Event) {
	imgError.value = true;
	if (withDefaultImage.value) {
		const imgElement = e.target as HTMLImageElement;
		imgElement.src = defaultAvatarSrc;
	}
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
