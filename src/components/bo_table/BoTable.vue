<template>
	<div class="bo-table-wrapper">
		<!-- Search input -->
		<div
			v-if="searchable"
			class="mb-4"
		>
			<div class="relative flex items-center">
				<bo-icon
					:icon="Icon.search"
					class="absolute left-3 text-gray-400"
				/>
				<input
					v-model="searchQuery"
					type="text"
					:placeholder="searchPlaceholder || 'Search...'"
					:class="searchInputClasses"
					@input="onSearch"
				/>
				<button
					v-if="searchQuery"
					class="absolute right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
					@click="clearSearch"
				>
					<bo-icon :icon="Icon.x" />
				</button>
			</div>
		</div>

		<!-- Table container -->
		<div
			:class="tableContainerClasses"
			:style="stickyHeader ? { maxHeight: height || '400px' } : {}"
		>
			<table
				:id="id"
				:class="tableClasses"
			>
				<!-- Table header -->
				<thead
					v-if="showHeader"
					:class="theadClasses"
				>
					<tr>
						<!-- Selection checkbox column -->
						<th
							v-if="selectable"
							scope="col"
							:class="thCheckboxClasses"
						>
							<div class="flex items-center justify-center">
								<input
									v-if="multiSelect"
									type="checkbox"
									:class="checkboxClasses"
									:checked="allSelected"
									:indeterminate="someSelected && !allSelected"
									@change="toggleSelectAll"
								/>
							</div>
						</th>

						<!-- Column headers -->
						<th
							v-for="column in columns"
							:key="column.key"
							scope="col"
							:class="getThClasses(column)"
							:style="{ width: column.width }"
							@click="column.sortable ? sort(column.key) : null"
						>
							<div
								class="flex items-center space-x-1"
								:class="getColumnAlignmentClasses(column)"
							>
								<bo-icon
									v-if="column.headerIcon"
									:icon="column.headerIcon"
									class="bo-table__th-icon"
								/>

								<span>{{ column.label }}</span>

								<span
									v-if="column.sortable"
									class="bo-table__sort-icon ml-1"
								>
									<bo-icon
										v-if="sortKey === column.key && sortOrder === 'asc'"
										:icon="Icon.chevronUp"
										size="small"
									/>
									<bo-icon
										v-else-if="sortKey === column.key && sortOrder === 'desc'"
										:icon="Icon.chevronDown"
										size="small"
									/>
									<bo-icon
										v-else
										:icon="Icon.chevronUpDown"
										size="small"
										class="text-gray-400"
									/>
								</span>
							</div>
						</th>
					</tr>
				</thead>

				<!-- Table body -->
				<tbody :class="tbodyClasses">
					<!-- Loading overlay -->
					<tr
						v-if="loading"
						:class="loadingOverlayClasses"
					>
						<td
							:colspan="totalColumns"
							class="py-4 text-center"
						>
							<bo-loading-spinner
								size="large"
								class="mx-auto"
							/>
						</td>
					</tr>

					<!-- Empty state -->
					<tr
						v-else-if="displayedItems.length === 0"
						class="bo-table__empty"
					>
						<td
							:colspan="totalColumns"
							:class="emptyStateClasses"
						>
							{{ emptyText || 'No data available' }}
						</td>
					</tr>

					<!-- Table rows -->
					<template v-else>
						<tr
							v-for="(item, index) in displayedItems"
							:key="getRowKey(item, index)"
							:class="getRowClasses(item, index)"
							@click="onRowClick(item, index)"
						>
							<!-- Selection checkbox cell -->
							<td
								v-if="selectable"
								:class="tdCheckboxClasses"
							>
								<div class="flex items-center justify-center">
									<input
										type="checkbox"
										:class="checkboxClasses"
										:checked="isSelected(item)"
										@click.stop="toggleSelect(item)"
										@change="() => {}"
									/>
								</div>
							</td>

							<!-- Data cells -->
							<td
								v-for="column in columns"
								:key="`${getRowKey(item, index)}-${column.key}`"
								:class="getTdClasses(column)"
							>
								<slot
									:name="`cell(${column.key})`"
									:item="item"
									:index="index"
									:value="getCellValue(item, column)"
									:column="column"
								>
									{{ formatCellValue(item, column, index) }}
								</slot>
							</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div
			v-if="paginated && filteredItems.length > 0"
			class="bo-table__pagination mt-4 flex items-center justify-between"
		>
			<div class="flex flex-1 justify-between sm:hidden">
				<button
					:disabled="currentPage === 1"
					@click="changePage(currentPage - 1)"
					:class="paginationButtonClasses"
				>
					Previous
				</button>
				<button
					:disabled="currentPage === totalPages"
					@click="changePage(currentPage + 1)"
					:class="paginationButtonClasses + ' ml-3'"
				>
					Next
				</button>
			</div>
			<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p class="text-sm text-gray-700 dark:text-gray-300">
						Showing <span class="font-medium">{{ paginationInfo.from }}</span> to
						<span class="font-medium">{{ paginationInfo.to }}</span> of
						<span class="font-medium">{{ filteredItems.length }}</span> results
					</p>
				</div>
				<div>
					<nav
						class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<button
							:disabled="currentPage === 1"
							@click="changePage(currentPage - 1)"
							:class="paginationPrevButtonClasses"
						>
							<span class="sr-only">Previous</span>
							<bo-icon
								:icon="Icon.chevronLeft"
								class="h-5 w-5"
								aria-hidden="true"
							/>
						</button>

						<template
							v-for="page in paginationRange"
							:key="page"
						>
							<button
								v-if="page !== '...'"
								@click="changePage(Number(page))"
								:class="getPaginationPageClasses(page)"
							>
								{{ page }}
							</button>
							<span
								v-else
								:class="paginationEllipsisClasses"
							>
								...
							</span>
						</template>

						<button
							:disabled="currentPage === totalPages"
							@click="changePage(currentPage + 1)"
							:class="paginationNextButtonClasses"
						>
							<span class="sr-only">Next</span>
							<bo-icon
								:icon="Icon.chevronRight"
								class="h-5 w-5"
								aria-hidden="true"
							/>
						</button>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoLoadingSpinner } from '@/components/bo_loading_spinner'
