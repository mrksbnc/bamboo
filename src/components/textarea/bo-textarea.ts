import type { Icon } from '@/components/icon/bo-icon.js';

export enum BoTextareaVariant {
	default = 'default',
	filled = 'filled',
}

export enum BoTextareaState {
	default = 'default',
	success = 'success',
	error = 'error',
}

export enum BoTextareaSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export interface BoTextareaProps {
	/** The textarea value */
	modelValue?: string;
	/** The placeholder text */
	placeholder?: string;
	/** The textarea label */
	label?: string;
	/** The textarea variant */
	variant?: BoTextareaVariant;
	/** The textarea state */
	state?: BoTextareaState;
	/** The textarea size */
	size?: BoTextareaSize;
	/** Whether the textarea is disabled */
	disabled?: boolean;
	/** Whether the textarea is required */
	required?: boolean;
	/** Help text displayed below the textarea */
	description?: string;
	/** Error message to display when in error state */
	error?: string;
	/** Icon to display before the textarea text */
	prefixIcon?: Icon;
	/** Icon to display after the textarea text */
	suffixIcon?: Icon;
	/** Unique ID for the textarea */
	id?: string;
	/** Textarea name attribute */
	name?: string;
	/** Whether the textarea is readonly */
	readonly?: boolean;
	/** ARIA label for accessibility */
	ariaLabel?: string;
	/** Number of rows for the textarea */
	rows?: number;
	/** Whether the textarea should be resizable */
	resizable?: boolean;
	/** Maximum length of the textarea */
	maxlength?: number;
	/** Whether the textarea should autofocus */
	autofocus?: boolean;
}
