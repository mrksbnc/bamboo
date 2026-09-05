<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-state="open ? 'open' : 'closed'"
		:class="SIDEBAR_MANIFEST.styles.groupContent"
	>
		<div :class="SIDEBAR_MANIFEST.styles.groupContentInner"><slot /></div>
	</div>
</template>

<script setup lang="ts">
import type { BoSidebarGroupContentProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoSidebarGroupContentProps>(), {
	id: () => generateComponentId('sidebar-group-content'),
	dataTestId: () => generateDataTestId('sidebar-group-content'),
	open: false,
});
</script>
