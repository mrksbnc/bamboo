<template>
	<div :id="id" :data-testid="dataTestId" :role="role" :class="timelineClasses">
		<slot />
	</div>
</template>

<script setup lang="ts">
	import {
		TIMELINE_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoTimelineProps,
	} from '@workspace/bamboo-core';
	import { computed, provide } from 'vue';

	const props = withDefaults(defineProps<BoTimelineProps>(), {
		...TIMELINE_MANIFEST.defaults,
	});

	// Computed
	const id = computed(() => props.id ?? generateComponentId('timeline'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoTimeline'));

	const timelineClasses = computed(() =>
		mergeTwClasses(
			TIMELINE_MANIFEST.styles.base,
			TIMELINE_MANIFEST.styles.orientation[props.orientation!],
		),
	);

	// Provide context to timeline items
	provide('timelineOrientation', props.orientation);
	provide('timelineSize', props.size);
</script>
