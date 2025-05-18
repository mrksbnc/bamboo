<script setup>
import BoIcon from '@/components/bo-icon/bo-icon.vue';
import { Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared/bo-size';
</script>

# Icon

A versatile icon component that renders SVG icons with customizable size and color.

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

| Name            | Type                      | Default                               | Description           |
| --------------- | ------------------------- | ------------------------------------- | --------------------- |
| `icon`          | `Icon`                    | Required                              | The icon to display   |
| `size`          | `BoSize`                  | `default`                             | Size of the icon      |
| `color`         | `string`                  | `currentColor`                        | Color of the icon     |
| `accessibility` | `AccessibilityDefinition` | `{ title: 'icon', decorative: true }` | Accessibility options |

## Types

```ts
export enum Icon {
	activity = 'activity',
	airplay = 'airplay',
	alert_circle = 'alert-circle',
	// ... many more icons (shortened for brevity)
	zap = 'zap',
	zoom_in = 'zoom-in',
	zoom_out = 'zoom-out',
	none = 'none',
}

export interface AccessibilityDefinition {
	/**
	 * Whether the icon is decorative. This means that the icon is not a part of
	 * the UI and is only used to convey information.
	 */
	decorative?: boolean;
	/**
	 * The title of the icon. This is used to describe the icon to users of assistive technologies.
	 */
	title?: string;
}

export interface BoIconProps {
	icon: Icon;
	size?: BoSize;
	color?: string;
	accessibility?: AccessibilityDefinition;
}
```

## Sizes

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
</div>

```vue
<bo-icon :icon="Icon.heart" color="red" />
<bo-icon :icon="Icon.check" color="green" />
<bo-icon :icon="Icon.alert_circle" color="orange" />
<bo-icon :icon="Icon.x" color="#FF0000" />
```

## All Icons

<div class="grid grid-cols-4 gap-4 my-4">
  <div v-for="(value, key) in Icon" :key="key" class="flex flex-col items-center p-2 border rounded hover:bg-gray-50">
    <bo-icon :icon="value" />
    <span class="text-xs mt-1">{{ key }}</span>
  </div>
</div>

## Accessibility

Icons can be made accessible for screen readers by configuring the accessibility options:

```vue
<bo-icon
	:icon="Icon.alert_triangle"
	:accessibility="{
		decorative: false,
		title: 'Warning: Important information',
	}"
/>
```

When `decorative` is set to `false`, the icon becomes meaningful content and the `title` is announced by screen readers.
