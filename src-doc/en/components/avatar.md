---
title: Avatar
outline: deep
---

<script setup lang="ts">
import { BoAvatar, BoAvatarShape, BoAvatarIndicatorPosition } from '@/components/bo-avatar';
import { BoSize, BoVariant } from '@/shared';
</script>

# Avatar

An avatar is a visual representation of a user, typically shown as a profile picture, or initials.

## Basic Usage

```vue
<!-- with abbr -->
<bo-avatar text="JD" />

<!-- with image -->
<bo-avatar src="https://i.pravatar.cc/150?img=1" />
```

<div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.25rem;">
  <bo-avatar text="JD" />
  <bo-avatar src="https://i.pravatar.cc/150?img=1" />
</div>

## API Reference

### Props

| Name                    | Type            | Default                | Description                              |
| ----------------------- | --------------- | ---------------------- | ---------------------------------------- |
| `id`                    | `string`        | auto-generated         | Unique identifier for the avatar element |
| `dataTestId`            | `string`        | auto-generated         | Data test ID for testing                 |
| `src`                   | `string`        | -                      | Image source URL                         |
| `alt`                   | `string`        | -                      | Alt text for the image                   |
| `size`                  | `BoSize`        | `BoSize.md`            | Size of the avatar                       |
| `shape`                 | `BoAvatarShape` | `BoAvatarShape.circle` | Shape of the avatar                      |
| `text`                  | `string`        | -                      | Text to display (abbreviation/initials)  |
| `showIndicator`         | `boolean`       | `false`                | Whether to show status indicator         |
| `indicatorVariant`      | `BoVariant`     | `'secondary'`          | Variant color of the indicator           |
| `customBackgroundColor` | `string`        | -                      | Custom color for avatar background       |
| `customBorderColor`     | `string`        | -                      | Custom color for the avatar border       |
| `customTextColor`       | `string`        | -                      | Custom color for avatar text             |
| `customCssClass`        | `string`        | -                      | Custom CSS class for styling             |

## With Image

```vue
<bo-avatar src="https://i.pravatar.cc/150?img=1" />
<bo-avatar src="https://i.pravatar.cc/150?img=2" :shape="BoAvatarShape.rounded" />
<bo-avatar src="https://i.pravatar.cc/150?img=3" :shape="BoAvatarShape.square" />
```

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar src="https://i.pravatar.cc/150?img=1" />
  <bo-avatar src="https://i.pravatar.cc/150?img=2" :shape="BoAvatarShape.rounded"   />
  <bo-avatar src="https://i.pravatar.cc/150?img=3" :shape="BoAvatarShape.square" />
</div>

## With Text Initials

::: tip
The component automatically takes the first 2 characters and converts them to uppercase.
:::

```vue
<bo-avatar text="John Doe" />
<bo-avatar text="AB" :shape="BoAvatarShape.rounded" />
<bo-avatar text="xyz" :shape="BoAvatarShape.square" />
```

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="John Doe" />
  <bo-avatar text="AB"  :shape="BoAvatarShape.rounded" />
  <bo-avatar text="xyz" :shape="BoAvatarShape.square" />
</div>

## Shapes

The avatar supports three different shapes: circle (default), rounded, and square.

```vue
<bo-avatar text="CI" :shape="BoAvatarShape.circle" />
<bo-avatar text="RO" :shape="BoAvatarShape.rounded" />
<bo-avatar text="SQ" :shape="BoAvatarShape.square" />
```

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="CI" :shape="BoAvatarShape.circle" />
  <bo-avatar text="RO" :shape="BoAvatarShape.rounded" />
  <bo-avatar text="SQ" :shape="BoAvatarShape.square" />
</div>

## Sizes

The avatar component supports five different sizes.

