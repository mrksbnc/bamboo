<template>
	<main :id="id" :data-testid="dataTestId" :class="SIDEBAR_MANIFEST.styles.inset"><slot /></main>
</template>

<script setup lang="ts">
import type { BoSidebarInsetProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoSidebarInsetProps>(), {
	id: () => generateComponentId('sidebar-inset'),
	dataTestId: () => generateDataTestId('sidebar-inset'),
});
</script>
