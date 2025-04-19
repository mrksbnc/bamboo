import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo_loader'
import type { BoSize } from '@/shared/bo_size'

export type BoLoadingPulseProps = {
	size?: BoSize
	variant?: BoLoaderVariant
	customColor?: string
	loaderText?: string
	textPosition?: BoLoaderTextPosition
}
