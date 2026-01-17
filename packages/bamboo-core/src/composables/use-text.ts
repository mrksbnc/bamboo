import { computed, ShallowRef, StyleValue } from 'vue';
import { BoTextProps } from '../components/bo-text';
import { useTailwind } from './use-tailwind';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { TEXT_MANIFEST } from '../manifests/text.manifest';

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
			return TEXT_MANIFEST.cursor.clickable;
		}

		return TEXT_MANIFEST.cursor.default;
	});

	const ariaLabel = computed<string>(() => {
		return props.ariaLabel || props.value || '';
	});

	const role = computed<string>(() => {
		return props.role || 'text';
	});

	const lineClamp = computed<string>(() => {
		if (!props.lineClamp || props.lineClamp === 'none') {
			return TEXT_MANIFEST.lineClamp.none;
		}

		if (typeof props.lineClamp === 'number') {
			return `${TEXT_MANIFEST.lineClamp.template}${props.lineClamp}`;
		}

		if (typeof props.lineClamp === 'string') {
			if (props.lineClamp.startsWith('--')) {
				return `line-clamp-(${props.lineClamp})`;
			}

			return `line-clamp-[${props.lineClamp}]`;
		}

		return TEXT_MANIFEST.lineClamp.none;
	});

	const classValues = computed<string>(() => {
		const textAlign = props.textAlign || 'left';
		const fontSize = props.fontSize || 'default';
		const variant = props.variant || 'default';
		const fontFamily = props.fontFamily || 'inherit';
		const fontWeight = props.fontWeight || 'regular';
		const whiteSpace = props.whiteSpace || 'normal';
		const textTransform = props.textTransform || 'none';

		return merge(
			cursor.value,
			lineClamp.value,
			TEXT_MANIFEST.base,
			TEXT_MANIFEST.textAlign[textAlign],
			TEXT_MANIFEST.fontSize[fontSize],
			TEXT_MANIFEST.variant[variant],
			TEXT_MANIFEST.fontFamily[fontFamily],
			TEXT_MANIFEST.fontWeight[fontWeight],
			TEXT_MANIFEST.whiteSpace[whiteSpace],
			TEXT_MANIFEST.textTransform[textTransform],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor && typeof props.customColor === 'string') {
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
