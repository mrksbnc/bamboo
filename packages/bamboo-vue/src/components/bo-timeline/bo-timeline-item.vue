<template>
	<div :id="id" :data-testid="dataTestId" :role="role" :class="itemClasses">
		<!-- Connector line (not shown for last item) -->
		<div v-if="!isLast" :class="connectorClasses"></div>

		<!-- Marker -->
		<div :class="markerClasses" :style="markerStyle">
			<bo-icon v-if="icon" :icon="icon" :size="iconSize" />
			<div v-else-if="completed" class="w-2 h-2 bg-current rounded-full"></div>
			<div v-else-if="active" class="w-2 h-2 bg-current rounded-full"></div>
		</div>

		<!-- Content -->
		<div :class="contentClasses">
			<div v-if="title || $slots.title" :class="titleClasses">
				<slot name="title">{{ title }}</slot>
			</div>

			<div v-if="description || $slots.description" :class="descriptionClasses">
				<slot name="description">{{ description }}</slot>
			</div>

			<div v-if="time || $slots.time" :class="timeClasses">
				<slot name="time">{{ time }}</slot>
			</div>

			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		TIMELINE_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoIconSize,
		type BoTimelineItemProps,
	} from '@workspace/bamboo-core';
	import { computed, inject, type StyleValue } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoTimelineItemProps & { isLast?: boolean }>(), {
		role: 'listitem',
		isLast: false,
	});

	// Inject context from parent timeline
	const timelineOrientation = inject<'vertical' | 'horizontal'>('timelineOrientation', 'vertical');
	const timelineSize = inject<'sm' | 'default' | 'lg'>('timelineSize', 'default');

	// Computed
	const id = computed(() => props.id ?? generateComponentId('timeline-item'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoTimelineItem'));

	const itemClasses = computed(() =>
		mergeTwClasses(
			TIMELINE_MANIFEST.styles.item.base,
			TIMELINE_MANIFEST.styles.item.orientation[timelineOrientation],
		),
	);

	const markerClasses = computed(() => {
		return mergeTwClasses(
			TIMELINE_MANIFEST.styles.item.marker.base,
			TIMELINE_MANIFEST.styles.item.marker.size[timelineSize],
			props.active ? TIMELINE_MANIFEST.styles.item.marker.active : '',
			props.completed ? TIMELINE_MANIFEST.styles.item.marker.completed : '',
		);
	});

	const markerStyle = computed((): StyleValue => {
		if (props.color) {
			return {
				borderColor: props.color,
				backgroundColor: props.color,
				color: 'white',
			};
		}
		return {};
	});

	const connectorClasses = computed(() =>
		mergeTwClasses(
			TIMELINE_MANIFEST.styles.item.connector.base,
			TIMELINE_MANIFEST.styles.item.connector.orientation[timelineOrientation],
		),
	);

	const contentClasses = computed(() =>
		mergeTwClasses(
			TIMELINE_MANIFEST.styles.item.content.base,
			TIMELINE_MANIFEST.styles.item.content.orientation[timelineOrientation],
		),
	);

	const titleClasses = computed(() => TIMELINE_MANIFEST.styles.item.title);
	const descriptionClasses = computed(() => TIMELINE_MANIFEST.styles.item.description);
	const timeClasses = computed(() => TIMELINE_MANIFEST.styles.item.time);

	const iconSize = computed((): BoIconSize => {
		switch (timelineSize) {
			case 'sm':
				return 'xs';
			case 'lg':
				return 'sm';
			default:
				return 'xs';
		}
	});
</script>
