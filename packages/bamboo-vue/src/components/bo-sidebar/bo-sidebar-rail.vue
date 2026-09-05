<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		aria-label="Toggle sidebar"
		:class="SIDEBAR_MANIFEST.styles.rail"
		@click="toggle"
	>
		<span :class="SIDEBAR_MANIFEST.styles.visuallyHidden">Toggle sidebar</span>
	</button>
</template>

<script setup lang="ts">
import type { BoSidebarRailProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { useSidebar } from './keys.js';

withDefaults(defineProps<BoSidebarRailProps>(), {
	id: () => generateComponentId('sidebar-rail'),
	dataTestId: () => generateDataTestId('sidebar-rail'),
});
const { toggle } = useSidebar();
</script>
