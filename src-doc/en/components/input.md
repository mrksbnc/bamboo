---
title: Input
description: A text input component with support for different types, icons, prefixes, suffixes, and validation states.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoInput } from '@/components/bo-input';
import { BoInputType } from '@/components/bo-input';
import { Icon } from '@/components/bo-icon';

const textValue = ref('');
const emailValue = ref('');
const searchValue = ref('');
const passwordValue = ref('');
</script>

# Input

A flexible text input component with support for different input types, icons, prefixes, suffixes, validation states, and more.

## Basic Usage

```vue
<script setup>
	import { ref } from 'vue';
	const value = ref('');
</script>

<bo-input v-model="value" placeholder="Enter text..." />
```

<div style="margin-top: 1rem;">
  <bo-input v-model="textValue" placeholder="Enter text..." />
</div>

## API Reference

### Props

| Name              | Type          | Default        | Description                                   |
| ----------------- | ------------- | -------------- | --------------------------------------------- |
| `id`              | `string`      | auto-generated | Unique identifier for the input element       |
| `dataTestId`      | `string`      | `'bo-input'`   | Data test ID for testing                      |
| `name`            | `string`      | -              | Name attribute of the input                   |
| `type`            | `BoInputType` | `'text'`       | Type of the input                             |
| `placeholder`     | `string`      | -              | Placeholder text                              |
| `disabled`        | `boolean`     | `false`        | Whether the input is disabled                 |
| `required`        | `boolean`     | `false`        | Whether the input is required                 |
| `invalid`         | `boolean`     | `false`        | Whether the input is in invalid state         |
| `readonly`        | `boolean`     | `false`        | Whether the input is readonly                 |
| `label`           | `string`      | -              | Label text for the input                      |
| `prefix`          | `string`      | -              | Prefix text to display before the input       |
| `suffix`          | `string`      | -              | Suffix text to display after the input        |
| `prefixIcon`      | `Icon`        | -              | Icon to display before the input              |
| `suffixIcon`      | `Icon`        | -              | Icon to display after the input               |
| `clearable`       | `boolean`     | `false`        | Whether to show a clear button                |
| `customCssClass`  | `string`      | -              | Custom CSS class for styling                  |
| `ariaLabel`       | `string`      | -              | Accessible label for screen readers           |
| `ariaLabelledBy`  | `string`      | -              | Reference to element that labels the input    |
| `ariaDescribedBy` | `string`      | -              | Reference to element that describes the input |
| `ariaLive`        | `AriaLive`    | `'polite'`     | ARIA live region behavior                     |
| `tabIndex`        | `number`      | -              | Tab index of the element                      |
| `autocomplete`    | `string`      | -              | Autocomplete attribute                        |
| `maxlength`       | `number`      | -              | Maximum length of the input value             |
| `minlength`       | `number`      | -              | Minimum length of the input value             |
| `pattern`         | `string`      | -              | Pattern for validation                        |

### Events

| Name    | Payload      | Description                       |
| ------- | ------------ | --------------------------------- |
| `blur`  | `FocusEvent` | Emitted when input loses focus    |
| `focus` | `FocusEvent` | Emitted when input gains focus    |
| `clear` | -            | Emitted when clear button clicked |

### Model

| Name      | Type               | Description     |
| --------- | ------------------ | --------------- |
| `v-model` | `string \| number` | The input value |

### Exposed Methods

| Name    | Parameters | Description                  |
| ------- | ---------- | ---------------------------- |
| `focus` | -          | Programmatically focus input |
| `blur`  | -          | Programmatically blur input  |

## Input Types

The input component supports various HTML5 input types.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
  <bo-input v-model="textValue" :type="BoInputType.text" label="Text" placeholder="Enter text..." />
  <bo-input v-model="emailValue" :type="BoInputType.email" label="Email" placeholder="Enter email..." />
  <bo-input v-model="passwordValue" :type="BoInputType.password" label="Password" placeholder="Enter password..." />
  <bo-input v-model="searchValue" :type="BoInputType.search" label="Search" placeholder="Search..." />
</div>

```vue
<bo-input v-model="value" :type="BoInputType.text" label="Text" />
<bo-input v-model="value" :type="BoInputType.email" label="Email" />
<bo-input v-model="value" :type="BoInputType.password" label="Password" />
<bo-input v-model="value" :type="BoInputType.search" label="Search" />
```

