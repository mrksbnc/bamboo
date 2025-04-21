import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import type { BoSize } from '@/shared/bo-size';

export interface BoLoadingSpinnerProps {
	/**
	 * The size of the loading spinner
	 */
	size?: BoSize;
	/**
	 * The variant of the loading spinner
	 */
	variant?: BoLoaderVariant;
	/**
	 * The custom color of the loading spinner
	 */
	customColor?: string;
	/**
	 * The text of the loading spinner
	 */
	loaderText?: string;
	/**
	 * The position of the text of the loading spinner
	 */
	textPosition?: BoLoaderTextPosition;
}
