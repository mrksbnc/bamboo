import type { Component } from 'vue';

export interface BoTableColumn {
	/**
	 * Header text for the column
	 */
	header: string;
	/**
	 * Field name in the data object to display
	 */
	field: string;
	/**
	 * Whether the column is sortable
	 */
	sortable?: boolean;
	/**
	 * Width of the column (css value)
	 */
	width?: string;
	/**
	 * Custom cell renderer component or function
	 */
	cellRenderer?: Component | ((value: any, row: any) => string);
	/**
	 * CSS class to apply to the column
	 */
	class?: string;
	/**
	 * CSS class to apply to the header cell
	 */
	headerClass?: string;
}

export interface BoTableProps<T> {
	/**
	 * The component to render for each row
	 */
	rowComponent: Component;
	/**
	 * Table data array
	 */
	data: T[];

	/**
	 * Column definitions
	 */
	columns: BoTableColumn[];
	/**
	 * Whether to show a border around the table
	 */
	bordered?: boolean;
	/**
	 * Whether to show striped rows
	 */
	striped?: boolean;
	/**
	 * Whether rows are hoverable
	 */
	hoverable?: boolean;
	/**
	 * Whether the table should take the full width of its container
	 */
	fullWidth?: boolean;
	/**
	 * Whether the table headers should be sticky
	 */
	stickyHeader?: boolean;
	/**
	 * Height for the table when scrollable
	 */
	height?: string;
}

export enum BoTableVariant {
	default = 'default',
	bordered = 'bordered',
	minimal = 'minimal',
}

export enum BoTableSize {
	small = 'small',
	default = 'default',
	large = 'large',
}
