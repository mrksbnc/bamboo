<template>
	<div
		class="bo-accordion-container"
		:data-testid="`bo-accordion-container-${id}`"
		role="group"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { provide, reactive, ref } from 'vue';
import type { BoAccordionContainerProps } from './bo-accordion.js';

const props = withDefaults(defineProps<BoAccordionContainerProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-accordion-container'),
});

const openItems = ref<Set<string>>(new Set());
const registeredItems = ref<Set<string>>(new Set());

function registerItem(id: string, initialOpen: boolean): void {
	if (registeredItems.value.has(id)) {
		return;
	}

	registeredItems.value.add(id);

	if (initialOpen || id === props.defaultOpenItemId) {
		if (props.allowMultiple) {
			openItems.value.add(id);
		} else {
			openItems.value.clear();
			openItems.value.add(id);
		}
	}
}

function toggle(id: string): void {
	if (openItems.value.has(id)) {
		if (props.alwaysOpen && openItems.value.size === 1) {
			return;
		}

		openItems.value.delete(id);
		return;
	}

	if (props.allowMultiple) {
		openItems.value.add(id);
		return;
	}

	openItems.value.clear();
	openItems.value.add(id);
}

provide(
	InjectKey.AccordionGroup,
	reactive({
		openItems,
		toggle,
		registerItem,
	}),
);
</script>
