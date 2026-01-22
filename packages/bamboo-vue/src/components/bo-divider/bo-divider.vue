<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role || 'separator'"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:class="dividerClasses"
	>
		<span v-if="text || $slots.default" class="px-4">
			<slot>{{ text }}</slot>
		</span>
	</div>
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
		variant: 'neutral',
		orientation: 'vertical',
		placement: 'center',
	});

	// Build divider classes
	const dividerClasses = computed(() => {
		const classes = [
			DIVIDER_MANIFEST.styles.base,
			DIVIDER_MANIFEST.styles.variants[props.variant || 'neutral'],
			DIVIDER_MANIFEST.styles.orientations[props.orientation || 'vertical'],
			DIVIDER_MANIFEST.styles.placements[props.placement || 'center'],
		];

		return mergeTwClasses(...classes);
	});
</script>
