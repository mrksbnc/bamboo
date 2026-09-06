---
title: Date Picker
description: Compact date and date-range selection controls built on Calendar.
category: forms
tags: [date, calendar, forms, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoDatePicker, BoDateRangePicker, BoRangeCalendar } from '@mrksbnc/bamboo-vue';
const date = ref<Date>();
const range = ref<{ start?: Date; end?: Date }>({});
const dateExample = `<bo-date-picker v-model="date" placeholder="Choose a date" />`;
const rangeExample = `<bo-date-range-picker v-model="range" placeholder="Choose a range" />`;
</script>

# Date Picker

Use `bo-date-picker` when one date is selected from a compact calendar. Use `bo-date-range-picker` for a start/end interval; use `bo-range-calendar` when both calendars should remain visible.

## Single date

<ExampleFrame :code="dateExample"><div class="w-full max-w-sm"><bo-date-picker v-model="date" placeholder="Choose a date" /><p class="mt-3 text-sm text-neutral-500">{{ date ? date.toLocaleDateString() : 'No date selected' }}</p></div></ExampleFrame>

## Date range

<ExampleFrame :code="rangeExample"><div class="w-full max-w-sm"><bo-date-range-picker v-model="range" placeholder="Choose a range" /><p class="mt-3 text-sm text-neutral-500">{{ range.start ? `${range.start.toLocaleDateString()} – ${range.end?.toLocaleDateString() || 'Choose an end date'}` : 'Choose a range' }}</p></div></ExampleFrame>

## Range calendar

`bo-range-calendar` renders two calendars and models `{ start, end }`. The range picker uses the same model while keeping the calendars behind a compact trigger.

<ExampleFrame :code="rangeExample"><div class="w-full"><bo-range-calendar v-model="range" /><p class="mt-3 text-sm text-neutral-500">{{ range.start ? `${range.start.toLocaleDateString()} – ${range.end?.toLocaleDateString() || 'Choose an end date'}` : 'Choose a range' }}</p></div></ExampleFrame>

## States and validation

The current calendar accepts `min-date`, `max-date`, and `disabled-dates`. The picker trigger accepts `placeholder`, `locale`, and `disabled`. A range remains incomplete until both endpoints are chosen; communicate that state rather than silently submitting it.

## Accessibility and responsive guidance

Provide a visible label and an `aria-label` that describes the value. Store dates in a timezone-safe representation and format them for the user's locale. The range calendar currently renders two adjacent calendar surfaces, so place it in a container wide enough for both.

## API reference

| Prop            | Type                        | Description                                           |
| --------------- | --------------------------- | ----------------------------------------------------- |
| `modelValue`    | `Date \| undefined` / range | Selected date or `{ start?: Date; end?: Date }`.      |
| `minDate`       | `Date`                      | Earliest selectable date for calendar/range calendar. |
| `maxDate`       | `Date`                      | Latest selectable date for calendar/range calendar.   |
| `disabledDates` | `Date[]`                    | Dates excluded from the single calendar.              |
| `placeholder`   | `string`                    | Trigger text when empty.                              |
| `locale`        | `string`                    | Date formatting locale.                               |
| `disabled`      | `boolean`                   | Disables the picker trigger.                          |

### Events

Both controls emit `update:modelValue` and `change`; range controls emit a value only after the active endpoint changes.
