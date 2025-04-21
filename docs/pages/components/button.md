<script setup>
import { BoButton, BoButtonVariant, BoButtonShape } from '@/components/bo-button';
import { BoSize } from '@/shared';
import { Icon } from '@/components/bo-icon';
</script>

# Button

A versatile button component that can be used for actions, form submissions, and navigation.

```js
import { BoButton } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-button label="Click me" />
</template>

<script setup>
import { BoButton } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-button label="Click me" />
</div>

## Props

| Name         | Type              | Default     | Description                               |
| ------------ | ----------------- | ----------- | ----------------------------------------- |
| `label`      | `string`          | `undefined` | Text content of the button                |
| `variant`    | `BoButtonVariant` | `primary`   | Button appearance style                   |
| `shape`      | `BoButtonShape`   | `default`   | Shape of the button                       |
| `loaderType` | `BoLoaderType`    | `spinner`   | Type of loader to show when loading       |
| `isLoading`  | `boolean`         | `false`     | Whether the button is in a loading state  |
| `size`       | `BoSize`          | `default`   | Button size                               |
| `prefixIcon` | `Icon`            | `Icon.none` | Icon to display before the label          |
| `suffixIcon` | `Icon`            | `Icon.none` | Icon to display after the label           |
| `autofocus`  | `boolean`         | `false`     | Whether the button should be autofocused  |
| `disabled`   | `boolean`         | `false`     | Whether the button is disabled            |
| `type`       | `HtmlButtonType`  | `button`    | HTML button type                          |
| `fullWidth`  | `boolean`         | `false`     | Whether the button should take full width |
| `pressed`    | `boolean`         | `undefined` | Whether the button is in a pressed state  |
| `ariaLabel`  | `string`          | `Button`    | Accessible name for the button            |
| `id`         | `string`          | `auto`      | Unique ID for the button                  |

## Events

| Name    | Payload      | Description          |
| ------- | ------------ | -------------------- |
| `click` | `MouseEvent` | Emitted when clicked |

## Slots

| Name      | Description  |
| --------- | ------------ |
| `default` | Main content |

## Types

```ts
export enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoButtonShape {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
	link = 'link',
}

export interface BoButtonProps {
	label?: string;
	variant?: BoButtonVariant;
	shape?: BoButtonShape;
	loaderType?: BoLoaderType;
	isLoading?: boolean;
	size?: BoSize;
	useSlot?: boolean;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	autofocus?: boolean;
	disabled?: boolean;
	type?: HtmlButtonType;
	fullWidth?: boolean;
	pressed?: boolean;
	ariaLabel?: string;
	id?: string;
}
```

## Variants

<div class="flex gap-4 items-center my-4">
  <bo-button :variant="BoButtonVariant.primary" label="Primary" />
  <bo-button :variant="BoButtonVariant.secondary" label="Secondary" />
  <bo-button :variant="BoButtonVariant.danger" label="Danger" />
  <bo-button :variant="BoButtonVariant.warning" label="Warning" />
  <bo-button :variant="BoButtonVariant.success" label="Success" />
  <bo-button :variant="BoButtonVariant.light" label="Light" />
  <bo-button :variant="BoButtonVariant.dark" label="Dark" />
</div>

```vue
<bo-button :variant="BoButtonVariant.primary" label="Primary" />
<bo-button :variant="BoButtonVariant.secondary" label="Secondary" />
<bo-button :variant="BoButtonVariant.danger" label="Danger" />
<bo-button :variant="BoButtonVariant.warning" label="Warning" />
<bo-button :variant="BoButtonVariant.success" label="Success" />
<bo-button :variant="BoButtonVariant.light" label="Light" />
<bo-button :variant="BoButtonVariant.dark" label="Dark" />
```

## Shapes

<div class="flex gap-4 items-center my-4">
  <bo-button :shape="BoButtonShape.default" label="Default" />
  <bo-button :shape="BoButtonShape.pill" label="Pill" />
  <bo-button :shape="BoButtonShape.outline" label="Outline" />
  <bo-button :shape="BoButtonShape.link" label="Link" />
</div>

```vue
<bo-button :shape="BoButtonShape.default" label="Default" />
<bo-button :shape="BoButtonShape.pill" label="Pill" />
<bo-button :shape="BoButtonShape.outline" label="Outline" />
<bo-button :shape="BoButtonShape.link" label="Link" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
  <bo-button :size="BoSize.extra_small" label="Extra Small" />
  <bo-button :size="BoSize.small" label="Small" />
  <bo-button :size="BoSize.default" label="Default" />
  <bo-button :size="BoSize.large" label="Large" />
  <bo-button :size="BoSize.extra_large" label="Extra Large" />
</div>

```vue
<bo-button :size="BoSize.extra_small" label="Extra Small" />
<bo-button :size="BoSize.small" label="Small" />
<bo-button :size="BoSize.default" label="Default" />
<bo-button :size="BoSize.large" label="Large" />
<bo-button :size="BoSize.extra_large" label="Extra Large" />
```

## States

### Disabled

<div class="flex gap-4 items-center my-4">
  <bo-button disabled label="Disabled Button" />
</div>

```vue
<bo-button disabled label="Disabled Button" />
```

### Loading

<div class="flex gap-4 items-center my-4">
  <bo-button :is-loading="true" label="Loading Button" />
</div>

```vue
<bo-button :is-loading="true" label="Loading Button" />
```

## With Icons

<div class="flex gap-4 items-center my-4">
  <bo-button :prefix-icon="Icon.chevronLeft" label="Previous" />
  <bo-button :suffix-icon="Icon.chevronRight" label="Next" />
  <bo-button :prefix-icon="Icon.check" />
</div>

```vue
<bo-button :prefix-icon="Icon.chevronLeft" label="Previous" />
<bo-button :suffix-icon="Icon.chevronRight" label="Next" />
<bo-button :prefix-icon="Icon.check" />
```

## Event Handling

```vue
<template>
	<bo-button
		label="Click me"
		@click="handleClick"
	/>
</template>

<script setup>
const handleClick = (event) => {
	console.log('Button clicked:', event);
};
</script>
```

## Usage Examples

### In a Form

```vue
<form @submit.prevent="submitForm">
  <bo-input v-model="formData.name" label="Name" />
  <bo-button type="submit" label="Submit" />
</form>
```

### As a Toggle Button

```vue
<template>
	<bo-button
		:pressed="isPressed"
		@click="togglePressed"
		label="Toggle Me"
	/>
</template>

<script setup>
import { ref } from 'vue';

const isPressed = ref(false);
const togglePressed = () => {
	isPressed.value = !isPressed.value;
};
</script>
```
