export enum BoCheckboxGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

export interface BoCheckboxGroupProps {
	/** Name attribute for all checkboxes in the group*/
	name?: string;
	/** Whether all checkboxes in the group are disabled */
	disabled?: boolean;
	/** Initially selected values */
	defaultValue?: string[];
	/** The orientation of the checkboxes in the group */
	orientation?: BoCheckboxGroupOrientation;
}

export interface BoCheckboxGroup {
	/** Currently selected values */
	selectedValues: string[];
	/** Name attribute for all checkboxes in the group */
	name: string;
	/** Whether all checkboxes in the group are disabled */
	disabled: boolean;
	/** Callback to select/deselect a checkbox */
	select: (value: string) => void;
	/** Callback to register a checkbox */
	registerItem: (value: string) => void;
}
