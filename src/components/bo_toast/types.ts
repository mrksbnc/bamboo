import type { BoToastPosition, BoToastType } from './constants'

export type BoToastProps = {
	title: string
	message: string
	type?: BoToastType
	duration?: number
	visible?: boolean
	autoClose?: boolean
	position?: BoToastPosition
}
