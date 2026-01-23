---
title: Radio Group
description: Group radio buttons together for single-selection scenarios with shared state management
category: form
tags:
  - radio-group
  - radio
  - form
  - input
  - selection
  - group
outline: deep
---

<script setup lang="ts">
import { BoRadioGroup, BoRadio } from '@mrksbnc/bamboo-vue'
import { ref } from 'vue'

const selectedOption = ref('option1')
const selectedSize = ref('medium')
const selectedColor = ref('')
</script>

# Radio Group

The `bo-radio-group` component allows you to group multiple radio buttons together for single-selection scenarios, providing shared state management, validation, and consistent styling.

## Basic Usage

::: raw
<bo-radio-group v-model="selectedOption">
<bo-radio value="option1">Option 1</bo-radio>
<bo-radio value="option2">Option 2</bo-radio>
<bo-radio value="option3">Option 3</bo-radio>
</bo-radio-group>
:::

```vue
<script setup>
	import { ref } from 'vue';
	const selectedOption = ref('option1');
</script>

<bo-radio-group v-model="selectedOption">
  <bo-radio value="option1">Option 1</bo-radio>
  <bo-radio value="option2">Option 2</bo-radio>
  <bo-radio value="option3">Option 3</bo-radio>
</bo-radio-group>
```

## With Label and Description

Radio groups can include labels and descriptions to provide context.

::: raw
<bo-radio-group
v-model="selectedSize"
label="Select a size"
description="Choose the size that best fits your needs"

> <bo-radio value="small">Small</bo-radio>
> <bo-radio value="medium">Medium</bo-radio>
> <bo-radio value="large">Large</bo-radio>
> <bo-radio value="extra-large">Extra Large</bo-radio>
> </bo-radio-group>
> :::

```vue
<bo-radio-group
	v-model="selectedSize"
	label="Select a size"
	description="Choose the size that best fits your needs"
>
  <bo-radio value="small">Small</bo-radio>
  <bo-radio value="medium">Medium</bo-radio>
  <bo-radio value="large">Large</bo-radio>
  <bo-radio value="extra-large">Extra Large</bo-radio>
</bo-radio-group>
```

## Orientation

Radio groups can be displayed horizontally or vertically.

::: raw

<div class="space-y-6">
  <div>
    <h4 class="mb-2 font-medium">Vertical (default)</h4>
    <bo-radio-group v-model="selectedColor" orientation="vertical">
      <bo-radio value="red">Red</bo-radio>
      <bo-radio value="blue">Blue</bo-radio>
      <bo-radio value="green">Green</bo-radio>
    </bo-radio-group>
  </div>
  
  <div>
    <h4 class="mb-2 font-medium">Horizontal</h4>
    <bo-radio-group v-model="selectedColor" orientation="horizontal">
      <bo-radio value="red">Red</bo-radio>
      <bo-radio value="blue">Blue</bo-radio>
      <bo-radio value="green">Green</bo-radio>
    </bo-radio-group>
  </div>
</div>
:::

```vue
<!-- Vertical (default) -->
<bo-radio-group v-model="selectedColor" orientation="vertical">
  <bo-radio value="red">Red</bo-radio>
  <bo-radio value="blue">Blue</bo-radio>
  <bo-radio value="green">Green</bo-radio>
</bo-radio-group>

<!-- Horizontal -->
<bo-radio-group v-model="selectedColor" orientation="horizontal">
  <bo-radio value="red">Red</bo-radio>
  <bo-radio value="blue">Blue</bo-radio>
  <bo-radio value="green">Green</bo-radio>
</bo-radio-group>
```

## Sizes

The `size` prop controls the size of all radio buttons in the group.

::: raw

<div class="space-y-6">
  <div>
    <h4 class="mb-2 font-medium">Small</h4>
    <bo-radio-group size="sm" orientation="horizontal">
      <bo-radio value="small1">Small 1</bo-radio>
      <bo-radio value="small2">Small 2</bo-radio>
      <bo-radio value="small3">Small 3</bo-radio>
    </bo-radio-group>
  </div>
  
  <div>
    <h4 class="mb-2 font-medium">Default</h4>
    <bo-radio-group size="default" orientation="horizontal">
      <bo-radio value="default1">Default 1</bo-radio>
      <bo-radio value="default2">Default 2</bo-radio>
      <bo-radio value="default3">Default 3</bo-radio>
    </bo-radio-group>
  </div>
  
  <div>
    <h4 class="mb-2 font-medium">Large</h4>
    <bo-radio-group size="lg" orientation="horizontal">
      <bo-radio value="large1">Large 1</bo-radio>
      <bo-radio value="large2">Large 2</bo-radio>
      <bo-radio value="large3">Large 3</bo-radio>
    </bo-radio-group>
  </div>
</div>
:::

