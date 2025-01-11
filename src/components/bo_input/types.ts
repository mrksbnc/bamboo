import type { Icon } from '@/components/bo_icon';
import type { HtmlInputType } from '@/shared';
import type { BoInputSize, BoInputState } from './constants';

export type BoInputProps = {
	modelValue?: string;
	id?: string;
	label?: string;
	description?: string;
	type?:
		| HtmlInputType.text
		| HtmlInputType.number
		| HtmlInputType.email
		| HtmlInputType.password
		| HtmlInputType.tel
		| HtmlInputType.url
		| HtmlInputType.date
		| HtmlInputType.time
		| HtmlInputType.week
		| HtmlInputType.month
		| HtmlInputType.datetime_local;
	size?: BoInputSize;
	state?: BoInputState;
	disabled?: boolean;
	isLoading?: boolean;
	placeholder?: string;
	required?: boolean;
	readonly?: boolean;
	prefixIcon?: Icon | null;
	suffixIcon?: Icon | null;
	errorMessage?: string | null;
	loaderVariant?: 'spinner' | 'pulse';
};
