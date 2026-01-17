# Input

The Input component provides text input functionality with various styles, validation states, and enhanced features like pills and icons.

## Basic Usage

```vue
<template>
	<div class="space-y-4">
		<bo-input label="Email" placeholder="Enter your email" type="email" />
		<bo-input label="Password" placeholder="Enter your password" type="password" />
	</div>
</template>
```

## Sizes

Available sizes: `sm`, `md`, `lg`

```vue
<template>
	<div class="space-y-4">
		<bo-input size="sm" label="Small Input" placeholder="Small size" />
		<bo-input size="md" label="Medium Input" placeholder="Medium size" />
		<bo-input size="lg" label="Large Input" placeholder="Large size" />
	</div>
</template>
```

## States

Available states: `default`, `valid`, `invalid`

```vue
<template>
	<div class="space-y-4">
		<bo-input state="default" label="Default State" placeholder="Default input" />
		<bo-input state="valid" label="Valid State" placeholder="Valid input" hint="This looks good!" />
		<bo-input
			state="invalid"
			label="Invalid State"
			placeholder="Invalid input"
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
		<bo-input variant="default" label="Default Variant" placeholder="Default background" />
		<bo-input variant="filled" label="Filled Variant" placeholder="Filled background" />
	</div>
</template>
```

## With Icons

Add prefix or suffix icons:

```vue
<template>
	<div class="space-y-4">
		<!-- Prefix Icon -->
		<bo-input label="Search" placeholder="Search..." prefix-icon="search" />

		<!-- Suffix Icon -->
		<bo-input label="Website" placeholder="https://example.com" suffix-icon="external-link" />

		<!-- Both Icons -->
		<bo-input
			label="Amount"
			placeholder="0.00"
			prefix-icon="dollar-sign"
			suffix-icon="calculator"
		/>
	</div>
</template>
```

## Password Input with Reveal

```vue
<template>
	<bo-input label="Password" type="password" placeholder="Enter your password" reveal-password />
</template>
```

## Required Fields

```vue
<template>
	<bo-input label="Full Name" placeholder="Enter your full name" required />
</template>
```

## With Description and Hints

```vue
<template>
	<div class="space-y-4">
		<bo-input
			label="Username"
			placeholder="Enter username"
			description="Choose a unique username for your account"
			hint="Must be at least 3 characters long"
		/>

		<bo-input
			label="Email"
			placeholder="Enter email"
			state="invalid"
			error="Please enter a valid email address"
		/>
	</div>
</template>
```

## Pills/Tags Input

Create input fields with removable pills:

```vue
<template>
	<bo-input label="Tags" placeholder="Add tags..." :pills="tags" @pill-remove="removePill" />
</template>

<script setup>
	import { ref } from 'vue';

	const tags = ref([
		{ id: '1', text: 'Vue.js', icon: 'tag' },
		{ id: '2', text: 'TypeScript' },
		{ id: '3', text: 'Tailwind CSS' },
	]);

	const removePill = (pillId) => {
		tags.value = tags.value.filter((tag) => tag.id !== pillId);
	};
</script>
```

## Pills with Horizontal Scroll

```vue
<template>
	<bo-input label="Selected Items" placeholder="Add more..." :pills="manyItems" horizontal-scroll />
</template>

<script setup>
	const manyItems = ref([
		{ id: '1', text: 'Item 1' },
		{ id: '2', text: 'Item 2' },
		{ id: '3', text: 'Item 3' },
		{ id: '4', text: 'Item 4' },
		{ id: '5', text: 'Item 5' },
	]);
</script>
```

## Disabled State

```vue
<template>
	<bo-input label="Disabled Input" placeholder="This is disabled" disabled />
</template>
```

## Read-only State

```vue
<template>
	<bo-input label="Read-only Input" value="This cannot be edited" read-only />
</template>
```

## Full Width

