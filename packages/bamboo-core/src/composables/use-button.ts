import { computed, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoButtonProps, BoButtonSizeStyleMap, BoVariantStyleMap } from '../components/bo-button';
import { useColor } from './use-color';

export interface UseBoButton extends ComponentStyleComposable {}

export const BO_BUTTON_VARIANT_STYLE = {
	primary: /*tw*/ 'bg-blue-500 text-white dark:bg-blue-400 dark:text-white',
	secondary: /*tw*/ 'bg-neutral-500 text-white dark:bg-neutral-400 dark:text-white',
	success: /*tw*/ 'bg-green-500 text-white dark:bg-green-400 dark:text-white',
	warning: /*tw*/ 'bg-yellow-500 text-white dark:bg-yellow-400 dark:text-white',
	danger: /*tw*/ 'bg-red-500 text-white dark:bg-red-400 dark:text-white',
	black: /*tw*/ 'bg-black text-white dark:bg-black dark:text-white',
} as const satisfies BoVariantStyleMap;

export const BO_BUTTON_SIZE_STYLE = {
	xs: /*tw*/ 'px-2 py-1 text-xs',
	sm: /*tw*/ 'px-2.5 py-1.5 text-sm',
	md: /*tw*/ 'px-3 py-2 text-sm',
	lg: /*tw*/ 'px-4 py-2 text-base',
	xl: /*tw*/ 'px-6 py-3 text-base',
} as const satisfies BoButtonSizeStyleMap;

export const useBoButton = (props: BoButtonProps): UseBoButton => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const classValues = computed<string>(() => {
		return merge(
			BO_BUTTON_SIZE_STYLE[props.size || 'md'],
			BO_BUTTON_VARIANT_STYLE[props.variant || 'primary'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				color: getValidOrFallbackColorFromStr(props.customColor),
			};
		}

		return {};
	});

	return {
		classValues,
		styleValues,
	};
};
