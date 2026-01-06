import { computed, StyleValue } from 'vue';
import { BoInputProps, BoInputSizeStyleMap, BoInputVariantStyleMap } from '../components/bo-input';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';

export interface UseBoInput extends ComponentStyleComposable {}

/**
 * Base classes for the input element
 */
const BO_INPUT_BASE_CLASSES =
	/*tw*/ 'w-full bg-transparent text-slate-700 text-sm border rounded-md transition duration-300 ease focus:outline-none shadow-sm focus:shadow placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500';

export const BO_INPUT_SIZE_STYLE = {
	sm: /*tw*/ 'px-3 py-1.5',
	md: /*tw*/ 'px-3 py-2',
	lg: /*tw*/ 'px-3 py-3',
} as const satisfies BoInputSizeStyleMap;

export const BO_INPUT_STATE_STYLE = {
	default:
		/*tw*/ 'border-slate-200 focus:border-slate-400 hover:border-slate-300 dark:border-slate-600 dark:focus:border-slate-500 dark:hover:border-slate-500',
	valid:
		/*tw*/ 'border-green-300 focus:border-green-500 hover:border-green-400 dark:border-green-600 dark:focus:border-green-400 dark:hover:border-green-500',
	invalid:
		/*tw*/ 'border-red-300 focus:border-red-500 hover:border-red-400 dark:border-red-600 dark:focus:border-red-400 dark:hover:border-red-500',
} as const satisfies BoInputVariantStyleMap;

export const useBoInput = (props: BoInputProps): UseBoInput => {
	const { merge } = useTailwind();

	const classValues = computed<string>(() => {
		return merge(
			BO_INPUT_BASE_CLASSES,
			BO_INPUT_SIZE_STYLE[props.size || 'md'],
			BO_INPUT_STATE_STYLE[props.state || 'default'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

	return {
		classValues,
		styleValues,
	};
};
