import type {
	UseBoBadgeComposableArgs,
	UseBoBadgeComposableReturn,
} from '@/components/BoBadge';
import { Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { TailwindUtils } from '@/utils';
import { computed } from 'vue';

export enum BoBadgeVariant {
	blue = 'blue',
	gray = 'gray',
	green = 'green',
	red = 'red',
	yellow = 'yellow',
	black = 'black',
	purple = 'purple',
	teal = 'teal',
}

export enum BoBadgeType {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
}

export enum BoBadgeSize {
	default = 'default',
	large = 'large',
}

enum BoBadgeBorderRadiusClasses {
	default = /*tw*/ 'rounded',
	rounded = /*tw*/ 'rounded-full',
}

enum BoBadgePaddingClasses {
	default = /*tw*/ 'px-2 py-1',
	large = /*tw*/ 'px-3 py-1.5',
	circle_default = /*tw*/ 'size-6',
	circle_large = /*tw*/ 'size-8',
}

enum BoBadgeTextClasses {
	default = /*tw*/ 'text-xs font-medium',
	large = /*tw*/ 'text-sm font-medium',
}

const BO_BADGE_DEFAULT_CLASSES =
	/*tw*/ 'inline-flex items-center justify-center font-medium gap-1';

const BO_BADGE_VARIANT_CLASSES: Record<
	BoBadgeType,
	Record<BoBadgeVariant, string>
> = Object.freeze({
	default: {
		blue: /*tw*/ 'bg-blue-700 dark:bg-blue-600 text-white dark:text-white',
		gray: /*tw*/ 'bg-gray-700 dark:bg-gray-600 text-white dark:text-white',
		green: /*tw*/ 'bg-green-700 dark:bg-green-600 text-white dark:text-white',
		red: /*tw*/ 'bg-red-700 dark:bg-red-600 text-white dark:text-white',
		yellow:
			/*tw*/ 'bg-yellow-700 dark:bg-yellow-600 text-white dark:text-white',
		black: /*tw*/ 'bg-black dark:bg-black text-white dark:text-white',
		purple:
			/*tw*/ 'bg-purple-700 dark:bg-purple-600 text-white dark:text-white',
		teal: /*tw*/ 'bg-teal-700 dark:bg-teal-600 text-white dark:text-white',
	},
	pill: {
		blue: /*tw*/ 'bg-blue-700 dark:bg-blue-600 text-white dark:text-white',
		gray: /*tw*/ 'bg-gray-700 dark:bg-gray-600 text-white dark:text-white',
		green: /*tw*/ 'bg-green-700 dark:bg-green-600 text-white dark:text-white',
		red: /*tw*/ 'bg-red-700 dark:bg-red-600 text-white dark:text-white',
		yellow:
			/*tw*/ 'bg-yellow-700 dark:bg-yellow-600 text-white dark:text-white',
		black: /*tw*/ 'bg-black dark:bg-black text-white dark:text-white',
		purple:
			/*tw*/ 'bg-purple-700 dark:bg-purple-600 text-white dark:text-white',
		teal: /*tw*/ 'bg-teal-700 dark:bg-teal-600 text-white dark:text-white',
	},
	outline: {
		blue: /*tw*/ 'border border-blue-700 dark:border-blue-600 text-blue-700 dark:text-blue-600',
		gray: /*tw*/ 'border border-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-600',
		green:
			/*tw*/ 'border border-green-700 dark:border-green-600 text-green-700 dark:text-green-600',
		red: /*tw*/ 'border border-red-700 dark:border-red-600 text-red-700 dark:text-red-600',
		yellow:
			/*tw*/ 'border border-yellow-700 dark:border-yellow-600 text-yellow-700 dark:text-yellow-600',
		black:
			/*tw*/ 'border border-black dark:border-black text-black dark:text-black',
		purple:
			/*tw*/ 'border border-purple-700 dark:border-purple-600 text-purple-700 dark:text-purple-600',
		teal: /*tw*/ 'border border-teal-700 dark:border-teal-600 text-teal-700 dark:text-teal-600',
	},
});

export const useBoBadge = (
	props: UseBoBadgeComposableArgs,
): UseBoBadgeComposableReturn => {
	const variant = props.variant.value ?? BoBadgeVariant.blue;
	const type = props.type.value ?? BoBadgeType.default;
	const size = props.size.value ?? BoBadgeSize.default;
	const icon = props.icon.value ?? {
		icon: Icon.none,
		circle: false,
		prefix: false,
		suffix: false,
	};

	const isCircle = computed<boolean>(() => {
		return props.icon.value?.circle ?? false;
	});

	const hasLabel = computed<boolean>(() => {
		return props.value.value != null;
	});

	const showLabel = computed<boolean>(() => {
		return hasLabel.value && !iconOnly.value;
	});

	const iconOnly = computed<boolean>(() => {
		return (
			isCircle.value ||
			(!hasLabel.value &&
				icon.icon !== Icon.none &&
				!icon.prefix &&
				!icon.suffix)
		);
	});

	const hasPrefixIcon = computed<boolean>(() => {
		return icon.prefix && icon.icon !== Icon.none && !icon.circle;
	});

	const hasSuffixIcon = computed<boolean>(() => {
		return icon.suffix && icon.icon !== Icon.none && !icon.circle;
	});

	const classes = computed<string>(() => {
		const variantClasses = BO_BADGE_VARIANT_CLASSES[type][variant] ?? '';
		const borderRadiusClasses =
			icon.circle || type === BoBadgeType.pill
				? BoBadgeBorderRadiusClasses.rounded
				: BoBadgeBorderRadiusClasses.default;

		const isCircle = icon.circle ?? false;

		const paddingClasses = isCircle
			? size === BoBadgeSize.large
				? BoBadgePaddingClasses.circle_large
				: BoBadgePaddingClasses.circle_default
			: size === BoBadgeSize.large
				? BoBadgePaddingClasses.large
				: BoBadgePaddingClasses.default;

		const textClasses =
			size === BoBadgeSize.large
				? BoBadgeTextClasses.large
				: BoBadgeTextClasses.default;

		return TailwindUtils.merge(
			BO_BADGE_DEFAULT_CLASSES,
			variantClasses,
			borderRadiusClasses,
			paddingClasses,
			textClasses,
		);
	});

	const iconSize = computed<BoSize>(() => {
		return BoSize.default;
	});

	return {
		isCircle: isCircle.value,
		hasLabel: hasLabel.value,
		showLabel: showLabel.value,
		iconOnly: iconOnly.value,
		hasPrefixIcon: hasPrefixIcon.value,
		hasSuffixIcon: hasSuffixIcon.value,
		classes: classes.value,
		iconSize: iconSize.value,
		iconProps: icon,
	};
};
