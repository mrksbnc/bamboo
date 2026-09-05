<template>
	<Teleport to="body">
		<div :class="containerClasses" role="region" aria-label="Notifications" aria-live="polite">
			<div
				:class="[
					ALERT_MANIFEST.styles.container.stack,
					isExpanded && ALERT_MANIFEST.styles.container.stackExpanded,
				]"
				:style="stackStyle"
				@mouseenter="isExpanded = true"
				@mouseleave="isExpanded = false"
			>
				<TransitionGroup name="bo-alert">
					<div
						v-for="(alert, i) in visibleAlerts"
						:key="alert.id"
						:class="[
							ALERT_MANIFEST.styles.container.item,
							isExpanded && ALERT_MANIFEST.styles.container.itemExpanded,
						]"
						:style="itemStyle(i, visibleAlerts.length)"
					>
						<bo-alert
							:id="alert.id"
							:title="alert.title"
							:description="alert.description"
							:variant="alert.variant"
							:show-icon="alert.showIcon"
							:icon="alert.icon"
							:role="alert.role ?? 'status'"
						/>
					</div>
				</TransitionGroup>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import type { BoAlertContainerProps, BoAlertPosition } from '@workspace/bamboo-core';
import { ALERT_MANIFEST, mergeTwClasses } from '@workspace/bamboo-core';
import { computed, ref, type CSSProperties } from 'vue';
import { useAlert } from '../../composables/use-alert.js';
import BoAlert from './bo-alert.vue';

const ALERT_HEIGHT = 64;
const ALERT_OFFSET = 10;
const MAX_VISIBLE = 3;

const props = withDefaults(defineProps<BoAlertContainerProps>(), {
	position: 'top-right',
});

const { alerts } = useAlert();
const isExpanded = ref<boolean>(false);

const visibleAlerts = computed(() =>
	alerts.value.filter((alert) => alert.position === undefined || alert.position === props.position),
);

const containerClasses = computed<string>(() =>
	mergeTwClasses(
		ALERT_MANIFEST.styles.container.base,
		ALERT_MANIFEST.styles.container.position[props.position as BoAlertPosition],
	),
);

const isBottomPosition = computed<boolean>(() => props.position.startsWith('bottom'));

const stackStyle = computed<CSSProperties>(() => {
	const count = Math.min(visibleAlerts.value.length, MAX_VISIBLE);
	if (isExpanded.value) {
		return {
			'--stack-expanded-height': `${visibleAlerts.value.length * (ALERT_HEIGHT + 8)}px`,
		};
	}
	const stackedHeight = ALERT_HEIGHT + (count - 1) * ALERT_OFFSET;
	return {
		'--stack-height': `${stackedHeight}px`,
	};
});

function itemStyle(index: number, total: number): CSSProperties {
	const reverseIndex = total - 1 - index;

	if (isExpanded.value) {
		return {
			position: 'relative',
			top: 'auto',
			transform: 'none',
			opacity: '1',
			marginBottom: '8px',
		};
	}

	const offset = reverseIndex * ALERT_OFFSET;
	const scale = 1 - reverseIndex * 0.04;
	const opacity =
		reverseIndex >= MAX_VISIBLE ? '0' : reverseIndex === MAX_VISIBLE - 1 ? '0.5' : '1';
	const zIndex = 50 - reverseIndex;

	const translateY = isBottomPosition.value ? `-${offset}px` : `${offset}px`;

	return {
		position: 'absolute',
		top: '0',
		width: '100%',
		transform: `translateY(${translateY}) scale(${scale})`,
		opacity,
		zIndex: String(zIndex),
		pointerEvents: reverseIndex === 0 ? 'auto' : 'none',
	};
}
</script>
