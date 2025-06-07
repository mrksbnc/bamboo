<script setup>
import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/badge';
import { BoSize } from '@/shared';
import { Icon } from '@/components/icon/bo-icon';
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

| Name        | Type                               | Default                                    | Description                                    |
| ----------- | ---------------------------------- | ------------------------------------------ | ---------------------------------------------- |
| `id`        | `string`                           | auto-generated                             | Unique identifier for the badge                |
| `label`     | `string`                           | `undefined`                                | Text content of the badge                      |
| `type`      | `BoBadgeType`                      | `'default'`                                | Visual style of the badge                      |
| `size`      | `BoSize`                           | `'default'`                                | Size of the badge                              |
| `shape`     | `BoBadgeShape`                     | `'default'`                                | Shape of the badge                             |
| `variant`   | `BoBadgeVariant`                   | `'primary'`                                | Color variant                                  |
| `icon`      | `{ prefix?: Icon, suffix?: Icon }` | `{ prefix: Icon.none, suffix: Icon.none }` | Icons to display before and/or after the label |
| `ariaLabel` | `string`                           | Generated from label                       | Custom accessible name for screen readers      |
| `ariaLive`  | `BoAriaLive`                       | `'polite'`                                 | ARIA live region politeness level              |

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
	id?: string;
	label?: string;
	type?: BoBadgeType;
	size?: BoSize;
	shape?: BoBadgeShape;
	variant?: BoBadgeVariant;
	icon?: {
		prefix?: Icon;
		suffix?: Icon;
	};
	ariaLabel?: string;
	ariaLive?: BoAriaLive;
}
```

## Variants

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
	<bo-badge label="With Prefix" :icon="{ prefix: Icon.star }" />
	<bo-badge label="With Suffix" :icon="{ suffix: Icon.check }" />
	<bo-badge label="Both Icons" :icon="{ prefix: Icon.star, suffix: Icon.check }" />
</div>

```vue
<bo-badge label="With Prefix" :icon="{ prefix: Icon.star }" />
<bo-badge label="With Suffix" :icon="{ suffix: Icon.check }" />
<bo-badge label="Both Icons" :icon="{ prefix: Icon.star, suffix: Icon.check }" />
```

## Accessibility

### Features

- Uses semantic `status` role for proper screen reader announcement
- Includes descriptive ARIA labels
- Configurable ARIA live regions for dynamic content updates
- Icons are properly labeled and hidden from screen readers when decorative
- Maintains WCAG 2.1 compliant color contrast ratios for all variants

### ARIA Attributes

| Attribute     | Purpose                     | Values                               |
| ------------- | --------------------------- | ------------------------------------ |
| `role`        | Semantic role               | `status`                             |
| `aria-label`  | Accessible name             | Generated from label or custom value |
| `aria-live`   | Live region update behavior | `polite`, `assertive`, `off`         |
| `aria-atomic` | Update announcement style   | `true`                               |

### Accessibility Props

| Name        | Type         | Default              | Description                               |
| ----------- | ------------ | -------------------- | ----------------------------------------- |
| `ariaLabel` | `string`     | Generated from label | Custom accessible name for screen readers |
| `ariaLive`  | `BoAriaLive` | `polite`             | Controls live region announcement timing  |
