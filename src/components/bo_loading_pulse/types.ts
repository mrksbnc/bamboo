import type { BoSize } from '@/data/bo_size.constant';
import type { BoLoaderTextPosition } from '@/data/loader.constant';

export type BoLoadingPulseProps = {
	size?: BoSize;
	variant?: string;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
};
