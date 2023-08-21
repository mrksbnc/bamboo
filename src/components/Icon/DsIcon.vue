<template>
	<div :class="[`w-[${size}px] h-[${size}px]`]">
		<i :style="iconStyle" />
	</div>
</template>

<script setup lang="ts">
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
	});

	const { icon, size } = toRefs(props);

	const iconObj = ref<IconObj | null>(null);

	const iconStyle = computed(() => {
		return {
			width: `${size.value}px`,
			height: `${size.value}px`,
			maskImage: `url(${iconObj.value?.default})`,
			webkitMaskImage: `url(${iconObj.value?.default})`,
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
		width: 100%;
		height: 100%;
		display: block;
		fill: currentColor;
		mask-size: contain;
		mask-repeat: no-repeat;
		background: currentColor;
		-webkit-mask-size: contain;
		mask-position: center center;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center center;
	}
</style>
