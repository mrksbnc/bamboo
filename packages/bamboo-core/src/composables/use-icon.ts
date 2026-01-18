import { computed, HTMLAttributes, ShallowRef, StyleValue } from 'vue';
import { BoIconProps } from '../definitions/bo-icon';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { mergeTwClasses } from '../utils/tailwind-utils';
import { ICON_MANIFEST } from '../manifests/icon.manifest';
import { BO_ICON_REGISTRY } from '../components/bo-icon-registry';

export interface UseBoIcon extends ComponentStyleComposable {
	component: ShallowRef<string>;
	role: ShallowRef<HTMLAttributes['role']>;
}

export const useBoIcon = (props: BoIconProps): UseBoIcon => {
	const { getValidOrFallbackColorFromStr } = useColor();

	const component = computed<string>(() => {
		return BO_ICON_REGISTRY[props.icon];
	});

	const role = computed<HTMLAttributes['role']>(() => {
		return props.decorative ? 'presentation' : 'img';
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			ICON_MANIFEST.styles.base,
			ICON_MANIFEST.styles.variant[props.variant || 'current'],
			props.cursor ? props.cursor : ICON_MANIFEST.styles.cursor.default,
			typeof props.size === 'number'
				? `size-[${props.size}px]`
				: ICON_MANIFEST.styles.size[props.size || 'default'],
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
		component,
		role,
		classValues,
		styleValues,
	};
};
