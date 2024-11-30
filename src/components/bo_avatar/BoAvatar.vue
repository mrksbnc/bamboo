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
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs, type StyleValue } from 'vue';
import { BoAvatarShape, BoAvatarSize, BoAvatarType } from './constants';
import type { BoAvatarProps } from './types';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	type: () => BoAvatarType.initials,
	size: () => BoAvatarSize.default,
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
		imageData.value == null &&
		initialsData.value == null &&
		type.value === BoAvatarType.unknown
	);
});

const labelSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoAvatarSize.extra_small:
			return BoFontSize.extra_small;
		case BoAvatarSize.small:
			return BoFontSize.small;
		case BoAvatarSize.large:
			return BoFontSize.default;
		case BoAvatarSize.extra_large:
			return BoFontSize.body;
		case BoAvatarSize.default:
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

const tailwindCssSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoAvatarSize.extra_small:
			return /*tw*/ 'size-6';
		case BoAvatarSize.small:
			return /*tw*/ 'size-8';
		case BoAvatarSize.large:
			return /*tw*/ 'size-12';
		case BoAvatarSize.extra_large:
			return /*tw*/ 'size-14';
		case BoAvatarSize.default:
		default:
			return /*tw*/ 'size-10';
	}
});

const tailwindCssShapeClasses = computed<string>(() => {
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

const tailwindCssContainerDefaultClasses = computed<string>(() => {
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
		tailwindCssContainerDefaultClasses.value,
		tailwindCssShapeClasses.value,
		tailwindCssSizeClasses.value,
	);
});
</script>
