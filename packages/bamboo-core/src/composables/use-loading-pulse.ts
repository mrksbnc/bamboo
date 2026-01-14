import { computed, ShallowRef, StyleValue } from 'vue';
import {
	BoLoaderSize,
	BoLoaderTextPosition,
	BoLoaderVariant,
	BoPulseLoaderProps,
} from '../components/bo-loader';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { useTailwind } from './use-tailwind';
import { BoFontSize } from '../components/bo-text';

export type BoPulseLoaderTextPositionStyleMap = Record<BoLoaderTextPosition, string>;
export type BoPulseLoaderSizeStyleMap = Record<BoLoaderSize, string>;
export type BoPulseLoaderVariantStyleMap = Record<BoLoaderVariant, string>;

const PULSE_LOADER_SIZE_STYLE_VALUES = {
	xs: /*tw*/ 'size-3',
	sm: /*tw*/ 'size-3.5',
	default: /*tw*/ 'size-4',
	lg: /*tw*/ 'size-5',
	xl: /*tw*/ 'size-6',
} as const satisfies BoPulseLoaderSizeStyleMap;

const PULSE_LOADER_VARIANT_STYLE_VALUES = {
	current: /*tw*/ 'bg-current',
	primary: /*tw*/ 'bg-blue-600 dark:bg-blue-500',
	secondary: /*tw*/ 'bg-gray-600 dark:bg-gray-400',
	success: /*tw*/ 'bg-green-600 dark:bg-green-500',
	warning: /*tw*/ 'bg-yellow-600 dark:bg-yellow-500',
	danger: /*tw*/ 'bg-red-600 dark:bg-red-500',
	white: /*tw*/ 'bg-white dark:bg-gray-300',
	black: /*tw*/ 'bg-black dark:bg-white',
} as const satisfies BoPulseLoaderVariantStyleMap;

const PULSE_LOADER_SHIFTED_VARIANT_STYLE_VALUES = {
	current: /*tw*/ 'bg-current',
	primary: /*tw*/ 'bg-blue-500 dark:bg-blue-400',
	secondary: /*tw*/ 'bg-gray-500 dark:bg-gray-300',
	success: /*tw*/ 'bg-green-500 dark:bg-green-400',
	warning: /*tw*/ 'bg-yellow-500 dark:bg-yellow-400',
	danger: /*tw*/ 'bg-red-500 dark:bg-red-400',
	white: /*tw*/ 'bg-white dark:bg-gray-300',
	black: /*tw*/ 'bg-black dark:bg-white',
} as const satisfies BoPulseLoaderVariantStyleMap;

const PULSE_LOADER_TEXT_POSITION_STYLE_VALUES = {
	top: /*tw*/ 'flex-col-reverse',
	bottom: /*tw*/ 'flex-col',
	before: /*tw*/ 'flex-row-reverse',
	after: /*tw*/ 'flex-row',
} as const satisfies BoPulseLoaderTextPositionStyleMap;

const ROOT_CONTAINER_CLASS_VALUES: string =
	/*tw*/ 'flex h-full w-full content-center items-center justify-center gap-2';

const PULSE_CONTAINER_CLASS_VALUES: string = /*tw*/ 'relative flex';

const PULSE_OUTER_CLASS_VALUES: string =
	/*tw*/ 'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75';

const PULSE_INNER_CLASS_VALUES: string = /*tw*/ 'relative inline-flex rounded-full';

export interface UseBoPulseLoader extends ComponentStyleComposable {
	pulseLabelFontSize: ShallowRef<BoFontSize>;
	containerClassValues: ShallowRef<string>;
	outerPulseContainerClassValues: ShallowRef<string>;
	outerPulseClassValues: ShallowRef<string>;
	innerPulseClassValues: ShallowRef<string>;
}

export const useBoPulseLoader = (props: BoPulseLoaderProps): UseBoPulseLoader => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const pulseLabelFontSize = computed<BoFontSize>(() => {
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
			ROOT_CONTAINER_CLASS_VALUES,
			PULSE_LOADER_TEXT_POSITION_STYLE_VALUES[props.textPosition || 'after'],
		);
	});

	const outerPulseContainerClassValues = computed<string>(() => {
		return merge(
			PULSE_CONTAINER_CLASS_VALUES,
			PULSE_LOADER_SIZE_STYLE_VALUES[props.size || 'default'],
		);
	});

	const outerPulseClassValues = computed<string>(() => {
		if (props.customColor) {
			return PULSE_OUTER_CLASS_VALUES;
		}
		return merge(
			PULSE_OUTER_CLASS_VALUES,
			PULSE_LOADER_VARIANT_STYLE_VALUES[props.variant || 'primary'],
		);
	});

	const innerPulseClassValues = computed<string>(() => {
		if (props.customColor) {
			return merge(
				PULSE_INNER_CLASS_VALUES,
				PULSE_LOADER_SIZE_STYLE_VALUES[props.size || 'default'],
			);
		}
		return merge(
			PULSE_INNER_CLASS_VALUES,
			PULSE_LOADER_SIZE_STYLE_VALUES[props.size || 'default'],
			PULSE_LOADER_SHIFTED_VARIANT_STYLE_VALUES[props.variant || 'primary'],
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
