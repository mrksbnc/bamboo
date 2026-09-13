<template>
	<div><slot /></div>
</template>

<script setup lang="ts">
import { HOVER_CARD_MANIFEST, type BoHoverCardProps } from '@workspace/bamboo-core';
import { computed, onUnmounted, provide, ref } from 'vue';
import { hoverCardContextKey } from './keys';

const props = withDefaults(defineProps<BoHoverCardProps>(), {
	placement: () => HOVER_CARD_MANIFEST.defaults.placement,
	offset: () => HOVER_CARD_MANIFEST.defaults.offset,
	openDelay: () => HOVER_CARD_MANIFEST.defaults.openDelay,
	closeDelay: () => HOVER_CARD_MANIFEST.defaults.closeDelay,
	role: () => HOVER_CARD_MANIFEST.defaults.role,
});
const open = defineModel<boolean>('open', { default: false });
const triggerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const placement = computed(() => props.placement || HOVER_CARD_MANIFEST.defaults.placement);
const offset = computed(() => props.offset ?? HOVER_CARD_MANIFEST.defaults.offset);
let openTimer: ReturnType<typeof setTimeout> | undefined;
let closeTimer: ReturnType<typeof setTimeout> | undefined;

function clearTimers(): void {
	if (openTimer) clearTimeout(openTimer);
	if (closeTimer) clearTimeout(closeTimer);
	openTimer = undefined;
	closeTimer = undefined;
}

function scheduleOpen(): void {
	clearTimers();
	openTimer = setTimeout(() => {
		open.value = true;
	}, props.openDelay);
}

function scheduleClose(): void {
	clearTimers();
	closeTimer = setTimeout(() => {
		open.value = false;
	}, props.closeDelay);
}

provide(hoverCardContextKey, {
	open,
	placement,
	offset,
	triggerRef,
	contentRef,
	scheduleOpen,
	scheduleClose,
});
onUnmounted(clearTimers);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/hover-card.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
