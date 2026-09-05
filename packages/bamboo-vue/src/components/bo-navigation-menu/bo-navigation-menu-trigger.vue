<template>
	<li :id="itemId" :class="NAVIGATION_MENU_MANIFEST.styles.item">
		<button
			:id="id"
			:data-testid="dataTestId"
			type="button"
			:data-slot="'navigation-menu-trigger'"
			:disabled="disabled"
			:aria-haspopup="'menu'"
			:aria-expanded="isOpen ? 'true' : 'false'"
			:data-state="isOpen ? 'open' : 'closed'"
			:class="NAVIGATION_MENU_MANIFEST.styles.trigger"
			@click="toggle"
			@keydown.arrow-down.prevent="open"
			@keydown.escape="close"
		>
			{{ label }}
			<bo-icon icon="chevron_down" size="sm" aria-hidden="true" :class="iconClasses" />
		</button>
		<div v-if="isOpen" :class="NAVIGATION_MENU_MANIFEST.styles.content" role="menu">
			<slot />
		</div>
	</li>
</template>

<script setup lang="ts">
import type { BoNavigationMenuTriggerProps } from '@workspace/bamboo-core';
import { NAVIGATION_MENU_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, inject, provide, useId } from 'vue';
import { BoIcon } from '../bo-icon';
import {
	defaultNavigationMenuContext,
	navigationMenuContextKey,
	navigationMenuTriggerKey,
} from './keys.js';

const props = withDefaults(defineProps<BoNavigationMenuTriggerProps>(), {
	id: () => generateComponentId('navigation-trigger'),
	dataTestId: () => generateDataTestId('navigation-trigger'),
});
const context = inject(navigationMenuContextKey, defaultNavigationMenuContext);
const itemId = useId();
const isOpen = computed(() => context.activeId.value === itemId);
const iconClasses = computed(() => (isOpen.value ? 'rotate-180' : ''));
provide(navigationMenuTriggerKey, { id: itemId });
function open(): void {
	if (!props.disabled) context.open(itemId);
}
function close(): void {
	context.close();
}
function toggle(): void {
	if (!props.disabled) context.toggle(itemId);
}
</script>
