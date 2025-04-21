<template>
	<div class="bo-accordion-container">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { InjectKey } from '@/shared/injection-key';
import { provide, reactive, ref } from 'vue';
import type { BoAccordionContainerProps } from './bo-accordion';

const props = withDefaults(defineProps<BoAccordionContainerProps>(), {
	defaultOpen: '',
	allowMultiple: false,
	alwaysOpen: false,
});

const openItems = ref<string[]>([]);

const registeredItems = ref<Set<string>>(new Set());

function registerItem(id: string, initialOpen: boolean): void {
	if (registeredItems.value.has(id)) {
		return;
	}

	registeredItems.value.add(id);

	if (initialOpen || id === props.defaultOpen) {
		props.allowMultiple ? openItems.value.push(id) : (openItems.value = [id]);
	}
}

function toggle(id: string): void {
	if (openItems.value.includes(id)) {
		if (props.alwaysOpen && openItems.value.length === 1) {
			return;
		}

		openItems.value = openItems.value.filter((item) => item !== id);
		return;
	}

	props.allowMultiple ? openItems.value.push(id) : (openItems.value = [id]);
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
