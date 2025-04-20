<template>
	<div
		v-html="svg"
		:style="style"
		:class="tailwindCssSizeClasses"
		role="img"
		aria-label="icon"
	></div>
</template>

<script setup lang="ts">
import { BoSize } from '@/shared/bo_size';
import { computed, ref, toRefs, watch, type StyleValue } from 'vue';
import { icons, type BoIconProps } from './bo_icon';

const props = withDefaults(defineProps<BoIconProps>(), {
	size: () => BoSize.default,
	color: () => 'currentColor',
});

const { icon, size, color } = toRefs(props);

const svg = ref<string>('');

/**
 * @description This is a map of all the icons that are available in the library.
 *
 * - The key is the name of the icon and the value is the actual SVG.
 * - A promise which resolves to the SVG string
 */
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

const sizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-3',
	[BoSize.small]: /*tw*/ 'size-3.5',
	[BoSize.default]: /*tw*/ 'size-4',
	[BoSize.large]: /*tw*/ 'size-5',
	[BoSize.extra_large]: /*tw*/ 'size-6',
};

const tailwindCssSizeClasses = computed<string>(() => {
	return sizeClasses[size.value];
});

async function load(): Promise<void> {
	try {
		await iconMap[icon.value]().then((val) => {
			svg.value = val;
		});
	} catch (e) {
		console.error(`Could not find icon of name ${icon.value}`);
	}
}

watch(icon, () => load(), { immediate: true });
</script>
