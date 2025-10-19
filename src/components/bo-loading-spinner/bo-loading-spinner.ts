import { AriaLive } from '@/core/accessibility.js'
import type { BoSize } from '@/core/size.js'

export enum BoLoaderVariant {
	/** --blue-600 */
	primary = 'primary',
	/** --neutral-600 */
	secondary = 'secondary',
	/** --green-600 */
	success = 'success',
	/** --yellow-500 */
	warning = 'warning',
	/** --red-600 */
	danger = 'danger',
	/** --neutral-950 */
	dark = 'dark',
	/** --neutral-50 */
	light = 'light',
}

export enum BoLoaderTextPosition {
	top = 'top',
	bottom = 'bottom',
	before = 'before',
	after = 'after',
}

export interface BoLoadingSpinnerProps {
	/** Unique id for the loading spinner */
	id?: string
	/** Unique data-test-id for the spinner container */
	dataTestId?: string
	/** The size of the loading spinner */
	size?: BoSize
	/** Predefined color variant of the spinner */
	variant?: BoLoaderVariant
	/** Optional loader text to display */
	loaderText?: string
	/** Position of the text relative to the spinner */
	textPosition?: BoLoaderTextPosition
	/** Custom color of the loading spinner in CSS compatible format */
	customColor?: string
	/** Accessibility live region politeness setting */
	ariaLive?: AriaLive
	/** Accessible label describing the spinner state */
	ariaLabel?: string
	/** Mark the region as busy while the spinner is visible */
	ariaBusy?: boolean
	/** Optional custom classes appended to the spinner wrapper */
	customCssClass?: string
}
