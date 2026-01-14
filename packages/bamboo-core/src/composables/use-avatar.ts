import { computed, ShallowRef, StyleValue } from 'vue';
import {
	BoAvatarProps,
	BoAvatarSize,
	BoAvatarShape,
	BoAvatarVariant,
	BoAvatarIndicatorStatus,
	BoAvatarIndicatorPosition,
} from '../components/bo-avatar';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoFontSize } from '../components/bo-text';

type BoAvatarSizeStyleMap = Record<BoAvatarSize, string>;
type BoAvatarShapeStyleMap = Record<BoAvatarShape, string>;
type BoAvatarVariantStyleMap = Record<BoAvatarVariant, string>;
type BoAvatarIndicatorStatusStyleMap = Record<BoAvatarIndicatorStatus, string>;
type BoAvatarIndicatorPositionStyleMap = Record<BoAvatarIndicatorPosition, string>;

export interface UseBoAvatar extends ComponentStyleComposable {
	indicatorClassValues: ShallowRef<string>;
	labelFontSize: ShallowRef<BoFontSize>;
	label: ShallowRef<string>;
	showDefaultAvatar: ShallowRef<boolean>;
	textColorClass: ShallowRef<string>;
	defaultAvatarClassValues: ShallowRef<string>;
	initialsContainerClassValues: ShallowRef<string>;
	imageContainerClassValues: ShallowRef<string>;
}

const BO_AVATAR_CONTAINER_BASE_CLASSES = /*tw*/ 'bo-avatar relative inline-flex overflow-hidden';

const BO_AVATAR_SIZE_STYLE: BoAvatarSizeStyleMap = {
	xs: /*tw*/ 'w-6 h-6',
	sm: /*tw*/ 'w-8 h-8',
	default: /*tw*/ 'w-10 h-10',
	lg: /*tw*/ 'w-12 h-12',
	xl: /*tw*/ 'w-36 h-36',
} as const;

const BO_AVATAR_SHAPE_STYLE: BoAvatarShapeStyleMap = {
	circle: /*tw*/ 'rounded-full',
	rounded: /*tw*/ 'rounded-md',
	flat: /*tw*/ 'rounded-none',
	'outline-circle': /*tw*/ 'rounded-full border',
	'outline-rounded': /*tw*/ 'rounded-md border',
	'outline-flat': /*tw*/ 'rounded-none border',
} as const;

const BO_AVATAR_VARIANT_STYLE: BoAvatarVariantStyleMap = {
	primary: /*tw*/ 'bg-blue-500 dark:bg-blue-700 text-white',
	secondary: /*tw*/ 'bg-gray-400 dark:bg-gray-700 text-white',
	danger: /*tw*/ 'bg-red-500 dark:bg-red-700 text-white',
	warning: /*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
	success: /*tw*/ 'bg-green-600 dark:bg-green-700 text-white',
	dark: /*tw*/ 'bg-black dark:bg-black text-white',
} as const;

const BO_AVATAR_OUTLINE_VARIANT_STYLE: BoAvatarVariantStyleMap = {
	primary:
		/*tw*/ 'bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
	secondary:
		/*tw*/ 'bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
	danger: /*tw*/ 'bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
	warning:
		/*tw*/ 'bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
	success:
		/*tw*/ 'bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
	dark: /*tw*/ 'bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
} as const;

const BO_AVATAR_TEXT_COLOR_STYLE: BoAvatarVariantStyleMap = {
	primary: /*tw*/ 'text-white dark:text-white',
	secondary: /*tw*/ 'text-white dark:text-white',
	danger: /*tw*/ 'text-white dark:text-white',
	warning: /*tw*/ 'text-white dark:text-white',
	success: /*tw*/ 'text-white dark:text-white',
	dark: /*tw*/ 'text-white dark:text-white',
} as const;

const BO_AVATAR_OUTLINE_TEXT_COLOR_STYLE: BoAvatarVariantStyleMap = {
	primary: /*tw*/ 'text-blue-500 dark:text-blue-400',
	secondary: /*tw*/ 'text-gray-500 dark:text-neutral-300',
	danger: /*tw*/ 'text-red-500 dark:text-red-400',
	warning: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
	success: /*tw*/ 'text-green-500 dark:text-green-400',
	dark: /*tw*/ 'text-black dark:text-neutral-300',
} as const;

const BO_AVATAR_INDICATOR_STATUS_STYLE: BoAvatarIndicatorStatusStyleMap = {
	online: /*tw*/ 'bg-green-500',
	offline: /*tw*/ 'bg-gray-400',
	busy: /*tw*/ 'bg-red-500',
	away: /*tw*/ 'bg-yellow-500',
	none: '',
} as const;

