<script setup>
import { BoDivider, BoDividerVariant } from '@/components/bo-divider';
</script>

# Divider

Dividers are horizontal lines that separate content into clear sections. They help organize and structure layouts for improved readability.

```js
import { BoDivider } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-divider />
</template>

<script setup>
import { BoDivider } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex flex-col gap-4 my-6">
	<p>Content above divider</p>
	<bo-divider />
	<p>Content below divider</p>
</div>

## Props

| Name            | Type               | Default        | Description                       |
| --------------- | ------------------ | -------------- | --------------------------------- |
| `id`            | `string`           | Auto-generated | Unique identifier for the divider |
| `variant`       | `BoDividerVariant` | `default`      | Style of the divider line         |
| `colorHex`      | `string`           | `undefined`    | Custom color in hex format        |
| `tailwindColor` | `string`           | `undefined`    | Tailwind color class              |

## Types

```ts
export type BoDividerProps = {
	id?: string;
	variant?: BoDividerVariant;
	colorHex?: string;
	tailwindColor?: string;
};

export enum BoDividerVariant {
	default = 'default',
	dotted = 'dotted',
	dashed = 'dashed',
}
```

## Variants

<div class="flex flex-col gap-8 my-6">
	<div>
		<p class="mb-2">Default</p>
		<bo-divider :variant="BoDividerVariant.default" />
	</div>
	
	<div>
		<p class="mb-2">Dotted</p>
		<bo-divider :variant="BoDividerVariant.dotted" />
	</div>
	
	<div>
		<p class="mb-2">Dashed</p>
		<bo-divider :variant="BoDividerVariant.dashed" />
	</div>
</div>

```vue
<bo-divider :variant="BoDividerVariant.default" />
<bo-divider :variant="BoDividerVariant.dotted" />
<bo-divider :variant="BoDividerVariant.dashed" />
```

## Custom Colors

<div class="flex flex-col gap-8 my-6">
	<div>
		<p class="mb-2">Using Hex Color</p>
		<bo-divider color-hex="#3B82F6" />
	</div>
	
	<div>
		<p class="mb-2">Using Tailwind Color</p>
		<bo-divider tailwind-color="bg-red-500" />
	</div>
</div>

```vue
<bo-divider color-hex="#3B82F6" />
<bo-divider tailwind-color="bg-red-500" />
```

## Custom Variants with Colors

<div class="flex flex-col gap-8 my-6">
	<div>
		<p class="mb-2">Dotted with Hex Color</p>
		<bo-divider :variant="BoDividerVariant.dotted" color-hex="#10B981" />
	</div>
	
	<div>
		<p class="mb-2">Dashed with Tailwind Color</p>
		<bo-divider :variant="BoDividerVariant.dashed" tailwind-color="bg-purple-500" />
	</div>
</div>

```vue
<bo-divider :variant="BoDividerVariant.dotted" color-hex="#10B981" />
<bo-divider :variant="BoDividerVariant.dashed" tailwind-color="bg-purple-500" />
```
