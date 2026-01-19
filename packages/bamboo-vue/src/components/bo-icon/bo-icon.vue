<template></template>

<script lang="ts" setup>
	import { BO_ICON_REGISTRY, ICON_MANIFEST } from '@workspace/bamboo-core';
	import { computed, type HTMLAttributes } from 'vue';

	const component = computed<string>(() => {
		return BO_ICON_REGISTRY[props.icon];
	});

	const role = computed<HTMLAttributes['role']>(() => {
		return props.decorative ? 'presentation' : 'img';
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			ICON_MANIFEST.styles.base,
			ICON_MANIFEST.styles.variant[props.variant || 'current'],
			props.cursor ? props.cursor : ICON_MANIFEST.styles.cursor.default,
			typeof props.size === 'number'
				? `size-[${props.size}px]`
				: ICON_MANIFEST.styles.size[props.size || 'default'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				color: getValidOrFallbackColorFromStr(props.customColor),
			};
		}

		return {};
	});
</script>
