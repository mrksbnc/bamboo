import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import type { BoSize } from '@/shared/bo-size.js';

export interface BoLoadingPulseProps {
	/** Unique id for the loading pulse */
	id?: string;
	/** The size of the loading pulse */
	size?: BoSize;
	/** The variant of the loading pulse */
	variant?: BoLoaderVariant;
	/** The custom color of the loading pulse */
	customColor?: string;
	/** Optional loader text to display */
	loaderText?: string;
	/** Position of the text of the loading pulse */
	textPosition?: BoLoaderTextPosition;
}
