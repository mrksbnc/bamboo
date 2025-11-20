import type { AriaLive } from '@/shared/accessibility';

export enum BoToggleSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

export interface BoToggleProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The name attribute of the toggle. */
	name?: string;
	/** The size of the toggle. */
	size?: BoToggleSize;
	/** Whether the toggle is disabled. */
	disabled?: boolean;
	/** The label text for the toggle. */
	label?: string;
	/** Helper text displayed below the toggle. */
	helperText?: string;
	/** Position of the label relative to the toggle. */
	labelPosition?: 'left' | 'right';
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
