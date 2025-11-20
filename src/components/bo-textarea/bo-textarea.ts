import { AriaLive } from '@/shared/accessibility';
import { BoSize } from '@/shared/size';

export interface BoTextareaProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The name attribute for the textarea. */
	name?: string;
	/** The value of the textarea. */
	modelValue?: string;
	/** Placeholder text. */
	placeholder?: string;
	/** Whether the textarea is disabled. */
	disabled?: boolean;
	/** Whether the textarea is readonly. */
	readonly?: boolean;
	/** Whether the textarea is required. */
	required?: boolean;
	/** Number of visible text rows. */
	rows?: number;
	/** Maximum number of characters allowed. */
	maxLength?: number;
	/** Minimum number of characters required. */
	minLength?: number;
	/** Size of the textarea. */
	size?: BoSize;
	/** Whether to show character count. */
	showCount?: boolean;
	/** Whether to auto-resize based on content. */
	autoResize?: boolean;
	/** Error message to display. */
	error?: string;
	/** Helper text to display. */
	helperText?: string;
	/** Label for the textarea. */
	label?: string;
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
