# Datepicker

The Datepicker component provides a user-friendly interface for selecting dates with various customization options.

## Features

- Date selection with calendar popup
- Date range selection
- Custom date formatting
- Disabled dates
- Min/max date constraints
- Localization support
- Keyboard navigation
- Accessibility features

## Basic Usage

<div class="component-preview">
	<bo-datepicker v-model="selectedDate" />
</div>

```vue
<template>
	<bo-datepicker v-model="selectedDate" />
</template>

<script setup>
import { ref } from 'vue';
import { BoDatepicker } from '@mrksbnc/bamboo';

const selectedDate = ref(new Date());
</script>
```

## With Placeholder

<div class="component-preview">
	<bo-datepicker 
		v-model="selectedDate" 
		placeholder="Select a date" 
	/>
</div>

```vue
<template>
	<bo-datepicker
		v-model="selectedDate"
		placeholder="Select a date"
	/>
</template>
```

## Date Range Selection

<div class="component-preview">
	<bo-datepicker 
		v-model="dateRange" 
		:range="true" 
		placeholder="Select date range" 
	/>
</div>

```vue
<template>
	<bo-datepicker
		v-model="dateRange"
		:range="true"
		placeholder="Select date range"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoDatepicker } from '@mrksbnc/bamboo';

const dateRange = ref({
	start: new Date(),
	end: new Date(new Date().setDate(new Date().getDate() + 7)),
});
</script>
```

## With Min/Max Date

<div class="component-preview">
	<bo-datepicker 
		v-model="selectedDate" 
		:min-date="minDate" 
		:max-date="maxDate" 
	/>
</div>

```vue
<template>
	<bo-datepicker
		v-model="selectedDate"
		:min-date="minDate"
		:max-date="maxDate"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoDatepicker } from '@mrksbnc/bamboo';

const selectedDate = ref(new Date());
const minDate = new Date();
const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
</script>
```

## With Time Selection

<div class="component-preview">
	<bo-datepicker 
		v-model="selectedDateTime" 
		:show-time="true" 
	/>
</div>

```vue
<template>
	<bo-datepicker
		v-model="selectedDateTime"
		:show-time="true"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoDatepicker } from '@mrksbnc/bamboo';

const selectedDateTime = ref(new Date());
</script>
```

## Usage Examples

### Form Integration

```vue
<template>
	<form
		@submit.prevent="handleSubmit"
		class="space-y-4"
	>
		<div class="space-y-2">
			<label class="block text-sm font-medium">Appointment Date</label>
			<bo-datepicker
				v-model="formData.date"
				:min-date="new Date()"
				placeholder="Select appointment date"
			/>
		</div>

		<div class="space-y-2">
			<label class="block text-sm font-medium">Time Range</label>
			<bo-datepicker
				v-model="formData.timeRange"
				:range="true"
				:show-time="true"
				placeholder="Select time range"
			/>
		</div>

		<bo-button type="submit">Schedule Appointment</bo-button>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { BoDatepicker, BoButton } from '@mrksbnc/bamboo';

const formData = ref({
	date: null,
	timeRange: null,
});

function handleSubmit() {
	console.log('Form submitted:', formData.value);
}
</script>
```

### Filter Component

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-datepicker
			v-model="filters.startDate"
			placeholder="Start Date"
		/>
		<span>to</span>
		<bo-datepicker
			v-model="filters.endDate"
			placeholder="End Date"
		/>
		<bo-button @click="applyFilters">Apply Filters</bo-button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoDatepicker, BoButton } from '@mrksbnc/bamboo';

const filters = ref({
	startDate: null,
	endDate: null,
});

function applyFilters() {
	// Apply date filters to your data
	console.log('Filters applied:', filters.value);
}
</script>
```

## Props

| Prop            | Type      | Default         | Description                        |
| --------------- | --------- | --------------- | ---------------------------------- |
| `modelValue`    | `Date`    | `undefined`     | The currently selected date        |
| `size`          | `BoSize`  | `'default'`     | The size of the datepicker         |
| `disabled`      | `boolean` | `false`         | Whether the datepicker is disabled |
| `readonly`      | `boolean` | `false`         | Whether the datepicker is readonly |
| `placeholder`   | `string`  | `'Select date'` | The placeholder text               |
| `format`        | `string`  | `'MM/DD/YYYY'`  | The date format                    |
| `minDate`       | `Date`    | `undefined`     | The minimum selectable date        |
| `maxDate`       | `Date`    | `undefined`     | The maximum selectable date        |
| `showTime`      | `boolean` | `false`         | Whether to show the time picker    |
| `clearable`     | `boolean` | `true`          | Whether to show the clear button   |
| `required`      | `boolean` | `false`         | Whether the datepicker is required |
| `name`          | `string`  | `undefined`     | The name of the input              |
| `id`            | `string`  | `generated`     | The ID of the input                |
| `class`         | `string`  | `undefined`     | Custom class for the datepicker    |
| `inputClass`    | `string`  | `undefined`     | Custom class for the input         |
| `calendarClass` | `string`  | `undefined`     | Custom class for the calendar      |
| `error`         | `string`  | `undefined`     | Error message to display           |
| `success`       | `string`  | `undefined`     | Success message to display         |
| `hint`          | `string`  | `undefined`     | Hint text to display               |

## Events

| Event               | Arguments             | Description                              |
| ------------------- | --------------------- | ---------------------------------------- |
| `update:modelValue` | `(value: Date)`       | Emitted when the selected date changes   |
| `focus`             | `(event: FocusEvent)` | Emitted when the input is focused        |
| `blur`              | `(event: FocusEvent)` | Emitted when the input is blurred        |
| `clear`             | `()`                  | Emitted when the clear button is clicked |

## Accessibility

The datepicker component is built with accessibility in mind:

- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader support
- High contrast support

## Browser Support

The datepicker component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Best Practices

1. Always provide a label or aria-label for the datepicker
2. Use the minDate and maxDate props to restrict date selection when appropriate
3. Consider using the showTime prop when time selection is required
4. Use the clearable prop to allow users to clear their selection
5. Use the required prop when the date is mandatory
6. Use the error prop to display validation errors
7. Use the success prop to display success messages
8. Use the hint prop to provide additional information
9. Consider using the readonly prop to prevent user input
10. Use the class props to customize the appearance of the datepicker
