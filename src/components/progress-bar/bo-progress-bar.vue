<template>
	<div
		:class="[
			shapeClasses,
			'bo-progress-bar__container bg-neutral-100 dark:bg-neutral-800',
			'border border-neutral-200 dark:border-neutral-700',
		]"
	>
		<div
			:class="[
				'bo-progress-bar__progress rounded-md p-0.5',
				progressBarWidth,
				progressDefaultClasses,
				progressBackgroundColorClasses,
			]"
		>
			<bo-text
				:value="computedLabel"
				:size="BoFontSize.xs"
				:color="variant === BoProgressBarVariant.light ? BoTextColor.inherit : BoTextColor.light"
				:weight="BoFontWeight.bold"
				class="bo-progress-label"
				:data-testid="`bo-progress-bar-label-${id}`"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { computed } from 'vue';
import {
	BoProgressBarShape,
	BoProgressBarVariant,
	type BoProgressBarProps,
} from './bo-progress-bar.js';

const props = withDefaults(defineProps<BoProgressBarProps>(), {
	max: 100,
	value: 0,
	showLabel: true,
	shape: BoProgressBarShape.rounded,
	id: () => IdentityService.instance.getComponentId(),
});

// 'w-full overflow-hidden rounded-full bg-blue-gray-50 dark:bg-blue-gray-800',
const progressContainerClasses = 'w-full overflow-hidden rounded-full';

const progressDefaultClasses = 'flex items-center justify-center  transition-all animate-progress';

const shapeClasses = computed<string>(() => {
	switch (props.shape) {
		case BoProgressBarShape.square:
			return 'rounded-none';
		case BoProgressBarShape.rounded:
		default:
			return 'rounded-md';
	}
});

const progressBackgroundColorClasses = computed<string>(() => {
	switch (props.variant) {
		case BoProgressBarVariant.secondary:
			return 'bg-gray-500';
		case BoProgressBarVariant.success:
			return 'bg-green-500';
		case BoProgressBarVariant.danger:
			return 'bg-red-500';
		case BoProgressBarVariant.warning:
			return 'bg-yellow-500';
		case BoProgressBarVariant.info:
			return 'bg-blue-400';
		case BoProgressBarVariant.light:
			return 'bg-gray-200 text-gray-700';
		case BoProgressBarVariant.dark:
			return 'bg-gray-900';
		case BoProgressBarVariant.primary:
		default:
			return 'bg-blue-500';
	}
});

const computedLabel = computed<string>(() => {
	if (props.label) {
		return props.label;
	}

	const percentage = Math.round((props.value / props.max) * 100);
	return `${percentage}%`;
});

const progressBarWidth = computed<string>(() => {
	const percentage = Math.round((props.value / props.max) * 100);
	return `w-[${percentage}%]`;
});
</script>

<style scoped>
.animate-progress {
	animation: progress 1s linear infinite;
}

.animate-indeterminate {
	animation: indeterminate 1.5s infinite cubic-bezier(0.65, 0.815, 0.735, 0.395);
}
</style>
