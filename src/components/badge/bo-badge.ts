import type { Icon } from '@/components/icon/bo-icon.js';
import type { BoSize } from '@/shared/bo-size.js';

export enum BoBadgeVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoBadgeType {
	default = 'default',
	outline = 'outline',
}

export enum BoBadgeShape {
	pill = 'pill',
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}

export interface BoBadgeProps {
	/**
	 * Unique ID for the badge, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Text content of the badge
	 */
	label?: string;
	/**
	 * Visual style of the badge
	 * @default BoBadgeType.default
	 */
	type?: BoBadgeType;
	/**
	 * Size of the badge
	 * @default BoSize.default
	 */
	size?: BoSize;
	/**
	 * Shape of the badge
	 * @default BoBadgeShape.default
	 */
	shape?: BoBadgeShape;
	/**
	 * Color variant of the badge
	 * @default BoBadgeVariant.primary
	 */
	variant?: BoBadgeVariant;
	/**
	 * Custom icon configuration for badge
	 * @default { prefix: Icon.none, suffix: Icon.none }
	 */
	icon?: {
		/**
		 * Icon to display before the label
		 */
		prefix?: Icon;
		/**
		 * Icon to display after the label
		 */
		suffix?: Icon;
	};
}
