---
title: Button Group
description: Group related buttons together with consistent styling and behavior
category: form
tags:
  - button-group
  - buttons
  - group
  - form
  - actions
outline: deep
---

<script setup lang="ts">
import { BoButtonGroup, BoButton } from '@mrksbnc/bamboo-vue'
</script>

# Button Group

The `bo-button-group` component is used to group related buttons together, providing a cohesive visual appearance, consistent spacing, and optional selection state management.

## Basic Usage

::: raw
<bo-button-group>
<bo-button>First</bo-button>
<bo-button>Second</bo-button>
<bo-button>Third</bo-button>
</bo-button-group>
:::

```vue
<bo-button-group>
  <bo-button>First</bo-button>
  <bo-button>Second</bo-button>
  <bo-button>Third</bo-button>
</bo-button-group>
```

## Selection State

Button groups can manage selection state with `v-model`. Use the `data-value` attribute on buttons to specify their values.

### Single Selection

::: raw
<bo-button-group v-model="selectedValue">
<bo-button data-value="option1">Option 1</bo-button>
<bo-button data-value="option2">Option 2</bo-button>
<bo-button data-value="option3">Option 3</bo-button>
</bo-button-group>
:::

```vue
<script setup>
	import { ref } from 'vue';
	const selectedValue = ref('option1');
</script>

<bo-button-group v-model="selectedValue">
  <bo-button data-value="option1">Option 1</bo-button>
  <bo-button data-value="option2">Option 2</bo-button>
  <bo-button data-value="option3">Option 3</bo-button>
</bo-button-group>
```

### Multiple Selection

Enable multiple selection with the `multiple` prop.

::: raw
<bo-button-group v-model="selectedValues" :multiple="true">
<bo-button data-value="bold">Bold</bo-button>
<bo-button data-value="italic">Italic</bo-button>
<bo-button data-value="underline">Underline</bo-button>
</bo-button-group>
:::

```vue
<script setup>
	import { ref } from 'vue';
	const selectedValues = ref(['bold', 'italic']);
</script>

<bo-button-group v-model="selectedValues" :multiple="true">
  <bo-button data-value="bold">Bold</bo-button>
  <bo-button data-value="italic">Italic</bo-button>
  <bo-button data-value="underline">Underline</bo-button>
</bo-button-group>
```

### Required Selection

Use the `required` prop to ensure at least one button remains selected.

::: raw
<bo-button-group v-model="requiredValue" :required="true">
<bo-button data-value="left">Left</bo-button>
<bo-button data-value="center">Center</bo-button>
<bo-button data-value="right">Right</bo-button>
</bo-button-group>
:::

```vue
<script setup>
	import { ref } from 'vue';
	const requiredValue = ref('center');
</script>

<bo-button-group v-model="requiredValue" :required="true">
  <bo-button data-value="left">Left</bo-button>
  <bo-button data-value="center">Center</bo-button>
  <bo-button data-value="right">Right</bo-button>
</bo-button-group>
```

## Scalability

Button groups can handle any number of buttons, not just three. The component automatically applies appropriate styling for first, middle, and last buttons.

::: raw
<bo-button-group>
<bo-button data-value="1">One</bo-button>
<bo-button data-value="2">Two</bo-button>
<bo-button data-value="3">Three</bo-button>
<bo-button data-value="4">Four</bo-button>
<bo-button data-value="5">Five</bo-button>
<bo-button data-value="6">Six</bo-button>
</bo-button-group>
:::

```vue
<bo-button-group>
  <bo-button data-value="1">One</bo-button>
  <bo-button data-value="2">Two</bo-button>
  <bo-button data-value="3">Three</bo-button>
  <bo-button data-value="4">Four</bo-button>
  <bo-button data-value="5">Five</bo-button>
  <bo-button data-value="6">Six</bo-button>
</bo-button-group>
```

## Variants

Button groups inherit the variant styling from their child buttons, but you can also set a consistent variant for the entire group.

::: raw

<div class="space-y-4">
  <bo-button-group>
    <bo-button variant="primary">Primary</bo-button>
    <bo-button variant="primary">Group</bo-button>
    <bo-button variant="primary">Buttons</bo-button>
  </bo-button-group>
  
  <bo-button-group>
    <bo-button variant="secondary">Secondary</bo-button>
    <bo-button variant="secondary">Group</bo-button>
    <bo-button variant="secondary">Buttons</bo-button>
  </bo-button-group>
