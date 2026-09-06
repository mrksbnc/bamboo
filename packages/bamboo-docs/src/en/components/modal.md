---
title: Modal
description: A dialog overlay component for displaying content that requires user attention or interaction
category: overlay
tags:
  - modal
  - dialog
  - overlay
  - popup
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoModal, BoButton, BoText } from '@mrksbnc/bamboo-vue';

const showDefault = ref(false)
const showInfo = ref(false)
const showWarning = ref(false)
const showError = ref(false)
const showSmall = ref(false)
const showLarge = ref(false)
const showFooter = ref(false)

const basicExample = `const showDefault = ref(false);

<bo-button @click="showDefault = true">Open Modal</bo-button>
<bo-modal :open="showDefault" title="Default Modal" @close="showDefault = false">
  <bo-text>This is a basic modal with a title and content slot.</bo-text>
</bo-modal>`;

const variantsExample = `const showInfo = ref(false);
const showWarning = ref(false);
const showError = ref(false);

<div class="flex gap-3 flex-wrap">
  <bo-button @click="showInfo = true" variant="primary">Info</bo-button>
  <bo-button @click="showWarning = true" variant="warning">Warning</bo-button>
  <bo-button @click="showError = true" variant="destructive">Error</bo-button>
</div>
<bo-modal :open="showInfo" title="Information" variant="info" @close="showInfo = false">
  <bo-text>This is an informational message.</bo-text>
</bo-modal>
<bo-modal :open="showWarning" title="Warning" variant="warning" @close="showWarning = false">
  <bo-text>Please review this warning before proceeding.</bo-text>
</bo-modal>
<bo-modal :open="showError" title="Error" variant="error" @close="showError = false">
  <bo-text>An error has occurred. Please try again.</bo-text>
</bo-modal>`;

const sizesExample = `const showSmall = ref(false);
const showLarge = ref(false);

<div class="flex gap-3 flex-wrap">
  <bo-button @click="showSmall = true">Small</bo-button>
  <bo-button @click="showLarge = true">Large</bo-button>
</div>
<bo-modal :open="showSmall" title="Small Modal" size="sm" @close="showSmall = false">
  <bo-text>A compact modal for simple confirmations.</bo-text>
</bo-modal>
<bo-modal :open="showLarge" title="Large Modal" size="lg" @close="showLarge = false">
  <bo-text>A larger modal for more complex content.</bo-text>
</bo-modal>`;

const footerExample = `const showFooter = ref(false);

<bo-button @click="showFooter = true">With Footer</bo-button>
<bo-modal :open="showFooter" title="Confirm Action" variant="warning" @close="showFooter = false">
  <bo-text>Are you sure you want to proceed?</bo-text>
  <template #footer>
    <bo-button variant="light" size="sm" @click="showFooter = false">Cancel</bo-button>
    <bo-button variant="primary" size="sm" @click="showFooter = false">Confirm</bo-button>
  </template>
</bo-modal>`;
</script>

# Modal

The `bo-modal` component displays content in an overlay dialog. It supports variant styles for info, warning, and error states, uses `bo-icon` for the close button, and provides a content slot for flexible composition.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-button @click="showDefault = true">Open Modal</bo-button>
  <bo-modal :open="showDefault" title="Default Modal" @close="showDefault = false">
    <bo-text>This is a basic modal with a title and content slot.</bo-text>
  </bo-modal>
</ExampleFrame>

## Variants

The `variant` prop controls the header accent color and icon. Available variants are `default`, `info`, `warning`, and `error`.

