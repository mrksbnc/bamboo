<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="menuitemradio"
		:disabled="disabled"
		:aria-checked="isSelected ? 'true' : 'false'"
		:class="itemClasses"
		@click="onClick"
	>
		<span :class="CONTEXT_MENU_MANIFEST.styles.itemIndicator" aria-hidden="true">
			<bo-icon v-if="isSelected" icon="check" size="sm" />
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
	type BoContextMenuRadioItemProps,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { BoIcon } from '../bo-icon';
import { contextMenuContextKey, contextMenuRadioValueKey } from './keys';

const props = withDefaults(defineProps<BoContextMenuRadioItemProps>(), {
	id: () => generateComponentId('context-menu-radio-item'),
	dataTestId: () => generateDataTestId('context-menu-radio-item'),
	variant: 'default',
});
const context = inject(contextMenuContextKey);
const value = inject(contextMenuRadioValueKey);
if (!context || !value)
	throw new Error('BoContextMenuRadioItem must be used inside a radio group and context menu');
const menuContext = context;
const radioValue = value;
const isSelected = computed(() => {
	return radioValue.value === props.value;
});
const itemClasses = computed(() => {
	return mergeTwClasses(
		CONTEXT_MENU_MANIFEST.styles.item,
		props.inset ? CONTEXT_MENU_MANIFEST.styles.itemInset : '',
		props.variant === 'destructive' ? CONTEXT_MENU_MANIFEST.styles.itemDestructive : '',
	);
});
function onClick(): void {
	if (!props.disabled) {
		radioValue.value = props.value;
		menuContext.close();
	}
}
</script>
