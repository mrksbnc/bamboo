<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:class="ASPECT_RATIO_MANIFEST.styles.outer"
		:style="{ paddingBottom: `${(1 / (ratio ?? 16 / 9)) * 100}%` }"
	>
		<div :class="ASPECT_RATIO_MANIFEST.styles.inner">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	ASPECT_RATIO_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoAspectRatioProps,
} from '@workspace/bamboo-core';

const props = withDefaults(defineProps<BoAspectRatioProps>(), {
	id: () => generateComponentId('aspect-ratio'),
	dataTestId: () => generateDataTestId('aspect-ratio'),
	ratio: () => ASPECT_RATIO_MANIFEST.defaults.ratio,
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/aspect-ratio.manifest.css';
</style>
