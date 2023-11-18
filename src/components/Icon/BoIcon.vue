<template>
	<i
		:id="id"
		role="img"
		:style="style"
		:aria-label="name"
		:class="['bo-icon', boIconClass]"
	/>
</template>

<script setup lang="ts">
import type { CssStyle, OptionalCss } from '@/types';
import type { Icon } from '@/components/Icon';
import { iconMap, IconSize } from '@/components/Icon';
import {
	type PropType,
	toRefs,
	computed,
	onUpdated,
	ref,
	onBeforeMount,
} from 'vue';

const props = defineProps({
	name: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<IconSize>,
		default: () => IconSize.MD,
	},
	color: {
		type: String,
		default: () => null,
	},
});

const { name, size, color } = toRefs(props);

const index = ref<number>(0);
const icon = ref<{ default: string } | null>(null);
const id = ref<string>(`bo-icon-${index.value + 1}`);

const style = computed<CssStyle>(() => {
	const i = iconMap.get(name.value) ?? null;
	const defaultColor = 'var(--icon-color)';

	return {
		maskImage: `url('${i?.default}')`,
		webkitMaskImage: `url('${i?.default}')`,
		'background-color': color.value ? color.value : defaultColor,
	};
});

const boIconClass = computed<OptionalCss>(() => {
	const classes: OptionalCss = {};

	switch (size.value) {
		case IconSize.XXS:
			classes['xxs'] = true;
			break;
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
	}

	return classes;
});

onBeforeMount((): void => {
	icon.value = iconMap.get(name.value) ?? null;
});

onUpdated((): void => {
	icon.value = iconMap.get(name.value) ?? null;
});
</script>

<style scoped lang="scss">
@import url('./icon.scss');
</style>
