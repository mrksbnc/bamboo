import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import type { BoSize } from '@/shared/bo-size';

export interface BoLoadingPulseProps {
	/**
	 * The size of the loading pulse
	 */
	size?: BoSize;
	/**
	 * The variant of the loading pulse
	 */
	variant?: BoLoaderVariant;
	/**
	 * The custom color of the loading pulse
	 */
	customColor?: string;
	/**
	 * The text of the loading pulse
	 */
	loaderText?: string;
	/**
	 * The position of the text of the loading pulse
	 */
	textPosition?: BoLoaderTextPosition;
}