const BO_AVATAR_INDICATOR_POSITION_STYLE: BoAvatarIndicatorPositionStyleMap = {
	'top-left': /*tw*/ 'top-0 left-0',
	'top-right': /*tw*/ 'top-0 right-0',
	'bottom-left': /*tw*/ 'bottom-0 left-0',
	'bottom-right': /*tw*/ 'bottom-0 right-0',
} as const;

const BO_AVATAR_INDICATOR_SIZE_STYLE: BoAvatarSizeStyleMap = {
	xs: /*tw*/ 'w-1.5 h-1.5',
	sm: /*tw*/ 'w-2 h-2',
	default: /*tw*/ 'w-2.5 h-2.5',
	lg: /*tw*/ 'w-3.5 h-3.5',
	xl: /*tw*/ 'w-5 h-5',
} as const;

const BO_AVATAR_LABEL_SIZE: Record<BoAvatarSize, BoFontSize> = {
	xs: 'xs',
	sm: 'sm',
	default: 'default',
	lg: 'lg',
	xl: 'xl',
} as const;

const isEmptyStr = (str?: string): boolean => {
	return str === undefined || str === null || str.trim() === '';
};

const safeString = (str?: string): string => {
	return str ?? '';
};

export const useBoAvatar = (
	props: BoAvatarProps,
	options?: { imgError?: boolean },
): UseBoAvatar => {
	const { merge } = useTailwind();

	const isOutlineShape = computed<boolean>(() => {
		return props.shape?.includes('outline') ?? false;
	});

	const label = computed<string>(() => {
		const safeStr = safeString(props.data?.label);
		if (safeStr.length > 2) {
			return safeStr.slice(0, 2).toUpperCase();
		}
		return safeStr.toUpperCase();
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return BO_AVATAR_LABEL_SIZE[props.size || 'default'];
	});

	const showDefaultAvatar = computed<boolean>(() => {
		if (props.withDefaultImage || options?.imgError) {
			return true;
		}
		return props.data?.src === undefined && isEmptyStr(props.data?.label);
	});

	const textColorClass = computed<string>(() => {
		if (props.color?.textColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineShape.value) {
			return BO_AVATAR_OUTLINE_TEXT_COLOR_STYLE[variant];
		}

		return BO_AVATAR_TEXT_COLOR_STYLE[variant];
	});

	const bgConstruct = computed<string>(() => {
		if (
			props.color?.bgColor ||
			props.withDefaultImage ||
			(props.type === 'image' && !options?.imgError)
		) {
			return 'bg-transparent';
		}

		const variant = props.variant || 'primary';

		if (isOutlineShape.value) {
			return BO_AVATAR_OUTLINE_VARIANT_STYLE[variant];
		}

		return BO_AVATAR_VARIANT_STYLE[variant];
	});

	const indicatorClassValues = computed<string>(() => {
		if (!props.indicator || props.indicator.status === 'none') {
			return '';
		}

		return merge(
			'absolute rounded-full border-2 border-white',
			BO_AVATAR_INDICATOR_SIZE_STYLE[props.size || 'default'],
			BO_AVATAR_INDICATOR_STATUS_STYLE[props.indicator.status || 'none'],
			BO_AVATAR_INDICATOR_POSITION_STYLE[props.indicator.position || 'bottom-right'],
		);
	});

	const defaultAvatarClassValues = computed<string>(() => {
		return merge('bo-avatar__default relative overflow-hidden');
	});

	const initialsContainerClassValues = computed<string>(() => {
		return merge('bo-avatar__initials flex h-full w-full items-center justify-center');
	});

	const imageContainerClassValues = computed<string>(() => {
		return merge('bo-avatar__image relative h-full w-full overflow-hidden');
	});

	const classValues = computed<string>(() => {
		const cursorClass = props.clickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default';
		const shadowClass = !isOutlineShape.value ? 'shadow-sm dark:shadow-gray-800' : '';

		return merge(
			BO_AVATAR_CONTAINER_BASE_CLASSES,
			BO_AVATAR_SIZE_STYLE[props.size || 'default'],
			BO_AVATAR_SHAPE_STYLE[props.shape || 'rounded'],
			bgConstruct.value,
			cursorClass,
			shadowClass,
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {
			backgroundColor: props.color?.bgColor,
			color: props.color?.textColor,
		};
	});

	return {
		indicatorClassValues,
		labelFontSize,
		label,
		showDefaultAvatar,
		textColorClass,
		defaultAvatarClassValues,
		initialsContainerClassValues,
		imageContainerClassValues,
		classValues,
		styleValues,
	};
};
