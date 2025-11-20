---
title: Badge
description: A badge component for labels, counts, status indicators, and tags with support for different sizes, variants, icons, and dots.
outline: deep
---

<script setup lang="ts">
import { BoBadge, BoBadgeStyle, BoBadgeShape } from '@/components/bo-badge';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';
import { Icon } from '@/components/bo-icon';
</script>

# Badge

A badge component for labels, counts, status indicators, and tags that matches Tailwind UI styles with support for different sizes, variants, icons, and dot indicators.

## Basic Usage

::: tip
The badge component uses the library's color system with CSS variables for automatic theme support.
:::

```vue
<bo-badge label="Badge" />
```

<div style="margin-top: 1rem;">
  <bo-badge label="Badge" />
</div>

## API Reference

### Props

| Name             | Type           | Default        | Description                                      |
| ---------------- | -------------- | -------------- | ------------------------------------------------ |
| `id`             | `string`       | auto-generated | Unique identifier for the badge element          |
| `dataTestId`     | `string`       | `'bo-badge'`   | Data test ID for testing                         |
| `size`           | `BoSize`       | `'md'`         | Size of the badge                                |
| `variant`        | `BoVariant`    | `'primary'`    | Visual variant of the badge                      |
| `badgeStyle`     | `BoBadgeStyle` | `'default'`    | Style of the badge (default, outline, ghost)     |
| `shape`          | `BoBadgeShape` | `'default'`    | Shape of the badge (default, pill, square)       |
| `label`          | `string`       | -              | Text content of the badge                        |
| `showDot`        | `boolean`      | `false`        | Whether to show a dot indicator                  |
| `prefixIcon`     | `Icon`         | -              | Icon to display before label                     |
| `suffixIcon`     | `Icon`         | -              | Icon to display after label                      |
| `customColor`    | `string`       | -              | Custom color for the badge background            |
| `neutral`        | `boolean`      | `false`        | Whether the badge is neutral (gray)              |
| `responsive`     | `boolean`      | `false`        | Whether the badge is responsive (smaller mobile) |
| `customCssClass` | `string`       | -              | Custom CSS class for styling                     |
| `role`           | `string`       | -              | ARIA role attribute                              |
| `ariaLabel`      | `string`       | -              | Accessible label for screen readers              |

### Slots

| Name      | Description                         |
| --------- | ----------------------------------- |
| `default` | Custom content to replace the label |

## Variants

The badge component supports different color variants matching the library's design system.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Primary" :variant="BoVariant.primary" />
  <bo-badge label="Secondary" :variant="BoVariant.secondary" />
  <bo-badge label="Success" :variant="BoVariant.success" />
  <bo-badge label="Warning" :variant="BoVariant.warning" />
  <bo-badge label="Danger" :variant="BoVariant.danger" />
  <bo-badge label="Light" :variant="BoVariant.light" />
  <bo-badge label="Dark" :variant="BoVariant.dark" />
</div>

```vue
<bo-badge label="Primary" :variant="BoVariant.primary" />
<bo-badge label="Secondary" :variant="BoVariant.secondary" />
<bo-badge label="Success" :variant="BoVariant.success" />
<bo-badge label="Warning" :variant="BoVariant.warning" />
<bo-badge label="Danger" :variant="BoVariant.danger" />
<bo-badge label="Light" :variant="BoVariant.light" />
<bo-badge label="Dark" :variant="BoVariant.dark" />
```

## Badge Styles

The badge component supports three different styles with the `badgeStyle` prop: default (filled), outline, and ghost.

### Default Style

The default style has a filled background with solid colors.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Primary" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.default" />
  <bo-badge label="Secondary" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.default" />
  <bo-badge label="Success" :variant="BoVariant.success" :badge-style="BoBadgeStyle.default" />
  <bo-badge label="Warning" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.default" />
  <bo-badge label="Danger" :variant="BoVariant.danger" :badge-style="BoBadgeStyle.default" />
</div>

```vue
<bo-badge label="Primary" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.default" />
<bo-badge label="Secondary" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.default" />
<bo-badge label="Success" :variant="BoVariant.success" :badge-style="BoBadgeStyle.default" />
<bo-badge label="Warning" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.default" />
<bo-badge label="Danger" :variant="BoVariant.danger" :badge-style="BoBadgeStyle.default" />
```

