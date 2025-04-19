<script setup>
import { BoTextarea, BoTextareaSize, BoTextareaState, BoTextareaVariant } from '@/components/bo_textarea';
import { Icon } from '@/components/bo_icon';
</script>

# Textarea

The `BoTextarea` component provides a way to create styled multi-line text input fields with various states, sizes, and configurations.

## Usage

### Basic Usage

```vue
<template>
  <bo-textarea
    v-model="text"
    label="Comments"
    placeholder="Enter your comments"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea label="Comments" placeholder="Enter your comments" description="This is a description" />
</div>

## Props

| Prop           | Type                                                   | Default        | Description                                                      |
| -------------- | ------------------------------------------------------ | -------------- | ---------------------------------------------------------------- |
| `modelValue`   | `string`                                               | `''`           | The value of the textarea (used with v-model)                    |
| `id`           | `string`                                               | auto-generated | The unique identifier for the textarea element                   |
| `label`        | `string`                                               | -              | The label text for the textarea                                  |
| `description`  | `string`                                               | -              | Description text shown below the textarea                        |
| `placeholder`  | `string`                                               | `''`           | Placeholder text within the textarea                             |
| `size`         | `BoTextareaSize`                                       | `default`      | Size of the textarea (`small`, `default`, `large`)               |
| `state`        | `BoTextareaState`                                      | `none`         | State of the textarea (`none`, `valid`, `invalid`)               |
| `variant`      | `BoTextareaVariant`                                    | `default`      | Style variant (`default`, `filled`)                              |
| `disabled`     | `boolean`                                              | `false`        | Disables the textarea when true                                  |
| `readonly`     | `boolean`                                              | `false`        | Makes the textarea read-only when true                           |
| `required`     | `boolean`                                              | `false`        | Marks the textarea as required when true                         |
| `autofocus`    | `boolean`                                              | `false`        | Automatically focuses the textarea when mounted                  |
| `clearable`    | `boolean`                                              | `false`        | Shows a clear button when the textarea has a value               |
| `prefixIcon`   | `Icon \| null`                                         | `null`         | Icon displayed at the start of the textarea                      |
| `suffixIcon`   | `Icon \| null`                                         | `null`         | Icon displayed at the end of the textarea                        |
| `errorMessage` | `string \| null`                                       | -              | Error message displayed below the textarea when state is invalid |
| `name`         | `string`                                               | -              | Name attribute for the textarea element                          |
| `rows`         | `number`                                               | `4`            | Number of visible text lines                                     |
| `cols`         | `number`                                               | -              | Number of visible characters per line                            |
| `maxlength`    | `number`                                               | -              | Maximum number of characters                                     |
| `minlength`    | `number`                                               | -              | Minimum number of characters                                     |
| `wrap`         | `'soft'` \| `'hard'`                                   | -              | How the text should wrap                                         |
| `resize`       | `'none'` \| `'both'` \| `'horizontal'` \| `'vertical'` | `'none'`       | How the textarea can be resized                                  |
| `attributes`   | `TextareaHTMLAttributes`                               | `{}`           | Additional HTML attributes to apply to the textarea element      |

## Events

| Event               | Parameters | Description                              |
| ------------------- | ---------- | ---------------------------------------- |
| `update:modelValue` | `string`   | Emitted when the textarea value changes  |
| `input`             | `Event`    | Emitted on input event                   |
| `focus`             | -          | Emitted when the textarea is focused     |
| `blur`              | -          | Emitted when the textarea loses focus    |
| `clear`             | -          | Emitted when the clear button is clicked |

## Textarea Sizes

The Textarea component supports different sizes: small, default, and large. All sizes are designed with a reduced height while maintaining comfortable padding, making them compact and space-efficient.

```vue
<template>
  <bo-textarea
    size="small"
    label="Small Textarea"
  />
  <bo-textarea
    size="default"
    label="Default Textarea"
  />
  <bo-textarea
    size="large"
    label="Large Textarea"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea size="small" label="Small Textarea" />
    <bo-textarea size="default" label="Default Textarea" />
    <bo-textarea size="large" label="Large Textarea" />
</div>

## Textarea States

The Textarea component supports different states: none (default), valid, and invalid.

