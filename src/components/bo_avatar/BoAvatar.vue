<template>
	<div :class="['bo_avatar', containerClasses]">
		<img
			v-if="type === BoAvatarType.image"
			:src="imageSrc"
			:alt="imageAlt"
			class="bo_avatar__image"
		/>
		<span
			v-if="type === BoAvatarType.text"
			:about="textAlt"
			class="bo_avatar__initial"
		>
			{{ textValue }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, toRefs, computed } from 'vue';
import type { AvatarComponentProps } from './bo_avatar.types';
import { BoSize } from '@/global';
import { BoAvatarType } from './bo_avatar';
import { StringUtils } from '@/utils';

const props = withDefaults(defineProps<AvatarComponentProps>(), {
	size: () => BoSize.default,
	type: () => BoAvatarType.image,
});

const { size, type, text, image } = toRefs(props);

const containerClasses = /*tw*/ 'flex items-center justify-center relative';

const renderImage = computed<boolean>(() => {
	return (
		type.value === BoAvatarType.image &&
		image.value?.src != null &&
		!StringUtils.isEmpty(image.value?.src)
	);
});

const imageSrc = computed<string>(() => {
	return require(image.value?.src ?? '../../assets/svg/avatar.svg');
});

const imageAlt = computed<string>(() => {
	return image.value?.alt ?? 'user-avatar';
});

const textValue = computed<string>(() => {
	return text.value?.value ?? '';
});

const textAlt = computed<string>(() => {
	return text.value?.alt ?? 'user-avatar';
});

const validateProps = (): void => {
	if (text.value == null && image.value == null) {
		throw new Error('At least one of the text or image props must be provided');
	}
};

onBeforeMount(validateProps);
</script>
