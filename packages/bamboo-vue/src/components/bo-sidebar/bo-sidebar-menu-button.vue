<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:disabled="disabled"
		:data-active="active ? 'true' : undefined"
		:class="buttonClasses"
	>
		<bo-icon v-if="icon" :icon="icon" size="sm" aria-hidden="true" />
		<span class="truncate">{{ label }}</span
		><slot />
	</button>
</template>

<script setup lang="ts">
import type { BoSidebarMenuButtonProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoSidebarMenuButtonProps>(), {
	id: () => generateComponentId('sidebar-menu-button'),
	dataTestId: () => generateDataTestId('sidebar-menu-button'),
});
const buttonClasses = computed(() => [
	SIDEBAR_MANIFEST.styles.menuButton.base,
	props.active ? SIDEBAR_MANIFEST.styles.menuButton.active : '',
]);
</script>
