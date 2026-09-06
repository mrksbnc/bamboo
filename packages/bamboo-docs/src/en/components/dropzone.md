---
title: Dropzone
description: Drag-and-drop file selection with validation and keyboard support.
category: forms
tags: [dropzone, upload, forms, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoDropzone } from '@mrksbnc/bamboo-vue';
const files = ref<File[]>([]);
const images = ref<File[]>([]);
const example = `<bo-dropzone label="Upload documents" v-model="files" multiple accept=".pdf" :max-files="3" />`;
const imageExample = `<bo-dropzone label="Upload images" v-model="images" multiple accept="image/*" :max-size="5242880" />`;
</script>

# Dropzone

`bo-dropzone` accepts files by clicking or dragging them into a labeled area. It shares validation options with [`bo-file-input`](./file-input).

## Upload documents

<ExampleFrame :code="example"><div class="w-full max-w-xl"><bo-dropzone label="Upload documents" v-model="files" multiple accept=".pdf" :max-files="3" /><p class="mt-3 text-sm text-neutral-500">{{ files.length ? `${files.length} file(s) ready` : 'No files selected' }}</p></div></ExampleFrame>

<ExampleFrame :code="imageExample">
  <div class="w-full max-w-xl">
    <bo-dropzone label="Upload images" v-model="images" multiple accept="image/*" :max-size="5242880" />
    <p class="mt-3 text-sm text-neutral-500">{{ images.length ? `${images.length} image(s) ready` : 'JPG, PNG, or WebP up to 5 MB' }}</p>
  </div>
</ExampleFrame>

## Validation and states

Use `accept`, `max-files`, and `max-size` to provide early client-side feedback. Show idle, drag-over, uploading, success, and error states with text and icons; clear an invalid selection without discarding valid files. Always validate type and size on the server.

## Accessibility and responsive guidance

The drop area must remain keyboard operable through its file input and have a visible label. Do not communicate “drag here” as the only path. Keep the target full width on small screens, expose selected filenames and remove controls, and avoid relying on color for drag-over state.

## API reference

| Prop         | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| `label`      | `string`  | Accessible and visible prompt. |
| `accept`     | `string`  | MIME types or extensions.      |
| `multiple`   | `boolean` | Allow more than one file.      |
| `maxFiles`   | `number`  | Maximum file count.            |
| `maxSize`    | `number`  | Maximum size in bytes.         |
| `disabled`   | `boolean` | Disable selection.             |
| `modelValue` | `File[]`  | Selected files.                |

The `change` event emits the selected `File[]`; `v-model` updates the selection through `update:modelValue`.
