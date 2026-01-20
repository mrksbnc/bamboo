---
title: Badge
description: A badge component is a small label that is used to indicate the status of an element. It can be used to display information such as new, unread, important or any other status or information.
category: display
tags:
  - badge
  - status
  - tag
outline: deep
---

<script setup>
import { BoBadge } from '@mrksbnc/bamboo-vue';
</script>

# Badge

A badge component is a small label that is used to indicate the status of an element. It can be used to display information such as new, unread, important or any other status or information.

## Basic Usage

The component is called `bo-badge` and can be used as follows:

<div class="flex gap-4 items-center">
  <bo-badge label="Badge" />
  <bo-badge label="Badge" variant="warning" />
  <bo-badge label="Badge" variant="success" />
  <bo-badge label="Badge" variant="destructive" />
</div>

```vue
<!-- With label -->
<bo-badge label="Badge" />

<!-- With label and variant -->
<bo-badge label="Badge" variant="warning" />

<!-- With label and variant -->
<bo-badge label="Badge" variant="success" />

<!-- With label and variant -->
<bo-badge label="Badge" variant="destructive" />
```

## Kinds

Badges come in different kinds to fit various use cases. The default kind is `default`.

Available kinds are:

- `default`: A filled badge with background color
- `outline`: An outline badge with border and text color

<div class="flex gap-4 items-center">
  <bo-badge label="Default" kind="default" />
  <bo-badge label="Outline" kind="outline" />
</div>

```vue
<bo-badge label="Default" kind="default" />
<bo-badge label="Outline" kind="outline" />
```

## Variants

The badge component supports comes with a variety of predefined color variants. The default variant is `primary`.

Available variants are:

- primary: A blue badge
- secondary: A neutral badge
- success: A green badge
- warning: A yellow badge
- destructive: A red badge
- light: A light themed badge
- dark: A dark themed badge

### Default kind variants (filled)

<div class="flex gap-4 mt-4 items-center flex-wrap">
  <bo-badge label="Primary" variant="primary" />
  <bo-badge label="Secondary" variant="secondary" />
  <bo-badge label="Success" variant="success" />
  <bo-badge label="Warning" variant="warning" />
  <bo-badge label="Destructive" variant="destructive" />
  <bo-badge label="Light" variant="light" />
  <bo-badge label="Dark" variant="black" />
</div>

```vue
<bo-badge label="Primary" variant="primary" />
<bo-badge label="Secondary" variant="secondary" />
<bo-badge label="Success" variant="success" />
<bo-badge label="Warning" variant="warning" />
<bo-badge label="Destructive" variant="destructive" />
<bo-badge label="Light" variant="light" />
<bo-badge label="Dark" variant="black" />
```

### Outline kind variants (outline)

<div class="flex gap-4 mt-4 items-center flex-wrap">
  <bo-badge label="Primary" kind="outline" variant="primary" />
  <bo-badge label="Secondary" kind="outline" variant="secondary" />
  <bo-badge label="Success" kind="outline" variant="success" />
  <bo-badge label="Warning" kind="outline" variant="warning" />
  <bo-badge label="Destructive" kind="outline" variant="destructive" />
  <bo-badge label="Light" kind="outline" variant="light" />
  <bo-badge label="Dark" kind="outline" variant="black" />
</div>

```vue
<bo-badge label="Primary" kind="outline" variant="primary" />
<bo-badge label="Secondary" kind="outline" variant="secondary" />
<bo-badge label="Success" kind="outline" variant="success" />
<bo-badge label="Warning" kind="outline" variant="warning" />
<bo-badge label="Destructive" kind="outline" variant="destructive" />
<bo-badge label="Light" kind="outline" variant="light" />
<bo-badge label="Dark" kind="outline" variant="black" />
```

## Sizes

The badge component supports comes with a variety of predefined sizes. The default size is `default`.

### Default kind sizes (filled)

<div class="flex gap-4 mt-4 items-center flex-wrap">
  <bo-badge label="SM Badge" size="sm" />
  <bo-badge label="Default Badge" size="default" />
  <bo-badge label="LG Badge" size="lg" />
</div>

## Outline kind

Badges can have an outline style:

<div class="flex gap-4 items-center flex-wrap">
  <bo-badge label="Primary" kind="outline" variant="primary" />
  <bo-badge label="Secondary" kind="outline" variant="secondary" />
  <bo-badge label="Success" kind="outline" variant="success" />
  <bo-badge label="Warning" kind="outline" variant="warning" />
  <bo-badge label="Destructive" kind="outline" variant="destructive" />
  <bo-badge label="Light" kind="outline" variant="light" />
  <bo-badge label="Dark" kind="outline" variant="black" />
</div>

```vue
<bo-badge label="Primary" kind="outline" variant="primary" />
<bo-badge label="Secondary" kind="outline" variant="secondary" />
<bo-badge label="Success" kind="outline" variant="success" />
<bo-badge label="Warning" kind="outline" variant="warning" />
<bo-badge label="Destructive" kind="outline" variant="destructive" />
```

## Shapes

The badge component supports comes with a variety of predefined shapes. The default shape is `default`. It will be rendered as a filled badge with
slightly rounded corners.

Available shapes are:

- `default`: A filled badge with slightly rounded corners
- `pill`: A filled badge with rounded corners
- `flat`: A filled badge with no rounded corners
- `circle`: A filled badge with a circle shape

