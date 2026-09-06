<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:class="groupClasses"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoToggleGroupProps } from '@workspace/bamboo-core';
import { TOGGLE_GROUP_MANIFEST } from '@workspace/bamboo-core';
import { computed, provide } from 'vue';
import { toggleGroupContextKey } from './keys.js';

const props = withDefaults(defineProps<BoToggleGroupProps>(), {
	id: () => generateComponentId('toggle-group'),
	dataTestId: () => generateDataTestId('toggle-group'),
	variant: () => TOGGLE_GROUP_MANIFEST.defaults.variant,
	size: () => TOGGLE_GROUP_MANIFEST.defaults.size,
	orientation: () => TOGGLE_GROUP_MANIFEST.defaults.orientation,
	role: () => TOGGLE_GROUP_MANIFEST.defaults.role,
});

const model = defineModel<string | string[]>();
const selectedValues = computed(() => {
	if (Array.isArray(model.value)) return new Set(model.value);
	return model.value === undefined ? new Set<string>() : new Set([model.value]);
});
const variant = computed(() => {
	return props.variant || TOGGLE_GROUP_MANIFEST.defaults.variant;
});
const size = computed(() => {
	return props.size || TOGGLE_GROUP_MANIFEST.defaults.size;
});
const groupClasses = computed(() => {
	return mergeTwClasses(
		TOGGLE_GROUP_MANIFEST.styles.base,
		TOGGLE_GROUP_MANIFEST.styles.orientation[props.orientation || 'horizontal'],
	);
});

function select(value: string): void {
	if (props.disabled) return;
	if (props.multiple) {
		const values = new Set(selectedValues.value);
		if (values.has(value)) values.delete(value);
		else values.add(value);
		model.value = Array.from(values);
		return;
	}
	model.value = selectedValues.value.has(value) ? undefined : value;
}

provide(toggleGroupContextKey, {
	selected: (value) => selectedValues.value.has(value),
	select,
	disabled: computed(() => {
		return !!props.disabled;
	}),
	variant,
	size,
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toggle-group.manifest.css';
</style>
