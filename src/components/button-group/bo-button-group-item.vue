<template>
	<div
		role="button"
		:class="itemClasses"
		@click="onSelect"
	>
		<bo-text
			:value="label"
			:size="fontSize"
			:clickable="!disabled"
			:weight="BoFontWeight.medium"
			:cursor="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
		/>
	</div>
</template>

<script setup lang="ts">
import BoText from '@/components/text/bo-text.vue';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoButtonVariant } from '../button/bo-button.js';
import { BoFontSize, BoFontWeight } from '../text/bo-text.js';
import {
	BoButtonGroupItemProps,
	BoButtonGroupOrientation,
	BoButtonShape,
} from './bo-button-group.js';

const props = withDefaults(defineProps<BoButtonGroupItemProps>(), {
	size: () => BoSize.default,
	variant: () => BoButtonVariant.secondary,
	shape: () => BoButtonShape.rounded,
	position: () => ({
		index: -1,
		length: -1,
		isLast: false,
		isFirst: false,
		activeIndex: -1,
	}),
});

const emits = defineEmits<{
	(e: 'select', index: number): void;
}>();

const defaultClasses = /*tw*/ 'flex items-center justify-center max-h-fit duration-60 ';

const paddingClasses = computed<string>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return /*tw*/ 'px-2 py-1';
		case BoSize.small:
			return /*tw*/ 'px-3 py-1.5';
		case BoSize.large:
			return /*tw*/ 'px-4 py-2';
		case BoSize.extra_large:
			return /*tw*/ 'px-5 py-2.5';
		case BoSize.default:
		default:
			return /*tw*/ 'px-4 py-2';
	}
});

const fontSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
		case BoSize.small:
			return /*tw*/ BoFontSize.xs;
		case BoSize.large:
		case BoSize.extra_large:
			return /*tw*/ BoFontSize.base;
		case BoSize.default:
		default:
			return /*tw*/ BoFontSize.sm;
	}
});

const fontColorClasses = computed<string>(() => {
	switch (props.active) {
		case true:
			switch (props.variant) {
				case BoButtonVariant.secondary:
					return /*tw*/ 'text-neutral-600 dark:text-neutral-300';
				case BoButtonVariant.danger:
					return /*tw*/ 'text-red-600 dark:text-red-500';
				case BoButtonVariant.success:
					return /*tw*/ 'text-green-600 dark:text-green-500';
				case BoButtonVariant.warning:
					return /*tw*/ 'text-yellow-600 dark:text-yellow-500';
				case BoButtonVariant.dark:
					return /*tw*/ 'text-white dark:text-neutral-400';
				case BoButtonVariant.light:
					return /*tw*/ 'text-neutral-700 dark:text-neutral-300';
				case BoButtonVariant.primary:
				default:
					return /*tw*/ 'text-blue-600 dark:text-blue-500';
			}
		case false:
		default:
			return /*tw*/ 'text-neutral-700 dark:text-neutral-300';
	}
});

const hoverClasses = computed<string>(() => {
	if (props.disabled) {
		return /*tw*/ '';
	}

	switch (props.variant) {
		case BoButtonVariant.secondary:
			return /*tw*/ 'hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-neutral-100';
		case BoButtonVariant.danger:
			return /*tw*/ 'hover:bg-red-50 dark:hover:bg-red-600 hover:text-red-800 dark:hover:text-red-100';
		case BoButtonVariant.success:
			return /*tw*/ 'hover:bg-green-50 dark:hover:bg-green-600 hover:text-green-800 dark:hover:text-green-100';
		case BoButtonVariant.warning:
			return /*tw*/ 'hover:bg-yellow-50 dark:hover:bg-yellow-600 hover:text-yellow-800 dark:hover:text-yellow-100';
		case BoButtonVariant.dark:
			return /*tw*/ 'hover:bg-neutral-700 dark:hover:bg-neutral-600 hover:text-neutral-300 dark:hover:text-neutral-700';
		case BoButtonVariant.light:
			return /*tw*/ 'hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-100';
		case BoButtonVariant.primary:
		default:
			return /*tw*/ 'hover:bg-blue-50 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-blue-100';
	}
});

