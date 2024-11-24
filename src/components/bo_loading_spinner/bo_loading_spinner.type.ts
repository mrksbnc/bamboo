import type { BoSize } from '@/data/bo_size.constant';
import type { BoLoaderVariant } from '@/data/loader.constant';

export type BoLoadingSpinnerProps = {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
};
