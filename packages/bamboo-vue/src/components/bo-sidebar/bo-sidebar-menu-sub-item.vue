<template>
	<li :id="id" :data-testid="dataTestId">
		<a
			v-if="href"
			:href="disabled ? undefined : href"
			:aria-current="active ? 'page' : undefined"
			:data-active="active ? 'true' : undefined"
			:data-disabled="disabled ? 'true' : undefined"
			:class="SIDEBAR_MANIFEST.styles.menuSubItem"
			>{{ label }}<slot
		/></a>
		<slot v-else />
	</li>
</template>

<script setup lang="ts">
import type { BoSidebarMenuSubItemProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoSidebarMenuSubItemProps>(), {
	id: () => generateComponentId('sidebar-menu-sub-item'),
	dataTestId: () => generateDataTestId('sidebar-menu-sub-item'),
	active: false,
	disabled: false,
});
</script>
