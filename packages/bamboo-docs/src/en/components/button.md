---
title: Button
description: Trigger actions with compact, styled controls.
category: form
tags:
  - button
  - action
  - form
  - variants
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton } from '@mrksbnc/bamboo-vue';

const pressed = ref(false);
const buttonVariants = ['primary', 'secondary', 'success', 'warning', 'destructive', 'light', 'dark'] as const;
const buttonKinds = ['default', 'outline', 'ghost', 'link'] as const;

const basicExample = `<bo-button>Save changes</bo-button>`;

const variantsExample = `<div class="flex flex-wrap gap-2">
  <bo-button variant="primary">Primary</bo-button>
  <bo-button variant="secondary">Secondary</bo-button>
  <bo-button variant="success">Success</bo-button>
  <bo-button variant="warning">Warning</bo-button>
  <bo-button variant="destructive">Destructive</bo-button>
  <bo-button variant="light">Light</bo-button>
  <bo-button variant="dark">Dark</bo-button>
</div>`;

const kindsExample = `<div class="flex flex-wrap gap-2">
  <bo-button kind="default">Default</bo-button>
  <bo-button kind="outline">Outline</bo-button>
  <bo-button kind="ghost">Ghost</bo-button>
  <bo-button kind="link">Link</bo-button>
</div>`;

const outlineExample = `<div class="flex flex-wrap gap-2">
  <bo-button kind="outline" variant="primary">Primary outline</bo-button>
  <bo-button kind="outline" variant="secondary">Secondary outline</bo-button>
  <bo-button kind="outline" variant="destructive">Destructive outline</bo-button>
</div>`;

const ghostExample = `<div class="flex flex-wrap gap-2">
  <bo-button kind="ghost" variant="primary">Primary ghost</bo-button>
  <bo-button kind="ghost" variant="secondary">Secondary ghost</bo-button>
  <bo-button kind="ghost" variant="destructive">Destructive ghost</bo-button>
</div>`;

const matrixExample = `<div class="min-w-[44rem] space-y-3">
  <div v-for="kind in buttonKinds" :key="kind" class="grid grid-cols-[5rem_1fr] items-center gap-3">
    <span class="text-sm font-medium">{{ kind }}</span>
    <div class="flex flex-wrap gap-2">
      <bo-button v-for="variant in buttonVariants" :key="\`\${kind}-\${variant}\`" :kind="kind" :variant="variant">
        {{ variant }}
      </bo-button>
    </div>
  </div>
</div>`;

const sizesExample = `<div class="flex flex-wrap items-center gap-2">
  <bo-button size="xs">Extra small</bo-button>
  <bo-button size="sm">Small</bo-button>
  <bo-button size="default">Default</bo-button>
  <bo-button size="lg">Large</bo-button>
  <bo-button size="xl">Extra large</bo-button>
</div>`;

const shapesExample = `<div class="flex flex-wrap gap-2">
  <bo-button shape="default">Default radius</bo-button>
  <bo-button shape="pill">Pill</bo-button>
  <bo-button shape="flat">Flat</bo-button>
</div>`;

const statesExample = `<div class="flex flex-wrap items-center gap-2">
  <bo-button is-loading>Saving</bo-button>
  <bo-button is-loading loader-type="pulse">Publishing</bo-button>
  <bo-button disabled>Disabled</bo-button>
  <bo-button :pressed="pressed" @click="pressed = !pressed">{{ pressed ? 'Pressed' : 'Press me' }}</bo-button>
</div>`;

const iconsExample = `<div class="flex flex-wrap gap-2">
  <bo-button prefix-icon="plus">New project</bo-button>
  <bo-button suffix-icon="arrow_right">Continue</bo-button>
  <bo-button prefix-icon="download" aria-label="Download" />
</div>`;

const layoutExample = `<div class="grid w-full max-w-sm gap-3">
  <bo-button full-width>Full width action</bo-button>
  <bo-button type="submit">Submit form</bo-button>
</div>`;

