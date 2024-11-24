import type {
	BoAvatarShape,
	BoAvatarSize,
	BoAvatarType,
} from './bo_avatar.contant';

export type BoAvatarImageProps = {
	src: string;
	alt?: string;
};

export type BoAvatarInitialsProps = {
	initials: string;
	alt?: string;
};

export type BoAvatarProps = {
	imageData?: BoAvatarImageProps;
	initialsData?: BoAvatarInitialsProps;
	type?: BoAvatarType;
	shape?: BoAvatarShape;
	size?: BoAvatarSize;
	colorHex?: string;
	fontColorHex?: string;
	clickable?: boolean;
	withDefaultImage?: boolean;
};
