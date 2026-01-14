import { computed, ShallowRef, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import {
	BoLoaderSize,
	BoLoaderTextPosition,
	BoLoaderVariant,
	BoLoadingSpinnerProps,
} from '../components/bo-loader';
import { useTailwind } from './use-tailwind';
import { useColor } from './use-color';
import { BoFontSize } from '../components/bo-text';

type BoLoadingSpinnerSizeStyleMap = Record<BoLoaderSize, string>;
type BoLoadingSpinnerVariantStyleMap = Record<BoLoaderVariant, string>;
type BoLoadingSpinnerTextPositionStyleMap = Record<BoLoaderTextPosition, string>;

const LOADING_SPINNER_SIZE_STYLE_VALUES = {
	xs: /*tw*/ 'size-3',
	sm: /*tw*/ 'size-3.5',
	default: /*tw*/ 'size-4',
	lg: /*tw*/ 'size-5',
	xl: /*tw*/ 'size-6',
} as const satisfies BoLoadingSpinnerSizeStyleMap;

const LOADING_SPINNER_VARIANT_STYLE_VALUES = {
	primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
	secondary: /*tw*/ 'text-neutral-600 dark:text-neutral-500',
	success: /*tw*/ 'text-green-600 dark:text-green-500',
	warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
	danger: /*tw*/ 'text-red-600 dark:text-red-500',
	white: /*tw*/ 'text-white',
	black: /*tw*/ 'text-black',
	current: /*tw*/ 'text-current',
} as const satisfies BoLoadingSpinnerVariantStyleMap;

const LOADING_SPINNER_TEXT_POSITION_STYLE_VALUES = {
	top: /*tw*/ 'flex-col-reverse',
	bottom: /*tw*/ 'flex-col',
	before: /*tw*/ 'flex-row-reverse',
	after: /*tw*/ 'flex-row',
} as const satisfies BoLoadingSpinnerTextPositionStyleMap;

const CONTAINER_CLASS_VALUES: string =
	/*tw*/ 'bo-loading-spinner__container flex content-center items-center justify-center gap-2';

const SPINNER_CLASS_VALUES: string =
	/*tw*/ 'bo-loading-spinner__animation inline-flex animate-spin rounded-full border-2 border-current border-t-transparent';

export interface UseBoLoadingSpinner extends ComponentStyleComposable {
	spinnerLabelFontSize: ShallowRef<BoFontSize>;
	containerClassValues: ShallowRef<string>;
}

export const useBoLoadingSpinner = (props: BoLoadingSpinnerProps): UseBoLoadingSpinner => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const spinnerLabelFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case 'xs':
				return 'xs';
			case 'lg':
			case 'xl':
				return 'default';
			case 'sm':
			case 'default':
			default:
				return 'sm';
		}
	});

	const containerClassValues = computed<string>(() => {
		return merge(
			CONTAINER_CLASS_VALUES,
			LOADING_SPINNER_SIZE_STYLE_VALUES[props.size || 'default'],
			LOADING_SPINNER_VARIANT_STYLE_VALUES[props.variant || 'primary'],
			LOADING_SPINNER_TEXT_POSITION_STYLE_VALUES[props.textPosition || 'after'],
		);
	});

	const classValues = computed<string>(() => {
		return merge(SPINNER_CLASS_VALUES);
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
		classValues,
		styleValues,
	};
};