const customColorExample = `<bo-button
  kind="default"
  :custom-color="{ background: '#0f766e', border: '#115e59', text: '#ffffff' }"
>
  Custom color
</bo-button>`;
</script>

# Button

Use `bo-button` for actions, form submission, navigation triggers, and other explicit user commands. Use `variant` for semantic emphasis and `kind` for the surface treatment.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-button>Save changes</bo-button>
</ExampleFrame>

## Outline Buttons

Use `kind="outline"` when the button needs a visible boundary without a filled background. Pair it with `variant` to preserve the action’s semantic color.

<ExampleFrame :code="outlineExample">
  <div class="flex flex-wrap gap-2">
    <bo-button kind="outline" variant="primary">Primary outline</bo-button>
    <bo-button kind="outline" variant="secondary">Secondary outline</bo-button>
    <bo-button kind="outline" variant="destructive">Destructive outline</bo-button>
  </div>
</ExampleFrame>

## Ghost Buttons

Use `kind="ghost"` for low-emphasis actions that should gain a surface only on hover or focus.

<ExampleFrame :code="ghostExample">
  <div class="flex flex-wrap gap-2">
    <bo-button kind="ghost" variant="primary">Primary ghost</bo-button>
    <bo-button kind="ghost" variant="secondary">Secondary ghost</bo-button>
    <bo-button kind="ghost" variant="destructive">Destructive ghost</bo-button>
  </div>
</ExampleFrame>

## Variants

Variants express the meaning or emphasis of an action.

<ExampleFrame :code="variantsExample">
  <div class="flex flex-wrap gap-2">
    <bo-button variant="primary">Primary</bo-button>
    <bo-button variant="secondary">Secondary</bo-button>
    <bo-button variant="success">Success</bo-button>
    <bo-button variant="warning">Warning</bo-button>
    <bo-button variant="destructive">Destructive</bo-button>
    <bo-button variant="light">Light</bo-button>
    <bo-button variant="dark">Dark</bo-button>
  </div>
</ExampleFrame>

## Kinds

Kinds change the surface treatment without changing the semantic variant.

<ExampleFrame :code="kindsExample">
  <div class="flex flex-wrap gap-2">
    <bo-button kind="default">Default</bo-button>
    <bo-button kind="outline">Outline</bo-button>
    <bo-button kind="ghost">Ghost</bo-button>
    <bo-button kind="link">Link</bo-button>
  </div>
</ExampleFrame>

## Variant and Kind Matrix

Every semantic variant works with every surface kind. Use this matrix to compare the combinations in both light and dark themes.

<ExampleFrame :code="matrixExample" align="start">
  <div class="w-full overflow-x-auto">
    <div class="min-w-[44rem] space-y-3">
      <div v-for="kind in buttonKinds" :key="kind" class="grid grid-cols-[5rem_1fr] items-center gap-3">
        <span class="text-sm font-medium">{{ kind }}</span>
        <div class="flex flex-wrap gap-2">
          <bo-button v-for="variant in buttonVariants" :key="`${kind}-${variant}`" :kind="kind" :variant="variant">
            {{ variant }}
          </bo-button>
        </div>
      </div>
    </div>
  </div>
</ExampleFrame>

## Sizes

The default height is compact. Use the smaller sizes for dense toolbars and the larger sizes for prominent actions.

<ExampleFrame :code="sizesExample">
  <div class="flex flex-wrap items-center gap-2">
    <bo-button size="xs">Extra small</bo-button>
    <bo-button size="sm">Small</bo-button>
    <bo-button size="default">Default</bo-button>
    <bo-button size="lg">Large</bo-button>
    <bo-button size="xl">Extra large</bo-button>
  </div>
</ExampleFrame>

## Shapes

`shape` controls the corner treatment. Prefer `kind` for new surface styling; `shape` remains available for explicit geometry.

<ExampleFrame :code="shapesExample">
  <div class="flex flex-wrap gap-2">
    <bo-button shape="default">Default radius</bo-button>
    <bo-button shape="pill">Pill</bo-button>
    <bo-button shape="flat">Flat</bo-button>
  </div>
