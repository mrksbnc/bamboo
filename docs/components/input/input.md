<script setup>
import { BoInput, BoInputSize, BoInputState, BoInputType, BoInputVariant } from '@/components/bo_input';
import { Icon } from '@/components/bo_icon';
</script>

# Input

The `BoInput` component provides a way to create styled form inputs with various states, sizes, and configurations.

## Usage

### Basic Usage

```vue
<template>
  <bo-input
    v-model="text"
    label="Username"
    placeholder="Enter your username"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-input label="Username" placeholder="Enter your username" description="This is a description" />
</div>

## Props

| Prop            | Type                   | Default        | Description                                                                           |
| --------------- | ---------------------- | -------------- | ------------------------------------------------------------------------------------- |
| `modelValue`    | `string \| number`     | `''`           | The value of the input field (used with v-model)                                      |
| `id`            | `string`               | auto-generated | The unique identifier for the input element                                           |
| `label`         | `string`               | -              | The label text for the input                                                          |
| `description`   | `string`               | -              | Description text shown below the input                                                |
| `description`   | `string \| null`       | -              | Helper text shown below the input                                                     |
| `placeholder`   | `string`               | `''`           | Placeholder text within the input                                                     |
| `size`          | `BoInputSize`          | `default`      | Size of the input (`small`, `default`, `large`)                                       |
| `state`         | `BoInputState`         | `none`         | State of the input (`none`, `valid`, `invalid`)                                       |
| `type`          | `BoInputType`          | `text`         | Type of input (`text`, `password`, `email`, `number`, `tel`, `url`, `search`, `date`) |
| `variant`       | `BoInputVariant`       | `default`      | Style variant (`default`, `filled`, `underline`)                                      |
| `isLoading`     | `boolean`              | `false`        | Shows a loading indicator when true                                                   |
| `disabled`      | `boolean`              | `false`        | Disables the input when true                                                          |
| `readonly`      | `boolean`              | `false`        | Makes the input read-only when true                                                   |
| `required`      | `boolean`              | `false`        | Marks the input as required when true                                                 |
| `autofocus`     | `boolean`              | `false`        | Automatically focuses the input when mounted                                          |
| `clearable`     | `boolean`              | `false`        | Shows a clear button when the input has a value                                       |
| `prefixIcon`    | `Icon \| null`         | `null`         | Icon displayed at the start of the input                                              |
| `suffixIcon`    | `Icon \| null`         | `null`         | Icon displayed at the end of the input                                                |
| `errorMessage`  | `string \| null`       | -              | Error message displayed below the input when state is invalid                         |
| `loaderVariant` | `'spinner' \| 'pulse'` | -              | Type of loader to display when loading                                                |
| `name`          | `string`               | `''`           | Name attribute for the input element                                                  |
| `min`           | `string \| number`     | -              | Minimum value for number inputs                                                       |
| `max`           | `string \| number`     | -              | Maximum value for number inputs                                                       |
| `pattern`       | `string`               | -              | Pattern for input validation                                                          |
| `attributes`    | `InputHTMLAttributes`  | `{}`           | Additional HTML attributes to apply to the input element                              |

## Events

| Event               | Parameters         | Description                              |
| ------------------- | ------------------ | ---------------------------------------- |
| `update:modelValue` | `string \| number` | Emitted when the input value changes     |
| `input`             | `Event`            | Emitted on input event                   |
| `focus`             | -                  | Emitted when the input is focused        |
| `blur`              | -                  | Emitted when the input loses focus       |
| `clear`             | -                  | Emitted when the clear button is clicked |

## Input Sizes

The Input component supports different sizes: small, default, and large.

```vue
<template>
  <bo-input
    size="small"
    label="Small Input"
  />
  <bo-input
    size="default"
    label="Default Input"
  />
  <bo-input
    size="large"
    label="Large Input"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-input size="small" label="Small Input" />
    <bo-input size="default" label="Default Input" />
    <bo-input size="large" label="Large Input" />
</div>

## Input States

The Input component supports different states: none (default), valid, and invalid.

```vue
<template>
  <bo-input
    state="none"
    label="Default State"
  />
  <bo-input
    state="valid"
    label="Valid State"
    description="This input is valid"
  />
  <bo-input
    state="invalid"
    label="Invalid State"
    error-message="This field is required"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-input state="none" label="Default State" />
    <bo-input state="valid" label="Valid State" description="This input is valid" />
    <bo-input state="invalid" label="Invalid State" error-message="This field is required" />
</div>

## Input Variants

The Input component supports different style variants: default, filled, and underline.

```vue
<template>
  <bo-input
    variant="default"
    label="Default Variant"
  />
  <bo-input
    variant="filled"
    label="Filled Variant"
  />
  <bo-input
    variant="underline"
    label="Underline Variant"
  />
