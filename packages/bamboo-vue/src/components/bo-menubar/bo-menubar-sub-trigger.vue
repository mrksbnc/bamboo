<template>
	<div :class="MENUBAR_MANIFEST.styles.menu">
		<button
			:id="id"
			:data-testid="dataTestId"
			type="button"
			role="menuitem"
			:disabled="disabled"
			:data-state="model ? 'open' : 'closed'"
			:class="[MENUBAR_MANIFEST.styles.item.base, MENUBAR_MANIFEST.styles.subTrigger]"
			@click="model = !model"
		>
			{{ value }}
			<slot name="trigger" />
		</button>
		<div v-if="model" :class="MENUBAR_MANIFEST.styles.subContent" role="menu"><slot /></div>
	</div>
</template>

<script setup lang="ts">
import type { BoMenubarItemProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoMenubarItemProps>(), {
	id: () => generateComponentId('menubar-sub-trigger'),
	dataTestId: () => generateDataTestId('menubar-sub-trigger'),
	disabled: false,
});
const model = defineModel<boolean>('open', { default: false });
</script>
