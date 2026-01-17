# Loading Spinner

The Loading Spinner component displays a rotating spinner indicator to show loading states with customizable appearance and text positioning.

## Basic Usage

```vue
<template>
	<div class="flex gap-4">
		<bo-loading-spinner />
		<bo-loading-spinner text="Loading..." />
	</div>
</template>
```

## Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-loading-spinner size="xs" />
		<bo-loading-spinner size="sm" />
		<bo-loading-spinner size="default" />
		<bo-loading-spinner size="lg" />
		<bo-loading-spinner size="xl" />
	</div>
</template>
```

## Variants

Available variants: `primary`, `secondary`, `success`, `warning`, `danger`, `white`, `black`, `current`

```vue
<template>
	<div class="flex gap-4">
		<bo-loading-spinner variant="primary" />
		<bo-loading-spinner variant="secondary" />
		<bo-loading-spinner variant="success" />
		<bo-loading-spinner variant="warning" />
		<bo-loading-spinner variant="danger" />
	</div>
</template>
```

## With Text

Add descriptive text to the loading indicator:

```vue
<template>
	<div class="space-y-4">
		<bo-loading-spinner text="Loading..." />
		<bo-loading-spinner text="Please wait..." variant="primary" />
		<bo-loading-spinner text="Processing..." variant="success" />
	</div>
</template>
```

## Text Positioning

Available positions: `top`, `bottom`, `before`, `after`

```vue
<template>
	<div class="space-y-4">
		<bo-loading-spinner text="Loading..." text-position="top" />
		<bo-loading-spinner text="Loading..." text-position="bottom" />
		<bo-loading-spinner text="Loading..." text-position="before" />
		<bo-loading-spinner text="Loading..." text-position="after" />
	</div>
</template>
```

## Different Sizes with Text

```vue
<template>
	<div class="space-y-4">
		<bo-loading-spinner size="xs" text="Loading..." />
		<bo-loading-spinner size="sm" text="Loading..." />
		<bo-loading-spinner size="default" text="Loading..." />
		<bo-loading-spinner size="lg" text="Loading..." />
		<bo-loading-spinner size="xl" text="Loading..." />
	</div>
</template>
```

## Custom Colors

Use the `current` variant to inherit text color:

```vue
<template>
	<div class="space-y-4">
		<div class="text-blue-600">
			<bo-loading-spinner variant="current" text="Loading..." />
		</div>
		<div class="text-green-600">
			<bo-loading-spinner variant="current" text="Success..." />
		</div>
		<div class="text-red-600">
			<bo-loading-spinner variant="current" text="Error..." />
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
			<bo-loading-spinner variant="white" size="sm" text="Saving..." text-position="after" />
		</button>

		<button class="px-4 py-2 border border-gray-300 rounded" disabled>
			<bo-loading-spinner variant="primary" size="sm" text="Loading..." text-position="after" />
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
			<bo-loading-spinner
				size="lg"
				text="Loading content..."
				text-position="bottom"
				variant="primary"
			/>
		</div>
	</div>
</template>
```

## Overlay Loading

Create full-screen or container overlays:

```vue
<template>
	<div class="relative">
		<!-- Your content -->
		<div class="p-8">
			<h2>Content Area</h2>
			<p>This content is behind the loading overlay.</p>
		</div>

		<!-- Loading overlay -->
		<div v-if="isLoading" class="absolute inset-0 bg-white/80 flex items-center justify-center">
			<bo-loading-spinner size="lg" text="Loading..." text-position="bottom" variant="primary" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const isLoading = ref(true);
</script>
```

## Conditional Loading

```vue
<template>
	<div>
		<bo-loading-spinner v-if="isLoading" text="Loading data..." variant="primary" />
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
| `size`         | `BoLoaderSize`         | `'default'` | Size of the spinner                           |
| `variant`      | `BoLoaderVariant`      | `'primary'` | Color variant of the spinner                  |
| `text`         | `string`               | -           | Text to display with the loader               |
| `textPosition` | `BoLoaderTextPosition` | `'after'`   | Position of the text relative to spinner      |
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
- Respects user's motion preferences (prefers-reduced-motion)
- Provides meaningful text descriptions when needed
- Screen readers announce loading state changes
