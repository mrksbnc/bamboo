import type { BoSize } from '@/shared';
import type { Icon } from '@/components/bo_icon';
import type { Booleanish } from '@/types/boolean';

export type BoButtonProps = {
	label?: string;
	variant?: BoButtonVariant;
	shape?: BoButtonShape;
	loaderType?: 'spinner' | 'pulse';
	isLoading?: boolean;
	size?: BoSize;
	useSlot?: boolean;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	autofocus?: Booleanish;
	disabled?: Booleanish;
	type?: 'submit' | 'reset' | 'button';
	fullWidth?: boolean;
};

export enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoButtonShape {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
	link = 'link',
}
