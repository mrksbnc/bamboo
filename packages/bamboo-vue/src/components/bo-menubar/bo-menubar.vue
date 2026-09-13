<template>
	<nav
		ref="rootRef"
		:id="id"
		:data-testid="dataTestId"
		role="menubar"
		:aria-label="ariaLabel"
		aria-orientation="horizontal"
		:data-placement="placement"
		:data-state="activeId ? 'open' : 'closed'"
		:class="[MENUBAR_MANIFEST.styles.base, MENUBAR_MANIFEST.styles.placement[placement]]"
		@keydown="onKeydown"
	>
		<div :class="MENUBAR_MANIFEST.styles.start">
			<slot name="start"><slot name="left" /></slot>
		</div>
		<div :class="MENUBAR_MANIFEST.styles.main">
			<slot name="main"><slot /></slot>
		</div>
		<div :class="MENUBAR_MANIFEST.styles.end">
			<slot name="end"><slot name="right" /></slot>
		</div>
	</nav>
</template>

<script setup lang="ts">
import type { BoMenubarProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, onMounted, onUnmounted, provide, shallowRef, useTemplateRef } from 'vue';
import { menubarContextKey, type MenubarTriggerRegistration } from './keys';

const props = withDefaults(defineProps<BoMenubarProps>(), {
	id: () => generateComponentId('menubar'),
	dataTestId: () => generateDataTestId('menubar'),
	ariaLabel: 'Menu bar',
	placement: () => MENUBAR_MANIFEST.defaults.placement,
});

const registrations = shallowRef(new Map<string, MenubarTriggerRegistration>());
const rootRef = useTemplateRef<HTMLElement>('rootRef');
const activeId = computed<string | null>(() => {
	for (const trigger of registrations.value.values()) {
		if (trigger.open.value) return trigger.id;
	}
	return null;
});
const placement = computed(() => props.placement ?? MENUBAR_MANIFEST.defaults.placement);

function register(trigger: MenubarTriggerRegistration): void {
	registrations.value.set(trigger.id, trigger);
	registrations.value = new Map(registrations.value);
}

function unregister(id: string): void {
	registrations.value.delete(id);
	registrations.value = new Map(registrations.value);
}

function openTrigger(id: string, shouldOpen: boolean): void {
	for (const trigger of registrations.value.values()) {
		trigger.open.value = shouldOpen && trigger.id === id;
	}
}

function closeAll(): void {
	for (const trigger of registrations.value.values()) trigger.open.value = false;
}

provide(menubarContextKey, { activeId, register, unregister, openTrigger, closeAll });

function onKeydown(event: KeyboardEvent): void {
	const target = event.target as HTMLElement | null;
	if (event.key === 'Escape') {
		if (!activeId.value) return;
		event.preventDefault();
		const trigger = registrations.value.get(activeId.value)?.element.value;
		closeAll();
		trigger?.focus();
		return;
	}

	if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
	if (!target?.matches('[data-menubar-trigger]')) return;
	const triggers = Array.from(
		(event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('[data-menubar-trigger]'),
	);
	const enabledTriggers = triggers.filter((trigger) => !trigger.hasAttribute('disabled'));
	if (!enabledTriggers.length) return;
	event.preventDefault();
	const current = enabledTriggers.indexOf(target);
	const next =
		event.key === 'Home'
			? 0
			: event.key === 'End'
				? enabledTriggers.length - 1
				: (current + (event.key === 'ArrowRight' ? 1 : -1) + enabledTriggers.length) %
					enabledTriggers.length;
	closeAll();
	enabledTriggers[next]?.focus();
}

function onPointerdown(event: PointerEvent): void {
	if (activeId.value && !rootRef.value?.contains(event.target as Node)) closeAll();
}

onMounted(() => document.addEventListener('pointerdown', onPointerdown));
onUnmounted(() => document.removeEventListener('pointerdown', onPointerdown));
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/menubar.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
