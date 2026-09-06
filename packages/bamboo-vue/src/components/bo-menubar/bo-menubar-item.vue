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
		@click="$emit('select', value)"
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
import { BoIcon } from '../bo-icon';

withDefaults(defineProps<BoMenubarItemProps>(), {
	id: () => generateComponentId('menubar-item'),
	dataTestId: () => generateDataTestId('menubar-item'),
	inset: false,
	variant: 'default',
});
defineEmits<{
	(event: 'select', value: string | number | undefined): void;
}>();
</script>
