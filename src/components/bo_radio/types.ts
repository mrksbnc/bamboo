import type { BoRadioSize, BoRadioState } from './constants'

export type BoRadioProps = {
	modelValue?: string | number | boolean
	value: string | number | boolean
	id?: string
	label?: string
	description?: string
	state?: BoRadioState
	size?: BoRadioSize
	errorMessage?: string | null
	disabled?: boolean
	readonly?: boolean
	required?: boolean
	name?: string
}