import { BoSize } from '@/shared/bo_size'
import { IdentityUtils, TailwindUtils } from '@/utils'
import { computed, ref, toRefs, watch } from 'vue'
import type { BoTableColumn, BoTableEmits, BoTableProps } from './bo_table'

const props = withDefaults(defineProps<BoTableProps<unknown>>(), {
	searchable: false,
	searchPlaceholder: 'Search...',
	initialSearch: '',
	searchFields: () => [],
	paginated: false,
	perPage: 10,
	bordered: false,
	striped: false,
	hoverable: true,
	size: () => BoSize.default,
	loading: false,
	emptyText: 'No data available',
	stickyHeader: false,
	height: '400px',
	id: () => IdentityUtils.generateRandomIdWithPrefix('bo-table'),
	showHeader: true,
	selectable: false,
	selectedKeys: () => [],
	rowKey: 'id',
	multiSelect: false,
	defaultSortKey: '',
	defaultSortOrder: 'asc',
})

// Emit events
const emit = defineEmits<BoTableEmits<unknown>>()

// Define slots
defineSlots<{
	[key: `cell(${string})`]: (props: {
		item: unknown
		index: number
		value: unknown
		column: BoTableColumn<unknown>
	}) => unknown
}>()

// Destructure props
const {
	items,
	columns,
	searchable,
	initialSearch,
	searchFields,
	paginated,
	perPage,
	selectable,
	selectedKeys,
	rowKey,
	multiSelect,
	defaultSortKey,
	defaultSortOrder,
	bordered,
	striped,
	hoverable,
	stickyHeader,
	loading,
	size,
} = toRefs(props)

// Search state
const searchQuery = ref(initialSearch.value)

// Sorting state
const sortKey = ref(defaultSortKey.value)
const sortOrder = ref<'asc' | 'desc'>(defaultSortOrder.value)

// Pagination state
const currentPage = ref(1)

// Selection state
const selectedRowKeys = ref<(string | number)[]>(selectedKeys.value || [])

// Computed properties for Tailwind classes
const searchInputClasses = computed(() => {
	return /*tw*/ 'w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white transition-colors'
})

const tableContainerClasses = computed(() => {
	return TailwindUtils.merge(
		'relative overflow-hidden rounded-lg',
		stickyHeader.value ? 'overflow-y-auto' : '',
		bordered.value ? 'border border-gray-200 dark:border-gray-700 shadow-sm' : '',
	)
})

const tableClasses = computed(() => {
	const sizeClass = {
		[BoSize.extra_small]: 'text-xs',
		[BoSize.small]: 'text-sm',
		[BoSize.default]: 'text-base',
		[BoSize.large]: 'text-lg',
		[BoSize.extra_large]: 'text-xl',
	}

	return TailwindUtils.merge(
		'min-w-full divide-y dark:divide-gray-700 bo-table',
		'table-fixed',
		striped.value ? 'bo-table--striped' : '',
		bordered.value ? 'border-collapse' : '',
		hoverable.value ? 'bo-table--hoverable' : '',
		stickyHeader.value ? 'bo-table--sticky-header' : '',
		loading.value ? 'opacity-50' : '',
		selectable.value ? 'bo-table--selectable' : '',
		`bo-table--${size.value}`,
		sizeClass[size.value],
	)
})

