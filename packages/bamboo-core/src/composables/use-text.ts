import { computed, ShallowRef, StyleValue } from 'vue';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextProps,
	BoTextTransform,
	BoTextVariant,
	BoTextWhiteSpace,
} from '../components/bo-text';
import { useTailwind } from './use-tailwind';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';

type BoFontSizeStyleMap = Record<BoFontSize, string>;
type BoTextAlignStyleMap = Record<BoTextAlign, string>;
type BoFontFamilyStyleMap = Record<BoFontFamily, string>;
type BoTextWeightStyleMap = Record<BoFontWeight, string>;
type BoTextVariantStyleMap = Record<BoTextVariant, string>;
type BoTextTransformStyleMap = Record<BoTextTransform, string>;
type BoTextWhiteSpaceStyleMap = Record<BoTextWhiteSpace, string>;

const FONT_FAMILY_STYLE_MAP = {
	inherit: /*tw*/ 'font-inherit',
	sans: /*tw*/ 'font-sans',
	mono: /*tw*/ 'font-mono',
	serif: /*tw*/ 'font-serif',
} as const satisfies BoFontFamilyStyleMap;

const FONT_SIZE_STYLE_MAP = {
	xs: /*tw*/ 'text-xs',
	sm: /*tw*/ 'text-sm',
	default: /*tw*/ 'text-base',
	lg: /*tw*/ 'text-lg',
	xl: /*tw*/ 'text-xl',
	'2xl': /*tw*/ 'text-2xl',
	'3xl': /*tw*/ 'text-3xl',
	'4xl': /*tw*/ 'text-4xl',
	'5xl': /*tw*/ 'text-5xl',
	'6xl': /*tw*/ 'text-6xl',
	'7xl': /*tw*/ 'text-7xl',
	'8xl': /*tw*/ 'text-8xl',
	'9xl': /*tw*/ 'text-9xl',
} as const satisfies BoFontSizeStyleMap;

const TEXT_ALIGN_STYLE_MAP = {
	left: /*tw*/ 'text-left',
	center: /*tw*/ 'text-center',
	right: /*tw*/ 'text-right',
	justify: /*tw*/ 'text-justify',
} as const satisfies BoTextAlignStyleMap;

const FONT_WEIGHT_STYLE_MAP = {
	thin: /*tw*/ 'font-thin',
	'extra-light': /*tw*/ 'font-extralight',
	light: /*tw*/ 'font-light',
	regular: /*tw*/ 'font-normal',
	medium: /*tw*/ 'font-medium',
	semibold: /*tw*/ 'font-semibold',
	bold: /*tw*/ 'font-bold',
	'extra-bold': /*tw*/ 'font-extrabold',
	black: /*tw*/ 'font-black',
} as const satisfies BoTextWeightStyleMap;

const TEXT_VARIANT_STYLE_MAP = {
	default: /*tw*/ 'text-neutral-900 dark:text-neutral-200',
	inherit: /*tw*/ 'text-inherit',
	currentColor: /*tw*/ 'text-current',
	primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
	secondary: /*tw*/ 'text-neutral-600 dark:text-neutral-500',
	disabled: /*tw*/ 'text-neutral-400 dark:text-neutral-500',
	success: /*tw*/ 'text-green-600 dark:text-green-500',
	warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
	danger: /*tw*/ 'text-red-600 dark:text-red-500',
	white: /*tw*/ 'text-white',
	black: /*tw*/ 'text-black',
} as const satisfies BoTextVariantStyleMap;

const TEXT_TRANSFORM_STYLE_MAP = {
	none: /*tw*/ 'text-none',
	capitalize: /*tw*/ 'text-capitalize',
	uppercase: /*tw*/ 'text-uppercase',
	lowercase: /*tw*/ 'text-lowercase',
} as const satisfies BoTextTransformStyleMap;

const TEXT_WHITESPACE_STYLE_MAP = {
	normal: /*tw*/ 'whitespace-normal',
	nowrap: /*tw*/ 'whitespace-nowrap',
	pre: /*tw*/ 'whitespace-pre',
	'pre-line': /*tw*/ 'whitespace-pre-line',
	'pre-wrap': /*tw*/ 'whitespace-pre-wrap',
	'break-spaces': /*tw*/ 'whitespace-break-spaces',
} as const satisfies BoTextWhiteSpaceStyleMap;

const TEXT_CLASS_VALUES: string = /*tw*/ 'box-border';

export interface UseBoText extends ComponentStyleComposable {
	role: ShallowRef<string>;
	ariaLabel: ShallowRef<string>;
}

export const useBoText = (props: BoTextProps): UseBoText => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const cursor = computed<string>(() => {
		if (props.cursor) {
			return props.cursor as string;
		}

		if (props.clickable) {
			return /*tw*/ 'cursor-pointer';
		}

		return /*tw*/ 'cursor-default';
	});

	const ariaLabel = computed<string>(() => {
		return props.ariaLabel || props.value;
	});

	const role = computed<string>(() => {
		return props.role ?? 'text';
	});

	const lineClamp = computed<string>(() => {
		if (typeof props.lineClamp === 'number') {
			return /*tw*/ `line-clamp-${props.lineClamp}`;
		}

		if (typeof props.lineClamp === 'string') {
			if (props.lineClamp.startsWith('--')) {
				return /*tw*/ `line-clamp-(${props.lineClamp})`;
			}

			return /*tw*/ `line-clamp-[${props.lineClamp}]`;
		}

		return /*tw*/ 'line-clamp-none';
	});

	const classValues = computed<string>(() => {
		return merge(
			cursor.value,
			lineClamp.value,
			TEXT_CLASS_VALUES,
			TEXT_ALIGN_STYLE_MAP[props.textAlign || 'left'],
			FONT_SIZE_STYLE_MAP[props.fontSize || 'default'],
			TEXT_VARIANT_STYLE_MAP[props.variant || 'default'],
			FONT_FAMILY_STYLE_MAP[props.fontFamily || 'inherit'],
			FONT_WEIGHT_STYLE_MAP[props.fontWeight || 'regular'],
			TEXT_WHITESPACE_STYLE_MAP[props.whiteSpace || 'normal'],
			TEXT_TRANSFORM_STYLE_MAP[props.textTransform || 'none'],
		);
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
		ariaLabel,
		role,
		classValues,
		styleValues,
	};
};
