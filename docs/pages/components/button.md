<script setup>
import { BoButton, BoButtonVariant, BoButtonShape } from '@/components/bo-button';
import { BoSize, BoLoaderType } from '@/shared';
</script>

# Button

Buttons allow users to trigger actions with a single click or tap. They communicate calls to action and allow users to interact with pages.

```js
import { BoButton } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-button label="Button" />
</template>

<script setup>
import { BoButton } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-button label="Button" />
</div>

## Props

| Name         | Type              | Default     | Description                                           |
| ------------ | ----------------- | ----------- | ----------------------------------------------------- |
| `label`      | `string`          | `undefined` | Text displayed inside the button                      |
| `variant`    | `BoButtonVariant` | `primary`   | Controls the button's color scheme                    |
| `shape`      | `BoButtonShape`   | `default`   | Controls the button's appearance style                |
| `loaderType` | `BoLoaderType`    | `spinner`   | Type of loader to show during loading state           |
| `isLoading`  | `boolean`         | `false`     | Shows a loading indicator when true                   |
| `size`       | `BoSize`          | `default`   | Controls the button's size                            |
| `useSlot`    | `boolean`         | `false`     | Use slot content instead of label                     |
| `prefixIcon` | `Icon`            | `undefined` | Icon to display before the label                      |
| `suffixIcon` | `Icon`            | `undefined` | Icon to display after the label                       |
| `autofocus`  | `boolean`         | `false`     | Sets autofocus attribute                              |
| `disabled`   | `boolean`         | `false`     | Disables the button                                   |
| `type`       | `HtmlButtonType`  | `button`    | HTML button type attribute                            |
| `fullWidth`  | `boolean`         | `false`     | Makes the button take the full width of its container |
| `pressed`    | `boolean`         | `false`     | For toggle buttons, indicates pressed state           |
| `ariaLabel`  | `string`          | `undefined` | Accessible name for the button                        |
| `id`         | `string`          | `undefined` | Unique ID for the button                              |

## Events

| Name    | Payload      | Description                    |
| ------- | ------------ | ------------------------------ |
| `click` | `MouseEvent` | Emitted when button is clicked |

## Slots

| Name      | Description              |
| --------- | ------------------------ |
| `default` | Button content           |
| `prefix`  | Content before the label |
| `suffix`  | Content after the label  |

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

export type BoButtonProps = {
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
};
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
	<bo-button :size="BoSize.small" label="Small" />
	<bo-button :size="BoSize.default" label="Default" />
	<bo-button :size="BoSize.large" label="Large" />
</div>

```vue
<bo-button :size="BoSize.small" label="Small" />
<bo-button :size="BoSize.default" label="Default" />
<bo-button :size="BoSize.large" label="Large" />
```

## States

### Loading

<div class="flex gap-4 items-center my-4">
	<bo-button isLoading label="Loading" />
	<bo-button isLoading :loaderType="BoLoaderType.pulse" label="Loading with Pulse" />
</div>

```vue
<bo-button isLoading label="Loading" />
<bo-button isLoading :loaderType="BoLoaderType.pulse" label="Loading with Pulse" />
```

### Disabled

<div class="flex gap-4 items-center my-4">
	<bo-button disabled label="Disabled" />
</div>

```vue
<bo-button disabled label="Disabled" />
```

## With Icons

<div class="flex gap-4 items-center my-4">
	<bo-button prefix-icon="check" label="With Prefix Icon" />
	<bo-button suffix-icon="arrow-right" label="With Suffix Icon" />
	<bo-button prefix-icon="heart" suffix-icon="star" label="Both Icons" />
</div>

```vue
<bo-button prefix-icon="check" label="With Prefix Icon" />
<bo-button suffix-icon="arrow-right" label="With Suffix Icon" />
<bo-button prefix-icon="heart" suffix-icon="star" label="Both Icons" />
```

## Full Width

<div class="w-full my-4">
	<bo-button full-width label="Full Width Button" />
</div>

```vue
<bo-button full-width label="Full Width Button" />
```

## Custom Content

<div class="flex gap-4 items-center my-4">
	<bo-button use-slot>
		<span class="flex items-center gap-2">
			Custom <b>Content</b> 🎉
		</span>
	</bo-button>
</div>

```vue
<bo-button use-slot>
	<span class="flex items-center gap-2">
		Custom <b>Content</b> 🎉
	</span>
</bo-button>
```

## Event Handling

```vue
<template>
	<bo-button
		label="Click Me"
		@click="handleClick"
	/>
</template>

<script setup>
const handleClick = (event) => {
	console.log('Button clicked:', event);
};
</script>
```
