import type { Icon } from '@/components/bo_icon';
import type { BoSize } from '@/data/bo_size.constant';
import type { BoButtonShape, BoButtonVariant } from './constants';

export type BoButtonProps = {
	label?: string;
	variant?: BoButtonVariant;
	shape?: BoButtonShape;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	isLoading?: boolean;
	loaderText?: string;
	size?: BoSize;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};
