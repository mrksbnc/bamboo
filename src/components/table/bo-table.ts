import { Icon } from '@/components/icon/bo-icon.js';
import { Component } from 'vue';

export interface BoTableColumn {
	/** Unique ID for the column */
	id?: string;
	/** Display label for the column */
	label: string;
	/** Optional CSS class for the column */
	class?: string;
	/** Optional icon to display before the column label */
	prefixIcon?: Icon;
	/** Optional icon to display after the column label */
	suffixIcon?: Icon;
}

export interface BoTableProps<P = Record<string, any>> {
	/** Unique ID for the table */
	id?: string;
	/** Array of column definitions */
	columns: BoTableColumn[];
	/** Array of data objects to display in the table */
	data?: Record<string, any>[];
	/** Custom component to render each row */
	customRowComponent?: Component;
	/** Props for the custom row component in an array format that matches the component props */
	customRowComponentProps?: P[];
}