const theadClasses = computed(() => {
	return TailwindUtils.merge(
		'bg-gray-50 dark:bg-gray-800 transition-colors',
		stickyHeader.value ? 'sticky top-0 z-10' : '',
	)
})

const thBaseClasses = computed(() => {
	return /*tw*/ 'px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300 transition-colors'
})

const thCheckboxClasses = computed(() => {
	return TailwindUtils.merge(thBaseClasses.value, 'w-12 px-3')
})

const thSortableClasses = computed(() => {
	return /*tw*/ 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
})

const tdBaseClasses = computed(() => {
	return /*tw*/ 'px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 transition-colors'
})

const tdCheckboxClasses = computed(() => {
	return TailwindUtils.merge(tdBaseClasses.value, 'w-12 px-3')
})

const stripedRowClasses = computed(() => {
	return /*tw*/ 'bg-gray-50 dark:bg-gray-800'
})

const tbodyClasses = computed(() => {
	return /*tw*/ 'divide-y bg-white dark:divide-gray-800 dark:bg-gray-900 transition-colors'
})

const borderedCellClasses = computed(() => {
	return /*tw*/ 'border border-gray-200 dark:border-gray-700'
})

const selectableRowClasses = computed(() => {
	return /*tw*/ 'cursor-pointer transition-colors'
})

const selectedRowClasses = computed(() => {
	return /*tw*/ 'bg-blue-50 dark:bg-blue-900/20 transition-colors'
})

const loadingOverlayClasses = computed(() => {
	return /*tw*/ 'absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-lg'
})

const tableSizeClasses = computed(() => {
	return {
		extra_small: {
			th: /*tw*/ 'px-3 py-1 text-xs',
			td: /*tw*/ 'px-3 py-1 text-xs',
		},
		small: {
			th: /*tw*/ 'px-4 py-2 text-sm',
			td: /*tw*/ 'px-4 py-2 text-sm',
		},
		default: {
			th: thBaseClasses.value,
			td: tdBaseClasses.value,
		},
		large: {
			th: /*tw*/ 'px-8 py-4 text-base',
			td: /*tw*/ 'px-8 py-4 text-base',
		},
		extra_large: {
			th: /*tw*/ 'px-10 py-5 text-lg',
			td: /*tw*/ 'px-10 py-5 text-lg',
		},
	}
})

const checkboxClasses = computed(() => {
	return /*tw*/ 'h-4 w-4 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 transition-colors'
})

const emptyStateClasses = computed(() => {
	return /*tw*/ 'py-8 text-center text-gray-500 dark:text-gray-400 rounded-lg'
})

const paginationButtonClasses = computed(() => {
	return /*tw*/ 'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm'
})

const paginationPrevButtonClasses = computed(() => {
	return /*tw*/ 'relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors shadow-sm'
})

const paginationNextButtonClasses = computed(() => {
	return /*tw*/ 'relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors shadow-sm'
})

const paginationEllipsisClasses = computed(() => {
	return /*tw*/ 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 transition-colors shadow-sm'
})

// Helper functions for dynamic classes
function getThClasses(column) {
	const sizeClass = tableSizeClasses.value[size.value]?.th || thBaseClasses.value

	return TailwindUtils.merge(
		sizeClass,
		column.headerClass || '',
		column.align ? `text-${column.align}` : '',
		column.sortable ? thSortableClasses.value : '',
		bordered.value ? borderedCellClasses.value : '',
	)
}

function getTdClasses(column) {
	const sizeClass = tableSizeClasses.value[size.value]?.td || tdBaseClasses.value

	return TailwindUtils.merge(
		sizeClass,
		column.class || '',
		column.align ? `text-${column.align}` : '',
		bordered.value ? borderedCellClasses.value : '',
	)
}

function getColumnAlignmentClasses(column) {
	return TailwindUtils.merge(
		column.align === 'center' ? 'justify-center' : '',
		column.align === 'right' ? 'justify-end' : '',
	)
}

function getRowClasses(item, index) {
	return TailwindUtils.merge(
		'bo-table__row transition-colors',
		isSelected(item) ? selectedRowClasses.value : '',
		hoverable.value ? 'hover:bg-gray-50 dark:hover:bg-gray-700/50' : '',
		selectable.value ? selectableRowClasses.value : '',
		striped.value && index % 2 === 1 ? stripedRowClasses.value : '',
	)
}

