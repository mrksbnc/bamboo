<template>
	<button
		:id="triggerId"
		:data-testid="dataTestId"
		type="button"
		role="tab"
		:data-state="isActive ? 'active' : 'inactive'"
		:aria-selected="isActive ? 'true' : 'false'"
		:aria-controls="contentId"
		:aria-label="ariaLabel"
		:tabindex="isActive ? 0 : -1"
		:disabled="isDisabled"
		:class="triggerClasses"
		@click="onClick"
		@keydown="onKeydown"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import {
	TABS_MANIFEST,
	generateDataTestId,
	mergeTwClasses,
	type BoTabsTriggerProps,
	type BoTabsValue,
} from '@workspace/bamboo-core';
import { computed, inject, onMounted, onUnmounted } from 'vue';
import {
	tabsActivationModeKey,
	tabsActiveValueKey,
	tabsDisabledKey,
	tabsItemsKey,
	tabsOrientationKey,
	tabsRegisterKey,
	tabsSelectKey,
	tabsUnregisterKey,
} from './keys.js';

const props = withDefaults(defineProps<BoTabsTriggerProps>(), {
	dataTestId: () => generateDataTestId('tabs-trigger'),
});

const activeValue = inject(tabsActiveValueKey);
const select = inject(tabsSelectKey);
const items = inject(tabsItemsKey);
const register = inject(tabsRegisterKey);
const unregister = inject(tabsUnregisterKey);
const orientation = inject(tabsOrientationKey);
const activationMode = inject(tabsActivationModeKey);
const groupDisabled = inject(tabsDisabledKey);

function valueKey(value: BoTabsValue): string {
	return String(value).replace(/[^a-zA-Z0-9_-]+/g, '-');
}

const triggerId = computed(() => {
	return props.id ?? `tabs-trigger-${valueKey(props.value)}`;
});
const contentId = computed(() => {
	return `tabs-content-${valueKey(props.value)}`;
});
const isActive = computed(() => {
	return activeValue?.value === props.value;
});
const isDisabled = computed(() => {
	return !!props.disabled || !!groupDisabled?.value;
});
const triggerClasses = computed(() => {
	return mergeTwClasses(
		TABS_MANIFEST.styles.trigger,
		isActive.value ? TABS_MANIFEST.styles.triggerActive : '',
	);
});

function onClick(): void {
	if (!isDisabled.value) select?.(props.value);
}

function focusItem(item: { value: BoTabsValue; id: string }): void {
	const element = document.getElementById(item.id);
	element?.focus();
	if (activationMode?.value === 'automatic') select?.(item.value);
}

function onKeydown(event: KeyboardEvent): void {
	const key = event.key;
	const horizontal = orientation?.value !== 'vertical';
	const previousKey = horizontal ? 'ArrowLeft' : 'ArrowUp';
	const nextKey = horizontal ? 'ArrowRight' : 'ArrowDown';

	if (key === 'Enter' || key === ' ') {
		event.preventDefault();
		if (!isDisabled.value) select?.(props.value);
		return;
	}

	if (!items || ![previousKey, nextKey, 'Home', 'End'].includes(key)) return;
	event.preventDefault();
	const enabledItems = items.value.filter((item) => !item.disabled);
	const currentIndex = enabledItems.findIndex((item) => item.value === props.value);
	if (currentIndex < 0 || enabledItems.length === 0) return;

	let nextIndex = currentIndex;
	if (key === 'Home') nextIndex = 0;
	else if (key === 'End') nextIndex = enabledItems.length - 1;
	else if (key === nextKey) nextIndex = (currentIndex + 1) % enabledItems.length;
	else nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;

	focusItem(enabledItems[nextIndex]);
}

onMounted(() => {
	register?.({ value: props.value, id: triggerId.value, disabled: isDisabled.value });
});

onUnmounted(() => unregister?.(props.value));
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/tabs.manifest.css';
</style>
