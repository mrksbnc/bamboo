<template>
	<div :id="wrapperId" :class="MENUBAR_MANIFEST.styles.menu">
		<button
			ref="triggerRef"
			:id="id"
			:data-testid="dataTestId"
			type="button"
			role="menuitem"
			:disabled="disabled"
			:aria-haspopup="'menu'"
			:aria-expanded="model ? 'true' : 'false'"
			:aria-controls="contentId"
			:data-state="model ? 'open' : 'closed'"
			:data-menubar-trigger="true"
			:class="triggerClasses"
			@click="toggle"
			@keydown="onTriggerKeydown"
		>
			<slot name="trigger">{{ label }}</slot>
		</button>
		<Transition name="bo-menubar">
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
		</Transition>
	</div>
</template>

<script setup lang="ts">
import type { BoMenubarTriggerProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, inject, nextTick, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { menubarContextKey } from './keys';

const props = withDefaults(defineProps<BoMenubarTriggerProps>(), {
	id: () => generateComponentId('menubar-trigger'),
	dataTestId: () => generateDataTestId('menubar-trigger'),
});
const model = defineModel<boolean>('open', { default: false });
const context = inject(menubarContextKey, null);
const triggerRef = useTemplateRef<HTMLElement>('triggerRef');
const wrapperId = computed(() => {
	return `${props.id}-wrapper`;
});
const contentId = computed(() => {
	return `${props.id}-content`;
});
const triggerClasses = computed(() => {
	return [
		MENUBAR_MANIFEST.styles.trigger.base,
		model.value ? MENUBAR_MANIFEST.styles.trigger.active : '',
	];
});

function open(): void {
	if (!props.disabled) {
		if (context) {
			context.openTrigger(props.id, true);
		} else model.value = true;
	}
}

function openAndFocus(): void {
	open();
	void nextTick(() => focusMenuItem(0));
}

function openAndFocusLast(): void {
	open();
	void nextTick(() => focusMenuItem(-1));
}

function close(): void {
	if (context) {
		context.openTrigger(props.id, false);
	} else model.value = false;
}
function toggle(): void {
	if (!props.disabled) {
		if (context) {
			context.openTrigger(props.id, !model.value);
		} else model.value = !model.value;
	}
}
function onTriggerKeydown(event: KeyboardEvent): void {
	if (props.disabled) {
		return;
	}
	if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		openAndFocus();
	} else if (event.key === 'ArrowUp') {
		event.preventDefault();
		openAndFocusLast();
	} else if (event.key === 'Escape') {
		event.preventDefault();
		close();
		triggerRef.value?.focus();
	}
}
function onContentKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape') {
		event.preventDefault();
		close();
		triggerRef.value?.focus();
		return;
	}

	if (event.key === 'ArrowLeft') {
		event.preventDefault();
		close();
		triggerRef.value?.focus();
		return;
	}

	if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
		return;
	}
	event.preventDefault();
	const items = menuItems(event.currentTarget as HTMLElement);
	if (!items.length) {
		return;
	}
	const current = items.indexOf(
		(event.target as HTMLElement).closest('[role="menuitem"]') as HTMLElement,
	);
	const next =
		event.key === 'Home'
			? 0
			: event.key === 'End'
				? items.length - 1
				: (current + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
	items[next < 0 ? items.length - 1 : next]?.focus();
}

function menuItems(container: HTMLElement): HTMLElement[] {
	return Array.from(container.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(
		(item) =>
			item.closest('[role="menu"]') === container &&
			!item.hasAttribute('disabled') &&
			item.getAttribute('aria-disabled') !== 'true',
	);
}

function focusMenuItem(index: number): void {
	const content = document.getElementById(contentId.value);
	const item = content ? menuItems(content)[index] : undefined;
	if (index < 0 && content) {
		const items = menuItems(content);
		items[items.length - 1]?.focus();
		return;
	}
	item?.focus();
}

onMounted(() => {
	context?.register({ id: props.id, open: model, element: triggerRef });
});

onUnmounted(() => context?.unregister(props.id));
</script>
