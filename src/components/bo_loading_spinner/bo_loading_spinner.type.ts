import type { BoSize } from '@/data/bo_size.constant';
import type { BoLoadingSpinnerVariant } from './bo_loading_spinner.constant';

export type BoLoadingSpinnerProps = {
	size?: BoSize;
	variant?: BoLoadingSpinnerVariant;
	customColor?: string;
	loaderText?: string;
};
