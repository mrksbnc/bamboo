<script setup>
import { BoBadge, BoBadgeShape, BoBadgeType, BoBadgeVariant } from '@/components/bo-badge';
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

# Badge

Badges are small visual indicators used to highlight information, status, or count. They can be used to draw attention to new or important content.

## Basic Example

```html
<bo-badge label="Default" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-badge label="Default" />
</div>

### Props

| Prop name | Type             | Default   | Description                        |
| --------- | ---------------- | --------- | ---------------------------------- |
| `label`   | `string`         | -         | Text displayed in the badge        |
| `type`    | `BoBadgeType`    | `default` | Type of badge (default or outline) |
| `size`    | `BoSize`         | `default` | Size of the badge                  |
| `shape`   | `BoBadgeShape`   | `default` | Shape of the badge                 |
| `variant` | `BoBadgeVariant` | `primary` | Color variant of the badge         |
| `icon`    | `object`         | -         | Icon configuration for the badge   |

### Slots

| Slot name | Description              |
| --------- | ------------------------ |
| `default` | Custom content for badge |

### Types

```ts
export enum BoBadgeVariant {
	primary = 'primary', // Blue theme
	secondary = 'secondary', // Gray theme
	danger = 'danger', // Red theme
	warning = 'warning', // Yellow theme
	success = 'success', // Green theme
	light = 'light', // Light theme
	dark = 'dark', // Dark theme
}

export enum BoBadgeType {
	default = 'default', // Filled background
	outline = 'outline', // Outlined style
}

export enum BoBadgeShape {
	pill = 'pill', // Fully rounded ends
	default = 'default', // Slightly rounded corners
	flat = 'flat', // No border radius
	circle = 'circle', // Circle shape (for icon badges)
}

export type BoBadgeProps = {
	label?: string; // Text content
	type?: BoBadgeType; // Badge type
	size?: BoSize; // Badge size
	shape?: BoBadgeShape; // Badge shape
	variant?: BoBadgeVariant; // Badge color variant
	icon?: {
		// Icons for badge
		prefix?: Icon; // Icon before text
		suffix?: Icon; // Icon after text
	};
};
```

## Types

### Default vs Outline

Badges can be displayed with a filled background (default) or as outlined badges.

<div class="grid grid-cols-2 gap-4 items-center">
  <div>
    <bo-badge :type="BoBadgeType.default" label="Default Type" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" label="Outline Type" />
    <p class="text-sm mt-2">Outline</p>
  </div>
</div>

```html
<bo-badge
	:type="BoBadgeType.default"
	label="Default Type"
/>
<bo-badge
	:type="BoBadgeType.outline"
	label="Outline Type"
/>
```

## Variants

Different color variants for the badge.

<div class="grid grid-cols-4 gap-4 items-center">
  <div>
    <bo-badge :variant="BoBadgeVariant.primary" label="Primary" />
    <p class="text-sm mt-2">Primary</p>
  </div>
  <div>
    <bo-badge :variant="BoBadgeVariant.secondary" label="Secondary" />
    <p class="text-sm mt-2">Secondary</p>
  </div>
  <div>
    <bo-badge :variant="BoBadgeVariant.danger" label="Danger" />
    <p class="text-sm mt-2">Danger</p>
  </div>
  <div>
    <bo-badge :variant="BoBadgeVariant.warning" label="Warning" />
    <p class="text-sm mt-2">Warning</p>
  </div>
  <div>
    <bo-badge :variant="BoBadgeVariant.success" label="Success" />
    <p class="text-sm mt-2">Success</p>
  </div>
  <div>
    <bo-badge :variant="BoBadgeVariant.light" label="Light" />
    <p class="text-sm mt-2">Light</p>
  </div>
  <div>
    <bo-badge :variant="BoBadgeVariant.dark" label="Dark" />
    <p class="text-sm mt-2">Dark</p>
  </div>
</div>

<div class="grid grid-cols-4 gap-4 items-center mt-8">
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.primary" label="Primary" />
    <p class="text-sm mt-2">Outline Primary</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.secondary" label="Secondary" />
    <p class="text-sm mt-2">Outline Secondary</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.danger" label="Danger" />
    <p class="text-sm mt-2">Outline Danger</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.warning" label="Warning" />
    <p class="text-sm mt-2">Outline Warning</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.success" label="Success" />
    <p class="text-sm mt-2">Outline Success</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.light" label="Light" />
    <p class="text-sm mt-2">Outline Light</p>
  </div>
  <div>
    <bo-badge :type="BoBadgeType.outline" :variant="BoBadgeVariant.dark" label="Dark" />
    <p class="text-sm mt-2">Outline Dark</p>
  </div>
</div>

```html
<!-- Default variants -->
<bo-badge
	:variant="BoBadgeVariant.primary"
	label="Primary"
/>
<bo-badge
	:variant="BoBadgeVariant.secondary"
	label="Secondary"
/>
<bo-badge
	:variant="BoBadgeVariant.danger"
	label="Danger"
