<template>
	<i
		v-html="svg"
		:id="id"
		:data-testid="dataTestId"
		:role="computedRole"
		:style="styleValues"
		:class="classValues"
		:aria-label="ariaLabel"
		:aria-hidden="ariaHidden"
		:title="title"
	></i>
</template>

<script lang="ts" setup>
	import { ICON_REGISTRY, IdentityService, useBoIcon, type BoIconProps } from '@bamboo/core';
	import { computed } from 'vue';

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: () => IdentityService.instance.getComponentId('bo-icon'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-icon'),
		decorative: true,
	});

	const { classValues, styleValues } = useBoIcon(props);

	const svg = computed<string>(() => {
		return ICON_REGISTRY[props.icon] || ICON_REGISTRY['circle'] || '';
	});

	const computedRole = computed<string>(() => {
		return props.role ?? 'img';
	});

	const ariaHidden = computed<boolean | undefined>(() => {
		return props.decorative ? true : undefined;
	});

	const ariaLabel = computed<string | undefined>(() => {
		if (props.decorative) {
			return undefined;
		}
		return props.title ?? props.icon;
	});
</script>
