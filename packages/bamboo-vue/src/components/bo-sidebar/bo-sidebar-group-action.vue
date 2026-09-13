<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:disabled="disabled"
		:class="SIDEBAR_MANIFEST.styles.groupAction"
	>
		<bo-icon icon="chevron_down" size="xs" aria-hidden="true" />
		<span :class="SIDEBAR_MANIFEST.styles.visuallyHidden">Toggle group</span>
	</button>
</template>

<script setup lang="ts">
import type { BoSidebarGroupActionProps } from '@workspace/bamboo-core';
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { BoIcon } from '../bo-icon';

withDefaults(defineProps<BoSidebarGroupActionProps>(), {
	id: () => generateComponentId('sidebar-group-action'),
	dataTestId: () => generateDataTestId('sidebar-group-action'),
	disabled: false,
});
</script>
