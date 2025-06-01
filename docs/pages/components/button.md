<script setup>
import BoButton from '@/components/button/bo-button.vue';
import { BoButtonVariant, BoButtonShape } from '@/components/button/bo-button';
import { BoSize } from '@/shared/bo-size';
import { BoLoaderType } from '@/shared/bo-loader';
import { HtmlButtonType } from '@/shared/html-button';
import { Icon } from '@/components/icon/bo-icon';
</script>

# Button

A button is a control that allows users to perform an action, such as submitting a form or navigating to a new page.

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
| `id`         | `string`          | `auto`      | Unique ID for the button                  |
| `label`      | `string`          | `undefined` | Text content of the button                |
| `variant`    | `BoButtonVariant` | `primary`   | Button appearance style                   |
| `shape`      | `BoButtonShape`   | `default`   | Shape of the button                       |
| `size`       | `BoSize`          | `default`   | Button size                               |
| `prefixIcon` | `Icon`            | `Icon.none` | Icon to display before the label          |
| `suffixIcon` | `Icon`            | `Icon.none` | Icon to display after the label           |
| `disabled`   | `boolean`         | `false`     | Whether the button is disabled            |
| `isLoading`  | `boolean`         | `false`     | Whether the button is in a loading state  |
| `loaderType` | `BoLoaderType`    | `spinner`   | Type of loader to show when loading       |
| `autofocus`  | `boolean`         | `false`     | Whether the button should be autofocused  |
| `type`       | `HtmlButtonType`  | `button`    | HTML button type                          |
| `fullWidth`  | `boolean`         | `false`     | Whether the button should take full width |
| `ariaLabel`  | `string`          | `Button`    | Accessible name for the button            |

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
enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

enum BoButtonShape {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
	link = 'link',
}

