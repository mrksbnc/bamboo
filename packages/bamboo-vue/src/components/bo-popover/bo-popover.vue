<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-state="open ? 'open' : 'closed'"
		:class="POPOVER_MANIFEST.styles.base"
	>
		<slot name="trigger" />
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { BoPopoverProps } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId, POPOVER_MANIFEST } from '@workspace/bamboo-core';
import { computed, onMounted, onUnmounted, provide, ref } from 'vue';
import { popoverContextKey } from './keys';

const props = withDefaults(defineProps<BoPopoverProps>(), {
	placement: () => POPOVER_MANIFEST.defaults.placement,
	offset: () => POPOVER_MANIFEST.defaults.offset,
	closeOnOutside: () => POPOVER_MANIFEST.defaults.closeOnOutside,
	closeOnEscape: () => POPOVER_MANIFEST.defaults.closeOnEscape,
	role: () => POPOVER_MANIFEST.defaults.role,
	id: () => generateComponentId('popover'),
	dataTestId: () => generateDataTestId('popover'),
});

const open = defineModel<boolean>('open', { default: false });
const triggerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const contentId = ref(generateComponentId('popover-content'));
const placement = computed(() => {
	return props.placement || POPOVER_MANIFEST.defaults.placement;
});
const offset = computed(() => {
	return props.offset ?? POPOVER_MANIFEST.defaults.offset;
});

function close(): void {
	open.value = false;
}

function onPointerDown(event: PointerEvent): void {
	if (!props.closeOnOutside || !open.value) return;
	const target = event.target as Node;
	if (!triggerRef.value?.contains(target) && !contentRef.value?.contains(target)) close();
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape' && open.value && props.closeOnEscape) {
		event.preventDefault();
		close();
	}
}

provide(popoverContextKey, { open, placement, offset, contentId, triggerRef, contentRef, close });
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
@import '@workspace/bamboo-core/manifests/popover.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
