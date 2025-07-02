<script setup>
import BoInput from '@/components/input/bo-input.vue';
import { BoInputState, BoInputSize, BoInputType } from '@/components/input/bo-input';
import { BoSize } from '@/shared/bo-size';
import { ref } from 'vue';
import { Icon } from '@/components/icon/bo-icon';

const modelValue = ref('');
</script>

# Input

An input component is a control that allows users to enter and edit text. It can be used for various purposes, such as search bars, forms, and single-line text fields.

```js
import { BoInput } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<div class="my-4 flex items-center gap-4">
		<bo-input
			label="Username"
			placeholder="Enter your username"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput } from '@mrksbnc/bamboo';

const inputValue = ref('');
</script>
```

<hr />
<div class="my-4 flex items-center gap-4">
	<bo-input
		v-model="modelValue"
		label="Username"
		placeholder="Enter your username"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	/>
</div>

## Props

| Name           | Type           | Default     | Description                            |
| -------------- | -------------- | ----------- | -------------------------------------- |
| id             | `string`       | `auto`      | Unique ID for the input                |
| name           | `string`       | `undefined` | Input name attribute                   |
| placeholder    | `string`       | `undefined` | Placeholder text                       |
| label          | `string`       | `undefined` | Input label                            |
| state          | `BoInputState` | `default`   | Input validation state                 |
| size           | `BoInputSize`  | `default`   | Input size                             |
| disabled       | `boolean`      | `false`     | Whether input is disabled              |
| required       | `boolean`      | `false`     | Whether input is required              |
| description    | `string`       | `undefined` | Helper text below the input            |
| error          | `string`       | `undefined` | Error message for error state          |
| prefixIcon     | `Icon`         | `Icon.none` | Icon before input text                 |
| suffixIcon     | `Icon`         | `Icon.none` | Icon after input text                  |
| type           | `string`       | `text`      | Input type (text, email, password...)  |
| readonly       | `boolean`      | `false`     | Whether input is readonly              |
| ariaLabel      | `string`       | `undefined` | ARIA label for accessibility           |
| autofocus      | `boolean`      | `false`     | Whether input should autofocus         |
| revealPassword | `boolean`      | `false`     | Show password toggle for password type |

## Events

| Name                | Payload  | Description                      |
| ------------------- | -------- | -------------------------------- |
| `update:modelValue` | `string` | Emitted when input value changes |
| `focus`             | -        | Emitted when input gains focus   |
| `blur`              | `Event`  | Emitted when input loses focus   |
| `change`            | `string` | Emitted when input value changes |

## Exposed Properties

- `inputRef`
  - Type: `Ref<HTMLInputElement | undefined>`
- `inputContainerRef`
  - Type: `Ref<HTMLDivElement | undefined>`

## Types

```ts
export enum BoInputState {
	default = 'default',
	success = 'success',
	warning = 'warning',
	error = 'error',
}

export enum BoInputSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoInputType {
	text = 'text',
	email = 'email',
	password = 'password',
	number = 'number',
	search = 'search',
	phone = 'tel',
}

interface BoInputProps {
	/** Unique id for the input*/
	id?: string;
	/** Input name attribute */
	name?: string;
	/** The placeholder text */
	placeholder?: string;
	/** The label for the input */
	label?: string;
	/** Which state the input is in */
	state?: BoInputState;
	/** The size of the input */
	size?: BoInputSize;
	/** Whether the input is disabled */
	disabled?: boolean;
	/** Whether the input is required */
	required?: boolean;
	/** Helper text to display below the input */
	description?: string;
	/** Error message to display when in error state */
	error?: string;
	/** Icon to display before the input text */
	prefixIcon?: Icon;
	/** Icon to display after the input text */
	suffixIcon?: Icon;
	/** Input type (text, email, password, etc.) */
	type?: string;
	/** Whether the input is readonly*/
	readonly?: boolean;
	/** ARIA label for accessibility */
	ariaLabel?: string;
	/** Whether the input should autofocus */
	autofocus?: boolean;
	/** Whether to show toggle button for password input*/
	revealPassword?: boolean;
}
```

