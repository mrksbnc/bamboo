<template>
	<div
		class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50 p-4"
	>
		<div
			class="relative max-h-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800"
			:class="[
				!widthAsTailwindClass && !widthInPx && !widthInPercent ? sizeClass : '',
				widthAsTailwindClass || '',
			]"
			:style="computedStyle"
		>
			<!-- Close button -->
			<button
				v-if="showClose"
				type="button"
				class="absolute top-2 right-2 ml-auto inline-flex h-6 w-6 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
				@click="$emit('close')"
			>
				<span class="sr-only">Close</span>
				<svg
					class="h-3 w-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>

			<!-- Title and subtitle -->
			<div
				v-if="title || subtitle"
				class="mb-4"
			>
				<h3
					v-if="title"
					class="text-xl font-semibold text-gray-900 dark:text-white"
				>
					{{ title }}
				</h3>
				<p
					v-if="subtitle"
					class="mt-1 text-sm text-gray-500 dark:text-gray-400"
				>
					{{ subtitle }}
				</p>
			</div>

			<!-- Header slot -->
			<div
				v-if="slots.header"
				class="mb-4"
			>
				<slot name="header" />
			</div>

			<!-- Content slot -->
			<div
				v-if="slots.content"
				class="space-y-4"
			>
				<slot name="content" />
			</div>

			<!-- Footer slot -->
			<div
				v-if="slots.footer"
				class="mt-4 flex items-center space-x-2 border-t border-gray-200 pt-4 dark:border-gray-600"
			>
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BoModalProps } from './bo_modal'
import { BoModalSize } from './bo_modal'

defineOptions({
	name: 'BoModal',
})

const props = withDefaults(defineProps<BoModalProps>(), {
	size: BoModalSize.MD,
	closable: true,
	showClose: true,
	title: '',
	subtitle: '',
})

defineEmits<{
	close: []
}>()

const slots = defineSlots<{
	header?: (props: Record<string, unknown>) => void
	content?: (props: Record<string, unknown>) => void
	footer?: (props: Record<string, unknown>) => void
}>()

const sizeClass = computed(() => {
	switch (props.size) {
		case BoModalSize.SM:
			return 'max-w-sm'
		case BoModalSize.LG:
			return 'max-w-lg'
		case BoModalSize.XL:
			return 'max-w-xl'
		case BoModalSize.XXL:
			return 'max-w-2xl'
		case BoModalSize.MD:
		default:
			return 'max-w-md'
	}
})

const computedStyle = computed(() => {
	if (props.widthInPx) {
		return { width: `${props.widthInPx}px` }
	}

	if (props.widthInPercent) {
		return { width: `${props.widthInPercent}%` }
	}

	return {}
})
</script>
