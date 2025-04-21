<template>
	<div
		class="bo-progress"
		:class="progressContainerClasses"
	>
		<div
			class="bo-progress-bar"
			:class="progressBarClasses"
			:style="{ width: computedWidth }"
			role="progressbar"
			:aria-valuenow="value"
			:aria-valuemin="0"
			:aria-valuemax="max"
			:data-testid="`bo-progress-bar-${id}`"
		>
			<span
				v-if="showLabel"
				class="bo-progress-label"
				:data-testid="`bo-progress-bar-label-${id}`"
			>
				{{ computedLabel }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, toRefs } from 'vue';
import { BoProgressBarVariant, type BoProgressBarProps } from './bo-progress-bar';

const props = withDefaults(defineProps<BoProgressBarProps>(), {
	max: 100,
	showLabel: false,
	striped: false,
	animated: false,
	size: () => BoSize.default,
	variant: () => BoProgressBarVariant.primary,
	label: undefined,
	indeterminate: false,
	id: '',
	disabled: false,
	showPercentage: false,
	error: '',
	description: '',
	helperTextId: '',
	helperTextClasses: '',
});

const {
	value,
	max,
	showLabel,
	striped,
	animated,
	size,
	variant,
	label,
	indeterminate,
	id,
	disabled,
	showPercentage,
	error,
	description,
	helperTextId,
	helperTextClasses,
} = toRefs(props);

const computedWidth = computed(() => {
	if (indeterminate.value) {
		return '75%';
	}
	// Calculate width based on value and max, clamped between 0-100%
	const percentage = Math.min(Math.max((value.value / max.value) * 100, 0), 100);
	return `${percentage}%`;
});

const computedLabel = computed(() => {
	if (label.value) {
		return label.value;
	}
	const percentage = Math.round((value.value / max.value) * 100);
	return `${percentage}%`;
});

const progressContainerClasses = computed(() => {
	return TailwindService.instance.merge(
		'w-full overflow-hidden rounded-full bg-blue-gray-50 dark:bg-blue-gray-800',
		sizeClasses.value,
	);
});

const progressBarClasses = computed(() => {
	return TailwindService.instance.merge(
		'flex items-center justify-center rounded-full font-sans text-xs font-medium text-white transition-all',
		variantClasses.value,
		striped.value ? stripedClasses.value : '',
		animated.value ? 'animate-progress' : '',
		indeterminate.value ? 'animate-indeterminate' : '',
		showLabel.value ? 'h-full' : '',
		{
			'cursor-pointer': !disabled.value,
			'cursor-not-allowed opacity-60': disabled.value,
		},
	);
});

const sizeClasses = computed(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return 'h-1';
		case BoSize.small:
			return 'h-1.5';
		case BoSize.large:
			return 'h-3.5';
		case BoSize.extra_large:
			return 'h-4';
		case BoSize.default:
		default:
			return 'h-2.5';
	}
});

const variantClasses = computed(() => {
	switch (variant.value) {
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

const stripedClasses = computed(() => {
	return 'bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]';
});
</script>

<style scoped>
@keyframes progress {
	0% {
		background-position: 1rem 0;
	}
	100% {
		background-position: 0 0;
	}
}

@keyframes indeterminate {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(400%);
	}
}

.animate-progress {
	animation: progress 1s linear infinite;
}

.animate-indeterminate {
	animation: indeterminate 1.5s infinite cubic-bezier(0.65, 0.815, 0.735, 0.395);
}
</style>
