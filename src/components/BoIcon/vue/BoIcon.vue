<template>
	<div
		v-html="svg"
		:style="style"
		class="bo-icon"
		:class="classes"
		aria-label="icon"
		type="image/svg+xml"
	/>
</template>

<script lang="ts">
export default defineComponent({
	inheritAttrs: true,
});
</script>

<script setup lang="ts">
import { icons, type Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
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
	switch (size.value) {
		case BoSize.extra_small:
			return 'size-2';
		case BoSize.small:
			return 'size-3';
		case BoSize.large:
			return 'size-6';
		case BoSize.extra_large:
			return 'size-8';
		case BoSize.default:
		default:
			return 'size-4';
	}
});

watch(
	() => icon.value,
	() => {
		try {
			iconMap[icon.value]().then((val) => {
				svg.value = val;
			});
		} catch (e) {
			console.error(`Could not find icon of name ${icon.value}`);
		}
	},
	{ immediate: true },
);
</script>
@/constants
