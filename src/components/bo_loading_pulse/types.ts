import type { BoSize } from '@/data/bo_size.constant';
import type {
	BoLoaderTextPosition,
	BoLoaderVariant,
} from '@/data/loader.constant';

export type BoLoadingPulseProps = {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
};
