import type { Icon } from '@/components/bo-icon';

export enum BoInputVariant {
	default = 'default',
	filled = 'filled',
}

export enum BoInputState {
	default = 'default',
	success = 'success',
	error = 'error',
}

export enum BoInputSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoInputType {
	text = 'text',
	email = 'email',
	password = 'password',
	number = 'number',
	search = 'search',
	phone = 'tel',
}

/**
 * Pill Item interface for input component
 */
export interface BoInputPill {
	/**
	 * Unique identifier for the pill
	 */
	id: string;
	/**
	 * Text to display on the pill
	 */
	text: string;
	/**
	 * Optional icon to display before pill text
	 */
	icon?: Icon;
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
