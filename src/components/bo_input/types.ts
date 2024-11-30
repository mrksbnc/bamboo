import type { Icon } from '@/components/bo_icon';
import type { InputTypeHTMLAttribute } from 'vue';
import type { BoInputSize, BoInputState } from './constants';

export type BoInputProps = {
	modelValue?: string;
	id?: string;
	label?: string;
	description?: string;
	type?: InputTypeHTMLAttribute;
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
