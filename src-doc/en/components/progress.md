---
title: Progress
description: Display progress of an operation with customizable variants and sizes.
outline: deep
---

<script setup lang="ts">
import { BoProgress } from '@/components/bo-progress';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';
</script>

# Progress

Display progress of an operation with support for different variants, sizes, and labels.

## Basic Usage

```vue
<bo-progress :value="50" />
```

<div style="margin-top: 1rem;">
  <bo-progress :value="50" />
</div>

## With Label

```vue
<bo-progress :value="75" label="Loading..." :show-value="true" />
```

<div style="margin-top: 1rem;">
  <bo-progress :value="75" label="Loading..." :show-value="true" />
</div>

## Variants

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <bo-progress :value="60" :variant="BoVariant.primary" label="Primary" />
  <bo-progress :value="70" :variant="BoVariant.success" label="Success" />
  <bo-progress :value="50" :variant="BoVariant.warning" label="Warning" />
  <bo-progress :value="30" :variant="BoVariant.danger" label="Danger" />
</div>

## Sizes

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <bo-progress :value="50" :size="BoSize.xs" />
  <bo-progress :value="50" :size="BoSize.sm" />
  <bo-progress :value="50" :size="BoSize.md" />
  <bo-progress :value="50" :size="BoSize.lg" />
  <bo-progress :value="50" :size="BoSize.xl" />
</div>

## API Reference

### Props

| Name        | Type        | Default     | Description                |
| ----------- | ----------- | ----------- | -------------------------- |
| `value`     | `number`    | `0`         | Progress value (0-100)     |
| `label`     | `string`    | -           | Label for the progress bar |
| `showValue` | `boolean`   | `false`     | Whether to show the value  |
| `size`      | `BoSize`    | `'md'`      | Size of the progress bar   |
| `variant`   | `BoVariant` | `'primary'` | Variant color              |
