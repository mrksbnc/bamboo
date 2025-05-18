<script setup>
import BoLoadingPulse from '@/components/bo-loading-pulse/bo-loading-pulse.vue';
import { BoSize } from '@/shared/bo-size';
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader';
</script>

# Loading Pulse

A pulsating loader component for indicating loading or processing states with a different animation style.

```js
import { BoLoadingPulse } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-loading-pulse />
</template>

<script setup>
import { BoLoadingPulse } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-loading-pulse />
</div>

## Props

| Name           | Type                   | Default     | Description                         |
| -------------- | ---------------------- | ----------- | ----------------------------------- |
| `size`         | `BoSize`               | `default`   | Size of the pulse                   |
| `variant`      | `BoLoaderVariant`      | `primary`   | Color variant of the pulse          |
| `customColor`  | `string`               | `undefined` | Custom color for the pulse          |
| `loaderText`   | `string`               | `undefined` | Optional text to display with pulse |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the text                |

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

export interface BoLoadingPulseProps {
	size?: BoSize;
	variant?: BoLoaderVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
}
```

## Sizes

<div class="flex items-center gap-6 my-4">
  <bo-loading-pulse :size="BoSize.extra_small" />
  <bo-loading-pulse :size="BoSize.small" />
  <bo-loading-pulse :size="BoSize.default" />
  <bo-loading-pulse :size="BoSize.large" />
  <bo-loading-pulse :size="BoSize.extra_large" />
</div>

```vue
<bo-loading-pulse :size="BoSize.extra_small" />
<bo-loading-pulse :size="BoSize.small" />
<bo-loading-pulse :size="BoSize.default" />
<bo-loading-pulse :size="BoSize.large" />
<bo-loading-pulse :size="BoSize.extra_large" />
```

## Variants

<div class="flex items-center gap-6 my-4">
  <bo-loading-pulse :variant="BoLoaderVariant.primary" />
  <bo-loading-pulse :variant="BoLoaderVariant.secondary" />
  <bo-loading-pulse :variant="BoLoaderVariant.success" />
  <bo-loading-pulse :variant="BoLoaderVariant.danger" />
  <bo-loading-pulse :variant="BoLoaderVariant.warning" />
  <bo-loading-pulse :variant="BoLoaderVariant.dark" />
  <div class="bg-gray-800 p-2 rounded">
    <bo-loading-pulse :variant="BoLoaderVariant.white" />
  </div>
</div>

```vue
<bo-loading-pulse :variant="BoLoaderVariant.primary" />
<bo-loading-pulse :variant="BoLoaderVariant.secondary" />
<bo-loading-pulse :variant="BoLoaderVariant.success" />
<bo-loading-pulse :variant="BoLoaderVariant.danger" />
<bo-loading-pulse :variant="BoLoaderVariant.warning" />
<bo-loading-pulse :variant="BoLoaderVariant.dark" />
<bo-loading-pulse :variant="BoLoaderVariant.white" />
```

## Custom Color

<div class="flex items-center gap-6 my-4">
  <bo-loading-pulse custom-color="#8B5CF6" />
  <bo-loading-pulse custom-color="#F472B6" />
  <bo-loading-pulse custom-color="#F59E0B" />
</div>

```vue
<bo-loading-pulse custom-color="#8B5CF6" />
<bo-loading-pulse custom-color="#F472B6" />
<bo-loading-pulse custom-color="#F59E0B" />
```

## With Text

### Bottom Text (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-loading-pulse 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.bottom" 
  />
</div>

```vue
<bo-loading-pulse loader-text="Loading..." :text-position="BoLoaderTextPosition.bottom" />
```

### Side Text

<div class="flex flex-col gap-4 my-4">
  <bo-loading-pulse 
    loader-text="Loading..." 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>

```vue
<bo-loading-pulse loader-text="Loading..." :text-position="BoLoaderTextPosition.side" />
```

## Custom Text Content