```vue
<bo-radio-group size="sm" orientation="horizontal">
  <bo-radio value="small1">Small 1</bo-radio>
  <bo-radio value="small2">Small 2</bo-radio>
  <bo-radio value="small3">Small 3</bo-radio>
</bo-radio-group>

<bo-radio-group size="default" orientation="horizontal">
  <bo-radio value="default1">Default 1</bo-radio>
  <bo-radio value="default2">Default 2</bo-radio>
  <bo-radio value="default3">Default 3</bo-radio>
</bo-radio-group>

<bo-radio-group size="lg" orientation="horizontal">
  <bo-radio value="large1">Large 1</bo-radio>
  <bo-radio value="large2">Large 2</bo-radio>
  <bo-radio value="large3">Large 3</bo-radio>
</bo-radio-group>
```

## Disabled State

The entire radio group can be disabled, or individual radio buttons can be disabled.

::: raw

<div class="space-y-6">
  <div>
    <h4 class="mb-2 font-medium">Entire group disabled</h4>
    <bo-radio-group :disabled="true" orientation="horizontal">
      <bo-radio value="disabled1">Disabled 1</bo-radio>
      <bo-radio value="disabled2">Disabled 2</bo-radio>
      <bo-radio value="disabled3">Disabled 3</bo-radio>
    </bo-radio-group>
  </div>
  
  <div>
    <h4 class="mb-2 font-medium">Individual radios disabled</h4>
    <bo-radio-group orientation="horizontal">
      <bo-radio value="enabled">Enabled</bo-radio>
      <bo-radio value="disabled" :disabled="true">Disabled</bo-radio>
      <bo-radio value="enabled2">Enabled</bo-radio>
    </bo-radio-group>
  </div>
</div>
:::

```vue
<!-- Entire group disabled -->
<bo-radio-group :disabled="true" orientation="horizontal">
  <bo-radio value="disabled1">Disabled 1</bo-radio>
  <bo-radio value="disabled2">Disabled 2</bo-radio>
  <bo-radio value="disabled3">Disabled 3</bo-radio>
</bo-radio-group>

<!-- Individual radios disabled -->
<bo-radio-group orientation="horizontal">
  <bo-radio value="enabled">Enabled</bo-radio>
  <bo-radio value="disabled" :disabled="true">Disabled</bo-radio>
  <bo-radio value="enabled2">Enabled</bo-radio>
</bo-radio-group>
```

## Validation

Radio groups support validation states and error messages.

::: raw

<div class="space-y-6">
  <bo-radio-group 
    label="Required selection"
    description="Please select one option"
    :required="true"
    :error="true"
    error-message="A selection is required"
  >
    <bo-radio value="req1">Required Option 1</bo-radio>
    <bo-radio value="req2">Required Option 2</bo-radio>
    <bo-radio value="req3">Required Option 3</bo-radio>
  </bo-radio-group>
</div>
:::

```vue
<bo-radio-group
	label="Required selection"
	description="Please select one option"
	:required="true"
	:error="true"
	error-message="A selection is required"
>
  <bo-radio value="req1">Required Option 1</bo-radio>
  <bo-radio value="req2">Required Option 2</bo-radio>
  <bo-radio value="req3">Required Option 3</bo-radio>
</bo-radio-group>
```

## Custom Content

Radio buttons can contain rich content beyond simple text labels.

::: raw
<bo-radio-group orientation="vertical" class="space-y-3">
<bo-radio value="plan1" class="p-4 border rounded-lg">
<div class="flex justify-between items-start">
<div>
<div class="font-semibold">Basic Plan</div>
<div class="text-sm text-gray-600">Perfect for individuals</div>
</div>
<div class="text-lg font-bold">$9/mo</div>
</div>
</bo-radio>

  <bo-radio value="plan2" class="p-4 border rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <div class="font-semibold">Pro Plan</div>
        <div class="text-sm text-gray-600">Great for small teams</div>
      </div>
      <div class="text-lg font-bold">$29/mo</div>
    </div>
  </bo-radio>
  
  <bo-radio value="plan3" class="p-4 border rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <div class="font-semibold">Enterprise Plan</div>
        <div class="text-sm text-gray-600">For large organizations</div>
      </div>
      <div class="text-lg font-bold">$99/mo</div>
    </div>
  </bo-radio>
</bo-radio-group>
:::

```vue
<bo-radio-group orientation="vertical" class="space-y-3">
  <bo-radio value="plan1" class="p-4 border rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <div class="font-semibold">Basic Plan</div>
        <div class="text-sm text-gray-600">Perfect for individuals</div>
      </div>
      <div class="text-lg font-bold">$9/mo</div>
    </div>
  </bo-radio>
  
  <bo-radio value="plan2" class="p-4 border rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <div class="font-semibold">Pro Plan</div>
        <div class="text-sm text-gray-600">Great for small teams</div>
      </div>
      <div class="text-lg font-bold">$29/mo</div>
    </div>
  </bo-radio>
</bo-radio-group>
```
