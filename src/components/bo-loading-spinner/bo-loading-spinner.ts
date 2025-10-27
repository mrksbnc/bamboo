import { AriaLive } from '@/shared/accessibility.js';
import type { BoSize } from '@/shared/size.js';
import { BoLoaderTextPosition } from '@/shared/loader.js';
import type { BoVariant } from '@/shared/variant.js';

export interface BoLoadingSpinnerProps {
	/** Unique id for the loading spinner */
	id?: string;
	/** Unique data-test-id for the spinner container */
	dataTestId?: string;
	/** The size of the loading spinner */
	size?: BoSize;
	/** Predefined color variant of the spinner */
	variant?: BoVariant;
	/** Optional loader text to display */
	loaderText?: string;
	/** Position of the text relative to the spinner */
	textPosition?: BoLoaderTextPosition;
	/** Custom color of the loading spinner in CSS compatible format */
	customColor?: string;
	/** Accessibility live region politeness setting */
	ariaLive?: AriaLive;
	/** Accessible label describing the spinner state */
	ariaLabel?: string;
	/** Mark the region as busy while the spinner is visible */
	ariaBusy?: boolean;
	/** Optional custom classes appended to the spinner wrapper */
	customContainerCssClass?: string;
	/** Optional custom classes appended to the spinner element */
	customSpinnerCssClass?: string;
}