### Outline Style

The outline style has a transparent background with a colored border.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Primary" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Secondary" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Success" :variant="BoVariant.success" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Warning" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Danger" :variant="BoVariant.danger" :badge-style="BoBadgeStyle.outline" />
</div>

```vue
<bo-badge label="Primary" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Secondary" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Success" :variant="BoVariant.success" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Warning" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Danger" :variant="BoVariant.danger" :badge-style="BoBadgeStyle.outline" />
```

### Ghost Style

The ghost style has a transparent background with no border, showing only colored text.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Primary" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.ghost" />
  <bo-badge label="Secondary" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.ghost" />
  <bo-badge label="Success" :variant="BoVariant.success" :badge-style="BoBadgeStyle.ghost" />
  <bo-badge label="Warning" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.ghost" />
  <bo-badge label="Danger" :variant="BoVariant.danger" :badge-style="BoBadgeStyle.ghost" />
</div>

```vue
<bo-badge label="Primary" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.ghost" />
<bo-badge label="Secondary" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.ghost" />
<bo-badge label="Success" :variant="BoVariant.success" :badge-style="BoBadgeStyle.ghost" />
<bo-badge label="Warning" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.ghost" />
<bo-badge label="Danger" :variant="BoVariant.danger" :badge-style="BoBadgeStyle.ghost" />
```

## Badge Shapes

The badge component supports three different shapes with the `shape` prop: default (rounded), pill (fully rounded), and square.

### Default Shape

The default shape has moderate border radius (6px) for a balanced rounded appearance.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Default" :shape="BoBadgeShape.default" />
  <bo-badge label="Primary" :variant="BoVariant.primary" :shape="BoBadgeShape.default" />
  <bo-badge label="Success" :variant="BoVariant.success" :shape="BoBadgeShape.default" />
</div>

```vue
<bo-badge label="Default" :shape="BoBadgeShape.default" />
<bo-badge label="Primary" :variant="BoVariant.primary" :shape="BoBadgeShape.default" />
<bo-badge label="Success" :variant="BoVariant.success" :shape="BoBadgeShape.default" />
```

### Pill Shape

The pill shape has fully rounded corners (9999px) for a capsule appearance.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Pill" :shape="BoBadgeShape.pill" />
  <bo-badge label="Primary" :variant="BoVariant.primary" :shape="BoBadgeShape.pill" />
  <bo-badge label="Success" :variant="BoVariant.success" :shape="BoBadgeShape.pill" />
</div>

```vue
<bo-badge label="Pill" :shape="BoBadgeShape.pill" />
<bo-badge label="Primary" :variant="BoVariant.primary" :shape="BoBadgeShape.pill" />
<bo-badge label="Success" :variant="BoVariant.success" :shape="BoBadgeShape.pill" />
```

### Square Shape

The square shape has minimal border radius (2px) for a more angular appearance.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Square" :shape="BoBadgeShape.square" />
  <bo-badge label="Primary" :variant="BoVariant.primary" :shape="BoBadgeShape.square" />
  <bo-badge label="Success" :variant="BoVariant.success" :shape="BoBadgeShape.square" />
</div>

```vue
<bo-badge label="Square" :shape="BoBadgeShape.square" />
<bo-badge label="Primary" :variant="BoVariant.primary" :shape="BoBadgeShape.square" />
<bo-badge label="Success" :variant="BoVariant.success" :shape="BoBadgeShape.square" />
```

## Sizes

The badge component supports different sizes with the `size` prop. The default size is `md`. The sizes match the library's size system (`BoSize`).

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-badge label="Extra Small" :size="BoSize.xs" />
  <bo-badge label="Small" :size="BoSize.sm" />
  <bo-badge label="Medium" :size="BoSize.md" />
  <bo-badge label="Large" :size="BoSize.lg" />
  <bo-badge label="Extra Large" :size="BoSize.xl" />
</div>

```vue
<bo-badge label="Extra Small" :size="BoSize.xs" />
<bo-badge label="Small" :size="BoSize.sm" />
<bo-badge label="Medium" :size="BoSize.md" />
<bo-badge label="Large" :size="BoSize.lg" />
<bo-badge label="Extra Large" :size="BoSize.xl" />
```

