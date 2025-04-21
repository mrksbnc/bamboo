<script setup>
import { BoDivider, BoDividerVariant } from '@/components/bo-divider';
</script>

# Divider

The Divider component is a simple horizontal line used to separate content. It supports different styles and colors to match your application's design system. Dividers are commonly used to create visual separation between sections of content.

## Basic Example

```html
<bo-divider />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex flex-col gap-4">
  <p>Content above</p>
  <bo-divider />
  <p>Content below</p>
</div>

### Props

| Prop name       | Type               | Default   | Description                       |
| --------------- | ------------------ | --------- | --------------------------------- |
| `id`            | `string`           | Auto      | Unique identifier for the divider |
| `variant`       | `BoDividerVariant` | `default` | Style variant of the divider      |
| `colorHex`      | `string`           | -         | Custom color in hex format        |
| `tailwindColor` | `string`           | -         | Tailwind color class              |

### Types

```ts
export enum BoDividerVariant {
	default = 'default', // Solid line
	dotted = 'dotted', // Dotted line
	dashed = 'dashed', // Dashed line
}

export type BoDividerProps = {
	id?: string; // Unique identifier
	variant?: BoDividerVariant; // Style variant
	colorHex?: string; // Custom color in hex
	tailwindColor?: string; // Tailwind color class
};
```

## Variants

The Divider component supports different line styles:

<div class="flex flex-col gap-4">
  <bo-divider :variant="BoDividerVariant.default" />
  <bo-divider :variant="BoDividerVariant.dotted" />
  <bo-divider :variant="BoDividerVariant.dashed" />
</div>

```html
<bo-divider :variant="BoDividerVariant.default" />
<bo-divider :variant="BoDividerVariant.dotted" />
<bo-divider :variant="BoDividerVariant.dashed" />
```

## Custom Colors

You can customize the divider color using hex values or Tailwind classes:

<div class="flex flex-col gap-4">
  <bo-divider colorHex="#FF0000" />
  <bo-divider tailwindColor="border-blue-500" />
  <bo-divider tailwindColor="border-green-500" />
</div>

```html
<bo-divider colorHex="#FF0000" />
<bo-divider tailwindColor="border-blue-500" />
<bo-divider tailwindColor="border-green-500" />
```

## Usage Examples

### Between Content Sections

<div class="flex flex-col gap-4">
  <h3>Section 1</h3>
  <p>Content for section 1</p>
  <bo-divider />
  <h3>Section 2</h3>
  <p>Content for section 2</p>
</div>

```html
<h3>Section 1</h3>
<p>Content for section 1</p>
<bo-divider />
<h3>Section 2</h3>
<p>Content for section 2</p>
```

### In Lists

<div class="flex flex-col gap-4">
  <ul class="space-y-2">
    <li>Item 1</li>
    <bo-divider :variant="BoDividerVariant.dotted" />
    <li>Item 2</li>
    <bo-divider :variant="BoDividerVariant.dotted" />
    <li>Item 3</li>
  </ul>
</div>

```html
<ul class="space-y-2">
	<li>Item 1</li>
	<bo-divider :variant="BoDividerVariant.dotted" />
	<li>Item 2</li>
	<bo-divider :variant="BoDividerVariant.dotted" />
	<li>Item 3</li>
</ul>
```

## Best Practices

When using the Divider component:

1. Use dividers sparingly to avoid visual clutter
2. Choose appropriate variants based on context
3. Consider using custom colors to match your design system
4. Use consistent spacing around dividers
5. Consider accessibility when choosing colors
6. Use appropriate variants for different content types
7. Maintain consistent divider usage throughout your application
