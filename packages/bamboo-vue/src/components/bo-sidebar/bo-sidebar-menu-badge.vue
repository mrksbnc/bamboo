<template>
	<span :id="id" :data-testid="dataTestId" :class="SIDEBAR_MANIFEST.styles.menuBadge"
		><slot
	/></span>
</template>

<script setup lang="ts">
import type { BoSidebarMenuBadgeProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoSidebarMenuBadgeProps>(), {
	id: () => generateComponentId('sidebar-menu-badge'),
	dataTestId: () => generateDataTestId('sidebar-menu-badge'),
});
</script>
