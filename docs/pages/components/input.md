<script setup>
import BoInput from '@/components/bo-input/bo-input.vue';
import {  BoInputVariant, BoInputState, BoInputSize, BoInputType } from '@/components/bo-input/bo-input';
import { BoSize } from '@/shared/bo-size';
import { Icon } from '@/components/bo-icon/bo-icon';
</script>

# Input

A versatile input component for collecting user data with various states, variants, and features.

```js
import { BoInput } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-input
		v-model="inputValue"
		placeholder="Enter text..."
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput } from '@mrksbnc/bamboo';

const inputValue = ref('');
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-input placeholder="Enter text..." />
</div>

## Props

| Name               | Type             | Default     | Description                            |
| ------------------ | ---------------- | ----------- | -------------------------------------- |
| `modelValue`       | `string`         | `''`        | The input value                        |
| `placeholder`      | `string`         | `undefined` | Placeholder text                       |
| `label`            | `string`         | `undefined` | Input label                            |
| `variant`          | `BoInputVariant` | `default`   | Input style variant                    |
| `state`            | `BoInputState`   | `default`   | Input validation state                 |
| `size`             | `BoInputSize`    | `default`   | Input size                             |
| `disabled`         | `boolean`        | `false`     | Whether input is disabled              |
| `required`         | `boolean`        | `false`     | Whether input is required              |
| `description`      | `string`         | `undefined` | Helper text below the input            |
| `error`            | `string`         | `undefined` | Error message for error state          |
| `prefixIcon`       | `Icon`           | `Icon.none` | Icon before input text                 |
| `suffixIcon`       | `Icon`           | `Icon.none` | Icon after input text                  |
| `type`             | `string`         | `text`      | Input type (text, email, password...)  |
| `id`               | `string`         | `auto`      | Unique ID for the input                |
| `name`             | `string`         | `undefined` | Input name attribute                   |
| `readonly`         | `boolean`        | `false`     | Whether input is readonly              |
| `ariaLabel`        | `string`         | `undefined` | ARIA label for accessibility           |
| `autofocus`        | `boolean`        | `false`     | Whether input should autofocus         |
| `pills`            | `BoInputPill[]`  | `[]`        | Array of pill items to display         |
| `horizontalScroll` | `boolean`        | `false`     | Enable horizontal scrolling for pills  |
| `revealPassword`   | `boolean`        | `false`     | Show password toggle for password type |

## Events

| Name                | Payload  | Description                              |
| ------------------- | -------- | ---------------------------------------- |
| `update:modelValue` | `string` | Emitted when input value changes         |
| `focus`             | -        | Emitted when input gains focus           |
| `blur`              | `Event`  | Emitted when input loses focus           |
| `change`            | `string` | Emitted when input value changes         |
| `prefixIconClick`   | -        | Emitted when prefix icon is clicked      |
| `suffixIconClick`   | -        | Emitted when suffix icon is clicked      |
| `pillRemove`        | `string` | Emitted when a pill is removed (pill ID) |

## Slots

| Name              | Description                  |
| ----------------- | ---------------------------- |
| `topRightContent` | Content to show in top right |

## Types

```ts
export enum BoInputVariant {
	default = 'default',
	filled = 'filled',
}

export enum BoInputState {
	default = 'default',
	success = 'success',
	error = 'error',
}

export enum BoInputSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoInputType {
	text = 'text',
	email = 'email',
	password = 'password',
	number = 'number',
	search = 'search',
	phone = 'tel',
}

export interface BoInputPill {
	id: string;
	text: string;
	icon?: Icon;
}

export interface BoInputProps {
	modelValue?: string;
	placeholder?: string;
	label?: string;
	variant?: BoInputVariant;
	state?: BoInputState;
	size?: BoInputSize;
	disabled?: boolean;
	required?: boolean;
	description?: string;
	error?: string;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	type?: string;
	id?: string;
	name?: string;
	readonly?: boolean;
	ariaLabel?: string;
	autofocus?: boolean;
	pills?: BoInputPill[];
	horizontalScroll?: boolean;
	revealPassword?: boolean;
}
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <bo-input :variant="BoInputVariant.default" placeholder="Default variant" />
  <bo-input :variant="BoInputVariant.filled" placeholder="Filled variant" />
</div>

```vue
<bo-input :variant="BoInputVariant.default" placeholder="Default variant" />
<bo-input :variant="BoInputVariant.filled" placeholder="Filled variant" />
```

## States

<div class="flex flex-col gap-4 my-4">
  <bo-input :state="BoInputState.default" placeholder="Default state" />
  <bo-input :state="BoInputState.success" placeholder="Success state" />
  <bo-input :state="BoInputState.error" placeholder="Error state" error="This field has an error" />
</div>

```vue
<bo-input :state="BoInputState.default" placeholder="Default state" />
<bo-input :state="BoInputState.success" placeholder="Success state" />
<bo-input :state="BoInputState.error" placeholder="Error state" error="This field has an error" />
```

## Sizes

<div class="flex flex-col gap-4 my-4">
  <bo-input :size="BoInputSize.small" placeholder="Small input" />
  <bo-input :size="BoInputSize.default" placeholder="Default input" />
  <bo-input :size="BoInputSize.large" placeholder="Large input" />
</div>

```vue
<bo-input :size="BoInputSize.small" placeholder="Small input" />
<bo-input :size="BoInputSize.default" placeholder="Default input" />
<bo-input :size="BoInputSize.large" placeholder="Large input" />
```

## With Label

