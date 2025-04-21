<template>
	<div
		class="bo-table"
		:class="[containerClasses]"
	>
		<table :class="tableClasses">
			<thead :class="theadClasses">
				<tr>
					<th
						v-for="(column, index) in columns"
						:key="index"
						:class="[headerCellClasses, column.headerClass]"
						:style="column.width ? { width: column.width } : {}"
					>
						{{ column.header }}
					</th>
				</tr>
			</thead>
			<tbody :class="tbodyClasses">
				<component
					v-for="(row, rowIndex) in data"
					:key="rowIndex"
					:is="rowComponent"
					:row="row"
					:columns="columns"
					:class="rowClasses"
				/>
				<tr
					v-if="!data || data.length === 0"
					:class="rowClasses"
				>
					<td
						:colspan="columns.length"
						:class="cellClasses"
					>
						<slot name="empty">
							<div class="bo-table__empty-message py-4 text-center text-slate-500">
								No data available
							</div>
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts" generic="T">
import { TailwindService } from '@/services';
import { computed, toRefs } from 'vue';
import { type BoTableProps } from './bo-table';

const props = withDefaults(defineProps<BoTableProps<T>>(), {
	bordered: false,
	striped: false,
	hoverable: false,
	fullWidth: true,
	stickyHeader: false,
	height: undefined,
});

const { data, columns, bordered, striped, hoverable, fullWidth, stickyHeader, height } =
	toRefs(props);

const containerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'w-full overflow-hidden rounded-lg border border-slate-200',
		stickyHeader.value && height.value ? 'overflow-y-auto' : '',
	);
});

const tableClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-table__table',
		fullWidth.value ? 'w-full' : '',
		bordered.value ? 'border-collapse' : 'border-separate border-spacing-0',
	);
});

const theadClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-table__head border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-900',
		stickyHeader.value ? 'sticky top-0 z-10' : '',
	);
});

const tbodyClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-table__body group text-sm text-slate-800 dark:text-white',
	);
});

const headerCellClasses = computed<string>(() => {
	return TailwindService.instance.merge('bo-table__header-cell px-2.5 py-2 text-start font-medium');
});

const cellClasses = computed<string>(() => {
	return TailwindService.instance.merge('bo-table__cell p-3');
});

const rowClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-table__row border-b border-slate-200 last:border-0',
		striped.value ? 'even:bg-slate-50 dark:even:bg-slate-800' : '',
		hoverable.value ? 'hover:bg-slate-50 dark:hover:bg-slate-800' : '',
	);
});
</script>
