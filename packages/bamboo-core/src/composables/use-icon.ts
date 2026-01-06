import { computed, StyleValue } from 'vue';
import { BoIconProps, BoIconVariant } from '../components/bo-icon';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { useTailwind } from './use-tailwind';

export interface UseBoIcon extends ComponentStyleComposable {}

export const BO_ICON_SIZE_STYLE = {
	xs: /*tw*/ 'size-3',
	sm: /*tw*/ 'size-3.5',
	md: /*tw*/ 'size-4',
	lg: /*tw*/ 'size-4.5',
	xl: /*tw*/ 'size-5',
} as const;

export const BO_ICON_VARIANT_STYLE: Record<BoIconVariant, string> = {
	default: /*tw*/ 'text-current',
	primary: /*tw*/ 'text-blue-500 dark:text-blue-400',
	secondary: /*tw*/ 'text-neutral-500 dark:text-neutral-400',
	success: /*tw*/ 'text-green-500 dark:text-green-400',
	warning: /*tw*/ 'text-orange-500 dark:text-orange-400',
	danger: /*tw*/ 'text-red-500 dark:text-red-400',
	white: /*tw*/ 'text-white',
	black: /*tw*/ 'text-black',
	current: /*tw*/ 'text-current',
	inherit: /*tw*/ 'text-inherit',
} as const;

export const useBoIcon = (props: BoIconProps): UseBoIcon => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const classValues = computed<string>(() => {
		const sizeClass = typeof props.size === 'number' ? '' : BO_ICON_SIZE_STYLE[props.size || 'md'];
		return merge(sizeClass, BO_ICON_VARIANT_STYLE[props.variant || 'current']);
	});

	const styleValues = computed<StyleValue>(() => {
		const style: StyleValue = {};

		if (props.customColor) {
			style.color = getValidOrFallbackColorFromStr(props.customColor);
		}

		if (typeof props.size === 'number') {
			style.width = `${props.size}px`;
			style.height = `${props.size}px`;
		}

		return style;
	});

	return {
		classValues,
		styleValues,
	};
};
