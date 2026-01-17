# Loading Pulse

The Loading Pulse component displays an animated pulse indicator to show loading states with customizable appearance and text positioning.

## Basic Usage

```vue
<template>
	<div class="flex gap-4">
		<bo-loading-pulse />
		<bo-loading-pulse text="Loading..." />
	</div>
</template>
```

## Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-loading-pulse size="xs" />
		<bo-loading-pulse size="sm" />
		<bo-loading-pulse size="default" />
		<bo-loading-pulse size="lg" />
		<bo-loading-pulse size="xl" />
	</div>
</template>
```

## Variants

Available variants: `primary`, `secondary`, `success`, `warning`, `danger`, `white`, `black`, `current`

```vue
<template>
	<div class="flex gap-4">
		<bo-loading-pulse variant="primary" />
		<bo-loading-pulse variant="secondary" />
		<bo-loading-pulse variant="success" />
		<bo-loading-pulse variant="warning" />
		<bo-loading-pulse variant="danger" />
	</div>
</template>
```

## With Text

Add descriptive text to the loading indicator:

```vue
<template>
	<div class="space-y-4">
		<bo-loading-pulse text="Loading..." />
		<bo-loading-pulse text="Please wait..." variant="primary" />
		<bo-loading-pulse text="Processing..." variant="success" />
	</div>
</template>
```

## Text Positioning

Available positions: `top`, `bottom`, `before`, `after`

```vue
<template>
	<div class="space-y-4">
		<bo-loading-pulse text="Loading..." text-position="top" />
		<bo-loading-pulse text="Loading..." text-position="bottom" />
		<bo-loading-pulse text="Loading..." text-position="before" />
		<bo-loading-pulse text="Loading..." text-position="after" />
	</div>
</template>
```

## Different Sizes with Text

```vue
<template>
	<div class="space-y-4">
		<bo-loading-pulse size="xs" text="Loading..." />
		<bo-loading-pulse size="sm" text="Loading..." />
		<bo-loading-pulse size="default" text="Loading..." />
		<bo-loading-pulse size="lg" text="Loading..." />
		<bo-loading-pulse size="xl" text="Loading..." />
	</div>
</template>
```

## Custom Colors

Use the `current` variant to inherit text color:

```vue
<template>
	<div class="space-y-4">
		<div class="text-blue-600">
			<bo-loading-pulse variant="current" text="Loading..." />
		</div>
		<div class="text-green-600">
			<bo-loading-pulse variant="current" text="Success..." />
		</div>
		<div class="text-red-600">
			<bo-loading-pulse variant="current" text="Error..." />
		</div>
	</div>
</template>
```

## In Buttons

Perfect for loading states in buttons:

```vue
<template>
	<div class="flex gap-4">
		<button class="px-4 py-2 bg-blue-600 text-white rounded" disabled>
			<bo-loading-pulse variant="white" size="sm" text="Saving..." text-position="after" />
		</button>

		<button class="px-4 py-2 border border-gray-300 rounded" disabled>
			<bo-loading-pulse variant="primary" size="sm" text="Loading..." text-position="after" />
		</button>
	</div>
</template>
```

## In Cards

Show loading states in content areas:

```vue
<template>
	<div class="p-6 border rounded-lg">
		<div class="flex justify-center">
			<bo-loading-pulse
				size="lg"
				text="Loading content..."
				text-position="bottom"
				variant="primary"
			/>
		</div>
	</div>
</template>
```

## Conditional Loading

```vue
<template>
	<div>
		<bo-loading-pulse v-if="isLoading" text="Loading data..." variant="primary" />
		<div v-else>
			<!-- Your content here -->
			<p>Content loaded successfully!</p>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const isLoading = ref(true);

	onMounted(() => {
		// Simulate loading
		setTimeout(() => {
			isLoading.value = false;
		}, 3000);
	});
</script>
```

## Props

| Prop           | Type                   | Default     | Description                                   |
| -------------- | ---------------------- | ----------- | --------------------------------------------- |
| `id`           | `string`               | -           | Element ID (auto-generated if not provided)   |
| `dataTestId`   | `string`               | -           | Data test ID (auto-generated if not provided) |
| `size`         | `BoLoaderSize`         | `'default'` | Size of the pulse dots                        |
| `variant`      | `BoLoaderVariant`      | `'primary'` | Color variant of the pulse                    |
| `text`         | `string`               | -           | Text to display with the loader               |
| `textPosition` | `BoLoaderTextPosition` | `'after'`   | Position of the text relative to dots         |
| `role`         | `string`               | -           | ARIA role attribute                           |
| `ariaLabel`    | `string`               | -           | ARIA label attribute                          |

## Types

```typescript
type BoLoaderSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

type BoLoaderVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'black'
	| 'current';

type BoLoaderTextPosition = 'top' | 'bottom' | 'before' | 'after';
```

## Accessibility

- Uses appropriate ARIA attributes for screen readers
- Loading states are announced to assistive technologies
- Semantic HTML structure
- Respects user's motion preferences
- Provides meaningful text descriptions when needed
