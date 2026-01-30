---
title: Textarea
description: A multi-line text input component with support for icons, validation, auto-resize, and various configuration options. Perfect for longer text input like comments, descriptions, and messages.
category: form
tags:
  - textarea
  - form
  - field
  - validation
  - multiline
outline: deep
---

<script setup>
import { BoTextarea } from '@mrksbnc/bamboo-vue';
</script>

# Textarea

A multi-line text input component with support for icons, validation, auto-resize, and various configuration options. Perfect for longer text input like comments, descriptions, and messages.

## Basic Usage

The component is called `bo-textarea` and can be used as follows:

<div class="flex gap-4">
  <bo-textarea placeholder="Enter your message..." />
</div>

```vue
<bo-textarea placeholder="Enter your message..." />
```

## With Label

Textarea can have labels for better accessibility and user experience:

<div class="flex gap-4">
  <bo-textarea label="Message" placeholder="Enter your message..." />
</div>

```vue
<bo-textarea label="Message" placeholder="Enter your message..." />
```

## Sizes

The `size` prop allows you to customize the size of the textarea. The default size is `default`.

<div class="flex flex-col gap-4">
  <bo-textarea size="sm" placeholder="Small textarea" />
  <bo-textarea size="default" placeholder="Default textarea" />
  <bo-textarea size="lg" placeholder="Large textarea" />
</div>

```vue
<bo-textarea size="sm" placeholder="Small textarea" />
<bo-textarea size="default" placeholder="Default textarea" />
<bo-textarea size="lg" placeholder="Large textarea" />
```

## States

The `state` prop allows you to show validation states. The default state is `default`.

<div class="flex flex-col gap-4">
  <bo-textarea state="default" placeholder="Default state" />
  <bo-textarea state="valid" placeholder="Valid textarea" />
  <bo-textarea state="invalid" placeholder="Invalid textarea" error="This field is required" />
</div>

```vue
<bo-textarea state="default" placeholder="Default state" />
<bo-textarea state="valid" placeholder="Valid textarea" />
<bo-textarea state="invalid" placeholder="Invalid textarea" error="This field is required" />
```

## Variants

The `variant` prop allows you to customize the appearance. The default variant is `default`.

<div class="flex flex-col gap-4">
  <bo-textarea variant="default" placeholder="Default variant" />
  <bo-textarea variant="filled" placeholder="Filled variant" />
</div>

```vue
<bo-textarea variant="default" placeholder="Default variant" />
<bo-textarea variant="filled" placeholder="Filled variant" />
```

## With Icons

Textarea support prefix and suffix icons:

<div class="flex flex-col gap-4">
  <bo-textarea prefix-icon="message_circle" placeholder="Write a comment..." />
  <bo-textarea suffix-icon="send" placeholder="Type your message..." />
</div>

```vue
<bo-textarea prefix-icon="message_circle" placeholder="Write a comment..." />
<bo-textarea suffix-icon="send" placeholder="Type your message..." />
```

## Rows Configuration

Control the number of visible rows:

<div class="flex flex-col gap-4">
  <bo-textarea rows="2" placeholder="2 rows" />
  <bo-textarea rows="4" placeholder="4 rows" />
  <bo-textarea rows="6" placeholder="6 rows" />
</div>

```vue
<bo-textarea rows="2" placeholder="2 rows" />
<bo-textarea rows="4" placeholder="4 rows" />
<bo-textarea rows="6" placeholder="6 rows" />
```

## Resizable

Control whether the textarea can be resized:

<div class="flex flex-col gap-4">
  <bo-textarea placeholder="Resizable textarea" resizable />
  <bo-textarea placeholder="Non-resizable textarea" :resizable="false" />
</div>

```vue
<bo-textarea placeholder="Resizable textarea" resizable />
<bo-textarea placeholder="Non-resizable textarea" :resizable="false" />
```

## With Description and Hints

Textarea can have descriptions and hint messages:

