<template>
	<nav
		:id="id"
		:data-testid="dataTestId"
		:aria-label="ariaLabel"
		:class="NAVIGATION_MENU_MANIFEST.styles.base"
		@keydown="onKeydown"
	>
		<ul :class="NAVIGATION_MENU_MANIFEST.styles.list">
			<slot />
		</ul>
		<div
			:data-state="activeId ? 'open' : 'closed'"
			:class="NAVIGATION_MENU_MANIFEST.styles.viewport"
			aria-hidden="true"
		>
			<div :class="NAVIGATION_MENU_MANIFEST.styles.indicator">
				<div :class="NAVIGATION_MENU_MANIFEST.styles.indicatorInner" />
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import type { BoNavigationMenuProps } from '@workspace/bamboo-core';
import { NAVIGATION_MENU_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { provide, ref } from 'vue';
import { navigationMenuContextKey } from './keys.js';

withDefaults(defineProps<BoNavigationMenuProps>(), {
	id: () => generateComponentId('navigation-menu'),
	dataTestId: () => generateDataTestId('navigation-menu'),
	ariaLabel: 'Navigation',
});
const activeId = ref<string | null>(null);
function open(id: string): void {
	activeId.value = id;
}
function close(): void {
	activeId.value = null;
}
function toggle(id: string): void {
	activeId.value = activeId.value === id ? null : id;
}

function onKeydown(event: KeyboardEvent): void {
	if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
	const triggers = Array.from(
		(event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>(
			'[data-slot="navigation-menu-trigger"]:not(:disabled)',
		),
	);
	if (!triggers.length) return;
	event.preventDefault();
	const current = triggers.indexOf(document.activeElement as HTMLElement);
	const next =
		event.key === 'Home'
			? 0
			: event.key === 'End'
				? triggers.length - 1
				: (current + (event.key === 'ArrowRight' ? 1 : -1) + triggers.length) % triggers.length;
	triggers[next]?.focus();
}

provide(navigationMenuContextKey, { activeId, open, close, toggle });
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/navigation-menu.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
