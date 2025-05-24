<script setup>
import { BoRadio, BoRadioGroup } from '@/components/radio';
import { InjectionKey } from '@/shared/injection-key';
import { ref, provide } from 'vue';

const selected = ref('A');
const selectedRadioDemo = ref('A');

const radioProvide = provide(InjectionKey.RadioGroup, {
	selectedValue: selectedRadioDemo,
	name: 'group1',
	disabled: false,
	select: (value) => {
		console.log('Selected:', value);
	},
	registerItem: (value, isDefault) => {
		console.log('Registered:', value, isDefault);
	},
});
</script>

# Radio

Radio components allow users to select a single option from a set. Use radio buttons for mutually exclusive choices, typically presented in a group.

```js
import { BoRadio, BoRadioGroup } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-radio
		label="Option 1"
		value="option1"
		name="example"
	/>
</template>

<script setup>
import { BoRadio } from '@mrksbnc/bamboo';
</script>
```

<bo-radio label="Option 1" value="option1" name="example" />

## Radio Group

To present a set of related options, use `BoRadioGroup` to manage selection state.

```vue
<template>
	<bo-radio-group
		v-model="selected"
		name="group1"
	>
		<bo-radio
			label="Option A"
			value="A"
		/>
		<bo-radio
			label="Option B"
			value="B"
		/>
		<bo-radio
			label="Option C"
			value="C"
		/>
	</bo-radio-group>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio, BoRadioGroup } from '@mrksbnc/bamboo';
const selected = ref('A');
</script>
```

<bo-radio-group v-model="selectedRadioDemo" name="group1">
  <bo-radio label="Option A" value="A" />
  <bo-radio label="Option B" value="B" />
  <bo-radio label="Option C" value="C" />
</bo-radio-group>

## Props

### BoRadio Props

| Name          | Type      | Default | Description                                |
| ------------- | --------- | ------- | ------------------------------------------ |
| `id`          | `string`  | auto    | Unique identifier for the radio button     |
| `name`        | `string`  | ''      | Name attribute for the radio button        |
| `value`       | `string`  | ''      | Value of the radio button                  |
| `disabled`    | `boolean` | `false` | Whether the radio button is disabled       |
| `label`       | `string`  | ''      | Label text displayed next to the radio     |
| `description` | `string`  | ''      | Description text displayed below the label |

### BoRadioGroup Props

| Name           | Type                      | Default    | Description                                    |
| -------------- | ------------------------- | ---------- | ---------------------------------------------- |
| `name`         | `string`                  | auto       | Name attribute for all radios in the group     |
| `disabled`     | `boolean`                 | `false`    | Whether all radios in the group are disabled   |
| `defaultValue` | `string`                  | `''`       | Initially selected value                       |
| `orientation`  | `BoRadioGroupOrientation` | `vertical` | Layout orientation: `vertical` or `horizontal` |

## Types & Enums

```ts
interface BoRadioProps {
	/** Unique identifier for the radio button */
	id?: string;
	/** Whether the radio button is disabled */
	disabled?: boolean;
	/**  Value of the radio button */
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
	/** Name attribute for all radio buttons in the group*/
	name?: string;
	/** Whether all radio buttons in the group are disabled */
	disabled?: boolean;
	/** Initially selected value */
	defaultValue?: string;
	/** The orientation of the radio buttons in the group */
	orientation?: BoRadioGroupOrientation;
}

interface RadioGroup {
	/** Currently selected value */
	selectedValue: string | null;
	/** Name attribute for all radio buttons in the group */
	name: string;
	/** Whether all radio buttons in the group are disabled */
	disabled: boolean;
	/** Callback to select a radio button */
	select: (value: string) => void;
	/** Callback to register a radio button */
	registerItem: (value: string, isDefault: boolean) => void;
}
```

## Events

### BoRadioGroup Events

| Name                | Payload  | Description                             |
| ------------------- | -------- | --------------------------------------- |
| `update:modelValue` | `string` | Emitted when the selected value changes |
| `change`            | `string` | Emitted when the selected value changes |

## Slots

### BoRadio Slots

| Name    | Description                       |
| ------- | --------------------------------- |
| `label` | Custom content for the label area |

### BoRadioGroup Slots

| Name      | Description                            |
| --------- | -------------------------------------- |
| `default` | Place `BoRadio` components as children |

## Disabled

You can disable the entire group or individual radios using the `disabled` prop.

<bo-radio label="Disabled Single" value="single" :disabled="true" />
<hr />
<bo-radio-group v-model="selected" :disabled="true">
  <bo-radio label="Disabled A" value="A" />
  <bo-radio label="Disabled B" value="B" />
</bo-radio-group>

```vue
<bo-radio-group v-model="selected" :disabled="true">
  <bo-radio label="Disabled A" value="A" />
  <bo-radio label="Disabled B" value="B" />
</bo-radio-group>

<bo-radio label="Disabled Single" value="single" :disabled="true" />
```

## Description

Add a description to provide additional context for a radio option.

<bo-radio
	label="Option with description"
	value="desc"
	description="Additional information about this option."
/>

```vue
<bo-radio
	label="Option with description"
	value="desc"
	description="Additional information about this option."
/>
```

## Orientation

The radio group can be displayed vertically (default) or horizontally using the `orientation` prop.

### Vertical (Default)

<bo-radio-group v-model="selected" orientation="vertical">
  <bo-radio label="Top" value="top" />
  <bo-radio label="Middle" value="middle" />
  <bo-radio label="Bottom" value="bottom" />
</bo-radio-group>

```vue
<bo-radio-group v-model="selected">
  <bo-radio label="Top" value="top" />
  <bo-radio label="Middle" value="middle" />
  <bo-radio label="Bottom" value="bottom" />
</bo-radio-group>
```

### Horizontal

<bo-radio-group v-model="selected" orientation="horizontal">
  <bo-radio label="Left" value="left" />
  <bo-radio label="Center" value="center" />
  <bo-radio label="Right" value="right" />
</bo-radio-group>

```vue
<bo-radio-group v-model="selected" orientation="horizontal">
  <bo-radio label="Left" value="left" />
  <bo-radio label="Center" value="center" />
  <bo-radio label="Right" value="right" />
</bo-radio-group>
```