</ExampleFrame>

## States

Loading buttons are disabled while their loader is visible. `pressed` exposes an `aria-pressed` state for reversible actions.

<ExampleFrame :code="statesExample">
  <div class="flex flex-wrap items-center gap-2">
    <bo-button is-loading>Saving</bo-button>
    <bo-button is-loading loader-type="pulse">Publishing</bo-button>
    <bo-button disabled>Disabled</bo-button>
    <bo-button :pressed="pressed" @click="pressed = !pressed">{{ pressed ? 'Pressed' : 'Press me' }}</bo-button>
  </div>
</ExampleFrame>

## Icons

Use `prefixIcon` and `suffixIcon` for text buttons. An icon-only button must provide `ariaLabel` or `ariaLabelledBy`.

<ExampleFrame :code="iconsExample">
  <div class="flex flex-wrap gap-2">
    <bo-button prefix-icon="plus">New project</bo-button>
    <bo-button suffix-icon="arrow_right">Continue</bo-button>
    <bo-button prefix-icon="download" aria-label="Download" />
  </div>
</ExampleFrame>

## Layout and Custom Colors

Use `fullWidth` for form actions and `customColor` only when a semantic variant cannot express the product-specific color.

<ExampleFrame :code="layoutExample">
  <div class="grid w-full max-w-sm gap-3">
    <bo-button full-width>Full width action</bo-button>
    <bo-button type="submit">Submit form</bo-button>
  </div>
</ExampleFrame>

<ExampleFrame :code="customColorExample">
  <bo-button
    kind="default"
    :custom-color="{ background: '#0f766e', border: '#115e59', text: '#ffffff' }"
  >
    Custom color
  </bo-button>
</ExampleFrame>

## API Reference

### Props

| Prop                                                   | Type                                                      | Default       | Description                                                                      |
| ------------------------------------------------------ | --------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| `id` / `dataTestId`                                    | `string`                                                  | autogenerated | Root button attributes.                                                          |
| `variant`                                              | `BoButtonVariant`                                         | `primary`     | `primary`, `secondary`, `success`, `warning`, `destructive`, `light`, or `dark`. |
| `kind`                                                 | `BoButtonKind`                                            | `default`     | `default`, `outline`, `ghost`, or `link`.                                        |
| `shape`                                                | `BoButtonShape`                                           | `default`     | `default`, `pill`, or `flat` corner treatment.                                   |
| `size`                                                 | `BoButtonSize`                                            | `default`     | `xs`, `sm`, `default`, `lg`, or `xl`.                                            |
| `disabled` / `isLoading`                               | `boolean`                                                 | `false`       | Prevents activation; loading also displays a loader.                             |
| `loaderType`                                           | `BoLoaderType`                                            | `spinner`     | `spinner` or `pulse`.                                                            |
| `pressed`                                              | `boolean`                                                 | -             | Adds the pressed state and `aria-pressed`.                                       |
| `fullWidth`                                            | `boolean`                                                 | `false`       | Expands the button to its container width.                                       |
| `type` / `name`                                        | `string`                                                  | `button` / -  | Native button attributes.                                                        |
| `prefixIcon` / `suffixIcon`                            | `Icon`                                                    | -             | Icons around the slot content.                                                   |
| `customColor`                                          | `{ text?: string; border?: string; background?: string }` | -             | CSS color overrides.                                                             |
| `role` / `ariaLabel` / `ariaLabelledBy`                | native ARIA types                                         | `button` / -  | Accessible semantics and naming.                                                 |
| `ariaDescribedBy` / `ariaExpanded` / `ariaHasPopup`    | native ARIA types                                         | -             | Additional accessible state.                                                     |
| `ariaDisabled` / `ariaLive` / `tabIndex` / `accessKey` | native attribute types                                    | -             | Native accessibility and keyboard attributes.                                    |

### Slots and Events

| Name          | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| `default`     | Button label and custom content.                                     |
| native events | `click`, `focus`, `blur`, `keydown`, and other native button events. |
