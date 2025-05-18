<script setup>
import BoRadioGroup from '@/components/radio-group/bo-radio-group.vue';
import { BoRadioGroupOrientation } from '@/components/radio-group';
import BoRadio from '@/components/radio/bo-radio.vue';
import { BoRadioVariant } from '@/components/radio';
import { BoSize } from '@/shared/bo-size';
</script>

# Radio Group

A container component for organizing radio buttons with consistent styling and layout.

```js
import { BoRadioGroup } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-radio-group label="Select an option">
		<bo-radio
			v-model="selected"
			name="options"
			value="option1"
			label="Option 1"
		/>
		<bo-radio
			v-model="selected"
			name="options"
			value="option2"
			label="Option 2"
		/>
		<bo-radio
			v-model="selected"
			name="options"
			value="option3"
			label="Option 3"
		/>
	</bo-radio-group>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadioGroup, BoRadio } from '@mrksbnc/bamboo';

const selected = ref('option1');
</script>
```

<hr />
<div class="flex flex-col gap-4 my-4">
  <bo-radio-group label="Select an option">
    <bo-radio name="demo-group" value="option1" model-value="option1" label="Option 1" />
    <bo-radio name="demo-group" value="option2" model-value="option1" label="Option 2" />
    <bo-radio name="demo-group" value="option3" model-value="option1" label="Option 3" />
  </bo-radio-group>
</div>

## Props

| Name          | Type                      | Default     | Description                         |
| ------------- | ------------------------- | ----------- | ----------------------------------- |
| `label`       | `string`                  | `undefined` | Label for the radio group           |
| `description` | `string`                  | `undefined` | Description for the radio group     |
| `orientation` | `BoRadioGroupOrientation` | `vertical`  | Layout orientation of radio buttons |
| `cssClass`    | `string`                  | `undefined` | Additional CSS classes              |

## Slots

| Name      | Description                    |
| --------- | ------------------------------ |
| `default` | Radio buttons within the group |

## Types

```ts
export enum BoRadioGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

export interface BoRadioGroupProps {
	label?: string;
	description?: string;
	orientation?: BoRadioGroupOrientation;
	cssClass?: string;
}
```

## Orientations

### Vertical (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-radio-group 
    label="Vertical Radio Group" 
    :orientation="BoRadioGroupOrientation.vertical"
  >
    <bo-radio name="vertical-group" value="option1" model-value="option1" label="Option 1" />
    <bo-radio name="vertical-group" value="option2" model-value="option1" label="Option 2" />
    <bo-radio name="vertical-group" value="option3" model-value="option1" label="Option 3" />
  </bo-radio-group>
</div>

```vue
<bo-radio-group label="Vertical Radio Group" :orientation="BoRadioGroupOrientation.vertical">
  <bo-radio name="vertical-group" value="option1" v-model="selected" label="Option 1" />
  <bo-radio name="vertical-group" value="option2" v-model="selected" label="Option 2" />
  <bo-radio name="vertical-group" value="option3" v-model="selected" label="Option 3" />
</bo-radio-group>
```

### Horizontal

<div class="flex flex-col gap-4 my-4">
  <bo-radio-group 
    label="Horizontal Radio Group" 
    :orientation="BoRadioGroupOrientation.horizontal"
  >
    <bo-radio name="horizontal-group" value="option1" model-value="option1" label="Option 1" />
    <bo-radio name="horizontal-group" value="option2" model-value="option1" label="Option 2" />
    <bo-radio name="horizontal-group" value="option3" model-value="option1" label="Option 3" />
  </bo-radio-group>
</div>

```vue
<bo-radio-group label="Horizontal Radio Group" :orientation="BoRadioGroupOrientation.horizontal">
  <bo-radio name="horizontal-group" value="option1" v-model="selected" label="Option 1" />
  <bo-radio name="horizontal-group" value="option2" v-model="selected" label="Option 2" />
  <bo-radio name="horizontal-group" value="option3" v-model="selected" label="Option 3" />
</bo-radio-group>
```

## With Description

<div class="flex flex-col gap-4 my-4">
  <bo-radio-group 
    label="Subscription Plan" 
    description="Select the plan that best fits your needs"
  >
    <bo-radio name="plan-group" value="basic" model-value="basic" label="Basic Plan" />
    <bo-radio name="plan-group" value="pro" model-value="basic" label="Pro Plan" />
    <bo-radio name="plan-group" value="enterprise" model-value="basic" label="Enterprise Plan" />
  </bo-radio-group>
</div>

```vue
<bo-radio-group label="Subscription Plan" description="Select the plan that best fits your needs">
  <bo-radio name="plan-group" value="basic" v-model="plan" label="Basic Plan" />
  <bo-radio name="plan-group" value="pro" v-model="plan" label="Pro Plan" />
  <bo-radio name="plan-group" value="enterprise" v-model="plan" label="Enterprise Plan" />
</bo-radio-group>
```

## Radio Variants

<div class="flex flex-col gap-4 my-4">
  <bo-radio-group label="Radio Variants">
    <bo-radio :variant="BoRadioVariant.primary" name="variant-group" value="primary" model-value="primary" label="Primary" />
    <bo-radio :variant="BoRadioVariant.secondary" name="variant-group2" value="secondary" model-value="secondary" label="Secondary" />
    <bo-radio :variant="BoRadioVariant.success" name="variant-group3" value="success" model-value="success" label="Success" />
    <bo-radio :variant="BoRadioVariant.danger" name="variant-group4" value="danger" model-value="danger" label="Danger" />
  </bo-radio-group>
</div>

```vue
<bo-radio-group label="Radio Variants">
  <bo-radio :variant="BoRadioVariant.primary" name="variant-group" value="primary" v-model="variant" label="Primary" />
  <bo-radio :variant="BoRadioVariant.secondary" name="variant-group" value="secondary" v-model="variant" label="Secondary" />
  <bo-radio :variant="BoRadioVariant.success" name="variant-group" value="success" v-model="variant" label="Success" />
  <bo-radio :variant="BoRadioVariant.danger" name="variant-group" value="danger" v-model="variant" label="Danger" />
</bo-radio-group>
```
