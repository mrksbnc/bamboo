<template>
	<div
		:class="avatarContainerClasses"
		:style="containerStyle"
	>
		<span
			v-if="showDefaultAvatar"
			class="bo-avatar__default"
		>
			<img
				:src="defaultAvatarSvg"
				alt="avatar"
				:class="['bo-avatar__image', imageClasses.size]"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.initials && !StringUtils.isEmptyStr(data.label)"
			class="bo-avatar__initials flex items-center justify-center"
		>
			<bo-text
				alt="avatar"
				:size="labelSize"
				:clickable="clickable"
				:custom-color="fontColorHex"
				:weight="BoFontWeight.medium"
				:text="StringUtils.safeString(data.label)"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.image && data.src !== undefined"
			class="bo-avatar__unknown"
		>
			<img
				:src="data.src"
				:alt="data.alt ?? 'avatar'"
				:class="['bo-avatar__image', imageClasses.size]"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import { BoSize } from '@/shared';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import { BoAvatarShape, BoAvatarType, type BoAvatarProps } from './bo_avatar';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	data: () => {
		return {
			alt: undefined,
			src: undefined,
			label: undefined,
		};
	},
	withDefaultImage: false,
	size: () => BoSize.default,
	type: () => BoAvatarType.initials,
	shape: () => BoAvatarShape.rounded,
});

const { clickable, data, type, shape, size, colorHex, withDefaultImage } = toRefs(props);

const defaultAvatarSvg = new URL('@/assets/img/avatar.jpg', import.meta.url).href;

const containerClasses = {
	default:
		/*tw*/ 'bo-avatar inline-flex items-center justify-center overflow-hidden shadow-sm dark:shadow-gray-800',
};

const imageClasses = {
	size: 'h-full w-full',
};

const cursorClasses = {
	default: 'cursor-default',
	clickable: 'cursor-pointer hover:bg-opacity-80',
};

const avatarSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-5', // 20px
	[BoSize.small]: /*tw*/ 'size-7', // 28px
	[BoSize.default]: /*tw*/ 'size-9', // 36px
	[BoSize.large]: /*tw*/ 'size-11', // 44px
	[BoSize.extra_large]: /*tw*/ 'size-14', // 56px
};

const avatarShapeClasses = {
	[BoAvatarShape.circle]: /*tw*/ 'rounded-full',
	[BoAvatarShape.rounded]: /*tw*/ 'rounded-lg',
	[BoAvatarShape.flat]: /*tw*/ 'rounded-none',
	[BoAvatarShape.outline_circle]: /*tw*/ 'rounded-full',
	[BoAvatarShape.outline_rounded]: /*tw*/ 'rounded-lg',
	[BoAvatarShape.outline_flat]: /*tw*/ 'rounded-none',
};

const bgConstruct = computed<string>(() => {
	return withDefaultImage.value || type.value === BoAvatarType.image
		? /*tw*/ 'bg-transparent'
		: shape.value === BoAvatarShape.outline_circle ||
			  shape.value === BoAvatarShape.outline_rounded ||
			  shape.value === BoAvatarShape.outline_flat
			? generateRandomOutlineColor()
			: generateRandomColor();
});

const cursorClassConstruct = computed<string>(() => {
	return clickable.value ? cursorClasses.clickable : cursorClasses.default;
});

const avatarContainerDefaultClasses = computed<string>(() => {
	return TailwindUtils.merge(
		bgConstruct.value,
		containerClasses.default,
		cursorClassConstruct.value,
	);
});

const showDefaultAvatar = computed<boolean>(() => {
	if (withDefaultImage.value) {
		return true;
	}

	return data.value.src === undefined && StringUtils.isEmptyStr(data.value.label);
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
	if (!StringUtils.isEmptyStr(colorHex.value)) {
		return {
			backgroundColor: colorHex.value,
		};
	}

	return {};
});

const avatarContainerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		avatarSizeClasses[size.value],
		avatarShapeClasses[shape.value],
		avatarContainerDefaultClasses.value,
	);
});

function generateRandomColor(): string {
	const colors = [
		/*tw*/ 'bg-blue-600 dark:bg-blue-700',
		/*tw*/ 'bg-green-600 dark:bg-green-700',
		/*tw*/ 'bg-red-600 dark:bg-red-700',
		/*tw*/ 'bg-yellow-600 dark:bg-yellow-700',
		/*tw*/ 'bg-purple-600 dark:bg-purple-700',
		/*tw*/ 'bg-pink-600 dark:bg-pink-700',
		/*tw*/ 'bg-teal-600 dark:bg-teal-700',
		/*tw*/ 'bg-orange-600 dark:bg-orange-700',
		/*tw*/ 'bg-cyan-600 dark:bg-cyan-700',
		/*tw*/ 'bg-sky-600 dark:bg-sky-700',
		/*tw*/ 'bg-indigo-600 dark:bg-indigo-700',
		/*tw*/ 'bg-violet-600 dark:bg-violet-700',
	];

	return `${colors[Math.floor(Math.random() * colors.length)]} text-white`;
}

function generateRandomOutlineColor(): string {
	const colors = [
		/*tw*/ 'border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400',
		/*tw*/ 'border border-green-600 text-green-600 dark:border-green-500 dark:text-green-400',
		/*tw*/ 'border border-red-600 text-red-600 dark:border-red-500 dark:text-red-400',
		/*tw*/ 'border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-400',
		/*tw*/ 'border border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-400',
		/*tw*/ 'border border-pink-600 text-pink-600 dark:border-pink-500 dark:text-pink-400',
		/*tw*/ 'border border-teal-600 text-teal-600 dark:border-teal-500 dark:text-teal-400',
		/*tw*/ 'border border-orange-600 text-orange-600 dark:border-orange-500 dark:text-orange-400',
		/*tw*/ 'border border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-400',
		/*tw*/ 'border border-sky-600 text-sky-600 dark:border-sky-500 dark:text-sky-400',
		/*tw*/ 'border border-indigo-600 text-indigo-600 dark:border-indigo-500 dark:text-indigo-400',
		/*tw*/ 'border border-violet-600 text-violet-600 dark:border-violet-500 dark:text-violet-400',
	];

	return colors[Math.floor(Math.random() * colors.length)];
}
</script>
