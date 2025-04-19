<script setup>
import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoSize } from '@/shared';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo_loader';
</script>

# Tailwind CSS Loading Spinner - Bamboo UI

A loading spinner is a UI element that indicates a process is in progress. Use loading spinners to provide feedback to users during asynchronous operations.

## Basic Example

<div class="flex gap-4 items-center">
  <bo-loading-spinner />
</div>

```html
<bo-loading-spinner />
```

## Component API

### Props

| Prop name      | Type                   | Default                       | Description                     |
| -------------- | ---------------------- | ----------------------------- | ------------------------------- |
| `size`         | `BoSize`               | `BoSize.default`              | Size of the spinner             |
| `variant`      | `BoLoaderVariant`      | `BoLoaderVariant.primary`     | Color variant of the spinner    |
| `customColor`  | `string`               | `undefined`                   | Custom color (hex code)         |
| `loaderText`   | `string`               | `undefined`                   | Text displayed with the spinner |
| `textPosition` | `BoLoaderTextPosition` | `BoLoaderTextPosition.bottom` | Position of the loading text    |

### Types

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
```

## Spinner Sizes

Choose from multiple sizes using the `size` prop.

<div class="flex items-center gap-4">
  <bo-loading-spinner :size="BoSize.extra_small" />
  <bo-loading-spinner :size="BoSize.small" />
  <bo-loading-spinner :size="BoSize.default" />
  <bo-loading-spinner :size="BoSize.large" />
  <bo-loading-spinner :size="BoSize.extra_large" />
</div>

```html
<bo-loading-spinner :size="BoSize.extra_small" />
<bo-loading-spinner :size="BoSize.small" />
<bo-loading-spinner :size="BoSize.default" />
<bo-loading-spinner :size="BoSize.large" />
<bo-loading-spinner :size="BoSize.extra_large" />
```

## Spinner Variants

Use different colors by setting the `variant` prop.

<div class="flex items-center gap-4">
  <bo-loading-spinner :variant="BoLoaderVariant.primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" />
  <div class="bg-gray-800 p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.white" />
  </div>
</div>

```html
<bo-loading-spinner :variant="BoLoaderVariant.primary" />
<bo-loading-spinner :variant="BoLoaderVariant.secondary" />
<bo-loading-spinner :variant="BoLoaderVariant.success" />
<bo-loading-spinner :variant="BoLoaderVariant.danger" />
<bo-loading-spinner :variant="BoLoaderVariant.warning" />
<bo-loading-spinner :variant="BoLoaderVariant.dark" />
<bo-loading-spinner :variant="BoLoaderVariant.white" />
```

## Custom Color

Apply a custom color using the `custom-color` prop.

<div class="flex items-center gap-4">
  <bo-loading-spinner custom-color="#8B5CF6" />
  <bo-loading-spinner custom-color="#F59E0B" />
  <bo-loading-spinner custom-color="#EC4899" />
</div>

```html
<bo-loading-spinner custom-color="#8B5CF6" />
<bo-loading-spinner custom-color="#F59E0B" />
<bo-loading-spinner custom-color="#EC4899" />
```

## With Text

Add descriptive text using the `loader-text` prop.

<div class="flex flex-col gap-4">
  <bo-loading-spinner loader-text="Loading..." />
  <bo-loading-spinner 
    loader-text="Processing data" 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```html
<bo-loading-spinner loader-text="Loading..." />
<bo-loading-spinner
	loader-text="Processing data"
	:text-position="BoLoaderTextPosition.side"
/>
```