## With Label

Add a label to the input using the `label` prop.

<div style="margin-top: 2rem;">
  <bo-input v-model="textValue" label="Username" placeholder="Enter username..." />
</div>

```vue
<bo-input v-model="value" label="Username" placeholder="Enter username..." />
```

## With Icons

Add icons to the input using `prefixIcon` or `suffixIcon` props.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
  <bo-input v-model="textValue" :prefix-icon="Icon.user" placeholder="Username..." />
  <bo-input v-model="emailValue" :prefix-icon="Icon.mail" placeholder="Email..." />
  <bo-input v-model="searchValue" :prefix-icon="Icon.search" placeholder="Search..." />
</div>

```vue
<bo-input v-model="value" :prefix-icon="Icon.user" placeholder="Username..." />
<bo-input v-model="value" :prefix-icon="Icon.mail" placeholder="Email..." />
<bo-input v-model="value" :prefix-icon="Icon.search" placeholder="Search..." />
```

## With Prefix/Suffix Text

Add text before or after the input using `prefix` or `suffix` props.

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
  <bo-input v-model="textValue" prefix="https://" placeholder="example.com" />
  <bo-input v-model="textValue" suffix=".com" placeholder="example" />
  <bo-input v-model="textValue" prefix="$" suffix="USD" placeholder="0.00" />
</div>

```vue
<bo-input v-model="value" prefix="https://" placeholder="example.com" />
<bo-input v-model="value" suffix=".com" placeholder="example" />
<bo-input v-model="value" prefix="$" suffix="USD" placeholder="0.00" />
```

## Clearable

Add a clear button that appears when the input has a value.

<div style="margin-top: 2rem;">
  <bo-input v-model="textValue" :clearable="true" placeholder="Type something..." />
</div>

```vue
<bo-input v-model="value" :clearable="true" placeholder="Type something..." />
```

## States

### Required

<div style="margin-top: 2rem;">
  <bo-input v-model="textValue" label="Email" :required="true" placeholder="Enter email..." />
</div>

```vue
<bo-input v-model="value" label="Email" :required="true" placeholder="Enter email..." />
```

### Invalid

<div style="margin-top: 2rem;">
  <bo-input v-model="textValue" label="Email" :invalid="true" placeholder="Enter email..." />
</div>

```vue
<bo-input v-model="value" label="Email" :invalid="true" placeholder="Enter email..." />
```

### Disabled

<div style="margin-top: 2rem;">
  <bo-input v-model="textValue" label="Username" :disabled="true" placeholder="Disabled input" />
</div>

```vue
<bo-input v-model="value" label="Username" :disabled="true" placeholder="Disabled input" />
```

### Readonly

<div style="margin-top: 2rem;">
  <bo-input v-model="textValue" label="Username" :readonly="true" placeholder="Readonly input" />
</div>

```vue
<bo-input v-model="value" label="Username" :readonly="true" placeholder="Readonly input" />
```

## Accessibility

The input component includes built-in accessibility features:

- Proper label association with `for` and `id` attributes
- ARIA attributes support (`aria-label`, `aria-labelledby`, `aria-describedby`)
- Invalid state indication with `aria-invalid`
- Required field indication
- Focus management

```vue
<bo-input v-model="value" label="Email" :required="true" aria-describedby="email-help" />
<span id="email-help">Enter your email address</span>
```

## Type Definitions

::: code-group

```ts [bo-input.ts]
enum BoInputType {
	text = 'text',
	email = 'email',
	password = 'password',
	number = 'number',
	tel = 'tel',
	url = 'url',
	search = 'search',
}

interface BoInputProps {
	id?: string;
	dataTestId?: string;
	name?: string;
	type?: BoInputType;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	invalid?: boolean;
	readonly?: boolean;
	label?: string;
	prefix?: string;
	suffix?: string;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	clearable?: boolean;
	customCssClass?: string;
	ariaLabel?: string;
	ariaLabelledBy?: string;
	ariaDescribedBy?: string;
	ariaLive?: AriaLive;
	tabIndex?: number;
	autocomplete?: string;
	maxlength?: number;
	minlength?: number;
	pattern?: string;
}
```

:::
