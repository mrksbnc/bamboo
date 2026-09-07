---
title: Date Picker
description: Select a date or date range from a compact popover.
category: form
tags:
  - date-picker
  - date
  - calendar
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoDatePicker, BoDateRangePicker, BoRangeCalendar } from '@mrksbnc/bamboo-vue';

const date = ref<Date | undefined>();
const placementDate = ref<Date | undefined>();
const localeDate = ref<Date | undefined>();
const range = ref<{ start?: Date; end?: Date }>({});
const limitedRange = ref<{ start?: Date; end?: Date }>({});

const today = new Date();
const minDate = new Date(today);
minDate.setDate(today.getDate() - 2);
const maxDate = new Date(today);
maxDate.setDate(today.getDate() + 14);

const basicExample = `<bo-date-picker v-model="date" placeholder="Select date" />`;

const placementExample = `<bo-date-picker
  v-model="placementDate"
  placeholder="Opens bottom-start"
/>`;

const stateExample = `<bo-date-picker disabled placeholder="Unavailable" />
<bo-date-picker
  v-model="localeDate"
  locale="de-DE"
  placeholder="Datum auswählen"
/>`;

const rangeExample = `<bo-date-range-picker v-model="range" placeholder="Select range" />`;

const rangeCalendarExample = `<bo-range-calendar
  v-model="limitedRange"
  :min-date="minDate"
  :max-date="maxDate"
/>`;
</script>

# Date Picker

Use `bo-date-picker` for one date, `bo-date-range-picker` for a compact interval, or `bo-range-calendar` when both calendars should stay visible. Each component uses a `Date` value, not a formatted date string.

## Basic Usage

`v-model` is `Date | undefined`. The trigger displays the selected date using the configured locale.

<ExampleFrame :code="basicExample">
  <div class="grid max-w-xs gap-2">
    <bo-date-picker v-model="date" placeholder="Select date" />
    <span class="text-sm text-neutral-500">{{ date ? date.toLocaleDateString() : 'No date selected' }}</span>
  </div>
</ExampleFrame>

## Placement

The date and range picker wrappers use an internal `bottom-start` popover. They do not expose a `placement` prop. The example below documents the supported behavior without passing an unsupported prop. Use [`Popover`](./popover) directly when arbitrary placement control is required.

<ExampleFrame :code="placementExample">
  <div class="grid max-w-xs gap-2">
    <bo-date-picker v-model="placementDate" placeholder="Opens bottom-start" />
    <span class="text-sm text-neutral-500">The calendar opens below the trigger, aligned to its start.</span>
  </div>
</ExampleFrame>

## Disabled and Locale

Set `disabled` to prevent opening the picker. `locale` controls weekday labels, month labels, and the formatted trigger value.

<ExampleFrame :code="stateExample">
  <div class="grid max-w-xs gap-3">
    <bo-date-picker disabled placeholder="Unavailable" />
    <bo-date-picker
      v-model="localeDate"
      locale="de-DE"
      placeholder="Datum auswählen"
    />
  </div>
</ExampleFrame>

## Single Date

Use `bo-date-picker` when only one boundary is needed. It forwards the locale to its calendar, and selecting a date closes the popover.

<ExampleFrame :code="basicExample">
  <bo-date-picker v-model="date" placeholder="Select a date" />
</ExampleFrame>

## Date Range

`bo-date-range-picker` models a range as `{ start?: Date; end?: Date }`. The value can be partial while the user is choosing the second boundary.

<ExampleFrame :code="rangeExample">
  <div class="grid max-w-xs gap-2">
    <bo-date-range-picker v-model="range" placeholder="Select range" />
    <span class="text-sm text-neutral-500">{{ range.start && range.end ? 'Range selected' : 'Select two dates' }}</span>
  </div>
</ExampleFrame>

## Range Calendar and Limits

`bo-range-calendar` keeps two `bo-calendar` instances visible. It is the date-picker component that supports `minDate` and `maxDate`; those limits apply to both calendars, and the second calendar cannot select a date before the selected start.

<ExampleFrame :code="rangeCalendarExample">
  <div class="max-w-2xl overflow-x-auto">
    <bo-range-calendar
      v-model="limitedRange"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</ExampleFrame>

:::warning
`minDate` and `maxDate` are supported by `bo-range-calendar`, not by `bo-date-picker` or `bo-date-range-picker`. Those compact wrappers currently expose only `placeholder`, `disabled`, and `locale` in addition to their model.
:::

## Usage Guidance

- Keep the model as `Date` values and format it only when displaying or submitting it.
- Use an explicit locale when the application locale is not `en-US`.
- Use `bo-range-calendar` for workflows where comparing both months at once is important.
- Use the separate [`Calendar`](./calendar) component when the calendar should remain visible without a popover.

## API Reference

### `BoDatePicker` Props

| Prop          | Type                | Default       | Description                                |
| ------------- | ------------------- | ------------- | ------------------------------------------ |
| `id`          | `string`            | Autogenerated | The picker root id.                        |
| `dataTestId`  | `string`            | Autogenerated | The test id attribute.                     |
| `placeholder` | `string`            | `Select date` | Text shown when no date is selected.       |
| `disabled`    | `boolean`           | `false`       | Prevents opening and selection.            |
| `locale`      | `string`            | `en-US`       | Locale for calendar labels and formatting. |
| `modelValue`  | `Date \| undefined` | `undefined`   | Selected date used by `v-model`.           |

### `BoDatePicker` Events

| Event               | Payload             | Description                             |
| ------------------- | ------------------- | --------------------------------------- |
| `update:modelValue` | `Date \| undefined` | Emitted when the selected date changes. |

### `BoDateRangePicker` Props

| Prop          | Type                           | Default             | Description                                    |
| ------------- | ------------------------------ | ------------------- | ---------------------------------------------- |
| `id`          | `string`                       | Autogenerated       | The picker root id.                            |
| `dataTestId`  | `string`                       | Autogenerated       | The test id attribute.                         |
| `placeholder` | `string`                       | `Select date range` | Text shown when no complete range is selected. |
| `disabled`    | `boolean`                      | `false`             | Prevents opening and selection.                |
| `locale`      | `string`                       | `en-US`             | Locale for calendar labels and formatting.     |
| `modelValue`  | `{ start?: Date; end?: Date }` | `{}`                | Range used by `v-model`.                       |

### `BoDateRangePicker` Events

| Event               | Payload                        | Description                           |
| ------------------- | ------------------------------ | ------------------------------------- |
| `update:modelValue` | `{ start?: Date; end?: Date }` | Emitted when either boundary changes. |

### `BoRangeCalendar` Props

| Prop         | Type                           | Default       | Description                      |
| ------------ | ------------------------------ | ------------- | -------------------------------- |
| `id`         | `string`                       | Autogenerated | The range calendar id.           |
| `dataTestId` | `string`                       | Autogenerated | The test id attribute.           |
| `locale`     | `string`                       | `en-US`       | Locale for both calendar labels. |
| `minDate`    | `Date`                         | -             | Earliest selectable date.        |
| `maxDate`    | `Date`                         | -             | Latest selectable date.          |
| `modelValue` | `{ start?: Date; end?: Date }` | `{}`          | Range used by `v-model`.         |

### `BoRangeCalendar` Events

| Event               | Payload                        | Description                           |
| ------------------- | ------------------------------ | ------------------------------------- |
| `update:modelValue` | `{ start?: Date; end?: Date }` | Emitted when either boundary changes. |
