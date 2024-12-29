import type { Icon } from '@/components/bo_icon';
import type { BoSize } from '@/data/bo_size.constant';
import type { HtmlButtonType } from '@/global/html_button';
import type { BoButtonShape, BoButtonVariant } from './constants';

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
	linkVariantWithShadow?: boolean;
};
