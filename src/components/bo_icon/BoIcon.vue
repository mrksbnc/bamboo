<template>
	<div
		v-if="isSvgReadyToRender"
		type="image/svg+xml"
		:style="style"
		class="bo-icon"
		aria-label="icon"
		:class="tailwindCssSizeClasses"
		v-html="svg"
	></div>
</template>

<script lang="ts">
export default defineComponent({
	inheritAttrs: true,
});
</script>

<script setup lang="ts">
import { BoSize } from '@/data/bo_size.constant';
import { StringUtils } from '@/utils';
import {
	computed,
	defineComponent,
	ref,
	toRefs,
	watch,
	type StyleValue,
} from 'vue';
import { Icon, icons } from './bo_icon.constant';
import type { BoIconProps } from './bo_icon.type';

const props = withDefaults(defineProps<BoIconProps>(), {
	size: () => BoSize.default,
	color: () => 'currentColor',
});

const { icon, size, color } = toRefs(props);

const svg = ref('');
/**
 * @description This is a map of all the icons that are available in the library.
 *
 * - The key is the name of the icon and the value is the actual SVG.
 * - The name of the icon is the name of the file without the extension.
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
/**
 * @description This prevents the Icon component from rendering an empty icon and
 * taking up space in the DOM.
 */
const isSvgReadyToRender = computed<boolean>(() => {
	return (
		svg.value !== Icon.none &&
		!StringUtils.isEmpty(svg.value) &&
		icon.value !== Icon.none &&
		!StringUtils.isEmpty(icon.value)
	);
});

const style = computed<StyleValue>(() => {
	return {
		color: color.value,
	};
});

const tailwindCssSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return 'w-[8px] h-[8px]';
		case BoSize.small:
			return 'w-[12px] h-[12px]';
		case BoSize.large:
			return 'w-[18px] h-[18px]';
		case BoSize.extra_large:
			return 'w-[24px] h-[24px]';
		case BoSize.default:
		default:
			return 'w-[16px] h-[16px]';
	}
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
