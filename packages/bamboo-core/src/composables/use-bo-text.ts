import { computed, CSSProperties, ShallowRef, StyleValue } from 'vue';
import { BO_FONT_SIZE_STYLE, BO_FONT_WEIGHT_STYLE, BoTextProps } from '../components/bo-text';
import { useTailwind } from './use-tailwind';
import { ComponentStyleComposable } from './types';
import { ColorService } from '../services/color-service';

export interface UseBoText extends ComponentStyleComposable {
	formattedValue: ShallowRef<string>;
	ariaLabel: ShallowRef<string>;
	role: ShallowRef<string>;
}

export const useBoText = (props: BoTextProps): UseBoText => {
	const { merge } = useTailwind();

	const fontSize = computed<string>(() => {
		return BO_FONT_SIZE_STYLE[props.fontSize ?? 'default'];
	});

	const fontWeight = computed<string>(() => {
		return BO_FONT_WEIGHT_STYLE[props.fontWeight ?? 'regular'];
	});

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
				color: ColorService.instance.getValidOrFallbackColorFromStr(props.customColor),
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
		return merge(fontSize.value, fontWeight.value, cursor.value);
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
