<script setup>
import { BoButton, BoButtonShape, BoButtonVariant } from '@/components/bo-button';
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoLoaderType, BoSize, HtmlButtonType } from '@/shared';
</script>

# Button

Buttons allow users to perform actions and make choices with a single tap. They communicate calls to action and decisions that users need to make.

## Basic Example

```html
<bo-button label="Click me" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-button label="Click me" />
</div>

### Props

| Prop name    | Type              | Default        | Description                            |
| ------------ | ----------------- | -------------- | -------------------------------------- |
| `label`      | `string`          | -              | Button text                            |
| `variant`    | `BoButtonVariant` | `primary`      | Color variant of the button            |
| `shape`      | `BoButtonShape`   | `default`      | Shape of the button                    |
| `loaderType` | `BoLoaderType`    | `spinner`      | Type of loader when in loading state   |
| `isLoading`  | `boolean`         | `false`        | Whether the button is in loading state |
| `size`       | `BoSize`          | `default`      | Size of the button                     |
| `useSlot`    | `boolean`         | `false`        | Use slot instead of label              |
| `prefixIcon` | `Icon`            | `Icon.none`    | Icon to display before the label       |
| `suffixIcon` | `Icon`            | `Icon.none`    | Icon to display after the label        |
| `autofocus`  | `boolean`         | `false`        | Autofocus the button when page loads   |
| `disabled`   | `boolean`         | `false`        | Disable the button                     |
| `type`       | `HtmlButtonType`  | `button`       | HTML button type                       |
| `fullWidth`  | `boolean`         | `false`        | Make the button full width             |
| `pressed`    | `boolean`         | `false`        | For toggle buttons, set pressed state  |
| `ariaLabel`  | `string`          | -              | Accessible name for the button         |
| `id`         | `string`          | Auto-generated | Unique ID for the button               |

### Slots

| Slot name | Description               |
| --------- | ------------------------- |
| `content` | Custom content for button |

### Types

```ts
export enum BoButtonVariant {
	primary = 'primary', // Blue theme
	secondary = 'secondary', // Gray theme
	danger = 'danger', // Red theme
	warning = 'warning', // Yellow theme
	success = 'success', // Green theme
	light = 'light', // Light theme
	dark = 'dark', // Dark theme
}

export enum BoButtonShape {
	default = 'default', // Standard button with rounded corners
	pill = 'pill', // Fully rounded button
	outline = 'outline', // Button with outline and transparent background
	link = 'link', // Button that looks like a link
}

export enum HtmlButtonType {
	button = 'button', // Default button type
	submit = 'submit', // Form submission button
	reset = 'reset', // Form reset button
}

export enum BoLoaderType {
	spinner = 'spinner', // Circular spinner
	pulse = 'pulse', // Pulsing dots
}
```

## Variants

Different color variants for the button.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.primary" label="Primary" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.secondary" label="Secondary" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.danger" label="Danger" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.warning" label="Warning" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.success" label="Success" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.light" label="Light" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.dark" label="Dark" />
  </div>
</div>

## Outline Variants

Different outline variants for the button.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.primary" 
    shape="outline"
    label="Primary" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.secondary" 
    shape="outline"
    label="Secondary" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.danger" label="Danger"
    shape="outline" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.warning" 
    shape="outline"
    label="Warning" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.success"
    shape="outline"
    label="Success" />
  </div>
  <div class="bg-neutral-800 p-2">
    <bo-button :variant="BoButtonVariant.light" shape="outline" label="Light" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.dark" shape="outline" label="Dark" />
  </div>
</div>

## Link Variants

Different link variants for the button.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.primary" 
    shape="link"
    label="Primary" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.secondary" 
    shape="link"
    label="Secondary" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.danger" 
    shape="link"
    label="Danger" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.warning" 
    shape="link"
    label="Warning" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.success" 
    shape="link"
    label="Success" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.light" 
    shape="link"
    label="Light" />

  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :variant="BoButtonVariant.dark" 
    shape="link"
    label="Dark" />
  </div>
</div>

```html
<bo-button
	:variant="BoButtonVariant.primary"
	label="Primary"
/>
<bo-button
	:variant="BoButtonVariant.secondary"
	label="Secondary"
/>
<bo-button
	:variant="BoButtonVariant.danger"
	label="Danger"
/>
<bo-button
	:variant="BoButtonVariant.warning"
	label="Warning"
/>
<bo-button
	:variant="BoButtonVariant.success"
	label="Success"
/>
<bo-button
	:variant="BoButtonVariant.light"
	label="Light"
/>
<bo-button
	:variant="BoButtonVariant.dark"
	label="Dark"
