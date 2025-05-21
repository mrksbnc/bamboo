<script setup>
import BoLoadingDots from '@/components/loading-dots/bo-loading-dots.vue';
import { BoSize } from '@/shared/bo-size';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# Loading Dots

Loading Dots is a component that displays a loading animation with three pulsing dots.

```js
import { BoLoadingDots } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-loading-dots />

```vue
<template>
	<bo-loading-dots />
</template>
```

## Props

| Name           | Type                   | Default     | Description                               |
| -------------- | ---------------------- | ----------- | ----------------------------------------- |
| `id`           | `string`               | `auto`      | Unique id for the loading pulse           |
| `size`         | `BoSize`               | `default`   | Size of the loading pulse                 |
| `variant`      | `BoLoaderVariant`      | `primary`   | Color variant of the loading pulse        |
| `customColor`  | `string`               | `undefined` | Custom color for the loading pulse        |
| `loaderText`   | `string`               | `undefined` | Optional loader text to display           |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the text of the loading pulse |
| `dotCount`     | `number`               | `3`         | The number of dots to display             |

## Types

```ts
enum BoLoadingDotsSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

enum BoLoadingDotsVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	info = 'info',
	light = 'light',
	dark = 'dark',
}

interface BoLoadingDotsProps {
	/** Unique id for the loading pulse */
	id?: string;
	/** The size of the loading pulse */
	size?: BoSize;
	/** The variant of the loading pulse */
	variant?: BoLoaderVariant;
	/** The custom color of the loading pulse */
	customColor?: string;
	/** Optional loader text to display */
	loaderText?: string;
	/** Position of the text of the loading pulse */
	textPosition?: BoLoaderTextPosition;
	/** The number of dots to display */
	dotCount?: number;
}
```

## Sizes

<div class="flex flex-col gap-4 my-4">
	<span class="text-sm text-gray-600">Extra Small</span>
	<bo-loading-dots :size="BoSize.extra_small" class="mb-2" />
	<span class="text-sm text-gray-600">Small</span>
	<bo-loading-dots :size="BoSize.small" class="mb-2" />
	<span class="text-sm text-gray-600">Default</span>
	<bo-loading-dots :size="BoSize.default" class="mb-2" />
	<span class="text-sm text-gray-600">Large</span>
	<bo-loading-dots :size="BoSize.large" />
	<span class="text-sm text-gray-600">Extra Large</span>
	<bo-loading-dots :size="BoSize.extra_large" />
</div>

## Variants

<div class="flex flex-col gap-4 my-4">
	<span class="text-sm text-gray-600">Primary</span>
	<bo-loading-dots :variant="BoLoaderVariant.primary" class="mb-2" />
	<span class="text-sm text-gray-600">Secondary</span>
	<bo-loading-dots :variant="BoLoaderVariant.secondary" class="mb-2" />
	<span class="text-sm text-gray-600">Success</span>
	<bo-loading-dots :variant="BoLoaderVariant.success" class="mb-2" />
	<span class="text-sm text-gray-600">Danger</span>
	<bo-loading-dots :variant="BoLoaderVariant.danger" class="mb-2" />
	<span class="text-sm text-gray-600">Warning</span>
	<bo-loading-dots :variant="BoLoaderVariant.warning" class="mb-2" />
	<span class="text-sm text-gray-600">White</span>
	<span class="bg-black p-2"> 
		<bo-loading-dots :variant="BoLoaderVariant.white" />
	</span>
	<span class="text-sm text-gray-600">Dark</span>
	<bo-loading-dots :variant="BoLoaderVariant.dark" />
</div>

## Bottom Text (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-loading-dots 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.bottom" 
  />
</div>

```vue
<bo-loading-dots loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
```

## Side Text

<div class="flex flex-col gap-4 my-4">
  <bo-loading-dots 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```vue
<bo-loading-dots loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
```

## Custom text content

<div class="flex flex-col gap-4 my-4">
	<span class="text-sm text-gray-600">Custom text</span>
	<bo-loading-dots>
		<template #default>
			<span class="text-sm text-blue-600 font-semibold mt-2">Loading...</span>
		</template>
	</bo-loading-dots>
</div>
