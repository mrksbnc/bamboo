<script setup>
import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo-badge';
import { BoSize } from '@/shared';
import { Icon } from '@/components/bo-icon';
</script>

# Badge

Badges are small visual indicators for counts, statuses, or labels. They help highlight key information or indicate statuses.

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

| Name      | Type                               | Default     | Description                                    |
| --------- | ---------------------------------- | ----------- | ---------------------------------------------- |
| `label`   | `string`                           | `undefined` | Text displayed inside the badge                |
| `type`    | `BoBadgeType`                      | `default`   | Controls the badge's style                     |
| `size`    | `BoSize`                           | `default`   | Controls the badge's size                      |
| `shape`   | `BoBadgeShape`                     | `default`   | Controls the badge's shape                     |
| `variant` | `BoBadgeVariant`                   | `primary`   | Controls the badge's color scheme              |
| `icon`    | `{ prefix?: Icon; suffix?: Icon }` | `undefined` | Icons to display before and/or after the label |

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

export type BoBadgeProps = {
	label?: string;
	type?: BoBadgeType;
	size?: BoSize;
	shape?: BoBadgeShape;
	variant?: BoBadgeVariant;
	icon?: {
		prefix?: Icon;
		suffix?: Icon;
	};
};
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
	<bo-badge :shape="BoBadgeShape.circle" label="C" />
</div>

```vue
<bo-badge :shape="BoBadgeShape.default" label="Default" />
<bo-badge :shape="BoBadgeShape.pill" label="Pill" />
<bo-badge :shape="BoBadgeShape.flat" label="Flat" />
<bo-badge :shape="BoBadgeShape.circle" label="C" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<bo-badge :size="BoSize.small" label="Small" />
	<bo-badge :size="BoSize.default" label="Default" />
	<bo-badge :size="BoSize.large" label="Large" />
</div>

```vue
<bo-badge :size="BoSize.small" label="Small" />
<bo-badge :size="BoSize.default" label="Default" />
<bo-badge :size="BoSize.large" label="Large" />
```

## With Icons

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Badge" :icon="{ prefix: Icon.check }" />
	<bo-badge label="Badge" :icon="{ suffix: Icon.arrow_right }" />
	<bo-badge label="Badge" :icon="{ prefix: Icon.bell, suffix: Icon.alert_circle }" />
</div>

```vue
<bo-badge label="Badge" :icon="{ prefix: Icon.check }" />
<bo-badge label="Badge" :icon="{ suffix: Icon.arrow_right }" />
<bo-badge label="Badge" :icon="{ prefix: Icon.bell, suffix: Icon.alert_circle }" />
```
