import { Icon } from '@/components/bo-icon';
import type { InputHTMLAttributes } from 'vue';

export enum BoInputSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoInputState {
	none = 'none',
	valid = 'valid',
	invalid = 'invalid',
}

export enum BoInputType {
	text = 'text',
	password = 'password',
	email = 'email',
	number = 'number',
	tel = 'tel',
	url = 'url',
	search = 'search',
	date = 'date',
}

export enum BoInputVariant {
	default = 'default',
	filled = 'filled',
	underline = 'underline',
}

export enum BoInputLoaderVariant {
	spinner = 'spinner',
	pulse = 'pulse',
}

export interface BoInputProps {
	modelValue?: string | number;
	id?: string;
	label?: string;
	description?: string;
	placeholder?: string;
	size?: BoInputSize;
	state?: BoInputState;
	type?: BoInputType;
	variant?: BoInputVariant;
	isLoading?: boolean;
	prefixIcon?: Icon | null;
	suffixIcon?: Icon | null;
	errorMessage?: string | null;
	loaderVariant?: BoInputLoaderVariant;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	autofocus?: boolean;
	clearable?: boolean;
	name?: string;
	min?: number | string;
	max?: number | string;
	pattern?: string;
	attributes?: InputHTMLAttributes;
}
