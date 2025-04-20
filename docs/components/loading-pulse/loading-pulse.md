<script setup>
import { BoLoadingPulse } from '@/components/bo-loading_pulse';
import { BoSize } from '@/shared';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# bo-loading-pulse

A loading pulse is an animated indicator that shows a pulsing animation to represent loading states. Use loading pulses to provide subtle visual feedback during asynchronous operations.

## Basic Example

<div class="flex items-center gap-2">
  <div class="p-2">
<bo-loading-pulse />
  </div>
</div>

```html
<bo-loading-pulse />
```

### Props

| Prop name      | Type                   | Default                       | Description                   |
| -------------- | ---------------------- | ----------------------------- | ----------------------------- |
| `size`         | `BoSize`               | `BoSize.default`              | Size of the pulse             |
| `variant`      | `BoLoaderVariant`      | `BoLoaderVariant.primary`     | Color variant of the pulse    |
| `customColor`  | `string`               | `undefined`                   | Custom color (hex code)       |
| `loaderText`   | `string`               | `undefined`                   | Text displayed with the pulse |
| `textPosition` | `BoLoaderTextPosition` | `BoLoaderTextPosition.bottom` | Position of the loading text  |

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

## Pulse Sizes

Choose from multiple sizes using the `size` prop.

<div class="flex items-center gap-4">
  <div class="p-2">
    <bo-loading-pulse :size="BoSize.extra_small" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :size="BoSize.small" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :size="BoSize.default" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :size="BoSize.large" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :size="BoSize.extra_large" />
  </div>
</div>

```html
<bo-loading-pulse :size="BoSize.extra_small" />
<bo-loading-pulse :size="BoSize.small" />
<bo-loading-pulse :size="BoSize.default" />
<bo-loading-pulse :size="BoSize.large" />
<bo-loading-pulse :size="BoSize.extra_large" />
```

## Pulse Variants

Use different colors by setting the `variant` prop.

<div class="flex items-center gap-4">
  <div class="p-2">
    <bo-loading-pulse :variant="BoLoaderVariant.primary" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :variant="BoLoaderVariant.secondary" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :variant="BoLoaderVariant.success" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :variant="BoLoaderVariant.danger" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :variant="BoLoaderVariant.warning" />
  </div>
  <div class="p-2">
    <bo-loading-pulse :variant="BoLoaderVariant.white" />
  </div>
</div>

```html
<bo-loading-pulse :variant="BoLoaderVariant.primary" />
<bo-loading-pulse :variant="BoLoaderVariant.secondary" />
<bo-loading-pulse :variant="BoLoaderVariant.success" />
<bo-loading-pulse :variant="BoLoaderVariant.danger" />
<bo-loading-pulse :variant="BoLoaderVariant.warning" />
<bo-loading-pulse :variant="BoLoaderVariant.dark" />
<bo-loading-pulse :variant="BoLoaderVariant.white" />
```

## Custom Color

Apply a custom color using the `custom-color` prop.

<div class="flex items-center gap-4">
  <div class="p-2">
    <bo-loading-pulse custom-color="#8B5CF6" />
  </div>
  <div class="p-2">
    <bo-loading-pulse custom-color="#F59E0B" />
  </div>
  <div class="p-2">
    <bo-loading-pulse custom-color="#EC4899" />
  </div>
</div>

```html
<bo-loading-pulse custom-color="#8B5CF6" />
<bo-loading-pulse custom-color="#F59E0B" />
<bo-loading-pulse custom-color="#EC4899" />
```

## With Text

Add descriptive text using the `loader-text` prop.

<div class="flex flex-col gap-2">
  <div class="p-2">
    <bo-loading-pulse loader-text="Loading..." />
  </div>
  <hr class="border-gray-200 dark:border-gray-700" />
  <div class="p-2">
    <bo-loading-pulse 
      loader-text="Processing data" 
      :text-position="BoLoaderTextPosition.side" 
    />
  </div>
</div>

```html
<bo-loading-pulse loader-text="Loading..." />
<bo-loading-pulse
	loader-text="Processing data"
	:text-position="BoLoaderTextPosition.side"
/>
```
