<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:data-value="value"
		type="button"
		:disabled="isDisabled"
		:tabindex="isDisabled ? -1 : 0"
		:aria-label="ariaLabel"
		:aria-pressed="isSelected ? 'true' : 'false'"
		:aria-disabled="isDisabled ? 'true' : undefined"
		:data-state="isSelected ? 'on' : 'off'"
		:class="classValues"
		@click="select"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import {
	BUTTON_GROUP_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoButtonGroupItemProps,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { buttonGroupContextKey } from './keys.js';

const props = withDefaults(defineProps<BoButtonGroupItemProps>(), {
	id: () => generateComponentId('button-group-item'),
	dataTestId: () => generateDataTestId('button-group-item'),
});

const context = inject(buttonGroupContextKey);
const isSelected = computed(() => context?.selected(props.value) ?? false);
const isDisabled = computed(() => props.disabled || context?.disabled.value === true);
const classValues = computed(() =>
	mergeTwClasses(
		BUTTON_GROUP_MANIFEST.styles.item,
		BUTTON_GROUP_MANIFEST.styles.size[props.size ?? context?.size.value ?? 'default'],
		BUTTON_GROUP_MANIFEST.styles.variant[props.variant ?? context?.variant.value ?? 'secondary'],
		isSelected.value ? BUTTON_GROUP_MANIFEST.styles.selected : '',
	),
);

function select(): void {
	if (!isDisabled.value) context?.select(props.value);
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/button-group.manifest.css';
</style>
