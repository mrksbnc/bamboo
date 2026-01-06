import { computed, StyleValue } from 'vue';
import { BoInputProps, BoInputSizeStyleMap, BoInputVariantStyleMap } from '../components/bo-input';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';

export interface UseBoInput extends ComponentStyleComposable {}

export const BO_INPUT_SIZE_STYLE = {
	sm: /*tw*/ 'h-8 px-2.5 text-sm',
	md: /*tw*/ 'h-9 px-3 text-sm',
	lg: /*tw*/ 'h-10 px-4 text-base',
} as const satisfies BoInputSizeStyleMap;

export const BO_INPUT_STATE_STYLE = {
	default:
		/*tw*/ 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-0 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400',
	valid:
		/*tw*/ 'border-green-300 focus:border-green-500 focus:ring-green-500 focus:ring-offset-0 dark:border-green-600 dark:focus:border-green-400 dark:focus:ring-green-400',
	invalid:
		/*tw*/ 'border-red-300 focus:border-red-500 focus:ring-red-500 focus:ring-offset-0 dark:border-red-600 dark:focus:border-red-400 dark:focus:ring-red-400',
} as const satisfies BoInputVariantStyleMap;

export const useBoInput = (props: BoInputProps): UseBoInput => {
	const { merge } = useTailwind();

	const classValues = computed<string>(() => {
		return merge(
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
