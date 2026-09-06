<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		role="separator"
		:class="MENUBAR_MANIFEST.styles.separator"
	/>
</template>

<script setup lang="ts">
import type { BoMenubarSeparatorProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoMenubarSeparatorProps>(), {
	id: () => generateComponentId('menubar-separator'),
	dataTestId: () => generateDataTestId('menubar-separator'),
});
</script>
