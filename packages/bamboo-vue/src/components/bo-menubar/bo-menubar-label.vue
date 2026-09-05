<template>
	<div :id="id" :data-testid="dataTestId" :class="MENUBAR_MANIFEST.styles.label"><slot /></div>
</template>

<script setup lang="ts">
import type { BoMenubarLabelProps } from '@workspace/bamboo-core';
import { MENUBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoMenubarLabelProps>(), {
	id: () => generateComponentId('menubar-label'),
	dataTestId: () => generateDataTestId('menubar-label'),
});
</script>
