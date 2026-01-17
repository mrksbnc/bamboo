# Icon

The Icon component renders scalable vector icons with various sizes, colors, and interactive states.

## Basic Usage

```vue
<template>
	<div class="flex gap-4">
		<bo-icon name="heart" />
		<bo-icon name="star" />
		<bo-icon name="user" />
	</div>
</template>
```

## Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-icon name="heart" size="xs" />
		<bo-icon name="heart" size="sm" />
		<bo-icon name="heart" size="default" />
		<bo-icon name="heart" size="lg" />
		<bo-icon name="heart" size="xl" />
	</div>
</template>
```

## Variants

Available variants: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `white`, `black`

```vue
<template>
	<div class="flex gap-4">
		<bo-icon name="star" variant="default" />
		<bo-icon name="star" variant="primary" />
		<bo-icon name="star" variant="secondary" />
		<bo-icon name="star" variant="success" />
		<bo-icon name="star" variant="warning" />
		<bo-icon name="star" variant="danger" />
	</div>
</template>
```

## Custom Colors

Use custom colors with CSS variables, hex, RGB, or other color formats:

```vue
<template>
	<div class="flex gap-4">
		<bo-icon name="heart" custom-color="#ff6b6b" />
		<bo-icon name="star" custom-color="rgb(59, 130, 246)" />
		<bo-icon name="user" custom-color="var(--my-custom-color)" />
	</div>
</template>
```

## Interactive Icons

Make icons clickable and add hover effects:

```vue
<template>
	<div class="flex gap-4">
		<bo-icon name="heart" clickable @click="handleLike" />
		<bo-icon name="bookmark" clickable cursor="cursor-pointer" @click="handleBookmark" />
	</div>
</template>

<script setup>
	const handleLike = () => {
		console.log('Liked!');
	};

	const handleBookmark = () => {
		console.log('Bookmarked!');
	};
</script>
```

## Custom Cursors

Set custom cursor styles using Tailwind CSS cursor classes:

```vue
<template>
	<div class="flex gap-4">
		<bo-icon name="help" cursor="cursor-help" />
		<bo-icon name="external-link" cursor="cursor-pointer" />
		<bo-icon name="move" cursor="cursor-move" />
		<bo-icon name="resize" cursor="cursor-resize" />
	</div>
</template>
```

## Loading States

Icons can be used in loading states with rotation:

```vue
<template>
	<div class="flex gap-4">
		<bo-icon name="loader" class="animate-spin" />
		<bo-icon name="refresh" class="animate-spin" variant="primary" />
	</div>
</template>
```

## Icon Buttons

Combine with button-like styling:

```vue
<template>
	<div class="flex gap-4">
		<button class="p-2 rounded hover:bg-gray-100">
			<bo-icon name="settings" />
		</button>
		<button class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
			<bo-icon name="plus" variant="white" />
		</button>
	</div>
</template>
```

## Accessibility

Always provide proper accessibility attributes for interactive icons:

```vue
<template>
	<div class="flex gap-4">
		<!-- Decorative icon (hidden from screen readers) -->
		<bo-icon name="star" aria-hidden="true" />

		<!-- Interactive icon with label -->
		<bo-icon
			name="heart"
			clickable
			aria-label="Add to favorites"
			role="button"
			@click="addToFavorites"
		/>

		<!-- Icon with description -->
		<bo-icon name="warning" aria-describedby="warning-text" />
		<span id="warning-text" class="sr-only"> Warning: This action cannot be undone </span>
	</div>
</template>
```

## Props

| Prop              | Type            | Default     | Description                                   |
| ----------------- | --------------- | ----------- | --------------------------------------------- |
| `id`              | `string`        | -           | Element ID (auto-generated if not provided)   |
| `dataTestId`      | `string`        | -           | Data test ID (auto-generated if not provided) |
| `name`            | `Icon`          | -           | Name of the icon to display                   |
| `size`            | `BoIconSize`    | `'default'` | Size of the icon                              |
| `variant`         | `BoIconVariant` | `'default'` | Color variant of the icon                     |
| `customColor`     | `string`        | -           | Custom color (CSS variable, hex, rgb, etc.)   |
| `clickable`       | `boolean`       | `false`     | Whether the icon is clickable                 |
| `cursor`          | `BoCursor`      | -           | Custom cursor style (Tailwind CSS format)     |
| `role`            | `string`        | -           | ARIA role attribute                           |
| `ariaLabel`       | `string`        | -           | ARIA label attribute                          |
| `ariaHidden`      | `boolean`       | -           | Whether to hide from screen readers           |
| `ariaDescribedBy` | `string`        | -           | ID of element that describes the icon         |

## Events

| Event        | Payload      | Description                          |
| ------------ | ------------ | ------------------------------------ |
| `click`      | `MouseEvent` | Fired when clickable icon is clicked |
| `mouseenter` | `MouseEvent` | Fired when mouse enters icon area    |
| `mouseleave` | `MouseEvent` | Fired when mouse leaves icon area    |

## Types

```typescript
type BoIconSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

type BoIconVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'black';

type BoCursor = string; // Tailwind CSS cursor class
```

## Icon Registry

The component uses an icon registry system. You can register custom icons:

```typescript
import { BO_ICON_REGISTRY } from '@bamboo/core';

// Register a custom icon
BO_ICON_REGISTRY.register('my-icon', {
	viewBox: '0 0 24 24',
	path: 'M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z',
});
```

## Accessibility Guidelines

- Use `aria-hidden="true"` for purely decorative icons
- Provide `aria-label` for interactive icons without text labels
- Use `role="img"` for icons that convey meaning
- Ensure sufficient color contrast (4.5:1 minimum)
- Make interactive icons keyboard accessible
- Provide alternative text or descriptions when necessary
