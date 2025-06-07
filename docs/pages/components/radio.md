<script setup>
import BoRadio from '@/components/radio/bo-radio.vue';
import BoRadioGroup from '@/components/radio/bo-radio-group.vue';
import { BoRadioGroupOrientation } from '@/components/radio/bo-radio-group';
import { ref } from 'vue';

const selected = ref('option-b');
const selectedHorizontal = ref('small');
const selectedDisabled = ref('');
const customSelected = ref('premium');
</script>

# Radio

Radio components allow users to select a single option from a set of mutually exclusive choices.

```js
import { BoRadio, BoRadioGroup } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-radio-group v-model="selected" name="basic-example">
  <bo-radio value="option-a" label="Option A" />
  <bo-radio value="option-b" label="Option B" />
  <bo-radio value="option-c" label="Option C" />
</bo-radio-group>

```vue
<template>
	<bo-radio-group
		v-model="selected"
		name="basic-example"
	>
		<bo-radio
			value="option-a"
			label="Option A"
		/>
		<bo-radio
			value="option-b"
			label="Option B"
		/>
		<bo-radio
			value="option-c"
			label="Option C"
		/>
	</bo-radio-group>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio, BoRadioGroup } from '@mrksbnc/bamboo';

const selected = ref('option-b');
</script>
```

## Props

### BoRadio Props

| Name          | Type      | Default | Description                                |
| ------------- | --------- | ------- | ------------------------------------------ |
| `id`          | `string`  | `auto`  | Unique identifier for the radio button     |
| `value`       | `string`  | -       | Value of the radio button                  |
| `name`        | `string`  | -       | Name attribute for the radio button        |
| `disabled`    | `boolean` | `false` | Whether the radio button is disabled       |
| `label`       | `string`  | -       | Label text displayed next to the radio     |
| `description` | `string`  | -       | Description text displayed below the label |

### BoRadioGroup Props

| Name              | Type                      | Default    | Description                                  |
| ----------------- | ------------------------- | ---------- | -------------------------------------------- |
| `modelValue`      | `string`                  | `''`       | Currently selected value (v-model)           |
| `name`            | `string`                  | `auto`     | Name attribute for all radios in the group   |
| `disabled`        | `boolean`                 | `false`    | Whether all radios in the group are disabled |
| `defaultValue`    | `string`                  | -          | Initially selected value                     |
| `orientation`     | `BoRadioGroupOrientation` | `vertical` | Layout orientation                           |
| `ariaLabelledBy`  | `string`                  | -          | ARIA labelledby attribute                    |
| `ariaDescribedBy` | `string`                  | -          | ARIA describedby attribute                   |

## Events

### BoRadioGroup Events

| Name                | Payload  | Description                             |
| ------------------- | -------- | --------------------------------------- |
| `update:modelValue` | `string` | Emitted when the selected value changes |
| `change`            | `string` | Emitted when the selected value changes |

## Types

```ts
interface BoRadioProps {
	/** Unique identifier for the radio button */
	id?: string;
	/** Whether the radio button is disabled */
	disabled?: boolean;
	/** Value of the radio button */
	value?: string;
	/** Name attribute for the radio button */
	name?: string;
	/** Label text displayed next to the radio button */
	label?: string;
	/** Additional description text displayed below the label */
	description?: string;
}

enum BoRadioGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

interface BoRadioGroupProps {
	/** Currently selected value (v-model) */
	modelValue?: string;
	/** Name attribute for all radio buttons in the group */
	name?: string;
	/** Whether all radio buttons in the group are disabled */
	disabled?: boolean;
	/** Initially selected value */
	defaultValue?: string;
	/** The orientation of the radio buttons in the group */
	orientation?: BoRadioGroupOrientation;
	/** ARIA labelledby attribute for accessibility */
	ariaLabelledBy?: string;
	/** ARIA describedby attribute for accessibility */
	ariaDescribedBy?: string;
}
```

## Slots

### BoRadio Slots

| Name    | Description                       |
| ------- | --------------------------------- |
| `label` | Custom content for the label area |

### BoRadioGroup Slots

| Name      | Description                            |
| --------- | -------------------------------------- |
| `default` | Place `BoRadio` components as children |

## Orientation

Radio groups can be displayed horizontally or vertically:

<bo-radio-group v-model="selectedHorizontal" :orientation="BoRadioGroupOrientation.horizontal" name="size-selection">
  <bo-radio value="small" label="Small" />
  <bo-radio value="medium" label="Medium" />
  <bo-radio value="large" label="Large" />
</bo-radio-group>

```vue
<template>
	<bo-radio-group
		v-model="selected"
		:orientation="BoRadioGroupOrientation.horizontal"
		name="size-selection"
	>
		<bo-radio
			value="small"
			label="Small"
		/>
		<bo-radio
			value="medium"
			label="Medium"
		/>
		<bo-radio
			value="large"
			label="Large"
		/>
	</bo-radio-group>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio, BoRadioGroup, BoRadioGroupOrientation } from '@mrksbnc/bamboo';

