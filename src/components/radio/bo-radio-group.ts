export enum BoRadioGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

export interface BoRadioGroupProps {
	/** Name attribute for all radio buttons in the group*/
	name?: string;
	/** Whether all radio buttons in the group are disabled */
	disabled?: boolean;
	/** Initially selected value */
	defaultValue?: string;
	/** The orientation of the radio buttons in the group */
	orientation?: BoRadioGroupOrientation;
}

export interface RadioGroup {
	/** Currently selected value */
	selectedValue: string | null;
	/** Name attribute for all radio buttons in the group */
	name: string;
	/** Whether all radio buttons in the group are disabled */
	disabled: boolean;
	/** Callback to select a radio button */
	select: (value: string) => void;
	/** Callback to register a radio button */
	registerItem: (value: string, isDefault: boolean) => void;
}
