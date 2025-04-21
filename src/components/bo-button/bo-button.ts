import type { Icon } from '@/components/bo-icon';
import type { BoLoaderType, BoSize, HtmlButtonType } from '@/shared';

export type BoButtonProps = {
	label?: string;
	variant?: BoButtonVariant;
	shape?: BoButtonShape;
	loaderType?: BoLoaderType;
	isLoading?: boolean;
	size?: BoSize;
	useSlot?: boolean;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	autofocus?: boolean;
	disabled?: boolean;
	type?: HtmlButtonType;
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
