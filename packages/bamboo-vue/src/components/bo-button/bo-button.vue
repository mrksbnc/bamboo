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
		<bo-loading-spinner v-if="isLoading && loaderType !== 'pulse'" :size="loaderSizeValue" />
		<bo-loading-pulse v-else-if="isLoading" :size="loaderSizeValue" />
		<bo-icon v-if="prefixIcon && !isLoading" :icon="prefixIcon" :size="iconSizeValue" />
		<slot></slot>
		<bo-icon v-if="suffixIcon" :icon="suffixIcon" :size="iconSizeValue" />
	</button>
</template>

<script setup lang="ts">
import {
	BUTTON_MANIFEST,
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
	type BoButtonProps,
	type BoIconSize,
	type BoLoaderSize,
} from '@workspace/bamboo-core';
import { computed, inject, useSlots, watch, type StyleValue } from 'vue';
import { BoIcon } from '../bo-icon';
import { BoLoadingPulse } from '../bo-loading-pulse';
import { BoLoadingSpinner } from '../bo-loading-spinner';

const groupSize = inject<BoButtonProps['size']>('buttonGroupSize');
const groupVariant = inject<BoButtonProps['variant']>('buttonGroupVariant');

const props = withDefaults(defineProps<BoButtonProps>(), {
	id: () => generateComponentId('button'),
	dataTestId: () => generateDataTestId('button'),
	kind: () => BUTTON_MANIFEST.defaults.kind,
	shape: () => BUTTON_MANIFEST.defaults.shape,
});

const slots = useSlots();
const sizeValue = computed(() => groupSize ?? props.size ?? BUTTON_MANIFEST.defaults.size);
const variantValue = computed(
	() => groupVariant ?? props.variant ?? BUTTON_MANIFEST.defaults.variant,
);

const isIconOnly = computed(() => {
	return !slots['default'] && (props.prefixIcon || props.suffixIcon);
});

const iconSizeValue = computed<BoIconSize>(() => {
	return BUTTON_MANIFEST.styles.iconSize[sizeValue.value] as BoIconSize;
});

const loaderSizeValue = computed<BoLoaderSize>(() => {
	const size = sizeValue.value || 'default';
	return BUTTON_MANIFEST.styles.loaderSize[size] as BoLoaderSize;
});

const isDisabled = computed<boolean>(() => {
	return props.disabled || props.isLoading;
});

const cursorClassValues = computed<string>(() => {
	if (props.isLoading) {
		return BUTTON_MANIFEST.styles.cursor.loading;
	}

	if (props.disabled) {
		return BUTTON_MANIFEST.styles.cursor.disabled;
	}

	return BUTTON_MANIFEST.styles.cursor.default;
});

const classValues = computed<string>(() => {
	const kind = props.kind ?? BUTTON_MANIFEST.defaults.kind;
	const shape = props.shape ?? BUTTON_MANIFEST.defaults.shape;
	const variant = variantValue.value;
	const size = sizeValue.value;

	const sizeClass = isIconOnly.value
		? BUTTON_MANIFEST.styles.iconOnlySize[size]
		: BUTTON_MANIFEST.styles.size[size];

	const widthClass = props.fullWidth ? BUTTON_MANIFEST.styles.width.full : '';
	const pressedClass = props.pressed ? BUTTON_MANIFEST.styles.pressed : '';

	return [
		BUTTON_MANIFEST.styles.base,
		sizeClass,
		BUTTON_MANIFEST.styles.shape[shape],
		BUTTON_MANIFEST.styles.variants[kind][variant],
		cursorClassValues.value,
		widthClass,
		pressedClass,
		props.kind === 'link' && props.linkVariantWithShadow
			? BUTTON_MANIFEST.styles.linkVariantWithShadow
			: '',
	]
		.filter(Boolean)
		.join(' ');
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

watch(
	isIconOnly,
	(iconOnly) => {
		if (import.meta.env.DEV && iconOnly && !props.ariaLabel && !props.ariaLabelledBy) {
			console.warn(
				'[bamboo] BoButton renders without visible text. Provide `aria-label` or `aria-labelledby` for an accessible name.',
			);
		}
	},
	{ immediate: true },
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/button.manifest.css';
</style>
