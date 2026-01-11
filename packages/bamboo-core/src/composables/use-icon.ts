import { computed, HTMLAttributes, ShallowRef, StyleValue } from 'vue';
import { BoIconProps, BoIconSize, BoIconVariant } from '../components/bo-icon';
import { ComponentStyleComposable } from './types';
import { useColor } from './use-color';
import { useTailwind } from './use-tailwind';

type BoIconSizeStyleMap = Record<BoIconSize, string>;
type BoIconVariantStyleMap = Record<BoIconVariant, string>;

const BO_ICON_SIZE_STYLE: BoIconSizeStyleMap = {
	xs: /*tw*/ 'size-3',
	sm: /*tw*/ 'size-3.5',
	default: /*tw*/ 'size-4',
	lg: /*tw*/ 'size-5',
	xl: /*tw*/ 'size-6',
};

const BO_ICON_VARIANT_STYLE: BoIconVariantStyleMap = {
	current: /*tw*/ 'text-current',
	inherit: /*tw*/ 'text-inherit',
	primary: /*tw*/ 'text-blue-500 dark:text-blue-400',
	secondary: /*tw*/ 'text-neutral-500 dark:text-neutral-400',
	success: /*tw*/ 'text-green-500 dark:text-green-400',
	warning: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
	danger: /*tw*/ 'text-red-500 dark:text-red-400',
	white: /*tw*/ 'text-white',
	black: /*tw*/ 'text-black',
};

const DEFAULT_BO_ICON_CLASS_VALUES: string = /*tw*/ 'inline-flex items-center justify-center';

export interface UseBoIcon extends ComponentStyleComposable {
	role: ShallowRef<HTMLAttributes['role']>;
}

export const useBoIcon = (props: BoIconProps): UseBoIcon => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const role = computed<HTMLAttributes['role']>(() => {
		return props.decorative ? 'presentation' : 'img';
	});

	const classValues = computed<string>(() => {
		return merge(
			DEFAULT_BO_ICON_CLASS_VALUES,
			props.cursor ?? 'cursor-auto',
			BO_ICON_VARIANT_STYLE[props.variant || 'current'],
			typeof props.size === 'number'
				? `size-[${props.size}px]`
				: BO_ICON_SIZE_STYLE[props.size || 'default'],
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
		role,
		classValues,
		styleValues,
	};
};
