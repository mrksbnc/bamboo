<script setup>
  import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo-badge';
  import { Icon } from '@/components/bo-icon';
  import { BoSize } from '@/shared';
</script>

# bo-badge

A badge component is a complementary element that can be used standalone or with other components to display a label or status.

## Basic usage

```html
<bo-badge label="Badge" />
```

<div class="flex gap-2">
  <bo-badge label="Badge" />
</div>

## Props

| Prop name     | Type             | Default value            | Description                      |
| ------------- | ---------------- | ------------------------ | -------------------------------- |
| `label`       | `string`         | `undefined`              | Text to display in the badge     |
| `type`        | `BoBadgeType`    | `BoBadgeType.default`    | Style type of the badge          |
| `size`        | `BoSize`         | `BoSize.default`         | Size of the badge                |
| `shape`       | `BoBadgeShape`   | `BoBadgeShape.default`   | Shape of the badge               |
| `variant`     | `BoBadgeVariant` | `BoBadgeVariant.primary` | Color variant of the badge       |
| `prefix-icon` | `Icon`           | `Icon.none`              | Icon to display before the label |
| `suffix-icon` | `Icon`           | `Icon.none`              | Icon to display after the label  |

::: warning Note
Though none of the props are required, either the `label`, `prefix-icon`, or the `suffix-icon` prop must be provided.
:::

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Custom content instead of using the label prop |

## Types

```ts
export enum BoBadgeVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoBadgeType {
	default = 'default', // Solid colored background with white text
	outline = 'outline', // Transparent background with colored border and text
}

export enum BoBadgeShape {
	pill = 'pill',
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}
```

## Examples

### Badge Types

Badges come in two types: default (solid) and outline.

<div class="flex gap-2 mt-2">
  <bo-badge label="Default" :type="BoBadgeType.default" />
  <bo-badge label="Outline" :type="BoBadgeType.outline" />
</div>

```html
<bo-badge
	label="Default"
	:type="BoBadgeType.default"
/>
<bo-badge
	label="Outline"
	:type="BoBadgeType.outline"
/>
```

### Badge Variants

Change the color of the badge using the predefined variants.

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
  <bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
  <bo-badge label="Success" :variant="BoBadgeVariant.success" />
  <bo-badge label="Light" :variant="BoBadgeVariant.light" />
  <bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
</div>

```html
<bo-badge
	label="Primary"
	:variant="BoBadgeVariant.primary"
/>
<bo-badge
	label="Secondary"
	:variant="BoBadgeVariant.secondary"
/>
<bo-badge
	label="Danger"
	:variant="BoBadgeVariant.danger"
/>
<bo-badge
	label="Warning"
	:variant="BoBadgeVariant.warning"
/>
<bo-badge
	label="Success"
	:variant="BoBadgeVariant.success"
/>
<bo-badge
	label="Light"
	:variant="BoBadgeVariant.light"
/>
<bo-badge
	label="Dark"
	:variant="BoBadgeVariant.dark"
/>
```

### Badge Shapes

Change the border radius of the badge using different shapes.

<div class="flex gap-2 mt-2">
  <bo-badge label="Default" :shape="BoBadgeShape.default" />
  <bo-badge label="Pill" :shape="BoBadgeShape.pill" />
  <bo-badge label="Flat" :shape="BoBadgeShape.flat" />
</div>

```html
<bo-badge
	label="Default"
	:shape="BoBadgeShape.default"
/>
<bo-badge
	label="Pill"
	:shape="BoBadgeShape.pill"
/>
<bo-badge
	label="Flat"
	:shape="BoBadgeShape.flat"
/>
```

:::tip Circle Badge
To create a circle badge, set the `shape` to `circle` and provide only an icon.

<div class="flex gap-2 mt-2">
  <bo-badge :shape="BoBadgeShape.circle" :prefix-icon="Icon.alert_circle" />
</div>

```html
<bo-badge
	:shape="BoBadgeShape.circle"
	:prefix-icon="Icon.alert_circle"
/>
```

:::

### Badge Sizes

Choose from multiple sizes using the `size` prop.

<div class="flex gap-2 items-center mt-2">
  <bo-badge label="Extra small" :size="BoSize.extra_small" />
  <bo-badge label="Small" :size="BoSize.small" />
  <bo-badge label="Default" :size="BoSize.default" />
  <bo-badge label="Large" :size="BoSize.large" />
  <bo-badge label="Extra large" :size="BoSize.extra_large" />
</div>

```html
<bo-badge
	label="Extra small"
	:size="BoSize.extra_small"
/>
<bo-badge
	label="Small"
	:size="BoSize.small"
/>
<bo-badge
	label="Default"
	:size="BoSize.default"
/>
<bo-badge
	label="Large"
	:size="BoSize.large"
/>
<bo-badge
	label="Extra large"
	:size="BoSize.extra_large"
/>
```

### With Icons

Add icons before or after the badge label.

<div class="flex gap-2 mt-2">
  <bo-badge label="Prefix" :prefix-icon="Icon.activity" />
  <bo-badge label="Suffix" :suffix-icon="Icon.activity" />
</div>

```html
<bo-badge
	label="Prefix"
	:prefix-icon="Icon.activity"
/>
<bo-badge
	label="Suffix"
	:suffix-icon="Icon.activity"
/>
```

### Icon Only Badges

Create badges with only icons.

<div class="flex gap-2 mt-2">
  <bo-badge :prefix-icon="Icon.alert_circle" />
  <bo-badge :prefix-icon="Icon.alert_circle" :shape="BoBadgeShape.circle" />
</div>

```html
<bo-badge :prefix-icon="Icon.alert_circle" />
<bo-badge
	:prefix-icon="Icon.alert_circle"
	:shape="BoBadgeShape.circle"
/>
```

### Style Combinations

Here are examples of different badge combinations with variants and icons.

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
  <bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
  <bo-badge label="Success" :variant="BoBadgeVariant.success" />
  <bo-badge label="Light" :variant="BoBadgeVariant.light" />
  <bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
</div>

```html
<bo-badge
	label="Primary"
	:variant="BoBadgeVariant.primary"
/>
<bo-badge
	label="Secondary"
	:variant="BoBadgeVariant.secondary"
/>
<bo-badge
	label="Danger"
	:variant="BoBadgeVariant.danger"
/>
<bo-badge
	label="Warning"
	:variant="BoBadgeVariant.warning"
/>
<bo-badge
	label="Success"
	:variant="BoBadgeVariant.success"
/>
<bo-badge
	label="Light"
	:variant="BoBadgeVariant.light"
/>
<bo-badge
	label="Dark"
	:variant="BoBadgeVariant.dark"
/>
```

### Badges with Icons

Combine badges with icons for more visual impact.

<div class="flex gap-2 mt-2">
  <bo-badge 
    label="New" 
    :variant="BoBadgeVariant.success" 
    :prefix-icon="Icon.plus" 
  />
  <bo-badge 
    label="Warning" 
    :variant="BoBadgeVariant.warning" 
    :prefix-icon="Icon.alert_triangle" 
  />
  <bo-badge 
    label="Error" 
    :variant="BoBadgeVariant.danger" 
    :prefix-icon="Icon.x" 
  />
</div>

```html
<bo-badge
	label="New"
	:variant="BoBadgeVariant.success"
	:prefix-icon="Icon.plus"
/>
<bo-badge
	label="Warning"
	:variant="BoBadgeVariant.warning"
	:prefix-icon="Icon.alert_triangle"
/>
<bo-badge
	label="Error"
	:variant="BoBadgeVariant.danger"
	:prefix-icon="Icon.x"
/>
```
