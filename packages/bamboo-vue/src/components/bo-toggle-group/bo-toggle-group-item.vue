<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="button"
		:disabled="disabled || context?.disabled.value"
		:aria-label="ariaLabel"
		:aria-pressed="selected ? 'true' : 'false'"
		:data-state="selected ? 'on' : 'off'"
		:class="classValues"
		@click="select"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoToggleGroupItemProps } from '@workspace/bamboo-core';
import { TOGGLE_GROUP_MANIFEST } from '@workspace/bamboo-core';
import { TOGGLE_MANIFEST } from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { toggleGroupContextKey } from './keys.js';

const props = withDefaults(defineProps<BoToggleGroupItemProps>(), {
	id: () => generateComponentId('toggle-group-item'),
	dataTestId: () => generateDataTestId('toggle-group-item'),
});

const context = inject(toggleGroupContextKey);
const selected = computed(() => {
	return context?.selected(props.value) ?? false;
});
const classValues = computed(() => {
	return mergeTwClasses(
		TOGGLE_GROUP_MANIFEST.styles.item,
		context ? TOGGLE_MANIFEST.styles.variant[context.variant.value] : '',
		context ? TOGGLE_MANIFEST.styles.size[context.size.value] : '',
	);
});

function select(): void {
	if (!props.disabled && !context?.disabled.value) context?.select(props.value);
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toggle-group.manifest.css';
</style>
