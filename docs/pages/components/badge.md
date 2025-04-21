<script setup>
import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo-badge';
import { BoSize } from '@/shared';
import { Icon } from '@/components/bo-icon';
</script>

# Badge

A lightweight component for highlighting status, labels, or small pieces of information.

```js
import { BoBadge } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-badge label="New" />
</template>

<script setup>
import { BoBadge } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-badge label="New" />
</div>

## Props

| Name      | Type             | Default     | Description                  |
| --------- | ---------------- | ----------- | ---------------------------- |
| `label`   | `string`         | `undefined` | Text content of the badge    |
| `type`    | `BoBadgeType`    | `default`   | Visual style of the badge    |
| `size`    | `BoSize`         | `default`   | Size of the badge            |
| `shape`   | `BoBadgeShape`   | `default`   | Shape of the badge           |
| `variant` | `BoBadgeVariant` | `primary`   | Color variant of the badge   |
| `icon`    | `object`         | `{}`        | Icon configuration for badge |

## Slots

| Name      | Description          |
| --------- | -------------------- |
| `default` | Custom badge content |

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
	default = 'default',
	outline = 'outline',
}

export enum BoBadgeShape {
	pill = 'pill',
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}

export interface BoBadgeProps {
	label?: string;
	type?: BoBadgeType;
	size?: BoSize;
	shape?: BoBadgeShape;
	variant?: BoBadgeVariant;
	icon?: {
		prefix?: Icon;
		suffix?: Icon;
	};
}
```

## Variants

<div class="flex gap-4 items-center my-4">
  <bo-badge :variant="BoBadgeVariant.primary" label="Primary" />
  <bo-badge :variant="BoBadgeVariant.secondary" label="Secondary" />
  <bo-badge :variant="BoBadgeVariant.danger" label="Danger" />
  <bo-badge :variant="BoBadgeVariant.warning" label="Warning" />
  <bo-badge :variant="BoBadgeVariant.success" label="Success" />
  <bo-badge :variant="BoBadgeVariant.light" label="Light" />
  <bo-badge :variant="BoBadgeVariant.dark" label="Dark" />
</div>

```vue
<bo-badge :variant="BoBadgeVariant.primary" label="Primary" />
<bo-badge :variant="BoBadgeVariant.secondary" label="Secondary" />
<bo-badge :variant="BoBadgeVariant.danger" label="Danger" />
<bo-badge :variant="BoBadgeVariant.warning" label="Warning" />
<bo-badge :variant="BoBadgeVariant.success" label="Success" />
<bo-badge :variant="BoBadgeVariant.light" label="Light" />
<bo-badge :variant="BoBadgeVariant.dark" label="Dark" />
```

## Types

<div class="flex gap-4 items-center my-4">
  <bo-badge :type="BoBadgeType.default" label="Default" />
  <bo-badge :type="BoBadgeType.outline" label="Outline" />
</div>

```vue
<bo-badge :type="BoBadgeType.default" label="Default" />
<bo-badge :type="BoBadgeType.outline" label="Outline" />
```

## Shapes

<div class="flex gap-4 items-center my-4">
  <bo-badge :shape="BoBadgeShape.default" label="Default" />
  <bo-badge :shape="BoBadgeShape.pill" label="Pill" />
  <bo-badge :shape="BoBadgeShape.flat" label="Flat" />
  <bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.check }" />
</div>

```vue
<bo-badge :shape="BoBadgeShape.default" label="Default" />
<bo-badge :shape="BoBadgeShape.pill" label="Pill" />
<bo-badge :shape="BoBadgeShape.flat" label="Flat" />
<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.check }" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
  <bo-badge :size="BoSize.extra_small" label="XS" />
  <bo-badge :size="BoSize.small" label="Small" />
  <bo-badge :size="BoSize.default" label="Default" />
  <bo-badge :size="BoSize.large" label="Large" />
  <bo-badge :size="BoSize.extra_large" label="XL" />
</div>

```vue
<bo-badge :size="BoSize.extra_small" label="XS" />
<bo-badge :size="BoSize.small" label="Small" />
<bo-badge :size="BoSize.default" label="Default" />
<bo-badge :size="BoSize.large" label="Large" />
<bo-badge :size="BoSize.extra_large" label="XL" />
```

## With Icons

<div class="flex gap-4 items-center my-4">
  <bo-badge 
    label="New" 
    :icon="{ prefix: Icon.star }" 
  />
  <bo-badge 
    label="Settings" 
    :icon="{ suffix: Icon.settings }" 
  />
  <bo-badge 
    label="Profile" 
    :icon="{ 
      prefix: Icon.user,
      suffix: Icon.chevron_right 
    }" 
  />
  <bo-badge 
    :icon="{ prefix: Icon.bell }" 
  />
</div>

```vue
<bo-badge label="New" :icon="{ prefix: Icon.star }" />
<bo-badge label="Settings" :icon="{ suffix: Icon.settings }" />
<bo-badge
	label="Profile"
	:icon="{
		prefix: Icon.user,
		suffix: Icon.chevron_right,
	}"