```vue
<template>
  <bo-textarea
    state="none"
    label="Default State"
  />
  <bo-textarea
    state="valid"
    label="Valid State"
    description="This textarea is valid"
  />
  <bo-textarea
    state="invalid"
    label="Invalid State"
    error-message="This field is required"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea state="none" label="Default State" />
    <bo-textarea state="valid" label="Valid State" description="This textarea is valid" />
    <bo-textarea state="invalid" label="Invalid State" error-message="This field is required" />
</div>

## Textarea Variants

The Textarea component supports different style variants: default and filled.

```vue
<template>
  <bo-textarea
    variant="default"
    label="Default Variant"
  />
  <bo-textarea
    variant="filled"
    label="Filled Variant"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea variant="default" label="Default Variant" />
    <bo-textarea variant="filled" label="Filled Variant" />
</div>

## Resizable Textarea

By default, the textarea is not resizable, but you can enable resizing with the `resize` prop.

```vue
<template>
  <bo-textarea
    label="Not Resizable (Default)"
    resize="none"
  />
  <bo-textarea
    label="Vertical Resize"
    resize="vertical"
  />
  <bo-textarea
    label="Horizontal Resize"
    resize="horizontal"
  />
  <bo-textarea
    label="Both Directions Resize"
    resize="both"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea label="Not Resizable (Default)" resize="none" />
    <bo-textarea label="Vertical Resize" resize="vertical" />
    <bo-textarea label="Horizontal Resize" resize="horizontal" />
    <bo-textarea label="Both Directions Resize" resize="both" />
</div>

## Disabled State

Disabled textareas prevent user interaction and appear visually dimmed to indicate they are inactive. The text and placeholder are shown in a neutral gray color to indicate the non-interactive state.

```vue
<template>
  <bo-textarea
    label="Disabled Textarea"
    disabled
    model-value="This textarea is disabled"
  />
  <bo-textarea
    variant="filled"
    label="Disabled Filled Textarea"
    disabled
    model-value="Disabled filled textarea"
  />
</template>
```

<div class="flex flex-col gap-6">
    <bo-textarea label="Disabled Textarea" disabled model-value="This textarea is disabled" />
    <bo-textarea variant="filled" label="Disabled Filled Textarea" disabled model-value="Disabled filled textarea" />
</div>

## Readonly State

Readonly textareas display information that cannot be edited but still allow focus and selection, unlike disabled textareas. The text and placeholder appear in a neutral gray color to indicate the read-only state.

```vue
<template>
  <bo-textarea
    label="Readonly Textarea"
    readonly
    model-value="This textarea is readonly"
  />
  <bo-textarea
    variant="filled"
    label="Readonly Filled Textarea"
    readonly
    model-value="Readonly filled textarea"
  />
</template>
```

<div class="flex flex-col gap-6">
    <bo-textarea label="Readonly Textarea" readonly model-value="This textarea is readonly" />
    <bo-textarea variant="filled" label="Readonly Filled Textarea" readonly model-value="Readonly filled textarea" />
</div>

## Clearable Textarea

The clearable prop adds a clear button that appears when the textarea has a value. Clicking this button clears the textarea's content.

```vue
<template>
  <bo-textarea
    v-model="text"
    label="Clearable Textarea"
    clearable
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea label="Clearable Textarea" clearable model-value="Type something, then clear it with the button" />
</div>

## Rows and Columns

By default, the textarea displays 3 rows of text. You can control the initial size using the `rows` and `cols` props.

```vue
<template>
  <bo-textarea
    label="2 Rows Textarea"
    :rows="2"
  />
  <bo-textarea label="Default (3 Rows) Textarea" />
  <bo-textarea
    label="5 Rows Textarea"
    :rows="5"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea label="2 Rows Textarea" :rows="2" />
    <bo-textarea label="Default (3 Rows) Textarea" />
    <bo-textarea label="5 Rows Textarea" :rows="5" />
</div>

## With Error Message

When used with form validation, you can display error messages with the `errorMessage` prop when the state is set to `invalid`.

```vue
<template>
  <bo-textarea
    v-model="message"
    label="Message"
    state="invalid"
    error-message="Please enter at least 10 characters"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-textarea label="Message" state="invalid" error-message="Please enter at least 10 characters" />
</div>
