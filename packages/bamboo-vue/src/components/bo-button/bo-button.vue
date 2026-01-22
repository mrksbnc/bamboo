<template>
	<button
		:id="id"
		:type="type"
		:name="name"
		:disabled="disabled || isLoading"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:aria-disabled="disabled || isLoading ? 'true' : undefined"
		:aria-pressed="pressed"
		:aria-expanded="ariaExpanded"
		:aria-haspopup="ariaHasPopup"
		:aria-live="ariaLive"
		:aria-busy="isLoading ? 'true' : undefined"
		:role="role"
		:tabindex="tabIndex"
		:accesskey="accessKey"
		:data-testid="dataTestId"
		:class="buttonClasses"
		:style="styleValues"
	>
		<span v-if="isLoading" class="bo-button__loader">
			<bo-loading-spinner v-if="loaderType === 'spinner'" :size="loaderSizeValue" />
			<bo-loading-pulse v-else :size="loaderSizeValue" />
		</span>
		<span v-if="prefixIcon && !isLoading" class="bo-button__prefix">
			<bo-icon :icon="prefixIcon" :size="iconSizeValue" />
		</span>
		<span v-if="label || $slots.default" class="bo-button__label">
			<slot>{{ label }}</slot>
		</span>
		<span v-if="suffixIcon" class="bo-button__suffix">
			<bo-icon :icon="suffixIcon" :size="iconSizeValue" />
		</span>
	</button>
</template>

<script setup lang="ts">
	import {
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
	import { BoLoadingPulse } from '../bo-loading-pulse';
	import { BoLoadingSpinner } from '../bo-loading-spinner';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => generateComponentId('button'),
		dataTestId: () => generateDataTestId('button'),
		size: 'default',
		variant: 'primary',
		kind: 'filled',
		shape: 'default',
		type: 'button',
		role: 'button',
		loaderType: 'spinner',
		disabled: false,
		isLoading: false,
		fullWidth: false,
		linkVariantWithShadow: false,
		ariaLive: 'polite',
	});

	const slots = useSlots();

	// Determine the actual kind to use (shape takes precedence for backward compatibility)
	const effectiveKind = computed(() => {
		if (props.shape && props.shape !== 'default') {
			// Map shape to kind for backward compatibility
			if (props.shape === 'outline') return 'outline';
			if (props.shape === 'pill') return 'pill';
			if (props.shape === 'flat') return 'ghost';
		}
		return props.kind || 'filled';
	});

	// Determine if button is icon-only
	const isIconOnly = computed(() => {
		return !props.label && !slots?.default && (props.prefixIcon || props.suffixIcon);
	});

	// Get icon size based on button size
	const iconSizeValue = computed<BoIconSize>(() => {
		const size = props.size || 'default';
		return BUTTON_MANIFEST.styles.iconSize[size] as BoIconSize;
	});

	// Get loader size (convert from icon size string to loader size)
	const loaderSizeValue = computed<BoLoaderSize>(() => {
		const size = props.size || 'default';
		return BUTTON_MANIFEST.styles.iconSize[size] as BoLoaderSize;
	});

	// Build button classes
	const buttonClasses = computed(() => {
		const classes = [
			BUTTON_MANIFEST.styles.base,
			BUTTON_MANIFEST.styles.shape[props.shape || 'default'],
			isIconOnly.value
				? BUTTON_MANIFEST.styles.iconOnlySize[props.size || 'default']
				: BUTTON_MANIFEST.styles.size[props.size || 'default'],
			BUTTON_MANIFEST.styles.variants[effectiveKind.value][props.variant || 'primary'],
			BUTTON_MANIFEST.styles.textColor[effectiveKind.value][props.variant || 'primary'],
		];

		// Add shadow classes
		const variant = props.variant || 'primary';
		const isLinkVariant = variant.startsWith('link');

		if (isLinkVariant && props.linkVariantWithShadow) {
			classes.push('shadow-md');
		} else if (!isLinkVariant) {
			classes.push(BUTTON_MANIFEST.styles.shadow[effectiveKind.value][variant]);
		} else {
			classes.push(BUTTON_MANIFEST.styles.shadow[effectiveKind.value][variant]);
		}

		// Add pressed state
		if (props.pressed) {
			classes.push(BUTTON_MANIFEST.styles.pressed);
		}

		if (props.fullWidth) {
			classes.push('w-full');
		}

		return mergeTwClasses(...classes);
	});

	// Custom styles for custom colors
	const styleValues = computed<StyleValue>(() => {
		if (!props.customColor) return {};

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

<style scoped>
	.bo-button__loader,
	.bo-button__prefix,
	.bo-button__suffix {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.bo-button__label {
		display: inline-flex;
		align-items: center;
	}
</style>