## With Dot Indicator

Add a dot indicator to show status or activity using the `showDot` prop.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Online" :variant="BoVariant.success" :show-dot="true" />
  <bo-badge label="Away" :variant="BoVariant.warning" :show-dot="true" />
  <bo-badge label="Offline" :variant="BoVariant.secondary" :show-dot="true" />
  <bo-badge label="Error" :variant="BoVariant.danger" :show-dot="true" />
</div>

```vue
<bo-badge label="Online" :variant="BoVariant.success" :show-dot="true" />
<bo-badge label="Away" :variant="BoVariant.warning" :show-dot="true" />
<bo-badge label="Offline" :variant="BoVariant.secondary" :show-dot="true" />
<bo-badge label="Error" :variant="BoVariant.danger" :show-dot="true" />
```

## With Icons

The badge supports prefix and suffix icons. Icons are automatically sized based on the badge size.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Verified" :prefix-icon="Icon.check" :variant="BoVariant.success" />
  <bo-badge label="Warning" :prefix-icon="Icon.alert_triangle" :variant="BoVariant.warning" />
  <bo-badge label="Next" :suffix-icon="Icon.arrow_right" :variant="BoVariant.primary" />
  <bo-badge label="Star" :prefix-icon="Icon.star" :suffix-icon="Icon.star" :variant="BoVariant.warning" />
</div>

```vue
<bo-badge label="Verified" :prefix-icon="Icon.check" :variant="BoVariant.success" />
<bo-badge label="Warning" :prefix-icon="Icon.alert_triangle" :variant="BoVariant.warning" />
<bo-badge label="Next" :suffix-icon="Icon.arrow_right" :variant="BoVariant.primary" />
<bo-badge
	label="Star"
	:prefix-icon="Icon.star"
	:suffix-icon="Icon.star"
	:variant="BoVariant.warning"
/>
```

## Using Slots

You can use slots to customize the badge content instead of using the `label` prop.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge :variant="BoVariant.primary">
    <strong>99+</strong>
  </bo-badge>
  <bo-badge :variant="BoVariant.success">
    Custom <em>Content</em>
  </bo-badge>
</div>

```vue
<bo-badge :variant="BoVariant.primary">
  <strong>99+</strong>
</bo-badge>
<bo-badge :variant="BoVariant.success">
  Custom <em>Content</em>
</bo-badge>
```

## Combining Styles and Shapes

You can combine different styles and shapes to create various badge appearances.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Default + Default" :badge-style="BoBadgeStyle.default" :shape="BoBadgeShape.default" />
  <bo-badge label="Default + Pill" :badge-style="BoBadgeStyle.default" :shape="BoBadgeShape.pill" />
  <bo-badge label="Default + Square" :badge-style="BoBadgeStyle.default" :shape="BoBadgeShape.square" />
  <bo-badge label="Outline + Default" :badge-style="BoBadgeStyle.outline" :shape="BoBadgeShape.default" :variant="BoVariant.primary" />
  <bo-badge label="Outline + Pill" :badge-style="BoBadgeStyle.outline" :shape="BoBadgeShape.pill" :variant="BoVariant.success" />
  <bo-badge label="Ghost + Square" :badge-style="BoBadgeStyle.ghost" :shape="BoBadgeShape.square" :variant="BoVariant.warning" />
</div>

```vue
<bo-badge
	label="Default + Default"
	:badge-style="BoBadgeStyle.default"
	:shape="BoBadgeShape.default"
/>
<bo-badge label="Default + Pill" :badge-style="BoBadgeStyle.default" :shape="BoBadgeShape.pill" />
<bo-badge
	label="Default + Square"
	:badge-style="BoBadgeStyle.default"
	:shape="BoBadgeShape.square"
/>
<bo-badge
	label="Outline + Default"
	:badge-style="BoBadgeStyle.outline"
	:shape="BoBadgeShape.default"
	:variant="BoVariant.primary"
/>
<bo-badge
	label="Outline + Pill"
	:badge-style="BoBadgeStyle.outline"
	:shape="BoBadgeShape.pill"
	:variant="BoVariant.success"
/>
<bo-badge
	label="Ghost + Square"
	:badge-style="BoBadgeStyle.ghost"
	:shape="BoBadgeShape.square"
	:variant="BoVariant.warning"
/>
```

