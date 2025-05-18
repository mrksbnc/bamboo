export enum BoRadioGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

export interface BoRadioGroupProps {
	/**
	 * The label of the radio group.
	 */
	label?: string;
	/**
	 * The description of the radio group.
	 */
	description?: string;
	/**
	 * The orientation of the radio group.
	 */
	orientation?: BoRadioGroupOrientation;
	/**
	 * Additional CSS classes for the radio group.
	 */
	cssClass?: string;
}
