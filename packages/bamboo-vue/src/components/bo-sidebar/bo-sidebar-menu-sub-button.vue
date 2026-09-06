<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:disabled="disabled"
		:data-active="active ? 'true' : undefined"
		:class="SIDEBAR_MANIFEST.styles.menuSubButton"
	>
		<bo-icon v-if="icon" :icon="icon" size="sm" aria-hidden="true" /><span
			v-if="label"
			class="truncate"
			>{{ label }}</span
		><slot />
	</button>
</template>

<script setup lang="ts">
import type { BoSidebarMenuSubButtonProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { BoIcon } from '../bo-icon';

withDefaults(defineProps<BoSidebarMenuSubButtonProps>(), {
	id: () => generateComponentId('sidebar-menu-sub-button'),
	dataTestId: () => generateDataTestId('sidebar-menu-sub-button'),
	active: false,
	disabled: false,
});
</script>
