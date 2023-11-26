<template>
	<div :class="[css, 'bo-shape__container']">
		<div class="bo-shape__loader" />
		<span
			v-if="text != null"
			class="bo-shape__text"
			>{{ text }}</span
		>
	</div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import type { OptionalCss } from '@/types';
import { LoaderSize } from '@/components/Loader';

const props = defineProps({
	text: {
		type: String,
		required: false,
	},
	size: {
		type: String,
		default: () => LoaderSize.MD,
	},
});

const { text, size } = toRefs(props);

const css = computed<OptionalCss>(() => {
	const classes: OptionalCss = {};

	switch (size.value) {
		case LoaderSize.XS:
			classes['xs'] = true;
			break;
		case LoaderSize.SM:
			classes['sm'] = true;
			break;
		case LoaderSize.MD:
			classes['md'] = true;
			break;
		case LoaderSize.LG:
			classes['lg'] = true;
			break;
		case LoaderSize.XL:
			classes['xl'] = true;
			break;
		case LoaderSize.XXL:
			classes['xxl'] = true;
			break;
		case LoaderSize.XXXL:
			classes['xxxl'] = true;
			break;
	}

	return classes;
});
</script>

<style scoped lang="scss">
@import '@/components/Loader/css/shape.scss';
</style>
