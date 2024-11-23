<template>
	<div
		class="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
	>
		<span class="font-medium text-gray-600 dark:text-gray-300">{{ alt }}</span>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

type BoAvatarProps = {
	size?: string;
	src?: string;
	alt?: string;
};

const props = defineProps<BoAvatarProps>();

const { size, src, alt } = props;
</script>
