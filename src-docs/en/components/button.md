---
title: Button
description: A versatile button component with support for different sizes, variants, loading states, and icons.
outline: deep
---

<script setup lang="ts">
import { BoButton, BoButtonProps, BoButtonType } from '@/components/bo-button';
import { BoSize } from '@/core/size';
import { BoVariant } from '@/core/variant';
import { BoLoaderType } from '@/core/loader';
</script>

# Button

A versatile button component with support for different sizes, variants, loading states, and icons that match the library's design system.

## Basic Usage

::: tip
The button component automatically handles accessibility, keyboard navigation, and focus management.
:::

```vue
<bo-button label="Click me" />
```

<div style="margin-top: 1rem;">
  <bo-button label="Click me" />
</div>

## API Reference

### Props

| Name              | Type                              | Default        | Description                              |
| ----------------- | --------------------------------- | -------------- | ---------------------------------------- |
| `id`              | `string`                          | auto-generated | Unique identifier for the button element |
| `dataTestId`      | `string`                          | `'bo-button'`  | Data test ID for testing                 |
| `size`            | `BoSize`                          | `'default'`    | Size of the button                       |
| `variant`         | `BoVariant`                       | `'primary'`    | Visual variant of the button             |
| `disabled`        | `boolean`                         | `false`        | Whether the button is disabled           |
| `isLoading`       | `boolean`                         | `false`        | Whether the button is in loading state   |
| `loaderType`      | `BoLoaderType`                    | `'spinner'`    | Type of loader (spinner or ring)         |
| `type`            | `'button' \| 'submit' \| 'reset'` | `'button'`     | HTML button type                         |
| `label`           | `string`                          | -              | Text content of the button               |
| `fullWidth`       | `boolean`                         | `false`        | Whether button takes full width          |
| `customCssClass`  | `string`                          | -              | Custom CSS class for styling             |
| `tabIndex`        | `number`                          | -              | Tab index for keyboard navigation        |
| `role`            | `string`                          | -              | ARIA role attribute                      |
| `ariaLabel`       | `string`                          | -              | Accessible label for screen readers      |
| `ariaLabelledBy`  | `string`                          | -              | ID of element that labels the button     |
| `ariaDescribedBy` | `string`                          | -              | ID of element that describes the button  |
| `ariaLive`        | `AriaLive`                        | `'polite'`     | Live region behavior                     |
| `prefixIcon`      | `Icon`                            | -              | Icon to display before label             |
| `suffixIcon`      | `Icon`                            | -              | Icon to display after label              |

### Slots

| Name      | Description                         |
| --------- | ----------------------------------- |
| `default` | Custom content to replace the label |

## Sizes

The button component supports different sizes with the `size` prop. The default size is `default`. The sizes match the library's size system (`BoSize`).

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-button label="Extra Small" :size="BoSize.extra_small" />
  <bo-button label="Small" :size="BoSize.small" />
  <bo-button label="Default" :size="BoSize.default" />
  <bo-button label="Large" :size="BoSize.large" />
  <bo-button label="Extra Large" :size="BoSize.extra_large" />
</div>

```vue
<bo-button label="Extra Small" :size="BoSize.extra_small" />
<bo-button label="Small" :size="BoSize.small" />
<bo-button label="Default" :size="BoSize.default" />
<bo-button label="Large" :size="BoSize.large" />
<bo-button label="Extra Large" :size="BoSize.extra_large" />
```

## Button Types

The button component supports different button types with the `type` prop. The default type is `button`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-button label="Button" type="button" />
  <bo-button label="Submit" type="submit" />
  <bo-button label="Reset" type="reset" />
</div>

```vue
<bo-button label="Button" type="button" />
<bo-button label="Submit" type="submit" />
<bo-button label="Reset" type="reset" />
```

## Variants

The button component supports different variants with the `variant` prop. The default variant is `primary`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-button label="Primary" :variant="BoVariant.primary" />
  <bo-button label="Secondary" :variant="BoVariant.secondary" />
  <bo-button label="Success" :variant="BoVariant.success" />
  <bo-button label="Warning" :variant="BoVariant.warning" />
  <bo-button label="Danger" :variant="BoVariant.danger" />
  <bo-button label="White" :variant="BoVariant.white" />
  <bo-button label="Black" :variant="BoVariant.black" />
</div>

