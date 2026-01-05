import { InputHTMLAttributes } from 'vue';

export type BoInputSize = 'sm' | 'md' | 'lg';

export type BoInputType = InputHTMLAttributes['type'];

export const BO_INPUT_SIZE_STYLE = {
	sm: /*tw*/ 'h-8 px-2.5 text-sm',
	md: /*tw*/ 'h-9 px-3 text-sm',
	lg: /*tw*/ 'h-10 px-4 text-base',
} as const satisfies Record<BoInputSize, string>;
