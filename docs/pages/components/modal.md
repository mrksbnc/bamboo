<script setup>
import BoModal from '@/components/bo-modal/bo-modal.vue';
import { BoModalSize } from '@/components/bo-modal';
import { BoButton } from '@/components/bo-button/bo-button';
import { ref } from 'vue';

const isModalOpen = ref(false);
</script>

# Modal

A customizable modal dialog component for displaying content that requires user interaction.

```js
import { BoModal } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<BoModal title="Example Modal">
		<p>This is the content of the modal.</p>
	</BoModal>
</template>

<script setup>
import { BoModal } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <BoModal title="Example Modal">
    <p>This is the content of the modal.</p>
  </BoModal>
</div>

## Props

| Name                   | Type          | Default   | Description                           |
| ---------------------- | ------------- | --------- | ------------------------------------- |
| `id`                   | `string`      | `auto`    | Unique ID for the modal               |
| `title`                | `string`      | `'Modal'` | Title displayed in the modal header   |
| `size`                 | `BoModalSize` | `md`      | Size of the modal dialog              |
| `closeOnBackdropClick` | `boolean`     | `true`    | Close modal when clicking backdrop    |
| `isOpen`               | `boolean`     | `false`   | Controls whether the modal is visible |

## Events

| Name    | Payload | Description                  |
| ------- | ------- | ---------------------------- |
| `open`  | -       | Emitted when modal is opened |
| `close` | -       | Emitted when modal is closed |

## Slots

| Name      | Description                          |
| --------- | ------------------------------------ |
| `default` | Main content of the modal            |
| `trigger` | Custom trigger element for the modal |
| `header`  | Custom header content                |
| `footer`  | Custom footer content with actions   |

## Types

```ts
export type BoModalProps = {
	id: string;
	title?: string;
	size?: BoModalSize;
	closeOnBackdropClick?: boolean;
	isOpen?: boolean;
};

export enum BoModalSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}
```

## Sizes

<div class="flex flex-wrap gap-4 my-4">
  <BoModal
    :size="BoModalSize.xs"
    title="Extra Small Modal"
  >
    <p>This is an extra small modal dialog.</p>
  </BoModal>
  
  <BoModal
    :size="BoModalSize.sm"
    title="Small Modal"
  >
    <p>This is a small modal dialog.</p>
  </BoModal>
  
  <BoModal
    :size="BoModalSize.md"
    title="Medium Modal"
  >
    <p>This is a medium modal dialog (default).</p>
  </BoModal>
  
  <BoModal
    :size="BoModalSize.lg"
    title="Large Modal"
  >
    <p>This is a large modal dialog.</p>
  </BoModal>
  
  <BoModal
    :size="BoModalSize.xl"
    title="Extra Large Modal"
  >
    <p>This is an extra large modal dialog.</p>
  </BoModal>
</div>

```vue
<BoModal :size="BoModalSize.xs" title="Extra Small Modal">
  <p>This is an extra small modal dialog.</p>
</BoModal>

<BoModal :size="BoModalSize.sm" title="Small Modal">
  <p>This is a small modal dialog.</p>
</BoModal>

<BoModal :size="BoModalSize.md" title="Medium Modal">
  <p>This is a medium modal dialog (default).</p>
</BoModal>

<BoModal :size="BoModalSize.lg" title="Large Modal">
  <p>This is a large modal dialog.</p>
</BoModal>

<BoModal :size="BoModalSize.xl" title="Extra Large Modal">
  <p>This is an extra large modal dialog.</p>
</BoModal>
```

## Custom Trigger

<div class="flex gap-4 items-center my-4">
  <BoModal title="Custom Trigger Modal">
    <template #trigger>
      <BoButton label="Open Custom Modal" />
    </template>
    <p>This modal has a custom trigger button.</p>
  </BoModal>
</div>

```vue
<BoModal title="Custom Trigger Modal">
  <template #trigger>
    <BoButton label="Open Custom Modal" />
  </template>
  <p>This modal has a custom trigger button.</p>
</BoModal>
```

## Custom Header and Footer

<div class="flex gap-4 items-center my-4">
  <BoModal>
    <template #header>
      <div class="flex items-center">
        <span class="text-xl font-bold text-blue-600">Custom Header</span>
      </div>
    </template>
    
    <p>This modal has a custom header and footer.</p>
    
    <template #footer>
      <div class="flex justify-end gap-2">
        <BoButton label="Custom Button" />
        <BoButton label="Save" variant="primary" />
      </div>
    </template>
  </BoModal>
</div>

```vue
<BoModal>
  <template #header>
    <div class="flex items-center">
      <span class="text-xl font-bold text-blue-600">Custom Header</span>
    </div>
  </template>
  
  <p>This modal has a custom header and footer.</p>
  
  <template #footer>
    <div class="flex justify-end gap-2">
      <BoButton label="Custom Button" />
      <BoButton label="Save" variant="primary" />
    </div>
  </template>
