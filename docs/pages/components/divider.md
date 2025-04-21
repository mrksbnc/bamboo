# Divider

The `bo-divider` component is a simple horizontal or vertical line used to separate content.

## Features

- Horizontal and vertical orientation
- Customizable styling
- Dark mode support
- Multiple variants
- Text support
- Accessible design

## Basic Usage

<div class="component-preview">
	<div class="space-y-4">
		<p>Content above the divider</p>
		<bo-divider />
		<p>Content below the divider</p>
	</div>
</div>

```vue
<template>
	<div class="space-y-4">
		<p>Content above the divider</p>
		<bo-divider />
		<p>Content below the divider</p>
	</div>
</template>
```

## Props

| Prop           | Type                                | Default        | Description                        |
| -------------- | ----------------------------------- | -------------- | ---------------------------------- |
| `orientation`  | `'horizontal' \| 'vertical'`        | `'horizontal'` | The orientation of the divider     |
| `size`         | `BoSize`                            | `'default'`    | The size of the divider            |
| `variant`      | `'default' \| 'dashed' \| 'dotted'` | `'default'`    | The variant of the divider         |
| `text`         | `string`                            | `undefined`    | The text to display in the divider |
| `textPosition` | `'left' \| 'center' \| 'right'`     | `'center'`     | The position of the text           |
| `class`        | `string`                            | `undefined`    | Custom class for the divider       |
| `textClass`    | `string`                            | `undefined`    | Custom class for the text          |
| `id`           | `string`                            | `generated`    | Unique ID for the divider          |

## Examples

### With Text

<div class="component-preview">
	<div class="space-y-4">
		<p>Content above the divider</p>
		<bo-divider>Or</bo-divider>
		<p>Content below the divider</p>
	</div>
</div>

```vue
<template>
	<div class="space-y-4">
		<p>Content above the divider</p>
		<bo-divider>Or</bo-divider>
		<p>Content below the divider</p>
	</div>
</template>
```

### Vertical Divider

<div class="component-preview">
	<div class="flex items-center gap-4">
		<span>Left Content</span>
		<bo-divider vertical />
		<span>Right Content</span>
	</div>
</div>

```vue
<template>
	<div class="flex items-center gap-4">
		<span>Left Content</span>
		<bo-divider vertical />
		<span>Right Content</span>
	</div>
</template>
```

### Different Variants

```vue
<template>
	<div>
		<p>Content above</p>
		<bo-divider variant="dashed" />
		<p>Content in the middle</p>
		<bo-divider variant="dotted" />
		<p>Content below</p>
	</div>
</template>

<script setup lang="ts">
import { BoDivider } from '@mrksbnc/bamboo';
</script>
```

### Custom Styling

<div class="component-preview">
	<div class="space-y-4">
		<bo-divider 
			class="border-2 border-blue-500" 
			text-class="text-blue-500 font-bold"
		>
			Custom Styled
		</bo-divider>
	</div>
</div>

```vue
<template>
	<bo-divider
		class="border-2 border-blue-500"
		text-class="text-blue-500 font-bold"
	>
		Custom Styled
	</bo-divider>
</template>
```

## Accessibility

The divider component is built with accessibility in mind:

- ARIA roles and labels
- Screen reader support
- High contrast support

## Browser Support

The divider component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Best Practices

1. Use dividers sparingly to avoid visual clutter
2. Consider using text in dividers to provide context
3. Use vertical dividers in flex containers
4. Use different variants to create visual hierarchy
5. Consider using custom styling to match your design system
6. Use appropriate text positioning for your layout
7. Consider using different sizes for different contexts
8. Use dividers to separate related content
9. Avoid using dividers as decorative elements
10. Consider using dividers in combination with other components

## Text Alignment

<div class="component-preview">
	<div class="space-y-4">
		<bo-divider text-align="left">Left Aligned</bo-divider>
		<bo-divider text-align="center">Center Aligned</bo-divider>
		<bo-divider text-align="right">Right Aligned</bo-divider>
	</div>
</div>

```vue
<template>
	<div class="space-y-4">
		<bo-divider text-align="left">Left Aligned</bo-divider>
		<bo-divider text-align="center">Center Aligned</bo-divider>
		<bo-divider text-align="right">Right Aligned</bo-divider>
	</div>
</template>
```

## Usage Examples

### Form Sections

```vue
<template>
	<form class="space-y-6">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Personal Information</h3>
			<!-- Form fields for personal information -->
		</div>

		<bo-divider>Contact Information</bo-divider>

		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Contact Details</h3>
			<!-- Form fields for contact information -->
		</div>
	</form>
</template>
```

### Navigation Menu

```vue
<template>
	<nav class="flex items-center gap-4">
		<a
			href="#"
			class="text-blue-600"
			>Home</a
		>
		<bo-divider vertical />
		<a
			href="#"
			class="text-blue-600"
			>Products</a
		>
		<bo-divider vertical />
		<a
			href="#"
			class="text-blue-600"
			>About</a
		>
		<bo-divider vertical />
		<a
			href="#"
			class="text-blue-600"
			>Contact</a
		>
	</nav>
</template>
```

### Card Layout

```vue
<template>
	<div class="rounded-lg border p-4">
		<div class="flex items-center justify-between">
			<h3 class="text-lg font-semibold">Card Title</h3>
			<bo-button>Action</bo-button>
		</div>

		<bo-divider class="my-4" />

		<div class="space-y-2">
			<p>Card content goes here...</p>
		</div>

		<bo-divider class="my-4" />

		<div class="flex justify-end">
			<bo-button variant="secondary">Cancel</bo-button>
			<bo-button class="ml-2">Save</bo-button>
		</div>
	</div>
</template>
```
