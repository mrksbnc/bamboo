import { computed, ShallowRef, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { BoLoadingSpinnerProps } from '../components/bo-loader';
import { useTailwind } from './use-tailwind';
import { useColor } from './use-color';

export interface UseBoLoadingSpinner extends ComponentStyleComposable {
	containerClassValues: ShallowRef<string>;
}

export const useBoLoadingSpinner = (props: BoLoadingSpinnerProps): UseBoLoadingSpinner => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const containerClassValues = computed<string>(() => {
		return merge();
	});

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
		containerClassValues,
		classValues,
		styleValues,
	};
};
