import { AriaLive } from '@/shared/accessibility.js'
import type { BoSize } from '@/shared/size.js'
import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/loader.js'

export interface BoLoaderRingProps {
	/** Unique id for the loader ring */
	id?: string
	/** Unique data-test-id for the loader ring container */
	dataTestId?: string
	/** The size of the loader ring */
	size?: BoSize
	/** Predefined color variant of the loader ring */
	variant?: BoLoaderVariant
	/** Optional loader text to display */
	loaderText?: string
	/** Position of the text relative to the loader ring */
	textPosition?: BoLoaderTextPosition
	/** Custom color of the loader ring in CSS compatible format */
	customColor?: string
	/** Accessibility live region politeness setting */
	ariaLive?: AriaLive
	/** Accessible label describing the loader ring state */
	ariaLabel?: string
	/** Mark the region as busy while the loader ring is visible */
	ariaBusy?: boolean
	/** Optional custom classes appended to the loader ring wrapper */
	customContainerCssClass?: string
	/** Optional custom classes appended to the loader ring element */
	customRingClass?: string
}
