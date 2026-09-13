<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:class="containerClassValues"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-busy="ariaBusy"
	>
		<span :class="ringClassValues" :style="ringStyle" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="10" cy="12" r="7" />
				<circle cx="14" cy="12" r="7" />
			</svg>
		</span>
		<slot>
			<bo-text v-if="loaderText" :font-size="labelFontSize" variant="inherit">
				{{ loaderText }}
			</bo-text>
		</slot>
	</div>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
	LOADING_SPINNER_MANIFEST,
	mergeTwClasses,
	type BoFontSize,
	type BoLoaderSize,
	type BoLoaderTextPosition,
	type BoLoaderVariant,
} from '@workspace/bamboo-core';
import { computed, type HTMLAttributes, type StyleValue } from 'vue';
import { BoText } from '../bo-text';

interface LoadingRingProps {
	id?: string;
	dataTestId?: string;
	size?: BoLoaderSize;
	variant?: BoLoaderVariant;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
	customColor?: string;
	role?: HTMLAttributes['role'];
	ariaLive?: HTMLAttributes['aria-live'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaBusy?: HTMLAttributes['aria-busy'];
	customContainerCssClass?: string;
	customRingClass?: string;
}

const props = withDefaults(defineProps<LoadingRingProps>(), {
	id: () => generateComponentId('loading-ring'),
	dataTestId: () => generateDataTestId('loading-ring'),
	role: () => LOADING_SPINNER_MANIFEST.defaults.role,
	size: () => LOADING_SPINNER_MANIFEST.defaults.size,
	variant: () => LOADING_SPINNER_MANIFEST.defaults.variant,
	textPosition: () => LOADING_SPINNER_MANIFEST.defaults.textPosition,
	ariaLabel: 'Loading',
});

const labelFontSize = computed<BoFontSize>(() => {
	return LOADING_SPINNER_MANIFEST.styles.labelFontSize[props.size || 'default'];
});
const containerClassValues = computed(() =>
	mergeTwClasses(
		'bo-loading-ring',
		`bo-loading-ring--${props.textPosition || 'after'}`,
		`bo-loading-ring--${props.variant || 'primary'}`,
		props.customContainerCssClass || '',
	),
);
const ringClassValues = computed(() =>
	mergeTwClasses(
		'bo-loading-ring__ring',
		`bo-loading-ring__ring--${props.size || 'default'}`,
		props.customRingClass || '',
	),
);
const ringStyle = computed<StyleValue>(() =>
	props.customColor ? { color: getValidOrFallbackColorFromStr(props.customColor) } : {},
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/loading-spinner.manifest.css';
</style>
