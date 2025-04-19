import type { BoSize } from '@/shared/bo_size'

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
	variant?: BoAvatarVariant
	withIndicator?: boolean
	indicatorStatus?: BoAvatarIndicatorStatus
	indicatorPosition?: BoAvatarIndicatorPosition
}
