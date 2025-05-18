<script setup>
import BoLoadingPulse from '@/components/loading-pulse/bo-loading-pulse.vue';
import { BoSize } from '@/shared/bo-size';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# Loading Pulse

A pulsating loader component for indicating loading or processing states with a different animation style.

```js
import { BoLoadingPulse } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-loading-pulse />
</template>

<script setup>
import { BoLoadingPulse } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-loading-pulse />
</div>

## Props

| Name           | Type                   | Default     | Description                         |
| -------------- | ---------------------- | ----------- | ----------------------------------- |
| `size`         | `BoSize`               | `default`   | Size of the pulse                   |
| `variant`      | `BoLoaderVariant`      | `primary`   | Color variant of the pulse          |
| `customColor`  | `string`               | `undefined` | Custom color for the pulse          |
| `loaderText`   | `string`               | `undefined` | Optional text to display with pulse |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the text                |

## Slots

| Name      | Description         |
| --------- | ------------------- |
| `default` | Custom text content |

## Types

```ts
export enum BoLoaderVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
	white = 'white',
}

export enum BoLoaderTextPosition {
	side = 'side',
	bottom = 'bottom',
}

export interface BoLoadingPulseProps {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
}
```

## Sizes

<div class="flex items-center gap-6 my-4">
  <bo-loading-pulse :size="BoSize.extra_small" />
  <bo-loading-pulse :size="BoSize.small" />
  <bo-loading-pulse :size="BoSize.default" />
  <bo-loading-pulse :size="BoSize.large" />
  <bo-loading-pulse :size="BoSize.extra_large" />
</div>

```vue
<bo-loading-pulse :size="BoSize.extra_small" />
<bo-loading-pulse :size="BoSize.small" />
<bo-loading-pulse :size="BoSize.default" />
<bo-loading-pulse :size="BoSize.large" />
<bo-loading-pulse :size="BoSize.extra_large" />
```

## Variants

<div class="flex items-center gap-6 my-4">
  <bo-loading-pulse :variant="BoLoaderVariant.primary" />
  <bo-loading-pulse :variant="BoLoaderVariant.secondary" />
  <bo-loading-pulse :variant="BoLoaderVariant.success" />
  <bo-loading-pulse :variant="BoLoaderVariant.danger" />
  <bo-loading-pulse :variant="BoLoaderVariant.warning" />
  <bo-loading-pulse :variant="BoLoaderVariant.dark" />
  <div class="bg-gray-800 p-2 rounded">
    <bo-loading-pulse :variant="BoLoaderVariant.white" />
  </div>
</div>

```vue
<bo-loading-pulse :variant="BoLoaderVariant.primary" />
<bo-loading-pulse :variant="BoLoaderVariant.secondary" />
<bo-loading-pulse :variant="BoLoaderVariant.success" />
<bo-loading-pulse :variant="BoLoaderVariant.danger" />
<bo-loading-pulse :variant="BoLoaderVariant.warning" />
<bo-loading-pulse :variant="BoLoaderVariant.dark" />
<bo-loading-pulse :variant="BoLoaderVariant.white" />
```

## Custom Color

<div class="flex items-center gap-6 my-4">
  <bo-loading-pulse custom-color="#8B5CF6" />
  <bo-loading-pulse custom-color="#F472B6" />
  <bo-loading-pulse custom-color="#F59E0B" />
</div>

```vue
<bo-loading-pulse custom-color="#8B5CF6" />
<bo-loading-pulse custom-color="#F472B6" />
<bo-loading-pulse custom-color="#F59E0B" />
```

## With Text

### Bottom Text (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-loading-pulse 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.bottom" 
  />
</div>

```vue
<bo-loading-pulse loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
```

### Side Text

<div class="flex flex-col gap-4 my-4">
  <bo-loading-pulse 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```vue
<bo-loading-pulse loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
```

## Custom Text Content

<div class="flex flex-col gap-4 my-4">
  <bo-loading-pulse :text-position="BoLoaderTextPosition.side">
    <span class="text-xs font-medium text-blue-600">Processing...</span>
  </bo-loading-pulse>
</div>

```vue
<bo-loading-pulse :text-position="BoLoaderTextPosition.side">
  <span class="text-xs font-medium text-blue-600">Processing...</span>
</bo-loading-pulse>
```

## Comparison with Loading Spinner

<div class="flex items-center gap-6 my-4 border p-4 rounded">
  <div class="flex flex-col items-center gap-2">
    <bo-loading-pulse 
      :size="BoSize.default"
      loader-text="Loading Pulse" 
    />
  </div>
  <div class="flex flex-col items-center gap-2">
    <bo-loading-spinner 
      :size="BoSize.default"
      loader-text="Loading Spinner" 
    />
  </div>
</div>

```vue
<div class="flex items-center gap-6">
  <bo-loading-pulse loader-text="Loading Pulse" />
  <bo-loading-spinner loader-text="Loading Spinner" />
</div>
```
