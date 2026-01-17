import { computed, ShallowRef, StyleValue } from 'vue';
import { BoPulseLoaderProps } from '../definitions/bo-loader';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { useTailwind } from './use-tailwind';
import { BoFontSize } from '../definitions/bo-text';
import { LOADING_PULSE_MANIFEST } from '../manifests/loading-pulse.manifest';

export interface UseBoLoadingPulse extends ComponentStyleComposable {
	pulseLabelFontSize: ShallowRef<BoFontSize>;
	containerClassValues: ShallowRef<string>;
	outerPulseContainerClassValues: ShallowRef<string>;
	outerPulseClassValues: ShallowRef<string>;
	innerPulseClassValues: ShallowRef<string>;
}

export const useBoLoadingPulse = (props: BoPulseLoaderProps): UseBoLoadingPulse => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const pulseLabelFontSize = computed<BoFontSize>(() => {
		return LOADING_PULSE_MANIFEST.styles.labelFontSize[props.size || 'default'];
	});

	const containerClassValues = computed<string>(() => {
		return merge(
			LOADING_PULSE_MANIFEST.styles.container,
			LOADING_PULSE_MANIFEST.styles.textPosition[props.textPosition || 'after'],
		);
	});

	const outerPulseContainerClassValues = computed<string>(() => {
		return merge(
			LOADING_PULSE_MANIFEST.styles.base,
			LOADING_PULSE_MANIFEST.styles.size[props.size || 'default'],
		);
	});

	const outerPulseClassValues = computed<string>(() => {
		if (props.customColor) {
			return LOADING_PULSE_MANIFEST.styles.dot;
		}
		return merge(
			LOADING_PULSE_MANIFEST.styles.dot,
			LOADING_PULSE_MANIFEST.styles.variant[props.variant || 'primary'],
		);
	});

	const innerPulseClassValues = computed<string>(() => {
		if (props.customColor) {
			return merge(
				LOADING_PULSE_MANIFEST.styles.dot,
				LOADING_PULSE_MANIFEST.styles.size[props.size || 'default'],
			);
		}
		return merge(
			LOADING_PULSE_MANIFEST.styles.dot,
			LOADING_PULSE_MANIFEST.styles.size[props.size || 'default'],
			LOADING_PULSE_MANIFEST.styles.variant[props.variant || 'primary'],
		);
	});

	const classValues = computed<string>(() => {
		return innerPulseClassValues.value;
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				backgroundColor: getValidOrFallbackColorFromStr(props.customColor),
			};
		}
		return {};
	});

	return {
		pulseLabelFontSize,
		containerClassValues,
		outerPulseContainerClassValues,
		outerPulseClassValues,
		innerPulseClassValues,
		classValues,
		styleValues,
	};
};
