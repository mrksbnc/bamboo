<template>
	<span
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:class="classValues"
	/>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	MARKER_MANIFEST,
	mergeTwClasses,
	type BoMarkerProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoMarkerProps>(), {
	id: () => generateComponentId('marker'),
	dataTestId: () => generateDataTestId('marker'),
	variant: () => MARKER_MANIFEST.defaults.variant,
});

const classValues = computed<string>(() =>
	mergeTwClasses(
		MARKER_MANIFEST.styles.base,
		MARKER_MANIFEST.styles.variant[props.variant || 'default'],
	),
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/marker.manifest.css';
</style>
