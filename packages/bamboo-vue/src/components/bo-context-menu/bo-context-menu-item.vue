<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="menuitem"
		:disabled="disabled"
		:data-disabled="disabled ? '' : undefined"
		:data-inset="inset ? '' : undefined"
		:data-variant="variant"
		:class="itemClasses"
		@click="onClick"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import {
	CONTEXT_MENU_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoContextMenuItemProps,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { contextMenuContextKey } from './keys';

const props = withDefaults(defineProps<BoContextMenuItemProps>(), {
	id: () => generateComponentId('context-menu-item'),
	dataTestId: () => generateDataTestId('context-menu-item'),
	variant: 'default',
});
const emit = defineEmits<{
	(event: 'select'): void;
}>();
const context = inject(contextMenuContextKey);
if (!context) throw new Error('BoContextMenuItem must be used inside BoContextMenu');
const menuContext = context;
const itemClasses = computed(() => {
	return mergeTwClasses(
		CONTEXT_MENU_MANIFEST.styles.item,
		props.inset ? CONTEXT_MENU_MANIFEST.styles.itemInset : '',
		props.variant === 'destructive' ? CONTEXT_MENU_MANIFEST.styles.itemDestructive : '',
	);
});
function onClick(): void {
	if (!props.disabled) {
		emit('select');
		menuContext.close();
	}
}
</script>
