---
title: Button
description: Interactive button component with multiple variants, sizes, and states
category: form
tags:
  - button
  - action
  - form
  - interactive
outline: deep
---

<script setup lang="ts">
import { BoButton } from '@mrksbnc/bamboo-vue'
</script>

# Button

The `bo-button` component is used to render a button with various styles and functionality. It can be used to trigger actions, navigate to different pages, or display a call to action.

## Basic Usage

::: raw
<bo-button>Button</bo-button>
:::

```vue
<bo-button>Button</bo-button>
```

## Variants

The `variant` prop allows you to customize the color of the button. The default variant is `primary`.

::: raw

<div class="flex gap-4 flex-wrap items-center">
  <bo-button variant="primary">Primary</bo-button>
  <bo-button variant="secondary">Secondary</bo-button>
  <bo-button variant="success">Success</bo-button>
  <bo-button variant="warning">Warning</bo-button>
  <bo-button variant="destructive">Destructive</bo-button>
  <div class="p-2 bg-neutral-900 rounded">
    <bo-button variant="light">Light</bo-button>
  </div>
  <div class="p-2 bg-neutral-400 rounded">
    <bo-button variant="dark">Dark</bo-button>
  </div>
</div>
:::

```vue
<bo-button variant="primary">Primary</bo-button>
<bo-button variant="secondary">Secondary</bo-button>
<bo-button variant="success">Success</bo-button>
<bo-button variant="warning">Warning</bo-button>
<bo-button variant="destructive">Destructive</bo-button>
<bo-button variant="light">Light</bo-button>
<bo-button variant="dark">Dark</bo-button>
```

## Sizes

The `size` prop allows you to customize the size of the button. The default size is `default`.

::: raw

<div class="flex gap-4 items-center flex-wrap">
  <bo-button size="xs">XS</bo-button>
  <bo-button size="sm">SM</bo-button>
  <bo-button size="default">Default</bo-button>
  <bo-button size="lg">LG</bo-button>
  <bo-button size="xl">XL</bo-button>
</div>
:::

```vue
<bo-button size="xs">XS</bo-button>
<bo-button size="sm">SM</bo-button>
<bo-button size="default">Default</bo-button>
<bo-button size="lg">LG</bo-button>
<bo-button size="xl">XL</bo-button>
```

## Kinds

The `kind` prop allows you to customize the style of the button. The default kind is `filled`.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-button kind="default">Filled</bo-button>
  <bo-button kind="outline">Outline</bo-button>
  <bo-button kind="ghost">Ghost</bo-button>
  <bo-button kind="link">Link</bo-button>
</div>
:::

```vue
<bo-button kind="default">Filled</bo-button>
<bo-button kind="outline">Outline</bo-button>
<bo-button kind="ghost">Ghost</bo-button>
```

## With Icons

Buttons can include prefix and suffix icons to enhance their visual appeal and functionality.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-button prefix-icon="home">Home</bo-button>
  <bo-button suffix-icon="search">Search</bo-button>
  <bo-button prefix-icon="download" suffix-icon="heart">Download</bo-button>
  <bo-button prefix-icon="droplet" />
</div>
:::

```vue
<bo-button prefix-icon="home">Home</bo-button>
<bo-button suffix-icon="arrow-right">Next</bo-button>
<bo-button prefix-icon="download" suffix-icon="external-link">Download</bo-button>
<bo-button prefix-icon="heart" />
```

## Loading State

Buttons can display a loading state to indicate ongoing processes.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-button :is-loading="true">Loading</bo-button>
</div>
:::

```vue
<bo-button :is-loading="true">Loading</bo-button>
```

## Disabled State

Buttons can be disabled to prevent user interaction.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-button :disabled="true">Disabled</bo-button>
  <bo-button :disabled="true" variant="secondary">Disabled Secondary</bo-button>
  <bo-button :disabled="true" kind="outline">Disabled Outline</bo-button>
</div>
:::

