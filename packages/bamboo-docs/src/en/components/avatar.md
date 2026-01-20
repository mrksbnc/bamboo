---
title: Avatar
description: An avatar is a graphical representation of an individual or entity. It can be used to represent a user, a product, or any other entity. Avatars are commonly used in web applications to provide visual cues and enhance the user experience.
category: display
tags:
  - avatar
  - profile
  - user
  - image
  - initials
outline: deep
---

<script setup>
import { BoAvatar } from '@mrksbnc/bamboo-vue';
</script>

# Avatar

An avatar is a graphical representation of an individual or entity. It can be used to represent a user, a product, or any other entity. Avatars are commonly used in web applications to provide visual cues and enhance the user experience.

::: tip
In case neither `src` nor `label` is provided, the component will render a default image.
:::

## Basic Usage

The component is called `bo-avatar` and can be used as follows:

<div class="flex gap-4">
  <bo-avatar label="Avatar" />
  <bo-avatar src="../../assets/avatar.jpeg" />
  <bo-avatar />
</div>

```vue
<!-- With abbr -->
<bo-avatar label="Avatar" />

<!-- With image -->
<bo-avatar src="someImageUrl" />

<!-- With default/fallback image -->
<bo-avatar />
```

## With Image

To display an image, simply provide the `src` prop with the URL or path to the image.

<bo-avatar src="../../assets/avatar.jpeg" />

```vue
<bo-avatar src="https://example.com/avatar.png" />
```

## With Label

To display a label, simply provide the `label` prop with the label text. The avatar automatically truncates the label if it exceeds 2 characters.

<bo-avatar label="Avatar" />

```vue
<bo-avatar label="Avatar" />
```

## Variants

The `variant` prop allows you to customize the color of the avatar. The default variant is `primary`.

<div class="flex gap-4">
  <bo-avatar label="Primary" variant="primary" />
  <bo-avatar label="Secondary" variant="secondary" />
  <bo-avatar label="Destructive" variant="destructive" />
  <bo-avatar label="Warning" variant="warning" />
  <bo-avatar label="Success" variant="success" />
  <bo-avatar label="Dark" variant="dark" />
</div>

```vue
<bo-avatar label="Primary" variant="primary" />
<bo-avatar label="Secondary" variant="secondary" />
<bo-avatar label="Destructive" variant="destructive" />
<bo-avatar label="Warning" variant="warning" />
<bo-avatar label="Success" variant="success" />
<bo-avatar label="Dark" variant="dark" />
```

## Sizes

The `size` prop allows you to customize the size of the avatar. The default size is `default`.

<div class="flex gap-4">
  <bo-avatar label="XS" size="xs" />
  <bo-avatar label="SM" size="sm" />
  <bo-avatar label="Default" size="default" />
  <bo-avatar label="LG" size="lg" />
  <bo-avatar label="XL" size="xl" />
</div>

```vue
<bo-avatar label="XS" size="xs" />
<bo-avatar label="SM" size="sm" />
<bo-avatar label="Default" size="default" />
<bo-avatar label="LG" size="lg" />
<bo-avatar label="XL" size="xl" />
```

## Shapes

The `kind` prop allows you to customize the shape of the avatar. The default shape is `default`.

<div class="flex gap-4">
  <bo-avatar label="Default" kind="default" />
  <bo-avatar label="Flat" kind="flat" />
  <bo-avatar label="Circle" kind="circle" />
  <bo-avatar label="Outline Flat" kind="outline-flat" />
  <bo-avatar label="Outline Default" kind="outline-default" />
  <bo-avatar label="Outline Circle" kind="outline-circle" />
</div>

```vue
<bo-avatar label="Default" kind="default" />
<bo-avatar label="Flat" kind="flat" />
<bo-avatar label="Circle" kind="circle" />
<bo-avatar label="Outline Flat" kind="outline-flat" />
<bo-avatar label="Outline Default" kind="outline-default" />
<bo-avatar label="Outline Circle" kind="outline-circle" />
```

## Indicators

The `indicatorKind` prop allows you to display an indicator on the avatar. The default indicator is `none`.

<div class="flex gap-4">
  <bo-avatar label="Online" indicator-kind="online" />
  <bo-avatar label="Offline" indicator-kind="offline" />
  <bo-avatar label="Busy" indicator-kind="busy" />
  <bo-avatar label="Away" indicator-kind="away" />
  <bo-avatar label="None" indicator-kind="none" />
