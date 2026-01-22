---
title: Modal
description: A modal dialog component with backdrop, customizable sizes, and flexible content areas. Perfect for confirmations, forms, and detailed content display.
category: overlay
tags:
  - modal
  - dialog
  - overlay
  - popup
outline: deep
---

<script setup>
import { ref } from 'vue';
import { BoModal, BoButton } from '@mrksbnc/bamboo-vue';

const isOpen = ref(false);
const isOpenLarge = ref(false);
const isOpenWithFooter = ref(false);
</script>

# Modal

A modal dialog component with backdrop, customizable sizes, and flexible content areas. Perfect for confirmations, forms, and detailed content display.

## Basic Usage

The component is called `bo-modal` and can be used as follows:

<div class="flex gap-4">
  <bo-button @click="isOpen = true" label="Open Modal" />
  <bo-modal v-model:open="isOpen" title="Basic Modal">
    <p>This is a basic modal with some content.</p>
  </bo-modal>
</div>

```vue
<template>
	<bo-button @click="isOpen = true" label="Open Modal" />
	<bo-modal v-model:open="isOpen" title="Basic Modal">
		<p>This is a basic modal with some content.</p>
	</bo-modal>
</template>

<script setup>
	import { ref } from 'vue';
	const isOpen = ref(false);
</script>
```

## Sizes

The `size` prop allows you to customize the size of the modal. The default size is `default`.

<div class="flex gap-4">
  <bo-button @click="isOpenLarge = true" label="Large Modal" />
  <bo-modal v-model:open="isOpenLarge" title="Large Modal" size="lg">
    <p>This is a large modal with more space for content.</p>
  </bo-modal>
</div>

```vue
<bo-modal v-model:open="isOpen" title="Large Modal" size="lg">
  <p>This is a large modal with more space for content.</p>
</bo-modal>
```

## With Footer

You can add a footer with action buttons using the `footer` slot:

<div class="flex gap-4">
  <bo-button @click="isOpenWithFooter = true" label="Modal with Footer" />
  <bo-modal v-model:open="isOpenWithFooter" title="Confirm Action">
    <p>Are you sure you want to perform this action?</p>
    <template #footer>
      <bo-button variant="outline" @click="isOpenWithFooter = false" label="Cancel" />
      <bo-button variant="primary" @click="isOpenWithFooter = false" label="Confirm" />
    </template>
  </bo-modal>
</div>

```vue
<bo-modal v-model:open="isOpen" title="Confirm Action">
  <p>Are you sure you want to perform this action?</p>
  <template #footer>
    <bo-button variant="outline" @click="isOpen = false" label="Cancel" />
    <bo-button variant="primary" @click="isOpen = false" label="Confirm" />
  </template>
</bo-modal>
```

## API Reference

### Props

| Prop                   | Type                                          | Default     | Description                            |
| ---------------------- | --------------------------------------------- | ----------- | -------------------------------------- |
| `open`                 | `boolean`                                     | `false`     | Whether the modal is open              |
| `size`                 | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'full'` | `'default'` | Size of the modal                      |
| `position`             | `'center' \| 'top' \| 'bottom'`               | `'center'`  | Position of the modal                  |
| `title`                | `string`                                      | `undefined` | Title of the modal                     |
| `closeOnBackdropClick` | `boolean`                                     | `true`      | Whether clicking backdrop closes modal |
| `closeOnEscape`        | `boolean`                                     | `true`      | Whether pressing escape closes modal   |
| `showCloseButton`      | `boolean`                                     | `true`      | Whether to show close button           |
| `preventBodyScroll`    | `boolean`                                     | `true`      | Whether to prevent body scroll         |
| `zIndex`               | `number`                                      | `50`        | Custom z-index for the modal           |

### Events

| Event   | Payload | Description                         |
| ------- | ------- | ----------------------------------- |
| `close` | `void`  | Emitted when modal should be closed |

### Slots

| Slot      | Description                        |
| --------- | ---------------------------------- |
| `default` | Main content of the modal          |
| `header`  | Custom header content              |
| `footer`  | Footer content with action buttons |
