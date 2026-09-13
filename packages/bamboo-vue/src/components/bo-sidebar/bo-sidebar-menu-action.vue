<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:disabled="disabled"
		:aria-label="label ?? 'Menu action'"
		:class="SIDEBAR_MANIFEST.styles.menuAction"
	>
		<bo-icon v-if="icon" :icon="icon" size="xs" aria-hidden="true" /><slot />
	</button>
</template>

<script setup lang="ts">
import type { BoSidebarMenuActionProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { BoIcon } from '../bo-icon';

withDefaults(defineProps<BoSidebarMenuActionProps>(), {
	id: () => generateComponentId('sidebar-menu-action'),
	dataTestId: () => generateDataTestId('sidebar-menu-action'),
	disabled: false,
});
</script>
