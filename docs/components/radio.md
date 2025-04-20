<script setup>
import { BoRadio } from '@/components/bo-radio';
import { BoSize } from '@/shared';
import { ref } from 'vue';

const option1 = ref('option1');
const option2 = ref('option2');
</script>

# Radio

Radio buttons allow users to select a single option from a set of mutually exclusive choices.

## Basic Example

```html
<bo-radio
	v-model="selectedOption"
	text="Select this option"
/>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-radio v-model="option1" name="demo" text="Select this option" />
</div>

### Props

| Prop name     | Type      | Default        | Description                        |
| ------------- | --------- | -------------- | ---------------------------------- |
| `id`          | `string`  | Auto-generated | ID for the radio input             |
| `text`        | `string`  | -              | Label text                         |
| `description` | `string`  | -              | Additional descriptive text        |
| `disabled`    | `boolean` | `false`        | Whether the radio is disabled      |
| `size`        | `BoSize`  | `default`      | Size of the radio button           |
| `name`        | `string`  | -              | Name attribute for grouping inputs |

### Model Value

The radio component uses Vue's `defineModel` and requires a v-model binding to function properly.

```ts
const model = defineModel<string | number | boolean>({
	required: true,
});
```

### Types

```ts
export interface BoRadioProps {
	/**
	 * The ID for the radio button
	 */
	id?: string;
	/**
	 * The text to display for the radio button
	 */
	text?: string;
	/**
	 * The description text to display below the radio button
	 */
	description?: string;
	/**
	 * Whether the radio button is disabled
	 */
	disabled?: boolean;
	/**
	 * The size of the radio button
	 */
	size?: BoSize;
	/**
	 * The name attribute for the radio input
	 */
	name?: string;
}
```

## Basic Radio Group

A basic radio group with multiple options.

<div class="flex flex-col gap-4 mb-4">
  <bo-radio v-model="option1" value="option1" name="options" text="Option 1" />
  <bo-radio v-model="option1" value="option2" name="options" text="Option 2" />
  <bo-radio v-model="option1" value="option3" name="options" text="Option 3" />
</div>

<div class="text-sm text-gray-700 dark:text-gray-300">
  Selected value: {{ option1 }}
</div>

```html
<script setup>
	import { ref } from 'vue';

	const selectedOption = ref('option1');
</script>

<template>
	<div class="flex flex-col gap-4">
		<bo-radio
			v-model="selectedOption"
			value="option1"
			name="options"
			text="Option 1"
		/>
		<bo-radio
			v-model="selectedOption"
			value="option2"
			name="options"
			text="Option 2"
		/>
		<bo-radio
			v-model="selectedOption"
			value="option3"
			name="options"
			text="Option 3"
		/>
	</div>

	<div class="text-sm text-gray-700 dark:text-gray-300">Selected value: {{ selectedOption }}</div>
</template>
```

## With Description

Radio buttons can include additional descriptive text.

<div class="flex flex-col gap-4">
  <bo-radio 
    v-model="option2" 
    value="basic" 
    name="plan" 
    text="Basic Plan" 
    description="Includes essential features for individuals."
  />
  <bo-radio 
    v-model="option2" 
    value="premium" 
    name="plan" 
    text="Premium Plan" 
    description="Includes all features and premium support."
  />
</div>

```html
<bo-radio
	v-model="selectedPlan"
	value="basic"
	name="plan"
	text="Basic Plan"
	description="Includes essential features for individuals."
/>
<bo-radio
	v-model="selectedPlan"
	value="premium"
	name="plan"
	text="Premium Plan"
	description="Includes all features and premium support."
/>
```

## Sizes

Radio buttons are available in different sizes.

<div class="grid grid-cols-5 gap-4 items-center">
  <div>
    <bo-radio 
      v-model="option1" 
      value="xs" 
      name="sizes" 
      text="Extra Small" 
      :size="BoSize.extra_small" 
    />
    <p class="text-sm mt-2">Extra Small</p>
  </div>
  <div>
    <bo-radio 
      v-model="option1" 
      value="sm" 
      name="sizes" 
      text="Small" 
      :size="BoSize.small" 
    />
    <p class="text-sm mt-2">Small</p>
  </div>
  <div>
    <bo-radio 
      v-model="option1" 
      value="default" 
      name="sizes" 
      text="Default" 
      :size="BoSize.default" 
    />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div>
    <bo-radio 
      v-model="option1" 
      value="lg" 
      name="sizes" 
      text="Large" 
      :size="BoSize.large" 
    />
    <p class="text-sm mt-2">Large</p>
  </div>
  <div>
    <bo-radio 
      v-model="option1" 
      value="xl" 
      name="sizes" 
      text="Extra Large" 
      :size="BoSize.extra_large" 
    />
    <p class="text-sm mt-2">Extra Large</p>
  </div>
</div>

```html
<bo-radio
	v-model="selectedSize"
	value="xs"
	name="sizes"
	text="Extra Small"
	:size="BoSize.extra_small"
/>
<bo-radio
	v-model="selectedSize"
	value="sm"
	name="sizes"
	text="Small"
	:size="BoSize.small"
/>
<bo-radio
	v-model="selectedSize"
	value="default"
	name="sizes"
	text="Default"
	:size="BoSize.default"
/>
<bo-radio
	v-model="selectedSize"
	value="lg"
	name="sizes"
	text="Large"
	:size="BoSize.large"
/>
<bo-radio
	v-model="selectedSize"
	value="xl"
	name="sizes"
	text="Extra Large"
	:size="BoSize.extra_large"
/>
```

## Disabled State

Radio buttons can be disabled to prevent user interaction.

<div class="flex flex-col gap-4">
  <bo-radio 
    v-model="option1" 
    value="enabled" 
    name="state" 
    text="Enabled option" 
  />
  <bo-radio 
    v-model="option1" 
    value="disabled" 
    name="state" 
    text="Disabled option" 
    :disabled="true" 
  />
</div>

```html
<bo-radio
	v-model="selectedState"
	value="enabled"
	name="state"
	text="Enabled option"
/>
<bo-radio
	v-model="selectedState"
	value="disabled"
	name="state"
	text="Disabled option"
	:disabled="true"
/>
```