```vue
<template>
	<bo-input label="Full Width Input" placeholder="This spans the full width" full-width />
</template>
```

## Form Integration

```vue
<template>
	<form @submit.prevent="handleSubmit">
		<div class="space-y-4">
			<bo-input
				v-model="form.email"
				label="Email"
				type="email"
				name="email"
				required
				:state="emailState"
				:error="emailError"
			/>

			<bo-input
				v-model="form.password"
				label="Password"
				type="password"
				name="password"
				required
				reveal-password
			/>

			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const form = ref({
		email: '',
		password: '',
	});

	const emailState = computed(() => {
		if (!form.value.email) return 'default';
		return form.value.email.includes('@') ? 'valid' : 'invalid';
	});

	const emailError = computed(() => {
		if (emailState.value === 'invalid') {
			return 'Please enter a valid email address';
		}
		return '';
	});

	const handleSubmit = () => {
		console.log('Form submitted:', form.value);
	};
</script>
```

## Props

| Prop               | Type             | Default     | Description                                   |
| ------------------ | ---------------- | ----------- | --------------------------------------------- |
| `id`               | `string`         | -           | Element ID (auto-generated if not provided)   |
| `dataTestId`       | `string`         | -           | Data test ID (auto-generated if not provided) |
| `size`             | `BoInputSize`    | `'md'`      | Size of the input                             |
| `state`            | `BoInputState`   | `'default'` | Validation state of the input                 |
| `variant`          | `BoInputVariant` | `'default'` | Visual variant of the input                   |
| `type`             | `string`         | `'text'`    | HTML input type                               |
| `placeholder`      | `string`         | -           | Placeholder text                              |
| `label`            | `string`         | -           | Label text                                    |
| `description`      | `string`         | -           | Description text                              |
| `error`            | `string`         | -           | Error message                                 |
| `hint`             | `string`         | -           | Hint message                                  |
| `required`         | `boolean`        | `false`     | Whether the field is required                 |
| `name`             | `string`         | -           | Input name attribute                          |
| `disabled`         | `boolean`        | `false`     | Whether the input is disabled                 |
| `readOnly`         | `boolean`        | `false`     | Whether the input is read-only                |
| `fullWidth`        | `boolean`        | `false`     | Whether input spans full width                |
| `prefixIcon`       | `Icon`           | -           | Icon to display before input                  |
| `suffixIcon`       | `Icon`           | -           | Icon to display after input                   |
| `autofocus`        | `boolean`        | `false`     | Whether to autofocus the input                |
| `pills`            | `BoInputPill[]`  | -           | Array of pill items                           |
| `horizontalScroll` | `boolean`        | `false`     | Enable horizontal scrolling for pills         |
| `revealPassword`   | `boolean`        | `false`     | Show password toggle for password inputs      |
| `role`             | `string`         | -           | ARIA role attribute                           |
| `ariaLabel`        | `string`         | -           | ARIA label attribute                          |

## Events

| Event         | Payload      | Description                                     |
| ------------- | ------------ | ----------------------------------------------- |
| `input`       | `string`     | Fired when input value changes                  |
| `change`      | `string`     | Fired when input loses focus with changed value |
| `focus`       | `FocusEvent` | Fired when input receives focus                 |
| `blur`        | `FocusEvent` | Fired when input loses focus                    |
| `pill-remove` | `string`     | Fired when a pill is removed (pill ID)          |

## Types

```typescript
type BoInputSize = 'sm' | 'md' | 'lg';

type BoInputState = 'default' | 'valid' | 'invalid';

type BoInputVariant = 'default' | 'filled';

interface BoInputPill {
	id: string;
	text: string;
	icon?: Icon;
}
```

## Accessibility

- Semantic HTML `<input>` element
- Proper label association
- ARIA attributes for validation states
- Error messages announced to screen readers
- Keyboard navigation support
- Focus management
- Required field indicators
- Descriptive help text support
