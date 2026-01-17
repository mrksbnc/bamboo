import { computed, ShallowRef, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { BoLoadingSpinnerProps } from '../components/bo-loader';
import { useTailwind } from './use-tailwind';
import { useColor } from './use-color';
import { BoFontSize } from '../components/bo-text';
import { LOADING_SPINNER_MANIFEST } from '../manifests/loading-spinner.manifest';

export interface UseBoLoadingSpinner extends ComponentStyleComposable {
	spinnerLabelFontSize: ShallowRef<BoFontSize>;
	containerClassValues: ShallowRef<string>;
	textClassValues: ShallowRef<string>;
}

export const useBoLoadingSpinner = (props: BoLoadingSpinnerProps): UseBoLoadingSpinner => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const spinnerLabelFontSize = computed<BoFontSize>(() => {
		return LOADING_SPINNER_MANIFEST.labelFontSize[props.size || 'default'];
	});

	const containerClassValues = computed<string>(() => {
		return merge(
			LOADING_SPINNER_MANIFEST.container,
			LOADING_SPINNER_MANIFEST.size[props.size || 'default'],
			LOADING_SPINNER_MANIFEST.variant[props.variant || 'primary'],
			LOADING_SPINNER_MANIFEST.textPosition[props.textPosition || 'after'],
		);
	});

	const textClassValues = computed<string>(() => {
		return LOADING_SPINNER_MANIFEST.text;
	});

	const classValues = computed<string>(() => {
		return merge(LOADING_SPINNER_MANIFEST.base);
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
		spinnerLabelFontSize,
		containerClassValues,
		textClassValues,
		classValues,
		styleValues,
	};
};
