import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import type { BoSize } from '@/shared/bo-size';

export interface BoLoadingPulseProps {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
}
