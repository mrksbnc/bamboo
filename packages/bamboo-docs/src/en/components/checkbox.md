---
title: Checkbox
description: A checkbox input component with support for labels, descriptions, validation states, and indeterminate state. Perfect for forms and selection interfaces.
category: form
tags:
  - checkbox
  - form
  - input
  - selection
outline: deep
---

<script setup>
import { ref } from 'vue';
import { BoCheckbox } from '@mrksbnc/bamboo-vue';

const checked = ref(false);
const checkedWithLabel = ref(true);
const indeterminate = ref(true);
</script>

# Checkbox

A checkbox input component with support for labels, descriptions, validation states, and indeterminate state. Perfect for forms and selection interfaces.

## Basic Usage

The component is called `bo-checkbox` and can be used as follows:

<div class="flex gap-4">
  <bo-checkbox v-model:checked="checked" />
</div>

```vue
<template>
	<bo-checkbox v-model:checked="checked" />
</template>

<script setup>
	import { ref } from 'vue';
	const checked = ref(false);
</script>
```

## With Label

Checkboxes can have labels for better accessibility and user experience:

<div class="flex gap-4">
  <bo-checkbox v-model:checked="checkedWithLabel" label="Accept terms and conditions" />
</div>

```vue
<bo-checkbox v-model:checked="checked" label="Accept terms and conditions" />
```

## Sizes

The `size` prop allows you to customize the size of the checkbox. The default size is `default`.

<div class="flex flex-col gap-4">
  <bo-checkbox size="sm" label="Small checkbox" />
  <bo-checkbox size="default" label="Default checkbox" />
  <bo-checkbox size="lg" label="Large checkbox" />
</div>

```vue
<bo-checkbox size="sm" label="Small checkbox" />
<bo-checkbox size="default" label="Default checkbox" />
<bo-checkbox size="lg" label="Large checkbox" />
```

## States

The `state` prop allows you to show validation states. The default state is `default`.

<div class="flex flex-col gap-4">
  <bo-checkbox state="default" label="Default state" />
  <bo-checkbox state="valid" label="Valid checkbox" />
  <bo-checkbox state="invalid" label="Invalid checkbox" error="This field is required" />
</div>

```vue
<bo-checkbox state="default" label="Default state" />
<bo-checkbox state="valid" label="Valid checkbox" />
<bo-checkbox state="invalid" label="Invalid checkbox" error="This field is required" />
```

## Indeterminate State

Checkboxes support an indeterminate state, useful for "select all" scenarios:

<div class="flex gap-4">
  <bo-checkbox v-model:checked="indeterminate" :indeterminate="true" label="Select all items" />
</div>

```vue
<bo-checkbox v-model:checked="checked" :indeterminate="true" label="Select all items" />
```

## With Description

You can add a description to provide additional context:

<div class="flex gap-4">
  <bo-checkbox 
    label="Marketing emails" 
    description="Receive updates about new products and features"
  />
</div>

```vue
<bo-checkbox
	label="Marketing emails"
	description="Receive updates about new products and features"
/>
```

## API Reference

### Props

| Prop            | Type                                | Default     | Description                           |
| --------------- | ----------------------------------- | ----------- | ------------------------------------- |
| `checked`       | `boolean`                           | `false`     | Whether the checkbox is checked       |
| `indeterminate` | `boolean`                           | `false`     | Whether the checkbox is indeterminate |
| `size`          | `'sm' \| 'default' \| 'lg'`         | `'default'` | Size of the checkbox                  |
| `state`         | `'default' \| 'valid' \| 'invalid'` | `'default'` | Validation state                      |
| `label`         | `string`                            | `undefined` | Label text                            |
| `description`   | `string`                            | `undefined` | Description text                      |
| `error`         | `string`                            | `undefined` | Error message                         |
| `disabled`      | `boolean`                           | `false`     | Whether the checkbox is disabled      |
| `required`      | `boolean`                           | `false`     | Whether the checkbox is required      |
| `name`          | `string`                            | `undefined` | Name attribute                        |
| `value`         | `string \| number \| boolean`       | `undefined` | Value attribute                       |

### Events

| Event            | Payload      | Description                        |
| ---------------- | ------------ | ---------------------------------- |
| `update:checked` | `boolean`    | Emitted when checked state changes |
| `change`         | `Event`      | Native change event                |
| `focus`          | `FocusEvent` | Native focus event                 |
| `blur`           | `FocusEvent` | Native blur event                  |
