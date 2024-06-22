<template>
	<div class="bo-avatar"></div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, toRefs } from 'vue';
import type { AvatarComponentProps } from './bo_avatar.type';
import { BoSize } from '@/global';

const props = withDefaults(defineProps<AvatarComponentProps>(), {
	size: () => BoSize.default,
});

const { size, text, image } = toRefs(props);

const validateProps = (): void => {
	if (text.value == null && image.value == null) {
		throw new Error('At least one of the text or image props must be provided');
	}
};

onBeforeMount(validateProps);
</script>
