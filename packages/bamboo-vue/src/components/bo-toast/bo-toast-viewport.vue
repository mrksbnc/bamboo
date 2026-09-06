<template>
	<Teleport to="body">
		<div
			:data-position="position"
			:aria-label="label"
			role="region"
			aria-live="polite"
			:class="viewportClasses"
		>
			<TransitionGroup name="bo-toast" tag="div" class="w-full">
				<BoToast
					v-for="toast in visibleToasts"
					:key="toast.id"
					:id="toast.id"
					:title="toast.title"
					:description="toast.description"
					:variant="toast.variant"
					:closable="toast.closable"
					:close-aria-label="toast.closeAriaLabel"
					:role="toast.role"
					:duration="0"
					@close="dismiss(toast.id)"
				/>
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
import { useToast } from '../../composables/use-toast.js';
import BoToast from './bo-toast.vue';

const props = withDefaults(defineProps<BoToastViewportProps>(), {
	position: 'bottom-right' as BoToastPosition,
	label: 'Notifications',
});
const { toasts, dismiss } = useToast();
const visibleToasts = computed(() => {
	return toasts.value.filter(
		(toast) => toast.position === undefined || toast.position === props.position,
	);
});

const viewportClasses = computed(() => {
	return mergeTwClasses(
		TOAST_MANIFEST.styles.viewport,
		TOAST_MANIFEST.styles.viewportPosition[props.position || 'bottom-right'],
	);
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toast.manifest.css';
</style>
