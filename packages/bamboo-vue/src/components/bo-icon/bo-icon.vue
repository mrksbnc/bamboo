<template>
	<p
		v-html="component"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:class="classValues"
		:style="styleValues"
		:title="title"
		:aria-hidden="decorative"
	></p>
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
		role: () => ICON_MANIFEST.defaults.role,
		size: () => ICON_MANIFEST.defaults.size,
		cursor: () => ICON_MANIFEST.defaults.cursor,
		variant: () => ICON_MANIFEST.defaults.variant,
	});

	const component = computed<string>(() => {
		return BO_ICON_REGISTRY[props.icon];
	});

	const role = computed<HTMLAttributes['role']>(() => {
		return props.decorative ? 'presentation' : 'img';
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			props.cursor,
			ICON_MANIFEST.styles.base,
			ICON_MANIFEST.styles.variant[props.variant || 'current'],
			typeof props.size === 'number'
				? `size-[${props.size}px]`
				: ICON_MANIFEST.styles.size[props.size || 'default'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		const color = props.customColor ? getValidOrFallbackColorFromStr(props.customColor) : undefined;

		return {
			color,
		};
	});
</script>

<style lang="css" scoped>
	p {
		margin: 0;
		padding: 0;
	}
</style>
