<template>
	<span
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:class="VISUALLY_HIDDEN_MANIFEST.styles.base"
	>
		<slot />
	</span>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	VISUALLY_HIDDEN_MANIFEST,
	type BoVisuallyHiddenProps,
} from '@workspace/bamboo-core';

const props = withDefaults(defineProps<BoVisuallyHiddenProps>(), {
	id: () => generateComponentId('visually-hidden'),
	dataTestId: () => generateDataTestId('visually-hidden'),
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/visually-hidden.manifest.css';
</style>
