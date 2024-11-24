import type { Icon } from '@/components/bo_icon';
import type { BoSize } from '@/data/bo_size.constant';
import type { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './constants';

export type BoBadgeProps = {
	label?: string;
	type?: BoBadgeType;
	size?: BoSize;
	shape?: BoBadgeShape;
	variant?: BoBadgeVariant;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};
