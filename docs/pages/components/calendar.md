# Calendar

The `bo-calendar` component is a flexible and customizable date picker that supports single date selection, date ranges, and time selection.

## Features

- Single date and date range selection
- Time picker integration
- Customizable date formats and locales
- Keyboard navigation
- Accessible design
- Dark mode support
- Multiple variants (default, compact, inline, popup)
- Week numbers support
- Year and month selectors
- Customizable styling

## Basic Usage

<div class="component-preview">
  <bo-calendar v-model="selectedDate" />
</div>

```vue
<template>
	<bo-calendar v-model="selectedDate" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const selectedDate = ref<Date>();
</script>
```

## Month Navigation

<div class="component-preview">
  <bo-calendar 
    v-model="selectedDate" 
    :show-header="true" 
    :show-week-days="true" 
  />
</div>

```vue
<template>
	<bo-calendar
		v-model="selectedDate"
		:show-header="true"
		:show-week-days="true"
	/>
</template>
```

## Date Range Selection

<div class="component-preview">
  <bo-calendar 
    v-model="dateRange" 
    :range="true" 
  />
</div>

```vue
<template>
	<bo-calendar
		v-model="dateRange"
		:range="true"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const dateRange = ref<[Date, Date]>();
const minDate = new Date();
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 3);
</script>
```

## Disabled Dates

<div class="component-preview">
  <bo-calendar 
    v-model="selectedDate" 
    :disabled-dates="disabledDates" 
  />
</div>

```vue
<template>
	<bo-calendar
		v-model="selectedDate"
		:disabled-dates="disabledDates"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const selectedDate = ref(new Date());
const disabledDates = ref([
	new Date(new Date().setDate(new Date().getDate() + 1)),
	new Date(new Date().setDate(new Date().getDate() + 2)),
]);
</script>
```

## With Time Selection

<div class="component-preview">
  <bo-calendar 
    v-model="selectedDateTime" 
    :show-time="true" 
  />
</div>

```vue
<template>
	<bo-calendar
		v-model="selectedDateTime"
		:show-time="true"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const selectedDateTime = ref(new Date());
</script>
```

## Usage Examples

### Event Calendar

```vue
<template>
	<div class="space-y-4">
		<bo-calendar
			v-model="selectedDate"
			:events="events"
		/>
		<div
			v-if="selectedEvent"
			class="rounded border p-4"
		>
			<h3 class="font-bold">{{ selectedEvent.title }}</h3>
			<p>{{ selectedEvent.description }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const selectedDate = ref(new Date());
const events = ref([
	{
		date: new Date(),
		title: 'Team Meeting',
		description: 'Weekly team sync',
	},
	{
		date: new Date(new Date().setDate(new Date().getDate() + 2)),
		title: 'Project Deadline',
		description: 'Submit final deliverables',
	},
]);

const selectedEvent = computed(() => {
	return events.value.find(
		(event) => event.date.toDateString() === selectedDate.value.toDateString(),
	);
});
</script>
```

### Booking Calendar

```vue
<template>
	<div class="space-y-4">
		<bo-calendar
			v-model="selectedDate"
			:disabled-dates="bookedDates"
			:min-date="new Date()"
		/>
		<bo-button
			:disabled="!selectedDate"
			@click="bookAppointment"
		>
			Book Appointment
		</bo-button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoCalendar, BoButton } from '@mrksbnc/bamboo';

const selectedDate = ref(null);
const bookedDates = ref([
	new Date(new Date().setDate(new Date().getDate() + 1)),
	new Date(new Date().setDate(new Date().getDate() + 3)),
]);

function bookAppointment() {
	// Handle booking logic
	alert('Appointment booked for ' + selectedDate.value.toLocaleDateString());
}
</script>
```

## Props

