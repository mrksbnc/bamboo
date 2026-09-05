<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-state="model ? 'open' : 'closed'"
		:class="COLLAPSIBLE_MANIFEST.styles.base"
	>
		<button
			type="button"
			:disabled="disabled"
			:aria-label="ariaLabel"
			:aria-expanded="model ? 'true' : 'false'"
			:aria-controls="contentId"
			:data-state="model ? 'open' : 'closed'"
			:class="COLLAPSIBLE_MANIFEST.styles.trigger"
			@click="toggle"
		>
			<slot name="trigger">{{ label }}</slot>
			<bo-icon icon="chevron_down" size="sm" aria-hidden="true" :class="iconClasses" />
		</button>
		<div
			:id="contentId"
			:data-state="model ? 'open' : 'closed'"
			:role="role ?? 'region'"
			:aria-hidden="model ? 'false' : 'true'"
			:class="COLLAPSIBLE_MANIFEST.styles.content"
			v-show="model"
		>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoCollapsibleProps } from '@workspace/bamboo-core';
import { COLLAPSIBLE_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoCollapsibleProps>(), {
	id: () => generateComponentId('collapsible'),
	dataTestId: () => generateDataTestId('collapsible'),
	disabled: () => COLLAPSIBLE_MANIFEST.defaults.disabled,
});

const model = defineModel<boolean>('open', { default: false });
const contentId = computed(() => `${props.id}-content`);
const iconClasses = computed(() => [
	COLLAPSIBLE_MANIFEST.styles.icon,
	model.value ? 'rotate-180' : '',
]);

function toggle(): void {
	if (!props.disabled) model.value = !model.value;
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/collapsible.manifest.css';
</style>
