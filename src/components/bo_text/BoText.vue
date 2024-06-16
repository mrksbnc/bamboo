<template>
	<span
		class="bo-text"
		aria-label="text"
		:class="classes"
	>
		{{ text }}
	</span>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import {
	BoFontSize,
	BoFontSizeClasses,
	BoFontWeight,
	BoTextFontWeightClasses,
} from './bo_text';
import { TailwindUtils } from '@/utils';

const props = defineProps({
	text: {
		type: String as PropType<string>,
		required: true,
	},
	size: {
		type: String as PropType<BoFontSize>,
		default: () => BoFontSize.default,
	},
	weight: {
		type: String as PropType<BoFontWeight>,
		default: () => BoFontWeight.regular,
	},
});

const { text, size, weight } = toRefs(props);

const defaultClasses: string =
	/*tw*/ 'inline-flex gap-2 items-center justify-center select-none max-w-full truncate';

const fontSizeClasses = computed<string>(() => {
	return BoFontSizeClasses[size.value];
});

const fontWeightClasses = computed<string>(() => {
	return BoTextFontWeightClasses[weight.value];
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		fontSizeClasses.value,
		fontWeightClasses.value,
	);
});
</script>
