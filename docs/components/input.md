<script setup>
import { BoInput, BoInputSize, BoInputState, BoInputType, BoInputVariant, BoInputLoaderVariant } from '@/components/bo-input';
import { BoSize } from '@/shared';
import { Icon } from '@/components/bo-icon';
import { ref } from 'vue';

const textValue = ref('');
const emailValue = ref('');
</script>

# Input

The Input component is used to get user input in a text field. It supports various states, sizes, and customization options.

## Basic Example

```html
<bo-input
	v-model="inputValue"
	placeholder="Enter text here"
/>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-input v-model="textValue" placeholder="Enter text here" />
</div>

### Props

| Prop name       | Type                   | Default        | Description                            |
| --------------- | ---------------------- | -------------- | -------------------------------------- |
| `modelValue`    | `string \| number`     | -              | Value of the input                     |
| `id`            | `string`               | Auto-generated | ID for the input element               |
| `label`         | `string`               | -              | Label text                             |
| `description`   | `string`               | -              | Helper text below the input            |
| `placeholder`   | `string`               | `''`           | Placeholder text                       |
| `size`          | `BoInputSize`          | `default`      | Size of the input                      |
| `state`         | `BoInputState`         | `none`         | Validation state                       |
| `type`          | `BoInputType`          | `text`         | HTML input type                        |
| `variant`       | `BoInputVariant`       | `default`      | Visual style variant                   |
| `isLoading`     | `boolean`              | `false`        | Show loading state                     |
| `prefixIcon`    | `Icon \| null`         | `Icon.none`    | Icon to show at the start of input     |
| `suffixIcon`    | `Icon \| null`         | `Icon.none`    | Icon to show at the end of input       |
| `errorMessage`  | `string \| null`       | -              | Error message to display               |
| `loaderVariant` | `BoInputLoaderVariant` | `spinner`      | Type of loader to display              |
| `disabled`      | `boolean`              | `false`        | Disable the input                      |
| `readonly`      | `boolean`              | `false`        | Make the input read-only               |
| `required`      | `boolean`              | `false`        | Mark the input as required             |
| `autofocus`     | `boolean`              | `false`        | Autofocus the input on mount           |
| `clearable`     | `boolean`              | `false`        | Show clear button when input has value |
| `name`          | `string`               | -              | Name attribute for the input           |
| `min`           | `number \| string`     | -              | Minimum value for number inputs        |
| `max`           | `number \| string`     | -              | Maximum value for number inputs        |
| `pattern`       | `string`               | -              | Pattern for input validation           |
| `attributes`    | `InputHTMLAttributes`  | -              | Additional HTML attributes             |

### Events

| Event name          | Description                              |
| ------------------- | ---------------------------------------- |
| `update:modelValue` | Emitted when the input value changes     |
| `input`             | Emitted on input event                   |
| `focus`             | Emitted when the input is focused        |
| `blur`              | Emitted when the input loses focus       |
| `clear`             | Emitted when the clear button is clicked |

### Types

```ts
export enum BoInputSize {
	small = 'small', // Small input
	default = 'default', // Default size
	large = 'large', // Large input
}

export enum BoInputState {
	none = 'none', // No validation state
	valid = 'valid', // Valid input state
	invalid = 'invalid', // Invalid input state
}

export enum BoInputType {
	text = 'text', // Text input
	password = 'password', // Password input
	email = 'email', // Email input
	number = 'number', // Number input
	tel = 'tel', // Telephone input
	url = 'url', // URL input
	search = 'search', // Search input
	date = 'date', // Date input
}

export enum BoInputVariant {
	default = 'default', // Default style with border
	filled = 'filled', // Filled background style
	underline = 'underline', // Underline style
}

