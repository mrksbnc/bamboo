<template>
	<span :class="['bo-loading-spinner', css]"></span>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { SpinnerVariant, SpinnerSize } from '@/components/Loader';
import type { OptionalCss } from '@/types';

const props = defineProps({
	variant: {
		type: String as PropType<SpinnerVariant>,
		default: () => SpinnerVariant.Default,
	},
	size: {
		type: String as PropType<SpinnerSize>,
		default: () => SpinnerSize.MD,
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
		case SpinnerSize.XS:
			classes['xs'] = true;
			break;
		case SpinnerSize.SM:
			classes['sm'] = true;
			break;
		case SpinnerSize.MD:
			classes['md'] = true;
			break;
		case SpinnerSize.LG:
			classes['lg'] = true;
			break;
		case SpinnerSize.XL:
			classes['xl'] = true;
			break;
	}

	return classes;
});
</script>

<style scoped lang="scss">
@import './spinner.scss';
</style>
