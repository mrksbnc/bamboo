<template>
	<span
		v-html="component"
		:id="id"
		:data-testid="dataTestId"
		:role="computedRole"
		:class="classValues"
		:style="styleValues"
		:title="title"
		:aria-hidden="props.decorative ? 'true' : undefined"
		:aria-label="props.decorative ? undefined : props.title"
	></span>
</template>

<script lang="ts" setup>
import {
	BO_ICON_REGISTRY,
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
	ICON_MANIFEST,
	mergeTwClasses,
	type BoIconProps,
} from '@workspace/bamboo-core';
import { computed, type HTMLAttributes, type StyleValue } from 'vue';

const props = withDefaults(defineProps<BoIconProps>(), {
	id: () => generateComponentId('icon'),
	dataTestId: () => generateDataTestId('icon'),
	decorative: true,
	size: () => ICON_MANIFEST.defaults.size,
	variant: () => ICON_MANIFEST.defaults.variant,
});

const component = computed<string>(() => BO_ICON_REGISTRY[props.icon]);

const computedRole = computed<HTMLAttributes['role'] | undefined>(() =>
	props.decorative ? undefined : (props.role ?? 'img'),
);

const classValues = computed<string>(() =>
	mergeTwClasses(
		props.cursor || ICON_MANIFEST.styles.cursor.default,
		ICON_MANIFEST.styles.base,
		ICON_MANIFEST.styles.variant[props.variant || 'current'],
		typeof props.size === 'number' ? '' : ICON_MANIFEST.styles.size[props.size || 'default'],
	),
);

const styleValues = computed<StyleValue>(() => {
	const color = props.customColor ? getValidOrFallbackColorFromStr(props.customColor) : undefined;
	const size = typeof props.size === 'number' ? `${props.size}px` : undefined;

	return {
		color,
		width: size,
		height: size,
	};
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/icon.manifest.css';
</style>