```vue
<bo-avatar text="XS" :size="BoSize.xs" />
<bo-avatar text="SM" :size="BoSize.sm" />
<bo-avatar text="MD" :size="BoSize.md" />
<bo-avatar text="LG" :size="BoSize.lg" />
<bo-avatar text="XL" :size="BoSize.xl" />
```

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="XS" :size="BoSize.xs" />
  <bo-avatar text="SM" :size="BoSize.sm" />
  <bo-avatar text="MD" :size="BoSize.md" />
  <bo-avatar text="LG" :size="BoSize.lg" />
  <bo-avatar text="XL" :size="BoSize.xl" />
</div>

## Status Indicators

To indicate status with the avatar use the `showIndicator` prop.

```vue
<bo-avatar text="ON" :show-indicator="true" />
<bo-avatar text="JD" :show-indicator="true" :shape="BoAvatarShape.rounded" />
<bo-avatar
	src="https://i.pravatar.cc/150?img=4"
	:show-indicator="true"
	:shape="BoAvatarShape.square"
/>
```

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="ON" :show-indicator="true" />
  <bo-avatar text="JD" :show-indicator="true" :shape="BoAvatarShape.rounded" />
  <bo-avatar src="https://i.pravatar.cc/150?img=4" :show-indicator="true" :shape="BoAvatarShape.square" />
</div>

## Indicator Variants

The indicator supports different color variants using the `indicatorVariant` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="PR" :show-indicator="true" :indicator-variant="BoVariant.primary" :size="BoSize.lg" />
  <bo-avatar text="SE" :show-indicator="true" :indicator-variant="BoVariant.secondary" :size="BoSize.lg" />
  <bo-avatar text="SU" :show-indicator="true" :indicator-variant="BoVariant.success" :size="BoSize.lg" />
  <bo-avatar text="WA" :show-indicator="true" :indicator-variant="BoVariant.warning" :size="BoSize.lg" />
  <bo-avatar text="DA" :show-indicator="true" :indicator-variant="BoVariant.danger" :size="BoSize.lg" />
  <bo-avatar text="LI" :show-indicator="true" :indicator-variant="BoVariant.light" :size="BoSize.lg" />
  <bo-avatar text="DK" :show-indicator="true" :indicator-variant="BoVariant.dark" :size="BoSize.lg" />
</div>

```vue
<bo-avatar text="PR" :show-indicator="true" :indicator-variant="BoVariant.primary" />
<bo-avatar text="SE" :show-indicator="true" :indicator-variant="BoVariant.secondary" />
<bo-avatar text="SU" :show-indicator="true" :indicator-variant="BoVariant.success" />
<bo-avatar text="WA" :show-indicator="true" :indicator-variant="BoVariant.warning" />
<bo-avatar text="DA" :show-indicator="true" :indicator-variant="BoVariant.danger" />
<bo-avatar text="LI" :show-indicator="true" :indicator-variant="BoVariant.light" />
<bo-avatar text="DK" :show-indicator="true" :indicator-variant="BoVariant.dark" />
```

## Custom Background Colors

You can customize the background color of the avatar using the `customBackgroundColor` prop with any valid CSS color value.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="CV" custom-background-color="--teal-500" />
  <bo-avatar text="HX" custom-background-color="#ff6b6b" />
  <bo-avatar text="RG" custom-background-color="rgb(107, 203, 119)" />
  <bo-avatar text="RA" custom-background-color="rgba(107, 119, 203, 0.7)" />
  <bo-avatar text="OK" custom-background-color="oklch(0.7 0.15 280)" />
</div>

```vue
<bo-avatar text="CV" custom-background-color="--teal-500" />
<bo-avatar text="HX" custom-background-color="#ff6b6b" />
<bo-avatar text="RG" custom-background-color="rgb(107, 203, 119)" />
<bo-avatar text="RA" custom-background-color="rgba(107, 119, 203, 0.7)" />
<bo-avatar text="OK" custom-background-color="oklch(0.7 0.15 280)" />
```

## Custom Text Colors

