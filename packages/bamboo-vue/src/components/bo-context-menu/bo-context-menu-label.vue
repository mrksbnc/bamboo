<template>
	<div :id="id" :data-testid="dataTestId" :class="labelClasses">
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	CONTEXT_MENU_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoContextMenuLabelProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoContextMenuLabelProps>(), {
	id: () => generateComponentId('context-menu-label'),
	dataTestId: () => generateDataTestId('context-menu-label'),
});
const labelClasses = computed(() =>
	mergeTwClasses(
		CONTEXT_MENU_MANIFEST.styles.label,
		props.inset ? CONTEXT_MENU_MANIFEST.styles.labelInset : '',
	),
);
</script>
