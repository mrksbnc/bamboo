<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		data-resizable-panel
		:data-size="defaultSize"
		:style="panelStyle"
		:class="RESIZABLE_MANIFEST.styles.panel"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { BoResizablePanelProps } from '@workspace/bamboo-core';
import { RESIZABLE_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, inject, type StyleValue } from 'vue';
import { resizableDirectionKey } from './keys.js';

const props = withDefaults(defineProps<BoResizablePanelProps>(), {
	id: () => generateComponentId('resizable-panel'),
	dataTestId: () => generateDataTestId('resizable-panel'),
	defaultSize: 50,
	minSize: 10,
});

const direction = inject(resizableDirectionKey);
const panelStyle = computed<StyleValue>(() => ({
	flexBasis: `${props.defaultSize}%`,
	minWidth: direction?.value === 'vertical' ? undefined : `${props.minSize}%`,
	minHeight: direction?.value === 'vertical' ? `${props.minSize}%` : undefined,
}));
</script>
