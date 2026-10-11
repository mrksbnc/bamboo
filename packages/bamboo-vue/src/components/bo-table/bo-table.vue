<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-striped="striped"
		:data-bordered="bordered"
		:data-empty="rows.length === 0 ? 'true' : undefined"
		:aria-label="ariaLabel"
		:aria-describedby="caption ? captionId : undefined"
		:aria-rowcount="rows.length ? rows.length + 1 : 2"
		:aria-colcount="columns.length + (hasActions ? 1 : 0)"
		role="table"
		:class="TABLE_MANIFEST.styles.base"
	>
		<div :class="TABLE_MANIFEST.styles.wrapper">
			<div v-if="caption" :id="captionId" role="caption" :class="TABLE_MANIFEST.styles.caption">
				{{ caption }}
			</div>

			<div role="rowgroup" :class="TABLE_MANIFEST.styles.head">
				<div
					role="row"
					:aria-rowindex="1"
					:class="TABLE_MANIFEST.styles.row"
					:style="{ gridTemplateColumns }"
				>
					<div
						v-for="(column, columnIndex) in columns"
						:key="column.key"
						role="columnheader"
						:aria-colindex="columnIndex + 1"
						:class="TABLE_MANIFEST.styles.header"
						:style="{
							textAlign: column.align,
							justifyContent:
								column.align === 'center'
									? 'center'
									: column.align === 'end'
										? 'flex-end'
										: 'flex-start',
						}"
					>
						{{ column.label }}
					</div>
					<div
						v-if="hasActions"
						role="columnheader"
						:aria-colindex="columns.length + 1"
						:class="[TABLE_MANIFEST.styles.header, 'min-w-max whitespace-nowrap']"
						style="text-align: end; justify-content: flex-end"
					>
						{{ actionsLabel }}
					</div>
				</div>
			</div>

			<div role="rowgroup" :class="TABLE_MANIFEST.styles.body">
				<div
					v-for="(row, rowIndex) in rows"
					:key="rowIndex"
					role="row"
					:aria-rowindex="rowIndex + 2"
					:class="TABLE_MANIFEST.styles.row"
					:style="{ gridTemplateColumns }"
				>
					<div
						v-for="(column, columnIndex) in columns"
						:key="column.key"
						role="cell"
						:aria-colindex="columnIndex + 1"
						:class="TABLE_MANIFEST.styles.cell"
						:style="{
							textAlign: column.align,
							justifyContent:
								column.align === 'center'
									? 'center'
									: column.align === 'end'
										? 'flex-end'
										: 'flex-start',
						}"
					>
						<slot
							:name="`cell-${column.key}`"
							:value="row[column.key]"
							:row="row"
							:index="rowIndex"
						>
							{{ row[column.key] }}
						</slot>
					</div>
					<div
						v-if="hasActions"
						role="cell"
						:aria-colindex="columns.length + 1"
						:class="[TABLE_MANIFEST.styles.cell, 'min-w-max whitespace-nowrap']"
						style="justify-content: flex-end"
					>
						<slot name="actions" :actions="actions" :row="row" :index="rowIndex">
							<div :class="TABLE_MANIFEST.styles.actions">
								<bo-dropdown :aria-label="`${actionsLabel} for row ${rowIndex + 1}`">
									<template #trigger>
										<bo-icon icon="more_vertical" size="sm" aria-hidden="true" />
									</template>
									<bo-dropdown-item
										v-for="action in actions"
										:key="action.label"
										:disabled="action.disabled"
										:destructive="action.variant === 'destructive'"
										@select="action.onClick?.(row, rowIndex)"
									>
										{{ action.label }}
									</bo-dropdown-item>
								</bo-dropdown>
							</div>
						</slot>
					</div>
				</div>

				<div
					v-if="!rows.length"
					role="row"
					aria-rowindex="2"
					:class="TABLE_MANIFEST.styles.row"
					:style="{ gridTemplateColumns }"
				>
					<div
						role="cell"
						:aria-colspan="columns.length + (hasActions ? 1 : 0)"
						:class="TABLE_MANIFEST.styles.cell"
						:style="{ gridColumn: '1 / -1' }"
					>
						<div :class="TABLE_MANIFEST.styles.empty"><slot name="empty">No results.</slot></div>
					</div>
				</div>
			</div>
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
import { BoDropdown, BoDropdownItem } from '../bo-dropdown';
import { BoIcon } from '../bo-icon';

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
const captionId = computed(() => `${props.id}-caption`);
const slots = useSlots();
const hasActions = computed(() => actions.value.length > 0 || !!slots['actions']);
const gridTemplateColumns = computed(() => {
	const tracks = columns.value.map((column) => {
		if (column.width === undefined) {
			return 'minmax(0, 1fr)';
		}
		return `${Math.min(100, Math.max(0, column.width))}%`;
	});
	if (!tracks.length) {
		tracks.push('minmax(0, 1fr)');
	}
	return `${tracks.join(' ')}${hasActions.value ? ' auto' : ''}`;
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
