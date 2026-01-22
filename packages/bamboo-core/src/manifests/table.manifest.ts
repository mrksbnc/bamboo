import { TableManifest } from '../definitions/index.js';

export const TABLE_MANIFEST = {
	meta: {
		name: 'Table',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'w-full overflow-auto rounded-lg border border-base-300',

		table: {
			base: /*tw*/ 'w-full border-collapse bg-base-100',
			size: {
				xs: /*tw*/ 'text-xs',
				sm: /*tw*/ 'text-sm',
				default: /*tw*/ 'text-sm',
				lg: /*tw*/ 'text-base',
				xl: /*tw*/ 'text-lg',
			},
			variant: {
				default: /*tw*/ '',
				striped: /*tw*/ '[&_tbody_tr:nth-child(odd)]:bg-base-200',
				bordered:
					/*tw*/ '[&_td]:border-r [&_th]:border-r [&_td]:border-base-300 [&_th]:border-base-300 [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0',
			},
		},

		caption: /*tw*/ 'mb-2 text-sm text-base-content/60',

		header: {
			base: /*tw*/ 'bg-base-200',
			sticky: /*tw*/ 'sticky top-0 z-10',
		},

		headerRow: /*tw*/ 'border-b border-base-300',

		headerCell: {
			base: /*tw*/ 'px-4 py-3 font-medium text-base-content transition-colors duration-150',
			sortable: /*tw*/ 'cursor-pointer hover:bg-base-300 select-none',
			sorted: /*tw*/ 'bg-base-300',
			align: {
				left: /*tw*/ 'text-left',
				center: /*tw*/ 'text-center',
				right: /*tw*/ 'text-right',
			},
		},

		sortIcon: /*tw*/ 'ml-1 inline-block transition-transform duration-150',

		body: /*tw*/ '',

		row: {
			base: /*tw*/ 'border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors duration-150',
			hoverable: /*tw*/ 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
			selectable: /*tw*/ 'cursor-pointer',
			selected: /*tw*/ 'bg-blue-50 dark:bg-blue-900/20',
		},

		cell: {
			base: /*tw*/ 'px-4 py-3 text-gray-900 dark:text-gray-100',
			align: {
				left: /*tw*/ 'text-left',
				center: /*tw*/ 'text-center',
				right: /*tw*/ 'text-right',
			},
		},

		checkbox: /*tw*/ 'w-4',

		loading: /*tw*/ 'flex items-center justify-center py-8 text-gray-500 dark:text-gray-400',

		empty: /*tw*/ 'flex items-center justify-center py-8 text-gray-500 dark:text-gray-400',
	},
	defaults: {
		size: 'default',
		variant: 'default',
		stickyHeader: false,
		hoverable: true,
		selectable: false,
		loading: false,
		emptyMessage: 'No data available',
	},
} as const satisfies TableManifest;