```vue
<bo-button :disabled="true">Disabled</bo-button>
<bo-button :disabled="true" variant="secondary">Disabled Secondary</bo-button>
<bo-button :disabled="true" kind="outline">Disabled Outline</bo-button>
```

## Full Width

Buttons can span the full width of their container.

::: raw

<div class="w-full">
  <bo-button :full-width="true">Full Width Button</bo-button>
</div>
:::

```vue
<bo-button :full-width="true">Full Width Button</bo-button>
```

## Custom Colors

Buttons can use custom colors for background, border, and text.

::: warning
Custom color props like `customColor.background` will take precedence over the `variant` and `kind` props.
:::

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-button :custom-color="{ background: '#ff6b6b', text: '#ffffff' }">Custom Red</bo-button>
</div>
:::

```vue
<bo-button :custom-color="{ background: '#ff6b6b', text: '#ffffff' }">Custom Red</bo-button>
```

## Button Types

Buttons can have different HTML types for form usage. The `type` prop accepts `button`, `submit`, and `reset`.

```vue
<bo-button type="button">Button</bo-button>
<bo-button type="submit">Submit</bo-button>
<bo-button type="reset">Reset</bo-button>
```

## Props

| Prop                    | Type                                                                                       | Default     | Description                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------- |
| `size`                  | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl'`                                                | `'default'` | The size of the button.                                          |
| `variant`               | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'destructive' \| 'light' \| 'dark'` | `'primary'` | The color variant of the button.                                 |
| `kind`                  | `'default' \| 'outline' \| 'ghost' \| 'link'`                                              | `'default'` | The style kind of the button.                                    |
| `disabled`              | `boolean`                                                                                  | `false`     | Whether the button is disabled.                                  |
| `isLoading`             | `boolean`                                                                                  | `false`     | Whether the button shows a loading state.                        |
| `pressed`               | `boolean`                                                                                  | `false`     | Whether the button is in a pressed state (for toggles).          |
| `fullWidth`             | `boolean`                                                                                  | `false`     | Whether the button spans the full width of its container.        |
| `type`                  | `'button' \| 'submit' \| 'reset'`                                                          | `'button'`  | The HTML button type.                                            |
| `prefixIcon`            | `Icon`                                                                                     | -           | Icon to display before the button text.                          |
| `suffixIcon`            | `Icon`                                                                                     | -           | Icon to display after the button text.                           |
| `customColor`           | `{ background?: string; border?: string; text?: string }`                                  | -           | Custom colors for the button.                                    |
| `linkVariantWithShadow` | `boolean`                                                                                  | `false`     | Whether link variants should have shadow.                        |
| `name`                  | `string`                                                                                   | -           | The name attribute of the button.                                |
| `id`                    | `string`                                                                                   | -           | The id attribute of the button (auto-generated if not provided). |
| `dataTestId`            | `string`                                                                                   | -           | The data-testid attribute (auto-generated if not provided).      |
| `role`                  | `string`                                                                                   | `'button'`  | The ARIA role of the element.                                    |
| `ariaLabel`             | `string`                                                                                   | -           | Accessible label for the button.                                 |
| `ariaLabelledBy`        | `string`                                                                                   | -           | ID of element that labels this button.                           |
| `ariaDescribedBy`       | `string`                                                                                   | -           | ID of element that describes this button.                        |
| `ariaExpanded`          | `boolean`                                                                                  | -           | Whether the button controls expanded content.                    |
| `ariaHasPopup`          | `boolean \| 'menu' \| 'listbox' \| 'tree' \| 'grid' \| 'dialog'`                           | -           | Indicates the button has a popup.                                |
| `ariaDisabled`          | `boolean`                                                                                  | -           | ARIA disabled state (prefer using `disabled` prop).              |
| `ariaLive`              | `'off' \| 'polite' \| 'assertive'`                                                         | `'polite'`  | ARIA live region setting.                                        |
| `tabIndex`              | `number`                                                                                   | -           | Tab index for keyboard navigation.                               |
| `accessKey`             | `string`                                                                                   | -           | Keyboard shortcut to activate the button.                        |
