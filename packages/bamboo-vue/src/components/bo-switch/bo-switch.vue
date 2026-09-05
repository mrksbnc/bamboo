<template>
	<div
		:data-testid="dataTestId"
		:data-orientation="orientation"
		:class="SWITCH_MANIFEST.styles.base"
	>
		<button
			:id="id"
			:type="'button'"
			:aria-checked="model ? 'true' : 'false'"
			:aria-label="ariaLabel || (!label ? undefined : label)"
			:aria-labelledby="ariaLabelledBy || (label ? labelId : undefined)"
			:aria-describedby="ariaDescribedBy || (description ? descriptionId : undefined)"
			:disabled="disabled"
			:name="name"
			:value="value"
			:required="required"
			:role="role"
			:data-state="model ? 'checked' : 'unchecked'"
			:class="SWITCH_MANIFEST.styles.control[size]"
			@click="toggle"
		>
			<span
				:data-state="model ? 'checked' : 'unchecked'"
				:class="SWITCH_MANIFEST.styles.thumb[size]"
			/>
		</button>
		<span
			v-if="label || description || $slots['default']"
			:class="SWITCH_MANIFEST.styles.labelGroup"
		>
			<bo-text v-if="label" :id="labelId" :class="SWITCH_MANIFEST.styles.label">{{
				label
			}}</bo-text>
			<bo-text v-if="description" :id="descriptionId" :class="SWITCH_MANIFEST.styles.description">
				{{ description }}
			</bo-text>
			<slot />
		</span>
	</div>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import type { BoSwitchProps } from '@workspace/bamboo-core';
import { SWITCH_MANIFEST } from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoSwitchProps>(), {
	id: () => generateComponentId('switch'),
	dataTestId: () => generateDataTestId('switch'),
	size: () => SWITCH_MANIFEST.defaults.size,
	orientation: () => SWITCH_MANIFEST.defaults.orientation,
	role: () => SWITCH_MANIFEST.defaults.role,
});

const model = defineModel<boolean>({ default: false });
const size = computed(() => props.size || SWITCH_MANIFEST.defaults.size);
const labelId = computed(() => `${props.id}-label`);
const descriptionId = computed(() => `${props.id}-description`);

function toggle(): void {
	if (!props.disabled) model.value = !model.value;
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/switch.manifest.css';
</style>
