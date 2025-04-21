# Grid

The Grid component provides a flexible grid system for creating responsive layouts. It uses CSS Grid under the hood and provides a simple API for creating complex layouts.

## Features

- Responsive grid system
- Configurable number of columns
- Adjustable gap sizes
- Centered items option
- Dense grid variant
- Responsive breakpoints
- Grid item spanning and positioning

## Usage

### Basic Usage

```vue
<template>
	<bo-grid>
		<bo-grid-item>Item 1</bo-grid-item>
		<bo-grid-item>Item 2</bo-grid-item>
		<bo-grid-item>Item 3</bo-grid-item>
	</bo-grid>
</template>
```

### Custom Columns

```vue
<template>
	<bo-grid :columns="6">
		<bo-grid-item :span="2">Item 1</bo-grid-item>
		<bo-grid-item :span="4">Item 2</bo-grid-item>
	</bo-grid>
</template>
```

### Responsive Grid

```vue
<template>
	<bo-grid
		responsive
		breakpoint="md"
	>
		<bo-grid-item
			:span="1"
			:span-md="2"
			:span-lg="3"
			>Item 1</bo-grid-item
		>
		<bo-grid-item
			:span="1"
			:span-md="2"
			:span-lg="3"
			>Item 2</bo-grid-item
		>
		<bo-grid-item
			:span="1"
			:span-md="2"
			:span-lg="3"
			>Item 3</bo-grid-item
		>
	</bo-grid>
</template>
```

### Grid Item Positioning

```vue
<template>
	<bo-grid>
		<bo-grid-item
			:start="2"
			:end="4"
			>Item 1</bo-grid-item
		>
		<bo-grid-item
			:start="5"
			:end="7"
			>Item 2</bo-grid-item
		>
	</bo-grid>
</template>
```

## Props

### BoGrid Props

| Prop       | Type                         | Default   | Description                                         |
| ---------- | ---------------------------- | --------- | --------------------------------------------------- |
| columns    | number                       | 12        | The number of columns in the grid                   |
| gap        | BoSize                       | 'default' | The gap between grid items                          |
| center     | boolean                      | false     | Whether the grid items should be centered           |
| responsive | boolean                      | true      | Whether the grid should be responsive               |
| breakpoint | 'sm' \| 'md' \| 'lg' \| 'xl' | 'md'      | The breakpoint at which the grid becomes responsive |
| variant    | BoGridVariant                | 'default' | The variant of the grid                             |
| id         | string                       | -         | Unique ID for the grid                              |

### BoGridItem Props

| Prop   | Type   | Default | Description                                                        |
| ------ | ------ | ------- | ------------------------------------------------------------------ |
| span   | number | 1       | The number of columns this item should span                        |
| spanSm | number | -       | The number of columns this item should span on small screens       |
| spanMd | number | -       | The number of columns this item should span on medium screens      |
| spanLg | number | -       | The number of columns this item should span on large screens       |
| spanXl | number | -       | The number of columns this item should span on extra large screens |
| start  | number | -       | The column this item should start at                               |
| end    | number | -       | The column this item should end at                                 |
| id     | string | -       | Unique ID for the grid item                                        |

## Variants

### BoGridVariant

| Variant | Description                      |
| ------- | -------------------------------- |
| default | Default grid with normal spacing |
| dense   | Dense grid with minimal spacing  |

## Examples

### Basic Grid Layout

```vue
<template>
	<bo-grid>
		<bo-grid-item>Header</bo-grid-item>
		<bo-grid-item>Sidebar</bo-grid-item>
		<bo-grid-item>Main Content</bo-grid-item>
		<bo-grid-item>Footer</bo-grid-item>
	</bo-grid>
</template>
```

### Responsive Card Grid

```vue
<template>
	<bo-grid
		responsive
		breakpoint="md"
	>
		<bo-grid-item
			v-for="item in items"
			:key="item.id"
		>
			<bo-card>
				<template #header>
					<h3>{{ item.title }}</h3>
				</template>
				<p>{{ item.description }}</p>
			</bo-card>
		</bo-grid-item>
	</bo-grid>
</template>

<script setup lang="ts">
const items = [
	{ id: 1, title: 'Card 1', description: 'Description 1' },
	{ id: 2, title: 'Card 2', description: 'Description 2' },
	{ id: 3, title: 'Card 3', description: 'Description 3' },
];
</script>
```

### Complex Layout

```vue
<template>
	<bo-grid :columns="12">
		<bo-grid-item :span="12">Header</bo-grid-item>
		<bo-grid-item :span="3">Sidebar</bo-grid-item>
		<bo-grid-item :span="9">Main Content</bo-grid-item>
		<bo-grid-item :span="12">Footer</bo-grid-item>
	</bo-grid>
</template>
```

## Best Practices

1. Use the grid system for layout purposes only, not for styling individual components
2. Keep the number of columns consistent within a section
3. Use responsive spans to ensure good mobile experience
4. Consider using the dense variant for data-heavy interfaces
5. Use the center prop when you want to center items within their grid cells
6. Use start and end props for precise positioning when needed

## Accessibility

The grid component is built with accessibility in mind:

- Uses semantic HTML elements
- Provides unique IDs for testing and accessibility
- Maintains proper focus order
- Supports keyboard navigation
- Works with screen readers

## Browser Support

The grid component uses CSS Grid, which is supported in all modern browsers:

- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+
- Opera 44+

For older browsers, consider using a polyfill or fallback layout.
