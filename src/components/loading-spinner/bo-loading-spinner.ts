import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import type { BoSize } from '@/shared/bo-size.js';

export interface BoLoadingSpinnerProps {
	/** Unique id for the loading spinner */
	id?: string;
	/** The size of the loading spinner */
	size?: BoSize;
	/** The variant of the loading spinner */
	variant?: BoLoaderVariant;
	/** Custom color of the loading spinner in hex format */
	customColor?: string;
	/** Optional loader text to display */
	loaderText?: string;
	/** Position of the text of the loading spinner */
	textPosition?: BoLoaderTextPosition;
}
