import type { Icon } from '@/components/bo-icon/bo-icon.js';
import { BoLoaderType } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import type { HtmlButtonType } from '@/shared/html-button.js';

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

export interface BoButtonProps {
	/**
	 * Unique ID for the button, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Text content of the button
	 */
	label?: string;
	/**
	 * Button appearance style
	 * @default BoButtonVariant.primary
	 */
	variant?: BoButtonVariant;
	/**
	 * Shape of the button
	 * @default BoButtonShape.default
	 */
	shape?: BoButtonShape;
	/**
	 * Type of loader to show when loading
	 * @default BoLoaderType.spinner
	 */
	loaderType?: BoLoaderType;
	/**
	 * Whether the button is in a loading state
	 */
	isLoading?: boolean;
	/**
	 * Button size
	 * @default BoSize.default
	 */
	size?: BoSize;
	/**
	 * The prefix icon to display before the label
	 */
	prefixIcon?: Icon;
	/**
	 * The suffix icon to display after the label
	 */
	suffixIcon?: Icon;
	/**
	 * Whether the button should be autofocused
	 * @default false
	 */
	autofocus?: boolean;
	/**
	 * Whether the button is disabled
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * HTML button type
	 * @default 'button'
	 */
	type?: HtmlButtonType;
	/**
	 * Whether the button should take full width
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * Custom accessible name for the button, especially important for icon-only buttons
	 * @see https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
	 */
	ariaLabel?: string;
}
