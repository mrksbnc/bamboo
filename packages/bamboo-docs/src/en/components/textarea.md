# Textarea

The Textarea component provides multi-line text input functionality with various styles, validation states, and enhanced features.

## Basic Usage

```vue
<template>
	<bo-textarea label="Message" placeholder="Enter your message..." />
</template>
```

## Sizes

Available sizes: `sm`, `md`, `lg`

```vue
<template>
	<div class="space-y-4">
		<bo-textarea size="sm" label="Small Textarea" placeholder="Small size" />
		<bo-textarea size="md" label="Medium Textarea" placeholder="Medium size" />
		<bo-textarea size="lg" label="Large Textarea" placeholder="Large size" />
	</div>
</template>
```

## States

Available states: `default`, `valid`, `invalid`

```vue
<template>
	<div class="space-y-4">
		<bo-textarea state="default" label="Default State" placeholder="Default textarea" />
		<bo-textarea
			state="valid"
			label="Valid State"
			placeholder="Valid textarea"
			hint="This looks good!"
		/>
		<bo-textarea
			state="invalid"
			label="Invalid State"
			placeholder="Invalid textarea"
			error="This field is required"
		/>
	</div>
</template>
```

## Variants

Available variants: `default`, `filled`

```vue
<template>
	<div class="space-y-4">
		<bo-textarea variant="default" label="Default Variant" placeholder="Default background" />
		<bo-textarea variant="filled" label="Filled Variant" placeholder="Filled background" />
	</div>
</template>
```

## With Icons

Add prefix or suffix icons:

```vue
<template>
	<div class="space-y-4">
		<!-- Prefix Icon -->
		<bo-textarea label="Comments" placeholder="Add your comments..." prefix-icon="message-circle" />

		<!-- Suffix Icon -->
		<bo-textarea label="Notes" placeholder="Add notes..." suffix-icon="edit" />
	</div>
</template>
```

## Required Fields

```vue
<template>
	<bo-textarea label="Description" placeholder="Enter description..." required />
</template>
```

## With Description and Hints

```vue
<template>
	<div class="space-y-4">
		<bo-textarea
			label="Bio"
			placeholder="Tell us about yourself..."
			description="Write a brief description about yourself"
			hint="Maximum 500 characters"
		/>

		<bo-textarea
			label="Feedback"
			placeholder="Your feedback..."
			state="invalid"
			error="Feedback must be at least 10 characters long"
		/>
	</div>
</template>
```

## Auto-expanding Textarea

```vue
<template>
	<bo-textarea label="Auto-expanding" placeholder="Start typing and watch me grow..." expand />
</template>
```

## Resizable Textarea

```vue
<template>
	<bo-textarea label="Resizable" placeholder="You can resize me manually..." resizable />
</template>
```

## Disabled State

```vue
<template>
	<bo-textarea label="Disabled Textarea" placeholder="This is disabled" disabled />
</template>
```

## Read-only State

```vue
<template>
	<bo-textarea label="Read-only Textarea" value="This content cannot be edited" read-only />
</template>
```

## Character Count

```vue
<template>
	<div>
		<bo-textarea
			v-model="message"
			label="Message"
			placeholder="Enter your message..."
			:hint="`${message.length}/280 characters`"
			:state="message.length > 280 ? 'invalid' : 'default'"
			:error="message.length > 280 ? 'Message is too long' : ''"
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const message = ref('');
</script>
```

## Form Integration

```vue
<template>
	<form @submit.prevent="handleSubmit">
		<div class="space-y-4">
			<bo-textarea
				v-model="form.message"
				label="Message"
				name="message"
				required
				:state="messageState"
				:error="messageError"
				placeholder="Enter your message..."
			/>

			<bo-textarea
				v-model="form.notes"
				label="Additional Notes"
				name="notes"
				placeholder="Any additional notes..."
				expand
			/>

			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const form = ref({
		message: '',
		notes: '',
	});

	const messageState = computed(() => {
		if (!form.value.message) return 'default';
		return form.value.message.length >= 10 ? 'valid' : 'invalid';
	});

	const messageError = computed(() => {
		if (form.value.message && form.value.message.length < 10) {
			return 'Message must be at least 10 characters long';
		}
		return '';
	});

	const handleSubmit = () => {
		console.log('Form submitted:', form.value);
	};
</script>
```

