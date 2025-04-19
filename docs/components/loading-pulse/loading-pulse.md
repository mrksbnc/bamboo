<script setup>
import { BoLoadingPulse } from '@/components/bo_loading_pulse';
import { BoSize } from '@/shared';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo_loader';
</script>

# Tailwind CSS Loading Pulse - Bamboo UI

A loading pulse is an animated indicator that shows a pulsing animation to represent loading states. Use loading pulses to provide subtle visual feedback during asynchronous operations.

## Basic Example

<div class="flex gap-4 items-center">
  <bo-loading-pulse />
</div>

```html
<bo-loading-pulse />
```

## Component API

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
  <bo-loading-pulse :size="BoSize.extra_small" />
  <bo-loading-pulse :size="BoSize.small" />
  <bo-loading-pulse :size="BoSize.default" />
  <bo-loading-pulse :size="BoSize.large" />
  <bo-loading-pulse :size="BoSize.extra_large" />
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
  <bo-loading-pulse :variant="BoLoaderVariant.primary" />
  <bo-loading-pulse :variant="BoLoaderVariant.secondary" />
  <bo-loading-pulse :variant="BoLoaderVariant.success" />
  <bo-loading-pulse :variant="BoLoaderVariant.danger" />
  <bo-loading-pulse :variant="BoLoaderVariant.warning" />
  <bo-loading-pulse :variant="BoLoaderVariant.dark" />
  <div class="bg-gray-800 p-2">
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
  <bo-loading-pulse custom-color="#8B5CF6" />
  <bo-loading-pulse custom-color="#F59E0B" />
  <bo-loading-pulse custom-color="#EC4899" />
</div>

```html
<bo-loading-pulse custom-color="#8B5CF6" />
<bo-loading-pulse custom-color="#F59E0B" />
<bo-loading-pulse custom-color="#EC4899" />
```

## With Text

Add descriptive text using the `loader-text` prop.

<div class="flex flex-col gap-4">
  <bo-loading-pulse loader-text="Loading..." />
  <bo-loading-pulse 
    loader-text="Processing data" 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```html
<bo-loading-pulse loader-text="Loading..." />
<bo-loading-pulse
	loader-text="Processing data"
	:text-position="BoLoaderTextPosition.side"
/>
```
