<template>
	<span :class="['bo-spinner', css]"></span>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { SpinnerVariant, LoaderSize } from '@/components/Loader';
import type { OptionalCss } from '@/types';

const props = defineProps({
	variant: {
		type: String as PropType<SpinnerVariant>,
		default: () => SpinnerVariant.Default,
	},
	size: {
		type: String as PropType<LoaderSize>,
		default: () => LoaderSize.MD,
	},
});

const { size, variant } = toRefs(props);

const css = computed<OptionalCss>(() => {
	const classes: OptionalCss = {};

	switch (variant.value) {
		case SpinnerVariant.Default:
			classes['default'] = true;
			break;
		case SpinnerVariant.Info:
			classes['info'] = true;
			break;
		case SpinnerVariant.Success:
			classes['success'] = true;
			break;
		case SpinnerVariant.Warning:
			classes['warning'] = true;
			break;
		case SpinnerVariant.Danger:
			classes['danger'] = true;
			break;
		case SpinnerVariant.Tertiary:
			classes['tertiary'] = true;
			break;
	}

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
@import '@/components/Loader/css/spinner.scss';
</style>
