<script setup>
import { BoCheckbox, BoLinkedCheckbox, BoCheckboxSize, BoCheckboxState } from '@/components/bo-checkbox';
</script>

# Checkbox

The `BoCheckbox` component allows users to select one or more options from a set. It provides a styled checkbox with various states and sizes.

## Usage

### Basic Usage

```vue
<template>
	<bo-checkbox
		v-model="isChecked"
		label="Accept terms and conditions"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-checkbox label="Accept terms and conditions" />
</div>

## Props

| Prop           | Type              | Default        | Description                                        |
| -------------- | ----------------- | -------------- | -------------------------------------------------- |
| `modelValue`   | `boolean`         | `false`        | The value of the checkbox (used with v-model)      |
| `id`           | `string`          | auto-generated | The unique identifier for the checkbox element     |
| `label`        | `string`          | -              | The label text for the checkbox                    |
| `description`  | `string`          | -              | Description text shown below the checkbox          |
| `state`        | `BoCheckboxState` | `none`         | State of the checkbox (`none`, `valid`, `invalid`) |
| `size`         | `BoCheckboxSize`  | `default`      | Size of the checkbox (`small`, `default`, `large`) |
| `errorMessage` | `string \| null`  | -              | Error message displayed when state is invalid      |
| `disabled`     | `boolean`         | `false`        | Disables the checkbox when true                    |
| `readonly`     | `boolean`         | `false`        | Makes the checkbox read-only when true             |
| `required`     | `boolean`         | `false`        | Marks the checkbox as required when true           |
| `name`         | `string`          | -              | Name attribute for the checkbox element            |

## Events

| Event               | Parameters | Description                           |
| ------------------- | ---------- | ------------------------------------- |
| `update:modelValue` | `boolean`  | Emitted when the checkbox is toggled  |
| `change`            | `Event`    | Emitted on change event               |
| `focus`             | -          | Emitted when the checkbox is focused  |
| `blur`              | -          | Emitted when the checkbox loses focus |

## Checkbox Sizes

The Checkbox component supports different sizes: small, default, and large.

```vue
<template>
	<bo-checkbox
		size="small"
		label="Small Checkbox"
	/>
	<bo-checkbox
		size="default"
		label="Default Checkbox"
	/>
	<bo-checkbox
		size="large"
		label="Large Checkbox"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-checkbox size="small" label="Small Checkbox" />
    <bo-checkbox size="default" label="Default Checkbox" />
    <bo-checkbox size="large" label="Large Checkbox" />
</div>

## Checkbox States

The Checkbox component supports different states: none (default), valid, and invalid.

```vue
<template>
	<bo-checkbox
		state="none"
		label="Default State"
	/>
	<bo-checkbox
		state="valid"
		label="Valid State"
		description="This checkbox is valid"
	/>
	<bo-checkbox
		state="invalid"
		label="Invalid State"
		error-message="This field is required"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-checkbox state="none" label="Default State" />
    <bo-checkbox state="valid" label="Valid State" description="This checkbox is valid" />
    <bo-checkbox state="invalid" label="Invalid State" error-message="This field is required" />
</div>

## Disabled State

Disabled checkboxes prevent user interaction and appear visually dimmed to indicate they are inactive.

```vue
<template>
	<bo-checkbox
		label="Disabled Checkbox"
		disabled
	/>
	<bo-checkbox
		label="Disabled Checked Checkbox"
		disabled
		:model-value="true"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-checkbox label="Disabled Checkbox" disabled />
    <bo-checkbox label="Disabled Checked Checkbox" disabled :model-value="true" />
</div>

## Readonly State

Readonly checkboxes display a state that cannot be changed but still allow focus, unlike disabled checkboxes.

```vue
<template>
	<bo-checkbox
		label="Readonly Checkbox"
		readonly
	/>
	<bo-checkbox
		label="Readonly Checked Checkbox"
		readonly
		:model-value="true"
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-checkbox label="Readonly Checkbox" readonly />
    <bo-checkbox label="Readonly Checked Checkbox" readonly :model-value="true" />
</div>

## Description and Error Messages

Checkboxes can include description text that appears below the checkbox to provide additional context or instructions. When the checkbox state is invalid, the description is replaced with an error message.

```vue
<template>
	<bo-checkbox
		label="Checkbox with Description"
		description="This description provides additional information"
	/>
	<bo-checkbox
		label="Invalid Checkbox with Error"
		state="invalid"
		error-message="This field is required"
		description="This description won't show when there's an error"
	/>
</template>
```

<div class="flex flex-col gap-4">
    <bo-checkbox 
      label="Checkbox with Description" 
      description="This description provides additional information"
    />
    <bo-checkbox 
      label="Invalid Checkbox with Error" 
      state="invalid"
      error-message="This field is required"
      description="This description won't show when there's an error"
    />
</div>

## Required Checkbox

A required checkbox displays an asterisk next to the label to indicate it must be checked.

```vue
<template>
	<bo-checkbox
		label="Required Checkbox"
		required
	/>
</template>
```

<div class="flex flex-col gap-2">
    <bo-checkbox label="Required Checkbox" required />
</div>

## Checkbox with Link in Label

The `BoLinkedCheckbox` component allows you to include clickable links within the checkbox label. This is particularly useful for terms and conditions checkboxes.

```vue
<template>
	<bo-linked-checkbox
		v-model="isAgreed"
		required
	>
		<template #label>
			I agree with the
			<a
				href="#"
				class="text-blue-600 hover:underline dark:text-blue-500"
				>terms and conditions</a
			>.
		</template>
	</bo-linked-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const isAgreed = ref(false);
</script>
```

<div class="flex flex-col gap-2">
    <bo-linked-checkbox>
        <template #label>
            I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.
        </template>
    </bo-linked-checkbox>
</div>

### Using the Label Slot

The `BoLinkedCheckbox` component uses a slot system to allow for rich label content:

1. The `#label` slot accepts any HTML content, including links, bold text, etc.
2. All other props and behaviors remain the same as the regular `BoCheckbox` component
3. The link styling follows the default blue color scheme with an underline on hover

This is particularly useful for legal agreements, privacy policies, or any scenario where part of the label text needs to be clickable.

## Accessibility

The Checkbox component includes several accessibility features:

- Properly associated labels using `for` and `id` attributes
- ARIA attributes for state communication (`aria-invalid`, `aria-disabled`)
- Screen reader announcements for validation errors
- Support for keyboard navigation and interaction
- Descriptive text with proper ARIA references

When implementing checkboxes, ensure they have meaningful labels that clearly describe the option being selected.
