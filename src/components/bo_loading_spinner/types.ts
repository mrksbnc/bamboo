import type { BoSize } from '@/data/bo_size.constant'
import type {
	BoLoaderTextPosition,
	BoLoaderVariant,
} from '@/data/loader.constant'

export type BoLoadingSpinnerProps = {
	size?: BoSize
	variant?: BoLoaderVariant
	customColor?: string
	loaderText?: string
	textPosition?: BoLoaderTextPosition
}