/>
<bo-badge
	:variant="BoBadgeVariant.warning"
	label="Warning"
/>
<bo-badge
	:variant="BoBadgeVariant.success"
	label="Success"
/>
<bo-badge
	:variant="BoBadgeVariant.light"
	label="Light"
/>
<bo-badge
	:variant="BoBadgeVariant.dark"
	label="Dark"
/>

<!-- Outline variants -->
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.primary"
	label="Primary"
/>
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.secondary"
	label="Secondary"
/>
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.danger"
	label="Danger"
/>
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.warning"
	label="Warning"
/>
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.success"
	label="Success"
/>
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.light"
	label="Light"
/>
<bo-badge
	:type="BoBadgeType.outline"
	:variant="BoBadgeVariant.dark"
	label="Dark"
/>
```

## Sizes

Available sizes for the badge.

<div class="grid grid-cols-5 gap-4 items-end">
  <div>
    <bo-badge :size="BoSize.extra_small" label="XS" />
    <p class="text-sm mt-2">Extra Small</p>
  </div>
  <div>
    <bo-badge :size="BoSize.small" label="Small" />
    <p class="text-sm mt-2">Small</p>
  </div>
  <div>
    <bo-badge :size="BoSize.default" label="Default" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div>
    <bo-badge :size="BoSize.large" label="Large" />
    <p class="text-sm mt-2">Large</p>
  </div>
  <div>
    <bo-badge :size="BoSize.extra_large" label="Extra Large" />
    <p class="text-sm mt-2">Extra Large</p>
  </div>
</div>

```html
<bo-badge
	:size="BoSize.extra_small"
	label="XS"
/>
<bo-badge
	:size="BoSize.small"
	label="Small"
/>
<bo-badge
	:size="BoSize.default"
	label="Default"
/>
<bo-badge
	:size="BoSize.large"
	label="Large"
/>
<bo-badge
	:size="BoSize.extra_large"
	label="Extra Large"
/>
```

## Shapes

Available shapes for the badge.

<div class="flex flex-wrap gap-4 items-center">
  <div>
    <bo-badge :shape="BoBadgeShape.default" label="Default Shape" />
  </div>
  <div>
    <bo-badge :shape="BoBadgeShape.pill" label="Pill Shape" />
  </div>
  <div>
    <bo-badge :shape="BoBadgeShape.flat" label="Flat Shape" />
  </div>
  <div>
    <bo-badge 
      :shape="BoBadgeShape.circle" 
      :icon="{ prefix: Icon.heart }" 
    />
  </div>
</div>

```html
<bo-badge
	:shape="BoBadgeShape.default"
	label="Default Shape"
/>
<bo-badge
	:shape="BoBadgeShape.pill"
	label="Pill Shape"
/>
<bo-badge
	:shape="BoBadgeShape.flat"
	label="Flat Shape"
/>
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.heart }"
/>
```

## With Icons

Badges can include icons before or after the text.

<div class="grid grid-cols-3 gap-4 items-center">
  <div>
    <bo-badge 
      label="Prefix Icon" 
      :icon="{ prefix: Icon.bell }" 
    />
    <p class="text-sm mt-2">Prefix Icon</p>
  </div>
  <div>
    <bo-badge 
      label="Suffix Icon" 
      :icon="{ suffix: Icon.arrowRight }" 
    />
    <p class="text-sm mt-2">Suffix Icon</p>
  </div>
  <div>
    <bo-badge 
      label="Both Icons" 
      :icon="{ prefix: Icon.check, suffix: Icon.info }" 
    />
    <p class="text-sm mt-2">Both Icons</p>
  </div>
</div>

```html
<bo-badge
	label="Prefix Icon"
	:icon="{ prefix: Icon.bell }"
/>

<bo-badge
	label="Suffix Icon"
	:icon="{ suffix: Icon.arrowRight }"
/>

<bo-badge
	label="Both Icons"
	:icon="{ prefix: Icon.check, suffix: Icon.info }"
/>
```

## Icon Only Badges

Badges can be used with only icons.

<div class="grid grid-cols-3 gap-4 items-center">
  <div>
    <bo-badge :icon="{ prefix: Icon.bell }" />
    <p class="text-sm mt-2">Default Shape</p>
  </div>
  <div>
    <bo-badge :shape="BoBadgeShape.pill" :icon="{ prefix: Icon.check }" />
    <p class="text-sm mt-2">Pill Shape</p>
  </div>
  <div>
    <bo-badge :shape="BoBadgeShape.circle" :icon="{ prefix: Icon.heart }" />
    <p class="text-sm mt-2">Circle Shape</p>
  </div>
</div>

```html
<bo-badge :icon="{ prefix: Icon.bell }" />
<bo-badge
	:shape="BoBadgeShape.pill"
	:icon="{ prefix: Icon.check }"
/>
<bo-badge
	:shape="BoBadgeShape.circle"
	:icon="{ prefix: Icon.heart }"
/>
```
