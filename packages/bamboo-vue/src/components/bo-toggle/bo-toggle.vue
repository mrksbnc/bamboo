<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:role="role"
		:disabled="disabled"
		:aria-label="ariaLabel || label"
		:aria-pressed="model ? 'true' : 'false'"
		:data-state="model ? 'on' : 'off'"
		:class="classValues"
		@click="toggle"
	>
		<bo-text v-if="label">{{ label }}</bo-text>
		<slot v-else />
	</button>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoToggleProps } from '@workspace/bamboo-core';
import { TOGGLE_MANIFEST } from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoToggleProps>(), {
	id: () => generateComponentId('toggle'),
	dataTestId: () => generateDataTestId('toggle'),
	variant: () => TOGGLE_MANIFEST.defaults.variant,
	size: () => TOGGLE_MANIFEST.defaults.size,
	role: () => TOGGLE_MANIFEST.defaults.role,
});

const model = defineModel<boolean>({ default: false });
const classValues = computed(() => {
	return mergeTwClasses(
		TOGGLE_MANIFEST.styles.base,
		TOGGLE_MANIFEST.styles.variant[props.variant || 'default'],
		TOGGLE_MANIFEST.styles.size[props.size || 'default'],
		model.value ? TOGGLE_MANIFEST.styles.pressed : '',
	);
});

function toggle(): void {
	if (!props.disabled) model.value = !model.value;
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toggle.manifest.css';
</style>
