<script setup lang="ts">
import { BoLoadingRing } from "@/components/bo-loading-ring";
import { AriaLive } from "@/shared/accessibility";
import { BoSize } from "@/shared/size";
import { BoLoaderVariant, BoLoaderTextPosition } from "@/shared/loader"
</script>

# bo-loading-ring

`bo-loading-ring` provides an accessible progress indicator with a unique 3D ring animation and optional status text. It supports semantic defaults out of the box and allows custom styling through variants, sizes, and CSS overrides.

### Basic usage

<div style="margin: 1rem 0;">
  <bo-loading-ring loader-text="Loading data" />
</div>

```vue
<bo-loading-ring loader-text="Loading data" />
```

## Props

### Optional

| Name                      | Type                   | Default                      | Description                                                     |
| ------------------------- | ---------------------- | ---------------------------- | --------------------------------------------------------------- |
| `id`                      | `string`               | `auto-generated`             | Unique identifier for the loader ring container.                |
| `dataTestId`              | `string`               | `auto-generated`             | Deterministic data test id for end-to-end tests.                |
| `size`                    | `BoSize`               | `BoSize.default`             | The visual size of the ring.                                    |
| `variant`                 | `BoLoaderVariant`      | `BoLoaderVariant.primary`    | Predefined color palette for the ring.                          |
| `customColor`             | `string`               | `undefined`                  | Custom CSS color for the ring (hex, rgb(a), oklch, or CSS var). |
| `loaderText`              | `string`               | `undefined`                  | Optional text describing the loading state.                     |
| `textPosition`            | `BoLoaderTextPosition` | `BoLoaderTextPosition.after` | Placement of the text relative to the ring.                     |
| `ariaLive`                | `AriaLive`             | `undefined`                  | Screen reader politeness for live updates.                      |
| `ariaLabel`               | `string`               | `undefined`                  | Accessible label describing the loading state.                  |
| `ariaBusy`                | `boolean`              | `undefined`                  | Marks the region as busy while the ring is visible.             |
| `customContainerCssClass` | `string`               | `undefined`                  | Additional CSS classes appended to the container element.       |
| `customRingClass`         | `string`               | `undefined`                  | Additional CSS classes appended to the ring element.            |

## Sizes

The ring supports the same sizing scale as the rest of the design system via `BoSize`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
  <bo-loading-ring :size="BoSize.extra_small" loader-text="extra small" />
  <bo-loading-ring :size="BoSize.small" loader-text="small" />
  <bo-loading-ring :size="BoSize.default" loader-text="default" />
  <bo-loading-ring :size="BoSize.large" loader-text="large" />
  <bo-loading-ring :size="BoSize.extra_large" loader-text="extra large" />
</div>

```vue
<bo-loading-ring :size="BoSize.extra_small" loader-text="extra small" />
<bo-loading-ring :size="BoSize.small" loader-text="small" />
<bo-loading-ring :size="BoSize.default" loader-text="default" />
<bo-loading-ring :size="BoSize.large" loader-text="large" />
<bo-loading-ring :size="BoSize.extra_large" loader-text="extra large" />
```

## Variants

Use `variant` to switch between predefined color palettes. For custom brand colors, pass a valid CSS color string to `customColor`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <bo-loading-ring :variant="BoLoaderVariant.primary" loader-text="primary" />
  <bo-loading-ring :variant="BoLoaderVariant.secondary" loader-text="secondary" />
  <bo-loading-ring :variant="BoLoaderVariant.success" loader-text="success" />
  <bo-loading-ring :variant="BoLoaderVariant.warning" loader-text="warning" />
  <bo-loading-ring :variant="BoLoaderVariant.danger" loader-text="danger" />
  <bo-loading-ring :variant="BoLoaderVariant.dark" loader-text="dark" />
  <bo-loading-ring :variant="BoLoaderVariant.light" loader-text="light" style="background-color: #111; padding: 0.5rem; border-radius: 0.5rem;" />
</div>

