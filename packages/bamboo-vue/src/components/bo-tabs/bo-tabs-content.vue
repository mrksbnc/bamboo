<template>
	<div
		v-if="isActive || forceMount"
		:id="contentId"
		:data-testid="dataTestId"
		role="tabpanel"
		:data-state="isActive ? 'active' : 'inactive'"
		:aria-labelledby="triggerId"
		:aria-hidden="isActive ? 'false' : 'true'"
		:hidden="!isActive"
		tabindex="0"
		:class="TABS_MANIFEST.styles.content"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	TABS_MANIFEST,
	generateDataTestId,
	type BoTabsContentProps,
	type BoTabsValue,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { tabsActiveValueKey, tabsItemsKey } from './keys.js';

const props = withDefaults(defineProps<BoTabsContentProps>(), {
	dataTestId: () => generateDataTestId('tabs-content'),
	forceMount: false,
});

const activeValue = inject(tabsActiveValueKey);
const items = inject(tabsItemsKey);

function valueKey(value: BoTabsValue): string {
	return String(value).replace(/[^a-zA-Z0-9_-]+/g, '-');
}

const isActive = computed(() => {
	return activeValue?.value === props.value;
});
const contentId = computed(() => {
	return props.id ?? `tabs-content-${valueKey(props.value)}`;
});
const triggerId = computed(() => {
	return (
		items?.value.find((item) => item.value === props.value)?.id ??
		`tabs-trigger-${valueKey(props.value)}`
	);
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/tabs.manifest.css';
</style>
