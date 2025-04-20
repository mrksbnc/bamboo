import type { Icon } from '@/components/bo_icon';
import type { TextareaHTMLAttributes } from 'vue';
import type {
	BoTextareaResize,
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
	BoTextareaWrap,
} from './constants';

export type BoTextareaProps = {
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
};
