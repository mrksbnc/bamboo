<template>
	<button></button>
</template>

<script lang="ts" setup>
	import {
		BUTTON_MANIFEST,
		generateComponentId,
		generateDataTestId,
		getValidOrFallbackColorFromStr,
		mergeTwClasses,
		type BoButtonProps,
		type BoFontSize,
		type BoIconSize,
		type BoLoaderSize,
		type BoLoaderVariant,
		type Icon,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => generateComponentId('button'),
		dataTestId: () => generateDataTestId('button'),
		type: () => BUTTON_MANIFEST.defaults.type,
		role: () => BUTTON_MANIFEST.defaults.role,
		kind: () => BUTTON_MANIFEST.defaults.kind,
		size: () => BUTTON_MANIFEST.defaults.size,
		shape: () => BUTTON_MANIFEST.defaults.shape,
		variant: () => BUTTON_MANIFEST.defaults.variant,
		loaderType: () => BUTTON_MANIFEST.defaults.loaderType,
	});

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

		if (shape === 'default' || shape === 'pill') {
			return variant === 'light' ? 'black' : 'white';
		}

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
		const kind = props.kind || 'default';
		const shape = props.shape || 'default';
		const variant = props.variant || 'primary';
		const width = props.fullWidth ? 'fullWidth' : 'default';

		const variantClass = BUTTON_MANIFEST.styles.variants[kind][variant];

		const classes: string[] = [
			BUTTON_MANIFEST.styles.base,
			BUTTON_MANIFEST.styles.width[width],
			BUTTON_MANIFEST.styles.shape[shape],
			variantClass,
		];

		if (BUTTON_MANIFEST.styles.shadow[shape]) {
			classes.push(BUTTON_MANIFEST.styles.shadow[shape]);
		}

		if (isIconOnlyButton.value) {
			classes.push(BUTTON_MANIFEST.styles.iconOnlySize[size]);
		} else {
			classes.push(BUTTON_MANIFEST.styles.size[size]);
		}

		if (props.isLoading) {
			classes.push(BUTTON_MANIFEST.styles.states.loading);
		}

		if (props.pressed) {
			classes.push(BUTTON_MANIFEST.styles.states.pressed);
		}

		return mergeTwClasses(...classes);
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
</script>
