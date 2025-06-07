<script setup>
import { BoBadge, BoBadgeType, BoBadgeVariant, BoBadgeShape } from '@/components/badge';
import { BoSize } from '@/shared';
import { Icon } from '@/components/icon';
</script>

# Badge

The Badge component is used to highlight and display short pieces of information, such as status indicators, counts, or labels.

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

<div class="flex gap-4 items-center my-4">
	<bo-badge label="New" />
</div>

## Props

| Name        | Type             | Default                  | Description                      |
| ----------- | ---------------- | ------------------------ | -------------------------------- |
| `id`        | `string`         | `Generated UUID`         | Unique identifier for the badge  |
| `label`     | `string`         | `undefined`              | Text content of the badge        |
| `type`      | `BoBadgeType`    | `BoBadgeType.default`    | Visual style type of the badge   |
| `variant`   | `BoBadgeVariant` | `BoBadgeVariant.primary` | Color variant of the badge       |
| `shape`     | `BoBadgeShape`   | `BoBadgeShape.default`   | Shape of the badge               |
| `size`      | `BoSize`         | `BoSize.default`         | Size of the badge                |
| `icon`      | `BoBadgeIcon`    | `undefined`              | Icon configuration for the badge |
| `ariaLabel` | `string`         | `undefined`              | Custom accessible label          |
| `ariaLive`  | `BoAriaLive`     | `BoAriaLive.polite`      | ARIA live region behavior        |

## Types

```ts
export enum BoBadgeType {
	default = 'default',
	outline = 'outline',
}

export enum BoBadgeVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoBadgeShape {
	default = 'default',
	circle = 'circle',
	pill = 'pill',
	flat = 'flat',
}

export interface BoBadgeIcon {
	prefix?: Icon;
	suffix?: Icon;
}

export interface BoBadgeProps {
	id?: string;
	label?: string;
	type?: BoBadgeType;
	variant?: BoBadgeVariant;
	shape?: BoBadgeShape;
	size?: BoSize;
	icon?: BoBadgeIcon;
	ariaLabel?: string;
	ariaLive?: BoAriaLive;
}
```

## Variants

### Types

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Default" :type="BoBadgeType.default" />
	<bo-badge label="Outline" :type="BoBadgeType.outline" />
</div>

```vue
<bo-badge label="Default" :type="BoBadgeType.default" />
<bo-badge label="Outline" :type="BoBadgeType.outline" />
```

### Colors

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
	<bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
	<bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
	<bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
	<bo-badge label="Success" :variant="BoBadgeVariant.success" />
	<bo-badge label="Light" :variant="BoBadgeVariant.light" />
	<bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
</div>

```vue
<bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
<bo-badge label="Secondary" :variant="BoBadgeVariant.secondary" />
<bo-badge label="Danger" :variant="BoBadgeVariant.danger" />
<bo-badge label="Warning" :variant="BoBadgeVariant.warning" />
<bo-badge label="Success" :variant="BoBadgeVariant.success" />
<bo-badge label="Light" :variant="BoBadgeVariant.light" />
<bo-badge label="Dark" :variant="BoBadgeVariant.dark" />
```

### Shapes

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Default" :shape="BoBadgeShape.default" />
	<bo-badge label="Circle" :shape="BoBadgeShape.circle" />
	<bo-badge label="Pill" :shape="BoBadgeShape.pill" />
	<bo-badge label="Flat" :shape="BoBadgeShape.flat" />
</div>

```vue
<bo-badge label="Default" :shape="BoBadgeShape.default" />
<bo-badge label="Circle" :shape="BoBadgeShape.circle" />
<bo-badge label="Pill" :shape="BoBadgeShape.pill" />
<bo-badge label="Flat" :shape="BoBadgeShape.flat" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<bo-badge label="Extra Small" :size="BoSize.extra_small" />
	<bo-badge label="Small" :size="BoSize.small" />
	<bo-badge label="Default" :size="BoSize.default" />
	<bo-badge label="Large" :size="BoSize.large" />
	<bo-badge label="Extra Large" :size="BoSize.extra_large" />
</div>

```vue
<bo-badge label="Extra Small" :size="BoSize.extra_small" />
<bo-badge label="Small" :size="BoSize.small" />
<bo-badge label="Default" :size="BoSize.default" />
<bo-badge label="Large" :size="BoSize.large" />
<bo-badge label="Extra Large" :size="BoSize.extra_large" />
```

## Content Variations

### With Icons

<div class="flex gap-4 items-center my-4">
	<bo-badge 
		label="With Prefix" 
		:icon="{ prefix: Icon.info }" 
	/>
	<bo-badge 
		label="With Suffix" 
		:icon="{ suffix: Icon.arrow_right }" 
	/>
	<bo-badge 
		:icon="{ prefix: Icon.star }" 
		:shape="BoBadgeShape.circle" 
	/>
</div>

```vue
<bo-badge label="With Prefix" :icon="{ prefix: Icon.info }" />
<bo-badge label="With Suffix" :icon="{ suffix: Icon.arrow_right }" />
<bo-badge :icon="{ prefix: Icon.star }" :shape="BoBadgeShape.circle" />
```

### Custom Content

<div class="flex gap-4 items-center my-4">
	<bo-badge>
		<template #default>
			<div class="flex items-center gap-2">
				<bo-icon :icon="Icon.star" />
				<span>Custom Content</span>
			</div>
		</template>
	</bo-badge>
</div>

```vue
<bo-badge>
	<template #default>
		<div class="flex items-center gap-2">
			<bo-icon :icon="Icon.star" />
			<span>Custom Content</span>
		</div>
	</template>
</bo-badge>
```

## Accessibility

### Features

- Uses semantic HTML structure with proper ARIA roles
- Supports ARIA live regions for dynamic updates
- Screen reader compatibility with descriptive labels
- Clear visual indicators for different states
- High contrast color combinations for visibility

### ARIA Attributes

| Attribute     | Purpose             | Values                       |
| ------------- | ------------------- | ---------------------------- |
| `role`        | Semantic role       | `status`                     |
| `aria-label`  | Accessible name     | Custom string                |
| `aria-live`   | Update announcement | `polite`, `assertive`, `off` |
| `aria-atomic` | Update behavior     | `true`                       |

### Accessibility Props

| Name        | Type         | Default             | Description                                |
| ----------- | ------------ | ------------------- | ------------------------------------------ |
| `ariaLabel` | `string`     | `undefined`         | Custom accessible name for screen readers  |
| `ariaLive`  | `BoAriaLive` | `BoAriaLive.polite` | Controls live region announcement behavior |
| `id`        | `string`     | Generated           | Unique identifier for ARIA relationships   |
