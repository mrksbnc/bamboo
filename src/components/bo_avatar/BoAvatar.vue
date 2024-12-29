<template>
	<div
		class="bo-avatar"
		:style="containerStyle"
		:class="containerClasses"
	>
		<span
			v-if="showDefaultAvatar"
			class="bo-avatar__default"
		>
			<img
				:src="defaultAvatarSvg"
				alt="avatar"
				:class="['bo-avatar__image', imgClasses]"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.initials && initialsData != null"
			class="bo-avatar__initials flex items-center justify-center"
		>
			<bo-text
				alt="avatar"
				:text="initialsData.initials"
				:custom-color="fontColorHex"
				:size="labelSize"
				:clickable="clickable"
			/>
		</span>
		<span
			v-else-if="type === BoAvatarType.image && imageData != null"
			class="bo-avatar__unknown"
		>
			<img
				:src="imageData.src"
				:alt="imageData.alt ?? 'avatar'"
				:class="['bo-avatar__image', imgClasses]"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoText } from '@/components/bo_text';
import { BoSize } from '@/data/bo_size.constant';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import { BoAvatarShape, BoAvatarType } from './constants';
import type { BoAvatarProps } from './types';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	type: () => BoAvatarType.initials,
	size: () => BoSize.default,
	shape: () => BoAvatarShape.rounded,
});

const {
	clickable,
	imageData,
	initialsData,
	type,
	shape,
	size,
	colorHex,
	withDefaultImage,
} = toRefs(props);

const defaultAvatarSvg = new URL('../../assets/img/avatar.png', import.meta.url)
	.href;

const imgClasses = /*tw*/ 'h-full w-full';

const showDefaultAvatar = computed<boolean>(() => {
	if (withDefaultImage.value) {
		return true;
	}

	return (
		!imageData.value &&
		!initialsData.value &&
		type.value === BoAvatarType.unknown
	);
});

const labelSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.extra_small;
		case BoSize.small:
			return BoFontSize.small;
		case BoSize.large:
			return BoFontSize.default;
		case BoSize.extra_large:
			return BoFontSize.body;
		case BoSize.default:
		default:
			return BoFontSize.default;
	}
});

const containerStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(colorHex.value ?? '')) {
		return {
			backgroundColor: colorHex.value,
		};
	}

	return {};
});

const avatarSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'size-6';
		case BoSize.small:
			return /*tw*/ 'size-8';
		case BoSize.large:
			return /*tw*/ 'size-12';
		case BoSize.extra_large:
			return /*tw*/ 'size-14';
		case BoSize.default:
		default:
			return /*tw*/ 'size-10';
	}
});

const avatarShapeClasses = computed<string>(() => {
	switch (shape.value) {
		case BoAvatarShape.circle:
			return /*tw*/ 'rounded-full';
		case BoAvatarShape.rounded:
			return /*tw*/ 'rounded-lg';
		case BoAvatarShape.square:
			return /*tw*/ 'rounded-none';
		default:
			return /*tw*/ 'rounded-full';
	}
});

const avatarContainerDefaultClasses = computed<string>(() => {
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

	const bg = colors[Math.floor(Math.random() * colors.length)];

	return TailwindUtils.merge(
		/*tw*/ 'flex items-center justify-center overflow-hidden shadow-sm text-white',
		withDefaultImage.value || type.value === BoAvatarType.image
			? /*tw*/ 'bg-transparent'
			: bg,
		clickable.value
			? /*tw*/ 'cursor-pointer hover:bg-opacity-80'
			: /*tw*/ 'cursor-default',
	);
});

const containerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		avatarContainerDefaultClasses.value,
		avatarShapeClasses.value,
		avatarSizeClasses.value,
	);
});
</script>
