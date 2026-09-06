<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-striped="striped"
		:data-bordered="bordered"
		:class="TABLE_MANIFEST.styles.base"
	>
		<div :class="TABLE_MANIFEST.styles.wrapper">
			<table :class="TABLE_MANIFEST.styles.table" :aria-label="ariaLabel">
				<caption v-if="caption" :class="TABLE_MANIFEST.styles.caption">
					{{
						caption
					}}
				</caption>
				<thead :class="TABLE_MANIFEST.styles.head">
					<tr :class="TABLE_MANIFEST.styles.row">
						<th
							v-for="column in columns"
							:key="column.key"
							scope="col"
							:class="TABLE_MANIFEST.styles.header"
							:style="{ textAlign: column.align }"
						>
							{{ column.label }}
						</th>
						<th
							v-if="hasActions"
							scope="col"
							:class="[TABLE_MANIFEST.styles.header, 'w-px whitespace-nowrap']"
							:style="{ textAlign: 'end' }"
						>
							{{ actionsLabel }}
						</th>
					</tr>
				</thead>
				<tbody :class="TABLE_MANIFEST.styles.body">
					<tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="TABLE_MANIFEST.styles.row">
						<td
							v-for="column in columns"
							:key="column.key"
							:class="TABLE_MANIFEST.styles.cell"
							:style="{ textAlign: column.align }"
						>
							<slot
								:name="`cell-${column.key}`"
								:value="row[column.key]"
								:row="row"
								:index="rowIndex"
								>{{ row[column.key] }}</slot
							>
						</td>
						<td
							v-if="hasActions"
							:class="[TABLE_MANIFEST.styles.cell, 'w-px whitespace-nowrap']"
							:style="{ textAlign: 'end' }"
						>
							<slot name="actions" :actions="actions" :row="row" :index="rowIndex">
								<div :class="TABLE_MANIFEST.styles.actions">
									<bo-button
										v-for="action in actions"
										:key="action.label"
										:variant="action.variant"
										:kind="action.kind"
										:disabled="action.disabled"
										:aria-label="action.ariaLabel ?? action.label"
										size="sm"
										@click="action.onClick?.(row, rowIndex)"
									>
										{{ action.label }}
									</bo-button>
								</div>
							</slot>
						</td>
					</tr>
					<tr v-if="!rows.length">
						<td
							:colspan="columns.length + (hasActions ? 1 : 0)"
							:class="TABLE_MANIFEST.styles.cell"
						>
							<div :class="TABLE_MANIFEST.styles.empty"><slot name="empty">No results.</slot></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	TABLE_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoTableAction,
	type BoTableProps,
} from '@workspace/bamboo-core';
import { computed, useSlots } from 'vue';
import { BoButton } from '../bo-button';
const props = withDefaults(defineProps<BoTableProps>(), {
	id: () => generateComponentId('table'),
	dataTestId: () => generateDataTestId('table'),
	striped: false,
	bordered: false,
	actions: () => [],
	actionsLabel: 'Actions',
});
const columns = computed(() => props.columns);
const rows = computed(() => props.rows);
const actions = computed<BoTableAction[]>(() => props.actions ?? []);
const actionsLabel = computed(() => props.actionsLabel ?? 'Actions');
const slots = useSlots();
const hasActions = computed(() => {
	return actions.value.length > 0 || !!slots['actions'];
});

defineSlots<{
	default?: () => unknown;
	empty?: () => unknown;
	actions?: (props: {
		actions: BoTableAction[];
		row: Record<string, unknown>;
		index: number;
	}) => unknown;
	[key: `cell-${string}`]: (props: {
		value: unknown;
		row: Record<string, unknown>;
		index: number;
	}) => unknown;
}>();
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/table.manifest.css';
</style>
