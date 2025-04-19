import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo_loader'
import type { BoSize } from '@/shared/bo_size'

export type BoLoadingSpinnerProps = {
	size?: BoSize
	variant?: BoLoaderVariant
	customColor?: string
	loaderText?: string
	textPosition?: BoLoaderTextPosition
}
