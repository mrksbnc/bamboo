<script setup>
import { BoInput, BoInputVariant, BoInputState, BoInputSize, BoInputType } from '@/components/bo-input';
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize, BoColor } from '@/shared';
</script>

# Input

The Input component allows users to enter text, numbers, and other data. It supports different variants, states, and can display pills for multi-value selection.

```js
import { BoInput } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-input
		v-model="inputValue"
		placeholder="Enter your text"
	/>
</template>

<script setup>
import { BoInput } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

<hr />
<div class="flex flex-col gap-4 my-4">
  <bo-input placeholder="Enter your text" />
</div>

## Props

| Name               | Type                 | Default     | Description                                          |
| ------------------ | -------------------- | ----------- | ---------------------------------------------------- |
| `modelValue`       | `string`             | `undefined` | Value of the input (v-model)                         |
| `placeholder`      | `string`             | `undefined` | Placeholder text                                     |
| `label`            | `string`             | `undefined` | Label text above the input                           |
| `variant`          | `BoInputVariant`     | `default`   | Controls the input's appearance style                |
| `state`            | `BoInputState`       | `default`   | Controls the input's state (default, error, success) |
| `size`             | `BoInputSize`        | `default`   | Controls the input's size                            |
| `disabled`         | `boolean`            | `false`     | Disables the input                                   |
| `required`         | `boolean`            | `false`     | Marks the input as required                          |
| `description`      | `string`             | `undefined` | Helper text below the input                          |
| `error`            | `string`             | `undefined` | Error message shown when in error state              |
| `prefixIcon`       | `Icon`               | `Icon.none` | Icon displayed at the start of the input             |
| `suffixIcon`       | `Icon`               | `Icon.none` | Icon displayed at the end of the input               |
| `type`             | `string`             | `text`      | HTML input type attribute                            |
| `id`               | `string`             | `auto`      | Unique ID for the input                              |
| `name`             | `string`             | `undefined` | Input name attribute                                 |
| `readonly`         | `boolean`            | `false`     | Makes the input read-only                            |
| `ariaLabel`        | `string`             | `undefined` | Accessible name for the input                        |
| `autofocus`        | `boolean`            | `false`     | Sets autofocus attribute                             |
| `pills`            | `Array<BoInputPill>` | `[]`        | Array of pill items to display in the input          |
| `horizontalScroll` | `boolean`            | `false`     | Enables horizontal scrolling for pills               |
| `revealPassword`   | `boolean`            | `false`     | Displays a toggle button to show/hide password text  |

## Events

| Name                | Payload  | Description                                            |
| ------------------- | -------- | ------------------------------------------------------ |
| `update:modelValue` | `string` | Emitted when input value changes                       |
| `focus`             | None     | Emitted when input gets focus                          |
| `blur`              | `Event`  | Emitted when input loses focus                         |
| `change`            | `string` | Emitted when input value is changed and focus is lost  |
| `prefixIconClick`   | None     | Emitted when prefix icon is clicked                    |
| `suffixIconClick`   | None     | Emitted when suffix icon is clicked                    |
| `pillRemove`        | `string` | Emitted when a pill is removed with pill ID as payload |

## Slots

| Name              | Description                        |
| ----------------- | ---------------------------------- |
| `topRightContent` | Content displayed on the top right |

## Types

```ts
export enum BoInputVariant {
	default = 'default',
	filled = 'filled',
	underlined = 'underlined',
}

