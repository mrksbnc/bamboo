import { computed, HTMLAttributes, ShallowRef, StyleValue } from 'vue';
import { BoIconProps } from '../components/bo-icon';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { useTailwind } from './use-tailwind';
import { ICON_MANIFEST } from '../manifests/icon.manifest';

export interface UseBoIcon extends ComponentStyleComposable {
	role: ShallowRef<HTMLAttributes['role']>;
}

export const useBoIcon = (props: BoIconProps): UseBoIcon => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const role = computed<HTMLAttributes['role']>(() => {
		return props.decorative ? 'presentation' : 'img';
	});

	const sizeClass = computed<string>(() => {
		if (typeof props.size === 'number') {
			return `size-[${props.size}px]`;
		}
		return ICON_MANIFEST.size[props.size || 'default'];
	});

	const variantClass = computed<string>(() => {
		return ICON_MANIFEST.variant[props.variant || 'current'];
	});

	const cursorClass = computed<string>(() => {
		if (props.cursor) {
			return props.cursor;
		}
		return ICON_MANIFEST.cursor.default;
	});

	const classValues = computed<string>(() => {
		return merge(ICON_MANIFEST.base, sizeClass.value, variantClass.value, cursorClass.value);
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
		role,
		classValues,
		styleValues,
	};
};