</div>
:::

```vue
<bo-button-group>
  <bo-button variant="primary">Primary</bo-button>
  <bo-button variant="primary">Group</bo-button>
  <bo-button variant="primary">Buttons</bo-button>
</bo-button-group>

<bo-button-group>
  <bo-button variant="secondary">Secondary</bo-button>
  <bo-button variant="secondary">Group</bo-button>
  <bo-button variant="secondary">buttons</bo-button>
</bo-button-group>
```

## Sizes

The `size` prop allows you to set a consistent size for all buttons in the group.

::: raw

<div class="space-y-4">
  <bo-button-group size="sm">
    <bo-button>Small</bo-button>
    <bo-button>Group</bo-button>
    <bo-button>Buttons</bo-button>
  </bo-button-group>
  
  <bo-button-group size="default">
    <bo-button>Default</bo-button>
    <bo-button>Group</bo-button>
    <bo-button>Buttons</bo-button>
  </bo-button-group>
  
  <bo-button-group size="lg">
    <bo-button>Large</bo-button>
    <bo-button>Group</bo-button>
    <bo-button>Buttons</bo-button>
  </bo-button-group>
</div>
:::

```vue
<bo-button-group size="sm">
  <bo-button>Small</bo-button>
  <bo-button>Group</bo-button>
  <bo-button>Buttons</bo-button>
</bo-button-group>

<bo-button-group size="default">
  <bo-button>Default</bo-button>
  <bo-button>Group</bo-button>
  <bo-button>Buttons</bo-button>
</bo-button-group>

<bo-button-group size="lg">
  <bo-button>Large</bo-button>
  <bo-button>Group</bo-button>
  <bo-button>Buttons</bo-button>
</bo-button-group>
```

## Orientation

Button groups can be displayed horizontally (default) or vertically.

::: raw

<div class="flex gap-8">
  <div>
    <h4 class="mb-2">Horizontal (default)</h4>
    <bo-button-group orientation="horizontal">
      <bo-button>First</bo-button>
      <bo-button>Second</bo-button>
      <bo-button>Third</bo-button>
    </bo-button-group>
  </div>
  
  <div>
    <h4 class="mb-2">Vertical</h4>
    <bo-button-group orientation="vertical">
      <bo-button>First</bo-button>
      <bo-button>Second</bo-button>
      <bo-button>Third</bo-button>
    </bo-button-group>
  </div>
</div>
:::

```vue
<!-- Horizontal (default) -->
<bo-button-group orientation="horizontal">
  <bo-button>First</bo-button>
  <bo-button>Second</bo-button>
  <bo-button>Third</bo-button>
</bo-button-group>

<!-- Vertical -->
<bo-button-group orientation="vertical">
  <bo-button>First</bo-button>
  <bo-button>Second</bo-button>
  <bo-button>Third</bo-button>
</bo-button-group>
```

## With Icons

Button groups work well with icon buttons and mixed content.

::: raw

<div class="space-y-4">
  <bo-button-group>
    <bo-button prefix-icon="bold">Bold</bo-button>
    <bo-button prefix-icon="italic">Italic</bo-button>
    <bo-button prefix-icon="underline">Underline</bo-button>
  </bo-button-group>
  
  <bo-button-group>
    <bo-button prefix-icon="align-left" />
    <bo-button prefix-icon="align-center" />
    <bo-button prefix-icon="align-right" />
    <bo-button prefix-icon="align-justify" />
  </bo-button-group>
</div>
:::

```vue
<bo-button-group>
  <bo-button prefix-icon="bold">Bold</bo-button>
  <bo-button prefix-icon="italic">Italic</bo-button>
  <bo-button prefix-icon="underline">Underline</bo-button>
</bo-button-group>

<bo-button-group>
  <bo-button prefix-icon="align-left" />
  <bo-button prefix-icon="align-center" />
  <bo-button prefix-icon="align-right" />
  <bo-button prefix-icon="align-justify" />
</bo-button-group>
```

## Full Width

Button groups can span the full width of their container with equal-width buttons.

::: raw
<bo-button-group :full-width="true">
<bo-button>First</bo-button>
<bo-button>Second</bo-button>
<bo-button>Third</bo-button>
</bo-button-group>
:::

```vue
<bo-button-group :full-width="true">
  <bo-button>First</bo-button>
  <bo-button>Second</bo-button>
  <bo-button>Third</bo-button>
</bo-button-group>
```
