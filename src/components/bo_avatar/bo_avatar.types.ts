import type { BoVariant } from '@/global';

export type AvatarImageArgs = {
	src: string;
	alt?: string;
};

export type AvatarTextArgs = {
	initial: string;
	alt?: string;
	backgroundColor?: string;
};

export type AvatarComponentProps = {
	size?: string;
	text?: AvatarTextArgs;
	image?: AvatarImageArgs;
	variant?: BoVariant;
};
