import type { Icon } from '@/components/bo_icon'
import type { InputHTMLAttributes } from 'vue'
import type {
	BoInputLoaderVariant,
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
} from './constants'

export type BoInputProps = {
	modelValue?: string | number
	id?: string
	label?: string
	description?: string
	placeholder?: string
	size?: BoInputSize
	state?: BoInputState
	type?: BoInputType
	variant?: BoInputVariant
	isLoading?: boolean
	prefixIcon?: Icon | null
	suffixIcon?: Icon | null
	errorMessage?: string | null
	loaderVariant?: BoInputLoaderVariant
	disabled?: boolean
	readonly?: boolean
	required?: boolean
	autofocus?: boolean
	clearable?: boolean
	name?: string
	min?: number | string
	max?: number | string
	pattern?: string
	attributes?: InputHTMLAttributes
}
