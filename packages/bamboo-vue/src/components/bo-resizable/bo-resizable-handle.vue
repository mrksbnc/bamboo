<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		data-slot="resizable-handle"
		role="separator"
		:aria-orientation="direction === 'horizontal' ? 'vertical' : 'horizontal'"
		:aria-valuenow="firstPanelPercent"
		aria-valuemin="10"
		aria-valuemax="90"
		tabindex="0"
		:class="RESIZABLE_MANIFEST.styles.handle[direction]"
		@pointerdown="onPointerDown"
		@keydown="onKeydown"
	/>
</template>

<script setup lang="ts">
import type { BoResizableDirection, BoResizableHandleProps } from '@workspace/bamboo-core';
import { RESIZABLE_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, inject, ref } from 'vue';
import { resizableDirectionKey } from './keys.js';

withDefaults(defineProps<BoResizableHandleProps>(), {
	id: () => generateComponentId('resizable-handle'),
	dataTestId: () => generateDataTestId('resizable-handle'),
});

const injectedDirection = inject(resizableDirectionKey);
const direction = computed<BoResizableDirection>(() => injectedDirection?.value || 'horizontal');
const firstPanelPercent = ref(50);
let groupRect: DOMRect | undefined;
let panels: [HTMLElement, HTMLElement] | undefined;

function getPanels(event: Event): [HTMLElement, HTMLElement] | undefined {
	const group = (event.currentTarget as HTMLElement).parentElement;
	if (!group) return undefined;
	const found = Array.from(group.querySelectorAll<HTMLElement>('[data-resizable-panel]'));
	return found.length >= 2 ? [found[0]!, found[1]!] : undefined;
}

function setPercent(found: [HTMLElement, HTMLElement], percent: number): void {
	const value = Math.min(Math.max(percent, 10), 90);
	found[0].style.flexBasis = `${value}%`;
	found[1].style.flexBasis = `${100 - value}%`;
	firstPanelPercent.value = value;
}

function onPointerMove(event: PointerEvent): void {
	if (!groupRect || !panels) return;
	const position =
		direction.value === 'horizontal'
			? event.clientX - groupRect.left
			: event.clientY - groupRect.top;
	const size = direction.value === 'horizontal' ? groupRect.width : groupRect.height;
	setPercent(panels, (position / Math.max(size, 1)) * 100);
}

function onPointerUp(): void {
	groupRect = undefined;
	panels = undefined;
	document.removeEventListener('pointermove', onPointerMove);
	document.removeEventListener('pointerup', onPointerUp);
	document.removeEventListener('pointercancel', onPointerUp);
}

function onPointerDown(event: PointerEvent): void {
	event.preventDefault();
	const found = getPanels(event);
	if (!found) return;
	groupRect = (event.currentTarget as HTMLElement).parentElement?.getBoundingClientRect();
	if (!groupRect) return;
	panels = found;
	firstPanelPercent.value = Number.parseFloat(found[0].style.flexBasis || '50') || 50;
	document.addEventListener('pointermove', onPointerMove);
	document.addEventListener('pointerup', onPointerUp);
	document.addEventListener('pointercancel', onPointerUp);
}

function onKeydown(event: KeyboardEvent): void {
	const decreases =
		direction.value === 'horizontal' ? event.key === 'ArrowLeft' : event.key === 'ArrowUp';
	const increases =
		direction.value === 'horizontal' ? event.key === 'ArrowRight' : event.key === 'ArrowDown';
	if (!['Home', 'End'].includes(event.key) && !decreases && !increases) return;
	event.preventDefault();
	const found = getPanels(event);
	if (!found) return;
	const current = Number.parseFloat(found[0].style.flexBasis || '50') || 50;
	setPercent(
		found,
		event.key === 'Home' ? 10 : event.key === 'End' ? 90 : current + (decreases ? -5 : 5),
	);
}
</script>
