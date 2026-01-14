---
title: Badge
description: A versatile badge component for displaying labels, counts, and status indicators with various styles and sizes.
outline: deep
---

<script setup lang="ts">
import { BoBadge } from '@mrksbnc/bamboo-vue';
</script>

# Badge

A badge component for displaying small pieces of information like labels, counts, or status indicators.

## Basic Usage

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge label="New" />
  <BoBadge label="Featured" />
  <BoBadge label="Sale" />
</div>

```vue
<BoBadge label="New" />
<BoBadge label="Featured" />
<BoBadge label="Sale" />
```

## Sizes

The badge component supports five sizes: `xs`, `sm`, `default`, `lg`, and `xl`.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge size="xs" label="Extra Small" />
  <BoBadge size="sm" label="Small" />
  <BoBadge size="default" label="Default" />
  <BoBadge size="lg" label="Large" />
  <BoBadge size="xl" label="Extra Large" />
</div>

```vue
<BoBadge size="xs" label="Extra Small" />
<BoBadge size="sm" label="Small" />
<BoBadge size="default" label="Default" />
<BoBadge size="lg" label="Large" />
<BoBadge size="xl" label="Extra Large" />
```

## Variants

The badge component supports different color variants.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge variant="primary" label="Primary" />
  <BoBadge variant="secondary" label="Secondary" />
  <BoBadge variant="success" label="Success" />
  <BoBadge variant="warning" label="Warning" />
  <BoBadge variant="danger" label="Danger" />
  <BoBadge variant="light" label="Light" />
  <BoBadge variant="dark" label="Dark" />
</div>

```vue
<BoBadge variant="primary" label="Primary" />
<BoBadge variant="secondary" label="Secondary" />
<BoBadge variant="success" label="Success" />
<BoBadge variant="warning" label="Warning" />
<BoBadge variant="danger" label="Danger" />
<BoBadge variant="light" label="Light" />
<BoBadge variant="dark" label="Dark" />
```

## Types

The badge component supports two types: `default` (filled) and `outline`.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge type="default" variant="primary" label="Filled" />
  <BoBadge type="outline" variant="primary" label="Outline" />
  <BoBadge type="default" variant="success" label="Filled" />
  <BoBadge type="outline" variant="success" label="Outline" />
  <BoBadge type="default" variant="danger" label="Filled" />
  <BoBadge type="outline" variant="danger" label="Outline" />
</div>

```vue
<BoBadge type="default" variant="primary" label="Filled" />
<BoBadge type="outline" variant="primary" label="Outline" />
```

## Shapes

The badge component supports different shapes: `default`, `pill`, `flat`, and `circle`.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge shape="default" label="Default" />
  <BoBadge shape="pill" label="Pill" />
  <BoBadge shape="flat" label="Flat" />
  <BoBadge shape="circle" :icon="{ prefix: 'check' }" />
</div>

```vue
<BoBadge shape="default" label="Default" />
<BoBadge shape="pill" label="Pill" />
<BoBadge shape="flat" label="Flat" />
<BoBadge shape="circle" :icon="{ prefix: 'check' }" />
```

## With Icons

Add prefix or suffix icons to badges.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge label="Verified" :icon="{ prefix: 'check' }" />
  <BoBadge label="Alert" :icon="{ prefix: 'alert-circle' }" variant="warning" />
  <BoBadge label="Error" :icon="{ prefix: 'x' }" variant="danger" />
  <BoBadge label="Next" :icon="{ suffix: 'arrow-right' }" />
</div>

```vue
<BoBadge label="Verified" :icon="{ prefix: 'check' }" />
<BoBadge label="Alert" :icon="{ prefix: 'alert-circle' }" variant="warning" />
<BoBadge label="Error" :icon="{ prefix: 'x' }" variant="danger" />
<BoBadge label="Next" :icon="{ suffix: 'arrow-right' }" />
```

## Icon Only

Display badges with only an icon (no label).

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge :icon="{ prefix: 'check' }" variant="success" />
  <BoBadge :icon="{ prefix: 'x' }" variant="danger" />
  <BoBadge :icon="{ prefix: 'alert-circle' }" variant="warning" />
  <BoBadge :icon="{ prefix: 'info' }" variant="primary" />
</div>

```vue
<BoBadge :icon="{ prefix: 'check' }" variant="success" />
<BoBadge :icon="{ prefix: 'x' }" variant="danger" />
<BoBadge :icon="{ prefix: 'alert-circle' }" variant="warning" />
<BoBadge :icon="{ prefix: 'info' }" variant="primary" />
```