<div class="flex flex-col gap-4 my-4">
  <bo-input label="Username" placeholder="Enter your username" />
  <bo-input label="Email" placeholder="Enter your email" required />
</div>

```vue
<bo-input label="Username" placeholder="Enter your username" />
<bo-input label="Email" placeholder="Enter your email" required />
```

## With Helper Text

<div class="flex flex-col gap-4 my-4">
  <bo-input 
    label="Password" 
    type="password" 
    description="Password must be at least 8 characters"
    placeholder="Enter password" 
  />
</div>

```vue
<bo-input
	label="Password"
	type="password"
	description="Password must be at least 8 characters"
	placeholder="Enter password"
/>
```

## With Icons

<div class="flex flex-col gap-4 my-4">
  <bo-input :prefix-icon="Icon.search" placeholder="Search..." />
  <bo-input :suffix-icon="Icon.mail" placeholder="Enter email..." />
  <bo-input 
    :prefix-icon="Icon.user" 
    :suffix-icon="Icon.check" 
    placeholder="Username" 
  />
</div>

```vue
<bo-input :prefix-icon="Icon.search" placeholder="Search..." />
<bo-input :suffix-icon="Icon.mail" placeholder="Enter email..." />
<bo-input :prefix-icon="Icon.user" :suffix-icon="Icon.check" placeholder="Username" />
```

## Input Types

<div class="flex flex-col gap-4 my-4">
  <bo-input type="text" placeholder="Text input" />
  <bo-input type="email" placeholder="Email input" />
  <bo-input type="password" placeholder="Password input" :reveal-password="true" />
  <bo-input type="number" placeholder="Number input" />
  <bo-input type="search" placeholder="Search input" :prefix-icon="Icon.search" />
  <bo-input type="tel" placeholder="Phone input" />
</div>

```vue
<bo-input type="text" placeholder="Text input" />
<bo-input type="email" placeholder="Email input" />
<bo-input type="password" placeholder="Password input" :reveal-password="true" />
<bo-input type="number" placeholder="Number input" />
<bo-input type="search" placeholder="Search input" :prefix-icon="Icon.search" />
<bo-input type="tel" placeholder="Phone input" />
```

## States

### Disabled

<div class="flex gap-4 my-4">
  <bo-input disabled placeholder="Disabled input" />
</div>

```vue
<bo-input disabled placeholder="Disabled input" />
```

### Readonly

<div class="flex gap-4 my-4">
  <bo-input readonly modelValue="Read-only value" />
</div>

```vue
<bo-input readonly modelValue="Read-only value" />
```

## With Pills

<div class="flex flex-col gap-4 my-4">
  <bo-input 
    placeholder="Enter tags..." 
    :pills="[
      { id: '1', text: 'React' },
      { id: '2', text: 'Vue', icon: Icon.check },
      { id: '3', text: 'Angular' }
    ]"
  />
</div>

```vue
<template>
	<bo-input
		placeholder="Enter tags..."
		v-model="inputValue"
		:pills="pills"
		@pill-remove="handlePillRemove"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput, Icon } from '@mrksbnc/bamboo';

const inputValue = ref('');
const pills = ref([
	{ id: '1', text: 'React' },
	{ id: '2', text: 'Vue', icon: Icon.check },
	{ id: '3', text: 'Angular' },
]);

const handlePillRemove = (id) => {
	pills.value = pills.value.filter((pill) => pill.id !== id);
};
</script>
```

## Event Handling

```vue
<template>
	<bo-input
		v-model="email"
		placeholder="Enter email"
		:prefix-icon="Icon.mail"
		@focus="handleFocus"
		@blur="handleBlur"
		@prefix-icon-click="handlePrefixIconClick"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput, Icon } from '@mrksbnc/bamboo';

const email = ref('');

const handleFocus = () => {
	console.log('Input focused');
};

const handleBlur = (event) => {
	console.log('Input blurred:', event);
};

const handlePrefixIconClick = () => {
	console.log('Prefix icon clicked');
};
</script>
```

## Usage Examples

### Form Field

```vue
<div class="space-y-4">
  <bo-input
    label="Email"
    type="email"
    placeholder="Enter your email"
    required
    :prefix-icon="Icon.mail"
  />
  
  <bo-input
    label="Password"
    type="password"
    placeholder="Enter your password"
    required
    :reveal-password="true"
    description="Must be at least 8 characters"
  />
  
  <bo-button type="submit">Sign In</bo-button>
</div>
```

### Search Field

```vue
<template>
	<div class="relative">
		<bo-input
			v-model="searchQuery"
			placeholder="Search..."
			:prefix-icon="Icon.search"
			@update:model-value="handleSearch"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput, Icon } from '@mrksbnc/bamboo';

const searchQuery = ref('');

const handleSearch = (value) => {
	// Perform search with value
};
</script>
```

### Tag Input

```vue
<template>
	<bo-input
		v-model="tagInput"
		placeholder="Add tags..."
		:pills="tags"
		@keydown.enter.prevent="addTag"
		@pill-remove="removeTag"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput } from '@mrksbnc/bamboo';

const tagInput = ref('');
const tags = ref([]);
let nextId = 1;

const addTag = () => {
	if (tagInput.value.trim()) {
		tags.value.push({
			id: `tag-${nextId++}`,
			text: tagInput.value.trim(),
		});
		tagInput.value = '';
	}
};

const removeTag = (id) => {
	tags.value = tags.value.filter((tag) => tag.id !== id);
};
</script>
```
