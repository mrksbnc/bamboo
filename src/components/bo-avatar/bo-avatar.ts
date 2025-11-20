import type { BoSize, BoVariant } from '@/shared';

export enum BoAvatarShape {
	circle = 'circle',
	rounded = 'rounded',
	square = 'square',
}

export enum BoAvatarIndicatorPosition {
	top_right = 'top-right',
	top_left = 'top-left',
	bottom_right = 'bottom-right',
	bottom_left = 'bottom-left',
}

export interface BoAvatarProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The image source URL. */
	src?: string;
	/** The alt text for the image. */
	alt?: string;
	/** The size of the avatar. */
	size?: BoSize;
	/** The shape of the avatar. */
	shape?: BoAvatarShape;
	/** Text to display when no image is provided (abbreviation). */
	text?: string;
	/** Whether to show an indicator. */
	showIndicator?: boolean;
	/** The variant of the indicator. */
	indicatorVariant?: BoVariant;
	/** Custom color for the avatar background (CSS variable, hex, rgb, rgba). */
	customBackgroundColor?: string;
	/** Custom color for the avatar border (CSS variable, hex, rgb, rgba). */
	customBorderColor?: string;
	/** Custom color for the avatar text (CSS variable, hex, rgb, rgba). */
	customTextColor?: string;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** Label for screen readers. */
	ariaLabel?: string;
}
