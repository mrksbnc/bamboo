export enum BoAvatarType {
	image = 'image',
	text = 'text',
}

export type AvatarImageArgs = {
	src: string;
	alt?: string;
};

export type AvatarTextArgs = {
	value: string;
	alt?: string;
	backgroundColor?: string;
};

export type AvatarComponentProps = {
	size?: string;
	type: BoAvatarType;
	text?: AvatarTextArgs;
	image?: AvatarImageArgs;
};
