<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="menuitemcheckbox"
		:disabled="disabled"
		:aria-checked="checked ? 'true' : 'false'"
		:data-inset="inset ? '' : undefined"
		:class="itemClasses"
		@click="onClick"
	>
		<span :class="CONTEXT_MENU_MANIFEST.styles.itemIndicator" aria-hidden="true">
			<bo-icon v-if="checked" icon="check" size="sm" />
		</span>
		<slot />
	</button>
</template>

<script setup lang="ts">
import {
	CONTEXT_MENU_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoContextMenuCheckboxItemProps,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { BoIcon } from '../bo-icon';
import { contextMenuContextKey } from './keys';

const props = withDefaults(defineProps<BoContextMenuCheckboxItemProps>(), {
	id: () => generateComponentId('context-menu-checkbox-item'),
	dataTestId: () => generateDataTestId('context-menu-checkbox-item'),
	variant: 'default',
});
const checked = defineModel<boolean>('checked', { default: false });
const context = inject(contextMenuContextKey);
if (!context) throw new Error('BoContextMenuCheckboxItem must be used inside BoContextMenu');
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
		checked.value = !checked.value;
		menuContext.close();
	}
}
</script>