function getPaginationPageClasses(page) {
	return TailwindUtils.merge(
		'relative inline-flex items-center border px-4 py-2 text-sm font-medium shadow-sm transition-colors',
		currentPage.value === Number(page)
			? 'z-10 border-blue-500 bg-blue-50 text-blue-600 dark:border-blue-600 dark:bg-blue-900/50 dark:text-blue-300'
			: 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
	)
}

// Computed properties
const totalColumns = computed(() => {
	let count = columns.value.length
	if (selectable.value) count++
	return count
})

// Filter items based on search query
const filteredItems = computed(() => {
	const query = searchQuery.value.toLowerCase().trim()
	if (!query) return items.value

	return items.value.filter((item) => {
		// If searchFields is provided, only search in those fields
		if (searchFields.value.length > 0) {
			return searchFields.value.some((field) => {
				const value = getNestedValue(item, field)
				return typeof value === 'string' && value.toLowerCase().includes(query)
			})
		}

		// Otherwise, search in all string fields
		return Object.keys(item as Record<string, unknown>).some((key) => {
			const value = (item as Record<string, unknown>)[key]
			return typeof value === 'string' && value.toLowerCase().includes(query)
		})
	})
})

// Sort filtered items
const sortedItems = computed(() => {
	const items = [...filteredItems.value]
	if (!sortKey.value) return items

	const column = columns.value.find((col) => col.key === sortKey.value)
	if (!column) return items

	const isAsc = sortOrder.value === 'asc'

	// Use custom sort function if provided
	if (column.sortFn) {
		return items.sort((a, b) => column.sortFn!(a, b, isAsc))
	}

	// Otherwise sort by field value
	return items.sort((a, b) => {
		const aValue = column.field ? getNestedValue(a, column.field) : null
		const bValue = column.field ? getNestedValue(b, column.field) : null

		// Handle null/undefined values
		if (aValue == null && bValue == null) return 0
		if (aValue == null) return isAsc ? -1 : 1
		if (bValue == null) return isAsc ? 1 : -1

		// Compare based on type
		if (typeof aValue === 'string' && typeof bValue === 'string') {
			return isAsc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
		}

		if (typeof aValue === 'number' && typeof bValue === 'number') {
			return isAsc ? aValue - bValue : bValue - aValue
		}

		if (aValue instanceof Date && bValue instanceof Date) {
			return isAsc ? aValue.getTime() - bValue.getTime() : bValue.getTime() - aValue.getTime()
		}

		// Convert to string as fallback
		const aStr = String(aValue)
		const bStr = String(bValue)
		return isAsc ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr)
	})
})

// Paginated items
const displayedItems = computed(() => {
	if (!paginated.value) return sortedItems.value

	const start = (currentPage.value - 1) * perPage.value
	const end = start + perPage.value
	return sortedItems.value.slice(start, end)
})

// Pagination information
const totalPages = computed(() =>
	Math.max(1, Math.ceil(filteredItems.value.length / perPage.value)),
)

const paginationInfo = computed(() => {
	if (filteredItems.value.length === 0) {
		return { from: 0, to: 0 }
	}

	const from = (currentPage.value - 1) * perPage.value + 1
	const to = Math.min(from + perPage.value - 1, filteredItems.value.length)

	return { from, to }
})

// Generate pagination range with ellipsis
const paginationRange = computed(() => {
	if (totalPages.value <= 7) {
		return Array.from({ length: totalPages.value }, (_, i) => String(i + 1))
	}

	const range: (string | number)[] = []
	const leftBound = 1
	const rightBound = totalPages.value
	const current = currentPage.value

	// Always show first page
	range.push('1')

	if (current <= 3) {
		// Close to start
		range.push('2', '3', '4', '...', String(rightBound - 1), String(rightBound))
	} else if (current >= totalPages.value - 2) {
		// Close to end
		range.push(
			'...',
			String(rightBound - 4),
			String(rightBound - 3),
			String(rightBound - 2),
			String(rightBound - 1),
			String(rightBound),
		)
	} else {
		// Middle
		range.push(
			'...',
			String(current - 1),
			String(current),
			String(current + 1),
			'...',
			String(rightBound),
		)
	}

	return range
})

// Selection computed properties
const allSelected = computed(() => {
	return displayedItems.value.length > 0 && displayedItems.value.every((item) => isSelected(item))
})

const someSelected = computed(() => {
	return displayedItems.value.some((item) => isSelected(item)) && !allSelected.value
})

