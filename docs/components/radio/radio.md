<script setup>
import { BoRadio, BoRadioSize, BoRadioState } from '@/components/bo-radio';
import { ref } from 'vue';

const selectedValue = ref('option1');
</script>

# Radio

The `BoRadio` component allows users to select one option from a set. It provides a styled radio button with various states and sizes.

## Usage

### Basic Usage

```vue
<template>
	<bo-radio
		v-model="selectedValue"
		name="options"
		value="option1"
		label="Option 1"
	/>
	<bo-radio
		v-model="selectedValue"
		name="options"
		value="option2"
		label="Option 2"
	/>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('option1');
</script>
```

<div class="flex flex-col gap-2">
    <bo-radio v-model="selectedValue" name="options" value="option1" label="Option 1" />
    <bo-radio v-model="selectedValue" name="options" value="option2" label="Option 2" />
</div>

## Props

| Prop           | Type                          | Default        | Description                                      |
| -------------- | ----------------------------- | -------------- | ------------------------------------------------ |
| `modelValue`   | `string \| number \| boolean` | -              | The value of the radio group (used with v-model) |
| `value`        | `string \| number \| boolean` | -              | The value of this specific radio button          |
| `id`           | `string`                      | auto-generated | The unique identifier for the radio element      |
| `label`        | `string`                      | -              | The label text for the radio button              |
| `description`  | `string`                      | -              | Description text shown below the radio button    |
| `state`        | `BoRadioState`                | `none`         | State of the radio (`none`, `valid`, `invalid`)  |
| `size`         | `BoRadioSize`                 | `default`      | Size of the radio (`small`, `default`, `large`)  |
| `errorMessage` | `string \| null`              | -              | Error message displayed when state is invalid    |
| `disabled`     | `boolean`                     | `false`        | Disables the radio button when true              |
| `readonly`     | `boolean`                     | `false`        | Makes the radio button read-only when true       |
| `required`     | `boolean`                     | `false`        | Marks the radio button as required when true     |
| `name`         | `string`                      | -              | Name attribute for the radio button element      |

## Events

| Event               | Parameters                    | Description                        |
| ------------------- | ----------------------------- | ---------------------------------- |
| `update:modelValue` | `string \| number \| boolean` | Emitted when the radio is selected |
| `change`            | `Event`                       | Emitted on change event            |
| `focus`             | -                             | Emitted when the radio is focused  |
| `blur`              | -                             | Emitted when the radio loses focus |

## Radio Sizes

The Radio component supports different sizes: small, default, and large.

```vue
<template>
	<bo-radio
		size="small"
		label="Small Radio"
		name="size-demo"
		value="small"
	/>
	<bo-radio
		size="default"
		label="Default Radio"
		name="size-demo"
		value="default"
	/>
	<bo-radio
		size="large"
		label="Large Radio"
		name="size-demo"
		value="large"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-radio size="small" label="Small Radio" name="size-demo" value="small" />
    <bo-radio size="default" label="Default Radio" name="size-demo" value="default" />
    <bo-radio size="large" label="Large Radio" name="size-demo" value="large" />
</div>

## Radio States

The Radio component supports different states: none (default), valid, and invalid.

```vue
<template>
	<bo-radio
		state="none"
		label="Default State"
		name="state-demo"
		value="none"
	/>
	<bo-radio
		state="valid"
		label="Valid State"
		description="This radio is valid"
		name="state-demo"
		value="valid"
	/>
	<bo-radio
		state="invalid"
		label="Invalid State"
		error-message="This field is required"
		name="state-demo"
		value="invalid"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-radio state="none" label="Default State" name="state-demo" value="none" />
    <bo-radio state="valid" label="Valid State" description="This radio is valid" name="state-demo" value="valid" />
    <bo-radio state="invalid" label="Invalid State" error-message="This field is required" name="state-demo" value="invalid" />
</div>

## Disabled State

Disabled radio buttons prevent user interaction and appear visually dimmed to indicate they are inactive.

