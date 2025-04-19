<script setup>
  import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo_badge';
  import { Icon } from '@/components/bo_icon';
  import { BoSize } from '@/shared';
</script>

# bo-badge

A badge component is a complementary element that can be used standalone or with other components to display a label or status.

<bo-badge label="Badge" />

## Basic usage

```js
<bo-badge label="Badge" />
```

## Props

| Prop name     | Type             | Default value            |
| ------------- | ---------------- | ------------------------ |
| `label`       | `string`         | `undefined`              |
| `type`        | `BoBadgeType`    | `BoBadgeType.default`    |
| `size`        | `BoSize`         | `BoSize.default`         |
| `shape`       | `BoBadgeShape`   | `BoBadgeShape.default`   |
| `variant`     | `BoBadgeVariant` | `BoBadgeVariant.primary` |
| `prefix-icon` | `Icon`           | `Icon.none`              |
| `suffix-icon` | `Icon`           | `Icon.none`              |

:::warning Note
Though none of the props are required, either the `label`, `prefix-icon`, or the `suffix-icon` prop must be provided.
:::

## Variants

To change the color of the component, you can use the predefined `BoBadgeVariant` enum. The `BoBadgeVariant` enum includes the following variants:

- `primary`
- `secondary`
- `danger`
- `warning`
- `success`
- `light`
- `dark`

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
  <bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
  <bo-badge label="Success" :variant="BoBadgeVariant.success" />
  <bo-badge label="Light" :variant="BoBadgeVariant.light" />
  <bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
</div>

::: details Toggle code

```js
<bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
<bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
<bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
<bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
<bo-badge label="Success" :variant="BoBadgeVariant.success" />
<bo-badge label="Light" :variant="BoBadgeVariant.light" />
<bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
```

:::

## Types

To change the component type to an outlined variant, use the `type` prop.
The `type` prop should be a member of the `BoBadgeType` enum.

- `default`
- `outline`

<div class="flex gap-2 mt-2">
  <bo-badge label="Default" :type="BoBadgeType.default" />
  <bo-badge label="Outline" :type="BoBadgeType.outline" />
</div>

::: details Toggle code

```js
<bo-badge label="Default" :type="BoBadgeType.default" />
<bo-badge label="Outline" :type="BoBadgeType.outline" />
```

:::

## Shapes

To change the border radius of the component, use the `shape` prop.
The `shape` prop should be a member of the `BoBadgeShape` enum.

- `default`
- `pill`
- `flat`
- `circle`

<div class="flex gap-2 mt-2">
  <bo-badge label="Default" :shape="BoBadgeShape.default" />
  <bo-badge label="Pill" :shape="BoBadgeShape.pill" />
  <bo-badge label="Flat" :shape="BoBadgeShape.flat" />
</div>

::: details Toggle code

```js
<bo-badge label="Default" :shape="BoBadgeShape.default" />
<bo-badge label="Pill" :shape="BoBadgeShape.pill" />
<bo-badge label="Flat" :shape="BoBadgeShape.flat" />
```

:::

:::tip Tip: circle badge
To create a circle badge, set the `shape` to `circle` and provide the `prefix-icon` prop.

<b>The `circle` shape is not available with the `label` prop set.</b>
:::

<div class="flex gap-2 mt-2">
  <bo-badge :shape="BoBadgeShape.circle" :prefix-icon="Icon.alert_circle" />
</div>

```js
<bo-badge :shape="BoBadgeShape.circle" :prefix-icon="Icon.alert_circle" />
```

## Sizes

To change the size of the component, use the `size` prop.
The prop value should be a member of the `BoSize` enum.

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<div class="flex gap-2 items-center mt-2">
  <bo-badge label="Extra small" :size="BoSize.extra_small" />
  <bo-badge label="Small" :size="BoSize.small" />
  <bo-badge label="Default" :size="BoSize.default" />
  <bo-badge label="Large" :size="BoSize.large" />
  <bo-badge label="Extra large" :size="BoSize.extra_large" />
</div>

::: details Toggle code

```js
<bo-badge label="Extra small" :size="BoSize.extra_small" />
<bo-badge label="Small" :size="BoSize.small" />
<bo-badge label="Default" :size="BoSize.default" />
<bo-badge label="Large" :size="BoSize.large" />
<bo-badge label="Extra large" :size="BoSize.extra_large" />
```

:::

