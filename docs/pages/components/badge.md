<script setup>
import { BoBadge, BoBadgeShape, BoBadgeType, BoBadgeVariant } from '@/components/badge';
import { BoSize } from '@/shared/bo-size';
import { BoAriaLive } from '@/shared/bo-aria';
import { Icon } from '@/components/icon/bo-icon';
</script>

# BoBadge

A versatile badge component for displaying status indicators, labels, and notifications with support for icons, different styles, and accessibility features.

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
	<bo-badge label="Basic Badge" />
	<bo-badge label="Primary" :variant="BoBadgeVariant.primary" />
	<bo-badge label="Success" :variant="BoBadgeVariant.success" />
</div>

## Props

| Name        | Type             | Default                                    | Description                                    |
| ----------- | ---------------- | ------------------------------------------ | ---------------------------------------------- |
| `id`        | `string`         | Generated UUID                             | Unique identifier for the badge                |
| `label`     | `string`         | `undefined`                                | Text content of the badge                      |
| `type`      | `BoBadgeType`    | `BoBadgeType.default`                      | Visual style of the badge (default or outline) |
| `size`      | `BoSize`         | `BoSize.default`                           | Size of the badge                              |
| `shape`     | `BoBadgeShape`   | `BoBadgeShape.default`                     | Shape of the badge                             |
| `variant`   | `BoBadgeVariant` | `BoBadgeVariant.primary`                   | Color variant of the badge                     |
| `icon`      | `BadgeIcon`      | `{ prefix: Icon.none, suffix: Icon.none }` | Icon configuration for prefix and suffix       |
| `ariaLabel` | `string`         | `undefined`                                | Custom ARIA label for the badge                |
| `ariaLive`  | `BoAriaLive`     | `BoAriaLive.polite`                        | ARIA live region politeness level              |

## Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Custom content for the badge |

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

### Default Type

<div class="flex gap-4 items-center my-4">
	<bo-badge :type="BoBadgeType.default" :variant="BoBadgeVariant.primary" label="Default" />
	<bo-badge :type="BoBadgeType.default" :variant="BoBadgeVariant.success" label="Filled" />
	<bo-badge :type="BoBadgeType.default" :variant="BoBadgeVariant.danger" label="Solid" />
</div>

```vue
<bo-badge :type="BoBadgeType.default" :variant="BoBadgeVariant.primary" label="Default" />
<bo-badge :type="BoBadgeType.default" :variant="BoBadgeVariant.success" label="Filled" />
<bo-badge :type="BoBadgeType.default" :variant="BoBadgeVariant.danger" label="Solid" />
```

### Outline Type

<div class="flex gap-4 items-center my-4">
	<bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" label="Outline" />
	<bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.success" label="Border" />
	<bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.danger" label="Hollow" />
</div>

```vue
<bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" label="Outline" />
<bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.success" label="Border" />
<bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.danger" label="Hollow" />
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

## Shapes

<div class="flex gap-4 items-center my-4">
	<bo-badge :shape="BoBadgeShape.default" label="Default" />
	<bo-badge :shape="BoBadgeShape.pill" label="Pill" />
	<bo-badge :shape="BoBadgeShape.flat" label="Flat" />
	<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.star }" />
</div>

```vue
<bo-badge :shape="BoBadgeShape.default" label="Default" />
<bo-badge :shape="BoBadgeShape.pill" label="Pill" />
<bo-badge :shape="BoBadgeShape.flat" label="Flat" />
<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.star }" />
```

## With Icons

### Prefix Icons

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Star" :icon="{ prefix: Icon.star }" />
	<bo-badge label="Heart" :icon="{ prefix: Icon.heart }" />
	<bo-badge label="Check" :icon="{ prefix: Icon.check }" />
</div>

```vue
<bo-badge label="Star" :icon="{ prefix: Icon.star }" />
<bo-badge label="Heart" :icon="{ prefix: Icon.heart }" />
<bo-badge label="Check" :icon="{ prefix: Icon.check }" />
```

### Suffix Icons

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Download" :icon="{ suffix: Icon.download }" />
	<bo-badge label="External" :icon="{ suffix: Icon.external_link }" />
	<bo-badge label="Close" :icon="{ suffix: Icon.x }" />
</div>

```vue
<bo-badge label="Download" :icon="{ suffix: Icon.download }" />
<bo-badge label="External" :icon="{ suffix: Icon.external_link }" />
<bo-badge label="Close" :icon="{ suffix: Icon.x }" />
```

### Icon Only

<div class="flex gap-4 items-center my-4">
	<bo-badge :icon="{ prefix: Icon.bell }" />
	<bo-badge :icon="{ prefix: Icon.user }" :variant="BoBadgeVariant.success" />
	<bo-badge :icon="{ prefix: Icon.alert }" :variant="BoBadgeVariant.danger" />
</div>

```vue
<bo-badge :icon="{ prefix: Icon.bell }" />
<bo-badge :icon="{ prefix: Icon.user }" :variant="BoBadgeVariant.success" />
<bo-badge :icon="{ prefix: Icon.alert }" :variant="BoBadgeVariant.danger" />
```

### Circle Shape with Icons

<div class="flex gap-4 items-center my-4">
	<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.plus }" />
	<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.minus }" :variant="BoBadgeVariant.danger" />
	<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.check }" :variant="BoBadgeVariant.success" />
</div>

```vue
<bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.plus }" />
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.minus }"
	:variant="BoBadgeVariant.danger"
/>
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.check }"
	:variant="BoBadgeVariant.success"
