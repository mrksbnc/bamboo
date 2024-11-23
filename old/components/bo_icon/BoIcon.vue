<template>
	<!-- eslint-disable vue/no-v-html -->
	<div
		type="image/svg+xml"
		:style="style"
		class="bo-icon"
		:class="classes"
		aria-label="icon"
		v-html="svg"
	></div>
</template>

<script lang="ts">
export default defineComponent({
	inheritAttrs: true,
});
</script>

<script setup lang="ts">
import { IconSizeClasses, icons, type Icon } from './bo_icon';
import { BoSize } from '@/global';
import {
	ref,
	toRefs,
	watch,
	type PropType,
	defineComponent,
	computed,
	type StyleValue,
} from 'vue';

const props = defineProps({
	icon: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<BoSize>,
		default: () => BoSize.default,
	},
	color: {
		type: String,
		default: () => 'currentColor',
	},
});

const { icon, size, color } = toRefs(props);

const svg = ref('');

const iconMap = Object.keys(icons).reduce(
	(acc, key) => {
		const splitted = key.split('/');
		const icon = splitted[splitted.length - 1].split('.')[0];

		acc[icon] = icons[key];

		return acc;
	},
	{} as Record<string, () => Promise<string>>,
);

const style = computed<StyleValue>(() => {
	return {
		color: color.value,
	};
});

const classes = computed<string>(() => {
	return IconSizeClasses[size.value];
});

const load = async (): Promise<void> => {
	try {
		iconMap[icon.value]().then((val) => {
			svg.value = val;
		});
	} catch (e) {
		console.error(`Could not find icon of name ${icon.value}`);
	}
};

watch(icon, () => load(), { immediate: true });
</script>