## With icon

The `prefix-icon` and `suffix-icon` props can be used to display an icon before and after the label of the badge.
Both of these props should be a member of the `Icon` enum.

<div class="flex gap-2 mt-2">
  <bo-badge label="Prefix" :prefix-icon="Icon.activity" />
  <bo-badge label="Suffix" :suffix-icon="Icon.activity" />
</div>

::: details Toggle code

```js
<bo-badge label="Prefix" :prefix-icon="Icon.activity" />
<bo-badge label="Suffix" :suffix-icon="Icon.activity" />
```

:::

## Icon only

To create an icon-only badge, you can use the `prefix-icon` prop without the `label`.

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :shape="BoBadgeShape.circle" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :shape="BoBadgeShape.circle" />
```

:::

## Complete Badge Combinations

Here are examples of various badge combinations with different types, shapes, sizes, and variants:

### Default Type Badges

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Default Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Small Success" :size="BoSize.small" :variant="BoBadgeVariant.success" />
  <bo-badge label="Large Danger" :size="BoSize.large" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Pill Warning" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
  <bo-badge label="With Icon" :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
</div>

::: details Toggle code

```js
<bo-badge label="Default Primary" :variant="BoBadgeVariant.primary" />
<bo-badge label="Small Success" :size="BoSize.small" :variant="BoBadgeVariant.success" />
<bo-badge label="Large Danger" :size="BoSize.large" :variant="BoBadgeVariant.danger" />
<bo-badge label="Pill Warning" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
<bo-badge label="With Icon" :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
```

:::

### Outline Type Badges

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Outline Primary" :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Small Success" :type="BoBadgeType.outline" :size="BoSize.small" :variant="BoBadgeVariant.success" />
  <bo-badge label="Large Danger" :type="BoBadgeType.outline" :size="BoSize.large" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Pill Warning" :type="BoBadgeType.outline" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
  <bo-badge label="With Icon" :type="BoBadgeType.outline" :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
</div>

::: details Toggle code

```js
<bo-badge label="Outline Primary" :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" />
<bo-badge label="Small Success" :type="BoBadgeType.outline" :size="BoSize.small" :variant="BoBadgeVariant.success" />
<bo-badge label="Large Danger" :type="BoBadgeType.outline" :size="BoSize.large" :variant="BoBadgeVariant.danger" />
<bo-badge label="Pill Warning" :type="BoBadgeType.outline" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
<bo-badge label="With Icon" :type="BoBadgeType.outline" :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
```

:::

### Icon-only Badges

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" />
  <bo-badge :prefix-icon="Icon.info" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.check" :variant="BoBadgeVariant.success" :size="BoSize.large" />
  <bo-badge :prefix-icon="Icon.bell" :type="BoBadgeType.outline" :variant="BoBadgeVariant.warning" />
  <bo-badge :prefix-icon="Icon.activity" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.primary" />
  <bo-badge :prefix-icon="Icon.alert_triangle" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.danger" />
  <bo-badge :prefix-icon="Icon.check" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.success" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" />
<bo-badge :prefix-icon="Icon.info" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.check" :variant="BoBadgeVariant.success" :size="BoSize.large" />
<bo-badge :prefix-icon="Icon.bell" :type="BoBadgeType.outline" :variant="BoBadgeVariant.warning" />
<bo-badge :prefix-icon="Icon.activity" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.primary" />
<bo-badge :prefix-icon="Icon.alert_triangle" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.danger" />
<bo-badge :prefix-icon="Icon.check" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.success" />
```

:::

## Dark Mode Support

The badge component fully supports dark mode with carefully designed color combinations that ensure readability and visual harmony in both light and dark environments.

<div class="flex flex-wrap gap-2 p-4 mt-2 bg-white dark:bg-gray-800 rounded-md">
  <bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
  <bo-badge label="Outline" :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" />
  <bo-badge :prefix-icon="Icon.activity" :shape="BoBadgeShape.circle" />
  <bo-badge label="With Icon" :prefix-icon="Icon.check" />
</div>

In dark mode:

- Background colors are automatically adjusted for proper contrast
- Text colors shift to ensure readability on darker backgrounds
- Border colors are modified for clear boundaries
- Shadow effects are calibrated for dark themes
- Icon colors adapt to maintain visibility

This automatic theming happens when the `dark` class is present on the HTML root element, with no additional configuration required.
