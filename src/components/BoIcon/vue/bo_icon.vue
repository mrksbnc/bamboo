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
import { useIcon, Icon } from '@/components/BoIcon';
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
import { useIconStyle } from '../ts/bo_icon';

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

const { icon } = toRefs(props);

const svg = ref('');

const style = computed<StyleValue>(() => {
	return useIconStyle(toRefs(props)).style;
});

const classes = computed<string>(() => {
	return useIconStyle(toRefs(props)).classes;
});

watch(
	() => icon.value,
	async () => {
		svg.value = await useIcon(toRefs(props)).getIconSvg(icon.value);
	},
	{ immediate: true },
);
</script>
