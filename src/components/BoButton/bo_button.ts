import {
	type BoButtonClassMap,
	type UseBoButtonCompoableArgs,
} from '@/components/BoButton';
import { BoSize } from '@/constants';
import { TailwindUtils } from '@/utils';
import { computed } from 'vue';

export enum BoButtonType {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
}

export enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	dark = 'dark',
	purple = 'purple',
	teal = 'teal',
}

const BO_BUTTON_TRANSITION_CLASSES =
	/*tw*/ 'transition-all duration-200 ease-in-out' as const;

const BO_BUTTON_FLEX_CLASSES =
	/*tw*/ 'flex items-center justify-center content-center text-center w-full max-w-fit space-x-1' as const;

const BO_BUTTON_DISABLED_CLASSES =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50' as const;

const BO_BUTTON_DEFAULT_CLASSES: BoButtonClassMap<BoButtonVariant> =
	Object.freeze({
		default: {
			primary: /*tw*/ 'text-white dark:text-white bg-blue-700 dark:bg-blue-600',
			secondary:
				/*tw*/ 'text-gray-600 dark:text-gray-500 bg-gray-200 dark:bg-gray-100',
			success:
				/*tw*/ 'text-white dark:text-white bg-green-600 dark:bg-green-500',
			warning:
				/*tw*/ 'text-white dark:text-white bg-yellow-600 dark:bg-yellow-500',
			danger: /*tw*/ 'text-white dark:text-white bg-red-600 dark:bg-red-500',
			dark: /*tw*/ 'text-white dark:text-white bg-gray-600 dark:bg-gray-500',
			purple:
				/*tw*/ 'text-white dark:text-white bg-purple-600 dark:bg-purple-500',
			teal: /*tw*/ 'text-white dark:text-white bg-teal-600 dark:bg-teal-500',
		},
		active: {
			primary:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-blue-800 dark:hover:bg-blue-700',
			secondary:
				/*tw*/ 'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-200',
			success:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-green-700 dark:hover:bg-green-600',
			warning:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-yellow-700 dark:hover:bg-yellow-600',
			danger:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-red-700 dark:hover:bg-red-600',
			dark: /*tw*/ 'hover:text-gray-600 dark:hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600',
			purple:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-purple-700 dark:hover:bg-purple-600',
			teal: /*tw*/ 'hover:text-white dark:hover:text-white hover:bg-teal-700 dark:hover:bg-teal-600',
		},
	});

const BO_BUTTON_OUTLINE_CLASSES: BoButtonClassMap<BoButtonVariant> =
	Object.freeze({
		default: {
			primary:
				/*tw*/ 'border border-blue-700 dark:border-blue-600 text-blue-700 dark:text-blue-600 bg-transparent',
			secondary:
				/*tw*/ 'border border-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-600 bg-transparent',
			success:
				/*tw*/ 'border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 bg-transparent',
			warning:
				/*tw*/ 'border border-yellow-600 dark:border-yellow-500 text-yellow-600 dark:text-yellow-500 bg-transparent',
			danger:
				/*tw*/ 'border border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 bg-transparent',
			dark: /*tw*/ 'border border-gray-600 dark:border-gray-500 text-gray-600 dark:text-gray-500 bg-transparent',
			purple:
				/*tw*/ 'border border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 bg-transparent',
			teal: /*tw*/ 'border border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 bg-transparent',
		},
		active: {
			primary:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-blue-700 dark:hover:bg-blue-600',
			secondary:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-gray-500 dark:hover:bg-gray-500 hover:border-gray-500 dark:hover:border-gray-500',
			success:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-green-600 dark:hover:bg-green-500',
			warning:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-yellow-600 dark:hover:bg-yellow-500',
			danger:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-red-600 dark:hover:bg-red-500',
			dark: /*tw*/ 'hover:text-white dark:hover:text-white hover:bg-gray-600 dark:hover:bg-gray-500',
			purple:
				/*tw*/ 'hover:text-white dark:hover:text-white hover:bg-purple-600 dark:hover:bg-purple-500',
			teal: /*tw*/ 'hover:text-white dark:hover:text-white hover:bg-teal-600 dark:hover:bg-teal-500',
		},
	});

enum BoButtonBorderRadiusClasses {
	pill = /*tw*/ 'rounded-full',
	default = /*tw*/ 'rounded-lg',
	outline = /*tw*/ 'rounded-lg',
}

enum BoButtonPaddingClasses {
	extra_small = /*tw*/ 'px-2 py-1',
	small = /*tw*/ 'px-2 py-1.5',
	default = /*tw*/ 'px-3 py-2',
	large = /*tw*/ 'px-4 py-3',
	extra_large = /*tw*/ 'px-5 py-4',
}

