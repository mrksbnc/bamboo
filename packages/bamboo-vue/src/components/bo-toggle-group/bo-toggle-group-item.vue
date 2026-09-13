<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="button"
		:disabled="isDisabled"
		:tabindex="isDisabled ? -1 : 0"
		:aria-label="ariaLabel"
		:aria-pressed="isSelected ? 'true' : 'false'"
		:aria-disabled="isDisabled ? 'true' : undefined"
		:data-state="isSelected ? 'on' : 'off'"
		:class="classValues"
		@click="select"
		@keydown="onKeydown"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoToggleGroupItemProps } from '@workspace/bamboo-core';
import { TOGGLE_GROUP_MANIFEST } from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { toggleGroupContextKey } from './keys.js';

const props = withDefaults(defineProps<BoToggleGroupItemProps>(), {
	id: () => generateComponentId('toggle-group-item'),
	dataTestId: () => generateDataTestId('toggle-group-item'),
});

const context = inject(toggleGroupContextKey);
const isSelected = computed(() => {
	return context?.selected(props.value) ?? false;
});
const isDisabled = computed(() => {
	return !!props.disabled || !!context?.disabled.value;
});
const classValues = computed(() => {
	return mergeTwClasses(
		TOGGLE_GROUP_MANIFEST.styles.item,
		TOGGLE_GROUP_MANIFEST.styles.variant[
			context?.variant.value || TOGGLE_GROUP_MANIFEST.defaults.variant
		],
		TOGGLE_GROUP_MANIFEST.styles.size[context?.size.value || TOGGLE_GROUP_MANIFEST.defaults.size],
		isSelected.value ? TOGGLE_GROUP_MANIFEST.styles.selected : '',
	);
});

function select(): void {
	if (!isDisabled.value) {
		context?.select(props.value);
	}
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}

	event.preventDefault();
	select();
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toggle-group.manifest.css';
</style>
