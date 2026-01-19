<template>
	<component
		:is="component"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:class="classValues"
		:title="title"
	></component>
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
	import { computed, defineComponent, type Component, type HTMLAttributes } from 'vue';

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: () => generateComponentId('icon'),
		dataTestId: () => generateDataTestId('icon'),
		decorative: true,
		role: () => ICON_MANIFEST.defaults.role,
		size: () => ICON_MANIFEST.defaults.size,
		cursor: () => ICON_MANIFEST.defaults.cursor,
		variant: () => ICON_MANIFEST.defaults.variant,
	});

	const component = computed<Component>(() => {
		return defineComponent({
			name: props.icon,
			template: BO_ICON_REGISTRY[props.icon],
		});
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
			props.customColor
				? /* tw*/ `text-[${getValidOrFallbackColorFromStr(props.customColor)}]`
				: '',
		);
	});
</script>
