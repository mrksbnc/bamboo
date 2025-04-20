<script setup>
import { BoLoadingSpinner } from '@/components/bo-loading_spinner';
import { BoSize } from '@/shared';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# bo-loading-spinner

A loading spinner is a UI element that indicates a process is in progress. Use loading spinners to provide feedback to users during asynchronous operations.

## Basic Example

```html
<bo-loading-spinner />
```

<div class="flex items-center gap-2">
  <div class="p-2">
    <bo-loading-spinner />
  </div>
</div>

### Props

| Prop name      | Type                   | Default                       | Description                     |
| -------------- | ---------------------- | ----------------------------- | ------------------------------- |
| `size`         | `BoSize`               | `BoSize.default`              | Size of the spinner             |
| `variant`      | `BoLoaderVariant`      | `BoLoaderVariant.primary`     | Color variant of the spinner    |
| `customColor`  | `string`               | `undefined`                   | Custom color (hex code)         |
| `loaderText`   | `string`               | `undefined`                   | Text displayed with the spinner |
| `textPosition` | `BoLoaderTextPosition` | `BoLoaderTextPosition.bottom` | Position of the loading text    |

### Types

The `BoLoaderVariant` enum defines the available color variants for the spinner.

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
```

The `BoLoaderTextPosition` enum defines the available positions for the spinner text.

```ts
export enum BoLoaderTextPosition {
	side = 'side',
	bottom = 'bottom',
}
```

## Spinner Sizes

Choose from multiple sizes using the `size` prop.

<div class="flex items-center gap-2">
  <div class="p-2">
    <bo-loading-spinner :size="BoSize.extra_small" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :size="BoSize.small" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :size="BoSize.default" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :size="BoSize.large" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :size="BoSize.extra_large" />
  </div>
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

<div class="flex">
  <div class="p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.primary" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.secondary" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.success" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.danger" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.warning" />
  </div>
  <div class="p-2">
    <bo-loading-spinner :variant="BoLoaderVariant.dark" />
  </div>
  <div class="bg-white p-2">
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

<div class="flex items-center gap-2">
  <div class="p-2">
    <bo-loading-spinner custom-color="#8B5CF6" />
  </div>
  <div class="p-2">
    <bo-loading-spinner custom-color="#F59E0B" />
  </div>
  <div class="p-2">
    <bo-loading-spinner custom-color="#EC4899" />
  </div>
</div>

```html
<bo-loading-spinner custom-color="#8B5CF6" />
<bo-loading-spinner custom-color="#F59E0B" />
<bo-loading-spinner custom-color="#EC4899" />
```

## With Text

Add descriptive text using the `loader-text` prop.

<div class="flex flex-col gap-2">
  <div class="p-2">
    <bo-loading-spinner loader-text="Loading..." />
  </div>
  <hr class="border-gray-200 dark:border-gray-700" />
  <div class="p-2">
    <bo-loading-spinner 
      loader-text="Processing data" 
      :text-position="BoLoaderTextPosition.side" 
    />
  </div>
</div>

```html
<bo-loading-spinner loader-text="Loading..." />
<bo-loading-spinner
	loader-text="Processing data"
	:text-position="BoLoaderTextPosition.side"
/>
```