const borderColorClasses = computed<string>(() => {
	switch (props.active) {
		case true:
			switch (props.variant) {
				case BoButtonVariant.secondary:
					return /*tw*/ 'border-neutral-800 dark:border-neutral-600';
				case BoButtonVariant.danger:
					return /*tw*/ 'border-red-600 dark:border-red-600';
				case BoButtonVariant.success:
					return /*tw*/ 'border-green-600 dark:border-green-600';
				case BoButtonVariant.warning:
					return /*tw*/ 'border-yellow-600 dark:border-yellow-600';
				case BoButtonVariant.dark:
					return /*tw*/ 'border-neutral-600 dark:border-neutral-600';
				case BoButtonVariant.light:
					return /*tw*/ 'border-neutral-600 dark:border-neutral-400';
				case BoButtonVariant.primary:
				default:
					return /*tw*/ 'border-blue-600 dark:border-blue-600';
			}
		case false:
		default:
			switch (props.variant) {
				case BoButtonVariant.secondary:
					return /*tw*/ 'border-neutral-300 dark:border-neutral-800';
				case BoButtonVariant.danger:
					return /*tw*/ 'border-red-400 dark:border-red-700';
				case BoButtonVariant.success:
					return /*tw*/ 'border-green-400 dark:border-green-700';
				case BoButtonVariant.warning:
					return /*tw*/ 'border-yellow-400 dark:border-yellow-700';
				case BoButtonVariant.dark:
					return /*tw*/ 'border-neutral-700 dark:border-neutral-600';
				case BoButtonVariant.light:
					return /*tw*/ 'border-neutral-400 dark:border-neutral-800';
				case BoButtonVariant.primary:
				default:
					return /*tw*/ 'border-blue-400 dark:border-blue-700';
			}
	}
});

const borderRadiusClasses = computed<string>(() => {
	if (props.shape === BoButtonShape.rounded) {
		// Vertical orientation
		if (props.orientation === BoButtonGroupOrientation.vertical) {
			if (props.position.isFirst && props.position.isLast) {
				return /*tw*/ 'rounded-md';
			} else if (props.position.isFirst) {
				return /*tw*/ 'rounded-t-md';
			} else if (props.position.isLast) {
				return /*tw*/ 'rounded-b-md';
			}
		}

		// Horizontal orientation
		if (props.position.isFirst && props.position.isLast) {
			return /*tw*/ 'rounded-md';
		} else if (props.position.isFirst) {
			return /*tw*/ 'rounded-l-md';
		} else if (props.position.isLast) {
			return /*tw*/ 'rounded-r-md';
		}
	}

	return /*tw*/ 'rounded-none';
});

const borderClasses = computed<string>(() => {
	const { isFirst, isLast, activeIndex, index, length } = props.position;
	const isOnlyItem = isFirst && isLast;

	if (isOnlyItem || props.active) {
		return 'border';
	}

	const prevItemActive = index - 1 === activeIndex;
	const nextItemActive = index + 1 === activeIndex;

	let classes = [];

	if (length === 2 && !nextItemActive) {
		classes.push('border-r');
	}

	if (props.orientation === BoButtonGroupOrientation.vertical) {
		classes.push('border-x');

		if (isFirst) {
			classes.push('border-t');
		} else if (isLast) {
			classes.push('border-b');
		} else {
			if (!prevItemActive && !nextItemActive) {
				classes.push('border-y');
			} else if (prevItemActive) {
				classes.push('border-t-0 border-b');
			} else if (nextItemActive) {
				classes.push('border-b-0 border-t');
			}
		}

		return TailwindService.instance.merge(...classes);
	} else {
		classes.push('border-y');
	}

	if (isFirst) {
		classes.push('border-l');
	} else if (isLast) {
		classes.push('border-r');
	} else {
		if (!prevItemActive && !nextItemActive) {
			classes.push('border-x');
		} else if (prevItemActive) {
			classes.push('border-l-0 border-r');
		} else if (nextItemActive) {
			classes.push('border-r-0 border-l');
		}
	}

	return TailwindService.instance.merge(...classes);
});

const backgroundColorClasses = computed<string>(() => {
	switch (props.variant) {
		case BoButtonVariant.secondary:
			return /*tw*/ 'bg-neutral-50 dark:bg-neutral-700';
		case BoButtonVariant.danger:
			return /*tw*/ 'bg-red-50 dark:bg-red-700';
		case BoButtonVariant.success:
			return /*tw*/ 'bg-green-50 dark:bg-green-700';
		case BoButtonVariant.warning:
			return /*tw*/ 'bg-yellow-50 dark:bg-yellow-700';
		case BoButtonVariant.dark:
			return /*tw*/ 'bg-neutral-700 dark:bg-neutral-600';
		case BoButtonVariant.light:
			return /*tw*/ 'bg-neutral-50 dark:bg-neutral-800';
		case BoButtonVariant.primary:
		default:
			return /*tw*/ 'bg-blue-50 dark:bg-blue-700';
	}
});

const itemClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		defaultClasses,
		hoverClasses.value,
		borderClasses.value,
		paddingClasses.value,
		fontColorClasses.value,
		borderColorClasses.value,
		borderRadiusClasses.value,
		props.active ? backgroundColorClasses.value : '',
		props.disabled ? /*tw*/ 'cursor-not-allowed opacity-50' : /*tw*/ 'cursor-pointer',
	);
});

function onSelect() {
	if (props.disabled) {
		return;
	}
	emits('select', props.position.index);
}
</script>
