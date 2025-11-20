---
title: Dropzone
description: A drag-and-drop file upload component with visual feedback.
outline: deep
---

<script setup>
import { ref } from 'vue';
import { BoDropzone } from '@/components/bo-dropzone';

const files = ref([]);

function handleChange(selectedFiles) {
	files.value = selectedFiles;
	console.log('Selected files:', selectedFiles);
}
</script>

# Dropzone

A drag-and-drop file upload component with visual feedback.

## Basic Usage

```vue
<script setup>
	import { ref } from 'vue';
	import { BoDropzone } from '@/components';

	const files = ref([]);

	function handleChange(selectedFiles) {
		files.value = selectedFiles;
		console.log('Selected files:', selectedFiles);
	}
</script>

<template>
	<BoDropzone @change="handleChange" />
</template>
```

<div style="margin-top: 1rem;">
	<BoDropzone @change="handleChange" />
</div>

## With Label and Helper Text

```vue
<template>
	<BoDropzone label="Upload files" helper-text="Drag and drop files or click to browse" />
</template>
```

<div style="margin-top: 1rem;">
	<BoDropzone label="Upload files" helper-text="Drag and drop files or click to browse" />
</div>

## Sizes

Dropzone supports three sizes: `sm`, `md` (default), and `lg`.

```vue
<template>
	<BoDropzone size="sm" />
	<BoDropzone size="md" />
	<BoDropzone size="lg" />
</template>
```

<div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
	<BoDropzone size="sm" />
	<BoDropzone size="md" />
	<BoDropzone size="lg" />
</div>

## Custom Text

```vue
<template>
	<BoDropzone
		dropzone-text="Drop your files here"
		hint-text="Supported formats: JPG, PNG, PDF (Max 10MB)"
	/>
</template>
```

## Multiple Files

```vue
<template>
	<BoDropzone multiple :max-files="5" label="Upload up to 5 files" />
</template>
```

## File Type Restrictions

```vue
<template>
	<!-- Images only -->
	<BoDropzone
		accept="image/*"
		dropzone-text="Drop images here"
		hint-text="Supported formats: JPG, PNG, GIF"
	/>

	<!-- Documents only -->
	<BoDropzone
		accept=".pdf,.doc,.docx"
		dropzone-text="Drop documents here"
		hint-text="Supported formats: PDF, DOC, DOCX"
	/>
</template>
```

## File Size Validation

```vue
<script setup>
	function handleError(error) {
		alert(error);
	}
</script>

<template>
	<BoDropzone
		:max-size="10 * 1024 * 1024"
		hint-text="Maximum file size: 10MB"
		@error="handleError"
	/>
</template>
```

## With File List

The dropzone automatically displays selected files with remove buttons.

```vue
<script setup>
	import { ref } from 'vue';

	const files = ref([]);

	function handleChange(selectedFiles) {
		files.value = selectedFiles;
	}
</script>

<template>
	<BoDropzone multiple label="Upload files" @change="handleChange" />

	<div v-if="files.length > 0">
		<p>{{ files.length }} file(s) selected</p>
	</div>
</template>
```

## Error State

```vue
<template>
	<BoDropzone label="Required files" has-error error-text="Please upload at least one file" />
</template>
```

## Disabled State

```vue
<template>
	<BoDropzone label="Disabled dropzone" disabled />
</template>
```

## Props

| Prop             | Type                   | Default                              | Description                |
| ---------------- | ---------------------- | ------------------------------------ | -------------------------- |
| `size`           | `'sm' \| 'md' \| 'lg'` | `'md'`                               | Size of the dropzone       |
| `label`          | `string`               | -                                    | Label text                 |
| `helperText`     | `string`               | -                                    | Helper text below dropzone |
| `errorText`      | `string`               | -                                    | Error message              |
| `hasError`       | `boolean`              | `false`                              | Error state                |
| `dropzoneText`   | `string`               | `'Click to upload or drag and drop'` | Main text in dropzone      |
| `hintText`       | `string`               | `'Supported formats: All files'`     | Hint text in dropzone      |
| `multiple`       | `boolean`              | `false`                              | Allow multiple files       |
| `maxFiles`       | `number`               | -                                    | Maximum number of files    |
| `accept`         | `string`               | -                                    | Accepted file types        |
| `maxSize`        | `number`               | -                                    | Maximum file size in bytes |
| `disabled`       | `boolean`              | `false`                              | Disabled state             |
| `customCssClass` | `string`               | -                                    | Custom CSS class           |

## Events

| Event    | Payload  | Description                                |
| -------- | -------- | ------------------------------------------ |
| `change` | `File[]` | Emitted when files are selected or dropped |
| `error`  | `string` | Emitted when validation fails              |

## Methods

| Method    | Description          |
| --------- | -------------------- |
| `focus()` | Focus the dropzone   |
| `blur()`  | Blur the dropzone    |
| `clear()` | Clear selected files |

## Features

- Drag and drop support
- Click to browse files
- Visual feedback on drag over
- File list with remove buttons
- File type validation
- File size validation
- Maximum files validation
- Keyboard accessible

## Accessibility

- Keyboard accessible (Enter/Space to open file dialog)
- Proper ARIA attributes
- Focus visible states
- Screen reader support
- Role="button" for interactive area
