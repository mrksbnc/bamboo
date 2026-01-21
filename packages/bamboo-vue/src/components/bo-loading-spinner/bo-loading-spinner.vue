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
		<div :class="classValues" :style="styleValues" aria-hidden="true"></div>
		<bo-text
			v-if="loaderText"
			:value="loaderText"
			:font-size="spinnerLabelFontSize"
			:class="textClassValues"
		/>
	</div>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		getValidOrFallbackColorFromStr,
		LOADING_SPINNER_MANIFEST,
		mergeTwClasses,
		type BoFontSize,
		type BoLoadingSpinnerProps,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: () => generateComponentId('loading-spinner'),
		dataTestId: () => generateDataTestId('loading-spinner'),
		role: () => LOADING_SPINNER_MANIFEST.defaults.role,
		size: () => LOADING_SPINNER_MANIFEST.defaults.size,
		variant: () => LOADING_SPINNER_MANIFEST.defaults.variant,
		textPosition: () => LOADING_SPINNER_MANIFEST.defaults.textPosition,
	});

	const spinnerLabelFontSize = computed<BoFontSize>(() => {
		return LOADING_SPINNER_MANIFEST.styles.labelFontSize[props.size || 'default'];
	});

	const containerClassValues = computed<string>(() => {
		return mergeTwClasses(
			LOADING_SPINNER_MANIFEST.styles.container,
			LOADING_SPINNER_MANIFEST.styles.textPosition[props.textPosition || 'after'],
		);
	});

	const textClassValues = computed<string>(() => {
		return LOADING_SPINNER_MANIFEST.styles.text;
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			LOADING_SPINNER_MANIFEST.styles.base,
			LOADING_SPINNER_MANIFEST.styles.size[props.size || 'default'],
			LOADING_SPINNER_MANIFEST.styles.variant[props.variant || 'primary'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				color: getValidOrFallbackColorFromStr(props.customColor),
			};
		}

		return {};
	});
</script>