## Circle Badges

Circle badges are perfect for notification counts or status indicators.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge shape="circle" :icon="{ prefix: 'check' }" variant="success" />
  <BoBadge shape="circle" :icon="{ prefix: 'x' }" variant="danger" />
  <BoBadge shape="circle" :icon="{ prefix: 'bell' }" variant="primary" />
  <BoBadge shape="circle" :icon="{ prefix: 'star' }" variant="warning" />
</div>

```vue
<BoBadge shape="circle" :icon="{ prefix: 'check' }" variant="success" />
<BoBadge shape="circle" :icon="{ prefix: 'x' }" variant="danger" />
<BoBadge shape="circle" :icon="{ prefix: 'bell' }" variant="primary" />
<BoBadge shape="circle" :icon="{ prefix: 'star' }" variant="warning" />
```

## Notification Counts

Use badges to display notification counts or numbers.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge label="1" shape="pill" size="sm" variant="danger" />
  <BoBadge label="5" shape="pill" size="sm" variant="primary" />
  <BoBadge label="99+" shape="pill" size="sm" variant="warning" />
  <BoBadge label="New" shape="pill" size="sm" variant="success" />
</div>

```vue
<BoBadge label="1" shape="pill" size="sm" variant="danger" />
<BoBadge label="5" shape="pill" size="sm" variant="primary" />
<BoBadge label="99+" shape="pill" size="sm" variant="warning" />
<BoBadge label="New" shape="pill" size="sm" variant="success" />
```

## Status Badges

Use badges to indicate status or state.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge label="Active" variant="success" :icon="{ prefix: 'check-circle' }" />
  <BoBadge label="Pending" variant="warning" :icon="{ prefix: 'clock' }" />
  <BoBadge label="Inactive" variant="secondary" :icon="{ prefix: 'minus-circle' }" />
  <BoBadge label="Error" variant="danger" :icon="{ prefix: 'x-circle' }" />
</div>

```vue
<BoBadge label="Active" variant="success" :icon="{ prefix: 'check-circle' }" />
<BoBadge label="Pending" variant="warning" :icon="{ prefix: 'clock' }" />
<BoBadge label="Inactive" variant="secondary" :icon="{ prefix: 'minus-circle' }" />
<BoBadge label="Error" variant="danger" :icon="{ prefix: 'x-circle' }" />
```

## Outline Variants

All variants are available in outline style.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoBadge type="outline" variant="primary" label="Primary" />
  <BoBadge type="outline" variant="success" label="Success" />
  <BoBadge type="outline" variant="warning" label="Warning" />
  <BoBadge type="outline" variant="danger" label="Danger" />
  <BoBadge type="outline" variant="secondary" label="Secondary" />
</div>

```vue
<BoBadge type="outline" variant="primary" label="Primary" />
<BoBadge type="outline" variant="success" label="Success" />
<BoBadge type="outline" variant="warning" label="Warning" />
<BoBadge type="outline" variant="danger" label="Danger" />
<BoBadge type="outline" variant="secondary" label="Secondary" />
```

## Props

| Name         | Type             | Default     | Description                                      |
| ------------ | ---------------- | ----------- | ------------------------------------------------ |
| `id`         | `string`         | auto        | Unique identifier for the badge                  |
| `dataTestId` | `string`         | auto        | Data test id for testing                         |
| `label`      | `string`         | -           | Label text to display                            |
| `type`       | `BoBadgeType`    | `'default'` | Type of badge (default, outline)                 |
| `size`       | `BoBadgeSize`    | `'default'` | Size of the badge (xs, sm, default, lg, xl)      |
| `shape`      | `BoBadgeShape`   | `'default'` | Shape of the badge (default, pill, flat, circle) |
| `variant`    | `BoBadgeVariant` | `'primary'` | Color variant of the badge                       |
| `icon`       | `object`         | -           | Icon configuration (prefix, suffix)              |
| `role`       | `string`         | -           | ARIA role                                        |
| `ariaLabel`  | `string`         | -           | ARIA label                                       |

## Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Custom content for the badge |

## Types

```ts
type BoBadgeVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'light' | 'dark';
type BoBadgeType = 'default' | 'outline';
type BoBadgeShape = 'default' | 'pill' | 'flat' | 'circle';
type BoBadgeSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
```
