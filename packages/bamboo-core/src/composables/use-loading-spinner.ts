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
	spinnerStyle: ShallowRef<StyleValue | undefined>;
}

const LOADING_SPINNER_BASE_CLASSES =
	/*tw*/ 'inline-block rounded-full border-2 border-transparent animate-spin';

/**
 * NOTE: The spinner sizes are aligned with the `BoFontSize`
 * type and so with the `bo-text` component size variants
 * as well.
 *
 * - xs - 0.75rem | 12px
 * - sm - 0.875rem | 14px
 * - md - 1rem | 16px
 * - lg - 1.125rem | 18px
 * - xl - 1.25rem | 20px
 */
const LOADING_SPINNER_SIZE_CLASSES = {
	xs: /*tw*/ 'size-3',
	sm: /*tw*/ 'size-3.5',
	md: /*tw*/ 'size-4',
	lg: /*tw*/ 'size-4.5',
	xl: /*tw*/ 'size-5',
} as const satisfies BoLoaderSizeStyleMap;

const LOADING_SPINNER_VARIANT_CLASSES = {
	primary: /*tw*/ 'border-b-blue-600',
	secondary: /*tw*/ 'border-b-gray-600',
	success: /*tw*/ 'border-b-green-600',
	warning: /*tw*/ 'border-b-yellow-600',
	danger: /*tw*/ 'border-b-red-600',
	black: /*tw*/ 'border-b-black',
	white: /*tw*/ 'border-b-white',
	current: /*tw*/ 'border-b-current',
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

	const textPositionClasses = computed<string>(() => {
		return LOADING_SPINNER_TEXT_POSITION_CLASSES[props.textPosition || 'after'];
	});

	const loadingSpinnerVariantClasses = computed<string>(() => {
		return LOADING_SPINNER_VARIANT_CLASSES[props.variant || 'primary'];
	});

	const loadingSpinnerSizeClass = computed<string>(() => {
		return LOADING_SPINNER_SIZE_CLASSES[props.size || 'md'];
	});

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
		return merge(LOADING_SPINNER_BASE_CLASSES, textPositionClasses.value);
	});

	const spinnerClasses = computed<string>(() => {
		return merge(
			LOADING_SPINNER_BASE_CLASSES,
			loadingSpinnerSizeClass.value,
			loadingSpinnerVariantClasses.value,
		);
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

	const spinnerStyle = computed<StyleValue | undefined>(() => {
		if (props.customColor) {
			return {
				'border-bottom-color': getValidOrFallbackColorFromStr(props.customColor),
			};
		}
	});

	return {
		classValues,
		styleValues,
		fontSize,
		spinnerClasses,
		spinnerStyle,
	};
};
