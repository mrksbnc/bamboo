<template>
	<div :class="baseClassValues">
		<table :id="id" :data-testid="dataTestId" :class="tableClassValues">
			<!-- Caption -->
			<caption v-if="caption" :class="captionClassValues">
				{{
					caption
				}}
			</caption>

			<!-- Header -->
			<thead :class="headerClassValues">
				<tr :class="headerRowClassValues">
					<!-- Selection column -->
					<th v-if="selectable" :class="checkboxHeaderClassValues">
						<bo-checkbox
							:checked="allRowsSelected"
							:indeterminate="someRowsSelected && !allRowsSelected"
							@update:checked="onSelectAll"
							size="sm"
						/>
					</th>

					<!-- Data columns -->
					<th
						v-for="column in columns"
						:key="column.key"
						:class="getHeaderCellClassValues(column)"
						:style="{ width: column.width }"
						@click="column.sortable ? onSort(column.key) : undefined"
					>
						<div class="flex items-center gap-2">
							{{ column.label }}
							<bo-icon
								v-if="column.sortable"
								:icon="getSortIcon(column.key)"
								:class="sortIconClassValues"
								size="sm"
							/>
						</div>
					</th>
				</tr>
			</thead>

			<!-- Body -->
			<tbody :class="bodyClassValues">
				<!-- Loading state -->
				<tr v-if="loading">
					<td :colspan="totalColumns" :class="loadingClassValues">
						<bo-loading-spinner size="default" />
						<span class="ml-2">Loading...</span>
					</td>
				</tr>

				<!-- Empty state -->
				<tr v-else-if="rows.length === 0">
					<td :colspan="totalColumns" :class="emptyClassValues">
						{{ emptyMessage }}
					</td>
				</tr>

				<!-- Data rows -->
				<tr
					v-else
					v-for="row in rows"
					:key="row.id"
					:class="getRowClassValues(row)"
					@click="selectable ? onRowClick(row) : undefined"
				>
					<!-- Selection column -->
					<td v-if="selectable" :class="checkboxCellClassValues">
						<bo-checkbox
							:checked="isRowSelected(row.id)"
							@update:checked="(checked) => onRowSelect(row.id, checked)"
							size="sm"
						/>
					</td>

					<!-- Data columns -->
					<td v-for="column in columns" :key="column.key" :class="getCellClassValues(column)">
						<slot :name="`cell-${column.key}`" :row="row" :column="column" :value="row[column.key]">
							{{ row[column.key] }}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		TABLE_MANIFEST,
		type BoTableColumn,
		type BoTableProps,
		type BoTableRow,
		type Icon,
	} from '@workspace/bamboo-core';
	import { computed, type ComputedRef } from 'vue';
	import BoCheckbox from '../bo-checkbox/bo-checkbox.vue';
	import BoIcon from '../bo-icon/bo-icon.vue';
	import BoLoadingSpinner from '../bo-loading-spinner/bo-loading-spinner.vue';

	const props = withDefaults(defineProps<BoTableProps>(), {
		...TABLE_MANIFEST.defaults,
		selectedRows: () => [],
	});

	interface Emits {
		'update:sort': [sort: { key: string; direction: 'asc' | 'desc' } | undefined];
		'update:selectedRows': [selectedRows: (string | number)[]];
		rowClick: [row: BoTableRow];
	}

	const emit = defineEmits<Emits>();

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('table'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('table'));

	const totalColumns = computed(() => props.columns.length + (props.selectable ? 1 : 0));

	const allRowsSelected = computed(
		() => props.rows.length > 0 && props.selectedRows.length === props.rows.length,
	);

	const someRowsSelected = computed(
		() => props.selectedRows.length > 0 && props.selectedRows.length < props.rows.length,
	);

	// Class computations
	const baseClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.base),
	);

	const tableClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TABLE_MANIFEST.styles.table.base,
			TABLE_MANIFEST.styles.table.size[props.size],
			TABLE_MANIFEST.styles.table.variant[props.variant],
		),
	);

	const captionClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.caption),
	);

	const headerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TABLE_MANIFEST.styles.header.base,
			props.stickyHeader ? TABLE_MANIFEST.styles.header.sticky : '',
		),
	);

	const headerRowClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.headerRow),
	);

	const bodyClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.body),
	);

	const sortIconClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.sortIcon),
	);

	const loadingClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.loading),
	);

	const emptyClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.empty),
	);

	const checkboxHeaderClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.headerCell.base, TABLE_MANIFEST.styles.checkbox),
	);

	const checkboxCellClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TABLE_MANIFEST.styles.cell.base, TABLE_MANIFEST.styles.checkbox),
	);

	// Helper functions
	const getHeaderCellClassValues = (column: BoTableColumn): string => {
		return mergeTwClasses(
			TABLE_MANIFEST.styles.headerCell.base,
			TABLE_MANIFEST.styles.headerCell.align[column.align || 'left'],
			column.sortable ? TABLE_MANIFEST.styles.headerCell.sortable : '',
			props.sort?.key === column.key ? TABLE_MANIFEST.styles.headerCell.sorted : '',
		);
	};

	const getCellClassValues = (column: BoTableColumn): string => {
		return mergeTwClasses(
			TABLE_MANIFEST.styles.cell.base,
			TABLE_MANIFEST.styles.cell.align[column.align || 'left'],
		);
	};

	const getRowClassValues = (row: BoTableRow): string => {
		return mergeTwClasses(
			TABLE_MANIFEST.styles.row.base,
			props.hoverable ? TABLE_MANIFEST.styles.row.hoverable : '',
			props.selectable ? TABLE_MANIFEST.styles.row.selectable : '',
			isRowSelected(row.id) ? TABLE_MANIFEST.styles.row.selected : '',
		);
	};

	const getSortIcon = (columnKey: string): Icon => {
		if (props.sort?.key !== columnKey) return 'chevrons_up';
		return props.sort.direction === 'asc' ? 'chevron_up' : 'chevron_down';
	};

	const isRowSelected = (rowId: string | number): boolean => {
		return props.selectedRows.includes(rowId);
	};

	// Event handlers
	const onSort = (columnKey: string) => {
		let newSort: { key: string; direction: 'asc' | 'desc' } | undefined;

		if (props.sort?.key === columnKey) {
			// Toggle direction or clear sort
			if (props.sort.direction === 'asc') {
				newSort = { key: columnKey, direction: 'desc' };
			} else {
				newSort = undefined; // Clear sort
			}
		} else {
			// New column sort
			newSort = { key: columnKey, direction: 'asc' };
		}

		emit('update:sort', newSort);
	};

	const onSelectAll = (checked: boolean) => {
		const newSelectedRows = checked ? props.rows.map((row) => row.id) : [];
		emit('update:selectedRows', newSelectedRows);
	};

	const onRowSelect = (rowId: string | number, checked: boolean) => {
		const newSelectedRows = checked
			? [...props.selectedRows, rowId]
			: props.selectedRows.filter((id) => id !== rowId);
		emit('update:selectedRows', newSelectedRows);
	};

	const onRowClick = (row: BoTableRow) => {
		emit('rowClick', row);

		if (props.selectable) {
			const isSelected = isRowSelected(row.id);
			onRowSelect(row.id, !isSelected);
		}
	};
</script>
