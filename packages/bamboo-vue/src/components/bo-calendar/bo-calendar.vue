<template>
	<div :id="id" :data-testid="dataTestId" :class="CALENDAR_MANIFEST.styles.base">
		<div :class="CALENDAR_MANIFEST.styles.header">
			<button
				type="button"
				aria-label="Previous month"
				:disabled="disabled"
				@click="changeMonth(-1)"
			>
				‹
			</button>
			<strong :class="CALENDAR_MANIFEST.styles.title">{{ monthLabel }}</strong>
			<button type="button" aria-label="Next month" :disabled="disabled" @click="changeMonth(1)">
				›
			</button>
		</div>
		<div
			:class="CALENDAR_MANIFEST.styles.grid"
			role="grid"
			:aria-label="monthLabel"
			aria-rowcount="7"
			aria-colcount="7"
		>
			<div role="row" class="contents">
				<span
					v-for="(weekday, index) in weekdays"
					:key="weekday"
					role="columnheader"
					:aria-colindex="index + 1"
					:class="CALENDAR_MANIFEST.styles.weekday"
				>
					{{ weekday }}
				</span>
			</div>
			<div
				v-for="weekIndex in 6"
				:key="weekIndex"
				role="row"
				:aria-rowindex="weekIndex + 1"
				class="contents"
			>
				<button
					v-for="(day, dayIndex) in calendarDays.slice((weekIndex - 1) * 7, weekIndex * 7)"
					:id="dayId(day.key)"
					:key="day.key"
					type="button"
					role="gridcell"
					:disabled="day.disabled"
					:aria-label="day.label"
					:aria-colindex="dayIndex + 1"
					:aria-selected="isSelected(day.date) ? 'true' : 'false'"
					:tabindex="isFocusableDay(day) ? 0 : -1"
					:class="[
						CALENDAR_MANIFEST.styles.day,
						day.outside ? CALENDAR_MANIFEST.styles.dayOutside : '',
						day.disabled ? CALENDAR_MANIFEST.styles.dayDisabled : '',
						isSelected(day.date) ? CALENDAR_MANIFEST.styles.daySelected : '',
						isToday(day.date) ? CALENDAR_MANIFEST.styles.dayToday : '',
					]"
					@click="select(day.date)"
					@keydown="onDayKeydown(day.date, $event)"
				>
					{{ day.date.getDate() }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoCalendarProps } from '@workspace/bamboo-core';
import { CALENDAR_MANIFEST, generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, nextTick, ref } from 'vue';

const props = withDefaults(defineProps<BoCalendarProps>(), {
	id: () => generateComponentId('calendar'),
	dataTestId: () => generateDataTestId('calendar'),
	locale: 'en-US',
	disabled: false,
});

const emit = defineEmits<{
	(event: 'select', payload: Date): void;
}>();

const model = defineModel<Date | undefined>({ default: undefined });

const visibleMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

const weekdays = computed(() => {
	const formatter = new Intl.DateTimeFormat(props.locale, { weekday: 'short' });
	return Array.from({ length: 7 }, (_, index) => formatter.format(new Date(2024, 0, 7 + index)));
});
const monthLabel = computed(() => {
	return new Intl.DateTimeFormat(props.locale, { month: 'long', year: 'numeric' }).format(
		visibleMonth.value,
	);
});
const calendarDays = computed(() => {
	const first = new Date(visibleMonth.value.getFullYear(), visibleMonth.value.getMonth(), 1);
	const start = new Date(first);
	start.setDate(first.getDate() - first.getDay());
	return Array.from({ length: 42 }, (_, index) => {
		const date = new Date(start);
		date.setDate(start.getDate() + index);
		return {
			date,
			key: date.toISOString().slice(0, 10),
			label: new Intl.DateTimeFormat(props.locale, { dateStyle: 'full' }).format(date),
			outside: date.getMonth() !== visibleMonth.value.getMonth(),
			disabled: isDisabled(date),
		};
	});
});
const firstFocusableDayKey = computed(() => {
	return calendarDays.value.find((day) => !day.outside && !day.disabled)?.key;
});

function changeMonth(offset: number): void {
	if (props.disabled) return;
	visibleMonth.value = new Date(
		visibleMonth.value.getFullYear(),
		visibleMonth.value.getMonth() + offset,
		1,
	);
}

function isDisabled(date: Date): boolean {
	if (props.disabled) return true;
	const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	return Boolean(
		(props.minDate && day < startOfDay(props.minDate)) ||
		(props.maxDate && day > startOfDay(props.maxDate)) ||
		props.disabledDates?.some((disabledDate) => sameDay(day, disabledDate)),
	);
}

function isSelected(date: Date): boolean {
	return Boolean(model.value && sameDay(model.value, date));
}

function isToday(date: Date): boolean {
	return sameDay(new Date(), date);
}

function dayId(key: string): string {
	return `${props.id}-${key}`;
}

function isFocusableDay(day: (typeof calendarDays.value)[number]): boolean {
	return isSelected(day.date) || (!model.value && day.key === firstFocusableDayKey.value);
}

function onDayKeydown(date: Date, event: KeyboardEvent): void {
	const offsets: Record<string, number> = {
		ArrowLeft: -1,
		ArrowRight: 1,
		ArrowUp: -7,
		ArrowDown: 7,
	};
	const offset = offsets[event.key];
	if (!offset) return;
	event.preventDefault();
	const nextDate = new Date(date);
	nextDate.setDate(nextDate.getDate() + offset);
	if (nextDate.getMonth() !== visibleMonth.value.getMonth()) {
		visibleMonth.value = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1);
	}
	void nextTick(() => document.getElementById(dayId(nextDate.toISOString().slice(0, 10)))?.focus());
}

function select(date: Date): void {
	if (props.disabled || isDisabled(date)) return;
	model.value = new Date(date);
	emit('select', new Date(date));
}

function startOfDay(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(first: Date, second: Date): boolean {
	return startOfDay(first).getTime() === startOfDay(second).getTime();
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/calendar.manifest.css';
</style>
