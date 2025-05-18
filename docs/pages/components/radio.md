<script setup>
import BoRadio from '@/components/radio/bo-radio.vue';
import { BoRadioVariant } from '@/components/radio';
import { BoSize } from '@/shared/bo-size';
</script>

# Radio

A customizable radio button component for selecting a single option from a group of choices.

```js
import { BoRadio } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-radio
		v-model="selectedOption"
		name="example"
		value="option1"
		label="Option 1"
	/>
	<bo-radio
		v-model="selectedOption"
		name="example"
		value="option2"
		label="Option 2"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio } from '@mrksbnc/bamboo';

const selectedOption = ref('option1');
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-radio name="demo" value="option1" model-value="option1" label="Option 1" />
  <bo-radio name="demo" value="option2" model-value="option1" label="Option 2" />
</div>

## Props

| Name          | Type             | Default     | Description                                             |
| ------------- | ---------------- | ----------- | ------------------------------------------------------- |
| `id`          | `string`         | `auto`      | Unique ID for the radio button                          |
| `name`        | `string`         | Required    | Name attribute for the radio group                      |
| `value`       | `string`         | Required    | Value attribute for the radio button                    |
| `modelValue`  | `string`         | `undefined` | Current selected value in the group (v-model)           |
| `disabled`    | `boolean`        | `false`     | Whether the radio button is disabled                    |
| `label`       | `string`         | `undefined` | Text label for the radio button                         |
| `size`        | `BoSize`         | `md`        | Size of the radio button (xs, sm, md, lg, xl)           |
| `error`       | `string`         | `undefined` | Error message to display below the radio button         |
| `variant`     | `BoRadioVariant` | `primary`   | Color variant of the radio button                       |
| `customColor` | `string`         | `undefined` | Custom color (HEX, RGB) for radio button and focus ring |

## Events

| Name                | Payload  | Description                      |
| ------------------- | -------- | -------------------------------- |
| `update:modelValue` | `string` | Emitted when selection changes   |
| `change`            | `string` | Emitted when radio value changes |

## Slots

| Name      | Description                 |
| --------- | --------------------------- |
| `default` | Custom radio button content |

## Types

```ts
export enum BoRadioVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	dark = 'dark',
}

export interface BoRadioProps {
	id?: string;
	name: string;
	value: string;
	modelValue?: string;
	disabled?: boolean;
	label?: string;
	size?: BoSize;
	variant?: BoRadioVariant;
	customColor?: string;
}
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <div class="flex gap-4">
    <bo-radio :variant="BoRadioVariant.primary" name="variant-demo1" value="primary" model-value="primary" label="Primary" />
    <bo-radio :variant="BoRadioVariant.secondary" name="variant-demo2" value="secondary" model-value="secondary" label="Secondary" />
  </div>
  <div class="flex gap-4">
    <bo-radio :variant="BoRadioVariant.success" name="variant-demo3" value="success" model-value="success" label="Success" />
    <bo-radio :variant="BoRadioVariant.danger" name="variant-demo4" value="danger" model-value="danger" label="Danger" />
  </div>
  <div class="flex gap-4">
    <bo-radio :variant="BoRadioVariant.warning" name="variant-demo5" value="warning" model-value="warning" label="Warning" />
    <bo-radio :variant="BoRadioVariant.dark" name="variant-demo6" value="dark" model-value="dark" label="Dark" />
  </div>
</div>

```vue
<bo-radio :variant="BoRadioVariant.primary" name="variant-group" value="primary" label="Primary" />
<bo-radio
	:variant="BoRadioVariant.secondary"
	name="variant-group"
	value="secondary"
	label="Secondary"
/>
<bo-radio :variant="BoRadioVariant.success" name="variant-group" value="success" label="Success" />
<bo-radio :variant="BoRadioVariant.danger" name="variant-group" value="danger" label="Danger" />
<bo-radio :variant="BoRadioVariant.warning" name="variant-group" value="warning" label="Warning" />
<bo-radio :variant="BoRadioVariant.dark" name="variant-group" value="dark" label="Dark" />
```

## Sizes

<div class="flex flex-col gap-4 my-4">
  <div class="flex items-center gap-4">
    <bo-radio :size="BoSize.extra_small" name="size-demo1" value="xs" model-value="xs" label="Extra Small" />
    <bo-radio :size="BoSize.small" name="size-demo2" value="sm" model-value="sm" label="Small" />
  </div>
  <div class="flex items-center gap-4">
    <bo-radio :size="BoSize.default" name="size-demo3" value="default" model-value="default" label="Default" />
    <bo-radio :size="BoSize.large" name="size-demo4" value="lg" model-value="lg" label="Large" />
  </div>
  <div class="flex items-center gap-4">
    <bo-radio :size="BoSize.extra_large" name="size-demo5" value="xl" model-value="xl" label="Extra Large" />
  </div>
</div>

```vue
<bo-radio :size="BoSize.extra_small" name="size-group" value="xs" label="Extra Small" />
<bo-radio :size="BoSize.small" name="size-group" value="sm" label="Small" />
<bo-radio :size="BoSize.default" name="size-group" value="default" label="Default" />
<bo-radio :size="BoSize.large" name="size-group" value="lg" label="Large" />
<bo-radio :size="BoSize.extra_large" name="size-group" value="xl" label="Extra Large" />
```

## States

### Selected

<div class="flex gap-4 my-4">
  <bo-radio name="state-demo1" value="selected" model-value="selected" label="Selected Radio" />
</div>

```vue
<bo-radio name="state" value="selected" model-value="selected" label="Selected Radio" />
```

### Unselected

<div class="flex gap-4 my-4">
  <bo-radio name="state-demo2" value="unselected" model-value="other" label="Unselected Radio" />
</div>

```vue
<bo-radio name="state" value="unselected" model-value="other" label="Unselected Radio" />
```

### Disabled

<div class="flex gap-4 my-4">
  <bo-radio disabled name="state-demo3" value="disabled" label="Disabled Radio" />
  <bo-radio disabled name="state-demo4" value="disabled-selected" model-value="disabled-selected" label="Disabled Selected Radio" />
</div>

```vue
<bo-radio disabled name="state" value="disabled" label="Disabled Radio" />
<bo-radio
	disabled
	name="state"
	value="disabled-selected"
	model-value="disabled-selected"
	label="Disabled Selected Radio"
/>
```

### Error State

<div class="flex gap-4 my-4">
  <bo-radio name="state-demo5" value="error" label="Radio with Error" error="This field is required" />
</div>

```vue
<bo-radio name="state" value="error" label="Radio with Error" error="This field is required" />
```

## Custom Content

<div class="flex flex-col gap-4 my-4">
  <bo-radio name="custom-demo" value="custom" model-value="custom">
    <div>
      <span class="font-medium">Custom Content</span>
      <p class="text-sm text-gray-500">You can use any custom content here</p>
    </div>
  </bo-radio>
</div>

```vue
<bo-radio name="custom" value="custom">
  <div>
    <span class="font-medium">Custom Content</span>
    <p class="text-sm text-gray-500">You can use any custom content here</p>
  </div>
</bo-radio>
```

## Event Handling

```vue
<template>
	<bo-radio
		v-model="selectedOption"
		name="event-example"
		value="option1"
		label="Option 1"
		@change="handleChange"
	/>
	<bo-radio
		v-model="selectedOption"
		name="event-example"
		value="option2"
		label="Option 2"
		@change="handleChange"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio } from '@mrksbnc/bamboo';

const selectedOption = ref('option1');

const handleChange = (value) => {
	console.log('Selected option:', value);
};
</script>
```
