<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		role="tablist"
		:aria-label="ariaLabel"
		:aria-orientation="orientation"
		:class="listClasses"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	TABS_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoTabsListProps,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { tabsOrientationKey } from './keys.js';

const props = withDefaults(defineProps<BoTabsListProps>(), {
	id: () => generateComponentId('tabs-list'),
	dataTestId: () => generateDataTestId('tabs-list'),
});

const orientation = inject(
	tabsOrientationKey,
	computed(() => {
		return TABS_MANIFEST.defaults.orientation;
	}),
);
const listClasses = computed(() => {
	return mergeTwClasses(
		TABS_MANIFEST.styles.list,
		TABS_MANIFEST.styles.listOrientation[orientation.value],
	);
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/tabs.manifest.css';
</style>