<div class="flex flex-col gap-4">
  <bo-textarea 
    label="Feedback" 
    description="Share your thoughts about our service" 
    hint="Maximum 500 characters"
    placeholder="Enter your feedback..." 
  />
  <bo-textarea 
    label="Comments" 
    state="invalid"
    error="Comments must be at least 10 characters long"
    placeholder="Enter comments..." 
  />
</div>

```vue
<bo-textarea
	label="Feedback"
	description="Share your thoughts about our service"
	hint="Maximum 500 characters"
	placeholder="Enter your feedback..."
/>
<bo-textarea
	label="Comments"
	state="invalid"
	error="Comments must be at least 10 characters long"
	placeholder="Enter comments..."
/>
```

## Required Fields

Mark textarea as required:

<div class="flex gap-4">
  <bo-textarea label="Description" placeholder="Enter description" required />
</div>

```vue
<bo-textarea label="Description" placeholder="Enter description" required />
```

## Disabled State

Textarea can be disabled:

<div class="flex gap-4">
  <bo-textarea placeholder="Disabled textarea" disabled />
</div>

```vue
<bo-textarea placeholder="Disabled textarea" disabled />
```

## Character Limit

Set a maximum character limit:

<div class="flex gap-4">
  <bo-textarea placeholder="Max 100 characters" max-length="100" />
</div>

```vue
<bo-textarea placeholder="Max 100 characters" max-length="100" />
```

## Full Width

Textarea can take the full width of their container:

<div class="w-full">
  <bo-textarea placeholder="Full width textarea" full-width />
</div>

```vue
<bo-textarea placeholder="Full width textarea" full-width />
```

## API Reference

### Props

| Prop          | Type                           | Default         | Description                                                 |
| ------------- | ------------------------------ | --------------- | ----------------------------------------------------------- |
| `id`          | `string`                       | `Autogenerated` | The id of the element.                                      |
| `dataTestId`  | `string`                       | `Autogenerated` | The data test id of the element.                            |
| `size`        | `BoTextareaSize`               | `'default'`     | The size of the textarea.                                   |
| `state`       | `BoTextareaState`              | `'default'`     | The state of the textarea.                                  |
| `variant`     | `BoTextareaVariant`            | `'default'`     | The variant of the textarea.                                |
| `placeholder` | `string`                       | -               | The placeholder text.                                       |
| `label`       | `string`                       | -               | The label of the textarea.                                  |
| `description` | `string`                       | -               | Description displayed below the textarea.                   |
| `error`       | `string`                       | -               | Error message to display when in invalid state.             |
| `hint`        | `string`                       | -               | Hint message to display below the textarea.                 |
| `required`    | `boolean`                      | `false`         | Whether the textarea is required.                           |
| `name`        | `string`                       | -               | The name of the textarea.                                   |
| `disabled`    | `boolean`                      | `false`         | Whether the textarea is disabled.                           |
| `readOnly`    | `boolean`                      | `false`         | Whether the textarea is read-only.                          |
| `fullWidth`   | `boolean`                      | `false`         | Whether the textarea is full width or not.                  |
| `prefixIcon`  | `Icon`                         | -               | The prefix icon to render.                                  |
| `suffixIcon`  | `Icon`                         | -               | The suffix icon to render.                                  |
| `rows`        | `number`                       | `3`             | Number of rows for the textarea.                            |
| `resizable`   | `boolean`                      | `true`          | Whether the textarea should be resizable.                   |
| `maxLength`   | `number`                       | -               | Maximum length of the textarea.                             |
| `autofocus`   | `boolean`                      | `false`         | Whether the textarea should autofocus.                      |
| `expand`      | `boolean`                      | `false`         | Whether the textarea should expand to fill available space. |
| `role`        | `HTMLAttributes['role']`       | -               | The role of the element.                                    |
| `ariaLabel`   | `HTMLAttributes['aria-label']` | -               | Defines a string value that labels the current element.     |