export enum BoInputState {
	default = 'default',
	success = 'success',
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

// Pill Type
export type BoInputPill = {
	id: string;
	text: string;
	icon?: Icon;
};
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <bo-input placeholder="Default variant" />
  <bo-input :variant="BoInputVariant.filled" placeholder="Filled variant" />
  <bo-input :variant="BoInputVariant.underlined" placeholder="Underlined variant" />
</div>

```vue
<bo-input placeholder="Default variant" />
<bo-input :variant="BoInputVariant.filled" placeholder="Filled variant" />
<bo-input :variant="BoInputVariant.underlined" placeholder="Underlined variant" />
```

## States

<div class="flex flex-col gap-4 my-4">
  <bo-input placeholder="Default state" />
  <bo-input :state="BoInputState.success" placeholder="Success state" />
  <bo-input :state="BoInputState.error" error="This field is required" placeholder="Error state" />
</div>

```vue
<bo-input placeholder="Default state" />
<bo-input :state="BoInputState.success" placeholder="Success state" />
<bo-input :state="BoInputState.error" error="This field is required" placeholder="Error state" />
```

## Sizes

<div class="flex flex-col gap-4 my-4">
  <bo-input :size="BoInputSize.small" placeholder="Small size" />
  <bo-input :size="BoInputSize.default" placeholder="Default size" />
  <bo-input :size="BoInputSize.large" placeholder="Large size" />
</div>

```vue
<bo-input :size="BoInputSize.small" placeholder="Small size" />
<bo-input :size="BoInputSize.default" placeholder="Default size" />
<bo-input :size="BoInputSize.large" placeholder="Large size" />
```

## With Label and Description

<div class="flex flex-col gap-4 my-4">
  <bo-input label="Email address" description="We'll never share your email with anyone else." placeholder="Enter your email" />
</div>

```vue
<bo-input
	label="Email address"
	description="We'll never share your email with anyone else."
	placeholder="Enter your email"
/>
```

## With Icons

<div class="flex flex-col gap-4 my-4">
  <bo-input prefix-icon="mail" placeholder="With prefix icon" />
  <bo-input suffix-icon="search" placeholder="With suffix icon" />
  <bo-input prefix-icon="user" suffix-icon="check" placeholder="With both icons" />
</div>

```vue
<bo-input prefix-icon="mail" placeholder="With prefix icon" />
<bo-input suffix-icon="search" placeholder="With suffix icon" />
<bo-input prefix-icon="user" suffix-icon="check" placeholder="With both icons" />
```

## Required Input

<div class="flex flex-col gap-4 my-4">
  <bo-input required label="Username" placeholder="Required input" />
</div>

```vue
<bo-input required label="Username" placeholder="Required input" />
```

## Password Input

<div class="flex flex-col gap-4 my-4">
  <bo-input 
    :type="BoInputType.password" 
    placeholder="Enter password" 
    :reveal-password="true"
  />
</div>

```vue
<bo-input :type="BoInputType.password" placeholder="Enter password" :reveal-password="true" />
```

## Disabled Input

<div class="flex flex-col gap-4 my-4">
  <bo-input disabled placeholder="Disabled input" value="You cannot edit this" />
</div>

```vue
<bo-input disabled placeholder="Disabled input" value="You cannot edit this" />
```

## With Pills

The Input component supports displaying pills, allowing it to function as a multi-value input field.

<div class="flex flex-col gap-4 my-4">
  <!-- For illustration purposes only. In a real application you'd bind the pills array -->
  <bo-input 
    placeholder="Add more tags..." 
    :pills="[
      { id: '1', text: 'JavaScript' },
      { id: '2', text: 'Vue', icon: 'code' },
      { id: '3', text: 'TailwindCSS', icon: 'wind' }
    ]"
  />
</div>

```vue
<template>
	<bo-input
		placeholder="Add more tags..."
		:pills="pills"
		@pill-remove="removePill"
	/>
</template>

<script setup>
import { BoInput } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const pills = ref([
	{ id: '1', text: 'JavaScript' },
	{ id: '2', text: 'Vue', icon: 'code' },
	{ id: '3', text: 'TailwindCSS', icon: 'wind' },
]);

const removePill = (id) => {
	pills.value = pills.value.filter((pill) => pill.id !== id);
};
</script>
```

## Horizontal Scrolling Pills

When you have many pills, enable horizontal scrolling to keep the input height consistent.

<div class="flex flex-col gap-4 my-4">
  <!-- For illustration purposes only -->
  <bo-input 
    placeholder="Add more items..." 
    :horizontal-scroll="true"
    :pills="[
      { id: '1', text: 'Apple' },
      { id: '2', text: 'Banana' },
      { id: '3', text: 'Cherry' },
      { id: '4', text: 'Dragon fruit' },
      { id: '5', text: 'Elderberry' }
    ]"
  />
</div>

```vue
<bo-input placeholder="Add more items..." :horizontal-scroll="true" :pills="pills" />
```

## Event Handling

```vue
<template>
	<bo-input
		v-model="inputValue"
		placeholder="Type something..."
		@focus="handleFocus"
		@blur="handleBlur"
		@change="handleChange"
		@prefix-icon-click="handlePrefixClick"
		@suffix-icon-click="handleSuffixClick"
		@pill-remove="handlePillRemove"
	/>
</template>

<script setup>
import { BoInput } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const inputValue = ref('');

const handleFocus = () => {
	console.log('Input focused');
};

const handleBlur = (event) => {
	console.log('Input blurred', event);
};

const handleChange = (value) => {
	console.log('Input changed:', value);
};

const handlePrefixClick = () => {
	console.log('Prefix icon clicked');
};

const handleSuffixClick = () => {
	console.log('Suffix icon clicked');
};

const handlePillRemove = (id) => {
	console.log('Pill removed:', id);
};
</script>
```
