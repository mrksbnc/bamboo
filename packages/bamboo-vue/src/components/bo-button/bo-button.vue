<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:type="type"
		:role="role"
		:class="classValues"
		:style="styleValues"
		:disabled="isDisabled"
		:tabindex="tabIndex"
		:aria-busy="isLoading"
		:aria-disabled="isDisabled"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:aria-expanded="ariaExpanded"
		:aria-haspopup="ariaHasPopup"
		:aria-pressed="ariaPressed"
		:aria-selected="ariaSelected"
		:accesskey="accessKey"
	>
		<slot>
			<span :class="contentClasses.container">
				<bo-icon
					v-if="renderPrefixIcon"
					:icon="iconOnlyIcon"
					:size="iconSize"
					:class="contentClasses.prefixIcon"
					aria-hidden="true"
				/>
				<span v-if="!!label && !isIconOnlyButton" :class="contentClasses.label">
					<bo-text
						:value="label"
						:clickable="true"
						font-weight="semibold"
						:font-size="buttonFontSize"
					/>
				</span>
				<bo-icon
					v-if="suffixIcon && suffixIcon !== 'none' && !isLoading && !isIconOnlyButton"
					:icon="suffixIcon"
					:size="iconSize"
					:class="contentClasses.suffixIcon"
					aria-hidden="true"
				/>
				<bo-loading-spinner
					v-if="isLoading && loaderType === 'spinner'"
					:size="loaderSize"
					:variant="loaderVariant"
					:class="contentClasses.loader"
					aria-hidden="true"
				/>
				<bo-loading-pulse
					v-if="isLoading && loaderType === 'pulse'"
					:size="loaderSize"
					:variant="loaderVariant"
					:class="contentClasses.loader"
					aria-hidden="true"
				/>
			</span>
		</slot>
	</button>
</template>

<script lang="ts" setup>
	import {
		BUTTON_MANIFEST,
		generateComponentId,
		generateDataTestId,
		getValidOrFallbackColorFromStr,
		mergeTwClasses,
		type BoButtonProps,
		type BoButtonSize,
		type BoFontSize,
		type BoIconSize,
		type BoLoaderSize,
		type BoLoaderVariant,
		type Icon,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoLoadingPulse } from '../bo-loading-pulse';
	import { BoLoadingSpinner } from '../bo-loading-spinner';
	import { BoText } from '../bo-text';

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

	const renderPrefixIcon = computed<boolean>(() => {
		return (
			isIconOnlyButton.value ||
			(!!props.prefixIcon && props.prefixIcon !== 'none' && !isIconOnlyButton.value)
		);
	});

	const buttonFontSize = computed<BoFontSize>(() => {
		const sizeMap: Record<BoButtonSize, BoFontSize> = {
			sm: 'xs',
			default: 'sm',
			lg: 'sm',
		};
		return sizeMap[props.size || 'default'];
	});

	const iconSize = computed<BoIconSize>(() => {
		const sizeMap: Record<BoButtonSize, BoIconSize> = {
			sm: 'sm',
			default: 'default',
			lg: 'default',
		};
		return sizeMap[props.size || 'default'];
	});

	const loaderSize = computed<BoLoaderSize>(() => {
		const sizeMap: Record<BoButtonSize, BoLoaderSize> = {
			sm: 'xs',
			default: 'sm',
			lg: 'sm',
		};
		return sizeMap[props.size || 'default'];
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
		const kind = props.kind || 'filled';
		const shape = props.shape || 'default';
		const variant = props.variant || 'primary';
		const width = props.fullWidth ? 'fullWidth' : 'default';

		const classes: string[] = [
			BUTTON_MANIFEST.styles.base,
			BUTTON_MANIFEST.styles.width[width],
			BUTTON_MANIFEST.styles.shape[shape],
			BUTTON_MANIFEST.styles.variants[kind][variant],
		];

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