<div class="flex flex-col gap-4 my-4">
  <bo-loading-pulse :text-position="BoLoaderTextPosition.side">
    <span class="text-xs font-medium text-blue-600">Processing...</span>
  </bo-loading-pulse>
</div>

```vue
<bo-loading-pulse :text-position="BoLoaderTextPosition.side">
  <span class="text-xs font-medium text-blue-600">Processing...</span>
</bo-loading-pulse>
```

## Comparison with Loading Spinner

<div class="flex items-center gap-6 my-4 border p-4 rounded">
  <div class="flex flex-col items-center gap-2">
    <bo-loading-pulse 
      :size="BoSize.default"
      loader-text="Loading Pulse" 
    />
  </div>
  <div class="flex flex-col items-center gap-2">
    <bo-loading-spinner 
      :size="BoSize.default"
      loader-text="Loading Spinner" 
    />
  </div>
</div>

```vue
<div class="flex items-center gap-6">
  <bo-loading-pulse loader-text="Loading Pulse" />
  <bo-loading-spinner loader-text="Loading Spinner" />
</div>
```

## Usage Examples

### Button with Loading State

```vue
<template>
	<bo-button
		:is-loading="isLoading"
		:loader-type="'pulse'"
		label="Process Data"
		@click="startLoading"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoButton } from '@mrksbnc/bamboo';
import { BoLoaderType } from '@mrksbnc/bamboo';

const isLoading = ref(false);

function startLoading() {
	isLoading.value = true;
	setTimeout(() => {
		isLoading.value = false;
	}, 2000);
}
</script>
```

### Notification Badge

```vue
<template>
	<div class="relative">
		<button class="relative rounded-full bg-gray-100 p-2 hover:bg-gray-200">
			<bo-icon :icon="Icon.bell" />

			<div
				v-if="isNotifying"
				class="absolute -top-1 -right-1"
			>
				<bo-loading-pulse
					:size="BoSize.extra_small"
					:variant="BoLoaderVariant.danger"
				/>
			</div>
		</button>
	</div>

	<bo-button
		class="mt-4"
		label="Toggle Notification"
		@click="isNotifying = !isNotifying"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoLoadingPulse, BoButton, BoIcon } from '@mrksbnc/bamboo';
import { BoSize, BoLoaderVariant, Icon } from '@mrksbnc/bamboo';

const isNotifying = ref(false);
</script>
```

### Upload Progress

```vue
<template>
	<div class="space-y-4 rounded border p-4">
		<div class="flex items-center gap-3">
			<bo-icon
				:icon="Icon.file"
				:size="BoSize.large"
			/>
			<div class="flex-1">
				<bo-text
					value="document.pdf"
					:weight="BoFontWeight.medium"
				/>
				<div class="flex items-center gap-2">
					<bo-loading-pulse
						v-if="isUploading"
						:size="BoSize.extra_small"
						:variant="BoLoaderVariant.primary"
					/>
					<bo-text
						:value="isUploading ? 'Uploading...' : 'Ready to upload'"
						:size="BoFontSize.xs"
						:color="BoTextColor.secondary"
					/>
				</div>
			</div>

			<bo-button
				v-if="!isUploading"
				label="Upload"
				:size="BoSize.small"
				@click="startUpload"
			/>
			<bo-button
				v-else
				label="Cancel"
				:variant="BoButtonVariant.secondary"
				:size="BoSize.small"
				@click="cancelUpload"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoLoadingPulse, BoButton, BoIcon, BoText } from '@mrksbnc/bamboo';
import { BoSize, BoLoaderVariant, Icon } from '@mrksbnc/bamboo';
import { BoFontWeight, BoFontSize, BoTextColor } from '@mrksbnc/bamboo';
import { BoButtonVariant } from '@mrksbnc/bamboo';

const isUploading = ref(false);

function startUpload() {
	isUploading.value = true;
	// Simulate upload process
	setTimeout(() => {
		isUploading.value = false;
	}, 3000);
}

function cancelUpload() {
	isUploading.value = false;
}
</script>
```