```vue
<template>
	<bo-radio
		label="Disabled Radio"
		disabled
		name="disabled-demo"
		value="disabled"
	/>
	<bo-radio
		label="Disabled Selected Radio"
		disabled
		name="disabled-demo"
		value="selected"
		:model-value="'selected'"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-radio label="Disabled Radio" disabled name="disabled-demo" value="disabled" />
    <bo-radio label="Disabled Selected Radio" disabled name="disabled-demo" value="selected" :model-value="'selected'" />
</div>

## Readonly State

Readonly radio buttons display a state that cannot be changed but still allow focus, unlike disabled radio buttons.

```vue
<template>
	<bo-radio
		label="Readonly Radio"
		readonly
		name="readonly-demo"
		value="readonly"
	/>
	<bo-radio
		label="Readonly Selected Radio"
		readonly
		name="readonly-demo"
		value="selected"
		:model-value="'selected'"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-radio label="Readonly Radio" readonly name="readonly-demo" value="readonly" />
    <bo-radio label="Readonly Selected Radio" readonly name="readonly-demo" value="selected" :model-value="'selected'" />
</div>

## Description and Error Messages

Radio buttons can include description text that appears below the radio to provide additional context or instructions. When the radio state is invalid, the description is replaced with an error message.

```vue
<template>
	<bo-radio
		label="Radio with Description"
		description="This description provides additional information"
		name="description-demo"
		value="with-description"
	/>
	<bo-radio
		label="Invalid Radio with Error"
		state="invalid"
		error-message="Please select a valid option"
		description="This description won't show when there's an error"
		name="description-demo"
		value="with-error"
	/>
</template>
```

<div class="flex flex-col gap-4">
    <bo-radio 
      label="Radio with Description" 
      description="This description provides additional information"
      name="description-demo"
      value="with-description"
    />
    <bo-radio 
      label="Invalid Radio with Error" 
      state="invalid"
      error-message="Please select a valid option"
      description="This description won't show when there's an error"
      name="description-demo"
      value="with-error"
    />
</div>

## Required Radio

A required radio button displays an asterisk next to the label to indicate a selection is required.

```vue
<template>
	<bo-radio
		label="Required Radio"
		required
		name="required-demo"
		value="required"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-radio label="Required Radio" required name="required-demo" value="required" />
</div>

## Radio Group Example

Radio buttons with the same `name` attribute form a group where only one option can be selected.

```vue
<template>
	<div class="flex flex-col gap-2">
		<h3 class="mb-2 text-lg font-medium">Select your preferred contact method:</h3>
		<bo-radio
			v-model="contactMethod"
			name="contact"
			value="email"
			label="Email"
			description="We'll send you email updates"
		/>
		<bo-radio
			v-model="contactMethod"
			name="contact"
			value="phone"
			label="Phone"
			description="We'll call you with updates"
		/>
		<bo-radio
			v-model="contactMethod"
			name="contact"
			value="mail"
			label="Mail"
			description="We'll send physical mail to your address"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const contactMethod = ref('email');
</script>
```

<div class="flex flex-col gap-2 p-4 border rounded-md">
    <h3 class="text-lg font-medium mb-2">Select your preferred contact method:</h3>
    <bo-radio
      v-model="selectedValue"
      name="contact"
      value="email"
      label="Email"
      description="We'll send you email updates"
    />
    <bo-radio
      v-model="selectedValue"
      name="contact"
      value="phone"
      label="Phone"
      description="We'll call you with updates"
    />
    <bo-radio
      v-model="selectedValue"
      name="contact"
      value="mail"
      label="Mail"
      description="We'll send physical mail to your address"
    />
</div>

## Accessibility

The Radio component includes several accessibility features:

- Properly associated labels using `for` and `id` attributes
- ARIA attributes for state communication (`aria-invalid`, `aria-disabled`)
- Screen reader announcements for validation errors
- Support for keyboard navigation and interaction
- Descriptive text with proper ARIA references

When implementing radio buttons, ensure they:

- Have meaningful labels that clearly describe each option
- Are grouped with the same `name` attribute to function as a single control
- Have a visible label describing the group's purpose when used in a set
