import { computed, ShallowRef, StyleValue } from 'vue';
import { BoLoadingSpinnerProps, BoFontSize } from '../definitions/index.js';
import { useColor, useTailwind, type ComponentStyleComposable } from './index.js';
import { LOADING_SPINNER_MANIFEST } from '../manifests/index.js';

export interface UseBoLoadingSpinner extends ComponentStyleComposable {
	spinnerLabelFontSize: ShallowRef<BoFontSize>;
	containerClassValues: ShallowRef<string>;
	textClassValues: ShallowRef<string>;
}

export const useBoLoadingSpinner = (props: BoLoadingSpinnerProps): UseBoLoadingSpinner => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const spinnerLabelFontSize = computed<BoFontSize>(() => {
		return LOADING_SPINNER_MANIFEST.styles.labelFontSize[props.size || 'default'];
	});

	const containerClassValues = computed<string>(() => {
		return merge(
			LOADING_SPINNER_MANIFEST.styles.container,
			LOADING_SPINNER_MANIFEST.styles.size[props.size || 'default'],
			LOADING_SPINNER_MANIFEST.styles.variant[props.variant || 'primary'],
			LOADING_SPINNER_MANIFEST.styles.textPosition[props.textPosition || 'after'],
		);
	});

	const textClassValues = computed<string>(() => {
		return LOADING_SPINNER_MANIFEST.styles.text;
	});

	const classValues = computed<string>(() => {
		return merge(LOADING_SPINNER_MANIFEST.styles.base);
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
