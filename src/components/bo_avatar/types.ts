import type { BoSize } from '@/data/bo_size.constant'
import type { BoAvatarShape, BoAvatarType } from './constants'

export type BoAvatarImageProps = {
	src: string
	alt?: string
}

export type BoAvatarInitialsProps = {
	initials: string
	alt?: string
}

export type BoAvatarProps = {
	imageData?: BoAvatarImageProps
	initialsData?: BoAvatarInitialsProps
	type?: BoAvatarType
	shape?: BoAvatarShape
	size?: BoSize
	colorHex?: string
	fontColorHex?: string
	clickable?: boolean
	withDefaultImage?: boolean
}
