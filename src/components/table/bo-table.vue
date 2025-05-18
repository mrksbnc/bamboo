<template>
	<div
		class="bo-table"
		:class="[
			{
				'cursor-pointer': !disabled,
				'cursor-not-allowed opacity-60': disabled,
			},
		]"
		:data-testid="`bo-table-${id}`"
	>
		<!-- Table container -->
		<div
			class="bo-table__container"
			:data-testid="`bo-table-container-${id}`"
		>
			<!-- Table header -->
			<div
				v-if="showHeader"
				class="bo-table__header"
				:data-testid="`bo-table-header-${id}`"
			>
				<bo-text
					:value="title"
					:size="BoFontSize.lg"
					:weight="BoFontWeight.semibold"
					:data-testid="`bo-table-title-${id}`"
				/>
			</div>

			<!-- Table content -->
			<table
				class="bo-table__content"
				:data-testid="`bo-table-content-${id}`"
			>
				<!-- Table head -->
				<thead
					class="bo-table__head"
					:data-testid="`bo-table-head-${id}`"
				>
					<tr
						class="bo-table__head-row"
						:data-testid="`bo-table-head-row-${id}`"
					>
						<th
							v-for="(column, index) in columns"
							:key="index"
							class="bo-table__head-cell"
							:data-testid="`bo-table-head-cell-${id}-${column.key}`"
						>
							<bo-text
								:value="column.label"
								:size="BoFontSize.sm"
								:weight="BoFontWeight.medium"
								:data-testid="`bo-table-head-cell-text-${id}-${column.key}`"
							/>
						</th>
					</tr>
				</thead>

				<!-- Table body -->
				<tbody
					class="bo-table__body"
					:data-testid="`bo-table-body-${id}`"
				>
					<tr
						v-for="(row, rowIndex) in data"
						:key="rowIndex"
						class="bo-table__body-row"
						:data-testid="`bo-table-body-row-${id}-${rowIndex}`"
					>
						<td
							v-for="(column, columnIndex) in columns"
							:key="columnIndex"
							class="bo-table__body-cell"
							:data-testid="`bo-table-body-cell-${id}-${rowIndex}-${column.key}`"
						>
							<slot
								:name="column.key"
								:row="row"
								:column="column"
								:data-testid="`bo-table-body-cell-slot-${id}-${rowIndex}-${column.key}`"
							>
								{{ row[column.key] }}
							</slot>
						</td>
					</tr>
				</tbody>
			</table>

			<!-- Table footer -->
			<div
				v-if="showFooter"
				class="bo-table__footer"
				:data-testid="`bo-table-footer-${id}`"
			>
				<slot name="footer" />
			</div>
		</div>
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
