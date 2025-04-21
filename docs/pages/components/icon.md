<script setup>
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

# Icon

Icons provide visual cues and improve user interface recognition. The Bamboo icon system uses a consistent set of symbols that help communicate meaning and actions.

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

| Name            | Type                      | Default        | Description                                     |
| --------------- | ------------------------- | -------------- | ----------------------------------------------- |
| `icon`          | `Icon`                    | Required       | The icon to display                             |
| `size`          | `BoSize`                  | `default`      | Size of the icon                                |
| `color`         | `string`                  | `currentColor` | Color of the icon (hex, rgb, or CSS color name) |
| `accessibility` | `AccessibilityDefinition` | `undefined`    | Accessibility options for screen readers        |

## Types

```ts
export enum Icon {
	activity = 'activity',
	airplay = 'airplay',
	alert_circle = 'alert-circle',
	// ... many more icons (over 200)
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
	<bo-icon :icon="Icon.heart" :size="BoSize.small" />
	<bo-icon :icon="Icon.heart" :size="BoSize.default" />
	<bo-icon :icon="Icon.heart" :size="BoSize.large" />
</div>

```vue
<bo-icon :icon="Icon.heart" :size="BoSize.small" />
<bo-icon :icon="Icon.heart" :size="BoSize.default" />
<bo-icon :icon="Icon.heart" :size="BoSize.large" />
```

## Custom Colors

<div class="flex gap-4 items-center my-4">
	<bo-icon :icon="Icon.heart" color="red" />
	<bo-icon :icon="Icon.info" color="#3B82F6" />
	<bo-icon :icon="Icon.check" color="rgb(16, 185, 129)" />
</div>

```vue
<bo-icon :icon="Icon.heart" color="red" />
<bo-icon :icon="Icon.info" color="#3B82F6" />
<bo-icon :icon="Icon.check" color="rgb(16, 185, 129)" />
```

## With Accessibility Options

<div class="flex gap-4 items-center my-4">
	<bo-icon 
		:icon="Icon.bell" 
		:accessibility="{ title: 'Notifications' }" 
	/>
</div>

```vue
<bo-icon :icon="Icon.bell" :accessibility="{ title: 'Notifications' }" />
```

## Common Icon Examples

<div class="grid grid-cols-4 gap-4 my-6">
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.heart" />
		<span class="text-xs mt-1">heart</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.home" />
		<span class="text-xs mt-1">home</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.settings" />
		<span class="text-xs mt-1">settings</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.user" />
		<span class="text-xs mt-1">user</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.mail" />
		<span class="text-xs mt-1">mail</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.calendar" />
		<span class="text-xs mt-1">calendar</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.search" />
		<span class="text-xs mt-1">search</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.bell" />
		<span class="text-xs mt-1">bell</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.check" />
		<span class="text-xs mt-1">check</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.x" />
		<span class="text-xs mt-1">x</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.plus" />
		<span class="text-xs mt-1">plus</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.minus" />
		<span class="text-xs mt-1">minus</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.arrow_right" />
		<span class="text-xs mt-1">arrow_right</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.arrow_left" />
		<span class="text-xs mt-1">arrow_left</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.arrow_up" />
		<span class="text-xs mt-1">arrow_up</span>
	</div>
	<div class="flex flex-col items-center">
		<bo-icon :icon="Icon.arrow_down" />
		<span class="text-xs mt-1">arrow_down</span>
	</div>
</div>

```vue
<bo-icon :icon="Icon.heart" />
<bo-icon :icon="Icon.home" />
<bo-icon :icon="Icon.settings" />
<bo-icon :icon="Icon.user" />
<bo-icon :icon="Icon.mail" />
<bo-icon :icon="Icon.calendar" />
<bo-icon :icon="Icon.search" />
<bo-icon :icon="Icon.bell" />
<bo-icon :icon="Icon.check" />
<bo-icon :icon="Icon.x" />
<bo-icon :icon="Icon.plus" />
<bo-icon :icon="Icon.minus" />
<bo-icon :icon="Icon.arrow_right" />
<bo-icon :icon="Icon.arrow_left" />
<bo-icon :icon="Icon.arrow_up" />
<bo-icon :icon="Icon.arrow_down" />
```
