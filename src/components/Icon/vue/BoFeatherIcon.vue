<template>
	<!-- NOTE: These icons are part of the feather icon set. -->
	<svg
		v-if="name === Icon.activity"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		:stroke-width="iconStrokeStyle"
		:stroke="iconColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="bo-icon bo-icon--activity"
	>
		<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
	</svg>
	<svg
		v-else-if="name === Icon.airplay"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="iconStrokeStyle"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="bo-icon bo-icon--airplay"
	>
		<path
			d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
		></path>
		<polygon points="12 15 17 21 7 21 12 15"></polygon>
	</svg>
	<svg
		v-else-if="name === Icon.alert_circle"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="iconStrokeStyle"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="feather feather-alert-circle"
	>
		<circle
			cx="12"
			cy="12"
			r="10"
		></circle>
		<line
			x1="12"
			y1="8"
			x2="12"
			y2="12"
		></line>
		<line
			x1="12"
			y1="16"
			x2="12.01"
			y2="16"
		></line>
	</svg>
	<svg
		v-else-if="name === Icon.alert_octagon"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="iconStrokeStyle"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="bo-icon bo-icon--alert-octagon"
	>
		<polygon
			points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
		></polygon>
		<line
			x1="12"
			y1="8"
			x2="12"
			y2="12"
		></line>
		<line
			x1="12"
			y1="16"
			x2="12.01"
			y2="16"
		></line>
	</svg>
	<svg
		v-else-if="name === Icon.alert_triangle"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="iconStrokeStyle"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="bo-icon bo-icon--alert-triangle"
	>
		<path
			d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
		></path>
		<line
			x1="12"
			y1="9"
			x2="12"
			y2="13"
		></line>
		<line
			x1="12"
			y1="17"
			x2="12.01"
			y2="17"
		></line>
	</svg>
	<svg
		v-else-if="name === Icon.align_center"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="iconStrokeStyle"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="bo-icon bo-icon--align-center"
	>
		<line
			x1="18"
			y1="10"
			x2="6"
			y2="10"
		></line>
		<line
			x1="21"
			y1="6"
			x2="3"
			y2="6"
		></line>
		<line
			x1="21"
			y1="14"
			x2="3"
			y2="14"
		></line>
		<line
			x1="18"
			y1="18"
			x2="6"
			y2="18"
		></line>
	</svg>
	<svg
		v-else-if="name === Icon.align_justify"
		xmlns="http://www.w3.org/2000/svg"
		:width="iconSize"
		:height="iconSize"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="iconStrokeStyle"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="bo-icon bo-icon--align-justify"
	>
		<line
			x1="21"
			y1="10"
			x2="3"
			y2="10"
		></line>
		<line
			x1="21"
			y1="6"
			x2="3"
			y2="6"
		></line>
		<line
			x1="21"
			y1="14"
			x2="3"
			y2="14"
		></line>
		<line
			x1="21"
			y1="18"
			x2="3"
			y2="18"
		></line>
	</svg>
</template>

<script setup lang="ts">
import { IconSize, IconStrokeStyle, type Icon } from '@/components/Icon';
import { type PropType, toRefs, computed } from 'vue';

const props = defineProps({
	name: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<IconSize>,
		default: () => IconSize.md,
	},
	color: {
		type: String,
		default: () => null,
	},
	strokeStyle: {
		type: String as PropType<IconStrokeStyle>,
		default: () => IconStrokeStyle.normal,
	},
});

const { name, size, color, strokeStyle } = toRefs(props);

const iconSize = computed<string>(() => {
	switch (size.value) {
		case IconSize.xs:
			return '8';
		case IconSize.sm:
			return '12';
		case IconSize.md:
			return '16';
		case IconSize.lg:
			return '20';
		case IconSize.xl:
			return '24';
		case IconSize.xxl:
			return '32';
		default:
			return '14';
	}
});

const iconStrokeStyle = computed(() => {
	switch (strokeStyle.value) {
		case IconStrokeStyle.thin:
			return '1';
		case IconStrokeStyle.normal:
			return '2';
		case IconStrokeStyle.bold:
			return '3';
		default:
			return '2';
	}
});

const iconColor = computed(() => {
	return color.value ?? 'var(--icon-color)';
});
</script>
