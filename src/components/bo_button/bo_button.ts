import type { Icon } from '@/components/bo_icon';
import type { BoSize } from '@/shared';
import type { Booleanish } from '@/types/boolean';

export type BoButtonProps = {
	label?: string;
	variant?: BoButtonVariant;
	shape?: BoButtonShape;
	loaderType?: 'spinner' | 'pulse';
	isLoading?: boolean;
	size?: BoSize;
	useSlot?: boolean;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	autofocus?: Booleanish;
	disabled?: Booleanish;
	type?: 'submit' | 'reset' | 'button';
	fullWidth?: boolean;
	/**
	 * For toggle buttons, indicates whether the button is in a pressed state
	 */
	pressed?: boolean;
	/**
	 * Custom accessible name for the button, especially important for icon-only buttons
	 * @see https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
	 */
	ariaLabel?: string;
	/**
	 * Unique ID for the button, used for accessibility and testing
	 */
	id?: string;
};

export enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoButtonShape {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
	link = 'link',
}
