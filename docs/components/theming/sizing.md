# Component Sizing

The Bamboo component library uses a consistent sizing system across all components to ensure a harmonious and predictable user interface.

## Size Enumeration

All components that support sizing use the shared `BoSize` enum from `@/shared/bo_size.ts`:

```typescript
export enum BoSize {
  extra_small = 'extra-small',
  small = 'small',
  default = 'default',
  large = 'large',
  extra_large = 'extra-large',
}
```

## Size Implementation Across Components

Each component implements sizing based on its specific needs, but follows consistent patterns:

### Avatar Component

```typescript
const avatarSizeClasses = {
  [BoSize.extra_small]: /*tw*/ 'size-5', // 20px
  [BoSize.small]: /*tw*/ 'size-7', // 28px
  [BoSize.default]: /*tw*/ 'size-9', // 36px
  [BoSize.large]: /*tw*/ 'size-11', // 44px
  [BoSize.extra_large]: /*tw*/ 'size-14', // 56px
}
```

### Button Component

Regular buttons use padding values that increase with size:

```typescript
const sizeClasses = {
  [BoSize.extra_small]: /*tw*/ 'px-2.5 py-1',
  [BoSize.small]: /*tw*/ 'px-3 py-1.5',
  [BoSize.default]: /*tw*/ 'px-3.5 py-2',
  [BoSize.large]: /*tw*/ 'px-5 py-3',
  [BoSize.extra_large]: /*tw*/ 'px-6 py-4',
}
```

Icon-only buttons use uniform padding:

```typescript
const iconOnlySizeClasses = {
  [BoSize.extra_small]: /*tw*/ 'p-1.5',
  [BoSize.small]: /*tw*/ 'p-2',
  [BoSize.default]: /*tw*/ 'p-2.5',
  [BoSize.large]: /*tw*/ 'p-3.5',
  [BoSize.extra_large]: /*tw*/ 'p-4',
}
```

### Badge Component

Badges have different sizing based on shape:

```typescript
// For circular badges
switch (size.value) {
  case BoSize.extra_small:
    return /*tw*/ 'p-0'
  case BoSize.small:
    return /*tw*/ 'p-0.5'
  case BoSize.default:
    return /*tw*/ 'p-0.75'
  case BoSize.large:
    return /*tw*/ 'p-1.25'
  case BoSize.extra_large:
    return /*tw*/ 'p-2'
}

// For non-circular badges
switch (size.value) {
  case BoSize.extra_small:
    return /*tw*/ 'px-1 py-0'
  case BoSize.small:
    return /*tw*/ 'px-1.5 py-0.5'
  case BoSize.default:
    return /*tw*/ 'px-2 py-0.75'
  case BoSize.large:
    return /*tw*/ 'px-2.5 py-1'
  case BoSize.extra_large:
    return /*tw*/ 'px-3 py-1.5'
}
```

### Icon Component

Icons use precise size definitions:

```typescript
const sizeClasses = {
  [BoSize.extra_small]: /*tw*/ 'size-3', // 12px
  [BoSize.small]: /*tw*/ 'size-3.5', // 14px
  [BoSize.default]: /*tw*/ 'size-4', // 16px
  [BoSize.large]: /*tw*/ 'size-5', // 20px
  [BoSize.extra_large]: /*tw*/ 'size-6', // 24px
}
```

## Font Sizes

Components also scale font sizes appropriately based on their size:

```typescript
// Example from the BoButton component
const buttonFontSize = computed<BoFontSize>(() => {
  if (size.value === BoSize.extra_small || size.value === BoSize.small) {
    return BoFontSize.xs
  } else if (size.value === BoSize.large) {
    return BoFontSize.base
  } else if (size.value === BoSize.extra_large) {
    return BoFontSize.lg
  } else {
    return BoFontSize.sm
  }
})
```

## Visual Comparison of Component Sizes

The following table shows a visual comparison of all component sizes:

| Size          | Button      | Badge         | Avatar         | Icon            |
| ------------- | ----------- | ------------- | -------------- | --------------- |
| `extra-small` | px-2.5 py-1 | px-1 py-0     | size-5 (20px)  | size-3 (12px)   |
| `small`       | px-3 py-1.5 | px-1.5 py-0.5 | size-7 (28px)  | size-3.5 (14px) |
| `default`     | px-3.5 py-2 | px-2 py-0.75  | size-9 (36px)  | size-4 (16px)   |
| `large`       | px-5 py-3   | px-2.5 py-1   | size-11 (44px) | size-5 (20px)   |
| `extra-large` | px-6 py-4   | px-3 py-1.5   | size-14 (56px) | size-6 (24px)   |

## Using Component Sizes

To apply sizes to components, use the `size` prop with a value from the `BoSize` enum:

```vue
<template>
  <!-- Default size -->
  <bo-button label="Default Button" />

  <!-- Small size -->
  <bo-button
    label="Small Button"
    :size="BoSize.small"
  />

  <!-- Extra large size -->
  <bo-button
    label="Extra Large Button"
    :size="BoSize.extra_large"
  />

  <!-- Different component sizes -->
  <bo-avatar
    :size="BoSize.small"
    :data="{ label: 'A' }"
  />
  <bo-badge
    label="Badge"
    :size="BoSize.large"
  />
  <bo-icon
    :size="BoSize.extra_large"
    :icon="Icon.user"
  />
</template>

<script setup>
import { BoButton, BoAvatar, BoBadge, BoIcon, Icon } from '@/components'
import { BoSize } from '@/shared'
</script>
```
