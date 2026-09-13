<template>
	<div :id="id" :data-testid="dataTestId" :class="DATE_RANGE_PICKER_MANIFEST.styles.base">
		<bo-popover :open="open" placement="bottom-start" @update:open="setOpen">
			<bo-popover-trigger :class="DATE_RANGE_PICKER_MANIFEST.styles.trigger" :disabled="disabled">
				{{ formattedValue || placeholder }}
				<span aria-hidden="true">▾</span>
			</bo-popover-trigger>
			<bo-popover-content class="w-auto border-0 p-0 shadow-none">
				<bo-range-calendar :model-value="model" :locale="locale" @update:model-value="setRange" />
			</bo-popover-content>
		</bo-popover>
	</div>
</template>

<script setup lang="ts">
import type { BoDateRangePickerProps } from '@workspace/bamboo-core';
import {
	DATE_RANGE_PICKER_MANIFEST,
	generateComponentId,
	generateDataTestId,
} from '@workspace/bamboo-core';
import { computed, ref } from 'vue';
import { BoPopover, BoPopoverContent, BoPopoverTrigger } from '../bo-popover';
import BoRangeCalendar from './bo-range-calendar.vue';

const props = withDefaults(defineProps<BoDateRangePickerProps>(), {
	id: () => generateComponentId('date-range-picker'),
	dataTestId: () => generateDataTestId('date-range-picker'),
	placeholder: 'Select date range',
	locale: 'en-US',
	disabled: false,
});

const model = defineModel<{ start?: Date; end?: Date }>({
	default: () => ({}),
});

const open = ref(false);
const id = computed(() => {
	return props.id;
});
const dataTestId = computed(() => {
	return props.dataTestId;
});
const formattedValue = computed(() => {
	const formatter = new Intl.DateTimeFormat(props.locale, { dateStyle: 'medium' });
	return model.value.start && model.value.end
		? `${formatter.format(model.value.start)} – ${formatter.format(model.value.end)}`
		: '';
});

function setOpen(value: boolean): void {
	open.value = value;
}

function setRange(value: { start?: Date; end?: Date }): void {
	model.value = value;
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/date-picker.manifest.css';
</style>
