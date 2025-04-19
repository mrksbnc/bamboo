<script setup>
import { BoModal } from '@/components/bo_modal';
import { BoModalSize } from '@/components/bo_modal/bo_modal';
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

### Example

```js
<script setup>
import { ref } from 'vue';
const showModal = ref(false);
</script>

<template>
  <button @click="showModal = true">Open Modal</button>

  <bo-modal v-if="showModal" @close="showModal = false">
    <template #header>
      <h3>Modal Title</h3>
    </template>
    <template #content>
      <p>This is the modal content.</p>
    </template>
    <template #footer>
      <button @click="showModal = false">Close</button>
    </template>
  </bo-modal>
</template>
```

## Props

The modal component accepts the following props:

| Prop                   | Type          | Default | Description                                               |
| ---------------------- | ------------- | ------- | --------------------------------------------------------- |
| `size`                 | `BoModalSize` | `MD`    | Predefined size of the modal (SM, MD, LG, XL, XXL)        |
| `title`                | `string`      | `''`    | Title to display at the top of the modal                  |
| `subtitle`             | `string`      | `''`    | Subtitle to display below the title                       |
| `showClose`            | `boolean`     | `true`  | Whether to show the close button                          |
| `widthInPx`            | `number`      | -       | Width of the modal in pixels (overrides size)             |
| `widthInPercent`       | `number`      | -       | Width of the modal in percentage (overrides size)         |
| `widthAsTailwindClass` | `string`      | -       | Tailwind class for width (e.g., 'w-1/2') (overrides size) |

## Events

| Event   | Description                              |
| ------- | ---------------------------------------- |
| `close` | Emitted when the close button is clicked |

## Slots

The modal component provides the following slots:

| Slot name |
| --------- |
| `header`  |
| `content` |
| `footer`  |

## Basic Example

<BasicModalExample />

<div class="p-4">
  <button 
    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    @click="toggleModal"
  >
    Open Modal
  </button>
  
  <BoModal 
    v-if="showModal" 
    title="Example Modal" 
    subtitle="This is a simple example of the modal component"
    @close="toggleModal"
  >
    <template #content>
      <p class="text-gray-700">
        This modal demonstrates the basic functionality of the BoModal component. 
        It includes a title, subtitle, and content.
      </p>
    </template>
    <template #footer>
      <button 
        class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 mr-2"
        @click="toggleModal"
      >
        Cancel
      </button>
      <button 
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        @click="toggleModal"
      >
        Confirm
      </button>
    </template>
  </BoModal>
</div>

## Width Options

The modal component provides multiple ways to set the width:

1. Using the `size` prop with predefined values:

   - SM: Small (max-w-sm)
   - MD: Medium (max-w-md) - default
   - LG: Large (max-w-lg)
   - XL: Extra Large (max-w-xl)
   - XXL: 2X Large (max-w-2xl)

2. Specify an exact pixel width using `widthInPx`
3. Specify a percentage width using `widthInPercent`
4. Use a Tailwind class with `widthAsTailwindClass`

The priority order is: custom width options (pixels, percent, tailwind) > size class.

```vue
<!-- Using size enum -->
<bo-modal :size="BoModalSize.LG" />

<!-- Using pixel width -->
<bo-modal :widthInPx="500" />

<!-- Using percentage width -->
<bo-modal :widthInPercent="75" />

<!-- Using Tailwind class -->
<bo-modal widthAsTailwindClass="w-3/4" />
```
