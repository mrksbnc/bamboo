<script setup>
import BoProgressBar from '@/components/progress-bar/bo-progress-bar.vue';
import { BoSize } from '@/shared/bo-size';
import { BoProgressBarVariant } from '@/components/progress-bar/bo-progress-bar';
import { ref } from 'vue';
import BoButton from '@/components/button/bo-button.vue';

// For examples with animated progress
const progress = ref(45);
const isLoading = ref(false);

function startLoading() {
  isLoading.value = true;
  progress.value = 0;
  const interval = setInterval(() => {
    progress.value += 1;
    if (progress.value >= 100) {
      clearInterval(interval);
      isLoading.value = false;
    }
  }, 100);
}
</script>

# Progress Bar

Progress Bar is a component that displays the progress of a task or operation.

```js
import { BoProgressBar } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-progress-bar :value="75" />

```vue
<template>
	<bo-progress-bar :value="75" />
</template>
```

## Props

| Name            | Type                   | Default     | Description                                     |
| --------------- | ---------------------- | ----------- | ----------------------------------------------- |
| `id`            | `string`               | `auto`      | Unique ID for the progress bar                  |
| `value`         | `number`               | `0`         | Current value of the progress bar               |
| `max`           | `number`               | `100`       | Maximum value of the progress bar               |
| `showLabel`     | `boolean`              | `true`      | Show label or percentage in the progress bar    |
| `shape`         | `BoProgressBarShape`   | `rounded`   | The shape of the progress bar                   |
| `size`          | `BoSize`               | `default`   | Size of the progress bar                        |
| `variant`       | `BoProgressBarVariant` | `primary`   | Color variant of the progress bar               |
| `label`         | `string`               | `undefined` | Label to display instead of percentage          |
| `color`         | `string`               | `undefined` | Custom color for the progress bar in hex format |
| `tailwindClass` | `string`               | `undefined` | Custom tailwind class for the progress bar      |
| `fontColor`     | `string`               | `undefined` | Custom font color for the progress bar          |

## Types

```ts
enum BoProgressBarVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	info = 'info',
	light = 'light',
	dark = 'dark',
}

enum BoProgressBarShape {
	rounded = 'rounded',
	square = 'square',
}

interface BoProgressBarProps {
	/** Id for the progress bar */
	id?: string;
	/** Current value of the progress bar */
	value?: number;
	/** Maximum value of the progress bar */
	max?: number;
	/** Show label or percentage in the progress bar */
	showLabel?: boolean;
	/** The shape of the progress bar */
	shape?: BoProgressBarShape;
	/** Size of the progress bar */
	size?: BoSize;
	/** Color variant of the progress bar */
	variant?: BoProgressBarVariant;
	/** Label to display instead of percentage */
	label?: string;
	/** Custom color for the progress bar in hex format */
	color?: string;
	/** Custom tailwind class for the progress bar */
	tailwindClass?: string;
	/** Custom font color for the progress bar */
	fontColor?: string;
}
```

## Variants

The progress bar supports different color variants:

<bo-progress-bar :value="75" variant="primary" class="mb-2" />
<bo-progress-bar :value="75" variant="secondary" class="mb-2" />
<bo-progress-bar :value="75" variant="success" class="mb-2" />
<bo-progress-bar :value="75" variant="danger" class="mb-2" />
<bo-progress-bar :value="75" variant="warning" class="mb-2" />
<bo-progress-bar :value="75" variant="info" class="mb-2" />
<bo-progress-bar :value="75" variant="light" class="mb-2" />
<bo-progress-bar :value="75" variant="dark" />

```vue
<template>
	<bo-progress-bar
		:value="75"
		variant="primary"
	/>
	<bo-progress-bar
		:value="75"
		variant="secondary"
	/>
	<bo-progress-bar
		:value="75"
		variant="success"
	/>
	<bo-progress-bar
		:value="75"
		variant="danger"
	/>
	<bo-progress-bar
		:value="75"
		variant="warning"
	/>
	<bo-progress-bar
		:value="75"
		variant="info"
	/>
	<bo-progress-bar
		:value="75"
		variant="light"
	/>
	<bo-progress-bar
		:value="75"
		variant="dark"
	/>
</template>
```

## Shapes

The progress bar supports different shapes:

<bo-progress-bar :value="75" shape="rounded" class="mb-2" />
<bo-progress-bar :value="75" shape="square" />

```vue
<template>
	<bo-progress-bar
		:value="75"
		shape="rounded"
	/>
	<bo-progress-bar
		:value="75"
		shape="square"
	/>
</template>
```

## Custom Label

You can provide a custom label instead of the percentage:

<bo-progress-bar :value="75" label="Loading..." />

```vue
<template>
	<bo-progress-bar
		:value="75"
		label="Loading..."
	/>
</template>
```

## Hide Label

You can hide the label completely:

<bo-progress-bar :value="75" :show-label="false" />

```vue
<template>
	<bo-progress-bar
		:value="75"
		:show-label="false"
	/>
</template>
```

## Custom Color

You can provide a custom color using hex format:

<div class="component-preview">
  <bo-progress-bar :value="75" color="#FF5733" class="mb-2" />
  <bo-progress-bar :value="75" tailwind-class="bg-teal-500" />
</div>

```vue
<template>
	<bo-progress-bar
		:value="75"
		color="#FF5733"
	/>
	<bo-progress-bar
		:value="75"
		tailwind-class="bg-teal-500"
	/>
</template>
```

## Example: File Upload Progress

<div class="component-preview">
  <div class="mb-2">Upload Progress: {{ progress }}%</div>
  <BoProgressBar 
    :value="progress" 
    :variant="BoProgressBarVariant.primary"
    class="mb-3" 
  />
  <button 
    class="px-3 py-2 bg-blue-600 text-white hover:bg-blue-600 rounded-lg" 
    @click="startLoading"
    :disabled="isLoading"
  >
    <span class="flex items-center gap-1 text-sm font-semibold">
		{{ isLoading ? 'Uploading...' : 'Start Upload' }}
	</span>
  </button>
</div>

```vue
<script setup>
import { ref } from 'vue';

const progress = ref(45);
const isLoading = ref(false);

function startLoading() {
	isLoading.value = true;
	progress.value = 0;
	const interval = setInterval(() => {
		progress.value += 1;
		if (progress.value >= 100) {
			clearInterval(interval);
			isLoading.value = false;
		}
	}, 100);
}
</script>

<template>
	<div class="mb-2">Upload Progress: {{ progress }}%</div>
	<BoProgressBar
		:value="progress"
		:variant="BoProgressBarVariant.primary"
		:striped="true"
		:animated="isLoading"
		class="mb-3"
	/>
	<button
		class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
		@click="startLoading"
		:disabled="isLoading"
	>
		{{ isLoading ? 'Uploading...' : 'Start Upload' }}
	</button>
</template>
```
