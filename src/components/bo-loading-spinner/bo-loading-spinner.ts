import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import type { BoSize } from '@/shared/bo-size';

export interface BoLoadingSpinnerProps {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
}
