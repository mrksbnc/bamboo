import { BoButtonVariant } from '@/components/button/bo-button.js';
import { Icon } from '@/components/icon/bo-icon.js';
import { BoSize } from '@/shared/bo-size.js';

export enum BoButtonGroupOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export enum BoButtonGroupShape {
	square = 'square',
	rounded = 'rounded',
}

export interface ButtonGroupItemListPosition {
	/**
	 * Zero-based index of the button in the group
	 */
	index: number;
	/** Total number of buttons in the group */
	length: number;
	/**
	 * Whether this is the last button in the group
	 */
	isLast: boolean;
	/**
	 * Whether this is the first button in the group
	 */
	isFirst: boolean;
	/**
	 * Index of the currently active button in the group
	 */
	activeIndex: number;
}

export interface BoButtonGroupSubgroup {
	/**
	 * Unique identifier for the subgroup
	 */
	id?: string;
	/**
	 * Label for the subgroup (for accessibility)
	 */
	label?: string;
	/**
	 * Array of button items in this subgroup
	 */
	items: BoButtonGroupItemProps[];
	/**
	 * Whether this subgroup is disabled
	 */
	disabled?: boolean;
}

/**
 * Props for individual button items within the group
 */
export interface BoButtonGroupItemProps {
	/**
	 * Unique identifier for the button
	 */
	id?: string;
	/**
	 * Text label to display on the button
	 */
	label?: string;
	/**
	 * Size of the button
	 */
	size?: BoSize;
	/**
	 * Whether the button is in active state
	 */
	active?: boolean;
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
	/**
	 * Shape of the button
	 */
	shape?: BoButtonGroupShape;
	/**
	 * Color variant of the button
	 */
	variant?: BoButtonVariant;
	/**
	 * Override the group's orientation for this button
	 */
	orientation?: BoButtonGroupOrientation;
	/**
	 * Position information within the button group
	 */
	position?: ButtonGroupItemListPosition;
	/**
	 * Icon to display before the label
	 */
	prefixIcon?: Icon;
	/**
	 * Icon to display after the label
	 */
	suffixIcon?: Icon;
	/**
	 * Custom accessible name for the button
	 */
	ariaLabel?: string;
}

export interface BoButtonGroupProps<T = Record<string, unknown>> {
	/**
	 * Unique identifier for the group
	 */
	id?: string;
	/**
	 * Color variant for all buttons in the group
	 */
	variant?: BoButtonVariant;
	/**
	 * Layout orientation of the buttons
	 */
	orientation?: BoButtonGroupOrientation;
	/**
	 * Size for all buttons in the group
	 */
	size?: BoSize;
	/**
	 * Whether all buttons in the group are disabled
	 */
	disabled?: boolean;
	/**
	 * Shape for all buttons in the group
	 */
	shape?: BoButtonGroupShape;
	/**
	 * Array of button items to display
	 */
	items?: T[];
	/**
	 * Array of subgroups for logical grouping
	 */
	subgroups?: BoButtonGroupSubgroup[];
	/**
	 * The index of the active button in the group
	 */
	defaultActiveIndex?: number;
	/**
	 * Custom accessible label for the button group
	 */
	ariaLabel?: string;
	/**
	 * Whether multiple items can be selected at once
	 */
	multiSelect?: boolean;
}
