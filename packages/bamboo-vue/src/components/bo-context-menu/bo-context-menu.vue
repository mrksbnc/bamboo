<template>
	<div><slot /></div>
</template>

<script setup lang="ts">
import { CONTEXT_MENU_MANIFEST, type BoContextMenuProps } from '@workspace/bamboo-core';
import { onMounted, onUnmounted, provide, ref, useTemplateRef } from 'vue';
import { contextMenuContextKey } from './keys';

const props = withDefaults(defineProps<BoContextMenuProps>(), {
	closeOnOutside: () => CONTEXT_MENU_MANIFEST.defaults.closeOnOutside,
	closeOnEscape: () => CONTEXT_MENU_MANIFEST.defaults.closeOnEscape,
	role: () => CONTEXT_MENU_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: false });
const position = ref({ x: 0, y: 0 });
const contentRef = useTemplateRef<HTMLElement>('contentRef');

function close(): void {
	open.value = false;
}

function openAt(x: number, y: number): void {
	position.value = { x: Math.max(8, x), y: Math.max(8, y) };
	open.value = true;
}

function onPointerDown(event: PointerEvent): void {
	if (!props.closeOnOutside || !open.value) return;
	if (!contentRef.value?.contains(event.target as Node)) close();
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape' && open.value && props.closeOnEscape) {
		event.preventDefault();
		close();
	}
}

provide(contextMenuContextKey, { open, position, contentRef, close, openAt });
onMounted(() => {
	document.addEventListener('pointerdown', onPointerDown);
	document.addEventListener('keydown', onKeydown);
});
onUnmounted(() => {
	document.removeEventListener('pointerdown', onPointerDown);
	document.removeEventListener('keydown', onKeydown);
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/context-menu.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
