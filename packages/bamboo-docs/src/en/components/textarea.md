---
title: Textarea
description: A multi-line text input component with support for different sizes, states, icons, and resizing options.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoTextarea } from '@mrksbnc/bamboo-vue';

const basicValue = ref('');
const longValue = ref('This is a longer text that spans multiple lines.\nIt demonstrates the textarea component with multiple rows.');
const disabledValue = ref('This textarea is disabled');
const errorValue = ref('');
</script>

# Textarea

A multi-line text input field that allows users to enter and edit longer text content.

## Basic Usage

<div style="margin-top: 1rem;">
  <BoTextarea v-model="basicValue" placeholder="Enter your message..." />
</div>

```vue
<script setup>
	import { ref } from 'vue';
	import { BoTextarea } from '@mrksbnc/bamboo-vue';

	const value = ref('');
</script>

<template>
	<BoTextarea v-model="value" placeholder="Enter your message..." />
</template>
```

## Sizes

The textarea component supports three sizes: `sm`, `md` (default), and `lg`.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoTextarea size="sm" placeholder="Small textarea" />
  <BoTextarea size="md" placeholder="Medium textarea (default)" />
  <BoTextarea size="lg" placeholder="Large textarea" />
</div>

```vue
<BoTextarea size="sm" placeholder="Small textarea" />
<BoTextarea size="md" placeholder="Medium textarea (default)" />
<BoTextarea size="lg" placeholder="Large textarea" />
```

## Variants

The textarea component supports two variants: `default` and `filled`.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoTextarea variant="default" placeholder="Default variant" />
  <BoTextarea variant="filled" placeholder="Filled variant" />
</div>

```vue
<BoTextarea variant="default" placeholder="Default variant" />
<BoTextarea variant="filled" placeholder="Filled variant" />
```

## States

The textarea component supports different states: `default`, `valid`, and `invalid`.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoTextarea state="default" placeholder="Default state" />
  <BoTextarea state="valid" value="Valid content" />
  <BoTextarea state="invalid" placeholder="Invalid state" />
</div>

```vue
<BoTextarea state="default" placeholder="Default state" />
<BoTextarea state="valid" value="Valid content" />
<BoTextarea state="invalid" placeholder="Invalid state" />
```

## With Label

<div style="margin-top: 1rem;">
  <BoTextarea label="Message" placeholder="Enter your message" />
</div>

```vue
<BoTextarea label="Message" placeholder="Enter your message" />
```

## Required Field

<div style="margin-top: 1rem;">
  <BoTextarea label="Description" placeholder="Enter description" required />
</div>

```vue
<BoTextarea label="Description" placeholder="Enter description" required />
```

## With Hint Text

<div style="margin-top: 1rem;">
  <BoTextarea 
    label="Bio" 
    placeholder="Tell us about yourself"
    hint="Maximum 500 characters"
  />
</div>

```vue
<BoTextarea label="Bio" placeholder="Tell us about yourself" hint="Maximum 500 characters" />
```

## With Error Message

<div style="margin-top: 1rem;">
  <BoTextarea 
    label="Comment" 
    v-model="errorValue"
    state="invalid"
    error="Comment is required"
  />
</div>

```vue
<BoTextarea label="Comment" v-model="errorValue" state="invalid" error="Comment is required" />
```

## With Icons

The textarea component supports prefix and suffix icons.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoTextarea prefix-icon="message-square" placeholder="Enter message..." />
  <BoTextarea prefix-icon="edit" suffix-icon="check" placeholder="Edit content..." />
</div>

```vue
<BoTextarea prefix-icon="message-square" placeholder="Enter message..." />
<BoTextarea prefix-icon="edit" suffix-icon="check" placeholder="Edit content..." />
```

## Custom Rows

Control the number of visible rows with the `rows` prop.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <BoTextarea :rows="2" placeholder="2 rows" />
  <BoTextarea :rows="4" placeholder="4 rows (default)" />
  <BoTextarea :rows="8" placeholder="8 rows" />
</div>

