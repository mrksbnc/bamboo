import type { Icon } from '@/components/bo_icon';
import type { BoInputSize, BoInputState } from './constants';
import type { InputHTMLAttributes } from 'vue';

export type BoInputProps = {
	modelValue?: string;
	id?: string;
	label?: string;
	description?: string;
	size?: BoInputSize;
	state?: BoInputState;
	isLoading?: boolean;
	prefixIcon?: Icon | null;
	suffixIcon?: Icon | null;
	errorMessage?: string | null;
	loaderVariant?: 'spinner' | 'pulse';
	attributes?: InputHTMLAttributes;
};
