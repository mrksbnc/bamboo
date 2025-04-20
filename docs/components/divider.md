<script setup>
import { BoDivider, BoDividerVariant } from '@/components/bo-divider';
</script>

# Divider

Dividers are used to create a visual separation between content sections or elements.

## Basic Example

```html
<bo-divider />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center w-full">
  <bo-divider />
</div>

### Props

| Prop name       | Type               | Default        | Description                        |
| --------------- | ------------------ | -------------- | ---------------------------------- |
| `id`            | `string`           | Auto-generated | Unique ID for the divider          |
| `variant`       | `BoDividerVariant` | `default`      | Style variant of the divider       |
| `colorHex`      | `string`           | -              | Custom color as hexadecimal string |
| `tailwindColor` | `string`           | -              | Custom color as Tailwind class     |

### Types

```ts
export type BoDividerProps = {
	id?: string; // ID attribute for the divider
	variant?: BoDividerVariant; // Style variant for the divider
	colorHex?: string; // Custom color as hex code (e.g., '#FF0000')
	tailwindColor?: string; // Custom color as Tailwind class (e.g., 'border-blue-500')
};

export enum BoDividerVariant {
	default = 'default', // Solid line
	dotted = 'dotted', // Dotted line
	dashed = 'dashed', // Dashed line
}
```

## Variants

Different style variants for the divider.

<div class="flex flex-wrap gap-1 items-center w-full">
  <div>
    <bo-divider :variant="BoDividerVariant.default" />
    <p class="text-sm mt-2">Default (Solid)</p>
  </div>
  <div>
    <bo-divider :variant="BoDividerVariant.dotted" />
    <p class="text-sm mt-2">Dotted</p>
  </div>
  <div>
    <bo-divider :variant="BoDividerVariant.dashed" />
    <p class="text-sm mt-2">Dashed</p>
  </div>
</div>

```html
<bo-divider :variant="BoDividerVariant.default" />
<bo-divider :variant="BoDividerVariant.dotted" />
<bo-divider :variant="BoDividerVariant.dashed" />
```

## Custom Colors

Dividers can have custom colors using either hex values or Tailwind classes.

<div class="flex flex-wrap gap-1 items-center w-full">
  <div>
    <bo-divider />
    <p class="text-sm mt-2">Default Color</p>
  </div>
  <div>
    <bo-divider color-hex="#3B82F6" />
    <p class="text-sm mt-2">Hex Color (#3B82F6)</p>
  </div>
  <div>
    <bo-divider tailwind-color="border-pink-500" />
    <p class="text-sm mt-2">Tailwind Color (border-pink-500)</p>
  </div>
</div>

```html
<bo-divider />
<bo-divider color-hex="#3B82F6" />
<bo-divider tailwind-color="border-pink-500" />
```

## Custom Variants with Colors

Combine different variants with custom colors.

<div class="flex flex-wrap gap-1 items-center w-full">
  <div>
    <bo-divider :variant="BoDividerVariant.dashed" color-hex="#10B981" />
    <p class="text-sm mt-2">Dashed Green</p>
  </div>
  <div>
    <bo-divider :variant="BoDividerVariant.dotted" color-hex="#EC4899" />
    <p class="text-sm mt-2">Dotted Pink</p>
  </div>
  <div>
    <bo-divider :variant="BoDividerVariant.default" tailwind-color="border-purple-500" />
    <p class="text-sm mt-2">Solid Purple</p>
  </div>
</div>

```html
<bo-divider
	:variant="BoDividerVariant.dashed"
	color-hex="#10B981"
/>
<bo-divider
	:variant="BoDividerVariant.dotted"
	color-hex="#EC4899"
/>
<bo-divider
	:variant="BoDividerVariant.default"
	tailwind-color="border-purple-500"
/>
```

## Usage in Content Sections

Dividers are commonly used to separate sections of content.

<div class="flex flex-col gap-1 w-full">
  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded">
    <h3 class="text-lg font-semibold">Section 1</h3>
    <p>This is the content for section 1.</p>
  </div>
  
  <bo-divider />
  
  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded">
    <h3 class="text-lg font-semibold">Section 2</h3>
    <p>This is the content for section 2.</p>
  </div>
  
  <bo-divider :variant="BoDividerVariant.dashed" />
  
  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded">
    <h3 class="text-lg font-semibold">Section 3</h3>
    <p>This is the content for section 3.</p>
  </div>
</div>

```html
<div class="rounded bg-gray-50 p-4 dark:bg-gray-800">
	<h3 class="text-lg font-semibold">Section 1</h3>
	<p>This is the content for section 1.</p>
</div>

<bo-divider />

<div class="rounded bg-gray-50 p-4 dark:bg-gray-800">
	<h3 class="text-lg font-semibold">Section 2</h3>
	<p>This is the content for section 2.</p>
</div>

<bo-divider :variant="BoDividerVariant.dashed" />

<div class="rounded bg-gray-50 p-4 dark:bg-gray-800">
	<h3 class="text-lg font-semibold">Section 3</h3>
	<p>This is the content for section 3.</p>
</div>
```

```

```
