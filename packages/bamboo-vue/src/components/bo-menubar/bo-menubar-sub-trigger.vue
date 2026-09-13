<template>
	<div :class="MENUBAR_MANIFEST.styles.menu">
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
			:class="[MENUBAR_MANIFEST.styles.item.base, MENUBAR_MANIFEST.styles.subTrigger]"
			@click="toggle"
			@keydown="onKeydown"
		>
			<slot name="trigger">{{ value }}</slot>
		</button>
		<Transition name="bo-menubar">
			<div
				v-if="model"
				:id="contentId"
				:data-state="model ? 'open' : 'closed'"
				:class="MENUBAR_MANIFEST.styles.subContent"
				role="menu"
				@keydown="onContentKeydown"
			>
				<slot />
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import type { BoMenubarItemProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, nextTick, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<BoMenubarItemProps>(), {
	id: () => generateComponentId('menubar-sub-trigger'),
	dataTestId: () => generateDataTestId('menubar-sub-trigger'),
	disabled: false,
});
const model = defineModel<boolean>('open', { default: false });
const contentId = computed(() => `${props.id}-content`);
const triggerRef = useTemplateRef<HTMLElement>('triggerRef');

function onKeydown(event: KeyboardEvent): void {
	if (props.disabled) {
		return;
	}
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		event.stopPropagation();
		toggle();
	} else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
		event.preventDefault();
		event.stopPropagation();
		openAndFocus();
	} else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'Escape') {
		event.preventDefault();
		event.stopPropagation();
		closeAndFocus();
	}
}

function toggle(): void {
	if (!props.disabled) {
		model.value = !model.value;
		if (model.value) {
			void nextTick(() => focusMenuItem(0));
		}
	}
}

function openAndFocus(): void {
	if (props.disabled) {
		return;
	}
	model.value = true;
	void nextTick(() => focusMenuItem(0));
}

function closeAndFocus(): void {
	model.value = false;
	triggerRef.value?.focus();
}

function onContentKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape' || event.key === 'ArrowLeft') {
		event.preventDefault();
		event.stopPropagation();
		closeAndFocus();
		return;
	}
	if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
		return;
	}
	event.preventDefault();
	event.stopPropagation();
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
	items[next]?.focus();
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
	item?.focus();
}
</script>
