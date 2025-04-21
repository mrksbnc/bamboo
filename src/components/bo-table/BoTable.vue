<template>
	<div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
			<!-- Table Header -->
			<thead class="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th
						v-for="header in headers"
						:key="header.key"
						:class="[
							header.sortable ? 'cursor-pointer select-none' : '',
							header.width ? '' : 'w-auto',
						]"
						:style="header.width ? { width: header.width } : {}"
						scope="col"
						class="px-6 py-3"
						@click="header.sortable ? handleSort(header.key) : null"
					>
						<div class="flex items-center justify-between">
							{{ header.label }}
							<span
								v-if="header.sortable"
								class="ml-1"
							>
								<bo-icon
									v-if="sortBy === header.key && sortDirection === BoTableSortDirection.asc"
									:icon="Icon.chevron_up"
									:size="BoSize.small"
								/>
								<bo-icon
									v-else-if="sortBy === header.key && sortDirection === BoTableSortDirection.desc"
									:icon="Icon.chevron_down"
									:size="BoSize.small"
								/>
								<bo-icon
									v-else
									:icon="Icon.chevrons_down"
									:size="BoSize.small"
									class="text-gray-400"
								/>
							</span>
						</div>
					</th>
					<th
						v-if="showActions"
						scope="col"
						class="px-6 py-3 text-right"
					>
						Actions
					</th>
				</tr>
			</thead>

			<!-- Table Body -->
			<tbody>
				<template v-if="items.length">
					<component
						v-for="(item, index) in items"
						:key="index"
						:is="resolvedRowComponent"
						:item="item"
						:headers="headers"
						:index="index"
						:show-actions="showActions"
						@edit="$emit('edit', item)"
						@delete="$emit('delete', item)"
						@view="$emit('view', item)"
					>
						<template
							v-for="slotName in Object.keys($slots)"
							#[slotName]="slotProps"
						>
							<slot
								:name="slotName"
								v-bind="slotProps"
							></slot>
						</template>
					</component>
				</template>
				<tr v-else>
					<td
						:colspan="headers.length + (showActions ? 1 : 0)"
						class="px-6 py-4 text-center"
					>
						<slot name="empty">
							<div class="flex flex-col items-center justify-center py-6">
								<bo-icon
									:icon="Icon.inbox"
									:size="BoSize.extra_large"
									class="mb-2 text-gray-400"
								/>
								<p class="text-gray-500 dark:text-gray-400">No data available</p>
							</div>
						</slot>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- Pagination (optional) -->
		<div
			v-if="showPagination"
			class="flex items-center justify-between border-t bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
		>
			<div class="flex items-center">
				<p class="text-sm text-gray-700 dark:text-gray-400">
					Showing <span class="font-medium">{{ paginationStart }}</span> to
					<span class="font-medium">{{ paginationEnd }}</span> of
					<span class="font-medium">{{ totalItems }}</span> entries
				</p>
			</div>
			<div class="flex items-center space-x-2">
				<bo-button
					:disabled="currentPage === 1"
					:variant="BoButtonVariant.light"
					:size="BoSize.small"
					@click="handlePageChange(currentPage - 1)"
				>
					Previous
				</bo-button>
				<bo-button
					:disabled="currentPage === totalPages"
					:variant="BoButtonVariant.light"
					:size="BoSize.small"
					@click="handlePageChange(currentPage + 1)"
				>
					Next
				</bo-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo-button';
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
import { computed, useSlots } from 'vue';
import BoDefaultTableRow from './BoDefaultTableRow.vue';
import { BoTableSortDirection, type BoTableHeader } from './bo-table';

const slots = useSlots();

interface Props {
	headers: BoTableHeader[];
	items: Record<string, any>[];
	rowComponent?: any;
	sortBy?: string;
	sortDirection?: BoTableSortDirection;
	showActions?: boolean;
	showPagination?: boolean;
	pageSize?: number;
	currentPage?: number;
	totalItems?: number;
}

const props = withDefaults(defineProps<Props>(), {
	rowComponent: undefined,
	sortBy: '',
	sortDirection: BoTableSortDirection.none,
	showActions: false,
	showPagination: false,
	pageSize: 10,
	currentPage: 1,
	totalItems: 0,
});

const emit = defineEmits<{
	(e: 'update:sortBy', value: string): void;
	(e: 'update:sortDirection', value: BoTableSortDirection): void;
	(e: 'update:currentPage', value: number): void;
	(e: 'edit', item: Record<string, any>): void;
	(e: 'delete', item: Record<string, any>): void;
	(e: 'view', item: Record<string, any>): void;
}>();

// Determine which row component to use - custom or default
const resolvedRowComponent = computed(() => {
	return props.rowComponent || BoDefaultTableRow;
});

// Handle sorting
const handleSort = (key: string) => {
	let newDirection: BoTableSortDirection;

	if (props.sortBy === key) {
		if (props.sortDirection === BoTableSortDirection.asc) {
			newDirection = BoTableSortDirection.desc;
		} else if (props.sortDirection === BoTableSortDirection.desc) {
			newDirection = BoTableSortDirection.none;
		} else {
			newDirection = BoTableSortDirection.asc;
		}
	} else {
		newDirection = BoTableSortDirection.asc;
	}

	emit(
		'update:sortBy',
		props.sortBy === key && newDirection === BoTableSortDirection.none ? '' : key,
	);
	emit('update:sortDirection', newDirection);
};

// Pagination calculations
const totalPages = computed(() => {
	return Math.ceil(props.totalItems / props.pageSize);
});

const paginationStart = computed(() => {
	return (props.currentPage - 1) * props.pageSize + 1;
});

const paginationEnd = computed(() => {
	const end = props.currentPage * props.pageSize;
	return end > props.totalItems ? props.totalItems : end;
});

const handlePageChange = (page: number) => {
	if (page < 1 || page > totalPages.value) return;
	emit('update:currentPage', page);
};
</script>

<style scoped>
/* Any additional styling */
.bo-table__row {
	@apply border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700;
}
</style>
