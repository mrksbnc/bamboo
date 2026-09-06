<template>
	<div :id="id" :data-testid="dataTestId" :class="DATE_PICKER_MANIFEST.styles.base">
		<bo-popover v-model:open="open" placement="bottom-start">
			<bo-popover-trigger :class="DATE_PICKER_MANIFEST.styles.trigger" :disabled="disabled">
				{{ formattedValue || placeholder }}
				<span aria-hidden="true">▾</span>
			</bo-popover-trigger>
			<bo-popover-content class="w-auto p-0">
				<bo-calendar v-model="model" :locale="locale" @select="open = false" />
			</bo-popover-content>
		</bo-popover>
	</div>
</template>

<script setup lang="ts">
import type { BoDatePickerProps } from '@workspace/bamboo-core';
import {
	DATE_PICKER_MANIFEST,
	generateComponentId,
	generateDataTestId,
} from '@workspace/bamboo-core';
import { computed, ref } from 'vue';
import { BoCalendar } from '../bo-calendar';
import { BoPopover, BoPopoverContent, BoPopoverTrigger } from '../bo-popover';

const props = withDefaults(defineProps<BoDatePickerProps>(), {
	id: () => generateComponentId('date-picker'),
	dataTestId: () => generateDataTestId('date-picker'),
	placeholder: 'Select date',
	locale: 'en-US',
	disabled: false,
});

const model = defineModel<Date | undefined>({ default: undefined });

const open = ref(false);
const id = computed(() => {
	return props.id;
});
const dataTestId = computed(() => {
	return props.dataTestId;
});
const formattedValue = computed(() => {
	return model.value
		? new Intl.DateTimeFormat(props.locale, { dateStyle: 'medium' }).format(model.value)
		: '';
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/date-picker.manifest.css';
</style>
