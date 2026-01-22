<template>
	<hr
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:class="dividerClasses"
	/>
</template>

<script setup lang="ts">
	import {
		DIVIDER_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoDividerProps,
	} from '@workspace/bamboo-core';
	import { computed } from 'vue';

	const props = withDefaults(defineProps<BoDividerProps>(), {
		id: () => generateComponentId('divider'),
		dataTestId: () => generateDataTestId('divider'),
		variant: 'secondary',
		type: 'default',
	});

	// Build divider classes
	const dividerClasses = computed(() => {
		const classes = [
			DIVIDER_MANIFEST.styles.base,
			DIVIDER_MANIFEST.styles.variants[props.variant || 'secondary'],
			DIVIDER_MANIFEST.styles.types[props.type || 'default'],
		];

		return mergeTwClasses(...classes);
	});
</script>
