---
title: Input
description: A versatile input component with support for different sizes, states, icons, pills, and password reveal functionality.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoInput, BoInputPill } from '@mrksbnc/bamboo-vue';

const basicValue = ref('');
const emailValue = ref('');
const passwordValue = ref('');
const disabledValue = ref('Disabled input');
const readonlyValue = ref('Read-only input');
const errorValue = ref('');
const successValue = ref('Valid input');
const pillsValue = ref('');
const pills = ref<BoInputPill[]>([
  { id: '1', text: 'Tag 1' },
  { id: '2', text: 'Tag 2' },
  { id: '3', text: 'Tag 3' },
]);

function removePill(id: string) {
  pills.value = pills.value.filter(p => p.id !== id);
}
</script>

# Input

A text input field that allows users to enter and edit text data.

## Basic Usage

<div style="margin-top: 1rem;">
  <BoInput v-model="basicValue" placeholder="Enter text..." />
</div>

```vue
<script setup>
	import { ref } from 'vue';
	import { BoInput } from '@mrksbnc/bamboo-vue';

	const value = ref('');
</script>

<template>
	<BoInput v-model="value" placeholder="Enter text..." />
</template>
```

## Sizes

The input component supports three sizes: `sm`, `md` (default), and `lg`.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoInput size="sm" placeholder="Small input" />
  <BoInput size="md" placeholder="Medium input (default)" />
  <BoInput size="lg" placeholder="Large input" />
</div>

```vue
<BoInput size="sm" placeholder="Small input" />
<BoInput size="md" placeholder="Medium input (default)" />
<BoInput size="lg" placeholder="Large input" />
```

## Variants

The input component supports two variants: `default` and `filled`.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoInput variant="default" placeholder="Default variant" />
  <BoInput variant="filled" placeholder="Filled variant" />
</div>

```vue
<BoInput variant="default" placeholder="Default variant" />
<BoInput variant="filled" placeholder="Filled variant" />
```

## States

The input component supports different states: `default`, `valid`, and `invalid`.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoInput state="default" placeholder="Default state" />
  <BoInput state="valid" v-model="successValue" />
  <BoInput state="invalid" placeholder="Invalid state" />
</div>

```vue
<BoInput state="default" placeholder="Default state" />
<BoInput state="valid" v-model="successValue" />
<BoInput state="invalid" placeholder="Invalid state" />
```

## With Label

<div style="margin-top: 1rem;">
  <BoInput label="Email Address" placeholder="Enter your email" />
</div>

```vue
<BoInput label="Email Address" placeholder="Enter your email" />
```

## Required Field

<div style="margin-top: 1rem;">
  <BoInput label="Username" placeholder="Enter username" required />
</div>

```vue
<BoInput label="Username" placeholder="Enter username" required />
```

## With Hint Text

<div style="margin-top: 1rem;">
  <BoInput 
    label="Password" 
    type="password" 
    placeholder="Enter password"
    hint="Must be at least 8 characters long"
  />
</div>

```vue
<BoInput
	label="Password"
	type="password"
	placeholder="Enter password"
	hint="Must be at least 8 characters long"
/>
```

## With Error Message

<div style="margin-top: 1rem;">
  <BoInput 
    label="Email" 
    v-model="errorValue"
    state="invalid"
    error="Please enter a valid email address"
  />
</div>

```vue
<BoInput
	label="Email"
	v-model="errorValue"
	state="invalid"
	error="Please enter a valid email address"
/>
```

## With Icons

The input component supports prefix and suffix icons.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoInput prefix-icon="search" placeholder="Search..." />
  <BoInput prefix-icon="mail" placeholder="Email address" />
  <BoInput prefix-icon="user" suffix-icon="check" placeholder="Username" />
</div>

```vue
<BoInput prefix-icon="search" placeholder="Search..." />
<BoInput prefix-icon="mail" placeholder="Email address" />
<BoInput prefix-icon="user" suffix-icon="check" placeholder="Username" />
```

## Input Types

The input component supports various HTML input types.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoInput type="text" placeholder="Text input" />
  <BoInput type="email" placeholder="Email input" />
  <BoInput type="password" placeholder="Password input" />
  <BoInput type="number" placeholder="Number input" />
  <BoInput type="search" placeholder="Search input" />
  <BoInput type="tel" placeholder="Phone input" />
</div>

```vue
<BoInput type="text" placeholder="Text input" />
<BoInput type="email" placeholder="Email input" />
<BoInput type="password" placeholder="Password input" />
<BoInput type="number" placeholder="Number input" />
<BoInput type="search" placeholder="Search input" />
<BoInput type="tel" placeholder="Phone input" />
```