interface BoButtonProps {
	/**
	 * Unique ID for the button, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Text content of the button
	 */
	label?: string;
	/**
	 * Button appearance style
	 * @default BoButtonVariant.primary
	 */
	variant?: BoButtonVariant;
	/**
	 * Shape of the button
	 * @default BoButtonShape.default
	 */
	shape?: BoButtonShape;
	/**
	 * Button size
	 * @default BoSize.default
	 */
	size?: BoSize;
	/**
	 * The prefix icon to display before the label
	 */
	prefixIcon?: Icon;
	/**
	 * The suffix icon to display after the label
	 */
	suffixIcon?: Icon;
	/**
	 * Whether the button should be autofocused
	 * @default false
	 */
	autofocus?: boolean;
	/**
	 * Whether the button is disabled
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Whether the button is in a loading state
	 */
	isLoading?: boolean;
	/**
	 * Type of loader to show when loading
	 * @default BoLoaderType.spinner
	 */
	loaderType?: BoLoaderType;
	/**
	 * HTML button type
	 * @default 'button'
	 */
	type?: HtmlButtonType;
	/**
	 * Whether the button should take full width
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * Custom accessible name for the button, especially important for icon-only buttons
	 * @see https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
	 */
	ariaLabel?: string;
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

Each size is shown with both a labeled button and an icon-only button to demonstrate the consistent height across different button types.

<div class="flex items-center gap-4 my-4">
	<bo-button :size="BoSize.extra_small" label="Extra Small" />
	<bo-button :size="BoSize.extra_small" :prefix-icon="Icon.star" aria-label="Extra Small Icon Button" />
</div>

<div class="flex items-center gap-4 my-4">
	<bo-button :size="BoSize.small" label="Small" />
	<bo-button :size="BoSize.small" :prefix-icon="Icon.star" aria-label="Small Icon Button" />
</div>

<div class="flex items-center gap-4 my-4">
	<bo-button :size="BoSize.default" label="Default" />
	<bo-button :size="BoSize.default" :prefix-icon="Icon.star" aria-label="Default Icon Button" />
</div>

<div class="flex items-center gap-4 my-4">
	<bo-button :size="BoSize.large" label="Large" />
	<bo-button :size="BoSize.large" :prefix-icon="Icon.star" aria-label="Large Icon Button" />
</div>

<div class="flex items-center gap-4 my-4">
	<bo-button :size="BoSize.extra_large" label="Extra Large" />
	<bo-button :size="BoSize.extra_large" :prefix-icon="Icon.star" aria-label="Extra Large Icon Button" />
</div>

```vue
<!-- Extra Small -->
<bo-button :size="BoSize.extra_small" label="Extra Small" />
<bo-button
	:size="BoSize.extra_small"
	:prefix-icon="Icon.star"
	aria-label="Extra Small Icon Button"
/>

<!-- Small -->
<bo-button :size="BoSize.small" label="Small" />
<bo-button :size="BoSize.small" :prefix-icon="Icon.star" aria-label="Small Icon Button" />

<!-- Default -->
<bo-button :size="BoSize.default" label="Default" />
<bo-button :size="BoSize.default" :prefix-icon="Icon.star" aria-label="Default Icon Button" />

<!-- Large -->
<bo-button :size="BoSize.large" label="Large" />
<bo-button :size="BoSize.large" :prefix-icon="Icon.star" aria-label="Large Icon Button" />

<!-- Extra Large -->
<bo-button :size="BoSize.extra_large" label="Extra Large" />
<bo-button
	:size="BoSize.extra_large"
	:prefix-icon="Icon.star"
	aria-label="Extra Large Icon Button"
/>
```

## States

### Disabled

<div class="flex gap-4 items-center my-4">
	<bo-button disabled label="Disabled Button" />
	<bo-button disabled :prefix-icon="Icon.star" aria-label="Disabled Icon Button" />
</div>

```vue
<bo-button disabled label="Disabled Button" />
<bo-button disabled :prefix-icon="Icon.star" aria-label="Disabled Icon Button" />
```

### Loading

<div class="flex gap-4 items-center my-4">
	<bo-button :is-loading="true" label="Loading Button" />
	<bo-button :is-loading="true" label="Loading Button" :loader-type="BoLoaderType.pulse" />
	<bo-button :is-loading="true" :prefix-icon="Icon.star" aria-label="Loading Icon Button" />
</div>

```vue
<bo-button :is-loading="true" label="Loading Button" />
<bo-button :is-loading="true" label="Loading Button" :loader-type="BoLoaderType.pulse" />
<bo-button :is-loading="true" :prefix-icon="Icon.star" aria-label="Loading Icon Button" />
```

## Full Width

<div class="my-4">
	<bo-button full-width label="Full Width Button" />
</div>

```vue
<bo-button full-width label="Full Width Button" />
```

## With Icons

<div class="flex gap-4 items-center my-4">
	<bo-button :prefix-icon="Icon.chevron_left" label="Previous" />
	<bo-button :suffix-icon="Icon.chevron_right" label="Next" />
	<bo-button :prefix-icon="Icon.check" :suffix-icon="Icon.chevron_down" label="Complete" />
</div>

```vue
<bo-button :prefix-icon="Icon.chevron_left" label="Previous" />
<bo-button :suffix-icon="Icon.chevron_right" label="Next" />
<bo-button :prefix-icon="Icon.check" :suffix-icon="Icon.chevron_down" label="Complete" />
```

## Icon-Only Buttons

Icon-only buttons are created by providing an icon without a label. Always include an `aria-label` for accessibility.

<div class="flex gap-4 items-center my-4">
	<bo-button :prefix-icon="Icon.check" aria-label="Confirm" />
	<bo-button :prefix-icon="Icon.x" aria-label="Cancel" :variant="BoButtonVariant.danger" />
	<bo-button :prefix-icon="Icon.settings" aria-label="Settings" :shape="BoButtonShape.outline" />
	<bo-button :prefix-icon="Icon.heart" aria-label="Like" :shape="BoButtonShape.pill" />
</div>

```vue
<bo-button :prefix-icon="Icon.check" aria-label="Confirm" />
<bo-button :prefix-icon="Icon.x" aria-label="Cancel" :variant="BoButtonVariant.danger" />
<bo-button :prefix-icon="Icon.settings" aria-label="Settings" :shape="BoButtonShape.outline" />
<bo-button :prefix-icon="Icon.heart" aria-label="Like" :shape="BoButtonShape.pill" />
```

## Custom Content

<div class="flex gap-4 items-center my-4">
	<bo-button>
		<div class="flex items-center gap-2">
			<span>🚀</span>
			<span>Launch</span>
		</div>
	</bo-button>
</div>

```vue
<bo-button>
	<div class="flex items-center gap-2">
		<span>🚀</span>
		<span>Launch</span>
	</div>
</bo-button>
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