/>
```

## Shapes

Different shapes for the button.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center content-center">
    <bo-button :shape="BoButtonShape.default" label="Default Shape" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :shape="BoButtonShape.pill" label="Pill Shape" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :shape="BoButtonShape.outline" label="Outline Shape" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :shape="BoButtonShape.link" label="Link Shape" />
  </div>
</div>

```html
<bo-button
	:shape="BoButtonShape.default"
	label="Default Shape"
/>
<bo-button
	:shape="BoButtonShape.pill"
	label="Pill Shape"
/>
<bo-button
	:shape="BoButtonShape.outline"
	label="Outline Shape"
/>
<bo-button
	:shape="BoButtonShape.link"
	label="Link Shape"
/>
```

## Sizes

Available sizes for the button.

<div class="flex flex-wrap gap-4 items-end">
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.extra_small" label="Extra Small" />
    <p class="text-sm mt-2">Extra Small</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.small" label="Small" />
    <p class="text-sm mt-2">Small</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.default" label="Default" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.large" label="Large" />
    <p class="text-sm mt-2">Large</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.extra_large" label="Extra Large" />
    <p class="text-sm mt-2">Extra Large</p>
  </div>
</div>

## Icon only sizes

<div class="flex flex-wrap gap-4 items-end">
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.extra_small" prefix-icon="star" />
    <p class="text-sm mt-2">Extra Small</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.small" prefix-icon="star" />
    <p class="text-sm mt-2">Small</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.default" prefix-icon="star" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.large" prefix-icon="star" />
    <p class="text-sm mt-2">Large</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button :size="BoSize.extra_large" prefix-icon="star" />
    <p class="text-sm mt-2">Extra Large</p>
  </div>
</div>

```html
<bo-button
	:size="BoSize.extra_small"
	label="Extra Small"
/>
<bo-button
	:size="BoSize.small"
	label="Small"
/>
<bo-button
	:size="BoSize.default"
	label="Default"
/>
<bo-button
	:size="BoSize.large"
	label="Large"
/>
<bo-button
	:size="BoSize.extra_large"
	label="Extra Large"
/>
```

## With Icons

Buttons can include icons before or after the text.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center content-center">
    <bo-button label="Add Item" :prefix-icon="Icon.plus" />
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button label="Next Page" :suffix-icon="Icon.arrowRight" />
  </div>
    <div class="flex flex-col items-center content-center">
    <bo-button :prefix-icon="Icon.heart" />
  </div>
</div>

```html
<bo-button
	label="Add Item"
	:prefix-icon="Icon.plus"
/>
<bo-button
	label="Next Page"
	:suffix-icon="Icon.arrowRight"
/>
<bo-button :prefix-icon="Icon.heart" />
```

## Loading State

Buttons can display a loading indicator.

<div class="flex flex-wrap gap-1 items-center">
  <div class="flex flex-col items-center content-center">
    <bo-button 
      label="Loading..." 
      :is-loading="true" 
      :loader-type="BoLoaderType.spinner" 
    />
    <p class="text-sm mt-2">Spinner Loader</p>
  </div>
  <div class="flex flex-col items-center content-center">
    <bo-button 
      label="Loading..." 
      :is-loading="true" 
      :loader-type="BoLoaderType.pulse" 
    />
    <p class="text-sm mt-2">Pulse Loader</p>
  </div>
</div>

```html
<bo-button
	label="Loading..."
	:is-loading="true"
	:loader-type="BoLoaderType.spinner"
/>

<bo-button
	label="Loading..."
	:is-loading="true"
	:loader-type="BoLoaderType.pulse"
/>
```

## Disabled State

Buttons can be disabled to prevent user interaction.

<div class="flex gap-4 items-center">
  <bo-button label="Disabled Button" :disabled="true" />
</div>

```html
<bo-button
	label="Disabled Button"
	:disabled="true"
/>
```

## Full Width

Buttons can span the full width of their container.

<div class="w-full">
  <bo-button label="Full Width Button" :full-width="true" />
</div>

```html
<bo-button
	label="Full Width Button"
	:full-width="true"
/>
```

## Custom Content with Slot

Use the content slot for custom button content.

<div class="flex gap-4 items-center">
  <bo-button>
    <template #default>
      <span class="flex items-center gap-2">
        <span>Custom</span>
        <bo-icon :icon="Icon.star" />
        <span>Content</span>
      </span>
    </template>
  </bo-button>
</div>

```html
<bo-button :use-slot="true">
	<template #default>
		<span class="flex items-center gap-2">
			<span>Custom</span>
			<bo-icon :icon="Icon.star" />
			<span>Content</span>
		</span>
	</template>
</bo-button>
```
