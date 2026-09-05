---
title: Badge
description: A small label used to indicate status, category, or metadata on an element.
category: display
tags:
  - badge
  - status
  - tag
outline: deep
---

<script setup lang="ts">
import { BoBadge } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-badge label="Badge" />`;

const slotExample = `<bo-badge>apple</bo-badge>`;

const kindsExample = `<bo-badge label="Default" kind="default" />
<bo-badge label="Outline" kind="outline" />`;

const filledVariantsExample = `<bo-badge label="Primary" variant="primary" />
<bo-badge label="Secondary" variant="secondary" />
<bo-badge label="Success" variant="success" />
<bo-badge label="Warning" variant="warning" />
<bo-badge label="Destructive" variant="destructive" />
<bo-badge label="Light" variant="light" />
<bo-badge label="Black" variant="black" />`;

const outlineVariantsExample = `<bo-badge label="Primary" kind="outline" variant="primary" />
<bo-badge label="Secondary" kind="outline" variant="secondary" />
<bo-badge label="Success" kind="outline" variant="success" />
<bo-badge label="Warning" kind="outline" variant="warning" />
<bo-badge label="Destructive" kind="outline" variant="destructive" />
<bo-badge label="Light" kind="outline" variant="light" />
<bo-badge label="Black" kind="outline" variant="black" />`;

const sizesExample = `<bo-badge label="SM" size="sm" />
<bo-badge label="Default" size="default" />
<bo-badge label="LG" size="lg" />`;

const shapesExample = `<bo-badge label="Default" shape="default" />
<bo-badge label="Pill" shape="pill" />
<bo-badge label="Flat" shape="flat" />
<bo-badge prefix-icon="x_octagon" shape="circle" />
<bo-badge prefix-icon="x_octagon" shape="circle" kind="outline" />`;

const iconsExample = `<bo-badge label="Prefix Icon" prefix-icon="x_octagon" />
<bo-badge label="Suffix Icon" suffix-icon="x_octagon" />`;

const customColorsExample = `<bo-badge label="CB" custom-color="#880808" />
<bo-badge label="CB" custom-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
<bo-badge label="CB" custom-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
<bo-badge label="CB" kind="outline" custom-color="oklch(84.5% 0.143 164.978)" />`;

const cursorExample = `<bo-badge label="cursor-auto" cursor="cursor-auto" />
<bo-badge label="cursor-pointer" cursor="cursor-pointer" />
<bo-badge label="cursor-not-allowed" cursor="cursor-not-allowed" />`;
</script>

# Badge

A small label used to indicate status, category, or metadata on an element.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-badge label="Badge" />
</ExampleFrame>

Or with a slot:

<ExampleFrame :code="slotExample">
  <bo-badge>apple</bo-badge>
</ExampleFrame>

## Kinds

Badges come in two kinds. The default kind is `default`.

- `default`: filled with a background color
- `outline`: transparent background with a border

<ExampleFrame :code="kindsExample">
  <div class="flex gap-4 items-center">
    <bo-badge label="Default" kind="default" />
    <bo-badge label="Outline" kind="outline" />
  </div>
</ExampleFrame>

## Variants

### Filled

<ExampleFrame :code="filledVariantsExample">
  <div class="flex gap-4 items-center flex-wrap">
    <bo-badge label="Primary" variant="primary" />
    <bo-badge label="Secondary" variant="secondary" />
    <bo-badge label="Success" variant="success" />
    <bo-badge label="Warning" variant="warning" />
    <bo-badge label="Destructive" variant="destructive" />
    <bo-badge label="Light" variant="light" />
    <bo-badge label="Black" variant="black" />
  </div>
</ExampleFrame>

### Outline

<ExampleFrame :code="outlineVariantsExample">
  <div class="flex gap-4 items-center flex-wrap">
    <bo-badge label="Primary" kind="outline" variant="primary" />
    <bo-badge label="Secondary" kind="outline" variant="secondary" />
    <bo-badge label="Success" kind="outline" variant="success" />
    <bo-badge label="Warning" kind="outline" variant="warning" />
    <bo-badge label="Destructive" kind="outline" variant="destructive" />
    <bo-badge label="Light" kind="outline" variant="light" />
    <bo-badge label="Black" kind="outline" variant="black" />
  </div>
</ExampleFrame>

## Sizes

<ExampleFrame :code="sizesExample">
  <div class="flex gap-4 items-center">
    <bo-badge label="SM" size="sm" />
    <bo-badge label="Default" size="default" />
    <bo-badge label="LG" size="lg" />
  </div>
</ExampleFrame>

## Shapes

Available shapes: `default`, `pill`, `flat`, `circle`.

:::warning
To render a circle badge, set `shape="circle"` and provide a `prefixIcon` or `suffixIcon`.
:::

<ExampleFrame :code="shapesExample">
  <div class="flex gap-4 items-center">
    <bo-badge label="Default" shape="default" />
    <bo-badge label="Pill" shape="pill" />
    <bo-badge label="Flat" shape="flat" />
    <bo-badge prefix-icon="x_octagon" shape="circle" />
    <bo-badge prefix-icon="x_octagon" shape="circle" kind="outline" />
  </div>
</ExampleFrame>

## Icons

Use `prefixIcon` and `suffixIcon` to display icons before or after the label.

<ExampleFrame :code="iconsExample">
  <div class="flex gap-4 items-center">
    <bo-badge label="Prefix Icon" prefix-icon="x_octagon" />
    <bo-badge label="Suffix Icon" suffix-icon="x_octagon" />
  </div>
</ExampleFrame>

## Custom Colors

Use `customColor` and `customTextColor` to set arbitrary colors. Accepts hex, RGB/RGBA, OKLCH, or CSS variables.

<ExampleFrame :code="customColorsExample">
  <div class="flex gap-4 items-center">
    <bo-badge label="CB" custom-color="#880808" />
    <bo-badge label="CB" custom-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
    <bo-badge label="CB" custom-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
    <bo-badge label="CB" kind="outline" custom-color="oklch(84.5% 0.143 164.978)" />
  </div>
</ExampleFrame>

## Cursor

<ExampleFrame :code="cursorExample">
  <div class="flex gap-4">
    <bo-badge label="cursor-auto" cursor="cursor-auto" />
    <bo-badge label="cursor-pointer" cursor="cursor-pointer" />
    <bo-badge label="cursor-not-allowed" cursor="cursor-not-allowed" />
  </div>
</ExampleFrame>

## API Reference

### Props

| Prop              | Type                           | Default         | Description                                             |
| ----------------- | ------------------------------ | --------------- | ------------------------------------------------------- |
| `id`              | `string`                       | `Autogenerated` | The id of the element.                                  |
| `dataTestId`      | `string`                       | `Autogenerated` | The data test id of the element.                        |
| `label`           | `string`                       | -               | The label text to display on the badge.                 |
| `kind`            | `BoBadgeKind`                  | `default`       | The type of the badge (filled or outline).              |
| `size`            | `BoBadgeSize`                  | `default`       | The size of the badge.                                  |
| `shape`           | `BoBadgeShape`                 | `default`       | The shape of the badge.                                 |
| `variant`         | `BoBadgeVariant`               | `primary`       | The color variant of the badge.                         |
| `cursor`          | `BoCursor`                     | `cursor-auto`   | The cursor style of the badge.                          |
| `customColor`     | `string`                       | -               | The custom background color for the badge.              |
| `customTextColor` | `string`                       | -               | The custom text color for the badge.                    |
| `prefixIcon`      | `Icon`                         | -               | The prefix icon of the badge.                           |
| `suffixIcon`      | `Icon`                         | -               | The suffix icon of the badge.                           |
| `role`            | `HTMLAttributes['role']`       | -               | The role of the element.                                |
| `ariaLabel`       | `HTMLAttributes['aria-label']` | -               | Defines a string value that labels the current element. |

### Slots

| Name      | Props | Description                        |
| --------- | ----- | ---------------------------------- |
| `default` | `-`   | The default slot for badge content |

:::tip
Using the default slot replaces the label. The `prefixIcon` and `suffixIcon` props still apply.
:::
