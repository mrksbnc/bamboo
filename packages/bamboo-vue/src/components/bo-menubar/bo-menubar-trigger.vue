<template>
	<div :id="wrapperId" :class="MENUBAR_MANIFEST.styles.menu">
		<button
			:id="id"
			:data-testid="dataTestId"
			type="button"
			role="menuitem"
			:disabled="disabled"
			:aria-haspopup="'menu'"
			:aria-expanded="model ? 'true' : 'false'"
			:aria-controls="contentId"
			:data-state="model ? 'open' : 'closed'"
			:class="triggerClasses"
			@click="toggle"
			@keydown.arrow-down.prevent="open"
			@keydown.escape="close"
		>
			{{ label }}
			<slot name="trigger" />
		</button>
		<div
			v-if="model"
			:id="contentId"
			role="menu"
			:data-state="model ? 'open' : 'closed'"
			:class="MENUBAR_MANIFEST.styles.content"
			@keydown="onContentKeydown"
		>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoMenubarTriggerProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoMenubarTriggerProps>(), {
	id: () => generateComponentId('menubar-trigger'),
	dataTestId: () => generateDataTestId('menubar-trigger'),
});
const model = defineModel<boolean>('open', { default: false });
const wrapperId = computed(() => `${props.id}-wrapper`);
const contentId = computed(() => `${props.id}-content`);
const triggerClasses = computed(() => [
	MENUBAR_MANIFEST.styles.trigger.base,
	model.value ? MENUBAR_MANIFEST.styles.trigger.active : '',
]);

function open(): void {
	if (!props.disabled) model.value = true;
}
function close(): void {
	model.value = false;
}
function toggle(): void {
	if (!props.disabled) model.value = !model.value;
}
function onContentKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape') {
		event.preventDefault();
		close();
		(document.getElementById(props.id) as HTMLElement | null)?.focus();
	}
}
</script>
