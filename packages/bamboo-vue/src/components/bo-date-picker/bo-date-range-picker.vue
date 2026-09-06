<template>
	<div :id="id" :data-testid="dataTestId" :class="DATE_RANGE_PICKER_MANIFEST.styles.base">
		<bo-popover v-model:open="open" placement="bottom-start">
			<bo-popover-trigger :class="DATE_RANGE_PICKER_MANIFEST.styles.trigger" :disabled="disabled">
				{{ formattedValue || placeholder }}
				<span aria-hidden="true">▾</span>
			</bo-popover-trigger>
			<bo-popover-content class="w-auto p-0">
				<bo-range-calendar v-model="model" :locale="locale" />
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
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/date-picker.manifest.css';
</style>
