---
title: Avatar
description: A graphical representation of a user or entity, rendered from an image, initials, or a fallback.
category: display
tags:
  - avatar
  - profile
  - user
  - image
  - initials
outline: deep
---

<script setup lang="ts">
import { BoAvatar } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-avatar label="Avatar" />
<bo-avatar src="../../assets/avatar.jpeg" />
<bo-avatar />`;

const variantsExample = `<bo-avatar label="Primary" variant="primary" />
<bo-avatar label="Secondary" variant="secondary" />
<bo-avatar label="Destructive" variant="destructive" />
<bo-avatar label="Warning" variant="warning" />
<bo-avatar label="Success" variant="success" />
<bo-avatar label="Dark" variant="dark" />`;

const sizesExample = `<bo-avatar label="XS" size="xs" />
<bo-avatar label="SM" size="sm" />
<bo-avatar label="Default" size="default" />
<bo-avatar label="LG" size="lg" />
<bo-avatar label="XL" size="xl" />`;

const shapesExample = `<bo-avatar label="Default" kind="default" />
<bo-avatar label="Flat" kind="flat" />
<bo-avatar label="Circle" kind="circle" />
<bo-avatar label="Outline" kind="outline" />
<bo-avatar label="Outline Flat" kind="outline-flat" />
<bo-avatar label="Outline Circle" kind="outline-circle" />`;

const indicatorsExample = `<bo-avatar label="Online" indicator-kind="online" />
<bo-avatar label="Offline" indicator-kind="offline" />
<bo-avatar label="Busy" indicator-kind="busy" />
<bo-avatar label="Away" indicator-kind="away" />`;

const indicatorPositionExample = `<bo-avatar label="TL" indicator-position="top-left" indicator-kind="online" />
<bo-avatar label="TR" indicator-position="top-right" indicator-kind="offline" />
<bo-avatar label="BL" indicator-position="bottom-left" indicator-kind="busy" />
<bo-avatar label="BR" indicator-position="bottom-right" indicator-kind="away" />`;

const customColorsExample = `<bo-avatar label="CB" custom-color="#880808" custom-text-color="#FFFFFF" />
<bo-avatar label="CB" custom-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
<bo-avatar label="CB" custom-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
<bo-avatar label="OL" kind="outline" custom-color="oklch(84.5% 0.143 164.978)" />`;

const cursorExample = `<bo-avatar label="cursor-auto" cursor="cursor-auto" />
<bo-avatar label="cursor-pointer" cursor="cursor-pointer" />
<bo-avatar label="cursor-not-allowed" cursor="cursor-not-allowed" />`;
</script>

# Avatar

A graphical representation of a user or entity, rendered from an image, initials, or a fallback image.

:::tip
When neither `src` nor `label` is provided, a default fallback image is rendered.
:::

## Basic Usage

<ExampleFrame :code="basicExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="Avatar" />
    <bo-avatar src="../../assets/avatar.jpeg" />
    <bo-avatar />
  </div>
</ExampleFrame>

## Variants

<ExampleFrame :code="variantsExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="Primary" variant="primary" />
    <bo-avatar label="Secondary" variant="secondary" />
    <bo-avatar label="Destructive" variant="destructive" />
    <bo-avatar label="Warning" variant="warning" />
    <bo-avatar label="Success" variant="success" />
    <bo-avatar label="Dark" variant="dark" />
  </div>
</ExampleFrame>

## Sizes

<ExampleFrame :code="sizesExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="XS" size="xs" />
    <bo-avatar label="SM" size="sm" />
    <bo-avatar label="Default" size="default" />
    <bo-avatar label="LG" size="lg" />
    <bo-avatar label="XL" size="xl" />
  </div>
</ExampleFrame>

## Shapes

Use the `kind` prop to control the shape of the avatar.

<ExampleFrame :code="shapesExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="Default" kind="default" />
    <bo-avatar label="Flat" kind="flat" />
    <bo-avatar label="Circle" kind="circle" />
    <bo-avatar label="Outline" kind="outline" />
    <bo-avatar label="Outline Flat" kind="outline-flat" />
    <bo-avatar label="Outline Circle" kind="outline-circle" />
  </div>
</ExampleFrame>

## Indicators

Use `indicatorKind` to display a status indicator on the avatar.

<ExampleFrame :code="indicatorsExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="Online" indicator-kind="online" />
    <bo-avatar label="Offline" indicator-kind="offline" />
    <bo-avatar label="Busy" indicator-kind="busy" />
    <bo-avatar label="Away" indicator-kind="away" />
  </div>
</ExampleFrame>

## Indicator Position

Use `indicatorPosition` to place the indicator. Defaults to `top-right`.

<ExampleFrame :code="indicatorPositionExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="TL" indicator-position="top-left" indicator-kind="online" />
    <bo-avatar label="TR" indicator-position="top-right" indicator-kind="offline" />
    <bo-avatar label="BL" indicator-position="bottom-left" indicator-kind="busy" />
    <bo-avatar label="BR" indicator-position="bottom-right" indicator-kind="away" />
  </div>
</ExampleFrame>

## Custom Colors

Use `customColor` and `customTextColor` for arbitrary colors. Accepts hex, RGB/RGBA, OKLCH, or CSS variables.

<ExampleFrame :code="customColorsExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="CB" custom-color="#880808" custom-text-color="#FFFFFF" />
    <bo-avatar label="CB" custom-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
    <bo-avatar label="CB" custom-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
    <bo-avatar label="OL" kind="outline" custom-color="oklch(84.5% 0.143 164.978)" />
  </div>
</ExampleFrame>

## Cursor

<ExampleFrame :code="cursorExample">
  <div class="flex gap-4 items-center">
    <bo-avatar label="cursor-auto" cursor="cursor-auto" />
    <bo-avatar label="cursor-pointer" cursor="cursor-pointer" />
    <bo-avatar label="cursor-not-allowed" cursor="cursor-not-allowed" />
  </div>
</ExampleFrame>

## API Reference

### Props

| Prop                | Type                           | Default         | Description                                             |
| ------------------- | ------------------------------ | --------------- | ------------------------------------------------------- |
| `id`                | `string`                       | `Autogenerated` | The id of the element.                                  |
| `dataTestId`        | `string`                       | `Autogenerated` | The data test id of the element.                        |
| `label`             | `string`                       | -               | The initials label of the avatar.                       |
| `src`               | `string`                       | -               | The image URL for the avatar.                           |
| `alt`               | `string`                       | -               | The alt text for the avatar image.                      |
| `kind`              | `BoAvatarKind`                 | `'default'`     | The shape of the avatar.                                |
| `size`              | `BoAvatarSize`                 | `'default'`     | The size of the avatar.                                 |
| `cursor`            | `BoCursor`                     | `cursor-auto`   | The cursor style of the avatar.                         |
| `variant`           | `BoAvatarVariant`              | `'primary'`     | The color variant of the avatar.                        |
| `customColor`       | `string`                       | -               | Custom background color for the avatar.                 |
| `customTextColor`   | `string`                       | -               | Custom text color for the avatar.                       |
| `indicatorKind`     | `BoAvatarIndicatorKind`        | `'none'`        | The status indicator type.                              |
| `indicatorPosition` | `BoAvatarIndicatorPosition`    | `'top-right'`   | The position of the indicator.                          |
| `role`              | `HTMLAttributes['role']`       | -               | The role of the element.                                |
| `ariaLabel`         | `HTMLAttributes['aria-label']` | -               | Defines a string value that labels the current element. |
