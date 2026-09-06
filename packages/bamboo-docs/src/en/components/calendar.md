---
title: Calendar
description: Keyboard-accessible month navigation and date selection.
category: forms
tags:
  - calendar
  - date
  - accessibility
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo-vue';

const selectedDate = ref<Date | undefined>();
const constrainedDate = ref<Date | undefined>();
const basicExample = `<bo-calendar v-model="selectedDate" />`;
const constrainedExample = `<bo-calendar\n  v-model="constrainedDate"\n  :min-date="new Date(2025, 0, 1)"\n  :max-date="new Date(2025, 11, 31)"\n  :disabled-dates="[new Date(2025, 6, 4)]"\n/>`;
</script>

# Calendar

`bo-calendar` renders a month grid with previous/next navigation, selected and today states, disabled dates, and localized labels. Use it when a date is the primary value; for a compact field, compose it with [`bo-date-picker`](./date-picker).

## Basic usage

<ExampleFrame :code="basicExample">
  <div class="w-full max-w-sm">
    <bo-calendar v-model="selectedDate" />
    <p class="mt-3 text-sm text-neutral-500">{{ selectedDate ? selectedDate.toLocaleDateString() : 'No date selected' }}</p>
  </div>
</ExampleFrame>

## Constraints and disabled dates

Pass `min-date` and `max-date` to constrain navigation and selection. `disabled-dates` accepts dates that should remain visible but cannot be selected. Keep validation on the server as well.

<ExampleFrame :code="constrainedExample">
  <bo-calendar v-model="constrainedDate" :min-date="new Date(2025, 0, 1)" :max-date="new Date(2025, 11, 31)" :disabled-dates="[new Date(2025, 6, 4)]" />
</ExampleFrame>

## States

- **Unselected:** users can choose any enabled day.
- **Selected:** the chosen day has a distinct visual treatment and remains announced to assistive technology.
- **Disabled:** unavailable days are removed from the tab sequence.
- **Loading/error:** wrap the calendar in a field and communicate asynchronous errors with visible text; do not rely on color alone.

## Accessibility

The grid uses labeled day buttons and exposes the selected state. Keyboard users can move between days with arrow keys, jump between weeks with Page Up/Page Down, and activate a day with Enter or Space. Keep the calendar near its label, provide a locale, and never disable focus styles.

## Responsive guidance

Use the default single-month layout in narrow containers. Give the calendar at least `18rem` of width, avoid horizontal scrolling, and place the month navigation controls at the top so they remain reachable when the grid wraps.

## API reference

| Prop            | Type                | Default        | Description                       |
| --------------- | ------------------- | -------------- | --------------------------------- |
| `modelValue`    | `Date \| undefined` | `undefined`    | Selected date (`v-model`).        |
| `minDate`       | `Date`              | `undefined`    | Earliest selectable date.         |
| `maxDate`       | `Date`              | `undefined`    | Latest selectable date.           |
| `disabledDates` | `Date[]`            | `[]`           | Dates that cannot be selected.    |
| `locale`        | `string`            | Browser locale | Locale for labels and formatting. |
| `disabled`      | `boolean`           | `false`        | Disables all interaction.         |

### Events

| Event               | Payload             | Description                      |
| ------------------- | ------------------- | -------------------------------- |
| `update:modelValue` | `Date \| undefined` | Emitted after selection changes. |
| `select`            | `Date`              | Emitted when a day is selected.  |