</BoModal>
```

## Programmatic Control

<div class="flex flex-col gap-4 my-4">
  <div class="flex gap-4 items-center">
    <BoButton 
      label="Open Controlled Modal" 
      @click="isModalOpen = true" 
    />
    
    <BoModal 
      title="Controlled Modal"
      :is-open="isModalOpen"
      @close="isModalOpen = false"
    >
      <p>This modal is controlled programmatically.</p>
      <p>Current state: {{ isModalOpen ? 'Open' : 'Closed' }}</p>
    </BoModal>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue';
import { BoModal, BoButton } from '@mrksbnc/bamboo';

const isModalOpen = ref(false);
</script>

<template>
	<BoButton
		label="Open Controlled Modal"
		@click="isModalOpen = true"
	/>

	<BoModal
		title="Controlled Modal"
		:is-open="isModalOpen"
		@close="isModalOpen = false"
	>
		<p>This modal is controlled programmatically.</p>
		<p>Current state: {{ isModalOpen ? 'Open' : 'Closed' }}</p>
	</BoModal>
</template>
```

## Usage Examples

### Confirmation Dialog

```vue
<template>
	<BoModal title="Confirm Deletion">
		<template #trigger>
			<BoButton
				label="Delete Item"
				variant="danger"
			/>
		</template>

		<p class="mb-4">Are you sure you want to delete this item? This action cannot be undone.</p>

		<template #footer>
			<div class="flex justify-end gap-2">
				<BoButton
					label="Cancel"
					data-dialog-close="true"
				/>
				<BoButton
					label="Delete"
					variant="danger"
					data-dialog-close="true"
					@click="handleDelete"
				/>
			</div>
		</template>
	</BoModal>
</template>

<script setup>
import { BoModal, BoButton } from '@mrksbnc/bamboo';

function handleDelete() {
	// Handle deletion logic
	console.log('Item deleted');
}
</script>
```

### Form Modal

```vue
<template>
	<BoModal
		title="Create New Item"
		:size="BoModalSize.lg"
	>
		<template #trigger>
			<BoButton
				label="Add New Item"
				variant="primary"
			/>
		</template>

		<form
			@submit.prevent="handleSubmit"
			class="space-y-4"
		>
			<div>
				<label class="mb-1 block text-sm font-medium">Name</label>
				<input
					v-model="form.name"
					type="text"
					class="w-full rounded-md border px-3 py-2"
					required
				/>
			</div>

			<div>
				<label class="mb-1 block text-sm font-medium">Description</label>
				<textarea
					v-model="form.description"
					class="w-full rounded-md border px-3 py-2"
					rows="3"
				></textarea>
			</div>

			<div>
				<label class="mb-1 block text-sm font-medium">Category</label>
				<select
					v-model="form.category"
					class="w-full rounded-md border px-3 py-2"
				>
					<option value="general">General</option>
					<option value="work">Work</option>
					<option value="personal">Personal</option>
				</select>
			</div>
		</form>

		<template #footer>
			<div class="flex justify-end gap-2">
				<BoButton
					label="Cancel"
					data-dialog-close="true"
				/>
				<BoButton
					label="Create"
					variant="primary"
					type="submit"
					@click="handleSubmit"
				/>
			</div>
		</template>
	</BoModal>
</template>

<script setup>
import { ref } from 'vue';
import { BoModal, BoButton, BoModalSize } from '@mrksbnc/bamboo';

const form = ref({
	name: '',
	description: '',
	category: 'general',
});

function handleSubmit() {
	// Form submission logic
	console.log('Form submitted:', form.value);

	// Here you would typically validate and submit the form data

	// Close the modal by triggering the dialog close attribute
	// This requires a direct DOM manipulation or a ref to access the button
	// In a real application, you might want to use a more robust approach
}
</script>
```

### Image Preview

```vue
<template>
	<div class="grid grid-cols-3 gap-4">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="relative aspect-square overflow-hidden rounded-lg"
		>
			<img
				:src="image.thumbnail"
				:alt="image.alt"
				class="h-full w-full cursor-pointer object-cover"
				@click="openImageModal(index)"
			/>
		</div>
	</div>

	<BoModal
		:title="selectedImage ? images[selectedImage].alt : ''"
		:size="BoModalSize.lg"
		:is-open="!!selectedImage"
		@close="selectedImage = null"
	>
		<div class="flex justify-center">
			<img
				v-if="selectedImage !== null"
				:src="images[selectedImage].fullsize"
				:alt="images[selectedImage].alt"
				class="max-h-[70vh] max-w-full object-contain"
			/>
		</div>

		<template #footer>
			<div class="flex w-full justify-between">
				<BoButton
					label="Previous"
					:disabled="selectedImage === 0"
					@click="previousImage"
				/>
				<BoButton
					label="Close"
					data-dialog-close="true"
				/>
				<BoButton
					label="Next"
					:disabled="selectedImage === images.length - 1"
					@click="nextImage"
				/>
			</div>
		</template>
	</BoModal>
</template>

<script setup>
import { ref } from 'vue';
import { BoModal, BoButton, BoModalSize } from '@mrksbnc/bamboo';

const images = [
	{
		thumbnail: '/images/thumbnail1.jpg',
		fullsize: '/images/fullsize1.jpg',
		alt: 'Image 1',
	},
	{
		thumbnail: '/images/thumbnail2.jpg',
		fullsize: '/images/fullsize2.jpg',
		alt: 'Image 2',
	},
	{
		thumbnail: '/images/thumbnail3.jpg',
		fullsize: '/images/fullsize3.jpg',
		alt: 'Image 3',
	},
];

const selectedImage = ref(null);

function openImageModal(index) {
	selectedImage.value = index;
}

function previousImage() {
	if (selectedImage.value > 0) {
		selectedImage.value--;
	}
}

function nextImage() {
	if (selectedImage.value < images.length - 1) {
		selectedImage.value++;
	}
}
</script>
```
