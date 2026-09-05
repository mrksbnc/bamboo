<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		data-slot="sidebar-group"
		:data-state="open ? 'open' : 'closed'"
		:class="SIDEBAR_MANIFEST.styles.group"
	>
		<div
			:data-state="open ? 'open' : 'closed'"
			:class="SIDEBAR_MANIFEST.styles.groupLabelContainer"
		>
			<span v-if="label" :class="SIDEBAR_MANIFEST.styles.groupLabel">{{ label }}</span>
			<slot name="label" />
			<slot name="action" />
			<button
				v-if="collapsible"
				type="button"
				:class="SIDEBAR_MANIFEST.styles.groupAction"
				@click="open = !open"
			>
				<bo-icon icon="chevron_down" size="xs" aria-hidden="true" />
				<span :class="SIDEBAR_MANIFEST.styles.visuallyHidden">Toggle group</span>
			</button>
		</div>
		<div :data-state="open ? 'open' : 'closed'" :class="SIDEBAR_MANIFEST.styles.groupContent">
			<div :class="SIDEBAR_MANIFEST.styles.groupContentInner"><slot /></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { BoIcon } from '../bo-icon';

withDefaults(
	defineProps<{
		id?: string;
		dataTestId?: string;
		label?: string;
		collapsible?: boolean;
	}>(),
	{
		id: () => generateComponentId('sidebar-group'),
		dataTestId: () => generateDataTestId('sidebar-group'),
		collapsible: false,
	},
);
const open = defineModel<boolean>('open', { default: true });
</script>
