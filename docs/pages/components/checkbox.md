<script setup>
import BoCheckbox from '@/components/checkbox/bo-checkbox.vue';
import { BoSize } from '@/shared/bo-size';

const checkedTrue = true;
const checkedFalse = false;

const handleInput = (event) => {
	console.log('Input event:', event);
};

const handleChange = (event) => {
	console.log('Change event:', event);
};
</script>

# Checkbox

A customizable checkbox component for handling boolean or multiple-choice selections.

```js
import { BoCheckbox } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-checkbox
		v-model="checkedFalse"
		label="Accept terms and conditions"
	/>
</template>

<script setup>
import { BoCheckbox } from '@mrksbnc/bamboo';

const checkedFalse = false;
</script>
```

<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" />

## Props

| Name          | Type      | Default   | Description                             |
| ------------- | --------- | --------- | --------------------------------------- |
| `id`          | `string`  | `auto`    | Unique ID for the checkbox              |
| `name`        | `string`  | `''`      | Name attribute for the checkbox group   |
| `value`       | `string`  | `''`      | Value attribute for the checkbox button |
| `disabled`    | `boolean` | `false`   | Whether the checkbox is disabled        |
| `label`       | `string`  | `''`      | Text label for the checkbox             |
| `description` | `string`  | `''`      | Description for the checkbox            |
| `size`        | `BoSize`  | `default` | Size of the checkbox                    |

## Types

```ts
interface BoCheckboxProps {
	id?: string;
	name?: string;
	value?: string;
	disabled?: boolean;
	label?: string;
	description?: string;
	size?: BoSize;
}
```

## Sizes

The checkbox component can be sized using the `size` prop.

<div class="grid grid-cols-2 gap-4">
	<span>Extra Small</span>
	<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" size="extra-small" />
	<span>Small</span>
	<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" size="small" />
	<span>Default</span>
	<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" size="default" />
	<span>Large</span>
	<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" size="large" />
	<span>Extra Large</span>
	<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" size="extra-large" />
</div>

## Disabled

The checkbox component can be disabled using the `disabled` prop.

<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" disabled />
<bo-checkbox v-model="checkedTrue" label="Accept terms and conditions" disabled />

## Checked

The checkbox component can be checked by passing `true` to the `v-model` prop.

<bo-checkbox v-model="checkedTrue" label="Accept terms and conditions" checked />

## Description

To include more information about the checkbox, use the `description` prop. This will render a text below the
label of the checkbox.

<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" description="This is a description of the checkbox." />

## Slots

The checkbox component can render custom content in place of the label using the `label` slot.

<bo-checkbox v-model="checkedFalse">
    <template #label>
    	<span>😶😶😶</span>
    </template>
</bo-checkbox>

## Event Handling

The component emits the following events:

| Name                | Payload   | Description          |
| ------------------- | --------- | -------------------- |
| `input`             | `Event`   | Emitted when clicked |
| `change`            | `Event`   | Emitted when clicked |
| `update:modelValue` | `boolean` | Emitted when clicked |

<bo-checkbox v-model="checkedFalse" label="Accept terms and conditions" @input="handleInput" @change="handleChange" />

```vue
<template>
	<bo-checkbox
		v-model="checkedFalse"
		label="Accept terms and conditions"
		@input="handleInput"
		@change="handleChange"
	/>
</template>

<script setup>
import { BoCheckbox } from '@mrksbnc/bamboo';

const checkedFalse = false;

const handleInput = (event) => {
	console.log('Input event:', event);
};

const handleChange = (event) => {
	console.log('Change event:', event);
};
</script>
```
