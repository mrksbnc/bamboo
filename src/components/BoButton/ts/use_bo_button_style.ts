import {
	BoButtonType,
	BoButtonVariant,
	type BoButtonClassMap,
	type BoButtonShadow,
} from '@/components/BoButton';
import { BoSize } from '@/constants';
import { TailwindUtils } from '@/utils';
import { computed } from 'vue';
import type { UseBoButtonCompoableArgs } from './types';
/**
 * @description Default tailwind classes for the transition of the button component
 */
const BO_BUTTON_TRANSITION_CLASSES = 'transition-all duration-200 ease-in-out';
/**
 * @description Default tailwind classes for the flex container of the button component
 */
const BO_BUTTON_FLEX_CLASSES =
	'flex items-center justify-center text-center w-full max-w-fit';
/**
 * @description Default tailwind classes for the button component
 * when its in the disabled state
 */
const BO_BUTTON_DISABLED_CLASSES =
	'disabled:cursor-not-allowed disabled:opacity-50';
/**
 * @description Default tailwind classes for the button component
 * in case the button type is `default` or `pill`
 */
const BO_BUTTON_DEFAULT_CLASSES: Readonly<BoButtonClassMap<BoButtonVariant>> =
	Object.freeze({
		default: {
			primary: 'text-white dark:text-white bg-blue-700 dark:bg-blue-600',
			secondary:
				'text-gray-600 dark:text-gray-500 bg-gray-200 dark:bg-gray-100',
			success: 'text-white dark:text-white bg-green-600 dark:bg-green-500',
			warning: 'text-white dark:text-white bg-yellow-600 dark:bg-yellow-500',
			danger: 'text-white dark:text-white bg-red-600 dark:bg-red-500',
			dark: 'text-white dark:text-gray-500 bg-gray-600 dark:bg-gray-500',
			purple: 'text-white dark:text-white bg-purple-600 dark:bg-purple-500',
			teal: 'text-white dark:text-white bg-teal-600 dark:bg-teal-500',
		},
		active: {
			primary:
				'hover:text-white dark:hover:text-white hover:bg-blue-800 dark:hover:bg-blue-700',
			secondary:
				'hover:text-white dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-200',
			success:
				'hover:text-white dark:hover:text-white hover:bg-green-700 dark:hover:bg-green-600',
			warning:
				'hover:text-white dark:hover:text-white hover:bg-yellow-700 dark:hover:bg-yellow-600',
			danger:
				'hover:text-white dark:hover:text-white hover:bg-red-700 dark:hover:bg-red-600',
			dark: 'hover:text-gray-600 dark:hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600',
			purple:
				'hover:text-white dark:hover:text-white hover:bg-purple-700 dark:hover:bg-purple-600',
			teal: 'hover:text-white dark:hover:text-white hover:bg-teal-700 dark:hover:bg-teal-600',
		},
	});
/**
 * @description Default tailwind classes for the button component
 * in case the button type is `outline`
 */
const BO_BUTTON_OUTLINE_CLASSES: Readonly<BoButtonClassMap<BoButtonVariant>> =
	Object.freeze({
		default: {
			primary:
				'border border-blue-700 dark:border-blue-600 text-blue-700 dark:text-blue-600 bg-transparent',
			secondary:
				'border border-gray-200 dark:border-gray-100 text-gray-200 dark:text-gray-100 bg-transparent',
			success:
				'border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 bg-transparent',
			warning:
				'border border-yellow-600 dark:border-yellow-500 text-yellow-600 dark:text-yellow-500 bg-transparent',
			danger:
				'border border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 bg-transparent',
			dark: 'border border-gray-600 dark:border-gray-500 text-gray-600 dark:text-gray-500 bg-transparent',
			purple:
				'border border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 bg-transparent',
			teal: 'border border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 bg-transparent',
		},
		active: {
			primary:
				'hover:text-white dark:hover:text-white hover:bg-blue-700 dark:hover:bg-blue-600',
			secondary:
				'hover:text-white dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-100',
			success:
				'hover:text-white dark:hover:text-white hover:bg-green-600 dark:hover:bg-green-500',
			warning:
				'hover:text-white dark:hover:text-white hover:bg-yellow-600 dark:hover:bg-yellow-500',
			danger:
				'hover:text-white dark:hover:text-white hover:bg-red-600 dark:hover:bg-red-500',
			dark: 'hover:text-white dark:hover:text-white hover:bg-gray-600 dark:hover:bg-gray-500',
			purple:
				'hover:text-white dark:hover:text-white hover:bg-purple-600 dark:hover:bg-purple-500',
			teal: 'hover:text-white dark:hover:text-white hover:bg-teal-600 dark:hover:bg-teal-500',
		},
	});

