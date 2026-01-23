---
title: Progress
description: Display the progress of a task or operation with customizable styles and animations
category: feedback
tags:
  - progress
  - loading
  - status
  - indicator
  - feedback
outline: deep
---

<script setup lang="ts">
import { BoProgress } from '@mrksbnc/bamboo-vue'
</script>

# Progress

The `bo-progress` component is used to display the progress of a task, operation, or loading state. It provides visual feedback to users about the completion status of ongoing processes.

## Basic Usage

::: raw
<bo-progress :value="50" />
:::

```vue
<bo-progress :value="50" />
```

## With Label

Progress bars can display the current value as a label for better user understanding.

::: raw

<div class="space-y-4">
  <bo-progress :value="25" :show-label="true" />
  <bo-progress :value="50" :show-label="true" />
  <bo-progress :value="75" :show-label="true" />
  <bo-progress :value="100" :show-label="true" />
</div>
:::

```vue
<bo-progress :value="25" :show-label="true" />
<bo-progress :value="50" :show-label="true" />
<bo-progress :value="75" :show-label="true" />
<bo-progress :value="100" :show-label="true" />
```

## Variants

The `variant` prop allows you to customize the color of the progress bar to indicate different states or types of progress.

::: raw

<div class="space-y-4">
  <bo-progress :value="60" variant="primary" :show-label="true" />
  <bo-progress :value="60" variant="secondary" :show-label="true" />
  <bo-progress :value="60" variant="success" :show-label="true" />
  <bo-progress :value="60" variant="warning" :show-label="true" />
  <bo-progress :value="60" variant="error" :show-label="true" />
</div>
:::

```vue
<bo-progress :value="60" variant="primary" :show-label="true" />
<bo-progress :value="60" variant="secondary" :show-label="true" />
<bo-progress :value="60" variant="success" :show-label="true" />
<bo-progress :value="60" variant="warning" :show-label="true" />
<bo-progress :value="60" variant="error" :show-label="true" />
```

## Sizes

The `size` prop allows you to customize the height and overall size of the progress bar.

::: raw

<div class="space-y-4">
  <bo-progress :value="40" size="sm" :show-label="true" />
  <bo-progress :value="40" size="default" :show-label="true" />
  <bo-progress :value="40" size="lg" :show-label="true" />
</div>
:::

```vue
<bo-progress :value="40" size="sm" :show-label="true" />
<bo-progress :value="40" size="default" :show-label="true" />
<bo-progress :value="40" size="lg" :show-label="true" />
```

## Indeterminate State

For operations where the exact progress cannot be determined, use the indeterminate state to show ongoing activity.

::: raw

<div class="space-y-4">
  <bo-progress :indeterminate="true" />
  <bo-progress :indeterminate="true" variant="success" />
  <bo-progress :indeterminate="true" variant="warning" />
</div>
:::

```vue
<bo-progress :indeterminate="true" />
<bo-progress :indeterminate="true" variant="success" />
<bo-progress :indeterminate="true" variant="warning" />
```

## Custom Labels

You can provide custom labels instead of the default percentage display.

::: raw

<div class="space-y-4">
  <bo-progress :value="30" label="Loading..." />
  <bo-progress :value="65" label="3 of 5 files uploaded" />
  <bo-progress :value="90" label="Almost done!" />
</div>
:::

```vue
<bo-progress :value="30" label="Loading..." />
<bo-progress :value="65" label="3 of 5 files uploaded" />
<bo-progress :value="90" label="Almost done!" />
```

## Animated

Progress bars can be animated to provide smooth transitions when the value changes.

::: raw

<div class="space-y-4">
  <bo-progress :value="45" :animated="true" :show-label="true" />
  <bo-progress :value="75" :animated="true" variant="success" :show-label="true" />
</div>
:::

```vue
<bo-progress :value="45" :animated="true" :show-label="true" />
<bo-progress :value="75" :animated="true" variant="success" :show-label="true" />
```

## Striped

Add a striped pattern to the progress bar for additional visual interest.

::: raw

<div class="space-y-4">
  <bo-progress :value="60" :striped="true" :show-label="true" />
  <bo-progress :value="60" :striped="true" :animated="true" variant="success" :show-label="true" />
</div>
:::

```vue
<bo-progress :value="60" :striped="true" :show-label="true" />
<bo-progress :value="60" :striped="true" :animated="true" variant="success" :show-label="true" />
```
