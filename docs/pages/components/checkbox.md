<script setup>
import BoCheckbox from '@/components/checkbox/bo-checkbox.vue';
import BoCheckboxGroup from '@/components/checkbox/bo-checkbox-group.vue'
import { ref, provide } from 'vue';

const checked = ref([]);
const checkedSingle = ref(false);

</script>

# Checkbox

Checkbox is a customizable component built with Flowbite design patterns for handling boolean or multiple-choice selections. Use checkboxes for options where users can select one or more items from a list. For grouped checkboxes, use `BoCheckboxGroup` to manage the selection state.

The component follows Flowbite's design system with proper styling, dark mode support, and accessibility features.

```js
import { BoCheckbox, BoCheckboxGroup } from '@mrksbnc/bamboo';
```

<bo-checkbox
	v-model="checkedSingle"
	label="Accept terms and conditions"
/>

## Basic Usage

```vue
<template>
	<bo-checkbox
		v-model="checkedSingle"
		label="Accept terms and conditions"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoCheckbox } from '@mrksbnc/bamboo';
const checkedSingle = ref(false);
</script>
```

<bo-checkbox v-model="checkedSingle" label="Accept terms and conditions" />

## Checkbox Group

To present a set of related options, use `BoCheckboxGroup` to manage an array of selected values.

```vue
<template>
	<bo-checkbox-group
		v-model="checked"
		name="fruits"
	>
		<bo-checkbox
			label="Apple"
			value="apple"
		/>
		<bo-checkbox
			label="Banana"
			value="banana"
		/>
		<bo-checkbox
			label="Orange"
			value="orange"
		/>
	</bo-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';
import { BoCheckbox, BoCheckboxGroup } from '@mrksbnc/bamboo';
const checked = ref([]);
</script>
```

<bo-checkbox-group v-model="checked" name="fruits">
  <bo-checkbox label="Apple" value="apple" />
  <bo-checkbox label="Banana" value="banana" />
  <bo-checkbox label="Orange" value="orange" />
</bo-checkbox-group>

## Props

### BoCheckbox Props

| Name          | Type      | Default | Description                                 |
| ------------- | --------- | ------- | ------------------------------------------- |
| `modelValue`  | `boolean` | `false` | The checked state of the checkbox (v-model) |
| `id`          | `string`  | auto    | Unique ID for the checkbox                  |
| `name`        | `string`  | auto    | Name attribute for the checkbox             |
| `value`       | `string`  | ''      | Value attribute for the checkbox            |
| `disabled`    | `boolean` | `false` | Whether the checkbox is disabled            |
| `label`       | `string`  | ''      | Text label for the checkbox                 |
| `description` | `string`  | ''      | Description for the checkbox                |

### BoCheckboxGroup Props

| Name           | Type                         | Default    | Description                                      |
| -------------- | ---------------------------- | ---------- | ------------------------------------------------ |
| `modelValue`   | `string[]`                   | `[]`       | Array of selected values (v-model)               |
| `name`         | `string`                     | auto       | Name attribute for all checkboxes in the group   |
| `disabled`     | `boolean`                    | `false`    | Whether all checkboxes in the group are disabled |
| `defaultValue` | `string[]`                   | `[]`       | Initially selected values                        |
| `orientation`  | `BoCheckboxGroupOrientation` | `vertical` | Layout orientation: `vertical` or `horizontal`   |

## Types & Enums

```ts
interface BoCheckboxProps {
	/** The checked state of the checkbox (v-model) */
	modelValue?: boolean;
	/** Unique ID for the checkbox */
	id?: string;
	/** Name attribute for the checkbox */
	name?: string;
	/** Value attribute for the checkbox */
	value?: string;
	/** Whether the checkbox is disabled */
	disabled?: boolean;
	/** Text label for the checkbox */
	label?: string;
	/** Description for the checkbox */
	description?: string;
}

enum BoCheckboxGroupOrientation {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

interface BoCheckboxGroupProps {
	/** Array of selected values (v-model) */
	modelValue?: string[];
	/** Name attribute for all checkboxes in the group*/
	name?: string;
	/** Whether all checkboxes in the group are disabled */
	disabled?: boolean;
	/** Initially selected values */
	defaultValue?: string[];
	/** The orientation of the checkboxes in the group */
	orientation?: BoCheckboxGroupOrientation;
}

interface BoCheckboxGroup {
	/** Currently selected values */
	selectedValues: string[];
	/** Name attribute for all checkboxes in the group */
	name: string;
	/** Whether all checkboxes in the group are disabled */
	disabled: boolean;
	/** Callback to select/deselect a checkbox */
	select: (value: string) => void;
	/** Callback to register a checkbox */
	registerItem: (value: string) => void;
}
```

