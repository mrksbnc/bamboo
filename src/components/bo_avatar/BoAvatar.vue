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

const defaultAvatarSvg = new URL('../../assets/img/avatar.jpg', import.meta.url).href;

const containerClasses = {
	default: /*tw*/ 'bo-avatar inline-flex items-center justify-center overflow-hidden shadow-sm ',
};

const imageClasses = {
	size: 'h-full w-full',
};

const cursorClasses = {
	default: 'cursor-default',
	clickable: 'cursor-pointer hover:bg-opacity-80',
};

const avatarSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-8',
	[BoSize.small]: /*tw*/ 'size-9',
	[BoSize.default]: /*tw*/ 'size-10',
	[BoSize.large]: /*tw*/ 'size-11',
	[BoSize.extra_large]: /*tw*/ 'size-12',
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
		/*tw*/ 'bg-blue-600',
		/*tw*/ 'bg-green-600',
		/*tw*/ 'bg-red-600',
		/*tw*/ 'bg-yellow-600',
		/*tw*/ 'bg-purple-600',
		/*tw*/ 'bg-pink-600',
		/*tw*/ 'bg-teal-600',
		/*tw*/ 'bg-orange-600',
		/*tw*/ 'bg-cyan-600',
		/*tw*/ 'bg-sky-600',
		/*tw*/ 'bg-indigo-600',
		/*tw*/ 'bg-violet-600',
	];

	return `${colors[Math.floor(Math.random() * colors.length)]} text-white`;
}

function generateRandomOutlineColor(): string {
	const colors = [
		/*tw*/ 'border border-blue-600 text-blue-600',
		/*tw*/ 'border border-green-600 text-green-600',
		/*tw*/ 'border border-red-600 text-red-600',
		/*tw*/ 'border border-yellow-600 text-yellow-600',
		/*tw*/ 'border border-purple-600 text-purple-600',
		/*tw*/ 'border border-pink-600 text-pink-600',
		/*tw*/ 'border border-teal-600 text-teal-600',
		/*tw*/ 'border border-orange-600 text-orange-600',
		/*tw*/ 'border border-cyan-600 text-cyan-600',
		/*tw*/ 'border border-sky-600 text-sky-600',
		/*tw*/ 'border border-indigo-600 text-indigo-600',
		/*tw*/ 'border border-violet-600 text-violet-600',
	];

	return colors[Math.floor(Math.random() * colors.length)];
}
</script>