</template>
```

<div class="flex flex-col gap-2">
    <bo-input variant="default" label="Default Variant" />
    <bo-input variant="filled" label="Filled Variant" />
    <bo-input variant="underline" label="Underline Variant" />
</div>

## Disabled State

Disabled inputs prevent user interaction and appear visually dimmed to indicate they are inactive. The text and placeholder are shown in a neutral gray color to indicate the non-interactive state.

```vue
<template>
  <bo-input
    label="Disabled Input"
    disabled
    model-value="This input is disabled"
  />
  <bo-input
    variant="filled"
    label="Disabled Filled Input"
    disabled
    model-value="Disabled filled input"
  />
  <bo-input
    label="Disabled Input with Placeholder"
    disabled
    placeholder="Placeholder text appears in neutral gray"
  />
</template>
```

<div class="flex flex-col gap-6">
    <bo-input label="Disabled Input" disabled model-value="This input is disabled" />
    <bo-input variant="filled" label="Disabled Filled Input" disabled model-value="Disabled filled input" />
    <bo-input variant="underline" label="Disabled Underline Input" disabled model-value="Disabled underline input" />
    <bo-input label="Disabled Input with Placeholder" disabled placeholder="Placeholder text appears in neutral gray" />
</div>

## Readonly State

Readonly inputs display information that cannot be edited but still allow focus and selection, unlike disabled inputs. The text and placeholder appear in a neutral gray color to indicate the read-only state.

```vue
<template>
  <bo-input
    label="Readonly Input"
    readonly
    model-value="This input is readonly"
  />
  <bo-input
    variant="filled"
    label="Readonly Filled Input"
    readonly
    model-value="Readonly filled input"
  />
  <bo-input
    label="Readonly Input with Placeholder"
    readonly
    placeholder="Placeholder text appears in neutral gray"
  />
</template>
```

<div class="flex flex-col gap-6">
    <bo-input label="Readonly Input" readonly model-value="This input is readonly" />
    <bo-input variant="filled" label="Readonly Filled Input" readonly model-value="Readonly filled input" />
    <bo-input variant="underline" label="Readonly Underline Input" readonly model-value="Readonly underline input" />
    <bo-input label="Readonly Input with Placeholder" readonly placeholder="Placeholder text appears in neutral gray" />
</div>

## Description and Helper Text

Inputs can include description text that appears below the input to provide additional context or instructions. When the input state is invalid, the description is replaced with an error message.

```vue
<template>
  <bo-input
    label="Input with Description"
    description="This description provides additional information about the field"
    placeholder="Enter your text here"
  />
  <bo-input
    label="Password with Description"
    type="password"
    description="Password must be at least 8 characters long and include numbers"
    placeholder="Enter your password"
  />
  <bo-input
    label="Invalid Input with Error"
    state="invalid"
    error-message="This field is required"
    description="This description won't show when there's an error"
    placeholder="This field has an error"
  />
</template>
```

<div class="flex flex-col gap-6">
    <bo-input 
      label="Input with Description" 
      description="This description provides additional information about the field"
      placeholder="Enter your text here"
    />
    <bo-input 
      label="Password with Description" 
      type="password"
      description="Password must be at least 8 characters long and include numbers"
      placeholder="Enter your password"
    />
    <bo-input 
      label="Invalid Input with Error" 
      state="invalid"
      error-message="This field is required"
      description="This description won't show when there's an error"
      placeholder="This field has an error"
    />
</div>

## With Icons

```vue
<template>
  <bo-input
    label="With Prefix Icon"
    :prefix-icon="Icon.user"
  />
  <bo-input
    label="With Suffix Icon"
    :suffix-icon="Icon.lock"
  />
  <bo-input
    label="With Both Icons"
    :prefix-icon="Icon.mail"
    :suffix-icon="Icon.alert_circle"
  />
</template>

<script setup>
import { Icon } from '@/components/bo_icon'
</script>
```

<div class="flex flex-col gap-2">
    <bo-input label="With Prefix Icon" :prefix-icon="Icon.user" />
    <bo-input label="With Suffix Icon" :suffix-icon="Icon.lock" />
    <bo-input label="With Both Icons" :prefix-icon="Icon.mail" :suffix-icon="Icon.alert_circle" />
</div>

## Input Types

The Input component supports various HTML input types.

<div class="flex flex-col gap-2">
    <bo-input type="email" label="Email" placeholder="Enter your email" />
    <bo-input type="password" label="Password" placeholder="Enter your password" />
    <bo-input type="number" label="Age" min="0" max="120" />
    <bo-input type="search" label="Search" placeholder="Search..." :suffix-icon="Icon.search" />
    <bo-input type="date" label="Date" />
    <bo-input type="tel" label="Phone Number" placeholder="Enter your phone number" />
    <bo-input type="url" label="Website" placeholder="Enter your website URL" />
</div>

## Using defineModel

The BoInput component uses Vue 3.4's new `defineModel` macro for two-way data binding, making it easier to use:

```vue
<template>
  <bo-input
    v-model="username"
    label="Username"
  />
</template>
```
