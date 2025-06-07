import type { BoSize } from '@/shared/bo-size.js';

export enum BoAvatarShape {
	circle = 'circle',
	flat = 'flat',
	rounded = 'rounded',
	outline_flat = 'outline_flat',
	outline_rounded = 'outline_rounded',
	outline_circle = 'outline_circle',
}

export enum BoAvatarVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
}

export enum BoAvatarType {
	image = 'image',
	initials = 'initials',
}

export interface BoAvatarData {
	/** Alternative text for the avatar image */
	alt?: string;
	/** Source URL for the avatar image */
	src?: string;
	/** Label text for initials avatar */
	label?: string;
}

export interface BoAvatarColor {
	/** Background color in hex format */
	bgColorHex?: string;
	/** Text color in hex format */
	colorHex?: string;
}

export interface BoAvatarAccessibilityConstruct {
	/** Container accessibility attributes */
	container: {
		id: string;
		role: 'img' | 'button';
		ariaLabel: string;
		ariaDescribedBy?: string;
		tabIndex?: number;
	};
	/** Image accessibility attributes */
	image: {
		alt: string;
		ariaHidden?: boolean;
	};
	/** Interactive accessibility attributes */
	interactive: {
		isClickable: boolean;
		hasKeyboardSupport: boolean;
		ariaPressed?: boolean;
	};
}

export interface BoAvatarProps {
	/** Unique ID for the avatar, used for accessibility and testing */
	id?: string;
	/** Size of the avatar */
	size?: BoSize;
	/** Avatar data (image source or label) */
	data?: BoAvatarData;
	/** Type of avatar (image or initials) */
	type?: BoAvatarType;
	/** Whether the avatar is clickable and interactive */
	clickable?: boolean;
	/** Shape of the avatar */
	shape?: BoAvatarShape;
	/** Custom colors for the avatar */
	color?: BoAvatarColor;
	/** Color variant of the avatar */
	variant?: BoAvatarVariant;
	/** Custom ARIA label for accessibility */
	ariaLabel?: string;
	/** ID of element that describes this avatar */
	ariaDescribedBy?: string;
	/** Whether the avatar represents a pressed state (for button-like avatars) */
	ariaPressed?: boolean;
}
