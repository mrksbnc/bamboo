<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-orientation="orientation"
		:class="groupClasses"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	BUTTON_GROUP_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoButtonGroupProps,
	type BoButtonGroupOrientation,
	type BoButtonSize,
	type BoButtonVariant,
} from '@workspace/bamboo-core';
import { computed, provide, ref, watch } from 'vue';
import { buttonGroupContextKey } from './keys.js';

const props = withDefaults(defineProps<BoButtonGroupProps>(), {
	...BUTTON_GROUP_MANIFEST.defaults,
});

const model = defineModel<string | number | (string | number)[]>();
const selectedValues = ref<Set<string | number>>(new Set());

const id = computed(() => props.id ?? generateComponentId('button-group'));
const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('button-group'));
const orientation = computed<BoButtonGroupOrientation>(
	() => props.orientation ?? BUTTON_GROUP_MANIFEST.defaults.orientation,
);
const size = computed<BoButtonSize>(() => props.size ?? 'default');
const variant = computed<BoButtonVariant>(
	() => props.variant ?? BUTTON_GROUP_MANIFEST.defaults.variant,
);
const groupClasses = computed(() => {
	const classes = [
		BUTTON_GROUP_MANIFEST.styles.base,
		BUTTON_GROUP_MANIFEST.styles.orientation[orientation.value],
		props.fullWidth ? BUTTON_GROUP_MANIFEST.styles.fullWidth : '',
		props.attached ? BUTTON_GROUP_MANIFEST.styles.attached.orientation[orientation.value] : '',
	];

	return classes.filter(Boolean).join(' ');
});

function initializeSelection(value: string | number | (string | number)[] | undefined): void {
	selectedValues.value = new Set(Array.isArray(value) ? value : value === undefined ? [] : [value]);
}

function select(value: string | number): void {
	if (props.multiple) {
		const nextSelection = new Set(selectedValues.value);
		if (nextSelection.has(value)) {
			if (!props.required || nextSelection.size > 1) nextSelection.delete(value);
		} else {
			nextSelection.add(value);
		}
		selectedValues.value = nextSelection;
		model.value = Array.from(nextSelection);
		return;
	}

	if (selectedValues.value.has(value) && !props.required) {
		selectedValues.value = new Set();
		model.value = undefined;
		return;
	}

	selectedValues.value = new Set([value]);
	model.value = value;
}

watch(model, initializeSelection, { immediate: true });

provide(buttonGroupContextKey, {
	selected: (value) => selectedValues.value.has(value),
	select,
	disabled: computed(() => false),
	size,
	variant,
	orientation,
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/button-group.manifest.css';
</style>
