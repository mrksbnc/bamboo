<script setup>
import { BoBadge, BoBadgeVariant, BoBadgeType, BoBadgeShape } from '@/components/bo-badge';
import { BoSize } from '@/shared';
</script>

# Badge

The Badge component is a small visual indicator used to highlight status, notifications, or labels. It supports various styles, sizes, and shapes to match your application's design system. Badges can include text, icons, or both, and are commonly used to display counts, status indicators, or labels.

## Basic Example

```html
<bo-badge label="New" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-badge label="New" />
</div>

### Props

| Prop name | Type                               | Default   | Description                                         |
| --------- | ---------------------------------- | --------- | --------------------------------------------------- |
| `label`   | `string`                           | -         | Text content of the badge                           |
| `type`    | `BoBadgeType`                      | `default` | Visual style type of the badge (filled or outlined) |
| `size`    | `BoSize`                           | `md`      | Size of the badge (xs, sm, md, lg, xl)              |
| `shape`   | `BoBadgeShape`                     | `default` | Shape of the badge (default, pill, flat, circle)    |
| `variant` | `BoBadgeVariant`                   | `primary` | Color variant of the badge                          |
| `icon`    | `{ prefix?: Icon, suffix?: Icon }` | -         | Icons to show before/after the label                |

### Slots

| Slot name | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `default` | Slot for custom content that replaces the default label text |

### Types

```ts
export enum BoBadgeVariant {
	primary = 'primary', // Primary brand color
	secondary = 'secondary', // Secondary brand color
	danger = 'danger', // Danger/error state
	warning = 'warning', // Warning state
	success = 'success', // Success state
	light = 'light', // Light background
	dark = 'dark', // Dark background
}

export enum BoBadgeType {
	default = 'default', // Default filled style
	outline = 'outline', // Outlined style
}

export enum BoBadgeShape {
	pill = 'pill', // Rounded pill style
	default = 'default', // Default rectangular style with rounded corners
	flat = 'flat', // Flat style with minimal padding
	circle = 'circle', // Circular shape, ideal for icon-only badges
}
```

## Variants

The Badge component supports various color variants to convey different meanings:

<div class="flex flex-wrap gap-4 items-center">
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

## Types

Badges can have different visual styles to control emphasis:

<div class="flex flex-wrap gap-4 items-center">
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

## Shapes

Different badge shapes are available to match your design system:

<div class="flex flex-wrap gap-4 items-center">
  <bo-badge label="Pill" :shape="BoBadgeShape.pill" />
  <bo-badge label="Default" :shape="BoBadgeShape.default" />
  <bo-badge label="Flat" :shape="BoBadgeShape.flat" />
  <bo-badge :icon="{ prefix: 'check' }" :shape="BoBadgeShape.circle" />
</div>

```html
<bo-badge
	label="Pill"
	:shape="BoBadgeShape.pill"
/>
<bo-badge
	label="Default"
	:shape="BoBadgeShape.default"
/>
<bo-badge
	label="Flat"
	:shape="BoBadgeShape.flat"
/>
<bo-badge
	:icon="{ prefix: 'check' }"
	:shape="BoBadgeShape.circle"
/>
```

## Sizes

The Badge component supports different sizes to fit various UI contexts:

<div class="flex flex-wrap gap-4 items-center">
  <bo-badge label="XS" :size="BoSize.xs" />
  <bo-badge label="SM" :size="BoSize.sm" />
  <bo-badge label="MD" :size="BoSize.md" />
  <bo-badge label="LG" :size="BoSize.lg" />
  <bo-badge label="XL" :size="BoSize.xl" />
</div>

```html
<bo-badge
	label="XS"
	:size="BoSize.xs"
/>
<bo-badge
	label="SM"
	:size="BoSize.sm"
/>
<bo-badge
	label="MD"
	:size="BoSize.md"
/>
<bo-badge
	label="LG"
	:size="BoSize.lg"
/>
<bo-badge
	label="XL"
	:size="BoSize.xl"
/>
```

## With Icons

Badges can include icons before or after the text to enhance meaning and visibility:

<div class="flex flex-wrap gap-4 items-center">
  <bo-badge label="Notification" :icon="{ prefix: 'bell' }" />
  <bo-badge label="Error" :icon="{ suffix: 'x-circle' }" />
  <bo-badge :icon="{ prefix: 'check' }" />
</div>

```html
<bo-badge
	label="Notification"
	:icon="{ prefix: 'bell' }"
/>
<bo-badge
	label="Error"
	:icon="{ suffix: 'x-circle' }"
/>
<bo-badge :icon="{ prefix: 'check' }" />
```

## Combining Properties

You can combine different properties to create badges that suit your specific needs:

<div class="flex flex-wrap gap-4 items-center">
  <bo-badge 
    label="Featured" 
    :variant="BoBadgeVariant.success" 
    :icon="{ prefix: 'star' }" 
    :shape="BoBadgeShape.pill"
  />
  <bo-badge 
    label="Error" 
    :variant="BoBadgeVariant.danger" 
    :type="BoBadgeType.outline"
    :icon="{ suffix: 'x-circle' }" 
  />
  <bo-badge 
    :icon="{ prefix: 'check' }" 
    :variant="BoBadgeVariant.success" 
    :shape="BoBadgeShape.circle"
    :size="BoSize.lg"
  />
</div>

```html
<bo-badge
	label="Featured"
	:variant="BoBadgeVariant.success"
	:icon="{ prefix: 'star' }"
	:shape="BoBadgeShape.pill"
/>
<bo-badge
	label="Error"
	:variant="BoBadgeVariant.danger"
	:type="BoBadgeType.outline"
	:icon="{ suffix: 'x-circle' }"
/>
<bo-badge
	:icon="{ prefix: 'check' }"
	:variant="BoBadgeVariant.success"
	:shape="BoBadgeShape.circle"
	:size="BoSize.lg"
/>
```

## Accessibility Considerations

When using badges, keep the following accessibility considerations in mind:

1. **Color meaning**: Don't rely solely on color to convey information. Always include text or an icon.
2. **Icon-only badges**: When using icon-only badges, ensure they have appropriate context or tooltips.
3. **Text contrast**: Ensure sufficient contrast between text and background colors.
4. **Size appropriateness**: Use appropriate sizes that are readable but not overwhelming.
5. **Screen readers**: If badges convey important information, ensure screen readers can access it.

## Best Practices

When using the Badge component:

1. Use appropriate variants for different statuses (success for positive outcomes, danger for errors, etc.)
2. Keep badge text short and concise
3. Consider using icons to enhance meaning
4. Use appropriate sizes based on context - smaller badges for less emphasis, larger for more importance
5. Choose shapes that match your design system
6. Use outline type for less emphasis
7. Reserve circle shape primarily for icon-only badges
8. Avoid overusing badges as they can create visual noise
9. Maintain consistent usage patterns throughout your application
