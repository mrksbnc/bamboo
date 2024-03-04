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
import { BoSize } from '@/enums';
import { TailwindUtils } from '@/utils/tailwind_utils';
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
	let classes = '';

	switch (size.value) {
		case BoSize.extra_small:
			classes = TailwindUtils.merge(classes, 'size-2');
			break;
		case BoSize.small:
			classes = TailwindUtils.merge(classes, 'size-3');
			break;
		case BoSize.large:
			classes = TailwindUtils.merge(classes, 'size-6');
			break;
		case BoSize.extra_large:
			classes = TailwindUtils.merge(classes, 'size-8');
			break;
		case BoSize.default:
		default:
			classes = TailwindUtils.merge(classes, 'size-4');
			break;
	}

	return classes;
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