```vue
<bo-loading-ring :variant="BoLoaderVariant.primary" loader-text="primary" />
<bo-loading-ring :variant="BoLoaderVariant.secondary" loader-text="secondary" />
<bo-loading-ring :variant="BoLoaderVariant.success" loader-text="success" />
<bo-loading-ring :variant="BoLoaderVariant.warning" loader-text="warning" />
<bo-loading-ring :variant="BoLoaderVariant.danger" loader-text="danger" />
<bo-loading-ring :variant="BoLoaderVariant.dark" loader-text="dark" />
<bo-loading-ring :variant="BoLoaderVariant.light" loader-text="light" />
```

## Text positions

Adjust `textPosition` to control where the supporting text appears.

<div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
  <bo-loading-ring :text-position="BoLoaderTextPosition.top" loader-text="Top" />
  <bo-loading-ring :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
  <bo-loading-ring :text-position="BoLoaderTextPosition.before" loader-text="Before" />
  <bo-loading-ring :text-position="BoLoaderTextPosition.after" loader-text="After" />
</div>

```vue
<bo-loading-ring :text-position="BoLoaderTextPosition.top" loader-text="Top" />
<bo-loading-ring :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
<bo-loading-ring :text-position="BoLoaderTextPosition.before" loader-text="Before" />
<bo-loading-ring :text-position="BoLoaderTextPosition.after" loader-text="After" />
```

## Custom text

Provide richer markup via the default slot. The slot replaces the `loaderText` prop entirely, allowing typography or iconography.

```vue
<bo-loading-ring>
	<template #default>
		<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
			<bo-icon :icon="Icon.cloud" />
			<span>Syncing files…</span>
		</span>
	</template>
</bo-loading-ring>
```

## Custom colors

You can customize the color of the ring by passing a valid CSS color value to the `customColor` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-loading-ring custom-color="--teal-500" loader-text="CSS Variable" />
  <bo-loading-ring custom-color="#ff6b6b" loader-text="Hex Color" />
  <bo-loading-ring custom-color="rgb(255, 107, 107)" loader-text="RGB Color" />
  <bo-loading-ring custom-color="oklch(0.7 0.15 180)" loader-text="OKLCH Color" />
</div>

```vue
<bo-loading-ring custom-color="--teal-500" loader-text="CSS Variable" />
<bo-loading-ring custom-color="#ff6b6b" loader-text="Hex Color" />
<bo-loading-ring custom-color="rgb(255, 107, 107)" loader-text="RGB Color" />
<bo-loading-ring custom-color="oklch(0.7 0.15 180)" loader-text="OKLCH Color" />
```

## Accessibility

- `aria-live` can be set to `polite`, `assertive`, or `off` for screen reader announcements
- `aria-busy` can be set to `true` while the ring is visible, signalling assistive tech that the region is updating
- `aria-label` provides accessible messaging when no `loaderText` is provided
- The component automatically generates unique IDs for testing and accessibility

### Interfaces and constants

::: code-group

```ts [bo-loading-ring.ts]
export interface BoLoaderRingProps {
	/** Unique id for the loader ring */
	id?: string
	/** Unique data-test-id for the loader ring container */
	dataTestId?: string
	/** The size of the loader ring */
	size?: BoSize
	/** Predefined color variant of the loader ring */
	variant?: BoLoaderVariant
	/** Optional loader text to display */
	loaderText?: string
	/** Position of the text relative to the loader ring */
	textPosition?: BoLoaderTextPosition
	/** Custom color of the loader ring in CSS compatible format */
	customColor?: string
	/** Accessibility live region politeness setting */
	ariaLive?: AriaLive
	/** Accessible label describing the loader ring state */
	ariaLabel?: string
	/** Mark the region as busy while the loader ring is visible */
	ariaBusy?: boolean
	/** Optional custom classes appended to the loader ring wrapper */
	customContainerCssClass?: string
	/** Optional custom classes appended to the loader ring element */
	customRingClass?: string
}
```

```ts [shared/accessibility.ts]
export enum AriaLive {
	polite = 'polite',
	assertive = 'assertive',
	off = 'off',
}
```

```ts [shared/loader.ts]
export enum BoLoaderVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	dark = 'dark',
	light = 'light',
}

export enum BoLoaderTextPosition {
	top = 'top',
	bottom = 'bottom',
	before = 'before',
	after = 'after',
}
```

```ts [shared/size.ts]
export enum BoSize {
	extra_small = 'extra-small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra-large',
}
```

:::
