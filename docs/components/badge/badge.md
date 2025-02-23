<script setup>
  import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo_badge';
  import { Icon } from '@/components/bo_icon';
  import { BoSize } from '@/shared';
</script>

# bo-badge

A badge component is a complementary that can be be used standalone or with other components to display a label or status.

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
Though non of the props are required, either the `label`,`prefix-icon` or the `suffix-icon` prop must be provided.
:::

## Variants

To change the color of the component, you can use the predefined `BoBadgeVariant` enum. The `BoBadgeVariant` enum includes the following variants:

- `primary`
- `secondary`
- `danger`
- `warning`
- `success`
- `dark`

<div class="flex gap-2 mt-2">
  <bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
  <bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
  <bo-badge label="Success" :variant="BoBadgeVariant.success" />
  <bo-badge label="Light" :variant="BoBadgeVariant.light" />
  <bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
</div>

## Shapes

To change the border radius of the component change the `shape` prop.
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

```js
<bo-badge label="Default" :shape="BoBadgeShape.default" />
<bo-badge label="Pill" :shape="BoBadgeShape.pill" />
<bo-badge label="Flat" :shape="BoBadgeShape.flat" />
```

:::tip Tip: circle badge
To create a circle badge set set the `shape` to `circle` and the `prefix-icon` prop.

<b>The `circle` shape is not available with the `label` prop set.</b>
:::

```js
<bo-badge :shape="BoBadgeShape.circle" :prefix-icon="Icon.alert_circle" />
```

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

## Sizes

To change the size of the component, use the `size` prop.
The prop value should be a member of the `BoSize` enum.

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<div class="flex gap-2 mt-2">
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
  <bo-badge label="Badge" :prefix-icon="Icon.alert_circle" />
  <bo-badge label="Badge" :suffix-icon="Icon.alert_circle" />
</div>

::: details Toggle code

```js
<bo-badge label="Badge" :prefix-icon="Icon.alert_circle" />
<bo-badge label="Badge" :suffix-icon="Icon.alert_circle" />
```

:::

## Icon only

To create an icon only badge, you can use the `prefix-icon` prop without the `label`.

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

## All available variants, types and shapes

### Default

<div class="flex gap-2 mt-2">
  <bo-badge label="Badge" variant="primary" />
  <bo-badge label="Badge" variant="secondary" />
  <bo-badge label="Badge" variant="danger" />
  <bo-badge label="Badge" variant="warning" />
  <bo-badge label="Badge" variant="success" />
  <bo-badge label="Badge" variant="light" />
  <bo-badge label="Badge" variant="dark" />
</div>

::: details Toggle code

```js
<bo-badge label="Badge" variant="primary" />
<bo-badge label="Badge" variant="secondary" />
<bo-badge label="Badge" variant="danger" />
<bo-badge label="Badge" variant="warning" />
<bo-badge label="Badge" variant="success" />
<bo-badge label="Badge" variant="light" />
<bo-badge label="Badge" variant="dark" />
```

:::

### Outline

<div class="flex gap-2 mt-2">
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="primary" />
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="secondary" />
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="danger" />
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="warning" />
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="success" />
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="light" />
  <bo-badge label="Badge" :type="BoBadgeType.outline" variant="dark" />
</div>

::: details Toggle code

```js
<bo-badge label="Badge" :type="BoBadgeType.outline" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="primary" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="secondary" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="danger" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="warning" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="success" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="light" />
<bo-badge label="Badge" :type="BoBadgeType.outline" variant="dark" />
```

:::

## With Prefix Icon

### Default

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" />
```

:::

### Outline

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" :type="BoBadgeType.outline" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" :type="BoBadgeType.outline" />
```

:::

## With Suffix Icon

### Default

<div class="flex gap-2 mt-2">
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" />
</div>

::: details Toggle code

```js
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" />
```

:::

### Outline

<div class="flex gap-2 mt-2">
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" :type="BoBadgeType.outline" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" :type="BoBadgeType.outline" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" :type="BoBadgeType.outline" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" :type="BoBadgeType.outline" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" :type="BoBadgeType.outline" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" :type="BoBadgeType.outline" />
  <bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" :type="BoBadgeType.outline" />
</div>

::: details Toggle code

```js
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.primary" :type="BoBadgeType.outline" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.secondary" :type="BoBadgeType.outline" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.danger" :type="BoBadgeType.outline" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.warning" :type="BoBadgeType.outline" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.success" :type="BoBadgeType.outline" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.light" :type="BoBadgeType.outline" />
<bo-badge :suffix-icon="Icon.alert_circle" label="Badge" :variant="BoBadgeVariant.dark" :type="BoBadgeType.outline" />
```

:::

## Icon only pill

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :shape="BoBadgeShape.pill" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :shape="BoBadgeShape.pill" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :shape="BoBadgeShape.pill" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :shape="BoBadgeShape.pill" />
```

:::

## Icon only flat

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :shape="BoBadgeShape.flat" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.flat" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :shape="BoBadgeShape.flat" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :shape="BoBadgeShape.flat" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :shape="BoBadgeShape.flat" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :shape="BoBadgeShape.flat" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :shape="BoBadgeShape.flat" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :shape="BoBadgeShape.flat" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.flat" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :shape="BoBadgeShape.flat" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :shape="BoBadgeShape.flat" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :shape="BoBadgeShape.flat" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :shape="BoBadgeShape.flat" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :shape="BoBadgeShape.flat" />
```

:::

## Icon only circle

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :shape="BoBadgeShape.circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :shape="BoBadgeShape.circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :shape="BoBadgeShape.circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :shape="BoBadgeShape.circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :shape="BoBadgeShape.circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :shape="BoBadgeShape.circle" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :shape="BoBadgeShape.circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :shape="BoBadgeShape.circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :shape="BoBadgeShape.circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :shape="BoBadgeShape.circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :shape="BoBadgeShape.circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :shape="BoBadgeShape.circle" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :shape="BoBadgeShape.circle" />
```

:::

## Icon only outline

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :type="BoBadgeType.outline" />
  <bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :type="BoBadgeType.outline" />
</div>

::: details Toggle code

```js
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.primary" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.secondary" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.danger" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.warning" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.success" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.light" :type="BoBadgeType.outline" />
<bo-badge :prefix-icon="Icon.alert_circle" :variant="BoBadgeVariant.dark" :type="BoBadgeType.outline" />
```

:::
