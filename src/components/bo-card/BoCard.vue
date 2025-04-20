<template>
	<div
		class="bo-card__container relative flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
		:class="containerClasses"
		:style="styleWidth"
		@click="handleClick"
		:role="role"
		:tabindex="tabindex"
		:aria-disabled="ariaDisabled"
		:aria-labelledby="ariaLabelledBy"
		@keydown.enter="clickable && !disabled ? handleClick($event) : undefined"
		@keydown.space="clickable && !disabled ? handleClick($event) : undefined"
	>
		<div class="bo-card__content flex flex-col gap-4 overflow-x-hidden overflow-y-auto">
			<h3
				v-if="title"
				:id="'card-title-' + cardId"
				class="bo-card__title text-lg leading-tight font-semibold text-gray-900 dark:text-white"
			>
				{{ title }}
			</h3>
			<p
				v-if="description"
				class="bo-card__description text-sm text-gray-600 dark:text-gray-400"
			>
				{{ description }}
			</p>
			<slot name="content"></slot>
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { computed, ref, type StyleValue } from 'vue';
import type { BoCardProps } from './bo-card';

const slots = defineSlots<{
	header?: (props: Record<string, unknown>) => void;
	content?: (props: Record<string, unknown>) => void;
	actions?: (props: Record<string, unknown>) => void;
}>();

const emit = defineEmits<{
	(e: 'click', event: MouseEvent | KeyboardEvent): void;
}>();

const props = withDefaults(defineProps<BoCardProps>(), {
	padding: () => ({
		top: true,
		right: true,
		bottom: true,
		left: true,
	}),
	clickable: false,
	disabled: false,
});

const cardId = ref<string>(IdentityService.instance.getId('card'));

const role = computed<string | undefined>(() => {
	return props.clickable ? 'button' : undefined;
});

const tabindex = computed<string | undefined>(() => {
	return props.clickable ? '0' : undefined;
});

const ariaDisabled = computed<boolean>(() => {
	return props.disabled;
});

const containerClasses = computed<string[]>(() => {
	const classes = [];

	if (props.widthAsTailwindClass) {
		classes.push(props.widthAsTailwindClass);
	} else {
		classes.push('w-fit');
	}

	// Padding classes
	if (props.padding.top) classes.push('pt-5');
	if (props.padding.right) classes.push('pr-5');
	if (props.padding.bottom) classes.push('pb-5');
	if (props.padding.left) classes.push('pl-5');

	// Clickable classes
	if (props.clickable) {
		classes.push(
			'cursor-pointer',
			'hover:bg-gray-50 dark:hover:bg-gray-700',
			'transition-colors duration-150',
		);
		if (!props.disabled) {
			classes.push(
				'focus:outline-none',
				'focus:ring-2',
				'focus:ring-blue-500/50',
				'focus:ring-offset-2',
			);
		}
	} else {
		classes.push('cursor-default');
	}

	// Disabled state
	if (props.disabled) {
		classes.push('opacity-60', 'cursor-not-allowed', 'pointer-events-none');
	}

	// Add margins for visual rhythm
	classes.push('my-4');

	return classes;
});

const ariaLabelledBy = computed<string | undefined>(() => {
	return props.title ? 'card-title-' + cardId.value : 'card';
});

const styleWidth = computed<StyleValue>(() => {
	if (props.widthInPx) {
		return `width: ${props.widthInPx}px;`;
	}
	if (props.widthInPercent) {
		return `width: ${props.widthInPercent}%;`;
	}
	return undefined;
});

function handleClick(event: MouseEvent | KeyboardEvent): void {
	if (props.clickable && !props.disabled) {
		if (event instanceof KeyboardEvent) {
			event.preventDefault();
		}
		emit('click', event);
	}
}
</script>
