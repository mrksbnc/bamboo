import type { BoSize } from '@/data/bo_size.constant'
import type { BoAvatarShape, BoAvatarType } from './constants'

export type BoAvatarData = {
	alt?: string
	src?: string
	label?: string
}

export type BoAvatarProps = {
	data: BoAvatarData
	type?: BoAvatarType
	shape?: BoAvatarShape
	size?: BoSize
	colorHex?: string
	fontColorHex?: string
	clickable?: boolean
	withDefaultImage?: boolean
}