```vue
<BoTextarea :rows="2" placeholder="2 rows" />
<BoTextarea :rows="4" placeholder="4 rows (default)" />
<BoTextarea :rows="8" placeholder="8 rows" />
```

## Resizable

Enable vertical resizing with the `resizable` prop.

<div style="margin-top: 1rem;">
  <BoTextarea resizable placeholder="This textarea can be resized vertically" />
</div>

```vue
<BoTextarea resizable placeholder="This textarea can be resized vertically" />
```

## Max Length

Limit the number of characters with the `maxLength` prop.

<div style="margin-top: 1rem;">
  <BoTextarea :max-length="100" placeholder="Maximum 100 characters" />
</div>

```vue
<BoTextarea :max-length="100" placeholder="Maximum 100 characters" />
```

## Disabled State

<div style="margin-top: 1rem;">
  <BoTextarea v-model="disabledValue" disabled />
</div>

```vue
<BoTextarea v-model="disabledValue" disabled />
```

## Read-only State

<div style="margin-top: 1rem;">
  <BoTextarea v-model="longValue" readonly />
</div>

```vue
<BoTextarea v-model="longValue" readonly />
```

## Expand to Fill

Use the `expand` prop to make the textarea fill available vertical space.

<div style="height: 200px; margin-top: 1rem;">
  <BoTextarea expand placeholder="This textarea expands to fill the container" />
</div>

```vue
<div style="height: 200px;">
	<BoTextarea expand placeholder="This textarea expands to fill the container" />
</div>
```

## Props

| Name          | Type                | Default     | Description                                     |
| ------------- | ------------------- | ----------- | ----------------------------------------------- |
| `modelValue`  | `string`            | `''`        | The textarea value (v-model)                    |
| `id`          | `string`            | auto        | Unique identifier for the textarea              |
| `dataTestId`  | `string`            | auto        | Data test id for testing                        |
| `size`        | `BoTextareaSize`    | `'md'`      | Size of the textarea (sm, md, lg)               |
| `state`       | `BoTextareaState`   | `'default'` | State of the textarea (default, valid, invalid) |
| `variant`     | `BoTextareaVariant` | `'default'` | Variant of the textarea (default, filled)       |
| `placeholder` | `string`            | -           | Placeholder text                                |
| `label`       | `string`            | -           | Label text                                      |
| `hint`        | `string`            | -           | Hint text displayed below the textarea          |
| `error`       | `string`            | -           | Error message (sets state to invalid)           |
| `name`        | `string`            | -           | Name attribute                                  |
| `disabled`    | `boolean`           | `false`     | Whether the textarea is disabled                |
| `readOnly`    | `boolean`           | `false`     | Whether the textarea is read-only               |
| `required`    | `boolean`           | `false`     | Whether the textarea is required                |
| `fullWidth`   | `boolean`           | `false`     | Whether the textarea takes full width           |
| `prefixIcon`  | `Icon`              | `'none'`    | Icon to display before the textarea             |
| `suffixIcon`  | `Icon`              | `'none'`    | Icon to display after the textarea              |
| `rows`        | `number`            | `4`         | Number of visible text rows                     |
| `resizable`   | `boolean`           | `false`     | Whether the textarea can be resized             |
| `maxLength`   | `number`            | -           | Maximum number of characters                    |
| `autofocus`   | `boolean`           | `false`     | Whether the textarea should autofocus           |
| `expand`      | `boolean`           | `false`     | Whether to expand to fill available space       |
| `role`        | `string`            | -           | ARIA role                                       |
| `ariaLabel`   | `string`            | -           | ARIA label                                      |

## Events

| Name                | Parameters          | Description                             |
| ------------------- | ------------------- | --------------------------------------- |
| `update:modelValue` | `value: string`     | Emitted when the textarea value changes |
| `focus`             | -                   | Emitted when the textarea is focused    |
| `blur`              | `event: FocusEvent` | Emitted when the textarea loses focus   |

## Types

```ts
type BoTextareaSize = 'sm' | 'md' | 'lg';
type BoTextareaState = 'default' | 'valid' | 'invalid';
type BoTextareaVariant = 'default' | 'filled';
```
