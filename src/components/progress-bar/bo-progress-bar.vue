<template>
	<div
		:id="id"
		:class="containerClasses"
		:data-testid="constructAttribute(id, 'progress-bar')"
		role="progressbar"
		:aria-valuenow="value"
		:aria-valuemin="0"
		:aria-valuemax="max"
		:aria-label="computedAriaLabel"
	>
		<div
			:class="progressBarClasses"
			:data-testid="constructAttribute(id, 'progress-bar-fill')"
		/>
		<bo-text
			v-if="showLabel"
			:value="computedLabel"
			:size="textSize"
			:color="textColor"
			:weight="BoFontWeight.semibold"
			:class="PROGRESS_BAR_STYLE.layout.label"
			:data-testid="constructAttribute(id, 'progress-bar-label')"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes.js';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import {
	BoProgressBarShape,
	BoProgressBarVariant,
	type BoProgressBarProps,
} from './bo-progress-bar.js';

const props = withDefaults(defineProps<BoProgressBarProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	max: 100,
	value: 0,
	showLabel: true,
	shape: BoProgressBarShape.rounded,
	variant: BoProgressBarVariant.primary,
	size: BoSize.default,
});

const { constructAttribute } = useAttributes();

const PROGRESS_BAR_STYLE = {
	layout: {
		container: /*tw*/ 'bo-progress-bar relative overflow-hidden',
		fill: /*tw*/ 'bo-progress-bar__fill h-full transition-all duration-300 ease-out',
		label: /*tw*/ 'bo-progress-bar__label absolute transform -translate-y-1/2 left-1/2 top-1/2',
	},
	size: {
		container: {
			[BoSize.extra_small]: /*tw*/ 'bo-progress-bar--extra-small h-2',
			[BoSize.small]: /*tw*/ 'bo-progress-bar--small h-3',
			[BoSize.default]: /*tw*/ 'bo-progress-bar--default h-5',
			[BoSize.large]: /*tw*/ 'bo-progress-bar--large h-6',
			[BoSize.extra_large]: /*tw*/ 'bo-progress-bar--extra-large h-8',
		},
	},
	shape: {
		[BoProgressBarShape.rounded]: /*tw*/ 'bo-progress-bar--rounded rounded-md',
		[BoProgressBarShape.square]: /*tw*/ 'bo-progress-bar--square rounded-none',
	},
	variant: {
		[BoProgressBarVariant.primary]: /*tw*/ 'bo-progress-bar--primary bg-blue-600 dark:bg-blue-700',
		[BoProgressBarVariant.secondary]:
			/*tw*/ 'bo-progress-bar--secondary bg-neutral-500 dark:bg-neutral-600',
		[BoProgressBarVariant.success]:
			/*tw*/ 'bo-progress-bar--success bg-green-600 dark:bg-green-700',
		[BoProgressBarVariant.danger]: /*tw*/ 'bo-progress-bar--danger bg-red-600 dark:bg-red-700',
		[BoProgressBarVariant.warning]:
			/*tw*/ 'bo-progress-bar--warning bg-yellow-500 dark:bg-yellow-600',
		[BoProgressBarVariant.info]: /*tw*/ 'bo-progress-bar--info bg-sky-600 dark:bg-sky-700',
		[BoProgressBarVariant.light]:
			/*tw*/ 'bo-progress-bar--light bg-white text-neutral-700 border border-neutral-300 dark:bg-neutral-100 dark:text-neutral-800',
		[BoProgressBarVariant.dark]: /*tw*/ 'bo-progress-bar--dark bg-neutral-900 dark:bg-black',
	},
	state: {
		background:
			/*tw*/ 'bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700',
	},
} as const;

const progressPercentage = computed<number>(() => {
	return Math.min(Math.max((props.value / props.max) * 100, 0), 100);
});

const computedLabel = computed<string>(() => {
	if (props.label) {
		return props.label;
	}
	return `${Math.round(progressPercentage.value)}%`;
});

const computedAriaLabel = computed<string>(() => {
	return `Progress: ${computedLabel.value}`;
});

const textSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.large:
			return BoFontSize.sm;
		case BoSize.extra_large:
			return BoFontSize.base;
		case BoSize.small:
		case BoSize.extra_small:
		case BoSize.default:
		default:
			return BoFontSize.xs;
	}
});

const textColor = computed<BoTextColor>(() => {
	return props.variant === BoProgressBarVariant.light ? BoTextColor.default : BoTextColor.light;
});

const customStyleClasses = computed<string>(() => {
	let classes = '';

	if (props.color) {
		classes = TailwindService.instance.merge(classes, /*tw*/ `bg-[${props.color}]`);
	}

	if (props.fontColor) {
		classes = TailwindService.instance.merge(classes, /*tw*/ `text-[${props.fontColor}]`);
	}

	if (props.tailwindClass) {
		classes = TailwindService.instance.merge(classes, props.tailwindClass);
	}

	return classes;
});

const containerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		PROGRESS_BAR_STYLE.layout.container,
		PROGRESS_BAR_STYLE.size.container[props.size],
		PROGRESS_BAR_STYLE.shape[props.shape],
		PROGRESS_BAR_STYLE.state.background,
	);
});

const progressBarClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		PROGRESS_BAR_STYLE.layout.fill,
		PROGRESS_BAR_STYLE.shape[props.shape],
		PROGRESS_BAR_STYLE.variant[props.variant],
		customStyleClasses.value,
		/*tw*/ `w-[${progressPercentage.value}%]`,
	);
});
</script>
