<template>
	<ul :id="id" :data-testid="dataTestId" :class="SIDEBAR_MANIFEST.styles.menuSub">
		<slot />
	</ul>
</template>

<script setup lang="ts">
import type { BoSidebarMenuSubProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoSidebarMenuSubProps>(), {
	id: () => generateComponentId('sidebar-menu-sub'),
	dataTestId: () => generateDataTestId('sidebar-menu-sub'),
});
</script>
