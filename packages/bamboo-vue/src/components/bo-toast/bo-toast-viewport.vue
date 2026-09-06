<template>
	<Teleport to="body">
		<div
			:data-position="position"
			:aria-label="label"
			role="region"
			aria-live="polite"
			:class="viewportClasses"
		>
			<TransitionGroup name="bo-toast">
				<slot />
			</TransitionGroup>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import {
	TOAST_MANIFEST,
	mergeTwClasses,
	type BoToastPosition,
	type BoToastViewportProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoToastViewportProps>(), {
	position: 'bottom-right' as BoToastPosition,
	label: 'Notifications',
});

const viewportClasses = computed(() =>
	mergeTwClasses(
		TOAST_MANIFEST.styles.viewport,
		TOAST_MANIFEST.styles.viewportPosition[props.position || 'bottom-right'],
	),
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toast.manifest.css';
</style>