| Prop                | Type                         | Default                              | Description                                              |
| ------------------- | ---------------------------- | ------------------------------------ | -------------------------------------------------------- |
| `modelValue`        | `Date \| [Date, Date]`       | `undefined`                          | The currently selected date or date range                |
| `size`              | `BoSize`                     | `'default'`                          | The size of the calendar                                 |
| `disabled`          | `boolean`                    | `false`                              | Whether the calendar is disabled                         |
| `minDate`           | `Date`                       | `undefined`                          | The minimum selectable date                              |
| `maxDate`           | `Date`                       | `undefined`                          | The maximum selectable date                              |
| `showTime`          | `boolean`                    | `false`                              | Whether to show the time picker                          |
| `showHeader`        | `boolean`                    | `true`                               | Whether to show the header with month navigation         |
| `showWeekDays`      | `boolean`                    | `true`                               | Whether to show the week days                            |
| `showOtherMonths`   | `boolean`                    | `true`                               | Whether to show dates from previous and next months      |
| `range`             | `boolean`                    | `false`                              | Whether to allow range selection                         |
| `locale`            | `string`                     | `'en-US'`                            | The locale to use for formatting dates                   |
| `firstDayOfWeek`    | `number`                     | `0`                                  | The first day of the week (0 = Sunday, 1 = Monday, etc.) |
| `monthYearFormat`   | `Intl.DateTimeFormatOptions` | `{ month: 'long', year: 'numeric' }` | Custom format for the month/year display                 |
| `weekDayFormat`     | `Intl.DateTimeFormatOptions` | `{ weekday: 'short' }`               | Custom format for the week days                          |
| `showWeekNumbers`   | `boolean`                    | `false`                              | Whether to show week numbers                             |
| `highlightToday`    | `boolean`                    | `true`                               | Whether to highlight today's date                        |
| `showYearSelector`  | `boolean`                    | `false`                              | Whether to show the year selector                        |
| `showMonthSelector` | `boolean`                    | `false`                              | Whether to show the month selector                       |
| `class`             | `string`                     | `undefined`                          | Custom class for the calendar container                  |
| `dayClass`          | `string`                     | `undefined`                          | Custom class for the day cells                           |
| `selectedDayClass`  | `string`                     | `undefined`                          | Custom class for the selected day                        |
| `todayClass`        | `string`                     | `undefined`                          | Custom class for today's date                            |
| `disabledDayClass`  | `string`                     | `undefined`                          | Custom class for disabled days                           |
| `rangeDayClass`     | `string`                     | `undefined`                          | Custom class for days in range                           |
| `id`                | `string`                     | `generated`                          | Unique ID for the calendar                               |

## Events

| Event               | Arguments                       | Description                            |
| ------------------- | ------------------------------- | -------------------------------------- |
| `update:modelValue` | `(value: Date \| [Date, Date])` | Emitted when the selected date changes |

## Variants

### Default

The default variant provides a full-featured calendar with a clean, modern design.

```vue
<bo-calendar v-model="selectedDate" />
```

### Compact

The compact variant is designed for space-constrained interfaces.

```vue
<bo-calendar v-model="selectedDate" variant="compact" />
```

### Inline

The inline variant is designed to be embedded directly in the page.

```vue
<bo-calendar v-model="selectedDate" variant="inline" />
```

### Popup

The popup variant is designed to be used with a trigger element.

```vue
<bo-popover>
  <bo-button>Select Date</bo-button>
  <template #content>
    <bo-calendar v-model="selectedDate" variant="popup" />
  </template>
</bo-popover>
```

## Examples

### Custom Formatting

```vue
<template>
	<bo-calendar
		v-model="selectedDate"
		locale="fr-FR"
		:month-year-format="{ month: 'long', year: 'numeric' }"
		:week-day-format="{ weekday: 'long' }"
		first-day-of-week="1"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const selectedDate = ref<Date>();
</script>
```

### Custom Styling

```vue
<template>
	<bo-calendar
		v-model="selectedDate"
		class="custom-calendar"
		day-class="custom-day"
		selected-day-class="custom-selected"
		today-class="custom-today"
		disabled-day-class="custom-disabled"
		range-day-class="custom-range"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BoCalendar } from '@mrksbnc/bamboo';

const selectedDate = ref<Date>();
</script>

<style>
.custom-calendar {
	@apply rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800;
}

.custom-day {
	@apply cursor-pointer rounded-lg text-center hover:bg-neutral-100 dark:hover:bg-neutral-700;
}

.custom-selected {
	@apply bg-blue-500 text-white;
}

.custom-today {
	@apply font-bold;
}

.custom-disabled {
	@apply cursor-not-allowed opacity-50;
}

.custom-range {
	@apply bg-blue-100 dark:bg-blue-900;
}
</style>
```

## Accessibility

The calendar component is built with accessibility in mind:

- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader support
- High contrast support

## Browser Support

The calendar component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Best Practices

1. Always provide a label or aria-label for the calendar
2. Use the minDate and maxDate props to restrict date selection when appropriate
3. Consider using the range variant for date range selection
4. Use the compact variant for space-constrained interfaces
5. Consider using the time picker when time selection is required
6. Use the locale prop to ensure dates are displayed in the user's preferred format
7. Consider using the firstDayOfWeek prop to match the user's locale
8. Use the class props to customize the appearance of the calendar
9. Consider using the showWeekNumbers prop for business applications
10. Use the showYearSelector and showMonthSelector props for easier navigation
