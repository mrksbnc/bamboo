<template>
	<Teleport to="body">
		<Transition name="bo-context-menu">
			<div
				v-if="context.open.value"
				:id="id"
				:data-testid="dataTestId"
				:role="role"
				:data-state="'open'"
				:class="CONTEXT_MENU_MANIFEST.styles.content"
				:style="contentStyle"
				ref="contentRef"
				tabindex="-1"
				@keydown="onKeydown"
			>
				<slot />
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import {
	CONTEXT_MENU_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoContextMenuProps,
} from '@workspace/bamboo-core';
import { computed, inject, nextTick, ref, watch } from 'vue';
import { contextMenuContextKey } from './keys';

const props = withDefaults(defineProps<BoContextMenuProps>(), {
	id: () => generateComponentId('context-menu-content'),
	dataTestId: () => generateDataTestId('context-menu-content'),
	role: () => CONTEXT_MENU_MANIFEST.defaults.role,
});
const context = inject(contextMenuContextKey);
if (!context) throw new Error('BoContextMenuContent must be used inside BoContextMenu');
const menuContext = context;

const contentRef = ref<HTMLElement>();
const contentStyle = computed(() => ({
	left: `${menuContext.position.value.x}px`,
	top: `${menuContext.position.value.y}px`,
}));

function onKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape') {
		event.preventDefault();
		menuContext.close();
		return;
	}
	const items = [
		...(contentRef.value?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []),
	].filter((item) => !item.hasAttribute('disabled'));
	if (!items.length || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
	event.preventDefault();
	const active = document.activeElement;
	const current = items.indexOf(active as HTMLElement);
	const next =
		event.key === 'Home'
			? 0
			: event.key === 'End'
				? items.length - 1
				: event.key === 'ArrowDown'
					? (current + 1) % items.length
					: (current - 1 + items.length) % items.length;
	items[next].focus();
}

watch(
	() => menuContext.open.value,
	(isOpen) => {
		if (isOpen) nextTick(() => contentRef.value?.focus());
	},
);
watch(
	contentRef,
	(element) => {
		menuContext.contentRef.value = element;
	},
	{ immediate: true },
);
</script>
