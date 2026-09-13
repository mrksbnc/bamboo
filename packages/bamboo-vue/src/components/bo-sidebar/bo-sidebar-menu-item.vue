<template>
	<a
		:id="id"
		:data-testid="dataTestId"
		:href="disabled ? undefined : href"
		:aria-current="active ? 'page' : undefined"
		:aria-disabled="disabled ? 'true' : undefined"
		:data-active="active ? 'true' : undefined"
		:class="itemClasses"
	>
		<bo-icon v-if="icon" :icon="icon" size="sm" aria-hidden="true" />
		<span :class="SIDEBAR_MANIFEST.styles.menuItem.label">{{ label }}</span>
		<slot />
	</a>
</template>

<script setup lang="ts">
import type { BoSidebarMenuItemProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoSidebarMenuItemProps>(), {
	id: () => generateComponentId('sidebar-menu-item'),
	dataTestId: () => generateDataTestId('sidebar-menu-item'),
});
const itemClasses = computed(() => [
	SIDEBAR_MANIFEST.styles.menuItem.base,
	props.active ? SIDEBAR_MANIFEST.styles.menuItem.active : '',
]);
</script>
