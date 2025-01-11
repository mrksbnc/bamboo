<template>
	<!-- eslint-disable vue/no-v-html -->
	<div
		v-html="svg"
		:style="style"
		class="bo-icon"
		aria-label="icon"
		type="image/svg+xml"
		:class="tailwindCssSizeClasses"
	></div>
</template>

<script lang="ts">
export default defineComponent({
	inheritAttrs: true,
});
</script>

<script setup lang="ts">
import { BoSize } from '@/shared/bo_size';
import { StringUtils } from '@/utils';
import { computed, defineComponent, ref, toRefs, watch, type StyleValue } from 'vue';
import { Icon, icons } from './constant';
import type { BoIconProps } from './types';

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
	const noneIconStr = String(Icon.none);
	return (
		svg.value !== noneIconStr &&
		!StringUtils.isEmptyStr(svg.value) &&
		icon.value != Icon.none &&
		!StringUtils.isEmptyStr(icon.value)
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
			return 'size-[12px]';
		case BoSize.small:
			return 'size-[14px]';
		case BoSize.default:
		default:
			return 'size-[16px]';
		case BoSize.large:
			return 'size-[20px]';
		case BoSize.extra_large:
			return 'size-[24px]';
	}
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
