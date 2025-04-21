<script setup>
import { BoButton, BoButtonVariant, BoButtonShape } from '@/components/bo-button';
import { BoSize } from '@/shared';
</script>

# Button

The Button component is a versatile and accessible button element that supports various styles, sizes, and states. It includes features like loading states, icons, and different variants to match your application's design system. The component is designed with accessibility in mind, supporting keyboard navigation and screen reader announcements.

## Basic Example

```html
<bo-button label="Click me" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-button label="Click me" />
</div>

### Props

| Prop name    | Type              | Default   | Description                                  |
| ------------ | ----------------- | --------- | -------------------------------------------- |
| `id`         | `string`          | Auto      | Unique identifier for the button             |
| `label`      | `string`          | -         | Button text content                          |
| `variant`    | `BoButtonVariant` | `primary` | Button style variant                         |
| `shape`      | `BoButtonShape`   | `default` | Button shape style                           |
| `size`       | `BoSize`          | `md`      | Button size                                  |
| `loaderType` | `BoLoaderType`    | -         | Type of loader to show when loading          |
| `isLoading`  | `boolean`         | `false`   | Whether the button is in loading state       |
| `useSlot`    | `boolean`         | `false`   | Whether to use slot content instead of label |
| `prefixIcon` | `Icon`            | -         | Icon to show before the label                |
| `suffixIcon` | `Icon`            | -         | Icon to show after the label                 |
| `autofocus`  | `boolean`         | `false`   | Whether the button should autofocus          |
| `disabled`   | `boolean`         | `false`   | Whether the button is disabled               |
| `type`       | `HtmlButtonType`  | `button`  | HTML button type (button, submit, reset)     |
| `fullWidth`  | `boolean`         | `false`   | Whether the button should take full width    |
| `pressed`    | `boolean`         | `false`   | For toggle buttons, pressed state            |
| `ariaLabel`  | `string`          | -         | Accessible name for the button               |

### Types

```ts
export enum BoButtonVariant {
	primary = 'primary', // Primary brand color
	secondary = 'secondary', // Secondary brand color
	danger = 'danger', // Danger/error state
	warning = 'warning', // Warning state
	success = 'success', // Success state
	light = 'light', // Light background
	dark = 'dark', // Dark background
}

export enum BoButtonShape {
	default = 'default', // Default button style
	pill = 'pill', // Rounded pill style
	outline = 'outline', // Outlined style
	link = 'link', // Link-like appearance
}
```

## Variants

The Button component supports various style variants:

<div class="flex flex-wrap gap-4 items-center">
  <bo-button label="Primary" :variant="BoButtonVariant.primary" />
  <bo-button label="Secondary" :variant="BoButtonVariant.secondary" />
  <bo-button label="Danger" :variant="BoButtonVariant.danger" />
  <bo-button label="Warning" :variant="BoButtonVariant.warning" />
  <bo-button label="Success" :variant="BoButtonVariant.success" />
  <bo-button label="Light" :variant="BoButtonVariant.light" />
  <bo-button label="Dark" :variant="BoButtonVariant.dark" />
</div>

```html
<bo-button
	label="Primary"
	:variant="BoButtonVariant.primary"
/>
<bo-button
	label="Secondary"
	:variant="BoButtonVariant.secondary"
/>
<bo-button
	label="Danger"
	:variant="BoButtonVariant.danger"
/>
<bo-button
	label="Warning"
	:variant="BoButtonVariant.warning"
/>
<bo-button
	label="Success"
	:variant="BoButtonVariant.success"
/>
<bo-button
	label="Light"
	:variant="BoButtonVariant.light"
/>
<bo-button
	label="Dark"
	:variant="BoButtonVariant.dark"
/>
```

## Shapes

Different button shapes are available:

<div class="flex flex-wrap gap-4 items-center">
  <bo-button label="Default" :shape="BoButtonShape.default" />
  <bo-button label="Pill" :shape="BoButtonShape.pill" />
  <bo-button label="Outline" :shape="BoButtonShape.outline" />
  <bo-button label="Link" :shape="BoButtonShape.link" />
</div>

```html
<bo-button
	label="Default"
	:shape="BoButtonShape.default"
/>
<bo-button
	label="Pill"
	:shape="BoButtonShape.pill"
/>
<bo-button
	label="Outline"
	:shape="BoButtonShape.outline"
/>
<bo-button
	label="Link"
	:shape="BoButtonShape.link"
/>
```

## Sizes

The Button component supports different sizes:

<div class="flex flex-wrap gap-4 items-center">
  <bo-button label="Extra Small" :size="BoSize.xs" />
  <bo-button label="Small" :size="BoSize.sm" />
  <bo-button label="Medium" :size="BoSize.md" />
  <bo-button label="Large" :size="BoSize.lg" />
  <bo-button label="Extra Large" :size="BoSize.xl" />
</div>

```html
<bo-button
	label="Extra Small"
	:size="BoSize.xs"
/>
<bo-button
	label="Small"
	:size="BoSize.sm"
/>
<bo-button
	label="Medium"
	:size="BoSize.md"
/>
<bo-button
	label="Large"
	:size="BoSize.lg"
/>
<bo-button
	label="Extra Large"
	:size="BoSize.xl"
/>
```

## With Icons

Buttons can include icons before or after the text:

<div class="flex flex-wrap gap-4 items-center">
  <bo-button label="Download" prefixIcon="download" />
  <bo-button label="Upload" suffixIcon="upload" />
  <bo-button prefixIcon="settings" />
</div>

```html
<bo-button
	label="Download"
	prefixIcon="download"
/>
<bo-button
	label="Upload"
	suffixIcon="upload"
/>
<bo-button prefixIcon="settings" />
```

## Loading State

Buttons can show a loading state:

<div class="flex flex-wrap gap-4 items-center">
  <bo-button label="Loading" :isLoading="true" />
  <bo-button label="Loading" :isLoading="true" loaderType="pulse" />
</div>

```html
<bo-button
	label="Loading"
	:isLoading="true"
/>
<bo-button
	label="Loading"
	:isLoading="true"
	loaderType="pulse"
/>
```

## Disabled State

Buttons can be disabled:

<div class="flex flex-wrap gap-4 items-center">
  <bo-button label="Disabled" :disabled="true" />
  <bo-button label="Disabled" :disabled="true" :variant="BoButtonVariant.secondary" />
</div>

```html
<bo-button
	label="Disabled"
	:disabled="true"
/>
<bo-button
	label="Disabled"
	:disabled="true"
	:variant="BoButtonVariant.secondary"
/>
```

## Full Width

Buttons can take the full width of their container:

<div class="flex flex-col gap-4 w-full">
  <bo-button label="Full Width" :fullWidth="true" />
  <bo-button label="Full Width" :fullWidth="true" :variant="BoButtonVariant.secondary" />
</div>

```html
<bo-button
	label="Full Width"
	:fullWidth="true"
/>
<bo-button
	label="Full Width"
	:fullWidth="true"
	:variant="BoButtonVariant.secondary"
/>
```

## Accessibility Features

The Button component includes several accessibility features:

- Keyboard navigation support (Enter, Space)
- ARIA attributes for screen readers
- Proper focus management
- Support for disabled state
- Custom accessible names for icon-only buttons
- Toggle button support with pressed state

## Best Practices

When using the Button component:

1. Always provide a label or ariaLabel for icon-only buttons
2. Use appropriate variants for different actions
3. Consider button size based on its importance and context
4. Use loading states for async actions
5. Test keyboard navigation and screen reader compatibility
6. Use disabled state appropriately
7. Consider using icons to enhance button meaning
