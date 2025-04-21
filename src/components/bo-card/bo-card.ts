import type { Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';

export enum BoCardVariant {
	default = 'default',
	bordered = 'bordered',
	flat = 'flat',
}

export enum BoCardPadding {
	none = 'none',
	small = 'small',
	default = 'default',
	large = 'large',
}

export interface BoCardProps {
	/**
	 * The variant of the card
	 */
	variant?: BoCardVariant;
	/**
	 * The size of the card
	 */
	size?: BoSize;
	/**
	 * The padding of the card
	 */
	padding?: BoCardPadding;
	/**
	 * Whether the card is hoverable
	 */
	hoverable?: boolean;
	/**
	 * Whether the card is clickable
	 */
	clickable?: boolean;
	/**
	 * Whether the card is disabled
	 */
	disabled?: boolean;
	/**
	 * Custom CSS class to apply to the card
	 */
	cssClass?: string;
	/**
	 * The id of the card
	 */
	id?: string;
	/**
	 * Icon to display in the header
	 */
	headerIcon?: Icon;
	/**
	 * Whether to show a border radius
	 */
	rounded?: boolean;
	/**
	 * Whether to show a shadow
	 */
	shadow?: boolean;
}
