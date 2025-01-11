import type { BoSize } from '@/shared/bo_size.constant';
import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/loader.constant';

export type BoLoadingPulseProps = {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
};