## Advanced Example

```vue
<template>
	<div class="max-w-md">
		<bo-textarea
			v-model="content"
			label="Article Content"
			placeholder="Write your article..."
			description="Write the main content of your article"
			size="lg"
			expand
			required
			:state="contentState"
			:error="contentError"
			:hint="contentHint"
			prefix-icon="file-text"
		/>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const content = ref('');

	const contentState = computed(() => {
		if (!content.value) return 'default';
		if (content.value.length < 50) return 'invalid';
		if (content.value.length > 1000) return 'invalid';
		return 'valid';
	});

	const contentError = computed(() => {
		if (content.value.length > 0 && content.value.length < 50) {
			return 'Content must be at least 50 characters long';
		}
		if (content.value.length > 1000) {
			return 'Content must not exceed 1000 characters';
		}
		return '';
	});

	const contentHint = computed(() => {
		return `${content.value.length}/1000 characters`;
	});
</script>
```

## Props

| Prop          | Type                | Default     | Description                                   |
| ------------- | ------------------- | ----------- | --------------------------------------------- |
| `id`          | `string`            | -           | Element ID (auto-generated if not provided)   |
| `dataTestId`  | `string`            | -           | Data test ID (auto-generated if not provided) |
| `size`        | `BoTextareaSize`    | `'md'`      | Size of the textarea                          |
| `state`       | `BoTextareaState`   | `'default'` | Validation state                              |
| `variant`     | `BoTextareaVariant` | `'default'` | Visual variant                                |
| `placeholder` | `string`            | -           | Placeholder text                              |
| `label`       | `string`            | -           | Label text                                    |
| `description` | `string`            | -           | Description text                              |
| `error`       | `string`            | -           | Error message                                 |
| `hint`        | `string`            | -           | Hint message                                  |
| `required`    | `boolean`           | `false`     | Whether the field is required                 |
| `name`        | `string`            | -           | Textarea name attribute                       |
| `disabled`    | `boolean`           | `false`     | Whether the textarea is disabled              |
| `readOnly`    | `boolean`           | `false`     | Whether the textarea is read-only             |
| `prefixIcon`  | `Icon`              | -           | Icon to display at top-left                   |
| `suffixIcon`  | `Icon`              | -           | Icon to display at top-right                  |
| `expand`      | `boolean`           | `false`     | Whether textarea auto-expands                 |
| `resizable`   | `boolean`           | `false`     | Whether textarea is manually resizable        |
| `rows`        | `number`            | `3`         | Initial number of rows                        |
| `maxRows`     | `number`            | -           | Maximum rows when expanding                   |
| `role`        | `string`            | -           | ARIA role attribute                           |
| `ariaLabel`   | `string`            | -           | ARIA label attribute                          |

## Events

| Event    | Payload      | Description                                        |
| -------- | ------------ | -------------------------------------------------- |
| `input`  | `string`     | Fired when textarea value changes                  |
| `change` | `string`     | Fired when textarea loses focus with changed value |
| `focus`  | `FocusEvent` | Fired when textarea receives focus                 |
| `blur`   | `FocusEvent` | Fired when textarea loses focus                    |

## Types

```typescript
type BoTextareaSize = 'sm' | 'md' | 'lg';

type BoTextareaState = 'default' | 'valid' | 'invalid';

type BoTextareaVariant = 'default' | 'filled';
```

## Accessibility

- Semantic HTML `<textarea>` element
- Proper label association
- ARIA attributes for validation states
- Error messages announced to screen readers
- Keyboard navigation support
- Focus management
- Required field indicators
- Descriptive help text support
- Resize functionality accessible via keyboard
