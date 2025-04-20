import type { Icon } from '@/components/bo-icon';
import type { TextareaHTMLAttributes } from 'vue';

export enum BoTextareaSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoTextareaState {
	none = 'none',
	valid = 'valid',
	invalid = 'invalid',
}

export enum BoTextareaVariant {
	default = 'default',
	filled = 'filled',
}

export enum BoTextareaWrap {
	soft = 'soft',
	hard = 'hard',
}

export enum BoTextareaResize {
	none = 'none',
	both = 'both',
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export interface BoTextareaProps {
	modelValue?: string;
	id?: string;
	label?: string;
	description?: string;
	placeholder?: string;
	size?: BoTextareaSize;
	state?: BoTextareaState;
	variant?: BoTextareaVariant;
	prefixIcon?: Icon | null;
	suffixIcon?: Icon | null;
	errorMessage?: string | null;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	autofocus?: boolean;
	clearable?: boolean;
	name?: string;
	rows?: number;
	cols?: number;
	maxlength?: number;
	minlength?: number;
	wrap?: BoTextareaWrap;
	resize?: BoTextareaResize;
	attributes?: TextareaHTMLAttributes;
}
