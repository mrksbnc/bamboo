import type { HtmlButtonType } from '@/shared';
import type { BoSize } from '@/shared';
import type { Icon } from '@/components/bo_icon';

export type BoButtonProps = {
	label?: string;
	variant?: BoButtonVariant;
	shape?: BoButtonShape;
	type?: HtmlButtonType;
	disabled?: boolean;
	isLoading?: boolean;
	size?: BoSize;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};

export enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
	link = 'link',
	link_secondary = 'link_secondary',
	link_danger = 'link_danger',
	link_warning = 'link_warning',
	link_success = 'link_success',
	link_dark = 'link_dark',
}

export enum BoButtonShape {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
}
