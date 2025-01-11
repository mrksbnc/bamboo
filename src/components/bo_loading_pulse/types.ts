import type { BoSize } from '@/shared/bo_size';
import type { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo_loader';

export type BoLoadingPulseProps = {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
};
