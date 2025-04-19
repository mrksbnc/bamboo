<template>
	<div
		class="bo-card__container relative my-6 flex max-w-md rounded-lg border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
		:class="containerClasses"
		:style="styleWidth"
		@click="handleClick"
		:role="clickable ? 'button' : undefined"
		:tabindex="clickable ? '0' : undefined"
	>
		<div class="bo-card__content flex flex-col gap-2 overflow-x-hidden overflow-y-auto">
			<h3
				v-if="title"
				class="bo-card__title text-xl font-semibold text-gray-900 dark:text-white"
			>
				{{ title }}
			</h3>
			<p
				v-if="description"
				class="bo-card__description text-gray-600 dark:text-gray-400"
			>
				{{ description }}
			</p>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BoCardProps } from './bo_card'

const props = withDefaults(defineProps<BoCardProps>(), {
	padding: () => ({
		top: true,
		right: true,
		bottom: true,
		left: true,
	}),
	clickable: false,
})

const emit = defineEmits(['click'])

const containerClasses = computed(() => {
	const classes = []

	// Width class
	if (props.widthAsTailwindClass) {
		classes.push(props.widthAsTailwindClass)
	} else {
		classes.push('w-fit')
	}

	// Padding classes
	if (props.padding.top) classes.push('pt-4')
	if (props.padding.right) classes.push('pr-4')
	if (props.padding.bottom) classes.push('pb-4')
	if (props.padding.left) classes.push('pl-4')

	// Clickable classes
	if (props.clickable) {
		classes.push('cursor-pointer', 'hover:bg-gray-100')
	} else {
		classes.push('cursor-default')
	}

	return classes
})

const styleWidth = computed(() => {
	if (props.widthInPx) {
		return `width: ${props.widthInPx}px;`
	}
	if (props.widthInPercent) {
		return `width: ${props.widthInPercent}%;`
	}
	return undefined
})

function handleClick(event: MouseEvent) {
	if (props.clickable) {
		emit('click', event)
	}
}
</script>
