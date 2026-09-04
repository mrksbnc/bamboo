<template>
	<Teleport to="body">
		<div
			:class="[
				'pointer-events-none fixed z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2',
				positionClasses,
			]"
			role="region"
			aria-label="Notifications"
			aria-live="polite"
		>
			<TransitionGroup name="bo-alert">
				<bo-alert
					v-for="alert in visibleAlerts"
					:id="alert.id"
					:key="alert.id"
					class="pointer-events-auto"
					:title="alert.title"
					:description="alert.description"
					:variant="alert.variant"
					:show-icon="alert.showIcon"
					:icon="alert.icon"
					:role="alert.role ?? 'status'"
				/>
			</TransitionGroup>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import type { BoAlertContainerProps, BoAlertPosition } from '@workspace/bamboo-core';
import { computed } from 'vue';
import { useAlert } from '../../composables/use-alert.js';
import BoAlert from './bo-alert.vue';

const props = withDefaults(defineProps<BoAlertContainerProps>(), {
	position: 'top-right',
});

const { alerts } = useAlert();

const visibleAlerts = computed(() =>
	alerts.value.filter((alert) => alert.position === undefined || alert.position === props.position),
);

const positionClasses = computed<string>(() => {
	const positions: Record<BoAlertPosition, string> = {
		'top-left': 'start-4 top-4 items-start',
		'top-center': 'start-1/2 top-4 -translate-x-1/2 items-center',
		'top-right': 'end-4 top-4 items-end',
		'bottom-left': 'bottom-4 start-4 items-start',
		'bottom-center': 'bottom-4 start-1/2 -translate-x-1/2 items-center',
		'bottom-right': 'bottom-4 end-4 items-end',
	};

	return positions[props.position];
});
</script>

<style scoped>
.bo-alert-enter-active,
.bo-alert-leave-active {
	transition:
		opacity 0.2s ease,
		transform 0.2s ease;
}

.bo-alert-enter-from,
.bo-alert-leave-to {
	opacity: 0;
	transform: translateY(-8px);
}

.bo-alert-move {
	transition: transform 0.2s ease;
}
</style>