const selected = ref('medium');
</script>
```

## With Descriptions

Radio options can include additional description text:

<bo-radio-group v-model="customSelected" name="plan-selection">
  <bo-radio 
    value="basic" 
    label="Basic Plan" 
    description="Perfect for individuals getting started" 
  />
  <bo-radio 
    value="premium" 
    label="Premium Plan" 
    description="Great for small teams and growing businesses" 
  />
  <bo-radio 
    value="enterprise" 
    label="Enterprise Plan" 
    description="Advanced features for large organizations" 
  />
</bo-radio-group>

```vue
<template>
	<bo-radio-group
		v-model="selected"
		name="plan-selection"
	>
		<bo-radio
			value="basic"
			label="Basic Plan"
			description="Perfect for individuals getting started"
		/>
		<bo-radio
			value="premium"
			label="Premium Plan"
			description="Great for small teams and growing businesses"
		/>
		<bo-radio
			value="enterprise"
			label="Enterprise Plan"
			description="Advanced features for large organizations"
		/>
	</bo-radio-group>
</template>
```

## Disabled State

Radio groups and individual radios can be disabled:

<bo-radio-group v-model="selectedDisabled" :disabled="true" name="disabled-group">
  <bo-radio value="option-1" label="Disabled Option 1" />
  <bo-radio value="option-2" label="Disabled Option 2" />
</bo-radio-group>

<bo-radio-group v-model="selected" name="partial-disabled">
  <bo-radio value="enabled" label="Enabled Option" />
  <bo-radio value="disabled" label="Disabled Option" :disabled="true" />
</bo-radio-group>

```vue
<template>
	<!-- Entire group disabled -->
	<bo-radio-group
		v-model="selected"
		:disabled="true"
	>
		<bo-radio
			value="option-1"
			label="Disabled Option 1"
		/>
		<bo-radio
			value="option-2"
			label="Disabled Option 2"
		/>
	</bo-radio-group>

	<!-- Individual radio disabled -->
	<bo-radio-group v-model="selected">
		<bo-radio
			value="enabled"
			label="Enabled Option"
		/>
		<bo-radio
			value="disabled"
			label="Disabled Option"
			:disabled="true"
		/>
	</bo-radio-group>
</template>
```

## Custom Label Content

Use slots to provide custom label content:

<bo-radio-group v-model="selected" name="custom-labels">
  <bo-radio value="custom-a">
    <template #label>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span class="font-semibold">Premium Feature</span>
      </div>
    </template>
  </bo-radio>
  <bo-radio value="custom-b">
    <template #label>
      <div class="flex items-center gap-2">
        <span class="text-blue-600">⭐</span>
        <span class="font-semibold">Popular Choice</span>
      </div>
    </template>
  </bo-radio>
</bo-radio-group>

```vue
<template>
	<bo-radio-group v-model="selected">
		<bo-radio value="custom-a">
			<template #label>
				<div class="flex items-center gap-2">
					<span class="text-green-600">✓</span>
					<span class="font-semibold">Premium Feature</span>
				</div>
			</template>
		</bo-radio>
		<bo-radio value="custom-b">
			<template #label>
				<div class="flex items-center gap-2">
					<span class="text-blue-600">⭐</span>
					<span class="font-semibold">Popular Choice</span>
				</div>
			</template>
		</bo-radio>
	</bo-radio-group>
</template>
```
