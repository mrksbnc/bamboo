<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-orientation="orientation"
		:data-disabled="disabled ? 'true' : undefined"
		:class="TABS_MANIFEST.styles.base"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	TABS_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoTabsProps,
	type BoTabsValue,
} from '@workspace/bamboo-core';
import { computed, provide, ref } from 'vue';
import {
	tabsActivationModeKey,
	tabsActiveValueKey,
	tabsDisabledKey,
	tabsItemsKey,
	tabsOrientationKey,
	tabsRegisterKey,
	tabsSelectKey,
	tabsUnregisterKey,
	type TabsItem,
} from './keys.js';

const props = withDefaults(defineProps<BoTabsProps>(), {
	id: () => generateComponentId('tabs'),
	dataTestId: () => generateDataTestId('tabs'),
	orientation: () => TABS_MANIFEST.defaults.orientation,
	activationMode: () => TABS_MANIFEST.defaults.activationMode,
});

const model = defineModel<BoTabsValue>();
const selected = ref<BoTabsValue | undefined>(props.defaultValue);
const items = ref<TabsItem[]>([]);
const activeValue = computed(() => model.value ?? selected.value);
const orientation = computed(() => props.orientation || TABS_MANIFEST.defaults.orientation);
const activationMode = computed(
	() => props.activationMode || TABS_MANIFEST.defaults.activationMode,
);

function select(value: BoTabsValue): void {
	if (props.disabled || items.value.find((item) => item.value === value)?.disabled) return;
	selected.value = value;
	model.value = value;
}

function register(item: TabsItem): void {
	if (!items.value.some((current) => current.value === item.value)) {
		items.value = [...items.value, item];
	}

	if (activeValue.value === undefined && !item.disabled) select(item.value);
}

function unregister(value: BoTabsValue): void {
	items.value = items.value.filter((item) => item.value !== value);
}

provide(tabsActiveValueKey, activeValue);
provide(tabsSelectKey, select);
provide(tabsItemsKey, items);
provide(tabsRegisterKey, register);
provide(tabsUnregisterKey, unregister);
provide(tabsOrientationKey, orientation);
provide(tabsActivationModeKey, activationMode);
provide(
	tabsDisabledKey,
	computed(() => props.disabled),
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/tabs.manifest.css';
</style>