<ExampleFrame :code="variantsExample">
  <div class="flex gap-3 flex-wrap">
    <bo-button @click="showInfo = true" variant="primary">Info</bo-button>
    <bo-button @click="showWarning = true" variant="warning">Warning</bo-button>
    <bo-button @click="showError = true" variant="destructive">Error</bo-button>
  </div>
  <bo-modal :open="showInfo" title="Information" variant="info" @close="showInfo = false">
    <bo-text>This is an informational message.</bo-text>
  </bo-modal>
  <bo-modal :open="showWarning" title="Warning" variant="warning" @close="showWarning = false">
    <bo-text>Please review this warning before proceeding.</bo-text>
  </bo-modal>
  <bo-modal :open="showError" title="Error" variant="error" @close="showError = false">
    <bo-text>An error has occurred. Please try again.</bo-text>
  </bo-modal>
</ExampleFrame>

## Sizes

The `size` prop controls the max width of the modal panel. Available sizes are `sm`, `default`, `lg`, `xl`, and `full`. Sizes use responsive breakpoints so the modal adapts gracefully on smaller screens.

<ExampleFrame :code="sizesExample">
  <div class="flex gap-3 flex-wrap">
    <bo-button @click="showSmall = true">Small</bo-button>
    <bo-button @click="showLarge = true">Large</bo-button>
  </div>
  <bo-modal :open="showSmall" title="Small Modal" size="sm" @close="showSmall = false">
    <bo-text>A compact modal for simple confirmations.</bo-text>
  </bo-modal>
  <bo-modal :open="showLarge" title="Large Modal" size="lg" @close="showLarge = false">
    <bo-text>A larger modal for more complex content.</bo-text>
  </bo-modal>
</ExampleFrame>

## Footer Slot

Use the `footer` slot to add action buttons at the bottom of the modal.

<ExampleFrame :code="footerExample">
  <bo-button @click="showFooter = true">With Footer</bo-button>
  <bo-modal :open="showFooter" title="Confirm Action" variant="warning" @close="showFooter = false">
    <bo-text>Are you sure you want to proceed?</bo-text>
    <template #footer>
      <bo-button variant="light" size="sm" @click="showFooter = false">Cancel</bo-button>
      <bo-button variant="primary" size="sm" @click="showFooter = false">Confirm</bo-button>
    </template>
  </bo-modal>
</ExampleFrame>

## API Reference

### Props

| Prop              | Type                                 | Default   | Description                                                 |
| ----------------- | ------------------------------------ | --------- | ----------------------------------------------------------- |
| `id`              | `string`                             | Auto      | The id of the element.                                      |
| `dataTestId`      | `string`                             | Auto      | The data test id of the element.                            |
| `open`            | `boolean`                            | `false`   | Whether the modal is open.                                  |
| `title`           | `string`                             | -         | The title displayed in the modal header.                    |
| `variant`         | `BoModalVariant`                     | `default` | The variant style: `default`, `info`, `warning`, `error`.   |
| `size`            | `BoModalSize`                        | `default` | The size of the modal: `sm`, `default`, `lg`, `xl`, `full`. |
| `closeOnBackdrop` | `boolean`                            | `true`    | Whether clicking the backdrop closes the modal.             |
| `closeOnEscape`   | `boolean`                            | `true`    | Whether pressing Escape closes the modal.                   |
| `showClose`       | `boolean`                            | `true`    | Whether to show the close button in the header.             |
| `role`            | `HTMLAttributes['role']`             | `dialog`  | The role of the element.                                    |
| `ariaLabel`       | `HTMLAttributes['aria-label']`       | -         | Defines a string value that labels the current element.     |
| `ariaLabelledBy`  | `HTMLAttributes['aria-labelledby']`  | -         | Reference to an element that labels the current element.    |
| `ariaDescribedBy` | `HTMLAttributes['aria-describedby']` | -         | Identifies the element that describes the object.           |

### Events

| Event   | Payload | Description                               |
| ------- | ------- | ----------------------------------------- |
| `close` | -       | Emitted when the modal requests to close. |

### Slots

| Name      | Description                                |
| --------- | ------------------------------------------ |
| `default` | The main content of the modal body.        |
| `header`  | Custom header content. Replaces the title. |
| `footer`  | Footer content, typically action buttons.  |
