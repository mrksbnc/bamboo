<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		role="menubar"
		:aria-label="ariaLabel"
		aria-orientation="horizontal"
		:class="MENUBAR_MANIFEST.styles.base"
		@keydown="onKeydown"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { BoMenubarProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

const props = withDefaults(defineProps<BoMenubarProps>(), {
	id: () => generateComponentId('menubar'),
	dataTestId: () => generateDataTestId('menubar'),
	ariaLabel: 'Menu bar',
});

function onKeydown(event: KeyboardEvent): void {
	if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
	const triggers = Array.from(
		(event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>(
			'[role="menuitem"]:not(:disabled)',
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
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/menubar.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
