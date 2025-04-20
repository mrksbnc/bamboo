<script setup>
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

# Icon

The Icon component provides a comprehensive set of icons based on the Feather icon set. It allows for different sizes and colors to be applied to icons.

## Basic Example

```html
<bo-icon :icon="Icon.heart" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-icon :icon="Icon.heart" />
</div>

### Props

| Prop name       | Type                | Default        | Description                                                           |
| --------------- | ------------------- | -------------- | --------------------------------------------------------------------- |
| `icon`          | `Icon`              | -              | The icon to display (required)                                        |
| `size`          | `BoSize`            | `default`      | Size of the icon                                                      |
| `color`         | `string`            | `currentColor` | Color of the icon (hex or CSS color)                                  |
| `accessibility` | `IconAccessibility` | -              | Accessibility related properties like title and decorative properties |

### Types

```ts
export enum Icon {
	activity = 'activity',
	airplay = 'airplay',
	alert_circle = 'alert-circle',
	// Many more icons...
	none = 'none',
}

export interface IconAccessibility {
	decorative?: boolean; // Whether the icon is decorative (true) or meaningful/informative (false)
	title?: string; // Title for the icon when it conveys information (required when decorative is false)
}

export interface BoIconProps {
	icon: Icon; // Icon to display
	size?: BoSize; // Size of the icon
	color?: string; // Color of the icon
	accessibility?: IconAccessibility; // Accessibility related properties
}
```

## Icon Sizes

Icons are available in different sizes.

<div class="flex flex-wrap gap-1 items-end">
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.star" :size="BoSize.extra_small" />
    <span class="text-sm mt-2">Extra Small</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.star" :size="BoSize.small" />
    <span class="text-sm mt-2">Small</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.star" :size="BoSize.default" />
    <span class="text-sm mt-2">Default</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.star" :size="BoSize.large" />
    <span class="text-sm mt-2">Large</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.star" :size="BoSize.extra_large" />
    <span class="text-sm mt-2">Extra Large</span>
  </div>
</div>

```html
<bo-icon
	:icon="Icon.star"
	:size="BoSize.extra_small"
/>
<bo-icon
	:icon="Icon.star"
	:size="BoSize.small"
/>
<bo-icon
	:icon="Icon.star"
	:size="BoSize.default"
/>
<bo-icon
	:icon="Icon.star"
	:size="BoSize.large"
/>
<bo-icon
	:icon="Icon.star"
	:size="BoSize.extra_large"
/>
```

## Custom Colors

Icons can be displayed with custom colors.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.heart" color="red" />
    <span class="text-sm mt-2">Named Color</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.heart" color="#3B82F6" />
    <span class="text-sm mt-2">Hex Color</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.heart" color="rgb(34, 197, 94)" />
    <span class="text-sm mt-2">RGB Color</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.heart" color="hsl(16, 100%, 50%)" />
    <span class="text-sm mt-2">HSL Color</span>
  </div>
  <div class="flex flex-col items-center w-16 h-16 p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon.heart" class="text-purple-500" />
    <span class="text-sm mt-2">Tailwind Class</span>
  </div>
</div>

```html
<bo-icon
	:icon="Icon.heart"
	color="red"
/>
<bo-icon
	:icon="Icon.heart"
	color="#3B82F6"
/>
<bo-icon
	:icon="Icon.heart"
	color="rgb(34, 197, 94)"
/>
<bo-icon
	:icon="Icon.heart"
	color="hsl(16, 100%, 50%)"
/>
<bo-icon
	:icon="Icon.heart"
	class="text-purple-500"
/>
```

## All Icons

Below is a comprehensive gallery of all available icons in the library.

<div class="mt-4 flex flex-wrap gap-2 items-center">
  <div v-for="(value, name) in Icon" :key="name" class="flex flex-col items-center p-2 border border-gray-200 dark:border-gray-700 rounded">
    <bo-icon :icon="Icon[name]" />
    <span class="text-xs mt-2 text-center">{{ name }}</span>
  </div>
</div>

```html
<div class="flex flex-wrap gap-4">
	<div class="flexflex-col items-center rounded border p-2">
		<bo-icon :icon="Icon.activity" />
		<span class="mt-2 text-center text-xs">activity</span>
	</div>
	<!-- Add more icons as needed -->
</div>
```

## Accessibility

When an icon conveys meaning (not just decorative), it should have a title for screen readers.

<div class="flex gap-1 items-center">
  <bo-icon 
    :icon="Icon.alert_triangle" 
    :decorative="false"
    title="Warning: Important information" 
    color="#F59E0B"
  />
</div>

```html
<bo-icon
	:icon="Icon.alert_triangle"
	:decorative="false"
	title="Warning: Important information"
	color="#F59E0B"
/>
```

## In Components

Icons are often used within other components to enhance visual communication.

<div class="flex flex-col gap-1">
  <div class="flex items-center gap-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
    <bo-icon :icon="Icon.info" color="#3B82F6" />
    <span>Information message with an icon</span>
  </div>
  
  <button class="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    <bo-icon :icon="Icon.download" />
    <span>Download</span>
  </button>
  
  <div class="flex items-center gap-1">
    <bo-icon :icon="Icon.check_circle" color="#10B981" />
    <span>Task completed successfully</span>
  </div>
</div>

```html
<!-- Info message with icon -->
<div class="flex items-center gap-1 rounded bg-gray-100 p-2 dark:bg-gray-800">
	<bo-icon
		:icon="Icon.info"
		color="#3B82F6"
	/>
	<span>Information message with an icon</span>
</div>

<!-- Button with icon -->
<button class="flex items-center gap-1 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
	<bo-icon :icon="Icon.download" />
	<span>Download</span>
</button>

<!-- Status indicator with icon -->
<div class="flex items-center gap-1">
	<bo-icon
		:icon="Icon.check_circle"
		color="#10B981"
	/>
	<span>Task completed successfully</span>
</div>
```

```

```
