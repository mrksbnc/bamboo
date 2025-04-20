# BoModal

The BoModal component creates a dialog that appears above the main content to provide critical information or request user action.

## Basic Usage

```vue
<template>
	<bo-button
		@click="showModal = true"
		label="Open Modal"
	/>

	<bo-modal
		v-if="showModal"
		title="Example Modal"
		description="This is a basic modal example."
		@close="showModal = false"
	>
		<!-- Modal content goes here -->
	</bo-modal>
</template>

<script setup>
import { ref } from 'vue';
import { BoModal } from '@/components/bo-modal';
import { BoButton } from '@/components/bo-button';

const showModal = ref(false);
</script>
```

## Live Example

<script setup>
import { ref } from 'vue';
import { BoModal } from '@/components/bo-modal';
import { BoButton, BoButtonVariant } from '@/components/bo-button';
import { bo-text, BoFontSize, BoTextColor } from '@/components/bo-text';

const showModal = ref(false);
</script>

<div class="flex flex-col gap-4">
  <bo-button 
    label="Open Modal Example" 
    @click="showModal = true"
  />

<bo-modal
v-if="showModal"
title="Example Modal"
description="This is an example modal with header, content and footer sections."
@close="showModal = false"

>

    <p class="text-gray-600 dark:text-gray-400">
      Modals are used to display content that requires user attention or interaction.
    </p>

    <template #footer>
      <div class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4 dark:border-gray-700">
        <bo-button label="Accept" @click="showModal = false" />
        <bo-button label="Cancel" variant="secondary" @click="showModal = false" />
      </div>
    </template>

  </bo-modal>
</div>

## Width Options

Modals can have different widths specified using pixels, percentages, or Tailwind classes:

```vue
<!-- Fixed width in pixels -->
<bo-modal :width="{ px: 500 }">
  <!-- Modal content -->
</bo-modal>

<!-- Percentage width -->
<bo-modal :width="{ percent: 80 }">
  <!-- Modal content -->
</bo-modal>

<!-- Using Tailwind class -->
<bo-modal :width="{ tailwind: 'max-w-2xl' }">
  <!-- Modal content -->
</bo-modal>
```

## Custom Header

You can customize the modal header using the `header` slot:

```vue
<bo-modal @close="showModal = false">
  <template #header>
    <div class="flex items-center">
      <bo-icon :icon="Icon.alert_circle" />
      <h3 class="ml-2 text-xl font-semibold">Custom Header</h3>
    </div>
  </template>
  <!-- Modal content -->
</bo-modal>
```

## Custom Description

Use the `description` slot to customize the description area:

```vue
<bo-modal @close="showModal = false">
  <template #description>
    <div class="flex items-center text-amber-600">
      <bo-icon :icon="Icon.alert_triangle" />
      <p class="ml-2">This action cannot be undone!</p>
    </div>
  </template>
  <!-- Modal content -->
</bo-modal>
```

## Custom Footer

Add action buttons or other content to the modal footer:

```vue
<bo-modal @close="showModal = false">
  <!-- Modal content -->
  <template #footer>
    <div class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4">
      <bo-button label="Save" />
      <bo-button label="Cancel" variant="secondary" @click="closeModal" />
    </div>
  </template>
</bo-modal>
```

## Accessibility

The BoModal component implements several accessibility features:

- Focus is trapped within the modal when open
- ESC key closes the modal
- Screen readers are notified when the modal opens and closes
- Appropriate ARIA attributes for dialog role
- Focus is returned to the triggering element when the modal closes

## Component API

### Props

```ts
interface BoModalProps {
	id?: string;
	title?: string;
	description?: string;
	showClose?: boolean;
	width?: {
		px?: number;
		percent?: number;
		tailwind?: string;
	};
}
```

Example of defining props in your component:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { BoModal } from '@/components/bo-modal';
import { BoButton } from '@/components/bo-button';

const showModal = ref(false);

const modalProps = {
	id: 'confirm-modal',
	title: 'Confirm Action',
	description: 'Are you sure you want to proceed with this action?',
	showClose: true,
	width: {
		px: 500,
	},
};

const handleClose = () => {
	showModal.value = false;
};
</script>

<template>
	<bo-button
		@click="showModal = true"
		label="Open Modal"
	/>

	<bo-modal
		v-if="showModal"
		v-bind="modalProps"
		@close="handleClose"
	>
		<!-- Modal content -->
		<template #footer>
			<div class="flex justify-end border-t p-4">
				<bo-button
					label="Confirm"
					@click="handleClose"
				/>
			</div>
		</template>
	</bo-modal>
</template>
```

### Emits

```ts
const emit = defineEmits<{
	close: [];
}>();
```

### Slots

| Slot          | Description                                   |
| ------------- | --------------------------------------------- |
| `header`      | Custom header content (replaces title)        |
| `description` | Custom description content                    |
| `default`     | Main content area                             |
| `footer`      | Footer area for buttons or additional content |
