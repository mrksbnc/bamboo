import { computed, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoButtonProps, BoButtonSize, BoButtonVariant } from '../components/bo-button';
import { useColor } from './use-color';

type BoButtonSizeStyleMap = Record<BoButtonSize, string>;
type BoVariantStyleMap = Record<BoButtonVariant, string>;

const BUTTON_VARIANT_STYLE_MAP = {
	primary: /*tw*/ 'bg-blue-500 text-white dark:bg-blue-400 dark:text-white',
	secondary: /*tw*/ 'bg-neutral-500 text-white dark:bg-neutral-400 dark:text-white',
	success: /*tw*/ 'bg-green-500 text-white dark:bg-green-400 dark:text-white',
	warning: /*tw*/ 'bg-yellow-500 text-white dark:bg-yellow-400 dark:text-white',
	danger: /*tw*/ 'bg-red-500 text-white dark:bg-red-400 dark:text-white',
	white: /*tw*/ 'bg-white text-black dark:bg-white dark:text-black',
	black: /*tw*/ 'bg-black text-white dark:bg-black dark:text-white',
} as const satisfies BoVariantStyleMap;

const BUTTON_SIZE_STYLE_MAP = {
	xs: /*tw*/ 'px-2 py-1 text-xs',
	sm: /*tw*/ 'px-2.5 py-1.5 text-sm',
	default: /*tw*/ 'px-3 py-2 text-sm',
	lg: /*tw*/ 'px-4 py-2 text-base',
	xl: /*tw*/ 'px-6 py-3 text-base',
} as const satisfies BoButtonSizeStyleMap;

export interface UseBoButton extends ComponentStyleComposable {}

export const useBoButton = (props: BoButtonProps): UseBoButton => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const classValues = computed<string>(() => {
		return merge(
			BUTTON_SIZE_STYLE_MAP[props.size || 'default'],
			BUTTON_VARIANT_STYLE_MAP[props.variant || 'primary'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			const { background, border, text } = props.customColor;

			return {
				color: text ? getValidOrFallbackColorFromStr(text) : undefined,
				borderColor: border ? getValidOrFallbackColorFromStr(border) : undefined,
				backgroundColor: background ? getValidOrFallbackColorFromStr(background) : undefined,
			};
		}

		return {};
	});

	return {
		classValues,
		styleValues,
	};
};
