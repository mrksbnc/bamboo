# BoBadge

Badges are small visual indicators for counts, labels, or statuses that can include text and icons.

## Component API

### Props

```ts
interface BoBadgeProps {
  label?: string
  type?: BoBadgeType
  size?: BoSize
  shape?: BoBadgeShape
  variant?: BoBadgeVariant
  prefixIcon?: Icon
  suffixIcon?: Icon
}
```

### Enums

```ts
enum BoBadgeVariant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  warning = 'warning',
  success = 'success',
  light = 'light',
  dark = 'dark',
}

enum BoBadgeType {
  default = 'default', // Solid background with colored border
  outline = 'outline', // Transparent background with colored border and text
}

enum BoBadgeShape {
  pill = 'pill',
  default = 'default',
  flat = 'flat',
  circle = 'circle',
}

enum BoSize {
  extra_small = 'extra_small',
  small = 'small',
  default = 'default',
  large = 'large',
  extra_large = 'extra_large',
}
```

### Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Custom content instead of using the label prop |

## Basic Usage

```vue
<template>
  <bo-badge label="New" />
</template>

<script setup>
import { BoBadge } from '@/components/bo_badge'
</script>
```

## Examples

<script setup>
import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo_badge';
import { BoSize } from '@/shared';
import { Icon } from '@/components/bo_icon';
</script>

### Default Badge

<div class="flex flex-wrap gap-2 p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge label="Default" />
  <bo-badge label="Primary" variant="primary" />
  <bo-badge label="Success" variant="success" />
  <bo-badge label="Warning" variant="warning" />
  <bo-badge label="Danger" variant="danger" />
  <bo-badge :prefix-icon="Icon.bell" label="With Icon" />
  <bo-badge :prefix-icon="Icon.check" />
</div>

### Variants

Badges come in different variants to represent different semantics:

<div class="flex flex-wrap gap-2 p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge label="Primary" variant="primary" />
  <bo-badge label="Secondary" variant="secondary" />
  <bo-badge label="Danger" variant="danger" />
  <bo-badge label="Warning" variant="warning" />
  <bo-badge label="Success" variant="success" />
  <bo-badge label="Light" variant="light" />
  <bo-badge label="Dark" variant="dark" />
</div>

```vue
<bo-badge label="Primary" variant="primary" />
<bo-badge label="Secondary" variant="secondary" />
<bo-badge label="Danger" variant="danger" />
<bo-badge label="Warning" variant="warning" />
<bo-badge label="Success" variant="success" />
<bo-badge label="Light" variant="light" />
<bo-badge label="Dark" variant="dark" />
```

### Types

Badges can have two visual types: default (solid) and outline:

<div class="flex flex-wrap gap-4 p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <div class="flex flex-col gap-2">
    <span class="text-sm font-medium">Default (Solid)</span>
    <div class="flex flex-wrap gap-2">
      <bo-badge label="Default" />
      <bo-badge label="Primary" variant="primary" />
      <bo-badge label="Success" variant="success" />
      <bo-badge label="Warning" variant="warning" />
      <bo-badge label="Danger" variant="danger" />
    </div>
  </div>
  
  <div class="flex flex-col gap-2">
    <span class="text-sm font-medium">Outline</span>
    <div class="flex flex-wrap gap-2">
      <bo-badge label="Outline" type="outline" />
      <bo-badge label="Primary" type="outline" variant="primary" />
      <bo-badge label="Success" type="outline" variant="success" />
      <bo-badge label="Warning" type="outline" variant="warning" />
      <bo-badge label="Danger" type="outline" variant="danger" />
    </div>
  </div>
</div>

```vue
<!-- Default type (solid background) -->
<bo-badge label="Default" />
<bo-badge label="Primary" variant="primary" />

<!-- Outline type (transparent background with colored border) -->
<bo-badge label="Outline" type="outline" />
<bo-badge label="Primary" type="outline" variant="primary" />
```

### Sizes

Badges are available in different sizes:

<div class="flex flex-wrap items-center gap-2 p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge label="Extra Small" size="extra_small" />
  <bo-badge label="Small" size="small" />
  <bo-badge label="Default" />
  <bo-badge label="Large" size="large" />
  <bo-badge label="Extra Large" size="extra_large" />
</div>

```vue
<bo-badge label="Extra Small" size="extra_small" />
<bo-badge label="Small" size="small" />
<bo-badge label="Default" />
<bo-badge label="Large" size="large" />
<bo-badge label="Extra Large" size="extra_large" />
```

### Shapes

Badges can have different shapes:

<div class="flex flex-wrap gap-2 p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge label="Default" shape="default" />
  <bo-badge label="Pill" shape="pill" />
  <bo-badge label="Flat" shape="flat" />
  <bo-badge :prefix-icon="Icon.check" shape="circle" />
</div>

```vue
<bo-badge label="Default" shape="default" />
<bo-badge label="Pill" shape="pill" />
<bo-badge label="Flat" shape="flat" />
<bo-badge :prefix-icon="Icon.check" shape="circle" />
```

### Icons

Badges can include prefix and suffix icons:

<div class="flex flex-wrap gap-2 p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge label="Notifications" :prefix-icon="Icon.bell" />
  <bo-badge label="External Link" :suffix-icon="Icon.external_link" />
  <bo-badge :prefix-icon="Icon.check" /> <!-- Icon only badge -->
</div>

```vue
<bo-badge label="Notifications" :prefix-icon="Icon.bell" />
<bo-badge label="External Link" :suffix-icon="Icon.external_link" />
<bo-badge :prefix-icon="Icon.check" />
<!-- Icon only badge -->
```

### Custom Content

You can use the default slot to provide custom content instead of using the `label` prop:

<div class="p-4 mb-4 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge type="outline" variant="primary">
    <div class="flex items-center gap-1">
      <span>Custom</span>
      <bo-icon :icon="Icon.star" :size="BoSize.small" />
    </div>
  </bo-badge>
</div>

```vue
<bo-badge type="outline" variant="primary">
  <div class="flex items-center gap-1">
    <span>Custom</span>
    <bo-icon :icon="Icon.star" :size="BoSize.small" />
  </div>
</bo-badge>
```

## Advanced Usage

Example of defining props in your component:

```vue
<script setup lang="ts">
import { BoBadge, BoBadgeType, BoBadgeShape, BoBadgeVariant } from '@/components/bo_badge'
import { BoSize } from '@/shared/bo_size'
import { Icon } from '@/components/bo_icon'

const badgeProps = {
  label: 'New Feature',
  type: BoBadgeType.default,
  size: BoSize.default,
  shape: BoBadgeShape.pill,
  variant: BoBadgeVariant.primary,
  prefixIcon: Icon.star,
  suffixIcon: Icon.none,
}
</script>

<template>
  <bo-badge v-bind="badgeProps" />
</template>
```
