<template>
	<span :id="dividerId" :class="dividerClasses" :style="color.style" />
</template>

<script setup lang="ts">
import { IdentityUtils, TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import { type BoDividerProps, BoDividerVariant } from './bo_divider';
import type { StyleConstruct } from '@/types';

const props = withDefaults(defineProps<BoDividerProps>(), {
	variant: () => BoDividerVariant.default,
});

const { id, variant, colorHex, tailwindColor } = toRefs(props);

const defaultDividerClasses = /*tw*/ 'bo-divider my-2 w-full';

const dividerId = computed<string>(() => {
	return id.value ?? IdentityUtils.generateRandomIdWithPrefix('bo-divider');
});

const tailwindCssTypeClasses = computed<string>(() => {
	switch (variant.value) {
		case BoDividerVariant.dotted:
			return /*tw*/ 'border-t border-dotted';
		case BoDividerVariant.dashed:
			return /*tw*/ 'border-t border-dashed';
		case BoDividerVariant.default:
		default:
			return /*tw*/ 'border-t';
	}
});

const color = computed<StyleConstruct>(() => {
	const styles: StyleConstruct = {
		class: '',
		style: {},
	};

	if (colorHex.value !== undefined && tailwindColor.value === undefined) {
		styles.style = {
			borderColor: colorHex.value,
		};
		return styles;
	}

	if (tailwindColor.value !== undefined) {
		styles.class = tailwindColor.value;
		return styles;
	}

	styles.class = 'border-gray-300';
	return styles;
});

const dividerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		defaultDividerClasses,
		tailwindCssTypeClasses.value,
		color.value.class,
	);
});
</script>
