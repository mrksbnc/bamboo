<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:aria-expanded="collapsed ? 'false' : 'true'"
		aria-label="Toggle sidebar"
		:class="SIDEBAR_MANIFEST.styles.trigger"
		@click="toggle"
	>
		<bo-icon icon="menu" size="sm" aria-hidden="true" />
	</button>
</template>

<script setup lang="ts">
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { BoIcon } from '../bo-icon';
import { useSidebar } from './keys.js';

withDefaults(defineProps<{ id?: string; dataTestId?: string }>(), {
	id: () => generateComponentId('sidebar-trigger'),
	dataTestId: () => generateDataTestId('sidebar-trigger'),
});
const { collapsed, toggle } = useSidebar();
</script>
