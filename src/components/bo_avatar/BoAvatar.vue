<template>
	<div class="bo-avatar" :style="containerStyle" :class="containerClasses">
		<span v-if="showDefaultAvatar" class="bo-avatar__default">
			<img :src="defaultAvatarSvg" alt="avatar" :class="['bo-avatar__image', imgClasses]" />
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
			<img :src="data.src" :alt="data.alt ?? 'avatar'" :class="['bo-avatar__image', imgClasses]" />
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
	type: () => BoAvatarType.initials,
	size: () => BoSize.default,
	shape: () => BoAvatarShape.rounded,
});

const { clickable, data, type, shape, size, colorHex, withDefaultImage } = toRefs(props);

const defaultAvatarSvg = new URL('../../assets/img/avatar.png', import.meta.url).href;

const imgClasses = /*tw*/ 'h-full w-full';

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

const avatarSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'h-[24px] w-[24px]';
		case BoSize.small:
			return /*tw*/ 'h-[32px] w-[32px]';
		case BoSize.default:
		default:
			return /*tw*/ 'h-[42px] w-[42px]';
		case BoSize.large:
			return /*tw*/ 'h-[50px] w-[50px]';
		case BoSize.extra_large:
			return /*tw*/ 'h-[60px] w-[60px]';
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
		withDefaultImage.value || type.value === BoAvatarType.image ? /*tw*/ 'bg-transparent' : bg,
		clickable.value ? /*tw*/ 'cursor-pointer hover:bg-opacity-80' : /*tw*/ 'cursor-default',
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
