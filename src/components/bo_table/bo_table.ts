import type { Icon } from '@/components/bo_icon';
import type { BoSize } from '@/shared/bo_size';

export type BoTableColumn<T = Record<string, unknown>> = {
	/**
	 * Unique key for the column
	 */
	key: string;
	/**
	 * Display label for the column header
	 */
	label: string;
	/**
	 * Field path in the data object to display (can be a nested path using dot notation)
	 */
	field?: string;
	/**
	 * Whether the column is sortable
	 */
	sortable?: boolean;
	/**
	 * Custom function to get the cell value for sorting
	 */
	sortFn?: (a: T, b: T, isAsc: boolean) => number;
	/**
	 * Icon to display in the header
	 */
	headerIcon?: Icon;
	/**
	 * Custom render function for the cell
	 */
	renderFn?: (item: T, index: number) => string | number | boolean | null | undefined;
	/**
	 * Width of the column (CSS value)
	 */
	width?: string;
	/**
	 * Text alignment in the column
	 */
	align?: 'left' | 'center' | 'right';
	/**
	 * Custom class for the column
	 */
	class?: string;
	/**
	 * Custom class for the column header
	 */
	headerClass?: string;
};

// Group related props into smaller interfaces for better organization
export interface BoTableDataProps<T = Record<string, unknown>> {
	/**
	 * Array of data items to display in the table
	 */
	items: T[];
	/**
	 * Column definitions for the table
	 */
	columns: BoTableColumn<T>[];
	/**
	 * Text to display when there are no items
	 */
	emptyText?: string;
}

export interface BoTableSearchProps {
	/**
	 * Whether to show the search input
	 */
	searchable?: boolean;
	/**
	 * Placeholder text for the search input
	 */
	searchPlaceholder?: string;
	/**
	 * Initial search query
	 */
	initialSearch?: string;
	/**
	 * Fields to search in (if not provided, all string fields will be searched)
	 */
	searchFields?: string[];
}

export interface BoTablePaginationProps {
	/**
	 * Whether to enable pagination
	 */
	paginated?: boolean;
	/**
	 * Number of items per page
	 */
	perPage?: number;
}

export interface BoTableSortingProps {
	/**
	 * Default sort key
	 */
	defaultSortKey?: string;
	/**
	 * Default sort direction
	 */
	defaultSortOrder?: 'asc' | 'desc';
}

export interface BoTableSelectionProps {
	/**
	 * Whether to allow selection of rows
	 */
	selectable?: boolean;
	/**
	 * Array of keys of selected items
	 */
	selectedKeys?: (string | number)[];
	/**
	 * Key field in the data object to use for selection
	 */
	rowKey?: string;
	/**
	 * Whether to enable multiple selection
	 */
	multiSelect?: boolean;
}

export interface BoTableAppearanceProps {
	/**
	 * Whether the table has a border
	 */
	bordered?: boolean;
	/**
	 * Whether the table has zebra striping
	 */
	striped?: boolean;
	/**
	 * Whether rows are hoverable
	 */
	hoverable?: boolean;
	/**
	 * Size of the table
	 */
	size?: BoSize;
	/**
	 * Whether the table is loading
	 */
	loading?: boolean;
	/**
	 * Whether the table has a sticky header
	 */
	stickyHeader?: boolean;
	/**
	 * Height of the table when sticky header is enabled
	 */
	height?: string;
	/**
	 * Whether to show the table header
	 */
	showHeader?: boolean;
	/**
	 * Unique ID for the table
	 */
	id?: string;
}

// Combine all interfaces for the main props type
export type BoTableProps<T = Record<string, unknown>> = BoTableDataProps<T> &
	BoTableSearchProps &
	BoTablePaginationProps &
	BoTableSortingProps &
	BoTableSelectionProps &
	BoTableAppearanceProps;

export interface BoTableEmits<T = Record<string, unknown>> {
	/**
	 * Emitted when the search query changes
	 */
	(e: 'search', query: string): void;
	/**
	 * Emitted when a column is sorted
	 */
	(e: 'sort', key: string, order: 'asc' | 'desc'): void;
	/**
	 * Emitted when a row is clicked
	 */
	(e: 'row-click', item: T, index: number): void;
	/**
	 * Emitted when selection changes
	 */
	(e: 'selection-change', selectedKeys: (string | number)[], selectedItems: T[]): void;
	/**
	 * Emitted when the current page changes
	 */
	(e: 'page-change', page: number): void;
}

export enum BoTableVariant {
	default = 'default',
	compact = 'compact',
	minimal = 'minimal',
}