You can customize the text color of the avatar using the `customTextColor` prop with any valid CSS color value.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="CV" custom-text-color="--teal-500" />
  <bo-avatar text="HX" custom-text-color="#ff6b6b" />
  <bo-avatar text="RG" custom-text-color="rgb(107, 203, 119)" />
  <bo-avatar text="RA" custom-text-color="rgba(255, 107, 107, 0.9)" />
  <bo-avatar text="OK" custom-text-color="oklch(0.7 0.15 180)" />
</div>

```vue
<bo-avatar text="CV" custom-text-color="--teal-500" />
<bo-avatar text="HX" custom-text-color="#ff6b6b" />
<bo-avatar text="RG" custom-text-color="rgb(107, 203, 119)" />
<bo-avatar text="RA" custom-text-color="rgba(255, 107, 107, 0.9)" />
<bo-avatar text="OK" custom-text-color="oklch(0.7 0.15 180)" />
```

## Custom Border Colors

You can customize the border color of the avatar using the `customBorderColor` prop with any valid CSS color value.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="CV" custom-border-color="--teal-500" />
  <bo-avatar text="HX" custom-border-color="#ff6b6b" />
  <bo-avatar text="RG" custom-border-color="rgb(107, 203, 119)" />
  <bo-avatar text="RA" custom-border-color="rgba(255, 107, 107, 0.9)" />
  <bo-avatar text="OK" custom-border-color="oklch(0.7 0.15 180)" />
</div>

```vue
<bo-avatar text="CV" custom-border-color="--teal-500" />
<bo-avatar text="HX" custom-border-color="#ff6b6b" />
<bo-avatar text="RG" custom-border-color="rgb(107, 203, 119)" />
<bo-avatar text="RA" custom-border-color="rgba(255, 107, 107, 0.9)" />
<bo-avatar text="OK" custom-border-color="oklch(0.7 0.15 180)" />
```

## Combined Custom Colors

You can combine both custom background, text and border colors for complete control over the avatar appearance.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-avatar text="AB" custom-background-color="#1e293b" custom-text-color="#f1f5f9" />
  <bo-avatar text="EF" custom-background-color="#dbeafe" custom-text-color="#1e40af" />
  <bo-avatar
	  text="GH"
	  custom-background-color="#fce7f3"
	  custom-text-color="#9f1239"
	  custom-border-color="#92400e"
  />
</div>

```vue
<bo-avatar text="AB" custom-background-color="#1e293b" custom-text-color="#f1f5f9" />
<bo-avatar text="EF" custom-background-color="#dbeafe" custom-text-color="#1e40af" />
<bo-avatar
	text="GH"
	custom-background-color="#fce7f3"
	custom-text-color="#9f1239"
	custom-border-color="#92400e"
/>
```

## Type Definitions

::: code-group

```ts [bo-avatar.ts]
export enum BoAvatarShape {
	circle = 'circle',
	rounded = 'rounded',
	square = 'square',
}

export enum BoAvatarIndicatorPosition {
	topRight = 'top-right',
	topLeft = 'top-left',
	bottomRight = 'bottom-right',
	bottomLeft = 'bottom-left',
}

export interface BoAvatarProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The image source URL. */
	src?: string;
	/** The alt text for the image. */
	alt?: string;
	/** The size of the avatar. */
	size?: BoSize;
	/** The shape of the avatar. */
	shape?: BoAvatarShape;
	/** Text to display when no image is provided (abbreviation). */
	text?: string;
	/** Whether to show an indicator. */
	showIndicator?: boolean;
	/** The indicator position. */
	indicatorPosition?: BoAvatarIndicatorPosition;
	/** The variant of the indicator. */
	indicatorVariant?: BoVariant;
	/** Custom color for the avatar background (CSS variable, hex, rgb, rgba). */
	customBackgroundColor?: string;
	/** Custom color for the avatar text (CSS variable, hex, rgb, rgba). */
	customTextColor?: string;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
}
```

```ts [shared/size.ts]
export enum BoSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
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
