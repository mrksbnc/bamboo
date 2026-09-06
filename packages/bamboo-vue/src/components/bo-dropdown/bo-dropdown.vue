<template>
	<div ref="rootRef" :id="id" :data-testid="dataTestId" :class="DROPDOWN_MANIFEST.styles.base">
		<button
			ref="triggerRef"
			type="button"
			:class="DROPDOWN_MANIFEST.styles.trigger"
			:disabled="disabled"
			:aria-expanded="open"
			@click="toggle"
			@keydown="onKeydown"
		>
			<slot name="trigger">Options</slot>
		</button>
		<div v-if="open" :class="DROPDOWN_MANIFEST.styles.content" role="menu" @keydown="onKeydown">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
import { DROPDOWN_MANIFEST, generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import type { BoDropdownProps } from '@workspace/bamboo-core';
import { computed, nextTick, onBeforeUnmount, onMounted, provide, useTemplateRef } from 'vue';
import { dropdownContextKey } from './keys';
const props = withDefaults(defineProps<BoDropdownProps>(), {
	id: () => generateComponentId('dropdown'),
	dataTestId: () => generateDataTestId('dropdown'),
});
const open = defineModel<boolean>('open', { default: false });
const rootRef = useTemplateRef<HTMLElement>('rootRef');
const triggerRef = useTemplateRef<HTMLElement>('triggerRef');
const disabled = computed(() => props.disabled);
function toggle(): void {
	if (!disabled.value) open.value = !open.value;
}
function close(): void {
	open.value = false;
	void nextTick(() => triggerRef.value?.focus());
}
function focusItem(index: number): void {
	void nextTick(() => {
		const items = [
			...(rootRef.value?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []),
		].filter((item) => !item.hasAttribute('disabled'));
		items[Math.max(0, Math.min(index, items.length - 1))]?.focus();
	});
}
function onKeydown(event: KeyboardEvent): void {
	const items = [
		...(rootRef.value?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []),
	].filter((item) => !item.hasAttribute('disabled'));
	const current = items.indexOf(document.activeElement as HTMLElement);
	if (event.key === 'ArrowDown') {
		event.preventDefault();
		if (!open.value) open.value = true;
		focusItem(current < 0 ? 0 : (current + 1) % items.length);
	} else if (event.key === 'ArrowUp') {
		event.preventDefault();
		if (!open.value) open.value = true;
		focusItem(current < 0 ? items.length - 1 : (current - 1 + items.length) % items.length);
	} else if (event.key === 'Home') {
		event.preventDefault();
		focusItem(0);
	} else if (event.key === 'End') {
		event.preventDefault();
		focusItem(items.length - 1);
	} else if (event.key === 'Escape') {
		event.preventDefault();
		close();
	}
}
provide(dropdownContextKey, { open, toggle, close, triggerRef });
function onPointerdown(event: PointerEvent): void {
	if (open.value && !rootRef.value?.contains(event.target as Node)) open.value = false;
}
onMounted(() => document.addEventListener('pointerdown', onPointerdown));
onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerdown));
</script>
<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dropdown.manifest.css';
</style>
