<template>
	<div
		:id="id"
		data-slot="accordion-item"
		:data-state="state"
		:data-disabled="isDisabled ? 'true' : undefined"
		:data-testid="dataTestId"
		:class="ACCORDION_MANIFEST.styles.item"
	>
		<h3 data-slot="accordion-header" :class="ACCORDION_MANIFEST.styles.header">
			<button
				:id="triggerId"
				type="button"
				data-slot="accordion-trigger"
				:data-state="state"
				:disabled="isDisabled"
				:aria-expanded="isOpen ? 'true' : 'false'"
				:aria-controls="contentId"
				:class="ACCORDION_MANIFEST.styles.trigger"
				@click="onItemToggle"
			>
				<slot name="trigger">
					<slot />
				</slot>
				<bo-icon
					icon="chevron_down"
					size="sm"
					aria-hidden="true"
					:class="ACCORDION_MANIFEST.styles.icon"
				/>
			</button>
		</h3>
		<div
			:id="contentId"
			data-slot="accordion-content"
			:data-state="state"
			:role="props.role ?? 'region'"
			:aria-labelledby="triggerId"
			:aria-hidden="isOpen ? 'false' : 'true'"
			:inert="isOpen ? undefined : true"
			:class="ACCORDION_MANIFEST.styles.content"
		>
			<div :class="ACCORDION_MANIFEST.styles.contentInner">
				<div :class="ACCORDION_MANIFEST.styles.contentBody">
					<slot name="content" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	ACCORDION_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoAccordionItemProps,
} from '@workspace/bamboo-core';
import { computed, inject, ref } from 'vue';
import { BoIcon } from '../bo-icon';
import { accordionDisabledKey, accordionOpenValuesKey, accordionToggleKey } from './keys.js';

const props = withDefaults(defineProps<BoAccordionItemProps>(), {
	id: () => generateComponentId('accordion-item'),
	dataTestId: () => generateDataTestId('accordion-item'),
});

const groupDisabled = inject(accordionDisabledKey);
const openValues = inject(accordionOpenValuesKey, ref(new Set<string | number>()));

const onToggle = inject(accordionToggleKey);

const isOpen = computed<boolean>(() => {
	return openValues?.value.has(props.value) ?? false;
});

const isDisabled = computed<boolean>(() => {
	return !!props.disabled || !!groupDisabled?.value;
});

const contentId = computed<string>(() => {
	return `${props.id}-content`;
});

const triggerId = computed<string>(() => {
	return `${props.id}-trigger`;
});

const state = computed<'open' | 'closed'>(() => {
	return isOpen.value ? 'open' : 'closed';
});

function onItemToggle(): void {
	if (isDisabled.value) {
		return;
	}

	if (!onToggle) {
		console.warn(
			'BoAccordionItem: onToggle is not provided. Make sure to use BoAccordion within a BoAccordionGroup.',
		);
		return;
	}

	onToggle(props.value);
}
</script>
