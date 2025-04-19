<template>
	<div
		class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50 p-4"
		@keydown="handleKeyDown"
		tabindex="-1"
		ref="modalRef"
		role="dialog"
		aria-modal="true"
		:aria-labelledby="title ? modalTitleId : undefined"
		:aria-describedby="subtitle ? modalSubtitleId : undefined"
	>
		<div
			class="relative max-h-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
			:class="[
				!widthAsTailwindClass && !widthInPx && !widthInPercent ? sizeClass : '',
				widthAsTailwindClass || '',
				paddingClass,
			]"
			:style="computedStyle"
			role="document"
		>
			<div v-if="title || subtitle">
				<h2
					v-if="title"
					:id="modalTitleId"
					class="text-xl leading-tight font-semibold text-gray-900 dark:text-white"
				>
					{{ title }}
				</h2>
				<p
					v-if="subtitle"
					:id="modalSubtitleId"
					class="mt-2 text-sm text-gray-500 dark:text-gray-400"
				>
					{{ subtitle }}
				</p>
			</div>
			<!-- Close button -->
			<button
				v-if="showClose"
				type="button"
				class="absolute top-2 right-2 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white"
				@click="$emit('close')"
				aria-label="Close modal"
			>
				<span class="sr-only">Close</span>
				<bo-icon :icon="Icon.x" />
			</button>

			<div
				v-if="slots.header"
				class="mb-6"
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
				class="mt-6 flex items-center space-x-3 border-t border-gray-200 pt-6 dark:border-gray-600"
			>
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon'
import { AccessibilityUtils, KeyboardUtils } from '@/utils'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { BoModalProps } from './bo_modal'
import { BoModalSize, BoPaddingSize } from './bo_modal'

defineOptions({
	name: 'BoModal',
})

const props = withDefaults(defineProps<BoModalProps>(), {
	size: BoModalSize.MD,
	padding: BoPaddingSize.MD,
	closable: true,
	showClose: true,
	title: '',
	subtitle: '',
	returnFocus: true,
})

const emit = defineEmits<{
	close: []
}>()

const slots = defineSlots<{
	header?: (props: Record<string, unknown>) => void
	content?: (props: Record<string, unknown>) => void
	footer?: (props: Record<string, unknown>) => void
}>()

const modalTitleId = ref(AccessibilityUtils.generateAccessibleId('modal-title'))
const modalSubtitleId = ref(AccessibilityUtils.generateAccessibleId('modal-subtitle'))

let previousActiveElement: HTMLElement | null = null

const modalRef = ref<HTMLElement | null>(null)

const handleKeyDown = (e: KeyboardEvent) => {
	if (modalRef.value) {
		KeyboardUtils.trapTabKey(e, modalRef.value, true)
	}
}

const handleEscapeKey = (e: KeyboardEvent) => {
	if (props.closable) {
		KeyboardUtils.registerEscapeKeyHandler(e, () => {
			emit('close')
		})
	}
}

const sizeClass = computed<string>(() => {
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

const paddingClass = computed<string>(() => {
	switch (props.padding) {
		case BoPaddingSize.SM:
			return 'p-3'
		case BoPaddingSize.LG:
			return 'p-6'
		case BoPaddingSize.XL:
			return 'p-8'
		case BoPaddingSize.MD:
		default:
			return 'p-5'
	}
})

const computedStyle = computed<Record<string, string> | undefined>(() => {
	if (props.widthInPx) {
		return { width: `${props.widthInPx}px` }
	}

	if (props.widthInPercent) {
		return { width: `${props.widthInPercent}%` }
	}

	return undefined
})

onMounted(() => {
	previousActiveElement = document.activeElement as HTMLElement | null

	AccessibilityUtils.announceToScreenReader('Dialog opened', 'assertive')

	nextTick(() => {
		if (modalRef.value) {
			const focusableElements = KeyboardUtils['getFocusableElements'](modalRef.value)
			if (focusableElements.length > 0) {
				focusableElements[0].focus()
			} else {
				modalRef.value.focus()
			}
		}
	})

	document.addEventListener('keydown', handleEscapeKey)
	document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
	document.removeEventListener('keydown', handleEscapeKey)

	if (previousActiveElement && props.returnFocus) {
		previousActiveElement.focus()
	}

	document.body.style.overflow = ''
	AccessibilityUtils.announceToScreenReader('Dialog closed', 'assertive')
})
</script>
