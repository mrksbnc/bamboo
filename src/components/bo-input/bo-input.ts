import type { Icon } from '@/components/bo-icon';

export enum BoInputVariant {
	default = 'default',
	outline = 'outline',
}

export enum BoInputState {
	default = 'default',
	error = 'error',
	success = 'success',
	warning = 'warning',
}

export enum BoInputSize {
	extra_small = 'extra_small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra_large',
}

export enum BoInputType {
	text = 'text',
	password = 'password',
	number = 'number',
	email = 'email',
}

/**
 * Pill Item interface for input component
 */
export interface BoInputPill {
	label: string;
	value: string;
}

export type BoInputProps = {
	/**
	 * The input value
	 */
	modelValue?: string;
	/**
	 * The placeholder text
	 */
	placeholder?: string;
	/**
	 * The input label
	 */
	label?: string;
	/**
	 * The input variant
	 */
	variant?: BoInputVariant;
	/**
	 * The input state
	 */
	state?: BoInputState;
	/**
	 * The input size
	 */
	size?: BoInputSize;
	/**
	 * Whether the input is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the input is required
	 */
	required?: boolean;
	/**
	 * Helper text to display below the input
	 */
	description?: string;
	/**
	 * Error message to display when in error state
	 */
	error?: string;
	/**
	 * Icon to display before the input text
	 */
	prefixIcon?: Icon;
	/**
	 * Icon to display after the input text
	 */
	suffixIcon?: Icon;
	/**
	 * Input type (text, email, password, etc.)
	 */
	type?: string;
	/**
	 * Unique ID for the input
	 */
	id?: string;
	/**
	 * Input name attribute
	 */
	name?: string;
	/**
	 * Whether the input is readonly
	 */
	readonly?: boolean;
	/**
	 * ARIA label for accessibility
	 */
	ariaLabel?: string;
	/**
	 * Whether the input should autofocus
	 */
	autofocus?: boolean;
	/**
	 * Array of pill items to display in the input
	 */
	pills?: BoInputPill[];
	/**
	 * Whether to enable horizontal scrolling for pills
	 */
	horizontalScroll?: boolean;
	/**
	 * Whether to show toggle button for password input
	 */
	revealPassword?: boolean;
};
