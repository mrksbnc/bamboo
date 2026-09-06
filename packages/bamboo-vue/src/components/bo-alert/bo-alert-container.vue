<template>
	<Teleport to="body">
		<div :class="containerClasses" role="region" aria-label="Notifications" aria-live="polite">
			<TransitionGroup name="bo-alert">
				<bo-alert
					v-for="alert in visibleAlerts"
					:id="alert.id"
					:key="alert.id"
					:class="ALERT_MANIFEST.styles.container.item"
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
import { ALERT_MANIFEST, mergeTwClasses } from '@workspace/bamboo-core';
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

const containerClasses = computed<string>(() =>
	mergeTwClasses(
		ALERT_MANIFEST.styles.container.base,
		ALERT_MANIFEST.styles.container.position[props.position as BoAlertPosition],
	),
);
</script>
