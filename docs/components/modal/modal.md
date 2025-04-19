<script setup>
import { BoModal } from '@/components/bo_modal';
import { ref } from 'vue';
import BasicModalExample from './examples/BasicModalExample.vue';

const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

# bo-modal

A modal component that displays content in a layer that sits on top of the page.

## Basic usage

The component to use is called `bo-modal`. Since the modal component doesn't manage its own visibility, you need to control it from the parent component.

```vue
<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<template>
  <button @click="showModal = true">Open Modal</button>

  <bo-modal
    v-if="showModal"
    @close="showModal = false"
    title="Important Information"
  >
    <p>This is the modal content.</p>

    <template #footer>
      <div
        class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4 dark:border-gray-700"
      >
        <button class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Accept</button>
        <button
          class="rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </template>
  </bo-modal>
</template>
```

## Props

| Prop          | Type                  | Default | Description                              |
| ------------- | --------------------- | ------- | ---------------------------------------- |
| `id`          | `string`              | -       | Optional ID for the modal                |
| `title`       | `string`              | -       | Title to display at the top of the modal |
| `description` | `string`              | -       | Description to display below the title   |
| `showClose`   | `boolean`             | `true`  | Whether to show the close button         |
| `width`       | `BoModalWidthOptions` | -       | Object containing width options          |

## Events

| Event   | Description                              |
| ------- | ---------------------------------------- |
| `close` | Emitted when the close button is clicked |

## Slots

| Slot name     | Description                                        |
| ------------- | -------------------------------------------------- |
| `default`     | The main content area of the modal                 |
| `header`      | Optional header area for custom header content     |
| `description` | Optional area for custom description content       |
| `footer`      | Optional footer area, typically for action buttons |

## Types

```ts
export interface BoModalWidthOptions {
  px?: number
  percent?: number
  tailwind?: string
}
```

## Examples

<BasicModalExample />

<div class="p-4">
  <button 
    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    @click="toggleModal"
  >
    Open Modal
  </button>
  
  <bo-modal 
    v-if="showModal" 
    title="Example Modal" 
    @close="toggleModal"
  >
    <p class="text-gray-500 dark:text-gray-400">
      This modal demonstrates the basic functionality of the BoModal component. 
      It includes a title and content.
    </p>
    
    <template #footer>
      <div class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4 dark:border-gray-700">
        <button 
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="toggleModal"
        >
          Accept
        </button>
        <button 
          class="rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          @click="toggleModal"
        >
          Cancel
        </button>
      </div>
    </template>
  </bo-modal>
</div>

### Width Options

The modal component provides multiple ways to set the width:

```vue
<!-- Using pixel width -->
<bo-modal :width="{ px: 500 }" />

<!-- Using percentage width -->
<bo-modal :width="{ percent: 75 }" />

<!-- Using Tailwind class -->
<bo-modal :width="{ tailwind: 'w-3/4' }" />
```

### Accessibility

The modal component is designed with accessibility in mind, following WCAG 2.1 AA standards:

#### Keyboard Navigation

- When the modal opens, focus is automatically moved to the first focusable element inside the modal
- Tab navigation is trapped within the modal using JavaScript, preventing users from interacting with page content behind the modal
- The <kbd>Escape</kbd> key can be used to close the modal
- When the modal closes, focus is returned to the element that triggered it

#### Screen Reader Support

- The modal has `role="dialog"` and `aria-modal="true"` to properly identify it to screen readers
- The modal is announced to screen readers when opened and closed
- The modal's title is linked to the content using `aria-labelledby`
- The modal's description (if present) is linked to the content using `aria-describedby`
- The close button includes both visible text and an `aria-label`

### Additional Features

- Background scrolling is prevented when the modal is open to avoid confusion
- The dialog uses semantic HTML structure with proper heading elements
- The close button has sufficient contrast and is large enough for easy interaction

### Example with Full Accessibility Features

```vue
<template>
  <button
    @click="openModal"
    aria-haspopup="dialog"
  >
    Open Accessible Modal
  </button>

  <bo-modal
    v-if="isOpen"
    id="accessible-dialog"
    title="Accessible Dialog"
    description="This dialog follows WCAG 2.1 AA standards"
    @close="closeModal"
  >
    <p>This modal demonstrates accessible features including:</p>
    <ul>
      <li>Focus management</li>
      <li>Keyboard navigation</li>
      <li>Proper ARIA attributes</li>
      <li>Screen reader announcements</li>
    </ul>

    <template #footer>
      <div
        class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4 dark:border-gray-700"
      >
        <button
          @click="closeModal"
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Close Dialog
        </button>
      </div>
    </template>
  </bo-modal>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
</script>
```