// Methods
// Get nested value from object using dot notation
function getNestedValue(obj: unknown, path: string): unknown {
	const keys = path.split('.')
	let result: unknown = obj

	for (const key of keys) {
		if (result == null || typeof result !== 'object') return null
		result = (result as Record<string, unknown>)[key]
	}

	return result
}

// Get cell value for display
function getCellValue(item: unknown, column: BoTableColumn<unknown>): unknown {
	if (column.renderFn) {
		return column.renderFn(item, displayedItems.value.indexOf(item))
	}

	if (column.field) {
		return getNestedValue(item, column.field)
	}

	return null
}

// Format cell value for display
function formatCellValue(item: unknown, column: BoTableColumn<unknown>, index: number): string {
	const value = getCellValue(item, column)

	if (value === null || value === undefined) {
		return ''
	}

	if (value instanceof Date) {
		return value.toLocaleString()
	}

	return String(value)
}

// Get unique key for a row
function getRowKey(item: unknown, index: number): string | number {
	if (rowKey.value && typeof item === 'object' && item !== null) {
		const key = (item as Record<string, unknown>)[rowKey.value]
		if (key !== undefined) {
			return String(key)
		}
	}

	// Fallback to index
	return index
}

// Check if a row is selected
function isSelected(item: unknown): boolean {
	const key = getRowKey(item, displayedItems.value.indexOf(item))
	return selectedRowKeys.value.includes(key)
}

// Toggle selection of a row
function toggleSelect(item: unknown): void {
	const key = getRowKey(item, displayedItems.value.indexOf(item))
	const index = selectedRowKeys.value.indexOf(key)

	if (index === -1) {
		// Add to selection
		if (multiSelect.value) {
			selectedRowKeys.value = [...selectedRowKeys.value, key]
		} else {
			selectedRowKeys.value = [key]
		}
	} else {
		// Remove from selection
		selectedRowKeys.value = selectedRowKeys.value.filter((k) => k !== key)
	}

	// Emit selection change
	const selectedItems = items.value.filter((item) => {
		const itemKey = getRowKey(item, items.value.indexOf(item))
		return selectedRowKeys.value.includes(itemKey)
	})

	emit('selection-change', selectedRowKeys.value, selectedItems)
}

// Toggle select all rows
function toggleSelectAll(): void {
	if (allSelected.value) {
		// Deselect all
		selectedRowKeys.value = selectedRowKeys.value.filter((key) => {
			return !displayedItems.value.some(
				(item) => getRowKey(item, displayedItems.value.indexOf(item)) === key,
			)
		})
	} else {
		// Select all displayed
		const newKeys = displayedItems.value.map((item) =>
			getRowKey(item, displayedItems.value.indexOf(item)),
		)

		if (multiSelect.value) {
			// Merge with existing selections that are not displayed
			const existingKeys = selectedRowKeys.value.filter((key) => {
				return !displayedItems.value.some(
					(item) => getRowKey(item, displayedItems.value.indexOf(item)) === key,
				)
			})
			selectedRowKeys.value = [...existingKeys, ...newKeys]
		} else {
			// Only select the first item
			selectedRowKeys.value = newKeys.slice(0, 1)
		}
	}

	// Emit selection change
	const selectedItems = items.value.filter((item) => {
		const itemKey = getRowKey(item, items.value.indexOf(item))
		return selectedRowKeys.value.includes(itemKey)
	})

	emit('selection-change', selectedRowKeys.value, selectedItems)
}

// Handle row click
function onRowClick(item: unknown, index: number): void {
	emit('row-click', item, index)

	if (selectable.value && !multiSelect.value) {
		toggleSelect(item)
	}
}

// Handle search
function onSearch(): void {
	currentPage.value = 1
	emit('search', searchQuery.value)
}

// Clear search
function clearSearch(): void {
	searchQuery.value = ''
	emit('search', '')
}

// Handle sorting
function sort(key: string): void {
	if (sortKey.value === key) {
		// Toggle sort order
		sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
	} else {
		// Set new sort key
		sortKey.value = key
		sortOrder.value = 'asc'
	}

	// Reset to first page when sorting
	currentPage.value = 1

	// Emit sort event
	emit('sort', sortKey.value, sortOrder.value)
}

// Change page
function changePage(page: number): void {
	if (page < 1 || page > totalPages.value) return

	currentPage.value = page
	emit('page-change', page)
}

// Watch for changes in props
watch(selectedKeys, (newKeys) => {
	selectedRowKeys.value = newKeys.value || []
})

// Watch for changes in search query
watch(
	() => filteredItems.value.length,
	() => {
		// Reset to first page when filtered items change
		currentPage.value = 1
	},
)
</script>
