<template>
	<aside
		:id="id"
		:data-testid="dataTestId"
		:data-side="side"
		:data-collapsible="collapsible ? 'true' : 'false'"
		:aria-label="ariaLabel"
		:class="classValues"
		:style="styleValues"
	>
		<slot />
	</aside>
</template>

<script setup lang="ts">
import type { BoSidebarProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, provide, type StyleValue } from 'vue';
import { sidebarContextKey } from './keys.js';

const props = withDefaults(defineProps<BoSidebarProps>(), {
	id: () => generateComponentId('sidebar'),
	dataTestId: () => generateDataTestId('sidebar'),
	side: () => SIDEBAR_MANIFEST.defaults.side,
	width: '16rem',
	collapsible: () => SIDEBAR_MANIFEST.defaults.collapsible,
	ariaLabel: 'Sidebar',
});
const collapsed = defineModel<boolean>('collapsed', { default: false });
const context = {
	collapsed,
	toggle: () => {
		collapsed.value = !collapsed.value;
	},
	setCollapsed: (value: boolean) => {
		collapsed.value = value;
	},
};
provide(sidebarContextKey, context);
const classValues = computed(() => [
	SIDEBAR_MANIFEST.styles.base,
	SIDEBAR_MANIFEST.styles.side[props.side],
	props.collapsible && collapsed.value ? SIDEBAR_MANIFEST.styles.collapsed : '',
]);
const styleValues = computed<StyleValue>(() =>
	props.side === 'top' ? {} : { width: props.width },
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/sidebar.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
