<template></template>

<script lang="ts" setup>
	import {
		getValidOrFallbackColorFromStr,
		LOADING_PULSE_MANIFEST,
		mergeTwClasses,
		type BoFontSize,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';

	const pulseLabelFontSize = computed<BoFontSize>(() => {
		return LOADING_PULSE_MANIFEST.styles.labelFontSize[props.size || 'default'];
	});

	const containerClassValues = computed<string>(() => {
		return mergeTwClasses(
			LOADING_PULSE_MANIFEST.styles.container,
			LOADING_PULSE_MANIFEST.styles.textPosition[props.textPosition || 'after'],
		);
	});

	const outerPulseContainerClassValues = computed<string>(() => {
		return mergeTwClasses(
			LOADING_PULSE_MANIFEST.styles.base,
			LOADING_PULSE_MANIFEST.styles.size[props.size || 'default'],
		);
	});

	const outerPulseClassValues = computed<string>(() => {
		if (props.customColor) {
			return LOADING_PULSE_MANIFEST.styles.dot;
		}
		return mergeTwClasses(
			LOADING_PULSE_MANIFEST.styles.dot,
			LOADING_PULSE_MANIFEST.styles.variant[props.variant || 'primary'],
		);
	});

	const innerPulseClassValues = computed<string>(() => {
		if (props.customColor) {
			return mergeTwClasses(
				LOADING_PULSE_MANIFEST.styles.dot,
				LOADING_PULSE_MANIFEST.styles.size[props.size || 'default'],
			);
		}
		return mergeTwClasses(
			LOADING_PULSE_MANIFEST.styles.dot,
			LOADING_PULSE_MANIFEST.styles.size[props.size || 'default'],
			LOADING_PULSE_MANIFEST.styles.variant[props.variant || 'primary'],
		);
	});

	const classValues = computed<string>(() => {
		return innerPulseClassValues.value;
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				backgroundColor: getValidOrFallbackColorFromStr(props.customColor),
			};
		}
		return {};
	});
</script>
