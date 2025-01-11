import type { BoSize } from '@/shared/bo_size';

export enum BoAvatarShape {
	circle = 'circle',
	square = 'square',
	rounded = 'rounded',
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

export type BoAvatarData = {
	alt?: string;
	src?: string;
	label?: string;
};

export type BoAvatarProps = {
	data: BoAvatarData;
	type?: BoAvatarType;
	shape?: BoAvatarShape;
	size?: BoSize;
	colorHex?: string;
	fontColorHex?: string;
	clickable?: boolean;
	withDefaultImage?: boolean;
};
