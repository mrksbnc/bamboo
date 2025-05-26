/**
 * Defines the orientation of the checkbox group
 */
export enum BoCheckboxGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

/**
 * Props for the checkbox group component
 */
export interface BoCheckboxGroupProps {
	/**
	 * Array of selected values (v-model)
	 */
	modelValue?: string[];
	/**
	 * Name attribute for all checkboxes in the group
	 */
	name?: string;
	/**
	 * Whether all checkboxes in the group are disabled
	 */
	disabled?: boolean;
	/**
	 * Initially selected values
	 */
	defaultValue?: string[];
	/**
	 * The orientation of the checkboxes in the group
	 */
	orientation?: BoCheckboxGroupOrientation;
}

/**
 * Interface for the checkbox group context
 */
export interface BoCheckboxGroup {
	/**
	 * Currently selected values
	 */
	selectedValues: string[];
	/**
	 * Name attribute for all checkboxes in the group
	 */
	name: string;
	/**
	 * Whether all checkboxes in the group are disabled
	 */
	disabled: boolean;
	/**
	 * Callback to select/deselect a checkbox
	 */
	select: (value: string) => void;
	/**
	 * Callback to register a checkbox
	 */
	registerItem: (value: string) => void;
}
