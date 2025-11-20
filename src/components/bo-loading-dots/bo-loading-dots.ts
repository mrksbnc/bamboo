import { AriaLive } from '@/shared/accessibility.js';
import type { BoSize } from '@/shared/size.js';
import { BoLoaderTextPosition } from '@/shared/loader.js';
import type { BoVariant } from '@/shared/variant.js';

export interface BoLoadingDotsProps {
	/** Unique id for the loading dots */
	id?: string;
	/** Unique data-test-id for the dots container */
	dataTestId?: string;
	/** The size of the loading dots */
	size?: BoSize;
	/** Predefined color variant of the dots */
	variant?: BoVariant;
	/** Optional loader text to display */
	loaderText?: string;
	/** Position of the text relative to the dots */
	textPosition?: BoLoaderTextPosition;
	/** Custom color of the loading dots in CSS compatible format */
	customColor?: string;
	/** Accessibility live region politeness setting */
	ariaLive?: AriaLive;
	/** Accessible label describing the dots state */
	ariaLabel?: string;
	/** Mark the region as busy while the dots are visible */
	ariaBusy?: boolean;
	/** Optional custom classes appended to the dots wrapper */
	customContainerCssClass?: string;
	/** Optional custom classes appended to the dots element */
	customDotsCssClass?: string;
}
