---
title: Checkbox
description: Checkbox components for selecting multiple options with support for groups, sizes, and states.
outline: deep
---

<script setup>
import { ref } from 'vue';
import { BoCheckbox, BoCheckboxGroup } from '@/components/bo-checkbox';

const accepted = ref(false);
const selected = ref([]);
</script>

# Checkbox & Checkbox Group

Checkbox components for selecting multiple options.

## Basic Usage

```vue
<script setup>
	import { ref } from 'vue';
	import { BoCheckbox } from '@/components';

	const accepted = ref(false);
</script>

<template>
	<BoCheckbox v-model="accepted" label="I accept the terms and conditions" />
</template>
```

<div style="margin-top: 1rem;">
	<BoCheckbox v-model="accepted" label="I accept the terms and conditions" />
</div>

## Checkbox Group

Use `BoCheckboxGroup` to manage multiple checkboxes.

```vue
<script setup>
	import { ref } from 'vue';
	import { BoCheckbox, BoCheckboxGroup } from '@/components';

	const selected = ref([]);
</script>

<template>
	<BoCheckboxGroup v-model="selected" label="Select your interests">
		<BoCheckbox value="sports" label="Sports" />
		<BoCheckbox value="music" label="Music" />
		<BoCheckbox value="art" label="Art" />
	</BoCheckboxGroup>
</template>
```

<div style="margin-top: 1rem;">
	<BoCheckboxGroup v-model="selected" label="Select your interests">
		<BoCheckbox value="sports" label="Sports" />
		<BoCheckbox value="music" label="Music" />
		<BoCheckbox value="art" label="Art" />
	</BoCheckboxGroup>
</div>

## Sizes

Checkboxes support three sizes: `sm`, `md` (default), and `lg`.

```vue
<template>
	<BoCheckbox v-model="value" size="sm" label="Small" />
	<BoCheckbox v-model="value" size="md" label="Medium" />
	<BoCheckbox v-model="value" size="lg" label="Large" />
</template>
```

<div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
	<BoCheckbox v-model="accepted" size="sm" label="Small" />
	<BoCheckbox v-model="accepted" size="md" label="Medium" />
	<BoCheckbox v-model="accepted" size="lg" label="Large" />
</div>

## Indeterminate State

Useful for "select all" functionality.

```vue
<script setup>
	import { ref, computed } from 'vue';

	const allSelected = ref(false);
	const selected = ref([]);
	const options = ['option1', 'option2', 'option3'];

	const indeterminate = computed(() => {
		return selected.value.length > 0 && selected.value.length < options.length;
	});

	function toggleAll() {
		if (allSelected.value) {
			selected.value = [...options];
		} else {
			selected.value = [];
		}
	}
</script>

<template>
	<BoCheckbox
		v-model="allSelected"
		:indeterminate="indeterminate"
		label="Select all"
		@change="toggleAll"
	/>

	<BoCheckboxGroup v-model="selected">
		<BoCheckbox value="option1" label="Option 1" />
		<BoCheckbox value="option2" label="Option 2" />
		<BoCheckbox value="option3" label="Option 3" />
	</BoCheckboxGroup>
</template>
```

## Horizontal Layout

```vue
<template>
	<BoCheckboxGroup v-model="selected" direction="horizontal">
		<BoCheckbox value="1" label="Option 1" />
		<BoCheckbox value="2" label="Option 2" />
		<BoCheckbox value="3" label="Option 3" />
	</BoCheckboxGroup>
</template>
```

## Disabled State

```vue
<template>
	<BoCheckbox v-model="value" label="Disabled checkbox" disabled />

	<BoCheckboxGroup v-model="selected" disabled>
		<BoCheckbox value="1" label="Disabled option 1" />
		<BoCheckbox value="2" label="Disabled option 2" />
	</BoCheckboxGroup>
</template>
```

## With Helper Text

```vue
<template>
	<BoCheckbox
		v-model="value"
		label="Subscribe to newsletter"
		helper-text="Receive weekly updates and news"
	/>
</template>
```

## Error State

```vue
<template>
	<BoCheckboxGroup
		v-model="selected"
		label="Required selection"
		has-error
		error-text="Please select at least one option"
		required
	>
		<BoCheckbox value="1" label="Option 1" />
		<BoCheckbox value="2" label="Option 2" />
	</BoCheckboxGroup>
</template>
```

## Checkbox Group Props

| Prop         | Type                         | Default      | Description               |
| ------------ | ---------------------------- | ------------ | ------------------------- |
| `modelValue` | `(string \| number)[]`       | `[]`         | Selected values (v-model) |
| `size`       | `'sm' \| 'md' \| 'lg'`       | `'md'`       | Size of checkboxes        |
| `label`      | `string`                     | -            | Group label               |
| `helperText` | `string`                     | -            | Helper text               |
| `errorText`  | `string`                     | -            | Error message             |
| `hasError`   | `boolean`                    | `false`      | Error state               |
| `required`   | `boolean`                    | `false`      | Required indicator        |
| `direction`  | `'horizontal' \| 'vertical'` | `'vertical'` | Layout direction          |
| `disabled`   | `boolean`                    | `false`      | Disable all checkboxes    |

## Checkbox Props

| Prop            | Type                              | Default | Description              |
| --------------- | --------------------------------- | ------- | ------------------------ |
| `modelValue`    | `boolean \| (string \| number)[]` | `false` | Checkbox value (v-model) |
| `value`         | `string \| number`                | -       | Value when used in group |
| `label`         | `string`                          | -       | Label text               |
| `helperText`    | `string`                          | -       | Helper text              |
| `size`          | `'sm' \| 'md' \| 'lg'`            | `'md'`  | Size                     |
| `indeterminate` | `boolean`                         | `false` | Indeterminate state      |
| `disabled`      | `boolean`                         | `false` | Disabled state           |

## Accessibility

- Proper checkbox semantics
- Keyboard accessible
- Focus management
- ARIA attributes
- Screen reader support
