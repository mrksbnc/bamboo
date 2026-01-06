import { computed, ShallowRef, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import {
	BoLoaderSizeStyleMap,
	BoLoaderTextPositionStyleMap,
	BoLoaderVariantStyleMap,
	BoLoadingSpinnerProps,
} from '../components/bo-loader';
import { useTailwind } from './use-tailwind';
import { useColor } from './use-color';
import { BoFontSize } from '../components/bo-text';

/**
 * In this implementation, the `classValues` property contains the
 * classes for the spinner container.
 *
 * Style values will be applied to the `spinner` though as this property
 * is going to contain the custom color for the spinner.
 *
 */
export interface UseBoLoadingSpinner extends ComponentStyleComposable {
	fontSize: ShallowRef<BoFontSize>;
	spinnerClasses: ShallowRef<string>;
}

/**
 * Base classes for the SVG spinner element
 * Uses animate-spin for rotation and text-gray-300 for the track color
 */
const LOADING_SPINNER_BASE_CLASSES = /*tw*/ 'animate-spin';

/**
 * NOTE: The spinner sizes are aligned with the `BoFontSize`
 * type and so with the `bo-text` component size variants
 * as well.
 */
const LOADING_SPINNER_SIZE_CLASSES = {
	xs: /*tw*/ 'w-3 h-3',
	sm: /*tw*/ 'w-3.5 h-3.5',
	md: /*tw*/ 'w-4 h-4',
	lg: /*tw*/ 'w-4.5 h-4.5',
	xl: /*tw*/ 'w-5 h-5',
} as const satisfies BoLoaderSizeStyleMap;

/**
 * Variant classes for the animated spinner path (the arc that spins)
 */
const LOADING_SPINNER_VARIANT_CLASSES = {
	primary: /*tw*/ 'text-blue-600',
	secondary: /*tw*/ 'text-gray-600',
	success: /*tw*/ 'text-green-600',
	warning: /*tw*/ 'text-yellow-600',
	danger: /*tw*/ 'text-red-600',
	black: /*tw*/ 'text-black',
	white: /*tw*/ 'text-white',
	current: /*tw*/ 'text-current',
} as const satisfies BoLoaderVariantStyleMap;

const LOADING_SPINNER_TEXT_POSITION_CLASSES = {
	top: /*tw*/ 'flex-col',
	bottom: /*tw*/ 'flex-col-reverse',
	before: /*tw*/ 'flex-row-reverse',
	after: /*tw*/ 'flex-row',
} as const satisfies BoLoaderTextPositionStyleMap;

export const useBoLoadingSpinner = (props: BoLoadingSpinnerProps): UseBoLoadingSpinner => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const fontSize = computed<BoFontSize>(() => {
		if (props.size === 'xs') {
			return 'xs';
		}
		if (props.size === 'sm') {
			return 'sm';
		}
		if (props.size === 'lg' || props.size === 'xl') {
			return 'lg';
		}
		return 'default';
	});

	const spinnerContainerClasses = computed<string>(() => {
		return merge(
			/*tw*/ 'inline-flex items-center gap-2',
			LOADING_SPINNER_VARIANT_CLASSES[props.variant || 'primary'],
			LOADING_SPINNER_TEXT_POSITION_CLASSES[props.textPosition || 'after'],
		);
	});

	const spinnerClasses = computed<string>(() => {
		return merge(LOADING_SPINNER_BASE_CLASSES, LOADING_SPINNER_SIZE_CLASSES[props.size || 'md']);
	});

	const classValues = computed<string>(() => {
		return spinnerContainerClasses.value;
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
		fontSize,
		spinnerClasses,
	};
};
