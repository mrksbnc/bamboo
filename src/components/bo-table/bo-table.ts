/**
 * Table sort direction options
 */
export enum BoTableSortDirection {
	/** Ascending order (A-Z, 0-9) */
	asc = 'asc',
	/** Descending order (Z-A, 9-0) */
	desc = 'desc',
	/** No sorting applied */
	none = 'none',
}

/**
 * Table header configuration
 */
export interface BoTableHeader {
	/** Unique identifier for the column, should match the property name in the data */
	key: string;
	/** Text label to display in the header */
	label: string;
	/** Whether this column can be sorted */
	sortable?: boolean;
	/** Optional width for the column (CSS value: px, %, etc.) */
	width?: string;
}

/**
 * Table pagination configuration
 */
export interface BoTablePagination {
	/** Current page number (1-based) */
	currentPage: number;
	/** Number of items per page */
	pageSize: number;
	/** Total number of items across all pages */
	totalItems: number;
}
