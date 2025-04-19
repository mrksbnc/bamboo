<template>
	<div
		class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900/50 p-4 dark:bg-gray-900/80"
		@keydown="handleKeyDown"
		tabindex="-1"
		ref="modalRef"
		role="dialog"
		aria-modal="true"
		:aria-labelledby="title ? modalTitleId : undefined"
		:aria-describedby="description ? modalDescriptionId : undefined"
		:id="id"
	>
		<div
			class="relative max-h-full rounded-lg bg-white shadow dark:bg-gray-800"
			:class="props.width?.tailwind"
			:style="computedStyle"
			role="document"
		>
			<!-- Header -->
			<div
				class="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700"
			>
				<div class="flex flex-col gap-2">
					<slot name="header">
						<bo-text
							v-if="title"
							:id="modalTitleId"
							:text="title"
							:size="BoFontSize.xl"
							:weight="BoFontWeight.semibold"
							:color="BoTextColor.default"
						/>
					</slot>
					<slot name="description">
						<bo-text
							v-if="description"
							:id="modalDescriptionId"
							:text="description"
							class="mb-4"
							:color="BoTextColor.secondary"
						/>
					</slot>
				</div>
				<button
					v-if="showClose"
					type="button"
					class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
					@click="$emit('close')"
					aria-label="Close modal"
				>
					<span class="sr-only">Close</span>
					<bo-icon :icon="Icon.x" />
				</button>
			</div>

			<!-- Content -->
			<div class="p-4">
				<slot></slot>
			</div>

			<!-- Footer -->
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo_text'
import { AccessibilityUtils, KeyboardUtils } from '@/utils'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { BoModalProps } from './bo_modal'

const props = withDefaults(defineProps<BoModalProps>(), {
	showClose: true,
})

defineSlots<{
	header?: () => unknown
	description?: () => unknown
	default?: () => unknown
	footer?: () => unknown
}>()

const emit = defineEmits<{
	close: []
}>()

let previousActiveElement: HTMLElement | null = null

const modalTitleId = ref<string>(
	props.id ? `${props.id}-title` : AccessibilityUtils.generateAccessibleId('modal-title'),
)

const modalDescriptionId = ref<string>(
	props.id
		? `${props.id}-description`
		: AccessibilityUtils.generateAccessibleId('modal-description'),
)

const modalRef = ref<HTMLElement | null>(null)

const computedStyle = computed<Record<string, string> | undefined>(() => {
	if (props.width) {
		if (props.width.px) {
			return { width: `${props.width.px}px` }
		}

		if (props.width.percent) {
			return { width: `${props.width.percent}%` }
		}

		if (props.width.tailwind) {
			return undefined
		}
	}

	return undefined
})

function handleKeyDown(e: KeyboardEvent): void {
	if (modalRef.value) {
		KeyboardUtils.trapTabKey(e, modalRef.value, true)
	}
}

function handleEscapeKey(e: KeyboardEvent): void {
	KeyboardUtils.registerEscapeKeyHandler(e, () => {
		emit('close')
	})
}

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

	if (previousActiveElement) {
		previousActiveElement.focus()
	}

	document.body.style.overflow = ''
	AccessibilityUtils.announceToScreenReader('Dialog closed', 'assertive')
})
</script>
