import { computed, CSSProperties, ShallowRef, StyleValue } from 'vue';
import {
	BoFontSizeStyle,
	BoTextProps,
	BoTextVariantStyle,
	BoTextWeightStyle,
} from '../components/bo-text';
import { useTailwind } from './use-tailwind';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';

export interface UseBoText extends ComponentStyleComposable {
	formattedValue: ShallowRef<string>;
	ariaLabel: ShallowRef<string>;
	role: ShallowRef<string>;
}

export const BO_TEXT_VARIANT_STYLE = {
	default: /*tw*/ 'text-neutral-800 dark:text-neutral-200',
	primary: /*tw*/ 'text-blue-600 dark:text-blue-400',
	secondary: /*tw*/ 'text-neutral-600 dark:text-neutral-400',
	disabled: /*tw*/ 'text-neutral-400 dark:text-neutral-600',
	success: /*tw*/ 'text-green-600 dark:text-green-400',
	warning: /*tw*/ 'text-yellow-600 dark:text-yellow-400',
	danger: /*tw*/ 'text-red-600 dark:text-red-400',
	white: /*tw*/ 'text-white',
	black: /*tw*/ 'text-black',
	inherit: /*tw*/ 'text-inherit',
	currentColor: /*tw*/ 'text-current',
} as const satisfies BoTextVariantStyle;

export const BO_FONT_SIZE_STYLE = {
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
} as const satisfies BoFontSizeStyle;

export const BO_FONT_WEIGHT_STYLE = {
	thin: /*tw*/ 'font-thin',
	'extra-light': /*tw*/ 'font-extralight',
	light: /*tw*/ 'font-light',
	regular: /*tw*/ 'font-normal',
	medium: /*tw*/ 'font-medium',
	semibold: /*tw*/ 'font-semibold',
	bold: /*tw*/ 'font-bold',
	'extra-bold': /*tw*/ 'font-extrabold',
	black: /*tw*/ 'font-black',
} as const satisfies BoTextWeightStyle;

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

	const textColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			return {
				color: getValidOrFallbackColorFromStr(props.customColor),
			};
		}

		return {};
	});

	const maxLines = computed<CSSProperties>(() => {
		if (typeof props.maxLines === 'number') {
			return {
				overflow: 'hidden',
				display: '-webkit-box',
				textOverflow: 'ellipsis',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: props.maxLines,
			};
		}

		return {};
	});

	const ariaLabel = computed<string>(() => {
		return props.ariaLabel || props.value;
	});

	const role = computed<string>(() => {
		return props.role ?? 'text';
	});

	const formattedValue = computed<string>(() => {
		switch (props.textTransform) {
			case 'capitalize':
				/**
				 * The \b anchor ensures that the first character of the word is matched, and the \w anchor ensures
				 * that the word boundary isn't crossed.
				 * \g is used to replace all occurrences of the matched characters not just the first occurrence.
				 */
				return props.value.replace(/\b\w/g, (char) => char.toUpperCase());
			case 'uppercase':
				return props.value.toUpperCase();
			case 'lowercase':
				return props.value.toLowerCase();
			case 'none':
			default:
				return props.value;
		}
	});

	const classValues = computed<string>(() => {
		return merge(
			cursor.value,
			BO_FONT_SIZE_STYLE[props.fontSize ?? 'default'],
			BO_FONT_WEIGHT_STYLE[props.fontWeight ?? 'regular'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		const style: StyleValue = {
			...textColor.value,
			...maxLines.value,
			margin: 0,
		};

		return style;
	});

	return {
		classValues,
		styleValues,
		formattedValue,
		ariaLabel,
		role,
	};
};
