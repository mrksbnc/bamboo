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
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo-text';
import { AccessibilityService, AriaLivePriority, IdentityService } from '@/services';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, type StyleValue } from 'vue';
import type { BoModalProps } from './bo-modal';

const slots = defineSlots<{
	header?: () => unknown;
	description?: () => unknown;
	default?: () => unknown;
	footer?: () => unknown;
}>();

const emit = defineEmits<{
	(e: 'close'): void;
}>();

const props = withDefaults(defineProps<BoModalProps>(), {
	id: () => IdentityService.instance.generateId('modal'),
	showClose: true,
});

let previousActiveElement: HTMLElement | null = null;

// Use keyboard composable for escape and tab trap, but we'll need to implement these functions manually
// since the composable APIs differ from the old utils
const modalRef = ref<HTMLElement | null>(null);

const modalTitleId = ref<string>(
	props.id ? `${props.id}-title` : IdentityService.instance.generateId('modal-title'),
);

const modalDescriptionId = ref<string>(
	props.id ? `${props.id}-description` : IdentityService.instance.generateId('modal-description'),
);

const computedStyle = computed<StyleValue>(() => {
	if (props.width) {
		if (props.width.px) {
			return { width: `${props.width.px}px` };
		}

		if (props.width.percent) {
			return { width: `${props.width.percent}%` };
		}

		if (props.width.tailwind) {
			return {};
		}
	}

	return {};
});

function getFocusableElements(container: HTMLElement): HTMLElement[] {
	const focusable = container.querySelectorAll(
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
	);
	return Array.from(focusable) as HTMLElement[];
}

function trapTabKey(e: KeyboardEvent, container: HTMLElement, shouldTrap: boolean): void {
	if (!shouldTrap || e.key !== 'Tab') return;

	const focusableElements = getFocusableElements(container);
	if (focusableElements.length === 0) return;

	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];

	// If shift+tab on first element, go to last element
	if (e.shiftKey && document.activeElement === firstElement) {
		lastElement.focus();
		e.preventDefault();
	}
	// If tab on last element, go to first element
	else if (!e.shiftKey && document.activeElement === lastElement) {
		firstElement.focus();
		e.preventDefault();
	}
}

function registerEscapeKeyHandler(e: KeyboardEvent, handler: () => void): void {
	if (e.key === 'Escape') {
		handler();
	}
}

function handleKeyDown(e: KeyboardEvent): void {
	if (modalRef.value) {
		trapTabKey(e, modalRef.value, true);
	}
}

function handleEscapeKey(e: KeyboardEvent): void {
	registerEscapeKeyHandler(e, () => {
		emit('close');
	});
}

onMounted(() => {
	previousActiveElement = document.activeElement as HTMLElement | null;

	AccessibilityService.instance.announceToScreenReader('Dialog opened', AriaLivePriority.assertive);

	nextTick(() => {
		if (modalRef.value) {
			const focusableElements = getFocusableElements(modalRef.value);
			if (focusableElements.length > 0) {
				focusableElements[0].focus();
			} else {
				modalRef.value.focus();
			}
		}
	});

	document.addEventListener('keydown', handleEscapeKey);
	document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
	document.removeEventListener('keydown', handleEscapeKey);

	if (previousActiveElement) {
		previousActiveElement.focus();
	}

	document.body.style.overflow = '';
	AccessibilityService.instance.announceToScreenReader('Dialog closed', AriaLivePriority.assertive);
});
</script>
