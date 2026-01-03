import { BoSize } from '@/core/constants/size.js';

export enum BoIconVariant {
	/** currentColor */
	default = 'default',
	/** --blue-500 */
	primary = 'primary',
	/** --neutral-500 */
	secondary = 'secondary',
	/** --green-500 */
	success = 'success',
	/** --orange-500 */
	warning = 'warning',
	/** --red-500 */
	danger = 'danger',
	/** --white */
	white = 'white',
	/** --black */
	black = 'black',
	/** currentColor */
	current = 'current',
	/** inherit */
	inherit = 'inherit',
}

export interface BoIconProps {
	/** The unique ID for the icon */
	id?: string;
	/** The data-test-id of the icon */
	dataTestId?: string;
	/** The icon to display */
	icon: Icon;
	/** The size of the icon */
	size?: BoSize;
	/** The color of the icon defined by the enum BoIconColor */
	variant?: BoIconVariant;
	/** The color of the icon */
	customColor?: string;
	/** Custom css class passed to the root element */
	customCssClass?: string;
	/** cursor type of the element. This must be a valid cursor value. */
	cursor?: string;
	/** The accessible title of the icon. */
	title?: string;
	/** The accessibility role of the icon. */
	role?: string;
	/**
	 * Whether the icon is decorative which means that the icon is not
	 * a part of the UI and is only used to convey information.
	 */
	decorative?: boolean;
}
