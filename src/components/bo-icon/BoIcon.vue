<template>
	<i
		v-html="svg"
		:style="style"
		:class="tailwindCssClasses"
		:aria-label="accessibility.title"
		:role="role"
	></i>
</template>

<script setup lang="ts">
import { TailwindService } from '@/services';
import { BoSize } from '@/shared/bo-size';
import { computed, ref, toRefs, watch, type StyleValue } from 'vue';
import { icons, type BoIconProps } from './bo-icon';

const props = withDefaults(defineProps<BoIconProps>(), {
	size: () => BoSize.default,
	color: () => 'currentColor',
	accessibility: () => ({
		title: 'icon',
		decorative: true,
	}),
});

const { icon, size, color } = toRefs(props);

const defaultClasses = /*tw*/ 'bo-icon block';

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

const sizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-3',
	[BoSize.small]: /*tw*/ 'size-3.5',
	[BoSize.default]: /*tw*/ 'size-4',
	[BoSize.large]: /*tw*/ 'size-5',
	[BoSize.extra_large]: /*tw*/ 'size-6',
};

const role = computed<string>(() => {
	return props.accessibility.decorative ? 'presentation' : 'img';
});

const style = computed<StyleValue>(() => {
	return {
		color: color.value,
	};
});

const tailwindCssSizeClasses = computed<string>(() => {
	return sizeClasses[size.value];
});

const tailwindCssClasses = computed<string>(() => {
	return TailwindService.instance.merge(defaultClasses, tailwindCssSizeClasses.value);
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
