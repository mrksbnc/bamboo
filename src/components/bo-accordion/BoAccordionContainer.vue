<template>
	<div class="bo-accordion-container">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { provide, reactive, ref } from 'vue';
import type { BoAccordionContainerProps } from './bo-accordion';

const props = withDefaults(defineProps<BoAccordionContainerProps>(), {
	allowMultiple: false,
	alwaysOpen: false,
	defaultOpen: '',
});

// Track which accordion items are open
const openItems = ref<string[]>([]);

// Register accordion items
const registeredItems = ref<Set<string>>(new Set());

// Register a new accordion item
const registerItem = (id: string, initialOpen: boolean) => {
	registeredItems.value.add(id);

	// Set initial state
	if (initialOpen || id === props.defaultOpen) {
		if (props.allowMultiple) {
			openItems.value.push(id);
		} else {
			openItems.value = [id];
		}
	}
};

// Toggle an accordion item
const toggle = (id: string) => {
	const isOpen = openItems.value.includes(id);

	if (isOpen) {
		// Check if we should keep at least one open
		if (props.alwaysOpen && openItems.value.length === 1) {
			return; // Don't close if it's the only open item
		}

		// Close the item
		openItems.value = openItems.value.filter((item) => item !== id);
	} else {
		// Open the item
		if (props.allowMultiple) {
			openItems.value.push(id);
		} else {
			openItems.value = [id];
		}
	}
};

// Provide the accordion group context to child components
provide(
	'accordionGroup',
	reactive({
		openItems,
		toggle,
		registerItem,
	}),
);
</script>
