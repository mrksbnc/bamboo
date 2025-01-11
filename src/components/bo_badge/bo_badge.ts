import type { BoSize } from '@/shared/bo_size';
import type { Icon } from '@/components/bo_icon';

export enum BoBadgeVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
}

export enum BoBadgeType {
	default = 'default',
	outline = 'outline',
}

export enum BoBadgeShape {
	pill = 'pill',
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}

export type BoBadgeProps = {
	label?: string;
	type?: BoBadgeType;
	size?: BoSize;
	shape?: BoBadgeShape;
	variant?: BoBadgeVariant;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};
