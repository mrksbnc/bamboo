<script setup>
  import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo_badge';
  import { Icon } from '@/components/bo_icon';
  import { BoSize } from '@/shared';
</script>

# Tailwind CSS Badge - Bamboo UI

A badge component is a complementary element that can be used standalone or with other components to display a label or status.

## Basic Example

<div class="flex gap-2">
  <bo-badge label="Badge" />
</div>

```html
<bo-badge label="Badge" />
```

## Component API

### Props

| Prop name     | Type             | Default value            | Description                      |
| ------------- | ---------------- | ------------------------ | -------------------------------- |
| `label`       | `string`         | `undefined`              | Text to display in the badge     |
| `type`        | `BoBadgeType`    | `BoBadgeType.default`    | Style type of the badge          |
| `size`        | `BoSize`         | `BoSize.default`         | Size of the badge                |
| `shape`       | `BoBadgeShape`   | `BoBadgeShape.default`   | Shape of the badge               |
| `variant`     | `BoBadgeVariant` | `BoBadgeVariant.primary` | Color variant of the badge       |
| `prefix-icon` | `Icon`           | `Icon.none`              | Icon to display before the label |
| `suffix-icon` | `Icon`           | `Icon.none`              | Icon to display after the label  |

:::warning Note
Though none of the props are required, either the `label`, `prefix-icon`, or the `suffix-icon` prop must be provided.
:::

### Types

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
	default = 'default',
	outline = 'outline',
	filled = 'filled',
}

export enum BoBadgeShape {
	pill = 'pill',
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}
```

## Badge Types

Badges come in three types: default, outline, and filled.

<div class="flex gap-2 mt-2">
  <bo-badge label="Default" :type="BoBadgeType.default" />
  <bo-badge label="Outline" :type="BoBadgeType.outline" />
  <bo-badge label="Filled" :type="BoBadgeType.filled" />
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
<bo-badge
	label="Filled"
	:type="BoBadgeType.filled"
/>
```

## Badge Variants

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

## Badge Shapes

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

## Badge Sizes

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

## With Icons

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

## Icon Only Badges

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

## Filled Badge Examples

The new filled badge style mimics button appearance but in a more compact form.

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Primary" :type="BoBadgeType.filled" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Secondary" :type="BoBadgeType.filled" :variant="BoBadgeVariant.secondary" />
  <bo-badge label="Danger" :type="BoBadgeType.filled" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Warning" :type="BoBadgeType.filled" :variant="BoBadgeVariant.warning" />
  <bo-badge label="Success" :type="BoBadgeType.filled" :variant="BoBadgeVariant.success" />
  <bo-badge label="Light" :type="BoBadgeType.filled" :variant="BoBadgeVariant.light" />
  <bo-badge label="Dark" :type="BoBadgeType.filled" :variant="BoBadgeVariant.dark" />
</div>

```html
<bo-badge
	label="Primary"
	:type="BoBadgeType.filled"
	:variant="BoBadgeVariant.primary"
/>
<bo-badge
	label="Secondary"
	:type="BoBadgeType.filled"
	:variant="BoBadgeVariant.secondary"
/>
<!-- And so on for other variants -->
```

### Filled Badge with Icons

Combine filled badges with icons for more visual impact.

<div class="flex gap-2 mt-2">
  <bo-badge 
    label="New" 
    :type="BoBadgeType.filled" 
    :variant="BoBadgeVariant.success" 
    :prefix-icon="Icon.plus" 
  />
  <bo-badge 
    label="Warning" 
    :type="BoBadgeType.filled" 
    :variant="BoBadgeVariant.warning" 
    :prefix-icon="Icon.alert_triangle" 
  />
  <bo-badge 
    label="Error" 
    :type="BoBadgeType.filled" 
    :variant="BoBadgeVariant.danger" 
    :prefix-icon="Icon.x" 
  />
</div>

```html
<bo-badge
	label="New"
	:type="BoBadgeType.filled"
	:variant="BoBadgeVariant.success"
	:prefix-icon="Icon.plus"
/>
<bo-badge
	label="Warning"
	:type="BoBadgeType.filled"
	:variant="BoBadgeVariant.warning"
	:prefix-icon="Icon.alert_triangle"
/>
<bo-badge
	label="Error"
	:type="BoBadgeType.filled"
	:variant="BoBadgeVariant.danger"
	:prefix-icon="Icon.x"
/>
```

## Badge Combinations

Here are examples of various badge combinations with different types, shapes, sizes, and variants:

### Default Type Badges

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Default Primary" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Small Success" :size="BoSize.small" :variant="BoBadgeVariant.success" />
  <bo-badge label="Large Danger" :size="BoSize.large" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Pill Warning" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
  <bo-badge label="With Icon" :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
</div>

### Outline Type Badges

<div class="flex flex-wrap gap-2 mt-2">
  <bo-badge label="Outline Primary" :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" />
  <bo-badge label="Small Success" :type="BoBadgeType.outline" :size="BoSize.small" :variant="BoBadgeVariant.success" />
  <bo-badge label="Large Danger" :type="BoBadgeType.outline" :size="BoSize.large" :variant="BoBadgeVariant.danger" />
  <bo-badge label="Pill Warning" :type="BoBadgeType.outline" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
  <bo-badge label="With Icon" :type="BoBadgeType.outline" :prefix-icon="Icon.check" :variant="BoBadgeVariant.primary" />
</div>

### Dark Mode Improved Appearance

The badges now have an improved appearance in dark mode with better contrast and readability.

<div class="flex flex-wrap gap-2 mt-2 bg-gray-900 p-3 rounded">
  <bo-badge label="Default" />
  <bo-badge label="Outline" :type="BoBadgeType.outline" />
  <bo-badge label="Filled" :type="BoBadgeType.filled" />
  
  <bo-badge label="Success" :variant="BoBadgeVariant.success" />
  <bo-badge label="Outline" :type="BoBadgeType.outline" :variant="BoBadgeVariant.success" />
  <bo-badge label="Filled" :type="BoBadgeType.filled" :variant="BoBadgeVariant.success" />
</div>