const BO_BUTTON_BORDER_RADIUS_CLASSES: Readonly<Record<BoButtonType, string>> =
	Object.freeze({
		pill: 'rounded-full',
		default: 'rounded-lg',
		outline: 'rounded-lg',
	});

const BO_BUTTON_PADDING_CLASSES: Readonly<Record<BoSize, string>> =
	Object.freeze({
		extra_small: 'px-2 py-1',
		small: 'px-2 py-1.5',
		default: 'px-3 py-2',
		large: 'px-4 py-3',
		extra_large: 'px-5 py-4',
	});

const BO_BUTTON_TEXT_SIZE_CLASSES: Readonly<Record<BoSize, string>> =
	Object.freeze({
		extra_small: 'text-xs',
		small: 'text-xs',
		default: 'text-sm',
		large: 'text-base',
		extra_large: 'text-lg',
	});

const BO_BUTTON_SHADOW_CLASSES: Record<BoButtonShadow, string> = {
	blue: 'shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80',
	gray: 'shadow-sm shadow-gray-500/50 dark:shadow-sm dark:shadow-gray-800/80',
	red: 'shadow-sm shadow-red-500/50 dark:shadow-sm dark:shadow-red-800/80',
	yellow:
		'shadow-sm shadow-yellow-500/50 dark:shadow-sm dark:shadow-yellow-800/80',
	green:
		'shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80',
	black:
		'shadow-sm shadow-black-500/50 dark:shadow-sm dark:shadow-black-800/80',
	purple:
		'shadow-sm shadow-purple-500/50 dark:shadow-sm dark:shadow-purple-800/80',
	teal: 'shadow-sm shadow-teal-500/50 dark:shadow-sm dark:shadow-teal-800/80',
};

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
				shadow = BO_BUTTON_SHADOW_CLASSES.blue;
				break;
			case BoButtonVariant.secondary:
				shadow = BO_BUTTON_SHADOW_CLASSES.gray;
				break;
			case BoButtonVariant.success:
				shadow = BO_BUTTON_SHADOW_CLASSES.green;
				break;
			case BoButtonVariant.warning:
				shadow = BO_BUTTON_SHADOW_CLASSES.yellow;
				break;
			case BoButtonVariant.danger:
				shadow = BO_BUTTON_SHADOW_CLASSES.red;
				break;
			case BoButtonVariant.dark:
				shadow = BO_BUTTON_SHADOW_CLASSES.black;
				break;
			case BoButtonVariant.purple:
				shadow = BO_BUTTON_SHADOW_CLASSES.purple;
				break;
			case BoButtonVariant.teal:
				shadow = BO_BUTTON_SHADOW_CLASSES.teal;
				break;
		}
		return isOutline.value
			? TailwindUtils.merge(
					shadow,
					BO_BUTTON_FLEX_CLASSES,
					BO_BUTTON_DISABLED_CLASSES,
					BO_BUTTON_TRANSITION_CLASSES,
					BO_BUTTON_OUTLINE_CLASSES.default[variant],
					BO_BUTTON_OUTLINE_CLASSES?.active?.[variant] ?? '',
				)
			: TailwindUtils.merge(
					shadow,
					BO_BUTTON_FLEX_CLASSES,
					BO_BUTTON_DISABLED_CLASSES,
					BO_BUTTON_TRANSITION_CLASSES,
					BO_BUTTON_DEFAULT_CLASSES.default[variant],
					BO_BUTTON_DEFAULT_CLASSES?.active?.[variant] ?? '',
				);
	});

	const borderRadius = computed<string>(() => {
		return BO_BUTTON_BORDER_RADIUS_CLASSES[type];
	});

	const buttonAndContentSize = computed<string>(() => {
		let classes = '';

		switch (size) {
			case BoSize.extra_small:
				classes = TailwindUtils.merge(
					BO_BUTTON_PADDING_CLASSES.extra_small,
					BO_BUTTON_TEXT_SIZE_CLASSES.extra_small,
				);
				break;
			case BoSize.small:
				classes = TailwindUtils.merge(
					BO_BUTTON_PADDING_CLASSES.small,
					BO_BUTTON_TEXT_SIZE_CLASSES.small,
				);
				break;
			case BoSize.default:
				classes = TailwindUtils.merge(
					BO_BUTTON_PADDING_CLASSES.default,
					BO_BUTTON_TEXT_SIZE_CLASSES.default,
				);
				break;
			case BoSize.large:
				classes = TailwindUtils.merge(
					BO_BUTTON_PADDING_CLASSES.large,
					BO_BUTTON_TEXT_SIZE_CLASSES.large,
				);
				break;
			case BoSize.extra_large:
				classes = TailwindUtils.merge(
					BO_BUTTON_PADDING_CLASSES.extra_large,
					BO_BUTTON_TEXT_SIZE_CLASSES.extra_large,
				);
				break;
		}

		return classes;
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
