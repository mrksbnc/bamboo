<template>
	<div
		class="bo-accordion w-full"
		ref="accordionRef"
	>
		<div
			:class="[
				'bo-accordion-header text-blue-gray-700 flex cursor-pointer items-center justify-between p-4 transition-colors',
				disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-50',
				className,
			]"
			@click="toggleAccordion"
			:aria-expanded="isOpen"
			:aria-disabled="disabled"
			:id="`accordion-header-${id}`"
			:aria-controls="`accordion-body-${id}`"
			tabindex="0"
			@keydown.enter="toggleAccordion"
			@keydown.space="toggleAccordion"
		>
			<div class="flex items-center gap-2">
				<bo-icon
					v-if="prefixIcon !== Icon.none"
					:icon="prefixIcon"
					class="bo-accordion-icon"
					aria-hidden="true"
				/>
				<span class="bo-accordion-title font-medium">{{ title }}</span>
			</div>
			<div
				class="bo-accordion-collapse-icon transition-transform duration-200"
				:class="{ 'rotate-180': isOpen }"
			>
				<bo-icon
					:icon="customIcon !== Icon.none ? customIcon : Icon.chevron_down"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div
			v-show="isOpen"
			class="bo-accordion-body overflow-hidden transition-all duration-300"
			:id="`accordion-body-${id}`"
			role="region"
			:aria-labelledby="`accordion-header-${id}`"
			ref="accordionBodyRef"
		>
			<div class="bo-accordion-content text-blue-gray-500 p-4">
				<slot>
					<!-- Default content will go here -->
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { FocusTrapService, IdentityService, KeyboardService } from '@/services';
import { inject, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { BoAccordionProps } from './bo-accordion';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => IdentityService.instance.generateId(),
	open: false,
	disabled: false,
	prefixIcon: () => Icon.none,
	customIcon: () => Icon.none,
	className: '',
});

const emit = defineEmits(['toggle']);

// Internal state
const isOpen = ref(props.open);
const accordionRef = ref<HTMLElement | null>(null);
const accordionBodyRef = ref<HTMLElement | null>(null);

// Define the type for the injected accordion group
type AccordionGroup = {
	openItems: string[];
	toggle: (id: string) => void;
	registerItem: (id: string, initialOpen: boolean) => void;
};

// Injected from parent BoAccordionContainer if present
const accordionGroup = inject<AccordionGroup | null>('accordionGroup', null);

// Focus trap setup
let focusTrap: { activate: () => void; deactivate: () => void } | null = null;

// Handle toggle
const toggleAccordion = () => {
	if (props.disabled) return;

	if (accordionGroup) {
		// If part of a group, let the parent component handle the state
		accordionGroup.toggle(props.id);
	} else {
		// Standalone accordion
		isOpen.value = !isOpen.value;
		emit('toggle', { id: props.id, open: isOpen.value });
	}
};

// Setup keyboard escape handler when accordion is open
const setupKeyboardHandlers = () => {
	if (isOpen.value) {
		KeyboardService.instance.useEscapeKey((e) => {
			if (isOpen.value && !props.disabled) {
				toggleAccordion();
			}
		});
	}
};

// Set up focus trap when accordion is open
const setupFocusTrap = () => {
	if (isOpen.value && accordionBodyRef.value) {
		focusTrap = FocusTrapService.instance.useFocusTrap(accordionBodyRef.value, {
			handleEscapeKey: true,
			onEscape: () => {
				if (!props.disabled) {
					toggleAccordion();
				}
			},
			initialFocus: 'first-focusable',
		});
		focusTrap.activate();
	} else if (focusTrap) {
		focusTrap.deactivate();
		focusTrap = null;
	}
};

// Watch for changes in open state
watch(
	() => isOpen.value,
	(newVal) => {
		if (newVal) {
			// Set up focus trap and keyboard handlers when opened
			setTimeout(() => {
				setupFocusTrap();
				setupKeyboardHandlers();
			}, 50); // Small delay to ensure DOM is updated
		} else if (focusTrap) {
			// Deactivate focus trap when closed
			focusTrap.deactivate();
			focusTrap = null;
		}
	},
);

// Watch for external changes
watch(
	() => props.open,
	(newVal) => {
		isOpen.value = newVal;
	},
);

// When part of a group, respond to parent state changes
watch(
	() => accordionGroup?.openItems,
	(openItems) => {
		if (accordionGroup && openItems) {
			isOpen.value = openItems.includes(props.id);
		}
	},
	{ deep: true },
);

// Register with parent on mount if part of a group
onMounted(() => {
	if (accordionGroup) {
		accordionGroup.registerItem(props.id, props.open);
	}

	// Initialize if open by default
	if (isOpen.value) {
		setTimeout(setupFocusTrap, 50);
	}
});

// Clean up on unmount
onBeforeUnmount(() => {
	if (focusTrap) {
		focusTrap.deactivate();
		focusTrap = null;
	}
});
</script>