/>
```

## Custom Content

<div class="flex gap-4 items-center my-4">
	<bo-badge>
		<span class="font-bold">Custom</span>
	</bo-badge>
	<bo-badge>
		<div class="flex items-center gap-1">
			<span>99+</span>
		</div>
	</bo-badge>
</div>

```vue
<bo-badge>
	<span class="font-bold">Custom</span>
</bo-badge>
<bo-badge>
	<div class="flex items-center gap-1">
		<span>99+</span>
	</div>
</bo-badge>
```

## Accessibility

### Features

- Semantic HTML structure with status role
- ARIA live regions for dynamic content updates
- Screen reader compatibility with descriptive labels
- Proper contrast ratios for all variants
- Support for assistive technologies

### ARIA Attributes

| Attribute     | Purpose                | Values                       |
| ------------- | ---------------------- | ---------------------------- |
| `role`        | Semantic role          | `status`                     |
| `aria-label`  | Accessible name        | Custom or generated string   |
| `aria-live`   | Live region politeness | `polite`, `assertive`, `off` |
| `aria-atomic` | Atomic updates         | `true`, `false`              |

### Accessibility Props

| Name        | Type         | Default             | Description                               |
| ----------- | ------------ | ------------------- | ----------------------------------------- |
| `ariaLabel` | `string`     | `undefined`         | Custom accessible name for screen readers |
| `ariaLive`  | `BoAriaLive` | `BoAriaLive.polite` | ARIA live region politeness level         |

### ARIA Live Regions

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Polite" :aria-live="BoAriaLive.polite" />
	<bo-badge label="Assertive" :aria-live="BoAriaLive.assertive" />
	<bo-badge label="Off" :aria-live="BoAriaLive.off" />
</div>

```vue
<bo-badge label="Polite" :aria-live="BoAriaLive.polite" />
<bo-badge label="Assertive" :aria-live="BoAriaLive.assertive" />
<bo-badge label="Off" :aria-live="BoAriaLive.off" />
```

### BEM Classes

The component follows BEM methodology for consistent styling:

| Class                          | Purpose                    |
| ------------------------------ | -------------------------- |
| `.bo-badge`                    | Base component container   |
| `.bo-badge--size-extra-small`  | Extra small size modifier  |
| `.bo-badge--size-small`        | Small size modifier        |
| `.bo-badge--size-default`      | Default size modifier      |
| `.bo-badge--size-large`        | Large size modifier        |
| `.bo-badge--size-extra-large`  | Extra large size modifier  |
| `.bo-badge--shape-default`     | Default shape modifier     |
| `.bo-badge--shape-pill`        | Pill shape modifier        |
| `.bo-badge--shape-flat`        | Flat shape modifier        |
| `.bo-badge--shape-circle`      | Circle shape modifier      |
| `.bo-badge--variant-primary`   | Primary variant modifier   |
| `.bo-badge--variant-secondary` | Secondary variant modifier |
| `.bo-badge--variant-danger`    | Danger variant modifier    |
| `.bo-badge--variant-warning`   | Warning variant modifier   |
| `.bo-badge--variant-success`   | Success variant modifier   |
| `.bo-badge--variant-light`     | Light variant modifier     |
| `.bo-badge--variant-dark`      | Dark variant modifier      |
| `.bo-badge--variant-outline-*` | Outline variant modifiers  |
| `.bo-badge__icon`              | Icon container             |
| `.bo-badge__icon--prefix`      | Prefix icon                |
| `.bo-badge__icon--suffix`      | Suffix icon                |
| `.bo-badge__label`             | Label container            |
| `.bo-badge__text`              | Text content               |

### Test IDs

All elements include data-testid attributes for reliable testing:

| Test ID Pattern          | Element             |
| ------------------------ | ------------------- |
| `{id}-badge`             | Main container      |
| `{id}-badge-prefix-icon` | Prefix icon element |
| `{id}-badge-suffix-icon` | Suffix icon element |
| `{id}-badge-label`       | Label text element  |

## Dark Mode Support

The badge automatically adapts to dark mode using Tailwind CSS classes:

- Default variants use `dark:bg-*` background colors
- Outline variants use `dark:border-*` and `dark:text-*` colors
- Text colors use `dark:text-*` classes for proper contrast
- All variants maintain accessibility contrast ratios in dark mode

### Dark Mode Examples

The badge variants automatically adjust their colors in dark mode:

- Primary: `dark:bg-blue-700` with white text
- Secondary: `dark:bg-neutral-700` with white text
- Danger: `dark:bg-red-700` with white text
- Warning: `dark:bg-yellow-600` with white text
- Success: `dark:bg-green-700` with white text
- Light: `dark:bg-neutral-200` with dark text
- Dark: `dark:bg-black` with white text

## Common Use Cases

### Status Indicators

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Online" :variant="BoBadgeVariant.success" />
	<bo-badge label="Offline" :variant="BoBadgeVariant.secondary" />
	<bo-badge label="Away" :variant="BoBadgeVariant.warning" />
	<bo-badge label="Busy" :variant="BoBadgeVariant.danger" />
</div>

### Notification Counts

<div class="flex gap-4 items-center my-4">
	<bo-badge label="3" :shape="BoBadgeShape.circle" :variant="BoBadgeVariant.danger" />
	<bo-badge label="12" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.primary" />
	<bo-badge label="99+" :shape="BoBadgeShape.pill" :variant="BoBadgeVariant.warning" />
</div>

### Category Tags

<div class="flex gap-4 items-center my-4">
	<bo-badge label="Frontend" :type="BoBadgeType.outline" />
	<bo-badge label="Backend" :type="BoBadgeType.outline" :variant="BoBadgeVariant.success" />
	<bo-badge label="DevOps" :type="BoBadgeType.outline" :variant="BoBadgeVariant.warning" />
</div>
