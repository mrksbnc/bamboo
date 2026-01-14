import { computed, ShallowRef, StyleValue } from 'vue';
import {
	BoBadgeProps,
	BoBadgeSize,
	BoBadgeShape,
	BoBadgeVariant,
	BoBadgeType,
} from '../components/bo-badge';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoFontSize } from '../components/bo-text';
import { BoIconSize } from '../components/bo-icon';
import { Icon } from '../components/bo-icon-registry';

type BoBadgeSizeStyleMap = Record<BoBadgeSize, string>;
type BoBadgeShapeStyleMap = Record<BoBadgeShape, string>;
type BoBadgeVariantStyleMap = Record<BoBadgeVariant, string>;
type BoBadgeTypeVariantStyleMap = Record<BoBadgeType, BoBadgeVariantStyleMap>;

export interface UseBoBadge extends ComponentStyleComposable {
	badgeFontSize: ShallowRef<BoFontSize>;
	iconSize: ShallowRef<BoIconSize>;
	isIconOnly: ShallowRef<boolean>;
	isCircle: ShallowRef<boolean>;
	renderLabel: ShallowRef<boolean>;
	prefixOrIconOnlySrc: ShallowRef<Icon>;
	prefixIconContainerClassValues: ShallowRef<string>;
	suffixIconContainerClassValues: ShallowRef<string>;
}

const BO_BADGE_CONTAINER_BASE_CLASSES =
	/*tw*/ 'bo-badge inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 shadow-sm cursor-default';

const BO_BADGE_SHAPE_STYLE: BoBadgeShapeStyleMap = {
	default: /*tw*/ 'rounded-md',
	circle: /*tw*/ 'rounded-full',
	pill: /*tw*/ 'rounded-full',
	flat: /*tw*/ 'rounded-none',
} as const;

const BO_BADGE_SIZE_STYLE: BoBadgeSizeStyleMap = {
	xs: /*tw*/ 'px-1 py-0',
	sm: /*tw*/ 'px-1.5 py-0.5',
	default: /*tw*/ 'px-2 py-0.75',
	lg: /*tw*/ 'px-2.5 py-1',
	xl: /*tw*/ 'px-3 py-1.5',
} as const;

const BO_BADGE_CIRCLE_SIZE_STYLE: BoBadgeSizeStyleMap = {
	xs: /*tw*/ 'p-0',
	sm: /*tw*/ 'p-0.5',
	default: /*tw*/ 'p-0.75',
	lg: /*tw*/ 'p-1.25',
	xl: /*tw*/ 'p-2',
} as const;

const BO_BADGE_DEFAULT_VARIANT_STYLE: BoBadgeVariantStyleMap = {
	primary: /*tw*/ 'bg-blue-600 text-white border border-blue-700 dark:bg-blue-700 dark:text-white',
	secondary:
		/*tw*/ 'bg-neutral-600 text-white border border-neutral-700 dark:bg-neutral-700 dark:text-white',
	danger: /*tw*/ 'bg-red-600 text-white border border-red-700 dark:bg-red-700 dark:text-white',
	warning:
		/*tw*/ 'bg-yellow-600 text-white border border-yellow-700 dark:bg-yellow-600 dark:text-white',
	success:
		/*tw*/ 'bg-green-600 text-white border border-green-700 dark:bg-green-700 dark:text-white',
	light:
		/*tw*/ 'bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-200 dark:border-neutral-300 dark:text-neutral-800',
	dark: /*tw*/ 'bg-neutral-800 text-white border border-neutral-900 dark:bg-black dark:text-white',
} as const;

const BO_BADGE_OUTLINE_VARIANT_STYLE: BoBadgeVariantStyleMap = {
	primary:
		/*tw*/ 'bg-transparent border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400',
	secondary:
		/*tw*/ 'bg-transparent border border-neutral-600 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400',
	danger:
		/*tw*/ 'bg-transparent border border-red-600 text-red-600 dark:border-red-500 dark:text-red-400',
	warning:
		/*tw*/ 'bg-transparent border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-400',
	success:
		/*tw*/ 'bg-transparent border border-green-600 text-green-600 dark:border-green-500 dark:text-green-400',
	light:
		/*tw*/ 'bg-transparent border border-neutral-400 text-neutral-400 dark:border-neutral-400 dark:text-neutral-300',
	dark: /*tw*/ 'bg-transparent border border-black text-black dark:border-white dark:text-white',
} as const;

const BO_BADGE_TYPE_VARIANT_STYLE: BoBadgeTypeVariantStyleMap = {
	default: BO_BADGE_DEFAULT_VARIANT_STYLE,
	outline: BO_BADGE_OUTLINE_VARIANT_STYLE,
} as const;

const BO_BADGE_FONT_SIZE: Record<BoBadgeSize, BoFontSize> = {
	xs: 'xs',
	sm: 'xs',
	default: 'xs',
	lg: 'default',
	xl: 'lg',
} as const;

const BO_BADGE_ICON_SIZE: Record<BoBadgeSize, BoIconSize> = {
	xs: 'sm',
	sm: 'sm',
	default: 'default',
	lg: 'lg',
	xl: 'lg',
} as const;

const isEmptyStr = (str?: string): boolean => {
	return str === undefined || str === null || str.trim() === '';
};

export const useBoBadge = (props: BoBadgeProps): UseBoBadge => {
	const { merge } = useTailwind();

	const isIconOnly = computed<boolean>(() => {
		const hasIcon =
			(props.icon?.prefix && props.icon.prefix !== 'none') ||
			(props.icon?.suffix && props.icon.suffix !== 'none');
		return (hasIcon ?? false) && isEmptyStr(props.label);
	});

	const prefixOrIconOnlySrc = computed<Icon>(() => {
		if (isIconOnly.value) {
			return props.icon?.prefix ?? props.icon?.suffix ?? 'none';
		}
		return props.icon?.prefix ?? 'none';
	});

	const isCircle = computed<boolean>(() => {
		return props.shape === 'circle' && isIconOnly.value;
	});

	const renderLabel = computed<boolean>(() => {
		return !isEmptyStr(props.label) && !isIconOnly.value;
	});

	const badgeFontSize = computed<BoFontSize>(() => {
		return BO_BADGE_FONT_SIZE[props.size || 'default'];
	});

	const iconSize = computed<BoIconSize>(() => {
		return BO_BADGE_ICON_SIZE[props.size || 'default'];
	});

	const sizeClasses = computed<string>(() => {
		if (props.shape === 'circle') {
			return BO_BADGE_CIRCLE_SIZE_STYLE[props.size || 'default'];
		}
		return BO_BADGE_SIZE_STYLE[props.size || 'default'];
	});

	const prefixIconContainerClassValues = computed<string>(() => {
		return merge('inline-flex');
	});

	const suffixIconContainerClassValues = computed<string>(() => {
		return merge('inline-flex');
	});

	const classValues = computed<string>(() => {
		const type = props.type || 'default';
		const variant = props.variant || 'primary';
		const shape = props.shape || 'default';

		return merge(
			BO_BADGE_CONTAINER_BASE_CLASSES,
			sizeClasses.value,
			BO_BADGE_SHAPE_STYLE[shape],
			BO_BADGE_TYPE_VARIANT_STYLE[type][variant],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

	return {
		badgeFontSize,
		iconSize,
		isIconOnly,
		isCircle,
		renderLabel,
		prefixOrIconOnlySrc,
		prefixIconContainerClassValues,
		suffixIconContainerClassValues,
		classValues,
		styleValues,
	};
};
