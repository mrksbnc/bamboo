---
title: Textarea
description: A multi-line text input component with support for auto-resize, character count, and validation.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoTextarea } from '@/components/bo-textarea';
import { BoSize } from '@/shared/size';

const value = ref('');
</script>

# Textarea

A versatile textarea component with support for auto-resize, character count, validation, and accessibility features.

## Basic Usage

```vue
<bo-textarea v-model="value" placeholder="Enter your text..." />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" placeholder="Enter your text..." />
</div>

## With Label

```vue
<bo-textarea v-model="value" label="Description" placeholder="Enter description..." />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" label="Description" placeholder="Enter description..." />
</div>

## Required Field

```vue
<bo-textarea v-model="value" label="Message" required placeholder="Required field..." />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" label="Message" required placeholder="Required field..." />
</div>

## With Character Count

```vue
<bo-textarea v-model="value" :max-length="200" :show-count="true" />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" :max-length="200" :show-count="true" />
</div>

## With Error

```vue
<bo-textarea v-model="value" error="This field is required" />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" error="This field is required" />
</div>

## With Helper Text

```vue
<bo-textarea v-model="value" helper-text="Enter at least 50 characters" />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" helper-text="Enter at least 50 characters" />
</div>

## Auto Resize

```vue
<bo-textarea v-model="value" :auto-resize="true" />
```

<div style="margin-top: 1rem;">
  <bo-textarea v-model="value" :auto-resize="true" />
</div>

## Sizes

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <bo-textarea v-model="value" :size="BoSize.xs" placeholder="Extra Small" />
  <bo-textarea v-model="value" :size="BoSize.sm" placeholder="Small" />
  <bo-textarea v-model="value" :size="BoSize.md" placeholder="Medium" />
  <bo-textarea v-model="value" :size="BoSize.lg" placeholder="Large" />
  <bo-textarea v-model="value" :size="BoSize.xl" placeholder="Extra Large" />
</div>

## API Reference

### Props

| Name          | Type      | Default | Description                             |
| ------------- | --------- | ------- | --------------------------------------- |
| `modelValue`  | `string`  | -       | The value of the textarea               |
| `label`       | `string`  | -       | Label for the textarea                  |
| `placeholder` | `string`  | -       | Placeholder text                        |
| `required`    | `boolean` | `false` | Whether the field is required           |
| `disabled`    | `boolean` | `false` | Whether the textarea is disabled        |
| `readonly`    | `boolean` | `false` | Whether the textarea is readonly        |
| `rows`        | `number`  | `3`     | Number of visible text rows             |
| `maxLength`   | `number`  | -       | Maximum number of characters            |
| `showCount`   | `boolean` | `false` | Whether to show character count         |
| `autoResize`  | `boolean` | `false` | Whether to auto-resize based on content |
| `error`       | `string`  | -       | Error message to display                |
| `helperText`  | `string`  | -       | Helper text to display                  |
| `size`        | `BoSize`  | `'md'`  | Size of the textarea                    |

### Events

| Event               | Payload      | Description                           |
| ------------------- | ------------ | ------------------------------------- |
| `update:modelValue` | `string`     | Emitted when the value changes        |
| `blur`              | `FocusEvent` | Emitted when the textarea loses focus |
