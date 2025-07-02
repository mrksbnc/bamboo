<script setup>
import BoIcon from '@/components/icon/bo-icon.vue';
import { Icon } from '@/components/icon/bo-icon';
import { BoSize } from '@/shared/bo-size';
</script>

# Icon

An icon is a graphical representation of a concept or object. It can be used to represent a product, service, or idea or to simply provide visual cues.
Under the hood Bamboo uses [Feather Icons](https://feathericons.com/)

```js
import { BoIcon, Icon } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-icon :icon="Icon.heart" />
</template>

<script setup>
import { BoIcon, Icon } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-icon :icon="Icon.heart" />
</div>

## Props

| Name            | Type                      | Default                               | Description                                    |
| --------------- | ------------------------- | ------------------------------------- | ---------------------------------------------- |
| `id`            | `string`                  | `auto-generated`                      | Unique identifier for the icon element         |
| `icon`          | `Icon`                    | Required                              | The icon to display                            |
| `size`          | `BoSize`                  | `BoSize.default`                      | Size of the icon                               |
| `color`         | `string`                  | `'currentColor'`                      | Color of the icon (CSS color value)            |
| `accessibility` | `AccessibilityDefinition` | `{ title: 'icon', decorative: true }` | Accessibility configuration for screen readers |
| `disabled`      | `boolean`                 | `false`                               | Whether the icon is disabled                   |

## Types

```ts
export enum Icon {
	activity = 'activity',
	airplay = 'airplay',
	alert_circle = 'alert-circle',
	alert_octagon = 'alert-octagon',
	alert_triangle = 'alert-triangle',
	// ... many more icons
	zap = 'zap',
	zoom_in = 'zoom-in',
	zoom_out = 'zoom-out',
	none = 'none',
}

export interface AccessibilityDefinition {
	/**
	 * Whether the icon is decorative. Decorative icons are hidden from screen readers.
	 * Set to false for icons that convey important information.
	 */
	decorative?: boolean;
	/**
	 * The title of the icon for screen readers. Only used when decorative is false.
	 */
	title?: string;
}

export interface BoIconProps {
	/**
	 * The unique ID for the icon
	 */
	id?: string;
	/**
	 * The icon to display
	 */
	icon: Icon;
	/**
	 * The size of the icon
	 */
	size?: BoSize;
	/**
	 * The color of the icon
	 */
	color?: string;
	/**
	 * Accessibility definition for the icon
	 */
	accessibility?: AccessibilityDefinition;
	/**
	 * Whether the icon is disabled
	 */
	disabled?: boolean;
}
```

## Sizes

The icon component supports five different sizes:

<div class="flex items-center gap-4 my-4">
  <bo-icon :icon="Icon.heart" :size="BoSize.extra_small" />
  <bo-icon :icon="Icon.heart" :size="BoSize.small" />
  <bo-icon :icon="Icon.heart" :size="BoSize.default" />
  <bo-icon :icon="Icon.heart" :size="BoSize.large" />
  <bo-icon :icon="Icon.heart" :size="BoSize.extra_large" />
</div>

```vue
<bo-icon :icon="Icon.heart" :size="BoSize.extra_small" />
<bo-icon :icon="Icon.heart" :size="BoSize.small" />
<bo-icon :icon="Icon.heart" :size="BoSize.default" />
<bo-icon :icon="Icon.heart" :size="BoSize.large" />
<bo-icon :icon="Icon.heart" :size="BoSize.extra_large" />
```

## Custom Colors

<div class="flex gap-4 items-center my-4">
  <bo-icon :icon="Icon.heart" color="red" />
  <bo-icon :icon="Icon.check" color="green" />
  <bo-icon :icon="Icon.alert_circle" color="orange" />
  <bo-icon :icon="Icon.x" color="#FF0000" />
  <bo-icon :icon="Icon.star" color="var(--primary-color)" />
</div>

```vue
<bo-icon :icon="Icon.heart" color="red" />
<bo-icon :icon="Icon.check" color="green" />
<bo-icon :icon="Icon.alert_circle" color="orange" />
<bo-icon :icon="Icon.x" color="#FF0000" />
<bo-icon :icon="Icon.star" color="var(--primary-color)" />
```

## Disabled State

Icons can be disabled, which applies reduced opacity and a disabled cursor:

<div class="flex gap-4 items-center my-4">
  <bo-icon :icon="Icon.heart" />
  <bo-icon :icon="Icon.heart" disabled />
</div>

```vue
<!-- Normal icon -->
<bo-icon :icon="Icon.heart" />

<!-- Disabled icon -->
<bo-icon :icon="Icon.heart" disabled />
```

## Accessibility

Icons can be configured for different accessibility needs:

### Decorative Icons (Default)

Decorative icons are hidden from screen readers and used purely for visual enhancement:

<div class="flex gap-4 items-center my-4">
  <button class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
    <bo-icon :icon="Icon.plus" :accessibility="{ decorative: true }" />
    Add Item
  </button>
</div>

```vue
<!-- Decorative icon in a button (default behavior) -->
<button>
  <bo-icon :icon="Icon.plus" />
  Add Item
</button>

<!-- Explicitly decorative -->
<bo-icon :icon="Icon.star" :accessibility="{ decorative: true }" />
```

### Semantic Icons

Semantic icons convey important information and are announced by screen readers:

<div class="flex gap-4 items-center my-4">
  <bo-icon 
    :icon="Icon.alert_triangle" 
    :accessibility="{ decorative: false, title: 'Warning: Check your input' }"
    color="orange"
  />
  <bo-icon 
    :icon="Icon.check_circle" 
    :accessibility="{ decorative: false, title: 'Success: Form submitted' }"
    color="green"
  />
  <bo-icon 
    :icon="Icon.info" 
    :accessibility="{ decorative: false, title: 'Information: Additional details available' }"
    color="blue"
  />
</div>

```vue
<!-- Status indicators -->
<bo-icon
	:icon="Icon.alert_triangle"
	:accessibility="{
		decorative: false,
		title: 'Warning: Check your input',
	}"
	color="orange"
/>

<!-- Success indicator -->
<bo-icon
	:icon="Icon.check_circle"
	:accessibility="{
		decorative: false,
		title: 'Success: Form submitted',
	}"
	color="green"
/>

<!-- Navigation icon -->
<bo-icon
	:icon="Icon.home"
	:accessibility="{
		decorative: false,
		title: 'Go to homepage',
	}"
/>
```

### External aria-hidden Override

You can override the component's accessibility behavior using external attributes:

```vue
<!-- Force hide from screen readers -->
<bo-icon
	:icon="Icon.star"
	:accessibility="{ decorative: false, title: 'Should not be announced' }"
	:aria-hidden="true"
/>
```

## All Icons

<div class="grid grid-cols-4 gap-4 my-4">
  <div v-for="(value, key) in Icon" :key="key" class="flex flex-col items-center p-4 border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
    <bo-icon :icon="value" />
    <span class="text-xs mt-1">{{ key }}</span>
  </div>
</div>
