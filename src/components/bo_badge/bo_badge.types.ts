import type { Icon } from '@/components/bo_icon';
import type { BoSize, BoVariant } from '@/global';
import type { BoBadgeShape, BoBadgeType } from './bo_badge';

export type BoBadgeComponentProps = {
	label?: string;
	type?: BoBadgeType;
	size?: BoSize;
	shape?: BoBadgeShape;
	variant?: BoVariant;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};