## Disabled

<div class="flex gap-4 my-4">
  <bo-input disabled placeholder="Disabled input" v-model="modelValue" />
</div>

```vue
<bo-input disabled placeholder="Disabled input" v-model="modelValue" />
```

## Readonly

<div class="flex gap-4 my-4">
  <bo-input readonly modelValue="Read-only value" v-model="modelValue"/>
</div>

```vue
<bo-input readonly modelValue="Read-only value" v-model="modelValue" />
```

## States

To support validation states, the component supports four different states: `default`, `success`, `error`, and `warning`. These can be set using the `state` prop.

<div class="flex flex-col gap-4 my-4">
  <bo-input v-model="modelValue" :state="BoInputState.default" label="default" placeholder="Default state" />
  <bo-input v-model="modelValue" :state="BoInputState.success" label="success" placeholder="Success state" />
  <bo-input v-model="modelValue" :state="BoInputState.warning" label="warning" placeholder="Warning state" />
  <bo-input v-model="modelValue" :state="BoInputState.error" label="error" placeholder="Error state" error="This field has an error" />
</div>

```vue
<bo-input v-model="modelValue" :state="BoInputState.default" />
<bo-input v-model="modelValue" :state="BoInputState.success" />
<bo-input v-model="modelValue" :state="BoInputState.warning" />
<bo-input v-model="modelValue" :state="BoInputState.error" error="This field has an error" />
```

## Sizes

The component supports three different sizes: `small`, `default`, and `large`.
This can be set using the `size` prop.

<div class="flex flex-col gap-4 my-4">
  <bo-input v-model="modelValue" :size="BoInputSize.small" placeholder="Small input" />
  <bo-input v-model="modelValue" :size="BoInputSize.default" placeholder="Default input" />
  <bo-input v-model="modelValue" :size="BoInputSize.large" placeholder="Large input" />
</div>

```vue
<bo-input v-model="modelValue" :size="BoInputSize.small" placeholder="Small input" />
<bo-input v-model="modelValue" :size="BoInputSize.default" placeholder="Default input" />
<bo-input v-model="modelValue" :size="BoInputSize.large" placeholder="Large input" />
```

## With Label

To display a label for the input, use the `label` prop.

<div class="flex flex-col gap-4 my-4">
  <bo-input v-model="modelValue" label="Username" placeholder="Enter your username" />
</div>

```vue
<bo-input v-model="modelValue" label="Username" placeholder="Enter your username" />
```

## With Description

To display a description for the input, use the `description` prop.

<div class="flex flex-col gap-4 my-4">
  <bo-input
  	v-model="modelValue"
    placeholder="Enter your username"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
</div>

```vue
<bo-input
	v-model="modelValue"
	label="Username"
	placeholder="Enter your username"
	description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>
```

## Required Field

To indicate that a field is required, use the `required` prop. This will display a red asterisk next to the label.

<bo-input v-model="modelValue" label="Email" placeholder="Enter your email" required />

```vue
<bo-input v-model="modelValue" label="Email" placeholder="Enter your email" required />
```

## With Icons

The input component supports both prefix and suffix icons using the `prefixIcon` and `suffixIcon` props.

<div class="flex flex-col gap-4 my-4">
  <bo-input
    v-model="modelValue"
    :prefix-icon="Icon.user"
    placeholder="Enter username"
  />
  <bo-input
    v-model="modelValue"
    :suffix-icon="Icon.search"
    placeholder="Search..."
  />
  <bo-input
    v-model="modelValue"
    :prefix-icon="Icon.user"
    :suffix-icon="Icon.search"
    placeholder="With both icons"
  />
</div>

