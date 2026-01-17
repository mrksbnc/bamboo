import { computed, ShallowRef, StyleValue } from 'vue';
import { BoButtonProps } from '../definitions/bo-button';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { useColor } from './use-color';
import { BUTTON_MANIFEST } from '../manifests/button.manifest';
import { BoIconSize } from '../definitions/bo-icon';
import { Icon } from '../definitions/bo-icon-registry';
import { BoFontSize } from '../definitions/bo-text';
import { BoLoaderSize, BoLoaderVariant } from '../definitions/bo-loader';

export interface UseBoButton extends ComponentStyleComposable {
	isDisabled: ShallowRef<boolean>;
	isIconOnlyButton: ShallowRef<boolean>;
	iconOnlyIcon: ShallowRef<Icon>;
	buttonFontSize: ShallowRef<BoFontSize>;
	iconSize: ShallowRef<BoIconSize>;
	loaderSize: ShallowRef<BoLoaderSize>;
	loaderVariant: ShallowRef<BoLoaderVariant>;
	contentClasses: {
		container: string;
		label: string;
		prefixIcon: string;
		suffixIcon: string;
		loader: string;
	};
}

export const useBoButton = (props: BoButtonProps): UseBoButton => {
	const { merge } = useTailwind();
	const { getValidOrFallbackColorFromStr } = useColor();

	const isDisabled = computed<boolean>(() => {
		return props.disabled || props.isLoading || false;
	});

	const isIconOnlyButton = computed<boolean>(() => {
		return Boolean(
			!props.label &&
			((props.prefixIcon && props.prefixIcon !== 'none') ||
				(props.suffixIcon && props.suffixIcon !== 'none')),
		);
	});

	const iconOnlyIcon = computed<Icon>(() => {
		if (isIconOnlyButton.value) {
			const icon =
				props.prefixIcon && props.prefixIcon !== 'none' ? props.prefixIcon : props.suffixIcon;
			return (icon || 'none') as Icon;
		}
		return 'none' as Icon;
	});

	const buttonFontSize = computed<BoFontSize>(() => {
		const sizeMap: Record<string, BoFontSize> = {
			xs: 'xs',
			sm: 'sm',
			default: 'default',
			lg: 'lg',
			xl: 'xl',
		};
		return sizeMap[props.size || 'default'] || 'default';
	});

	const iconSize = computed<BoIconSize>(() => {
		const sizeMap: Record<string, BoIconSize> = {
			xs: 'xs',
			sm: 'sm',
			default: 'default',
			lg: 'lg',
			xl: 'xl',
		};
		return sizeMap[props.size || 'default'] || 'default';
	});

	const loaderSize = computed<BoLoaderSize>(() => {
		const sizeMap: Record<string, BoLoaderSize> = {
			xs: 'xs',
			sm: 'sm',
			default: 'sm',
			lg: 'default',
			xl: 'lg',
		};
		return sizeMap[props.size || 'default'] || 'sm';
	});

	const loaderVariant = computed<BoLoaderVariant>(() => {
		const variant = props.variant || 'primary';
		const shape = props.shape || 'default';

		// For filled buttons, use white loader
		if (shape === 'default' || shape === 'pill') {
			return variant === 'light' ? 'black' : 'white';
		}

		// For outline, ghost, and link buttons, match the button color
		return variant as BoLoaderVariant;
	});

	const contentClasses = {
		container: BUTTON_MANIFEST.styles.content.container,
		label: BUTTON_MANIFEST.styles.content.label,
		prefixIcon: BUTTON_MANIFEST.styles.content.prefixIcon,
		suffixIcon: BUTTON_MANIFEST.styles.content.suffixIcon,
		loader: BUTTON_MANIFEST.styles.content.loader,
	};

	const classValues = computed<string>(() => {
		const size = props.size || 'default';
		const variant = props.variant || 'primary';
		const shape = props.shape || 'default';
		const width = props.fullWidth ? 'fullWidth' : 'default';

		// Determine which variant style to use based on shape
		const variantType = BUTTON_MANIFEST.styles.shapeVariants[
			shape
		] as keyof typeof BUTTON_MANIFEST.styles.variants;
		const variantClass = BUTTON_MANIFEST.styles.variants[variantType][variant];

		const classes: string[] = [
			BUTTON_MANIFEST.styles.base,
			BUTTON_MANIFEST.styles.width[width],
			BUTTON_MANIFEST.styles.shape[shape],
			BUTTON_MANIFEST.styles.shadow[shape],
			variantClass,
		];

		// Add size class - use iconOnlySize if it's an icon-only button
		if (isIconOnlyButton.value) {
			classes.push(BUTTON_MANIFEST.styles.iconOnlySize[size]);
		} else {
			classes.push(BUTTON_MANIFEST.styles.size[size]);
		}

		// Add state classes
		if (props.isLoading) {
			classes.push(BUTTON_MANIFEST.styles.states.loading);
		}

		if (props.pressed) {
			classes.push(BUTTON_MANIFEST.styles.states.pressed);
		}

		return merge(...classes);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			const styles: StyleValue = {};

			if (props.customColor.background) {
				styles.backgroundColor = getValidOrFallbackColorFromStr(props.customColor.background);
			}

			if (props.customColor.border) {
				styles.borderColor = getValidOrFallbackColorFromStr(props.customColor.border);
			}

			if (props.customColor.text) {
				styles.color = getValidOrFallbackColorFromStr(props.customColor.text);
			}

			return styles;
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
		contentClasses,
		classValues,
		styleValues,
	};
};
