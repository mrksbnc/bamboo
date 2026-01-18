import { computed, SetupContext, StyleValue } from 'vue';
import { BoTextProps } from '../definitions/bo-text';
import { mergeTwClasses } from '../utils/tailwind-utils';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { TEXT_MANIFEST } from '../manifests/text.manifest';

export interface UseBoText extends ComponentStyleComposable {}

export const useBoText = (props: BoTextProps): UseBoText => {
	const { getValidOrFallbackColorFromStr } = useColor();

	const cursor = computed<string>(() => {
		if (props.cursor) {
			return props.cursor as string;
		}

		if (props.clickable) {
			return TEXT_MANIFEST.styles.cursor.clickable;
		}

		return TEXT_MANIFEST.styles.cursor.default;
	});

	const lineClamp = computed<string>(() => {
		if (!props.lineClamp || props.lineClamp === 'none') {
			return TEXT_MANIFEST.styles.lineClamp.none;
		}

		if (typeof props.lineClamp === 'number') {
			return `${TEXT_MANIFEST.styles.lineClamp.template}${props.lineClamp}`;
		}

		if (typeof props.lineClamp === 'string') {
			if (props.lineClamp.startsWith('--')) {
				return `line-clamp-(${props.lineClamp})`;
			}

			return `line-clamp-[${props.lineClamp}]`;
		}

		return TEXT_MANIFEST.styles.lineClamp.none;
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			cursor.value,
			lineClamp.value,
			TEXT_MANIFEST.styles.base,
			TEXT_MANIFEST.styles.variant[props.variant || 'default'],
			TEXT_MANIFEST.styles.textAlign[props.textAlign || 'left'],
			TEXT_MANIFEST.styles.fontSize[props.fontSize || 'default'],
			TEXT_MANIFEST.styles.whiteSpace[props.whiteSpace || 'normal'],
			TEXT_MANIFEST.styles.fontFamily[props.fontFamily || 'inherit'],
			TEXT_MANIFEST.styles.fontWeight[props.fontWeight || 'regular'],
			TEXT_MANIFEST.styles.textTransform[props.textTransform || 'none'],
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

	function validateComponentOnMount(slots: SetupContext['slots'] = {}): void {
		if (!slots['default'] && props.value) {
			throw new Error('[ERROR]: bo-text component requires either children or value prop');
		}
	}

	return {
		classValues,
		styleValues,
		validateComponentOnMount,
	};
};
