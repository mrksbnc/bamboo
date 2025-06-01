<script setup>
import BoLoadingSpinner from '@/components/loading-spinner/bo-loading-spinner.vue';
import { BoSize } from '@/shared/bo-size';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# Loading Spinner

A Loading Spinner is a component that displays a loading animation with a spinning effect. It can be used for various purposes, such as indicating that a task is in progress or displaying a loading state.

```js
import { BoLoadingSpinner } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-loading-spinner />
</template>

<script setup>
import { BoLoadingSpinner } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-loading-spinner />
</div>

## Props

| Name           | Type                   | Default     | Description                           |
| -------------- | ---------------------- | ----------- | ------------------------------------- |
| `size`         | `BoSize`               | `default`   | Size of the spinner                   |
| `variant`      | `BoLoaderVariant`      | `primary`   | Color variant of the spinner          |
| `customColor`  | `string`               | `undefined` | Custom color for the spinner          |
| `loaderText`   | `string`               | `undefined` | Optional text to display with spinner |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the text                  |

## Slots

| Name      | Description         |
| --------- | ------------------- |
| `default` | Custom text content |

## Types

```ts
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
	side = 'side',
	bottom = 'bottom',
}

interface BoLoadingSpinnerProps {
	/** Unique id for the loading spinner */
	id?: string;
	/** The size of the loading spinner */
	size?: BoSize;
	/** The variant of the loading spinner */
	variant?: BoLoaderVariant;
	/** Custom color of the loading spinner in hex format */
	customColor?: string;
	/** Optional loader text to display */
	loaderText?: string;
	/** Position of the text of the loading spinner */
	textPosition?: BoLoaderTextPosition;
}
```

## Sizes

<div class="flex items-center gap-4 my-4">
  <bo-loading-spinner :size="BoSize.extra_small" />
  <bo-loading-spinner :size="BoSize.small" />
  <bo-loading-spinner :size="BoSize.default" />
  <bo-loading-spinner :size="BoSize.large" />
  <bo-loading-spinner :size="BoSize.extra_large" />
</div>

```vue
<bo-loading-spinner :size="BoSize.extra_small" />
<bo-loading-spinner :size="BoSize.small" />
<bo-loading-spinner :size="BoSize.default" />
<bo-loading-spinner :size="BoSize.large" />
<bo-loading-spinner :size="BoSize.extra_large" />
```

## Variants

<div class="flex items-center gap-4 my-4">
  <bo-loading-spinner :variant="BoLoaderVariant.primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" />
  <div class="bg-gray-800 p-2 rounded">
    <bo-loading-spinner :variant="BoLoaderVariant.white" />
  </div>
</div>

```vue
<bo-loading-spinner :variant="BoLoaderVariant.primary" />
<bo-loading-spinner :variant="BoLoaderVariant.secondary" />
<bo-loading-spinner :variant="BoLoaderVariant.success" />
<bo-loading-spinner :variant="BoLoaderVariant.danger" />
<bo-loading-spinner :variant="BoLoaderVariant.warning" />
<bo-loading-spinner :variant="BoLoaderVariant.dark" />
<bo-loading-spinner :variant="BoLoaderVariant.white" />
```

## Custom Color

<div class="flex items-center gap-4 my-4">
  <bo-loading-spinner custom-color="#8B5CF6" />
  <bo-loading-spinner custom-color="#F472B6" />
  <bo-loading-spinner custom-color="#F59E0B" />
</div>

```vue
<bo-loading-spinner custom-color="#8B5CF6" />
<bo-loading-spinner custom-color="#F472B6" />
<bo-loading-spinner custom-color="#F59E0B" />
```

## With Text

### Bottom Text (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.bottom" 
  />
</div>

```vue
<bo-loading-spinner loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
```

### Side Text

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```vue
<bo-loading-spinner loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
```

## Custom Text Content

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner :text-position="BoLoaderTextPosition.side">
    <span class="text-xs font-medium text-blue-600">Please wait...</span>
  </bo-loading-spinner>
</div>

```vue
<bo-loading-spinner :text-position="BoLoaderTextPosition.side">
  <span class="text-xs font-medium text-blue-600">Please wait...</span>
</bo-loading-spinner>
```
