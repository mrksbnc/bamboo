<script setup>
import BoLoadingDots from '@/components/loading-dots/bo-loading-dots.vue';
import { BoSize } from '@/shared/bo-size';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# Loading Dots

A loading indicator component that displays three bouncing dots with customizable appearance and text options. Supports dark mode and various styling options.

```js
import { BoLoadingDots } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-loading-dots />
</template>

<script setup>
import { BoLoadingDots } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-loading-dots />
</div>

## Props

| Name           | Type                   | Default     | Description                                      |
| -------------- | ---------------------- | ----------- | ------------------------------------------------ |
| `id`           | `string`               | `auto`      | Unique identifier for the loading dots component |
| `size`         | `BoSize`               | `default`   | Size of the loading dots                         |
| `variant`      | `BoLoaderVariant`      | `primary`   | Color variant of the loading dots                |
| `customColor`  | `string`               | `undefined` | Custom color for the dots (RGB format)           |
| `loaderText`   | `string`               | `undefined` | Optional text to display with the loader         |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the loader text ('bottom' or 'side') |

## Events

None

## Slots

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `default` | Custom content to display instead of the default loader text |

## Types

```ts
interface BoLoadingDotsProps {
	/**
	 * Unique identifier for the loading dots component
	 * @default auto-generated
	 */
	id?: string;
	/**
	 * Size of the loading dots
	 * @default BoSize.default
	 */
	size?: BoSize;
	/**
	 * Color variant of the loading dots
	 * @default BoLoaderVariant.primary
	 */
	variant?: BoLoaderVariant;
	/**
	 * Custom color for the dots (RGB format)
	 */
	customColor?: string;
	/**
	 * Optional text to display with the loader
	 */
	loaderText?: string;
	/**
	 * Position of the loader text
	 * @default BoLoaderTextPosition.bottom
	 */
	textPosition?: BoLoaderTextPosition;
}

enum BoSize {
	extra_small = 'extra_small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra_large',
}

enum BoLoaderVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	white = 'white',
	dark = 'dark',
}

enum BoLoaderTextPosition {
	bottom = 'bottom',
	side = 'side',
}
```

## Variants

<div class="flex flex-col gap-6 my-4">
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Primary</div>
		<bo-loading-dots :variant="BoLoaderVariant.primary" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Secondary</div>
		<bo-loading-dots :variant="BoLoaderVariant.secondary" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Success</div>
		<bo-loading-dots :variant="BoLoaderVariant.success" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Danger</div>
		<bo-loading-dots :variant="BoLoaderVariant.danger" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Warning</div>
		<bo-loading-dots :variant="BoLoaderVariant.warning" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">White</div>
		<div class="bg-black p-2 rounded">
			<bo-loading-dots :variant="BoLoaderVariant.white" />
		</div>
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Dark</div>
		<bo-loading-dots :variant="BoLoaderVariant.dark" />
	</div>
</div>

```vue
<bo-loading-dots :variant="BoLoaderVariant.primary" />
<bo-loading-dots :variant="BoLoaderVariant.secondary" />
<bo-loading-dots :variant="BoLoaderVariant.success" />
<bo-loading-dots :variant="BoLoaderVariant.danger" />
<bo-loading-dots :variant="BoLoaderVariant.warning" />
<bo-loading-dots :variant="BoLoaderVariant.white" />
<bo-loading-dots :variant="BoLoaderVariant.dark" />
```

## Sizes

<div class="flex flex-col gap-6 my-4">
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Extra Small</div>
		<bo-loading-dots :size="BoSize.extra_small" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Small</div>
		<bo-loading-dots :size="BoSize.small" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Default</div>
		<bo-loading-dots :size="BoSize.default" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Large</div>
		<bo-loading-dots :size="BoSize.large" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Extra Large</div>
		<bo-loading-dots :size="BoSize.extra_large" />
	</div>
</div>

```vue
<bo-loading-dots :size="BoSize.extra_small" />
<bo-loading-dots :size="BoSize.small" />
<bo-loading-dots :size="BoSize.default" />
<bo-loading-dots :size="BoSize.large" />
<bo-loading-dots :size="BoSize.extra_large" />
```

## Text Position

<div class="flex flex-col gap-6 my-4">
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Bottom</div>
		<bo-loading-dots loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Side</div>
		<bo-loading-dots loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
	</div>
</div>

```vue
<bo-loading-dots loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
<bo-loading-dots loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
```

## Custom Content

<div class="flex flex-col gap-6 my-4">
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-600">Custom</div>
		<bo-loading-dots>
			<template #default>
				<span class="text-sm font-semibold text-blue-600">Custom Loading Message...</span>
			</template>
		</bo-loading-dots>
	</div>
</div>

```vue
<bo-loading-dots>
	<template #default>
		<span class="text-sm font-semibold text-blue-600">Custom Loading Message...</span>
	</template>
</bo-loading-dots>
```

## Dark Mode

<div class="flex flex-col gap-6 my-4 dark p-4 bg-gray-900 rounded">
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-400">Primary</div>
		<bo-loading-dots :variant="BoLoaderVariant.primary" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-400">Secondary</div>
		<bo-loading-dots :variant="BoLoaderVariant.secondary" />
	</div>
	<div class="flex items-center gap-4">
		<div class="w-24 text-sm text-gray-400">White</div>
		<bo-loading-dots :variant="BoLoaderVariant.white" />
	</div>
</div>

```vue
<div class="dark">
	<bo-loading-dots :variant="BoLoaderVariant.primary" />
	<bo-loading-dots :variant="BoLoaderVariant.secondary" />
	<bo-loading-dots :variant="BoLoaderVariant.white" />
</div>
```

## Animation

The loading dots feature a bouncing animation with staggered delays using Tailwind CSS classes:

```vue
<template>
	<!-- Dots with staggered animation delays -->
	<div class="animate-bounce [animation-delay:-0.3s]"></div>
	<div class="animate-bounce [animation-delay:-0.15s]"></div>
	<div class="animate-bounce [animation-delay:0s]"></div>
</template>
```
