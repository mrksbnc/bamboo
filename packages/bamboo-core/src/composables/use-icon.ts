import { computed, StyleValue } from 'vue';
import { BoIconProps, type BoIconSizeStyleMap } from '../components/bo-icon';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { useTailwind } from './use-tailwind';

export interface UseBoIcon extends ComponentStyleComposable {}

export const BO_ICON_SIZE_MAP: BoIconSizeStyleMap = {
	xs: /*tw*/ 'size-xs',
	sm: /*tw*/ 'size-sm',
	md: /*tw*/ 'size-md',
	lg: /*tw*/ 'size-lg',
	xl: /*tw*/ 'size-xl',
};

export const useBoIcon = (props: BoIconProps): UseBoIcon => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const classValues = computed<string>(() => {
		return merge(BO_ICON_SIZE_MAP[props.size || 'md']);
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
