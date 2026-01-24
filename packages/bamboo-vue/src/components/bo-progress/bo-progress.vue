<template>
	<div :id="id" :data-testid="dataTestId" :class="baseClasses">
		<div :class="trackClasses">
			<div
				:role="role"
				:aria-valuenow="indeterminate ? undefined : value"
				:aria-valuemin="indeterminate ? undefined : 0"
				:aria-valuemax="indeterminate ? undefined : max"
				:aria-label="ariaLabel"
				:class="barClasses"
				:style="barStyle"
			>
				<div v-if="showLabel || label" :class="labelClasses">
					{{ displayLabel }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		PROGRESS_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoProgressProps,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';

	const props = withDefaults(defineProps<BoProgressProps>(), {
		...PROGRESS_MANIFEST.defaults,
	});

	// Computed
	const id = computed(() => props.id ?? generateComponentId('progress'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoProgress'));

	const percentage = computed(() => {
		if (props.indeterminate) return 0;
		return Math.min(Math.max((props.value! / props.max!) * 100, 0), 100);
	});

	const displayLabel = computed(() => {
		if (props.label) return props.label;
		if (props.showLabel) return `${Math.round(percentage.value)}%`;
		return '';
	});

	const ariaLabel = computed(() => {
		if (props.indeterminate) return 'Loading...';
		return `${Math.round(percentage.value)}% complete`;
	});

	const baseClasses = computed(() => PROGRESS_MANIFEST.styles.base);

	const trackClasses = computed(() =>
		mergeTwClasses(PROGRESS_MANIFEST.styles.track, PROGRESS_MANIFEST.styles.bar.size[props.size!]),
	);

	const barClasses = computed(() => {
		return mergeTwClasses(
			PROGRESS_MANIFEST.styles.bar.base,
			PROGRESS_MANIFEST.styles.bar.variant[props.variant!],
			props.indeterminate ? PROGRESS_MANIFEST.styles.bar.indeterminate : '',
			!props.indeterminate && props.striped ? PROGRESS_MANIFEST.styles.bar.striped : '',
			!props.indeterminate && props.animated ? PROGRESS_MANIFEST.styles.bar.animated : '',
		);
	});

	const barStyle = computed((): StyleValue => {
		if (props.indeterminate) {
			return { width: '100%' };
		}
		return { width: `${percentage.value}%` };
	});

	const labelClasses = computed(() =>
		mergeTwClasses(
			PROGRESS_MANIFEST.styles.label.base,
			PROGRESS_MANIFEST.styles.label.size[props.size!],
		),
	);
</script>

<style scoped>
	@keyframes progress-indeterminate {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}
</style>
