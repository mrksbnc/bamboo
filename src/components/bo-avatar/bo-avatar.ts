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

export enum BoAvatarIndicatorPosition {
	topLeft = 'top-left',
	topRight = 'top-right',
	bottomLeft = 'bottom-left',
	bottomRight = 'bottom-right',
}

export enum BoAvatarIndicatorStatus {
	online = 'online',
	offline = 'offline',
	busy = 'busy',
	away = 'away',
	none = 'none',
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

export interface BoAvatarIndicator {
	status?: BoAvatarIndicatorStatus;
	position?: BoAvatarIndicatorPosition;
}

export interface BoAvatarProps {
	id?: string;
	data: BoAvatarData;
	type?: BoAvatarType;
	shape?: BoAvatarShape;
	size?: BoSize;
	clickable?: boolean;
	withDefaultImage?: boolean;
	variant?: BoAvatarVariant;
	color?: BoAvatarColor;
	indicator?: BoAvatarIndicator;
}