enum BoButtonTextSizeClasses {
	extra_small = /*tw*/ 'text-xs',
	small = /*tw*/ 'text-xs',
	default = /*tw*/ 'text-sm',
	large = /*tw*/ 'text-base',
	extra_large = /*tw*/ 'text-lg',
}

enum BoButtonShadowClasses {
	blue = /*tw*/ 'shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80',
	gray = /*tw*/ 'shadow-sm shadow-gray-500/50 dark:shadow-sm dark:shadow-gray-800/80',
	red = /*tw*/ 'shadow-sm shadow-red-500/50 dark:shadow-sm dark:shadow-red-800/80',
	yellow = /*tw*/ 'shadow-sm shadow-yellow-500/50 dark:shadow-sm dark:shadow-yellow-800/80',
	green = /*tw*/ 'shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80',
	black = /*tw*/ 'shadow-sm shadow-black-500/50 dark:shadow-sm dark:shadow-black-800/80',
	purple = /*tw*/ 'shadow-sm shadow-purple-500/50 dark:shadow-sm dark:shadow-purple-800/80',
	teal = /*tw*/ 'shadow-sm shadow-teal-500/50 dark:shadow-sm dark:shadow-teal-800/80',
}

export const useBoButtonStyle = (
	props: UseBoButtonCompoableArgs,
): { classes: string; iconSize: BoSize } => {
	const variant = props.variant.value;
	const type = props.type.value;
	const size = props.size.value;

	const isOutline = computed<boolean>(() => type === BoButtonType.outline);

	const base = computed<string>(() => {
		let shadow = '';

		switch (variant) {
			case BoButtonVariant.primary:
				shadow = BoButtonShadowClasses.blue;
				break;
			case BoButtonVariant.secondary:
				shadow = BoButtonShadowClasses.gray;
				break;
			case BoButtonVariant.success:
				shadow = BoButtonShadowClasses.green;
				break;
			case BoButtonVariant.warning:
				shadow = BoButtonShadowClasses.yellow;
				break;
			case BoButtonVariant.danger:
				shadow = BoButtonShadowClasses.red;
				break;
			case BoButtonVariant.dark:
				shadow = BoButtonShadowClasses.black;
				break;
			case BoButtonVariant.purple:
				shadow = BoButtonShadowClasses.purple;
				break;
			case BoButtonVariant.teal:
				shadow = BoButtonShadowClasses.teal;
				break;
		}

		return isOutline.value
			? TailwindUtils.merge(
					BO_BUTTON_FLEX_CLASSES,
					BO_BUTTON_DISABLED_CLASSES,
					BO_BUTTON_TRANSITION_CLASSES,
					BO_BUTTON_OUTLINE_CLASSES.default[variant],
					BO_BUTTON_OUTLINE_CLASSES.active != null
						? BO_BUTTON_OUTLINE_CLASSES.active[variant]
						: '',
				)
			: TailwindUtils.merge(
					shadow,
					BO_BUTTON_FLEX_CLASSES,
					BO_BUTTON_DISABLED_CLASSES,
					BO_BUTTON_TRANSITION_CLASSES,
					BO_BUTTON_DEFAULT_CLASSES.default[variant],
					BO_BUTTON_DEFAULT_CLASSES.active != null
						? BO_BUTTON_DEFAULT_CLASSES.active[variant]
						: '',
				);
	});

	const borderRadius = computed<string>(() => {
		return BoButtonBorderRadiusClasses[type];
	});

	const buttonAndContentSize = computed<string>(() => {
		switch (size) {
			case BoSize.extra_small:
				return TailwindUtils.merge(
					BoButtonPaddingClasses.extra_small,
					BoButtonTextSizeClasses.extra_small,
				);
			case BoSize.small:
				return TailwindUtils.merge(
					BoButtonPaddingClasses.small,
					BoButtonTextSizeClasses.small,
				);
			case BoSize.large:
				return TailwindUtils.merge(
					BoButtonPaddingClasses.large,
					BoButtonTextSizeClasses.large,
				);
			case BoSize.extra_large:
				return TailwindUtils.merge(
					BoButtonPaddingClasses.extra_large,
					BoButtonTextSizeClasses.extra_large,
				);
			case BoSize.default:
			default:
				return TailwindUtils.merge(
					BoButtonPaddingClasses.default,
					BoButtonTextSizeClasses.default,
				);
		}
	});

	const classes = computed<string>(() => {
		return TailwindUtils.merge(
			base.value,
			borderRadius.value,
			buttonAndContentSize.value,
		);
	});

	const iconSize = computed<BoSize>(() => {
		switch (size) {
			case BoSize.large:
			case BoSize.extra_large:
				return BoSize.default;
			case BoSize.extra_small:
			case BoSize.small:
			case BoSize.default:
			default:
				return BoSize.small;
		}
	});

	return {
		classes: classes.value,
		iconSize: iconSize.value,
	};
};
