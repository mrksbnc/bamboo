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
import { BoButton } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-button>Button</bo-button>`;

const variantsExample = `<div class="flex gap-4 flex-wrap items-center">
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
</div>`;

const sizesExample = `<div class="flex gap-4 items-center flex-wrap">
  <bo-button size="xs">XS</bo-button>
  <bo-button size="sm">SM</bo-button>
  <bo-button size="default">Default</bo-button>
  <bo-button size="lg">LG</bo-button>
  <bo-button size="xl">XL</bo-button>
</div>`;

const kindsExample = `<div class="flex gap-4 flex-wrap">
  <bo-button kind="default">Filled</bo-button>
  <bo-button kind="outline">Outline</bo-button>
  <bo-button kind="ghost">Ghost</bo-button>
  <bo-button kind="link">Link</bo-button>
</div>`;

const iconsExample = `<div class="flex gap-4 flex-wrap">
  <bo-button prefix-icon="home">Home</bo-button>
  <bo-button suffix-icon="search">Search</bo-button>
  <bo-button prefix-icon="download" suffix-icon="heart">Download</bo-button>
  <bo-button prefix-icon="droplet" />
</div>`;

const loadingExample = `<div class="flex gap-4 flex-wrap">
  <bo-button :is-loading="true">Loading</bo-button>
</div>`;

const disabledExample = `<div class="flex gap-4 flex-wrap">
  <bo-button :disabled="true">Disabled</bo-button>
  <bo-button :disabled="true" variant="secondary">Disabled Secondary</bo-button>
  <bo-button :disabled="true" kind="outline">Disabled Outline</bo-button>
</div>`;

const fullWidthExample = `<div class="w-full">
  <bo-button :full-width="true">Full Width Button</bo-button>
</div>`;

const customColorsExample = `<div class="flex gap-4 flex-wrap">
  <bo-button :custom-color="{ background: '#ff6b6b', text: '#ffffff' }">Custom Red</bo-button>
</div>`;

const typesExample = `<bo-button type="button">Button</bo-button>
<bo-button type="submit">Submit</bo-button>
<bo-button type="reset">Reset</bo-button>`;
</script>

# Button

The `bo-button` component is used to render a button with various styles and functionality. It can be used to trigger actions, navigate to different pages, or display a call to action.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-button>Button</bo-button>
</ExampleFrame>

## Variants

The `variant` prop allows you to customize the color of the button. The default variant is `primary`.

<ExampleFrame :code="variantsExample">
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
</ExampleFrame>

## Sizes

The `size` prop allows you to customize the size of the button. The default size is `default`.

<ExampleFrame :code="sizesExample">
  <div class="flex gap-4 items-center flex-wrap">
    <bo-button size="xs">XS</bo-button>
    <bo-button size="sm">SM</bo-button>
    <bo-button size="default">Default</bo-button>
    <bo-button size="lg">LG</bo-button>
    <bo-button size="xl">XL</bo-button>
  </div>
</ExampleFrame>

## Kinds

The `kind` prop allows you to customize the style of the button. The default kind is `filled`.

<ExampleFrame :code="kindsExample">
  <div class="flex gap-4 flex-wrap">
    <bo-button kind="default">Filled</bo-button>
    <bo-button kind="outline">Outline</bo-button>
    <bo-button kind="ghost">Ghost</bo-button>
    <bo-button kind="link">Link</bo-button>
  </div>
</ExampleFrame>

## With Icons

Buttons can include prefix and suffix icons to enhance their visual appeal and functionality.

<ExampleFrame :code="iconsExample">
  <div class="flex gap-4 flex-wrap">
    <bo-button prefix-icon="home">Home</bo-button>
    <bo-button suffix-icon="search">Search</bo-button>
    <bo-button prefix-icon="download" suffix-icon="heart">Download</bo-button>
    <bo-button prefix-icon="droplet" />
  </div>
</ExampleFrame>

## Loading State

Buttons can display a loading state to indicate ongoing processes.

<ExampleFrame :code="loadingExample">
  <div class="flex gap-4 flex-wrap">
    <bo-button :is-loading="true">Loading</bo-button>
  </div>
</ExampleFrame>

## Disabled State

Buttons can be disabled to prevent user interaction.

<ExampleFrame :code="disabledExample">
  <div class="flex gap-4 flex-wrap">
    <bo-button :disabled="true">Disabled</bo-button>
    <bo-button :disabled="true" variant="secondary">Disabled Secondary</bo-button>
    <bo-button :disabled="true" kind="outline">Disabled Outline</bo-button>
  </div>
</ExampleFrame>

## Full Width

Buttons can span the full width of their container.

<ExampleFrame :code="fullWidthExample">
  <div class="w-full">
    <bo-button :full-width="true">Full Width Button</bo-button>
  </div>
</ExampleFrame>

## Custom Colors

Buttons can use custom colors for background, border, and text.

::: warning
Custom color props like `customColor.background` will take precedence over the `variant` and `kind` props.
:::

<ExampleFrame :code="customColorsExample">
  <div class="flex gap-4 flex-wrap">
    <bo-button :custom-color="{ background: '#ff6b6b', text: '#ffffff' }">Custom Red</bo-button>
  </div>
</ExampleFrame>

## Button Types

Buttons can have different HTML types for form usage. The `type` prop accepts `button`, `submit`, and `reset`.

<ExampleFrame :code="typesExample">
  <div class="flex gap-4 flex-wrap">
    <bo-button type="button">Button</bo-button>
    <bo-button type="submit">Submit</bo-button>
    <bo-button type="reset">Reset</bo-button>
  </div>
</ExampleFrame>

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
