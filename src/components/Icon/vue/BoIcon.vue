<template>
	<i
		v-html="svg"
		:class="css"
		class="bo-icon"
		aria-label="icon"
	/>
</template>

<script lang="ts">
export default defineComponent({
	inheritAttrs: true,
});
</script>

<script setup lang="ts">
import { icons, type Icon, IconSize } from '@/components/Icon';
import {
	ref,
	toRefs,
	watch,
	type PropType,
	defineComponent,
	computed,
} from 'vue';
import type { OptionalCss } from '@/types';

const props = defineProps({
	name: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<IconSize>,
		default: () => IconSize.MD,
	},
});

const { name, size } = toRefs(props);

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

const css = computed(() => {
	const classes: OptionalCss = {};

	switch (size.value) {
		case IconSize.XS:
			classes['xs'] = true;
			break;
		case IconSize.SM:
			classes['sm'] = true;
			break;
		case IconSize.MD:
			classes['md'] = true;
			break;
		case IconSize.LG:
			classes['lg'] = true;
			break;
		case IconSize.XL:
			classes['xl'] = true;
			break;
		case IconSize.XXL:
			classes['xxl'] = true;
			break;
		case IconSize.XXXL:
			classes['xxxl'] = true;
			break;
	}

	return classes;
});

watch(
	() => name.value,
	() => {
		try {
			iconMap[props.name]().then((val) => {
				svg.value = val;
			});
		} catch (e) {
			console.error(`Could not find icon of name ${props.name}`);
		}
	},
	{ immediate: true },
);
</script>

<style lang="scss" scoped>
@import '../css/icon.scss';
</style>
