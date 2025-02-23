import type { BoSize } from '@/shared';
import type { Icon } from '@/components/bo_icon';
import type { ButtonHTMLAttributes, HTMLAttributes } from 'vue';
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
	// ButtonHTMLAttributes
	autofocus?: Booleanish;
	disabled?: Booleanish;
	form?: string;
	formaction?: string;
	formenctype?: string;
	formmethod?: string;
	formnovalidate?: Booleanish;
	formtarget?: string;
	name?: string;
	type?: 'submit' | 'reset' | 'button';
	value?: string | ReadonlyArray<string> | number;
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
	link = 'link',
	link_secondary = 'link_secondary',
	link_danger = 'link_danger',
	link_warning = 'link_warning',
	link_success = 'link_success',
	link_light = 'link_light',
	link_dark = 'link_dark',
}

export enum BoButtonShape {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
}
