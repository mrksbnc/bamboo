<script setup>
import { BoTextarea, BoTextareaSize, BoTextareaVariant, BoTextareaState } from '@/components/bo-textarea';
import { Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

# Textarea

A multi-line text input field for collecting longer text content from users.

```js
import { BoTextarea } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-textarea
		label="Description"
		placeholder="Enter your description here"
	/>
</template>

<script setup>
import { BoTextarea } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-textarea label="Description" placeholder="Enter your description here" />
</div>

## Props

| Name           | Type             | Default     | Description                            |
| -------------- | ---------------- | ----------- | -------------------------------------- |
| `modelValue`   | `string`         | `''`        | The textarea value                     |
| `label`        | `string`         | `''`        | The textarea label                     |
| `placeholder`  | `string`         | `''`        | The placeholder text                   |
| `hint`         | `string`         | `''`        | Help text displayed below the textarea |
| `error`        | `string`         | `''`        | Error message text                     |
| `invalidField` | `boolean`        | `false`     | Indicates validation error             |
| `disabled`     | `boolean`        | `false`     | Whether the textarea is disabled       |
| `required`     | `boolean`        | `false`     | Whether the textarea is required       |
| `rows`         | `number`         | `4`         | Number of rows for the textarea        |
| `maxLength`    | `number`         | `undefined` | Maximum length of input                |
| `prefixIcon`   | `Icon`           | `undefined` | Icon to display before text            |
| `suffixIcon`   | `Icon`           | `undefined` | Icon to display after text             |
| `expand`       | `boolean`        | `false`     | Whether textarea expands to fill space |
| `size`         | `BoTextareaSize` | `default`   | The textarea size                      |
| `id`           | `string`         | `random`    | Unique ID for the textarea             |
| `name`         | `string`         | `''`        | Textarea name attribute                |

## Events

| Name                | Payload      | Description                           |
| ------------------- | ------------ | ------------------------------------- |
| `update:modelValue` | `string`     | Emitted when the input value changes  |
| `blur`              | `FocusEvent` | Emitted when the textarea loses focus |

## Types

```ts
export enum BoTextareaSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoTextareaVariant {
	default = 'default',
	filled = 'filled',
}

export enum BoTextareaState {
	default = 'default',
	success = 'success',
	error = 'error',
}
```

## Sizes

<div class="flex flex-col gap-4 my-4">
	<bo-textarea :size="BoTextareaSize.small" label="Small" placeholder="Small textarea" />
	<bo-textarea :size="BoTextareaSize.default" label="Default" placeholder="Default textarea" />
	<bo-textarea :size="BoTextareaSize.large" label="Large" placeholder="Large textarea" />
</div>

```vue
<bo-textarea :size="BoTextareaSize.small" label="Small" placeholder="Small textarea" />
<bo-textarea :size="BoTextareaSize.default" label="Default" placeholder="Default textarea" />
<bo-textarea :size="BoTextareaSize.large" label="Large" placeholder="Large textarea" />
```

## States

### Disabled

<div class="flex gap-4 items-center my-4">
	<bo-textarea disabled label="Disabled" placeholder="Disabled textarea" />
</div>

```vue
<bo-textarea disabled label="Disabled" placeholder="Disabled textarea" />
```

### With Error

<div class="flex gap-4 items-center my-4">
	<bo-textarea 
		label="Error" 
		placeholder="Textarea with error" 
		error="This field is required" 
	/>
</div>

```vue
<bo-textarea label="Error" placeholder="Textarea with error" error="This field is required" />
```

### With Hint

<div class="flex gap-4 items-center my-4">
	<bo-textarea 
		label="With Hint" 
		placeholder="Textarea with hint" 
		hint="Please provide a detailed description" 
	/>
</div>

```vue
<bo-textarea
	label="With Hint"
	placeholder="Textarea with hint"
	hint="Please provide a detailed description"
/>
```

### Required

<div class="flex gap-4 items-center my-4">
	<bo-textarea 
		label="Description" 
		placeholder="Required textarea" 
		required 
	/>
</div>

```vue
<bo-textarea label="Description" placeholder="Required textarea" required />
```

## With Icons

<div class="flex flex-col gap-4 my-4">
	<bo-textarea 
		label="With Prefix Icon" 
		placeholder="Enter your description here" 
		:prefix-icon="Icon.edit" 
	/>
	<bo-textarea 
		label="With Suffix Icon" 
		placeholder="Enter your description here" 
		:suffix-icon="Icon.help_circle" 
	/>
</div>

```vue
<bo-textarea
	label="With Prefix Icon"
	placeholder="Enter your description here"
	:prefix-icon="Icon.edit"
/>
<bo-textarea
	label="With Suffix Icon"
	placeholder="Enter your description here"
	:suffix-icon="Icon.help_circle"
/>
```

## With Character Limit

<div class="flex gap-4 items-center my-4">
	<bo-textarea 
		label="Limited Input" 
		placeholder="Enter text (max 50 characters)" 
		:max-length="50" 
	/>
</div>

```vue
<bo-textarea label="Limited Input" placeholder="Enter text (max 50 characters)" :max-length="50" />
```

## Fixed vs Expandable

<div class="flex flex-col gap-4 my-4">
	<bo-textarea 
		label="Fixed Height" 
		placeholder="Fixed height textarea" 
	/>
	<bo-textarea 
		label="Expandable" 
		placeholder="Expandable textarea" 
		expand 
	/>
</div>

```vue
<bo-textarea label="Fixed Height" placeholder="Fixed height textarea" />
<bo-textarea label="Expandable" placeholder="Expandable textarea" expand />
```

## Event Handling

```vue
<template>
	<bo-textarea
		v-model="description"
		label="Description"
		placeholder="Enter your description"
		@blur="handleBlur"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoTextarea } from '@mrksbnc/bamboo';

const description = ref('');

const handleBlur = (event) => {
	console.log('Textarea blurred:', event);
};
</script>
```

## Usage Examples

### In a Form

```vue
<template>
	<form @submit.prevent="submitForm">
		<div class="flex flex-col gap-4">
			<bo-input
				v-model="formData.title"
				label="Title"
				required
			/>

			<bo-textarea
				v-model="formData.description"
				label="Description"
				placeholder="Enter a detailed description"
				:rows="6"
				required
			/>

			<bo-button type="submit">Submit</bo-button>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { BoInput, BoTextarea, BoButton } from '@mrksbnc/bamboo';

const formData = ref({
	title: '',
	description: '',
});

const submitForm = () => {
	console.log('Form submitted:', formData.value);
};
</script>
```

### With Form Validation

```vue
<template>
	<div class="flex flex-col gap-4">
		<bo-textarea
			v-model="feedback"
			label="Feedback"
			placeholder="Please provide your feedback"
			:error="errors.feedback"
			@blur="validateFeedback"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoTextarea } from '@mrksbnc/bamboo';

const feedback = ref('');
const errors = ref({
	feedback: '',
});

const validateFeedback = () => {
	if (!feedback.value) {
		errors.value.feedback = 'Feedback is required';
	} else if (feedback.value.length < 10) {
		errors.value.feedback = 'Feedback must be at least 10 characters';
	} else {
		errors.value.feedback = '';
	}
};
</script>
```
