<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="menuitem"
		:disabled="disabled"
		:data-disabled="disabled ? 'true' : undefined"
		:data-inset="inset ? 'true' : undefined"
		:data-variant="variant"
		:value="value"
		:class="MENUBAR_MANIFEST.styles.item.base"
		@click="select"
		@keydown="onKeydown"
	>
		<bo-icon v-if="icon" :icon="icon" size="sm" aria-hidden="true" />
		<slot>{{ value }}</slot>
		<span v-if="shortcut" :class="MENUBAR_MANIFEST.styles.item.shortcut">{{ shortcut }}</span>
	</button>
</template>

<script setup lang="ts">
import type { BoMenubarItemProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { inject } from 'vue';
import { BoIcon } from '../bo-icon';
import { menubarContextKey } from './keys';

const props = withDefaults(defineProps<BoMenubarItemProps>(), {
	id: () => generateComponentId('menubar-item'),
	dataTestId: () => generateDataTestId('menubar-item'),
	inset: false,
	variant: 'default',
});
const emit = defineEmits<{
	(event: 'select', value: string | number | undefined): void;
}>();
const context = inject(menubarContextKey, null);

function select(): void {
	if (props.disabled) {
		return;
	}
	emit('select', props.value);
	context?.closeAll();
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}
	event.preventDefault();
	select();
}
</script>