## Neutral Badge

Use the `neutral` prop to create a neutral (gray) badge that works well for non-semantic content.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Neutral" :neutral="true" />
  <bo-badge label="Neutral Outline" :neutral="true" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Neutral Ghost" :neutral="true" :badge-style="BoBadgeStyle.ghost" />
</div>

```vue
<bo-badge label="Neutral" :neutral="true" />
<bo-badge label="Neutral Outline" :neutral="true" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Neutral Ghost" :neutral="true" :badge-style="BoBadgeStyle.ghost" />
```

## Common Use Cases

### Status Indicators

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="Active" :variant="BoVariant.success" :show-dot="true" />
  <bo-badge label="Pending" :variant="BoVariant.warning" :show-dot="true" />
  <bo-badge label="Inactive" :variant="BoVariant.secondary" :show-dot="true" />
</div>

```vue
<bo-badge label="Active" :variant="BoVariant.success" :show-dot="true" />
<bo-badge label="Pending" :variant="BoVariant.warning" :show-dot="true" />
<bo-badge label="Inactive" :variant="BoVariant.secondary" :show-dot="true" />
```

### Notification Counts

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="3" :variant="BoVariant.danger" :size="BoSize.sm" :shape="BoBadgeShape.pill" />
  <bo-badge label="12" :variant="BoVariant.primary" :size="BoSize.sm" :shape="BoBadgeShape.pill" />
  <bo-badge label="99+" :variant="BoVariant.warning" :size="BoSize.sm" :shape="BoBadgeShape.pill" />
</div>

```vue
<bo-badge label="3" :variant="BoVariant.danger" :size="BoSize.sm" :shape="BoBadgeShape.pill" />
<bo-badge label="12" :variant="BoVariant.primary" :size="BoSize.sm" :shape="BoBadgeShape.pill" />
<bo-badge label="99+" :variant="BoVariant.warning" :size="BoSize.sm" :shape="BoBadgeShape.pill" />
```

### Tags and Labels

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-badge label="New" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Featured" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.outline" />
  <bo-badge label="Sale" :variant="BoVariant.danger" />
  <bo-badge label="Beta" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.ghost" />
</div>

```vue
<bo-badge label="New" :variant="BoVariant.primary" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Featured" :variant="BoVariant.warning" :badge-style="BoBadgeStyle.outline" />
<bo-badge label="Sale" :variant="BoVariant.danger" />
<bo-badge label="Beta" :variant="BoVariant.secondary" :badge-style="BoBadgeStyle.ghost" />
```

## Accessibility

The badge component supports accessibility attributes:

- `ariaLabel`: Provides an accessible label for screen readers
- `role`: Allows customization of the badge's role

```vue
<bo-badge label="3" aria-label="3 unread messages" role="status" />
```

## Type Definitions

::: code-group

```ts [bo-badge.ts]
enum BoBadgeStyle {
	default = 'default',
	outline = 'outline',
	ghost = 'ghost',
}

enum BoBadgeShape {
	default = 'default',
	pill = 'pill',
	square = 'square',
}

interface BoBadgeProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The size of the badge. */
	size?: BoSize;
	/** The variant of the badge. */
	variant?: BoVariant;
	/** The text content of the badge. */
	label?: string;
	/** Whether to show a dot indicator. */
	showDot?: boolean;
	/** The prefix icon to render */
	prefixIcon?: Icon;
	/** The suffix icon to render */
	suffixIcon?: Icon;
	/** Custom color for the badge background (CSS variable, hex, rgb, rgba). */
	customColor?: string;
	/** Badge style: 'default' | 'outline' | 'ghost' */
	badgeStyle?: BoBadgeStyle;
	/** Badge shape: 'default' (rounded) | 'pill' (fully rounded) | 'square' */
	shape?: BoBadgeShape;
	/** Whether the badge is neutral (gray) */
	neutral?: boolean;
	/** Whether the badge is responsive (smaller on mobile) */
	responsive?: boolean;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** The role of the element. */
	role?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
}
```

```ts [@mrksbnc/bamboo/shared]
export enum BoSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
}
```

```ts [shared/variant.ts]
export enum BoVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	light = 'light',
	dark = 'dark',
}
```

:::
