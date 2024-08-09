<template>
	<label
		class="bo-text"
		aria-label="text"
		:class="classes"
	>
		{{ text }}
	</label>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import {
	BoFontSize,
	BoFontSizeClasses,
	BoFontWeight,
	BoTextFontWeightClasses,
} from './bo_text';
import { TailwindUtils } from '@/utils';
import type { BoTextComponentProps } from './bo_text.types';

const props = withDefaults(defineProps<BoTextComponentProps>(), {
	size: () => BoFontSize.default,
	weight: () => BoFontWeight.regular,
});

const { text, size, weight } = toRefs(props);

const defaultClasses: string =
	/*tw*/ 'inline-flex gap-2 items-center justify-center select-none max-w-full truncate font-sans';

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
