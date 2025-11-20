import type { AriaLive } from '@/shared/accessibility';

export enum BoDropzoneSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

export interface BoDropzoneProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The name attribute of the dropzone. */
	name?: string;
	/** The size of the dropzone. */
	size?: BoDropzoneSize;
	/** Whether the dropzone is disabled. */
	disabled?: boolean;
	/** Whether multiple files can be dropped. */
	multiple?: boolean;
	/** Accepted file types (e.g., 'image/*', '.pdf', etc.). */
	accept?: string;
	/** Maximum file size in bytes. */
	maxSize?: number;
	/** Maximum number of files. */
	maxFiles?: number;
	/** The label text for the dropzone. */
	label?: string;
	/** Helper text displayed below the dropzone. */
	helperText?: string;
	/** Error message displayed when there's an error. */
	errorText?: string;
	/** Whether the dropzone has an error. */
	hasError?: boolean;
	/** Text displayed in the dropzone. */
	dropzoneText?: string;
	/** Hint text displayed in the dropzone. */
	hintText?: string;
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
