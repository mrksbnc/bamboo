<script setup>
import BoProgressBar from '@/components/progress-bar/bo-progress-bar.vue';
import { BoSize } from '@/shared/bo-size';
import { BoProgressBarVariant } from '@/components/progress-bar/bo-progress-bar';
import { ref } from 'vue';

// For examples with animated progress
const progress = ref(45);
const isLoading = ref(false);

function startLoading() {
  isLoading.value = true;
  progress.value = 0;
  const interval = setInterval(() => {
    progress.value += 10;
    if (progress.value >= 100) {
      clearInterval(interval);
      isLoading.value = false;
    }
  }, 500);
}
</script>

# Progress Bar

The Progress Bar component provides a visual indicator of task progression or loading status.

## Basic Usage

<div class="component-preview">
  <BoProgressBar :value="45" />
</div>

```vue
<BoProgressBar :value="45" />
```

## Props

| Prop          | Type                 | Default   | Description                            |
| ------------- | -------------------- | --------- | -------------------------------------- |
| value         | Number               | —         | Current value of the progress bar      |
| max           | Number               | 100       | Maximum value of the progress bar      |
| showLabel     | Boolean              | false     | Show label with percentage             |
| striped       | Boolean              | false     | Whether the progress bar is striped    |
| animated      | Boolean              | false     | Whether the progress bar is animated   |
| size          | BoSize               | default   | Size of the progress bar               |
| variant       | BoProgressBarVariant | primary   | Color variant of the progress bar      |
| label         | String               | undefined | Label to display instead of percentage |
| indeterminate | Boolean              | false     | Whether to show indeterminate state    |

## Types

```typescript
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

interface BoProgressBarProps {
	value: number;
	max?: number;
	showLabel?: boolean;
	striped?: boolean;
	animated?: boolean;
	size?: BoSize;
	variant?: BoProgressBarVariant;
	label?: string;
	indeterminate?: boolean;
}
```

## Sizes

<div class="component-preview">
  <BoProgressBar :value="45" :size="BoSize.extra_small" class="mb-3" />
  <BoProgressBar :value="55" :size="BoSize.small" class="mb-3" />
  <BoProgressBar :value="65" :size="BoSize.default" class="mb-3" />
  <BoProgressBar :value="75" :size="BoSize.large" class="mb-3" />
  <BoProgressBar :value="85" :size="BoSize.extra_large" />
</div>

```vue
<BoProgressBar :value="45" :size="BoSize.extra_small" />
<BoProgressBar :value="55" :size="BoSize.small" />
<BoProgressBar :value="65" :size="BoSize.default" />
<BoProgressBar :value="75" :size="BoSize.large" />
<BoProgressBar :value="85" :size="BoSize.extra_large" />
```

## Variants

<div class="component-preview">
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.primary" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.secondary" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.success" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.danger" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.warning" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.info" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.light" class="mb-3" />
  <BoProgressBar :value="45" :variant="BoProgressBarVariant.dark" />
</div>

```vue
<BoProgressBar :value="45" :variant="BoProgressBarVariant.primary" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.secondary" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.success" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.danger" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.warning" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.info" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.light" />
<BoProgressBar :value="45" :variant="BoProgressBarVariant.dark" />
```

## With Label

<div class="component-preview">
  <BoProgressBar :value="45" :showLabel="true" class="mb-3" />
  <BoProgressBar :value="65" :showLabel="true" label="Uploading..." />
</div>

```vue
<BoProgressBar :value="45" :showLabel="true" />
<BoProgressBar :value="65" :showLabel="true" label="Uploading..." />
```

## Striped and Animated

<div class="component-preview">
  <BoProgressBar :value="45" :striped="true" class="mb-3" />
  <BoProgressBar :value="65" :striped="true" :animated="true" />
</div>

```vue
<BoProgressBar :value="45" :striped="true" />
<BoProgressBar :value="65" :striped="true" :animated="true" />
```

## Indeterminate

<div class="component-preview">
  <BoProgressBar :value="45" :indeterminate="true" />
</div>

```vue
<BoProgressBar :value="45" :indeterminate="true" />
```

## Example: File Upload Progress

<div class="component-preview">
  <div class="mb-2">Upload Progress: {{ progress }}%</div>
  <BoProgressBar 
    :value="progress" 
    :variant="BoProgressBarVariant.primary" 
    :striped="true" 
    :animated="isLoading" 
    class="mb-3" 
  />
  <button 
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
    @click="startLoading"
    :disabled="isLoading"
  >
    {{ isLoading ? 'Uploading...' : 'Start Upload' }}
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
		progress.value += 10;
		if (progress.value >= 100) {
			clearInterval(interval);
			isLoading.value = false;
		}
	}, 500);
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