export enum BoInputLoaderVariant {
	spinner = 'spinner', // Spinner loading indicator
	pulse = 'pulse', // Pulse loading indicator
}
```

## Input Types

Different types of inputs for specific data formats.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input v-model="textValue" type="text" label="Text Input" placeholder="Enter text" />
    <p class="text-sm mt-2">Text</p>
  </div>
  <div>
    <bo-input v-model="emailValue" type="email" label="Email Input" placeholder="Enter email" />
    <p class="text-sm mt-2">Email</p>
  </div>
  <div>
    <bo-input v-model="textValue" type="password" label="Password Input" placeholder="Enter password" />
    <p class="text-sm mt-2">Password</p>
  </div>
  <div>
    <bo-input v-model="textValue" type="number" label="Number Input" placeholder="Enter number" />
    <p class="text-sm mt-2">Number</p>
  </div>
</div>

```html
<bo-input
	v-model="textValue"
	type="text"
	label="Text Input"
	placeholder="Enter text"
/>
<bo-input
	v-model="emailValue"
	type="email"
	label="Email Input"
	placeholder="Enter email"
/>
<bo-input
	v-model="passwordValue"
	type="password"
	label="Password Input"
	placeholder="Enter password"
/>
<bo-input
	v-model="numberValue"
	type="number"
	label="Number Input"
	placeholder="Enter number"
/>
```

## Sizes

Inputs are available in different sizes.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input v-model="textValue" :size="BoInputSize.small" label="Small Input" placeholder="Small" />
    <p class="text-sm mt-2">Small</p>
  </div>
  <div>
    <bo-input v-model="textValue" :size="BoInputSize.default" label="Default Input" placeholder="Default" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div>
    <bo-input v-model="textValue" :size="BoInputSize.large" label="Large Input" placeholder="Large" />
    <p class="text-sm mt-2">Large</p>
  </div>
</div>

```html
<bo-input
	v-model="value"
	:size="BoInputSize.small"
	label="Small Input"
	placeholder="Small"
/>
<bo-input
	v-model="value"
	:size="BoInputSize.default"
	label="Default Input"
	placeholder="Default"
/>
<bo-input
	v-model="value"
	:size="BoInputSize.large"
	label="Large Input"
	placeholder="Large"
/>
```

## Variants

Different style variants for inputs.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input v-model="textValue" :variant="BoInputVariant.default" label="Default Variant" placeholder="Default" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div>
    <bo-input v-model="textValue" :variant="BoInputVariant.filled" label="Filled Variant" placeholder="Filled" />
    <p class="text-sm mt-2">Filled</p>
  </div>
  <div>
    <bo-input v-model="textValue" :variant="BoInputVariant.underline" label="Underline Variant" placeholder="Underline" />
    <p class="text-sm mt-2">Underline</p>
  </div>
</div>

```html
<bo-input
	v-model="value"
	:variant="BoInputVariant.default"
	label="Default Variant"
	placeholder="Default"
/>
<bo-input
	v-model="value"
	:variant="BoInputVariant.filled"
	label="Filled Variant"
	placeholder="Filled"
/>
<bo-input
	v-model="value"
	:variant="BoInputVariant.underline"
	label="Underline Variant"
	placeholder="Underline"
/>
```

## States

Inputs can display different validation states.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input v-model="textValue" :state="BoInputState.none" label="Normal State" />
    <p class="text-sm mt-2">None (Default)</p>
  </div>
  <div>
    <bo-input 
      v-model="textValue" 
      :state="BoInputState.valid" 
      label="Valid State" 
      description="Input is valid"
    />
    <p class="text-sm mt-2">Valid</p>
  </div>
  <div>
    <bo-input 
      v-model="textValue" 
      :state="BoInputState.invalid" 
      label="Invalid State" 
      error-message="This field is required"
    />
    <p class="text-sm mt-2">Invalid</p>
  </div>
</div>

```html
<bo-input
	v-model="value"
	:state="BoInputState.none"
	label="Normal State"
/>

<bo-input
	v-model="value"
	:state="BoInputState.valid"
	label="Valid State"
	description="Input is valid"
/>

<bo-input
	v-model="value"
	:state="BoInputState.invalid"
	label="Invalid State"
	error-message="This field is required"
