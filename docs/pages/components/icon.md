<script setup>
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

# Icon

The Icon component provides a comprehensive set of icons for use throughout your application. It supports various sizes, colors, and accessibility features. The component uses a consistent icon set that matches your application's design system.

## Basic Example

```html
<bo-icon icon="check" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-icon icon="check" />
</div>

### Props

| Prop name       | Type                      | Default | Description                   |
| --------------- | ------------------------- | ------- | ----------------------------- |
| `icon`          | `Icon`                    | -       | Required. The icon to display |
| `size`          | `BoSize`                  | `md`    | Size of the icon              |
| `color`         | `string`                  | -       | Custom color for the icon     |
| `accessibility` | `AccessibilityDefinition` | -       | Accessibility configuration   |

### Types

```ts
export interface AccessibilityDefinition {
	decorative?: boolean; // Whether the icon is decorative
	title?: string; // Title for screen readers
}

export interface BoIconProps {
	icon: Icon; // Icon to display
	size?: BoSize; // Icon size
	color?: string; // Custom color
	accessibility?: AccessibilityDefinition; // Accessibility config
}
```

## Basic Usage

Display a simple icon:

<div class="flex flex-wrap gap-4 items-center">
  <bo-icon icon="check" />
  <bo-icon icon="x" />
  <bo-icon icon="info" />
</div>

```html
<bo-icon icon="check" />
<bo-icon icon="x" />
<bo-icon icon="info" />
```

## Sizes

Icons can be displayed in different sizes:

<div class="flex flex-wrap gap-4 items-center">
  <bo-icon icon="check" :size="BoSize.xs" />
  <bo-icon icon="check" :size="BoSize.sm" />
  <bo-icon icon="check" :size="BoSize.md" />
  <bo-icon icon="check" :size="BoSize.lg" />
  <bo-icon icon="check" :size="BoSize.xl" />
</div>

```html
<bo-icon
	icon="check"
	:size="BoSize.xs"
/>
<bo-icon
	icon="check"
	:size="BoSize.sm"
/>
<bo-icon
	icon="check"
	:size="BoSize.md"
/>
<bo-icon
	icon="check"
	:size="BoSize.lg"
/>
<bo-icon
	icon="check"
	:size="BoSize.xl"
/>
```

## Custom Colors

Icons can be colored using custom values:

<div class="flex flex-wrap gap-4 items-center">
  <bo-icon icon="check" color="#FF0000" />
  <bo-icon icon="check" color="#00FF00" />
  <bo-icon icon="check" color="#0000FF" />
</div>

```html
<bo-icon
	icon="check"
	color="#FF0000"
/>
<bo-icon
	icon="check"
	color="#00FF00"
/>
<bo-icon
	icon="check"
	color="#0000FF"
/>
```

## Accessibility

Icons can be configured for accessibility:

<div class="flex flex-wrap gap-4 items-center">
  <bo-icon 
    icon="check" 
    :accessibility="{ title: 'Success' }" 
  />
  <bo-icon 
    icon="x" 
    :accessibility="{ title: 'Error' }" 
  />
  <bo-icon 
    icon="info" 
    :accessibility="{ decorative: true }" 
  />
</div>

```html
<bo-icon
	icon="check"
	:accessibility="{ title: 'Success' }"
/>
<bo-icon
	icon="x"
	:accessibility="{ title: 'Error' }"
/>
<bo-icon
	icon="info"
	:accessibility="{ decorative: true }"
/>
```

## All Icons

Here is a list of all icons available:

<div class="flex flex-wrap gap-4 items-center">
  <div v-for="icon in Object.keys(Icon)" :key="icon" class="flex flex-col gap-1">
    <bo-icon :icon="icon" />
    <span class="text-sm">{{ icon }}</span>
  </div>
</div>
