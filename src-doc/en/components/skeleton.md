---
title: Skeleton
description: Display placeholder content while loading.
outline: deep
---

<script setup lang="ts">
import { BoSkeleton } from '@/components/bo-skeleton';
</script>

# Skeleton

Display placeholder content while loading with support for different variants and animations.

## Basic Usage

```vue
<bo-skeleton />
```

<div style="margin-top: 1rem;">
  <bo-skeleton />
</div>

## Multiple Lines

```vue
<bo-skeleton :lines="3" />
```

<div style="margin-top: 1rem;">
  <bo-skeleton :lines="3" />
</div>

## Circular

```vue
<bo-skeleton variant="circular" />
```

<div style="margin-top: 1rem;">
  <bo-skeleton variant="circular" />
</div>

## Rectangular

```vue
<bo-skeleton variant="rectangular" />
```

<div style="margin-top: 1rem;">
  <bo-skeleton variant="rectangular" />
</div>

## Custom Size

```vue
<bo-skeleton :width="200" :height="100" />
```

<div style="margin-top: 1rem;">
  <bo-skeleton :width="200" :height="100" />
</div>

## Without Animation

```vue
<bo-skeleton :animated="false" />
```

<div style="margin-top: 1rem;">
  <bo-skeleton :animated="false" />
</div>

## API Reference

### Props

| Name       | Type                                    | Default  | Description                        |
| ---------- | --------------------------------------- | -------- | ---------------------------------- |
| `variant`  | `'text' \| 'circular' \| 'rectangular'` | `'text'` | Variant of the skeleton            |
| `width`    | `string \| number`                      | -        | Width of the skeleton              |
| `height`   | `string \| number`                      | -        | Height of the skeleton             |
| `lines`    | `number`                                | `1`      | Number of lines (for text variant) |
| `animated` | `boolean`                               | `true`   | Whether to show animation          |
