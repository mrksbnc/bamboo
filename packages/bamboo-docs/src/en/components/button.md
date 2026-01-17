<script setup>
import { BoButton } from '@mrksbnc/bamboo-vue';

console.log(BoButton);
</script>

# Button

The Button component provides interactive elements for user actions with various styles, sizes, and states.

## Basic Usage

<ClientOnly>
  <BoButton label="Primary" />
</ClientOnly>

```vue
<template>
	<div class="flex gap-4">
		<BoButton label="Primary" />
		<BoButton label="Secondary" variant="secondary" />
		<BoButton label="Success" variant="success" />
	</div>
</template>
```

## Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-button size="xs" label="Extra Small" />
		<bo-button size="sm" label="Small" />
		<bo-button size="default" label="Default" />
		<bo-button size="lg" label="Large" />
		<bo-button size="xl" label="Extra Large" />
	</div>
</template>
```

## Variants

Available variants: `primary`, `secondary`, `success`, `warning`, `destructive`, `light`, `dark`

```vue
<template>
	<div class="flex gap-4 flex-wrap">
		<bo-button variant="primary" label="Primary" />
		<bo-button variant="secondary" label="Secondary" />
		<bo-button variant="success" label="Success" />
		<bo-button variant="warning" label="Warning" />
		<bo-button variant="destructive" label="Destructive" />
		<bo-button variant="light" label="Light" />
		<bo-button variant="dark" label="Dark" />
	</div>
</template>
```

## Shapes

Available shapes: `default`, `pill`, `outline`, `link`

```vue
<template>
	<div class="flex gap-4">
		<bo-button shape="default" label="Default" />
		<bo-button shape="pill" label="Pill" />
		<bo-button shape="outline" label="Outline" />
		<bo-button shape="link" label="Link" />
	</div>
</template>
```

## With Icons

Add prefix or suffix icons to buttons:

```vue
<template>
	<div class="flex gap-4">
		<!-- Prefix Icon -->
		<bo-button label="Save" prefix-icon="save" />

		<!-- Suffix Icon -->
		<bo-button label="Next" suffix-icon="arrow-right" />

		<!-- Both Icons -->
		<bo-button label="Download" prefix-icon="download" suffix-icon="external-link" />
	</div>
</template>
```

## Icon Only Buttons

```vue
<template>
	<div class="flex gap-4">
		<bo-button prefix-icon="heart" aria-label="Like" />
		<bo-button prefix-icon="share" shape="pill" aria-label="Share" />
		<bo-button prefix-icon="settings" variant="secondary" aria-label="Settings" />
	</div>
</template>
```

## Loading States

Show loading indicators during async operations:

```vue
<template>
	<div class="flex gap-4">
		<bo-button label="Loading..." :is-loading="true" />
		<bo-button label="Pulse Loading" :is-loading="true" loader-type="pulse" />
		<bo-button label="Spinner Loading" :is-loading="true" loader-type="spinner" />
	</div>
</template>
```

## States

```vue
<template>
	<div class="flex gap-4">
		<bo-button label="Normal" />
		<bo-button label="Disabled" disabled />
		<bo-button label="Loading" :is-loading="true" />
		<bo-button label="Pressed" :pressed="true" />
	</div>
</template>
```

## Full Width

```vue
<template>
	<div class="w-full max-w-md">
		<bo-button label="Full Width Button" full-width />
	</div>
</template>
```

## Custom Colors

```vue
<template>
	<bo-button
		label="Custom Color"
		:custom-color="{
			background: '#ff6b6b',
			border: '#ff5252',
			text: '#ffffff',
		}"
	/>
</template>
```

## Event Handling

```vue
<template>
	<bo-button label="Click Me" @click="handleClick" />
</template>

<script setup>
	const handleClick = () => {
		console.log('Button clicked!');
	};
</script>
```

## Form Integration

```vue
<template>
	<form @submit.prevent="handleSubmit">
		<bo-button type="submit" label="Submit Form" />
		<bo-button type="reset" label="Reset" variant="secondary" />
	</form>
</template>
```

## Props

| Prop           | Type                              | Default     | Description                                   |
| -------------- | --------------------------------- | ----------- | --------------------------------------------- |
| `id`           | `string`                          | -           | Element ID (auto-generated if not provided)   |
| `dataTestId`   | `string`                          | -           | Data test ID (auto-generated if not provided) |
| `size`         | `BoButtonSize`                    | `'default'` | Size of the button                            |
| `variant`      | `BoButtonVariant`                 | `'primary'` | Color variant of the button                   |
| `disabled`     | `boolean`                         | `false`     | Whether the button is disabled                |
| `isLoading`    | `boolean`                         | `false`     | Whether to show loading state                 |
| `loaderType`   | `'spinner' \| 'pulse'`            | `'spinner'` | Type of loader to display                     |
| `shape`        | `BoButtonShape`                   | `'default'` | Visual appearance of the button               |
| `pressed`      | `boolean`                         | `false`     | Whether the button is pressed (toggle)        |
| `type`         | `'button' \| 'submit' \| 'reset'` | `'button'`  | HTML button type                              |
| `label`        | `string`                          | -           | Text content of the button                    |
| `fullWidth`    | `boolean`                         | `false`     | Whether button spans full width               |
| `prefixIcon`   | `Icon`                            | -           | Icon to display before label                  |
| `suffixIcon`   | `Icon`                            | -           | Icon to display after label                   |
| `customColor`  | `object`                          | -           | Custom color configuration                    |
| `role`         | `string`                          | -           | ARIA role attribute                           |
| `ariaLabel`    | `string`                          | -           | ARIA label attribute                          |
| `ariaExpanded` | `boolean`                         | -           | ARIA expanded state                           |
| `ariaPressed`  | `boolean`                         | -           | ARIA pressed state                            |

## Events

| Event   | Payload      | Description                      |
| ------- | ------------ | -------------------------------- |
| `click` | `MouseEvent` | Fired when button is clicked     |
| `focus` | `FocusEvent` | Fired when button receives focus |
| `blur`  | `FocusEvent` | Fired when button loses focus    |

## Types

```typescript
type BoButtonVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'destructive'
	| 'light'
	| 'dark';

type BoButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

type BoButtonShape = 'default' | 'pill' | 'outline' | 'link';
```

## Accessibility

- Semantic HTML `<button>` element
- Full keyboard navigation support
- ARIA attributes for screen readers
- Focus management and visual indicators
- Loading states announced to assistive technologies
- Icon-only buttons should include `aria-label`
