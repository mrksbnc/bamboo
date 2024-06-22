import type { BoSize, BoVariant } from '@/global';
import type { Icon } from '../bo_icon';
import type { BoButtonType } from './bo_button';

export type BoButtonComponentProps = {
	label: string;
	variant?: BoVariant;
	type?: BoButtonType;
	disabled?: boolean;
	isLoading?: boolean;
	loaderText?: string;
	size?: BoSize;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};