```vue
<bo-input v-model="modelValue" :prefix-icon="Icon.user" placeholder="Enter username" />
<bo-input v-model="modelValue" :suffix-icon="Icon.search" placeholder="Search..." />
<bo-input
	v-model="modelValue"
	:prefix-icon="Icon.user"
	:suffix-icon="Icon.search"
	placeholder="With both icons"
/>
```

## Input Types

The component supports various input types through the `type` prop:

<div class="flex flex-col gap-4 my-4">
  <bo-input
    v-model="modelValue"
    type="text"
    label="Text"
    placeholder="Text input"
  />
  <bo-input
    v-model="modelValue"
    type="email"
    label="Email"
    placeholder="Email input"
  />
  <bo-input
    v-model="modelValue"
    type="password"
    label="Password"
    placeholder="Password input"
  />
  <bo-input
    v-model="modelValue"
    type="number"
    label="Number"
    placeholder="Number input"
  />
</div>

```vue
<bo-input v-model="modelValue" type="text" label="Text" placeholder="Text input" />
<bo-input v-model="modelValue" type="email" label="Email" placeholder="Email input" />
<bo-input v-model="modelValue" type="password" label="Password" placeholder="Password input" />
<bo-input v-model="modelValue" type="number" label="Number" placeholder="Number input" />
```

## Event Handling

The component emits various events that you can listen to:

```vue
<template>
	<bo-input
		v-model="inputValue"
		@focus="handleFocus"
		@blur="handleBlur"
		@change="handleChange"
	/>
</template>

<script setup>
const inputValue = ref('');

const handleFocus = () => {
	console.log('Input focused');
};

const handleBlur = (event) => {
	console.log('Input blurred:', event);
};

const handleChange = (value) => {
	console.log('Value changed:', value);
};
</script>
```

## Dark Mode

The input component automatically adapts to dark mode with enhanced contrast and proper border adjustments.

<div class="flex flex-col gap-6 my-4 dark p-6 bg-gray-900 rounded-lg">
	<div class="flex items-center gap-4">
		<div class="w-20 text-sm text-gray-400">States</div>
		<div class="flex flex-col gap-3 flex-1">
			<bo-input v-model="modelValue" :state="BoInputState.default" placeholder="Default state" />
			<bo-input v-model="modelValue" :state="BoInputState.success" placeholder="Success state" />
			<bo-input v-model="modelValue" :state="BoInputState.warning" placeholder="Warning state" />
			<bo-input v-model="modelValue" :state="BoInputState.error" placeholder="Error state" />
		</div>
	</div>
	<div class="flex items-center gap-4">
		<div class="w-20 text-sm text-gray-400">Sizes</div>
		<div class="flex flex-col gap-3 flex-1">
			<bo-input v-model="modelValue" :size="BoInputSize.small" placeholder="Small input" />
			<bo-input v-model="modelValue" :size="BoInputSize.default" placeholder="Default input" />
			<bo-input v-model="modelValue" :size="BoInputSize.large" placeholder="Large input" />
		</div>
	</div>
	<div class="flex items-center gap-4">
		<div class="w-20 text-sm text-gray-400">With Icons</div>
		<div class="flex flex-col gap-3 flex-1">
			<bo-input v-model="modelValue" :prefix-icon="Icon.user" placeholder="Username" />
			<bo-input v-model="modelValue" :suffix-icon="Icon.search" placeholder="Search..." />
		</div>
	</div>
</div>

```vue
<div class="dark">
	<!-- States in dark mode -->
	<bo-input v-model="modelValue" :state="BoInputState.default" placeholder="Default state" />
	<bo-input v-model="modelValue" :state="BoInputState.success" placeholder="Success state" />
	<bo-input v-model="modelValue" :state="BoInputState.warning" placeholder="Warning state" />
	<bo-input v-model="modelValue" :state="BoInputState.error" placeholder="Error state" />
	
	<!-- With icons in dark mode -->
	<bo-input v-model="modelValue" :prefix-icon="Icon.user" placeholder="Username" />
	<bo-input v-model="modelValue" :suffix-icon="Icon.search" placeholder="Search..." />
</div>
```
