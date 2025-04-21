import type { BoSize } from '@/shared/bo-size';

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
	alt?: string;
	src?: string;
	label?: string;
}

export interface BoAvatarColor {
	bgColorHex?: string;
	colorHex?: string;
}

export interface BoAvatarProps {
	/**
	 * Unique ID for the avatar, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Size of the avatar
	 * @default BoSize.default
	 */
	size?: BoSize;
	/**
	 * Avatar data (image source or label)
	 */
	data?: BoAvatarData;
	/**
	 * Type of avatar (image or initials)
	 * @default BoAvatarType.initials
	 */
	type?: BoAvatarType;
	/**
	 * Whether the avatar is clickable. In case yes
	 * the avatar will use cursor-pointer and hover:opacity-80
	 */
	clickable?: boolean;
	/**
	 * Shape of the avatar
	 */
	shape?: BoAvatarShape;
	/**
	 * Custom colors for the avatar
	 */
	color?: BoAvatarColor;
	/**
	 * Color variant of the avatar
	 */
	variant?: BoAvatarVariant;
}
