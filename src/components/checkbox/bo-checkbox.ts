export interface BoCheckboxProps {
	/** The checked state of the checkbox (v-model) */
	modelValue?: boolean;
	/** Unique ID for the checkbox */
	id?: string;
	/** Name attribute for the checkbox */
	name?: string;
	/** Value attribute for the checkbox */
	value?: string;
	/** Whether the checkbox is disabled */
	disabled?: boolean;
	/** Text label for the checkbox */
	label?: string;
	/** Description for the checkbox */
	description?: string;
}
