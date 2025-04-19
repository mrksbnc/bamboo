# BoLoadingSpinner

A customizable loading spinner component with various sizes, colors, and optional text.

## Basic Usage

```vue
<template>
  <bo-loading-spinner />
</template>

<script setup>
import { BoLoadingSpinner } from '@/components/bo_loading_spinner'
</script>
```

## Live Example

<script setup>
import { BoSize } from '@/shared';
import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo_loader';
</script>

<div class="flex flex-wrap gap-8">
  <bo-loading-spinner />
  <bo-loading-spinner loader-text="Loading..." />
  <bo-loading-spinner variant="success" />
  <bo-loading-spinner variant="danger" />
  <bo-loading-spinner variant="warning" />
</div>

## Variants

Spinner comes in different variants to match various contexts:

<div class="flex flex-wrap gap-8 my-4">
  <bo-loading-spinner variant="primary" loader-text="Primary" />
  <bo-loading-spinner variant="secondary" loader-text="Secondary" />
  <bo-loading-spinner variant="success" loader-text="Success" />
  <bo-loading-spinner variant="danger" loader-text="Danger" />
  <bo-loading-spinner variant="warning" loader-text="Warning" />
  <bo-loading-spinner variant="dark" loader-text="Dark" />
  <bo-loading-spinner variant="white" class="bg-gray-800 p-2" loader-text="White" />
</div>

```vue
<bo-loading-spinner variant="primary" />
<bo-loading-spinner variant="secondary" />
<bo-loading-spinner variant="success" />
<bo-loading-spinner variant="danger" />
<bo-loading-spinner variant="warning" />
<bo-loading-spinner variant="dark" />
<bo-loading-spinner variant="white" />
```

## Sizes

Spinners are available in different sizes:

<div class="flex items-center gap-8 my-4">
  <bo-loading-spinner size="extra_small" />
  <bo-loading-spinner size="small" />
  <bo-loading-spinner size="default" />
  <bo-loading-spinner size="large" />
  <bo-loading-spinner size="extra_large" />
</div>

```vue
<bo-loading-spinner size="extra_small" />
<bo-loading-spinner size="small" />
<bo-loading-spinner size="default" />
<bo-loading-spinner size="large" />
<bo-loading-spinner size="extra_large" />
```

## With Text

You can add descriptive text using the `loader-text` prop or a custom slot:

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner loader-text="Loading data..." />
  
  <bo-loading-spinner text-position="side" loader-text="Loading..." />
  
  <bo-loading-spinner>
    <div class="flex items-center gap-2">
      <span class="font-medium">Custom loading message</span>
    </div>
  </bo-loading-spinner>
</div>

```vue
<!-- Using the loader-text prop -->
<bo-loading-spinner loader-text="Loading data..." />

<!-- Text on the side -->
<bo-loading-spinner text-position="side" loader-text="Loading..." />

<!-- Using the default slot for custom content -->
<bo-loading-spinner>
  <div class="flex items-center gap-2">
    <span class="font-medium">Custom loading message</span>
  </div>
</bo-loading-spinner>
```

## Custom Color

You can set a custom color using the `custom-color` prop:

<div class="flex gap-8 my-4">
  <bo-loading-spinner custom-color="#9c27b0" />
  <bo-loading-spinner custom-color="#ff9800" />
  <bo-loading-spinner custom-color="#e91e63" />
</div>

```vue
<bo-loading-spinner custom-color="#9c27b0" />
<bo-loading-spinner custom-color="#ff9800" />
<bo-loading-spinner custom-color="#e91e63" />
```

## Component API

### Props

```ts
interface BoLoadingSpinnerProps {
  size?: BoSize
  variant?: BoLoaderVariant
  textPosition?: BoLoaderTextPosition
  loaderText?: string
  customColor?: string
}
```

The component uses these enums:

```ts
enum BoSize {
  extra_small = 'extra_small',
  small = 'small',
  default = 'default',
  large = 'large',
  extra_large = 'extra_large',
}

enum BoLoaderVariant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  warning = 'warning',
  success = 'success',
  dark = 'dark',
  white = 'white',
}

enum BoLoaderTextPosition {
  bottom = 'bottom',
  side = 'side',
}
```

Example of defining props in your component:

```vue
<script setup lang="ts">
import { BoLoadingSpinner } from '@/components/bo_loading_spinner'
import { BoSize } from '@/shared/bo_size'
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo_loader'

const spinnerProps = {
  size: BoSize.large,
  variant: BoLoaderVariant.primary,
  textPosition: BoLoaderTextPosition.bottom,
  loaderText: 'Loading data...',
  customColor: '',
}
</script>

<template>
  <bo-loading-spinner v-bind="spinnerProps" />
</template>
```

### Slots

| Slot      | Description                           |
| --------- | ------------------------------------- |
| `default` | Custom content instead of loader text |
