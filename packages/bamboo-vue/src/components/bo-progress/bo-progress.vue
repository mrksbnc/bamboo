<template>
	<div :id="id" :data-testid="dataTestId">
		<div v-if="label || showValue" :class="PROGRESS_MANIFEST.styles.label">
			<bo-text v-if="label" font-size="sm" variant="secondary">{{ label }}</bo-text>
			<bo-text v-if="showValue" font-size="sm" variant="secondary"> {{ percentage }}% </bo-text>
		</div>
		<div
			:role="role"
			:aria-label="ariaLabel ?? label"
			:aria-valuenow="value"
			:aria-valuemin="0"
			:aria-valuemax="max"
			:class="trackClasses"
		>
			<div :class="indicatorClasses" :style="{ transform: `translateX(-${100 - percentage}%)` }" />
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	PROGRESS_MANIFEST,
	type BoProgressProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoProgressProps>(), {
	id: () => generateComponentId('progress'),
	dataTestId: () => generateDataTestId('progress'),
	variant: () => PROGRESS_MANIFEST.defaults.variant,
	size: () => PROGRESS_MANIFEST.defaults.size,
	max: () => PROGRESS_MANIFEST.defaults.max,
	showValue: () => PROGRESS_MANIFEST.defaults.showValue,
	role: () => PROGRESS_MANIFEST.defaults.role,
	value: 0,
});

const percentage = computed<number>(() => {
	return Math.round(Math.min(100, Math.max(0, ((props.value ?? 0) / (props.max ?? 100)) * 100)));
});

const trackClasses = computed<string>(() => {
	return mergeTwClasses(
		PROGRESS_MANIFEST.styles.track,
		PROGRESS_MANIFEST.styles.size[props.size || 'default'],
	);
});

const indicatorClasses = computed<string>(() => {
	return mergeTwClasses(
		PROGRESS_MANIFEST.styles.indicator,
		PROGRESS_MANIFEST.styles.variant[props.variant || 'primary'],
	);
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/progress.manifest.css';
</style>