## Events

### BoCheckbox Events

| Name                | Payload   | Description          |
| ------------------- | --------- | -------------------- |
| `change`            | `Event`   | Emitted on change    |
| `update:modelValue` | `boolean` | Emitted when checked |

### BoCheckboxGroup Events

| Name                | Payload    | Description                             |
| ------------------- | ---------- | --------------------------------------- |
| `change`            | `string[]` | Emitted when the selected values change |
| `update:modelValue` | `string[]` | Emitted when the selected values change |

## Slots

### BoCheckbox Slots

| Name    | Description                       |
| ------- | --------------------------------- |
| `label` | Custom content for the label area |

### BoCheckboxGroup Slots

| Name      | Description                               |
| --------- | ----------------------------------------- |
| `default` | Place `BoCheckbox` components as children |

## Orientation

The checkbox group can be displayed vertically (default) or horizontally using the `orientation` prop.

### Vertical (Default)

<bo-checkbox-group v-model="checked" orientation="vertical">
  <bo-checkbox label="Top" value="top" />
  <bo-checkbox label="Middle" value="middle" />
  <bo-checkbox label="Bottom" value="bottom" />
</bo-checkbox-group>

```vue
<bo-checkbox-group v-model="checked">
  <bo-checkbox label="Top" value="top" />
  <bo-checkbox label="Middle" value="middle" />
  <bo-checkbox label="Bottom" value="bottom" />
</bo-checkbox-group>
```

### Horizontal

<bo-checkbox-group v-model="checked" orientation="horizontal">
  <bo-checkbox label="Left" value="left" />
  <bo-checkbox label="Center" value="center" />
  <bo-checkbox label="Right" value="right" />
</bo-checkbox-group>

```vue
<bo-checkbox-group v-model="checked" orientation="horizontal">
  <bo-checkbox label="Left" value="left" />
  <bo-checkbox label="Center" value="center" />
  <bo-checkbox label="Right" value="right" />
</bo-checkbox-group>
```

## Disabled

You can disable the entire group or individual checkboxes using the `disabled` prop.

<bo-checkbox label="Disabled Single" value="single" :disabled="true" />
<hr />
<bo-checkbox-group v-model="checked" :disabled="true">
  <bo-checkbox label="Disabled A" value="A" />
  <bo-checkbox label="Disabled B" value="B" />
</bo-checkbox-group>

```vue
<bo-checkbox-group v-model="checked" :disabled="true">
  <bo-checkbox label="Disabled A" value="A" />
  <bo-checkbox label="Disabled B" value="B" />
</bo-checkbox-group>

<bo-checkbox label="Disabled Single" value="single" :disabled="true" />
```

## Description

Add a description to provide additional context for a checkbox option.

<bo-checkbox label="Option with description" value="desc" description="Additional information about this option." />

```vue
<bo-checkbox
	label="Option with description"
	value="desc"
	description="Additional information about this option."
/>
```

## Custom Label Slot

You can render custom content in place of the label using the `label` slot. This is useful for rich or formatted labels.

```vue
<bo-checkbox v-model="checkedSingle">
  <template #label>
    <span style="font-weight: bold; color: #2563eb;">Custom <i>Label</i> Content</span>
  </template>
</bo-checkbox>
```

<bo-checkbox v-model="checkedSingle">
  <template #label>
    <span style="font-weight: bold; color: #2563eb;">Custom <i>Label</i> Content</span>
  </template>
</bo-checkbox>
