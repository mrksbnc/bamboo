import { computed, HTMLAttributes, ShallowRef, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import {
	BoButtonProps,
	BoButtonSize,
	BoButtonVariant,
	BoButtonShape,
} from '../components/bo-button';
import { useColor } from './use-color';
import { BoLoaderSize, BoLoaderVariant } from '../components/bo-loader';
import { BoFontSize } from '../components/bo-text';
import { BoIconSize } from '../components/bo-icon';
import { Icon } from '../components/bo-icon-registry';

type BoButtonSizeStyleMap = Record<BoButtonSize, string>;
type BoButtonVariantStyleMap = Record<BoButtonVariant, string>;
type BoButtonShapeStyleMap = Record<BoButtonShape, string>;
type BoButtonShapeVariantStyleMap = Record<BoButtonShape, BoButtonVariantStyleMap>;

const DEFAULT_BUTTON_CLASSES =
	/*tw*/ 'bo-button inline-flex items-center justify-center cursor-pointer max-h-fit font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500';

const DISABLED_CLASSES =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none';

const WIDTH_CLASSES = {
	default: /*tw*/ 'w-auto',
	fullWidth: /*tw*/ 'w-full',
} as const;

const SHAPE_CLASSES = {
	default: /*tw*/ 'rounded-lg',
	pill: /*tw*/ 'rounded-full',
	outline: /*tw*/ 'rounded-lg',
	link: /*tw*/ 'rounded-none',
} as const satisfies BoButtonShapeStyleMap;

const SHADOW_CLASSES = {
	default: /*tw*/ 'shadow-lg',
	pill: /*tw*/ 'shadow-lg',
	outline: /*tw*/ 'shadow-lg',
	link: /*tw*/ 'shadow-none',
} as const satisfies BoButtonShapeStyleMap;

const FILLED_VARIANT_CLASSES = {
	primary:
		/*tw*/ 'bg-blue-600 dark:bg-blue-700 hover:opacity-80 focus:ring-transparent border border-blue-600 dark:border-blue-700 text-white',
	secondary:
		/*tw*/ 'bg-neutral-400 dark:bg-neutral-700 hover:opacity-80 focus:ring-transparent border border-neutral-400 dark:border-neutral-700 text-white',
	danger:
		/*tw*/ 'bg-red-600 dark:bg-red-700 hover:opacity-80 focus:ring-transparent border border-red-600 dark:border-red-700 text-white',
	warning:
		/*tw*/ 'bg-yellow-500 dark:bg-yellow-600 hover:opacity-80 focus:ring-transparent border border-yellow-500 dark:border-yellow-600 text-white',
	success:
		/*tw*/ 'bg-green-600 dark:bg-green-700 hover:opacity-80 focus:ring-transparent border border-green-600 dark:border-green-700 text-white',
	light:
		/*tw*/ 'bg-white dark:bg-white hover:opacity-80 focus:ring-transparent border border-white dark:border-white text-black',
	dark: /*tw*/ 'bg-black dark:bg-black hover:opacity-80 focus:ring-transparent border border-black dark:border-black text-white',
} as const satisfies BoButtonVariantStyleMap;

const OUTLINE_VARIANT_CLASSES = {
	primary:
		/*tw*/ 'border border-blue-600 bg-transparent hover:bg-blue-700 focus:ring-transparent text-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500',
	secondary:
		/*tw*/ 'border border-neutral-500 bg-transparent dark:border-neutral-300 hover:bg-neutral-500 focus:ring-transparent text-neutral-500 dark:text-neutral-300 hover:text-white',
	danger:
		/*tw*/ 'border border-red-600 bg-transparent hover:bg-red-600 focus:ring-transparent text-red-600 hover:text-white dark:border-red-500 dark:text-red-500',
	warning:
		/*tw*/ 'border border-yellow-500 bg-transparent hover:bg-yellow-500 focus:ring-transparent text-yellow-500 hover:text-white dark:border-yellow-400 dark:text-yellow-400',
	success:
		/*tw*/ 'border border-green-600 bg-transparent hover:bg-green-600 focus:ring-transparent text-green-600 hover:text-white dark:border-green-500 dark:text-green-500',
	light:
		/*tw*/ 'border border-neutral-50 bg-transparent hover:bg-white focus:ring-transparent text-neutral-50 hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-200 dark:text-neutral-200',
	dark: /*tw*/ 'border border-black bg-transparent hover:bg-black focus:ring-transparent text-black hover:text-white dark:border-neutral-700 dark:text-neutral-300',
} as const satisfies BoButtonVariantStyleMap;

const LINK_VARIANT_CLASSES = {
	primary:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-700 dark:text-blue-500 hover:opacity-80',
	secondary:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-neutral-700 dark:text-neutral-400 hover:opacity-80',
	danger:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 dark:text-red-500 hover:opacity-80',
	warning:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-500 dark:text-yellow-400 hover:opacity-80',
	success:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 dark:text-green-500 hover:opacity-80',
	light:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-neutral-500 dark:text-neutral-200 hover:opacity-80',
	dark: /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-black dark:text-neutral-300 hover:opacity-80',
} as const satisfies BoButtonVariantStyleMap;

const SHAPE_VARIANT_CLASSES = {
	default: FILLED_VARIANT_CLASSES,
	pill: FILLED_VARIANT_CLASSES,
	outline: OUTLINE_VARIANT_CLASSES,
	link: LINK_VARIANT_CLASSES,
} as const satisfies BoButtonShapeVariantStyleMap;

const SIZE_CLASSES = {
	xs: /*tw*/ 'px-1 py-1',
	sm: /*tw*/ 'px-2 py-1.5',
	default: /*tw*/ 'px-3 py-2',
	lg: /*tw*/ 'px-4 py-2.5',
	xl: /*tw*/ 'px-5 py-3',
} as const satisfies BoButtonSizeStyleMap;

const ICON_ONLY_SIZE_CLASSES = {
	xs: /*tw*/ 'p-1',
	sm: /*tw*/ 'p-1.5',
	default: /*tw*/ 'p-2.5',
	lg: /*tw*/ 'p-2.5',
	xl: /*tw*/ 'p-3',
} as const satisfies BoButtonSizeStyleMap;

export interface UseBoButton extends ComponentStyleComposable {
	isDisabled: ShallowRef<boolean>;
	isIconOnlyButton: ShallowRef<boolean>;
	iconOnlyIcon: ShallowRef<Icon>;
	buttonFontSize: ShallowRef<BoFontSize>;
	iconSize: ShallowRef<BoIconSize>;
	ariaLabel: ShallowRef<string | undefined>;
	tabIndex: ShallowRef<HTMLAttributes['tabindex']>;
	loaderSize: ShallowRef<BoLoaderSize>;
	loaderVariant: ShallowRef<BoLoaderVariant>;
}

export const useBoButton = (props: BoButtonProps): UseBoButton => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const isDisabled = computed<boolean>(() => {
		return props.disabled === true || props.isLoading === true;
	});

	const isIconOnlyButton = computed<boolean>(() => {
		return !props.label && !!props.prefixIcon && props.prefixIcon !== 'none';
	});

	const iconOnlyIcon = computed<Icon>(() => {
		return props.prefixIcon ?? props.suffixIcon ?? 'none';
	});

	const widthClass = computed<string>(() => {
		return props.fullWidth ? WIDTH_CLASSES.fullWidth : WIDTH_CLASSES.default;
	});

	const sizeClass = computed<string>(() => {
		if (isIconOnlyButton.value) {
			return ICON_ONLY_SIZE_CLASSES[props.size || 'default'];
		}
		return SIZE_CLASSES[props.size || 'default'];
	});

	const shapeClass = computed<string>(() => {
		return SHAPE_CLASSES[props.shape || 'default'];
	});

	const shadowClass = computed<string>(() => {
		return SHADOW_CLASSES[props.shape || 'default'];
	});

	const variantClass = computed<string>(() => {
		const shape = props.shape || 'default';
		const variant = props.variant || 'primary';
		return SHAPE_VARIANT_CLASSES[shape][variant];
	});

	const buttonFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case 'xs':
			case 'sm':
				return 'xs';
			case 'lg':
				return 'default';
			case 'xl':
				return 'lg';
			default:
				return 'sm';
		}
	});

	const iconSize = computed<BoIconSize>(() => {
		switch (props.size) {
			case 'xs':
				return 'xs';
			case 'lg':
			case 'xl':
				return 'default';
			default:
				return 'sm';
		}
	});

	const ariaLabel = computed<string | undefined>(() => {
		if (props.ariaLabelledBy) {
			return undefined;
		}
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.label) {
			return props.label;
		}
		if (isIconOnlyButton.value) {
			return 'Button with icon';
		}
		return undefined;
	});

	const tabIndex = computed<HTMLAttributes['tabindex']>(() => {
		if (isDisabled.value) {
			return -1;
		}
		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}
		return undefined;
	});

	const loaderVariant = computed<BoLoaderVariant>(() => {
		const shape = props.shape || 'default';
		const variant = props.variant || 'primary';

		if (shape === 'outline' || shape === 'link') {
			switch (variant) {
				case 'secondary':
					return 'secondary';
				case 'danger':
					return 'danger';
				case 'warning':
					return 'warning';
				case 'success':
					return 'success';
				case 'dark':
					return 'black';
				case 'primary':
				default:
					return 'primary';
			}
		}
		return 'white';
	});

	const loaderSize = computed<BoLoaderSize>(() => {
		switch (props.size) {
			case 'xs':
				return 'xs';
			case 'sm':
				return 'sm';
			case 'default':
				return props.loaderType === 'pulse' ? 'sm' : 'default';
			case 'lg':
				return 'default';
			case 'xl':
				return 'lg';
			default:
				return 'sm';
		}
	});

	const classValues = computed<string>(() => {
		return merge(
			widthClass.value,
			sizeClass.value,
			shapeClass.value,
			shadowClass.value,
			DEFAULT_BUTTON_CLASSES,
			DISABLED_CLASSES,
			variantClass.value,
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			const { background, border, text } = props.customColor;

			return {
				color: text ? getValidOrFallbackColorFromStr(text) : undefined,
				borderColor: border ? getValidOrFallbackColorFromStr(border) : undefined,
				backgroundColor: background ? getValidOrFallbackColorFromStr(background) : undefined,
			};
		}

		return {};
	});

	return {
		isDisabled,
		isIconOnlyButton,
		iconOnlyIcon,
		buttonFontSize,
		iconSize,
		loaderSize,
		loaderVariant,
		ariaLabel,
		tabIndex,
		classValues,
		styleValues,
	};
};
