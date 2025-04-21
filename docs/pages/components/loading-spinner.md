<script setup>
import { BoLoadingSpinner } from '@/components/bo-loading-spinner';
import { BoSize } from '@/shared';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# Loading Spinner

A customizable spinner component for indicating loading or processing states.

```js
import { BoLoadingSpinner } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-loading-spinner />
</template>

<script setup>
import { BoLoadingSpinner } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-loading-spinner />
</div>

## Props

| Name           | Type                   | Default     | Description                           |
| -------------- | ---------------------- | ----------- | ------------------------------------- |
| `size`         | `BoSize`               | `default`   | Size of the spinner                   |
| `variant`      | `BoLoaderVariant`      | `primary`   | Color variant of the spinner          |
| `customColor`  | `string`               | `undefined` | Custom color for the spinner          |
| `loaderText`   | `string`               | `undefined` | Optional text to display with spinner |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the text                  |

## Slots

| Name      | Description         |
| --------- | ------------------- |
| `default` | Custom text content |

## Types

```ts
export enum BoLoaderVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
	white = 'white',
}

export enum BoLoaderTextPosition {
	side = 'side',
	bottom = 'bottom',
}

export interface BoLoadingSpinnerProps {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
}
```

## Sizes

<div class="flex items-center gap-4 my-4">
  <bo-loading-spinner :size="BoSize.extra_small" />
  <bo-loading-spinner :size="BoSize.small" />
  <bo-loading-spinner :size="BoSize.default" />
  <bo-loading-spinner :size="BoSize.large" />
  <bo-loading-spinner :size="BoSize.extra_large" />
</div>

```vue
<bo-loading-spinner :size="BoSize.extra_small" />
<bo-loading-spinner :size="BoSize.small" />
<bo-loading-spinner :size="BoSize.default" />
<bo-loading-spinner :size="BoSize.large" />
<bo-loading-spinner :size="BoSize.extra_large" />
```

## Variants

<div class="flex items-center gap-4 my-4">
  <bo-loading-spinner :variant="BoLoaderVariant.primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" />
  <div class="bg-gray-800 p-2 rounded">
    <bo-loading-spinner :variant="BoLoaderVariant.white" />
  </div>
</div>

```vue
<bo-loading-spinner :variant="BoLoaderVariant.primary" />
<bo-loading-spinner :variant="BoLoaderVariant.secondary" />
<bo-loading-spinner :variant="BoLoaderVariant.success" />
<bo-loading-spinner :variant="BoLoaderVariant.danger" />
<bo-loading-spinner :variant="BoLoaderVariant.warning" />
<bo-loading-spinner :variant="BoLoaderVariant.dark" />
<bo-loading-spinner :variant="BoLoaderVariant.white" />
```

## Custom Color

<div class="flex items-center gap-4 my-4">
  <bo-loading-spinner custom-color="#8B5CF6" />
  <bo-loading-spinner custom-color="#F472B6" />
  <bo-loading-spinner custom-color="#F59E0B" />
</div>

```vue
<bo-loading-spinner custom-color="#8B5CF6" />
<bo-loading-spinner custom-color="#F472B6" />
<bo-loading-spinner custom-color="#F59E0B" />
```

## With Text

### Bottom Text (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.bottom" 
  />
</div>

```vue
<bo-loading-spinner loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
```

### Side Text

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```vue
<bo-loading-spinner loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
```

## Custom Text Content

<div class="flex flex-col gap-4 my-4">
  <bo-loading-spinner :text-position="BoLoaderTextPosition.side">
    <span class="text-xs font-medium text-blue-600">Please wait...</span>
  </bo-loading-spinner>
</div>

```vue
<bo-loading-spinner :text-position="BoLoaderTextPosition.side">
  <span class="text-xs font-medium text-blue-600">Please wait...</span>
</bo-loading-spinner>
```

## Usage Examples

### Button with Loading State

```vue
<template>
	<bo-button
		:is-loading="isLoading"
		:loader-type="'spinner'"
		label="Save Changes"
		@click="startLoading"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoButton } from '@mrksbnc/bamboo';

const isLoading = ref(false);

function startLoading() {
	isLoading.value = true;
	setTimeout(() => {
		isLoading.value = false;
	}, 2000);
}
</script>
```

### Loading Overlay

```vue
<template>
	<div class="relative">
		<div class="min-h-[200px] rounded border p-4">
			<h3 class="text-lg font-semibold">Content Panel</h3>
			<p>This content will be overlaid when loading.</p>
		</div>

		<div
			v-if="isLoading"
			class="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80"
		>
			<bo-loading-spinner
				:size="BoSize.large"
				loader-text="Loading content..."
			/>
		</div>
	</div>

	<bo-button
		class="mt-4"
		label="Toggle Loading"
		@click="isLoading = !isLoading"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoLoadingSpinner, BoButton } from '@mrksbnc/bamboo';
import { BoSize } from '@mrksbnc/bamboo';

const isLoading = ref(false);
</script>
```

### Async Data Loading

```vue
<template>
	<div class="space-y-4">
		<div
			v-if="isLoading"
			class="flex justify-center py-8"
		>
			<bo-loading-spinner
				:variant="BoLoaderVariant.primary"
				loader-text="Fetching data..."
			/>
		</div>

		<div
			v-else-if="error"
			class="rounded bg-red-50 p-4 text-red-600 dark:bg-red-900/20 dark:text-red-400"
		>
			{{ error }}
		</div>

		<div
			v-else-if="data.length"
			class="space-y-2"
		>
			<div
				v-for="(item, index) in data"
				:key="index"
				class="rounded border p-3"
			>
				{{ item.name }}
			</div>
		</div>

		<bo-button
			label="Fetch Data"
			@click="fetchData"
			:disabled="isLoading"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoLoadingSpinner, BoButton } from '@mrksbnc/bamboo';
import { BoLoaderVariant } from '@mrksbnc/bamboo';

const isLoading = ref(false);
const error = ref('');
const data = ref([]);

async function fetchData() {
	isLoading.value = true;
	error.value = '';
	data.value = [];

	try {
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Mock data
		data.value = [
			{ id: 1, name: 'Item 1' },
			{ id: 2, name: 'Item 2' },
			{ id: 3, name: 'Item 3' },
		];
	} catch (err) {
		error.value = 'Failed to fetch data. Please try again.';
	} finally {
		isLoading.value = false;
	}
}
</script>
```
