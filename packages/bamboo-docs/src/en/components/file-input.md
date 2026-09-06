---
title: File Input
description: An accessible file picker with client-side validation.
category: forms
tags: [file, upload, forms, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoFileInput } from '@mrksbnc/bamboo-vue';
const file = ref<File | File[] | null>(null);
const files = ref<File | File[] | null>(null);
const singleExample = `<bo-file-input v-model="file" label="Profile image" accept="image/*" />`;
const multipleExample = `<bo-file-input v-model="files" label="Attachments" accept=".pdf,.png" multiple :max-files="4" />`;
</script>

# File Input

Use `bo-file-input` when users need to choose files from their device. It is an input-style native file control with a leading file indicator. In single-file mode the control contains the selected filename; multiple-file mode also renders removable filename rows.

## Basic usage

<ExampleFrame :code="singleExample"><div class="w-full max-w-xl"><bo-file-input v-model="file" label="Profile image" accept="image/*" /><p class="mt-3 text-sm text-neutral-500">{{ file && !Array.isArray(file) ? file.name : 'No file selected' }}</p></div></ExampleFrame>

## Multiple files

<ExampleFrame :code="multipleExample"><div class="w-full max-w-xl"><bo-file-input v-model="files" label="Attachments" accept=".pdf,.png" multiple :max-files="4" /><p class="mt-3 text-sm text-neutral-500">{{ Array.isArray(files) ? files.map(file => file.name).join(', ') || 'No files selected' : 'No files selected' }}</p></div></ExampleFrame>

## States and validation

Support idle, selected, disabled, and invalid states. Display the accepted types and size limit before selection; report validation errors next to the control and preserve the user's valid files. Client-side checks improve feedback but do not replace server-side validation.

## Accessibility and responsive guidance

Always supply a visible `label`. The native input remains keyboard and screen-reader accessible. Stack filename rows and remove actions vertically on narrow screens and truncate long names only when the full name is available to assistive technology.

## API reference

| Prop         | Type                     | Description                                            |
| ------------ | ------------------------ | ------------------------------------------------------ |
| `label`      | `string`                 | Visible accessible label.                              |
| `accept`     | `string`                 | Accepted MIME types or extensions.                     |
| `multiple`   | `boolean`                | Allow multiple files.                                  |
| `maxFiles`   | `number`                 | Maximum file count.                                    |
| `maxSize`    | `number`                 | Maximum file size in bytes.                            |
| `disabled`   | `boolean`                | Disable selection.                                     |
| `modelValue` | `File \| File[] \| null` | One file, multiple files, or no selection (`v-model`). |

### Events

`change` emits the selected `File[]`. `update:modelValue` follows the model shape: `File` for single selection, `File[]` for multiple selection, and `null` when empty. Validation failures emit an error state without replacing valid files.
