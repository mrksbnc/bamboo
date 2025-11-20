import type { Icon } from '@/components/bo-icon';
import type { AriaLive } from '@/shared/accessibility';

export enum BoInputType {
	text = 'text',
	email = 'email',
	password = 'password',
	number = 'number',
	tel = 'tel',
	url = 'url',
	search = 'search',
}

export enum BoInputSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

export enum BoInputState {
	default = 'default',
	error = 'error',
	success = 'success',
}

export interface BoInputProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The name attribute of the input. */
	name?: string;
	/** The type of the input. */
	type?: BoInputType;
	/** The size of the input. */
	size?: BoInputSize;
	/** The validation state of the input. */
	state?: BoInputState;
	/** The placeholder text. */
	placeholder?: string;
	/** Whether the input is disabled. */
	disabled?: boolean;
	/** Whether the input is required. */
	required?: boolean;
	/** Whether the input is readonly. */
	readonly?: boolean;
	/** The label text for the input. */
	label?: string;
	/** Helper text displayed below the input. */
	helperText?: string;
	/** Error message displayed when state is error. */
	errorText?: string;
	/** Success message displayed when state is success. */
	successText?: string;
	/** The prefix icon to render. */
	prefixIcon?: Icon;
	/** The suffix icon to render. */
	suffixIcon?: Icon;
	/** Action button text (renders button inside input). */
	actionText?: string;
	/** Whether the action button is disabled. */
	actionDisabled?: boolean;
	/** Whether to show a clear button when input has value. */
	clearable?: boolean;
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
	/** Autocomplete attribute. */
	autocomplete?: string;
	/** Maximum length of the input value. */
	maxlength?: number;
	/** Minimum length of the input value. */
	minlength?: number;
	/** Pattern for validation. */
	pattern?: string;
}