```vue
<bo-button label="Primary" :variant="BoVariant.primary" />
<bo-button label="Secondary" :variant="BoVariant.secondary" />
<bo-button label="Success" :variant="BoVariant.success" />
<bo-button label="Warning" :variant="BoVariant.warning" />
<bo-button label="Danger" :variant="BoVariant.danger" />
<bo-button label="White" :variant="BoVariant.white" />
<bo-button label="Black" :variant="BoVariant.black" />
```

## Disabled State

The button can be disabled using the `disabled` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-button label="Enabled Button" />
  <bo-button label="Disabled Button" :disabled="true" />
</div>

```vue
<bo-button label="Enabled Button" />
<bo-button label="Disabled Button" :disabled="true" />
```

## Loading State

The button can display a loading indicator using the `isLoading` prop. When loading, the button is automatically disabled.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-button label="Loading Spinner" :is-loading="true" />
  <bo-button label="Loading Ring" :is-loading="true" loader-type="ring" />
</div>

```vue
<bo-button label="Loading Spinner" :is-loading="true" />
<bo-button label="Loading Ring" :is-loading="true" loader-type="ring" />
```

## Full Width

The button can take the full width of its container using the `fullWidth` prop.

<div style="margin-top: 2rem;">
  <bo-button label="Full Width Button" :full-width="true" />
</div>

```vue
<bo-button label="Full Width Button" :full-width="true" />
```

## Icons

The button supports prefix and suffix icons. Icons are automatically sized based on the button size.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-button label="With Icon" prefix-icon="heart" />
  <bo-button label="With Suffix" suffix-icon="arrow-right" />
  <bo-button label="Both Icons" prefix-icon="star" suffix-icon="check" />
</div>

```vue
<bo-button label="With Icon" prefix-icon="heart" />
<bo-button label="With Suffix" suffix-icon="arrow-right" />
<bo-button label="Both Icons" prefix-icon="star" suffix-icon="check" />
```

## Using Slots

You can use slots to customize the button content instead of using the `label` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-button>
    Custom <strong>Content</strong>
  </bo-button>
</div>

```vue
<bo-button>
  Custom <strong>Content</strong>
</bo-button>
```

## Click Events

The button emits a `click` event when clicked (unless disabled).

```vue
<bo-button label="Click me" @click="handleClick" />
```

## Accessibility

The button component supports various accessibility attributes:

- `ariaLabel`: Provides an accessible label
- `ariaLabelledBy`: References an element that labels the button
- `ariaDescribedBy`: References elements that describe the button
- `role`: Allows customization of the button's role
- `lang`: Specifies the language of the button content

```vue
<bo-button label="Accessible Button" aria-label="This is an accessible button" role="button" />
```

## Type Definitions

::: code-group

```ts [bo-button.ts]
enum BoButtonType {
	button = 'button',
	submit = 'submit',
	reset = 'reset',
}

interface BoButtonProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The size of the button. */
	size?: BoSize;
	/** The variant of the button. */
	variant?: BoVariant;
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** Loading state of the button */
	isLoading?: boolean;
	/** The type of the loader @default spinner */
	loaderType?: BoLoaderType;
	/** The type of the button. */
	type?: BoButtonType;
	/** The text content of the button. */
	label?: string;
	/** Whether the button is full width or not. */
	fullWidth?: boolean;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** The role of the element. */
	role?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string;
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string;
	/** Indicates that an element will be updated, and describes the types of updates the user agents,
	 * assistive technologies, and user can expect from the live region.
	 *
	 * - off: The element is not exposed to an assistive technology.
	 * - polite: The element is exposed to an assistive technology that "actively" indicates that user input will occur.
	 * - assertive: The element is exposed to an assistive technology that "passively" indicates that user input will occur.
	 */
	ariaLive?: AriaLive;
	/** Tab index of the element. */
	tabIndex?: number;
}
```

```ts [shared/loader.ts]
export enum BoLoaderType {
	spinner = 'spinner',
	ring = 'ring',
}
```

```ts [shared/size.ts]
export enum BoSize {
	extra_small = 'extra-small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra-large',
}
```

```ts [shared/variant.ts]
export enum BoVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	light = 'light',
	dark = 'dark',
}
```

```ts [core/accessibility.ts]
export enum AriaLive {
	polite = 'polite',
	assertive = 'assertive',
	off = 'off',
}
```

:::
