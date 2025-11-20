import type { AriaLive } from '@/shared/accessibility';

export enum BoCheckboxSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

export interface BoCheckboxProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The name attribute of the checkbox. */
	name?: string;
	/** The value of the checkbox. */
	value?: string | number;
	/** The size of the checkbox. */
	size?: BoCheckboxSize;
	/** Whether the checkbox is disabled. */
	disabled?: boolean;
	/** Whether the checkbox is in indeterminate state. */
	indeterminate?: boolean;
	/** The label text for the checkbox. */
	label?: string;
	/** Helper text displayed below the checkbox. */
	helperText?: string;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string;
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string;
	/** Indicates that an element will be updated. */
	ariaLive?: AriaLive;
	/** Tab index of the element. */
	tabIndex?: number;
}

export interface BoCheckboxGroupProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The name attribute for all checkboxes in the group. */
	name?: string;
	/** The size of all checkboxes in the group. */
	size?: BoCheckboxSize;
	/** Whether all checkboxes in the group are disabled. */
	disabled?: boolean;
	/** The label text for the checkbox group. */
	label?: string;
	/** Helper text displayed below the checkbox group. */
	helperText?: string;
	/** Error message displayed when there's an error. */
	errorText?: string;
	/** Whether the checkbox group has an error. */
	hasError?: boolean;
	/** Whether the checkbox group is required. */
	required?: boolean;
	/** Direction of checkboxes. */
	direction?: 'horizontal' | 'vertical';
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string;
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string;
}
