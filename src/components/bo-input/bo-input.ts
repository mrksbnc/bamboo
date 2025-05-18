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

export interface BoInputPill {
	value: string;
	id?: string;
	icon?: Icon;
}

export type BoInputProps = {
	/** Unique id for the input*/
	id?: string;
	/** Input name attribute */
	name?: string;
	/** The placeholder text */
	placeholder?: string;
	/** The label for the input */
	label?: string;
	/** Which state the input is in */
	state?: BoInputState;
	/** The size of the input */
	size?: BoInputSize;
	/** Whether the input is disabled */
	disabled?: boolean;
	/** Whether the input is required */
	required?: boolean;
	/** Helper text to display below the input */
	description?: string;
	/** Error message to display when in error state */
	error?: string;
	/** Icon to display before the input text */
	prefixIcon?: Icon;
	/** Icon to display after the input text */
	suffixIcon?: Icon;
	/** Input type (text, email, password, etc.) */
	type?: string;
	/** Whether the input is readonly*/
	readonly?: boolean;
	/** ARIA label for accessibility */
	ariaLabel?: string;
	/** Whether the input should autofocus */
	autofocus?: boolean;
	/** Array of pill items to display in the input */
	pills?: BoInputPill[];
	/** Whether to enable horizontal scrolling for pills*/
	horizontalScroll?: boolean;
	/** Whether to show toggle button for password input*/
	revealPassword?: boolean;
};
