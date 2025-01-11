import type { BoSize } from '@/shared/bo_size.constant';
import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/loader.constant';

export type BoLoadingSpinnerProps = {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
};