/>
```

## With Icons

Inputs can include icons at the start or end.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input v-model="textValue" label="With Prefix Icon" :prefix-icon="Icon.search" placeholder="Search..." />
    <p class="text-sm mt-2">Prefix Icon</p>
  </div>
  <div>
    <bo-input v-model="textValue" label="With Suffix Icon" :suffix-icon="Icon.calendar" placeholder="Select date..." />
    <p class="text-sm mt-2">Suffix Icon</p>
  </div>
  <div>
    <bo-input 
      v-model="textValue" 
      label="With Both Icons" 
      :prefix-icon="Icon.mail" 
      :suffix-icon="Icon.send" 
      placeholder="Email address..."
    />
    <p class="text-sm mt-2">Both Icons</p>
  </div>
</div>

```html
<bo-input
	v-model="value"
	label="With Prefix Icon"
	:prefix-icon="Icon.search"
	placeholder="Search..."
/>

<bo-input
	v-model="value"
	label="With Suffix Icon"
	:suffix-icon="Icon.calendar"
	placeholder="Select date..."
/>

<bo-input
	v-model="value"
	label="With Both Icons"
	:prefix-icon="Icon.mail"
	:suffix-icon="Icon.send"
	placeholder="Email address..."
/>
```

## Clearable Input

Inputs can include a clear button when they have a value.

<div class="flex gap-1 items-center">
  <bo-input 
    v-model="textValue" 
    label="Clearable Input" 
    placeholder="Type something..." 
    :clearable="true"
  />
</div>

```html
<bo-input
	v-model="value"
	label="Clearable Input"
	placeholder="Type something..."
	:clearable="true"
	@clear="handleClear"
/>
```

## Disabled and Read-only

Inputs can be disabled or set to read-only.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input 
      v-model="textValue" 
      label="Disabled Input" 
      placeholder="Cannot be edited" 
      :disabled="true"
    />
    <p class="text-sm mt-2">Disabled</p>
  </div>
  <div>
    <bo-input 
      v-model="textValue" 
      label="Read-only Input" 
      placeholder="Can be selected but not edited" 
      :readonly="true"
    />
    <p class="text-sm mt-2">Read-only</p>
  </div>
</div>

```html
<bo-input
	v-model="value"
	label="Disabled Input"
	placeholder="Cannot be edited"
	:disabled="true"
/>

<bo-input
	v-model="value"
	label="Read-only Input"
	placeholder="Can be selected but not edited"
	:readonly="true"
/>
```

## Required Input

Inputs can be marked as required.

<div class="flex gap-1 items-center">
  <bo-input 
    v-model="textValue" 
    label="Required Input" 
    placeholder="This field is required" 
    :required="true"
  />
</div>

```html
<bo-input
	v-model="value"
	label="Required Input"
	placeholder="This field is required"
	:required="true"
/>
```

## Loading State

Inputs can display a loading indicator.

<div class="flex flex-wrap gap-1">
  <div>
    <bo-input 
      v-model="textValue" 
      label="Loading (Spinner)" 
      placeholder="Loading..." 
      :is-loading="true" 
      :loader-variant="BoInputLoaderVariant.spinner"
    />
    <p class="text-sm mt-2">Spinner</p>
  </div>
  <div>
    <bo-input 
      v-model="textValue" 
      label="Loading (Pulse)" 
      placeholder="Loading..." 
      :is-loading="true" 
      :loader-variant="BoInputLoaderVariant.pulse"
    />
    <p class="text-sm mt-2">Pulse</p>
  </div>
</div>

```html
<bo-input
	v-model="value"
	label="Loading (Spinner)"
	placeholder="Loading..."
	:is-loading="true"
	:loader-variant="BoInputLoaderVariant.spinner"
/>

<bo-input
	v-model="value"
	label="Loading (Pulse)"
	placeholder="Loading..."
	:is-loading="true"
	:loader-variant="BoInputLoaderVariant.pulse"
/>
```

```

```