</div>

```vue
<bo-avatar label="Online" indicator-kind="online" />
<bo-avatar label="Offline" indicator-kind="offline" />
<bo-avatar label="Busy" indicator-kind="busy" />
<bo-avatar label="Away" indicator-kind="away" />
<bo-avatar label="None" indicator-kind="none" />
```

## Indicator Position

The `indicatorPosition` prop allows you to customize the position of the indicator. The default position is `top-right`.

<div class="flex gap-4">
<bo-avatar label="Top Left" indicator-position="top-left" indicator-kind="online" />
  <bo-avatar label="Top Right" indicator-position="top-right" indicator-kind="offline" />
  <bo-avatar label="Bottom Left" indicator-position="bottom-left" indicator-kind="busy" />
  <bo-avatar label="Bottom Right" indicator-position="bottom-right" indicator-kind="away" />
</div>

```vue
<bo-avatar label="Top Left" indicator-position="top-left" indicator-kind="online" />
<bo-avatar label="Top Right" indicator-position="top-right" indicator-kind="offline" />
<bo-avatar label="Bottom Left" indicator-position="bottom-left" indicator-kind="busy" />
<bo-avatar label="Bottom Right" indicator-position="bottom-right" indicator-kind="away" />
```

## Custom Colors

The avatar background and text colors can be customized using the `customBgColor` and `customTextColor` props. You can use hex colors, RGB/RGBA, OKLCH, or CSS variables.

<div class="flex gap-4">
  <bo-avatar label="CB" custom-bg-color="#880808" custom-text-color="#FFFFFF" />
  <bo-avatar label="CB" custom-bg-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
  <bo-avatar label="CB" custom-bg-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
</div>

```vue
<!-- Hex color -->
<bo-avatar label="CB" custom-bg-color="#880808" custom-text-color="#FFFFFF" />

<!-- RGB color -->
<bo-avatar label="CB" custom-bg-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />

<!-- OKLCH color -->
<bo-avatar label="CB" custom-bg-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
```

## Cursor

The `cursor` prop is used to control the cursor style of the avatar. The values are defined in the `BoCursor` type.

<div class="flex gap-4">
  <bo-avatar label="cursor-auto" cursor="cursor-auto" />
  <bo-avatar label="cursor-pointer" cursor="cursor-pointer" />
  <bo-avatar label="cursor-not-allowed" cursor="cursor-not-allowed" />
</div>

```vue
<!-- cursor-auto -->
<bo-avatar label="cursor-auto" cursor="cursor-auto" />

<!-- cursor-pointer -->
<bo-avatar label="cursor-pointer" cursor="cursor-pointer" />

<!-- cursor-not-allowed -->
<bo-avatar label="cursor-not-allowed" cursor="cursor-not-allowed" />
```

## API Reference

### Props

| Prop                | Type                           | Default       | Description                                             |
| ------------------- | ------------------------------ | ------------- | ------------------------------------------------------- |
| `id`                | `string`                       | Autogenerated | The id of the element.                                  |
| `dataTestId`        | `string`                       | Autogenerated | The data test id of the element.                        |
| `label`             | `string`                       | -             | The label of the avatar.                                |
| `src`               | `string`                       | -             | The data for the avatar.                                |
| `alt`               | `string`                       | -             | The alt text for the avatar.                            |
| `kind`              | `BoAvatarKind`                 | `'default'`   | The shape of the avatar.                                |
| `size`              | `BoAvatarSize`                 | `'default'`   | The size of the avatar.                                 |
| `cursor`            | `BoCursor`                     | `cursor-auto` | The cursor style of the avatar.                         |
| `variant`           | `BoAvatarVariant`              | `'primary'`   | The color variant of the avatar.                        |
| `customBgColor`     | `string`                       | -             | Custom background color for the avatar.                 |
| `customTextColor`   | `string`                       | -             | Custom text color for the avatar.                       |
| `indicatorKind`     | `BoAvatarIndicatorKind`        | `'none'`      | The status of the indicator.                            |
| `indicatorPosition` | `BoAvatarIndicatorPosition`    | `'top-right'` | The position of the indicator.                          |
| `role`              | `HTMLAttributes['role']`       | -             | The role of the element.                                |
| `ariaLabel`         | `HTMLAttributes['aria-label']` | -             | Defines a string value that labels the current element. |
