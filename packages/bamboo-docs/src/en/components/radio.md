---
title: Radio
description: A radio button component with support for labels, descriptions, and validation states. Perfect for single-choice selections in forms.
category: form
tags:
  - radio
  - form
  - input
  - selection
outline: deep
---

<script setup>
import { ref } from 'vue';
import { BoRadio } from '@mrksbnc/bamboo-vue';

const selectedOption = ref('option1');
const selectedSize = ref('default');
</script>

# Radio

A radio button component with support for labels, descriptions, and validation states. Perfect for single-choice selections in forms.

## Basic Usage

The component is called `bo-radio` and can be used as follows:

<div class="flex flex-col gap-2">
  <bo-radio 
    :checked="selectedOption === 'option1'"
    @update:checked="selectedOption = 'option1'"
    name="example"
    value="option1"
    label="Option 1"
  />
  <bo-radio 
    :checked="selectedOption === 'option2'"
    @update:checked="selectedOption = 'option2'"
    name="example"
    value="option2"
    label="Option 2"
  />
  <bo-radio 
    :checked="selectedOption === 'option3'"
    @update:checked="selectedOption = 'option3'"
    name="example"
    value="option3"
    label="Option 3"
  />
</div>

```vue
<template>
	<bo-radio
		:checked="selectedOption === 'option1'"
		@update:checked="selectedOption = 'option1'"
		name="example"
		value="option1"
		label="Option 1"
	/>
	<bo-radio
		:checked="selectedOption === 'option2'"
		@update:checked="selectedOption = 'option2'"
		name="example"
		value="option2"
		label="Option 2"
	/>
</template>

<script setup>
	import { ref } from 'vue';
	const selectedOption = ref('option1');
</script>
```

## Sizes

The `size` prop allows you to customize the size of the radio button. The default size is `default`.

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium">Small</h4>
    <bo-radio 
      :checked="selectedSize === 'sm'"
      @update:checked="selectedSize = 'sm'"
      size="sm" 
      name="size-example"
      value="sm"
      label="Small radio button"
    />
  </div>
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium">Default</h4>
    <bo-radio 
      :checked="selectedSize === 'default'"
      @update:checked="selectedSize = 'default'"
      size="default" 
      name="size-example"
      value="default"
      label="Default radio button"
    />
  </div>
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium">Large</h4>
    <bo-radio 
      :checked="selectedSize === 'lg'"
      @update:checked="selectedSize = 'lg'"
      size="lg" 
      name="size-example"
      value="lg"
      label="Large radio button"
    />
  </div>
</div>

```vue
<bo-radio size="sm" label="Small radio button" />
<bo-radio size="default" label="Default radio button" />
<bo-radio size="lg" label="Large radio button" />
```

## States

The `state` prop allows you to show validation states. The default state is `default`.

<div class="flex flex-col gap-4">
  <bo-radio state="default" label="Default state" name="state-example" />
  <bo-radio state="valid" label="Valid radio button" name="state-example" />
  <bo-radio state="invalid" label="Invalid radio button" error="Please select an option" name="state-example" />
</div>

```vue
<bo-radio state="default" label="Default state" />
<bo-radio state="valid" label="Valid radio button" />
<bo-radio state="invalid" label="Invalid radio button" error="Please select an option" />
```

## With Description

You can add a description to provide additional context:

<div class="flex flex-col gap-2">
  <bo-radio 
    label="Free plan" 
    description="Basic features with limited usage"
    name="plan-example"
    value="free"
  />
  <bo-radio 
    label="Pro plan" 
    description="Advanced features with unlimited usage"
    name="plan-example"
    value="pro"
  />
</div>

```vue
<bo-radio
	label="Free plan"
	description="Basic features with limited usage"
	name="plan"
	value="free"
/>
<bo-radio
	label="Pro plan"
	description="Advanced features with unlimited usage"
	name="plan"
	value="pro"
/>
```

## API Reference

### Props

| Prop          | Type                                | Default     | Description                            |
| ------------- | ----------------------------------- | ----------- | -------------------------------------- |
| `checked`     | `boolean`                           | `false`     | Whether the radio button is checked    |
| `size`        | `'sm' \| 'default' \| 'lg'`         | `'default'` | Size of the radio button               |
| `state`       | `'default' \| 'valid' \| 'invalid'` | `'default'` | Validation state                       |
| `label`       | `string`                            | `undefined` | Label text                             |
| `description` | `string`                            | `undefined` | Description text                       |
| `error`       | `string`                            | `undefined` | Error message                          |
| `disabled`    | `boolean`                           | `false`     | Whether the radio button is disabled   |
| `required`    | `boolean`                           | `false`     | Whether the radio button is required   |
| `name`        | `string`                            | `undefined` | Name attribute (required for grouping) |
| `value`       | `string \| number \| boolean`       | `undefined` | Value attribute                        |

### Events

| Event            | Payload      | Description                        |
| ---------------- | ------------ | ---------------------------------- |
| `update:checked` | `boolean`    | Emitted when checked state changes |
| `change`         | `Event`      | Native change event                |
| `focus`          | `FocusEvent` | Native focus event                 |
| `blur`           | `FocusEvent` | Native blur event                  |