## Password with Reveal

<div style="margin-top: 1rem;">
  <BoInput 
    type="password" 
    v-model="passwordValue"
    placeholder="Enter password"
    reveal-password
  />
</div>

```vue
<BoInput type="password" v-model="passwordValue" placeholder="Enter password" reveal-password />
```

## Disabled State

<div style="margin-top: 1rem;">
  <BoInput v-model="disabledValue" disabled />
</div>

```vue
<BoInput v-model="disabledValue" disabled />
```

## Read-only State

<div style="margin-top: 1rem;">
  <BoInput v-model="readonlyValue" readonly />
</div>

```vue
<BoInput v-model="readonlyValue" readonly />
```

## With Pills

The input component supports displaying pills (tags) inside the input field.

<div style="margin-top: 1rem;">
  <BoInput 
    v-model="pillsValue"
    :pills="pills"
    placeholder="Add tags..."
    @pill-remove="removePill"
  />
</div>

```vue
<script setup>
	import { ref } from 'vue';
	import { BoInput } from '@mrksbnc/bamboo-vue';

	const value = ref('');
	const pills = ref([
		{ id: '1', text: 'Tag 1' },
		{ id: '2', text: 'Tag 2' },
		{ id: '3', text: 'Tag 3' },
	]);

	function removePill(id) {
		pills.value = pills.value.filter((p) => p.id !== id);
	}
</script>

<template>
	<BoInput v-model="value" :pills="pills" placeholder="Add tags..." @pill-remove="removePill" />
</template>
```

## Props

| Name               | Type             | Default     | Description                                     |
| ------------------ | ---------------- | ----------- | ----------------------------------------------- |
| `modelValue`       | `string`         | `''`        | The input value (v-model)                       |
| `id`               | `string`         | auto        | Unique identifier for the input                 |
| `dataTestId`       | `string`         | auto        | Data test id for testing                        |
| `size`             | `BoInputSize`    | `'md'`      | Size of the input (sm, md, lg)                  |
| `state`            | `BoInputState`   | `'default'` | State of the input (default, valid, invalid)    |
| `variant`          | `BoInputVariant` | `'default'` | Variant of the input (default, filled)          |
| `type`             | `string`         | `'text'`    | HTML input type                                 |
| `placeholder`      | `string`         | -           | Placeholder text                                |
| `label`            | `string`         | -           | Label text                                      |
| `hint`             | `string`         | -           | Hint text displayed below the input             |
| `error`            | `string`         | -           | Error message (sets state to invalid)           |
| `name`             | `string`         | -           | Name attribute                                  |
| `disabled`         | `boolean`        | `false`     | Whether the input is disabled                   |
| `readOnly`         | `boolean`        | `false`     | Whether the input is read-only                  |
| `required`         | `boolean`        | `false`     | Whether the input is required                   |
| `fullWidth`        | `boolean`        | `false`     | Whether the input takes full width              |
| `prefixIcon`       | `Icon`           | `'none'`    | Icon to display before the input                |
| `suffixIcon`       | `Icon`           | `'none'`    | Icon to display after the input                 |
| `autofocus`        | `boolean`        | `false`     | Whether the input should autofocus              |
| `pills`            | `BoInputPill[]`  | `[]`        | Array of pill items to display                  |
| `horizontalScroll` | `boolean`        | `false`     | Enable horizontal scrolling for pills           |
| `revealPassword`   | `boolean`        | `false`     | Show password reveal toggle for password inputs |
| `role`             | `string`         | -           | ARIA role                                       |
| `ariaLabel`        | `string`         | -           | ARIA label                                      |

## Events

| Name                | Parameters          | Description                          |
| ------------------- | ------------------- | ------------------------------------ |
| `update:modelValue` | `value: string`     | Emitted when the input value changes |
| `focus`             | -                   | Emitted when the input is focused    |
| `blur`              | `event: FocusEvent` | Emitted when the input loses focus   |
| `change`            | `value: string`     | Emitted when the input value changes |
| `prefixIconClick`   | -                   | Emitted when prefix icon is clicked  |
| `suffixIconClick`   | -                   | Emitted when suffix icon is clicked  |
| `pillRemove`        | `id: string`        | Emitted when a pill is removed       |

## Slots

| Name              | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `topRightContent` | Content to display in the top right of the label area |

## Types

```ts
type BoInputSize = 'sm' | 'md' | 'lg';
type BoInputState = 'default' | 'valid' | 'invalid';
type BoInputVariant = 'default' | 'filled';

interface BoInputPill {
	id: string;
	text: string;
	icon?: Icon;
}
```
