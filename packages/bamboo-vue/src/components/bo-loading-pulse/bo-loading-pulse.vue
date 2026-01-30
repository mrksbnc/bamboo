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
		<div :class="outerPulseContainerClassValues">
			<div
				v-for="(animation, index) in LOADING_PULSE_MANIFEST.styles.animation"
				:key="index"
				:class="mergeTwClasses(outerPulseClassValues, animation)"
				:style="styleValues"
			>
				<div :class="innerPulseClassValues" :style="styleValues"></div>
			</div>
		</div>
		<bo-text v-if="loaderText" :value="loaderText" :font-size="pulseLabelFontSize" />
	</div>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		getValidOrFallbackColorFromStr,
		LOADING_PULSE_MANIFEST,
		mergeTwClasses,
		type BoFontSize,
		type BoLoadingPulseProps,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoLoadingPulseProps>(), {
		id: () => generateComponentId('loading-pulse'),
		dataTestId: () => generateDataTestId('loading-pulse'),
		role: () => LOADING_PULSE_MANIFEST.defaults.role,
		size: () => LOADING_PULSE_MANIFEST.defaults.size,
		variant: () => LOADING_PULSE_MANIFEST.defaults.variant,
		textPosition: () => LOADING_PULSE_MANIFEST.defaults.textPosition,
	});

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