:::warning
To render a circle shaped badge, the `shape` prop must be set to `circle` and you must also provide either a `prefixIcon` or `suffixIcon` prop.
:::

<div class="flex gap-4 items-center">
  <bo-badge label="Default" shape="default" />
  <bo-badge label="Pill" shape="pill" />
  <bo-badge label="Flat" shape="flat" />
  <bo-badge prefix-icon="x_octagon" shape="circle" />
  <bo-badge prefix-icon="x_octagon" shape="circle" kind="outline" />
</div>

```vue
<bo-badge label="Default" shape="default" />
<bo-badge label="Pill" shape="pill" />
<bo-badge label="Flat" shape="flat" />
<bo-badge prefix-icon="x_octagon" shape="circle" />
```

## Sizes

To change the size of the badge, use the `size` prop. The default size is `default`.
The available sizes are `sm`, `default`, and `lg`.

<div class="flex gap-4 items-center">
  <bo-badge label="SM Badge" size="sm" />
  <bo-badge label="Default Badge" size="default" />
  <bo-badge label="LG Badge" size="lg" />
</div>

```vue
<bo-badge label="SM Badge" size="sm" />
<bo-badge label="Default Badge" size="default" />
<bo-badge label="LG Badge" size="lg" />
```

## Icons

The badge supports displaying icons with the `prefixIcon` and `suffixIcon` props. The `prefixIcon` prop will be displayed on the left side of the badge, while the `suffixIcon` prop will be displayed on the right side of the badge so before or after the label.

<div class="flex gap-4 items-center">
  <bo-badge label="Prefix Icon" prefix-icon="x_octagon" />
  <bo-badge label="Suffix Icon" suffix-icon="x_octagon" />
</div>

```vue
<bo-badge label="Prefix Icon" prefix-icon="x_octagon" />
<bo-badge label="Suffix Icon" suffix-icon="x_octagon" />
```

## Custom Colors

To set a custom color for the badge, you can use the `customBgColor`, `customTextColor`, and `customBorderColor` props. You can use hex colors, RGB/RGBA, OKLCH, or CSS variables.

<div class="flex gap-4 items-center">
  <bo-badge label="CB" custom-bg-color="#880808" />
  <bo-badge label="CB" custom-bg-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
  <bo-badge label="CB" custom-bg-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
  <bo-badge label="CB" kind="outline" custom-text-color="#FFFFFF" custom-border-color="oklch(84.5% 0.143 164.978)" />
</div>

```vue
<bo-badge label="CB" custom-bg-color="#880808" />
<bo-badge label="CB" custom-bg-color="rgb(34, 197, 94)" custom-text-color="#FFFFFF" />
<bo-badge label="CB" custom-bg-color="oklch(84.5% 0.143 164.978)" custom-text-color="#000000" />
<bo-badge
	label="CB"
	kind="outline"
	custom-text-color="#FFFFFF"
	custom-border-color="oklch(84.5% 0.143 164.978)"
/>
```

## Cursor

The `cursor` prop is used to control the cursor style of the badge. The values are defined in the `BoCursor` type.

<div class="flex gap-4">
  <bo-badge label="cursor-auto" cursor="cursor-auto" />
  <bo-badge label="cursor-pointer" cursor="cursor-pointer" />
  <bo-badge label="cursor-not-allowed" cursor="cursor-not-allowed" />
</div>

```vue
<!-- cursor-auto -->
<bo-badge label="cursor-auto" cursor="cursor-auto" />

<!-- cursor-pointer -->
<bo-badge label="cursor-pointer" cursor="cursor-pointer" />

<!-- cursor-not-allowed -->
<bo-badge label="cursor-not-allowed" cursor="cursor-not-allowed" />
```

## API Reference

### Props

| Prop              | Type                           | Default       | Description                                             |
| ----------------- | ------------------------------ | ------------- | ------------------------------------------------------- |
| `id`              | `string`                       | Autogenerated | The id of the element.                                  |
| `dataTestId`      | `string`                       | Autogenerated | The data test id of the element.                        |
| `label`           | `string`                       | -             | The label text to display on the badge.                 |
| `kind`            | `BoBadgeKind`                  | `default`     | The type of the badge (filled or outline).              |
| `size`            | `BoBadgeSize`                  | `default`     | The size of the badge.                                  |
| `shape`           | `BoBadgeShape`                 | `default`     | The shape of the badge.                                 |
| `variant`         | `BoBadgeVariant`               | `primary`     | The color variant of the badge.                         |
| `cursor`          | `BoCursor`                     | `cursor-auto` | The cursor style of the badge.                          |
| `customBgColor`   | `string`                       | -             | The custom background color for the badge.              |
| `customTextColor` | `string`                       | -             | The custom text color for the badge.                    |
| `prefixIcon`      | `Icon`                         | -             | The prefix icon of the badge.                           |
| `suffixIcon`      | `Icon`                         | -             | The suffix icon of the badge.                           |
| `role`            | `HTMLAttributes['role']`       | `status`      | The role of the element.                                |
| `ariaLabel`       | `HTMLAttributes['aria-label']` | -             | Defines a string value that labels the current element. |

### Slots

The badge allows custom content to be rendered using slots.

| Name      | Props | Description                        |
| --------- | ----- | ---------------------------------- |
| `default` | `-`   | The default slot for badge content |

:::tip
By using this slot, you will replace the default label with your own content though the `prefixIcon` and `suffixIcon` props will still work.
:::
