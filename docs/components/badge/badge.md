<script setup>
  import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo_badge';
  import { Icon } from '@/components/bo_icon';
  import { BoSize } from '@/shared';
</script>

# bo-badge

A badge component is a complementary that can be be used standalone or with other components to display a label or status.

<bo-badge label="Badge" />

## Basic usage

```vue
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
Though non of the props are required, either the `label` or the `prefix-icon` prop must be provided.
:::

## Variants

To change the color of the component, you can use the predifened `BoBadgeVariant` enum. The `BoBadgeVariant` enum includes the following variants:

- `primary`
- `secondary`
- `danger`
- `warning`
- `success`
- `dark`

<div class="flex gap-2">
    <bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
    <bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
    <bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
    <bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
    <bo-badge label="Success" :variant="BoBadgeVariant.success" />
    <bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
</div>

## Shapes

To change the border radius of the component change the `shape` prop.
The `shape` prop should be a member of the `BoBadgeShape` enum.

- `default`
- `pill`
- `flat`
- `circle`

<div class="flex gap-2">
    <bo-badge label="Default" :shape="BoBadgeShape.default" />
    <bo-badge label="Pill" :shape="BoBadgeShape.pill" />
    <bo-badge label="Flat" :shape="BoBadgeShape.flat" />
</div>

```vue
<bo-badge label="Default" :shape="BoBadgeShape.default" />
<bo-badge label="Pill" :shape="BoBadgeShape.pill" />
<bo-badge label="Flat" :shape="BoBadgeShape.flat" />
```

:::tip Tip: circle badge
To create a circle badge set set the `shape` to `circle` and the `prefix-icon` prop.

<b>The `circle` shape is not available with the `label` prop set.</b>
:::

```vue
<bo-badge :shape="BoBadgeShape.circle" :prefix-icon="Icon.alert_circle" />
```

## Types

To change the component type to an outlined variant, use the `type` prop.
The `type` prop should be a member of the `BoBadgeType` enum.

- `default`
- `outline`

<div class="flex gap-2">
    <bo-badge label="Default" :type="BoBadgeType.default" />
    <bo-badge label="Outline" :type="BoBadgeType.outline" />
</div>

## Sizes

To change the size of the component, use the `size` prop.
The prop value should be a member of the `BoSize` enum.

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<div class="flex gap-2">
    <bo-badge label="Extra small" :size="BoSize.extra_small" />
    <bo-badge label="Small" :size="BoSize.small" />
    <bo-badge label="Default" :size="BoSize.default" />
    <bo-badge label="Large" :size="BoSize.large" />
    <bo-badge label="Extra large" :size="BoSize.extra_large" />
</div>

## With icon

The `prefix-icon` and `suffix-icon` props can be used to display an icon before and after the label of the badge.
Both of these props should be a member of the `Icon` enum.

<div class="flex gap-2">
    <bo-badge label="Badge" :prefix-icon="Icon.alert_circle" />
    <bo-badge label="Badge" :suffix-icon="Icon.alert_circle" />
</div>

## Icon only

To create an icon only badge, you can use the `prefix-icon` prop without the `label`.

<div class="flex gap-2">
  <bo-badge :prefix-icon="Icon.alert_circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :shape="BoBadgeShape.circle" />
</div>
