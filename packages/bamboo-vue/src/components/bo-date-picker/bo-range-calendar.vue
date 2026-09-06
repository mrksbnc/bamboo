<template>
	<div :id="id" :data-testid="dataTestId" :class="RANGE_CALENDAR_MANIFEST.styles.base">
		<bo-calendar v-model="start" :locale="locale" :min-date="minDate" :max-date="maxDate" />
		<bo-calendar v-model="end" :locale="locale" :min-date="start || minDate" :max-date="maxDate" />
	</div>
</template>

<script setup lang="ts">
import type { BoRangeCalendarProps } from '@workspace/bamboo-core';
import {
	generateComponentId,
	generateDataTestId,
	RANGE_CALENDAR_MANIFEST,
} from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoCalendar } from '../bo-calendar';

const props = withDefaults(defineProps<BoRangeCalendarProps>(), {
	id: () => generateComponentId('range-calendar'),
	dataTestId: () => generateDataTestId('range-calendar'),
	locale: 'en-US',
});

const model = defineModel<{ start?: Date; end?: Date }>({
	default: () => ({}),
});

const id = computed(() => {
	return props.id;
});
const dataTestId = computed(() => {
	return props.dataTestId;
});
const start = computed({
	get: () => model.value.start,
	set: (value) => {
		model.value = { ...model.value, start: value };
	},
});
const end = computed({
	get: () => model.value.end,
	set: (value) => {
		model.value = { ...model.value, end: value };
	},
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/date-picker.manifest.css';
</style>
