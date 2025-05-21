export interface BoTableColumn {
	/** Unique key for the column */
	key: string;
	/** Display label for the column */
	label: string;
	/** Optional CSS class for the column */
	class?: string;
}

export interface BoTableProps {
	/** Unique ID for the table */
	id?: string;
	/** Array of column definitions */
	columns: BoTableColumn[];
	/** Array of data objects to display in the table */
	data: Record<string, any>[];
}
