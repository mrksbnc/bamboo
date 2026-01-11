import { computed, ShallowRef, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { BoLoadingSpinnerProps } from '../components/bo-loader';
import { useTailwind } from './use-tailwind';
import { useColor } from './use-color';
import { BoFontSize } from '../components/bo-text';

export interface UseBoLoadingSpinner extends ComponentStyleComposable {}

export const useBoLoadingSpinner = (props: BoLoadingSpinnerProps): UseBoLoadingSpinner => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const classValues = computed<string>(() => {
		return merge();
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
