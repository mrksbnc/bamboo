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

<div class="flex gap-4 flex-wrap">
  <bo-button variant="primary">Primary</bo-button>
  <bo-button variant="secondary">Secondary</bo-button>
  <bo-button variant="success">Success</bo-button>
  <bo-button variant="warning">Warning</bo-button>
  <bo-button variant="destructive">Destructive</bo-button>
  <bo-button variant="dark">Dark</bo-button>
</div>
:::

```vue
<bo-button variant="primary">Primary</bo-button>
<bo-button variant="secondary">Secondary</bo-button>
<bo-button variant="success">Success</bo-button>
<bo-button variant="warning">Warning</bo-button>
<bo-button variant="destructive">Destructive</bo-button>
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
  <bo-button kind="filled">Filled</bo-button>
  <bo-button kind="outline">Outline</bo-button>
  <bo-button kind="ghost">Ghost</bo-button>
</div>
:::

```vue
<bo-button kind="filled">Filled</bo-button>
<bo-button kind="outline">Outline</bo-button>
<bo-button kind="ghost">Ghost</bo-button>
```

## With Icons

Buttons can include prefix and suffix icons to enhance their visual appeal and functionality.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-button prefix-icon="home">Home</bo-button>
  <bo-button suffix-icon="arrow-right">Next</bo-button>
  <bo-button prefix-icon="download" suffix-icon="external-link">Download</bo-button>
  <bo-button prefix-icon="heart" />
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
  <bo-button :is-loading="true" loader-type="spinner">Spinner</bo-button>
  <bo-button :is-loading="true" loader-type="pulse">Pulse</bo-button>
</div>
:::

```vue
<bo-button :is-loading="true">Loading</bo-button>
<bo-button :is-loading="true" loader-type="spinner">Spinner</bo-button>
<bo-button :is-loading="true" loader-type="pulse">Pulse</bo-button>
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
