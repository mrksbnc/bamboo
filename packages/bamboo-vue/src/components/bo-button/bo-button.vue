<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:type="type"
		:name="name"
		:role="role"
		:disabled="isDisabled"
		:tabindex="tabIndex"
		:class="classValues"
		:style="styleValues"
		:accesskey="accessKey"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-pressed="pressed"
		:aria-disabled="isDisabled"
		:aria-expanded="ariaExpanded"
		:aria-haspopup="ariaHasPopup"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:aria-busy="isLoading ? 'true' : undefined"
	>
		<bo-loading-spinner v-if="isLoading" :size="loaderSizeValue" variant="white" />
		<bo-icon
			v-if="prefixIcon && !isLoading"
			:icon="prefixIcon"
			:size="iconSizeValue"
			:cursor="cursorClassValues"
		/>
		<slot></slot>
		<bo-icon
			v-if="suffixIcon"
			:icon="suffixIcon"
			:size="iconSizeValue"
			:cursor="cursorClassValues"
		/>
	</button>
</template>

<script setup lang="ts">
	import {
		BoCursor,
		BUTTON_MANIFEST,
		generateComponentId,
		generateDataTestId,
		getValidOrFallbackColorFromStr,
		mergeTwClasses,
		type BoButtonProps,
		type BoIconSize,
		type BoLoaderSize,
	} from '@workspace/bamboo-core';
	import { computed, useSlots, type StyleValue } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoLoadingSpinner } from '../bo-loading-spinner';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => generateComponentId('button'),
		dataTestId: () => generateDataTestId('button'),
		size: () => BUTTON_MANIFEST.defaults.size,
		variant: () => BUTTON_MANIFEST.defaults.variant,
		kind: () => BUTTON_MANIFEST.defaults.kind,
		shape: () => BUTTON_MANIFEST.defaults.shape,
	});

	const slots = useSlots();

	const isIconOnly = computed(() => {
		return !slots['default'] && (props.prefixIcon || props.suffixIcon);
	});

	const iconSizeValue = computed<BoIconSize>(() => {
		return BUTTON_MANIFEST.styles.iconSize[props.size] as BoIconSize;
	});

	const loaderSizeValue = computed<BoLoaderSize>(() => {
		const size = props.size || 'default';
		return BUTTON_MANIFEST.styles.loaderSize[size] as BoLoaderSize;
	});

	const isDisabled = computed<boolean>(() => {
		return props.disabled || props.isLoading;
	});

	const cursorClassValues = computed<BoCursor>(() => {
		if (props.isLoading) {
			return BUTTON_MANIFEST.styles.cursor.loading;
		}

		if (props.disabled) {
			return BUTTON_MANIFEST.styles.cursor.disabled;
		}

		return BUTTON_MANIFEST.styles.cursor.default;
	});

	const sizeClassValues = computed<string>(() => {
		const classes = isIconOnly.value
			? BUTTON_MANIFEST.styles.iconOnlySize[props.size]
			: BUTTON_MANIFEST.styles.size[props.size];

		return classes;
	});

	const fullWidthClassValues = computed<string>(() => {
		return props.fullWidth
			? BUTTON_MANIFEST.styles.width.full
			: BUTTON_MANIFEST.styles.width.default;
	});

	const shadowClassValues = computed<string>(() => {
		return props.customColor
			? /*tw*/ 'shadow-md hover:shadow-xl'
			: BUTTON_MANIFEST.styles.shadow[props.kind][props.variant];
	});

	const classValues = computed<string>(() => {
		const kind = props.kind;
		const shape = props.shape;
		const variant = props.variant;

		return mergeTwClasses(
			sizeClassValues.value,
			cursorClassValues.value,
			shadowClassValues.value,
			fullWidthClassValues.value,
			BUTTON_MANIFEST.styles.base,
			BUTTON_MANIFEST.styles.shape[shape],
			BUTTON_MANIFEST.styles.variants[kind][variant],
			BUTTON_MANIFEST.styles.textColor[kind][variant],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (!props.customColor) {
			return {};
		}

		const style: StyleValue = {};

		if (props.customColor.background) {
			style.backgroundColor = getValidOrFallbackColorFromStr(props.customColor.background);
		}

		if (props.customColor.border) {
			style.borderColor = getValidOrFallbackColorFromStr(props.customColor.border);
		}

		if (props.customColor.text) {
			style.color = getValidOrFallbackColorFromStr(props.customColor.text);
		}

		return style;
	});
</script>
