<template>
	<div :class="[`w-[${size}px] h-[${size}px]`]">
		<i :style="iconStyle" />
	</div>
</template>

<script setup lang="ts">
	import { Color } from '@/data';
	import { getIcon, Icon, type IconObj } from '.';
	import { toRefs, type PropType, computed, ref, onMounted, onBeforeMount, onUpdated } from 'vue';

	const props = defineProps({
		icon: {
			type: String as PropType<Icon>,
			required: true,
		},
		size: {
			type: Number,
			default: 24,
		},
		color: {
			type: String as PropType<Color | string>,
			default: Color.black,
		},
	});

	const { icon, size, color } = toRefs(props);

	const iconObj = ref<IconObj | null>(null);

	const computedIconSizeStyle = computed(() => {
		return {
			width: `${size.value}px`,
			height: `${size.value}px`,
		};
	});

	const computedIconColorStyle = computed(() => {
		return {
			fill: color.value,
		};
	});

	const iconStyle = computed(() => {
		return {
			...computedIconSizeStyle.value,
			...computedIconColorStyle.value,
			maskImage: `url(${iconObj.value?.default})`,
			webkitMaskImage: `url(${iconObj.value?.default})`,
			backgroundColor: color.value,
		};
	});

	onMounted(() => {
		iconObj.value = getIcon(icon.value);
	});

	onUpdated(() => {
		iconObj.value = getIcon(icon.value);
	});
</script>

<style scoped lang="scss">
	i {
		display: block;
		width: 100%;
		height: 100%;
		mask-size: contain;
		mask-repeat: no-repeat;
		-webkit-mask-size: contain;
		mask-position: center center;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center center;
	}
</style>
