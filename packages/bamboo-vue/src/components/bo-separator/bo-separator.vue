<template>
	<div
		v-if="label"
		:id="id"
		:data-testid="dataTestId"
		:role="decorative ? 'none' : 'separator'"
		:aria-orientation="decorative ? undefined : orientation"
		:class="SEPARATOR_MANIFEST.styles.withLabel"
	>
		<span :class="SEPARATOR_MANIFEST.styles.label">{{ label }}</span>
	</div>
	<div
		v-else
		:id="id"
		:data-testid="dataTestId"
		:role="decorative ? 'none' : 'separator'"
		:aria-orientation="decorative ? undefined : orientation"
		:class="classValues"
	/>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	SEPARATOR_MANIFEST,
	type BoSeparatorProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoSeparatorProps>(), {
	id: () => generateComponentId('separator'),
	dataTestId: () => generateDataTestId('separator'),
	orientation: () => SEPARATOR_MANIFEST.defaults.orientation,
	decorative: () => SEPARATOR_MANIFEST.defaults.decorative,
});

const classValues = computed<string>(() => {
	return mergeTwClasses(
		SEPARATOR_MANIFEST.styles.base,
		SEPARATOR_MANIFEST.styles.orientation[props.orientation || 'horizontal'],
	);
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/separator.manifest.css';
</style>