/>
<bo-badge :icon="{ prefix: Icon.bell }" />
```

## Circle Badges with Icons

<div class="flex gap-4 items-center my-4">
  <bo-badge 
    :shape="BoBadgeShape.circle" 
    :icon="{ prefix: Icon.check }" 
    :variant="BoBadgeVariant.success" 
  />
  <bo-badge 
    :shape="BoBadgeShape.circle" 
    :icon="{ prefix: Icon.x }" 
    :variant="BoBadgeVariant.danger" 
  />
  <bo-badge 
    :shape="BoBadgeShape.circle" 
    :icon="{ prefix: Icon.alert_triangle }" 
    :variant="BoBadgeVariant.warning" 
  />
  <bo-badge 
    :shape="BoBadgeShape.circle" 
    :icon="{ prefix: Icon.info }" 
    :variant="BoBadgeVariant.primary" 
  />
</div>

```vue
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.check }"
	:variant="BoBadgeVariant.success"
/>
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.x }"
	:variant="BoBadgeVariant.danger"
/>
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.alert_triangle }"
	:variant="BoBadgeVariant.warning"
/>
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.info }"
	:variant="BoBadgeVariant.primary"
/>
```

## Custom Content

<div class="flex gap-4 items-center my-4">
  <bo-badge>
    <div class="flex items-center gap-1">
      <bo-icon :icon="Icon.check" :size="BoSize.small" />
      <span class="text-xs">Verified</span>
    </div>
  </bo-badge>
</div>

```vue
<bo-badge>
  <div class="flex items-center gap-1">
    <bo-icon :icon="Icon.check" :size="BoSize.small" />
    <span class="text-xs">Verified</span>
  </div>
</bo-badge>
```

## Usage Examples

### Status Indicator

```vue
<div class="flex items-center gap-2">
  <bo-avatar :data="{ label: 'JD' }" />
  <div>
    <bo-text value="John Doe" :weight="BoFontWeight.semibold" />
    <div class="flex items-center gap-1 mt-0.5">
      <bo-badge
        :variant="BoBadgeVariant.success"
        :size="BoSize.extra_small"
        label="Online"
      />
    </div>
  </div>
</div>
```

### Notification Badge

```vue
<button class="relative">
  <bo-icon :icon="Icon.bell" />
  <bo-badge 
    :shape="BoBadgeShape.circle" 
    :size="BoSize.extra_small" 
    :variant="BoBadgeVariant.danger" 
    class="absolute -top-1 -right-1" 
  />
</button>
```

### Feature Tags

```vue
<div class="border rounded p-4">
  <div class="flex items-center justify-between">
    <bo-text value="Enterprise Plan" :size="BoFontSize.lg" :weight="BoFontWeight.semibold" />
    <bo-badge
      :variant="BoBadgeVariant.primary"
      :type="BoBadgeType.outline"
      label="Popular"
    />
  </div>
  <div class="mt-4">
    <div class="flex items-center gap-2 mb-2">
      <bo-icon :icon="Icon.check" color="green" />
      <bo-text value="Unlimited users" />
      <bo-badge
        :variant="BoBadgeVariant.success"
        :size="BoSize.extra_small"
        label="New"
      />
    </div>
    <div class="flex items-center gap-2">
      <bo-icon :icon="Icon.check" color="green" />
      <bo-text value="Advanced analytics" />
    </div>
  </div>
</div>
```

### Item Count

```vue
<div class="flex items-center gap-2">
  <bo-text value="Messages" />
  <bo-badge 
    :variant="BoBadgeVariant.secondary" 
    :size="BoSize.small" 
    label="24" 
  />
</div>
```
