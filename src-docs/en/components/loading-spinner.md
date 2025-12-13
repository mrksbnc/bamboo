---
title: bo-loading-spinner
---

<script setup lang="ts">
import { BoLoadingSpinner } from "@/components/bo-loading-spinner";
import { AriaLive } from "@/core/accessibility";
import { BoSize } from "@/core/size";
import { BoLoaderTextPosition } from "@/core/loader"
import { BoVariant } from "@/core/variant"
</script>

# bo-loading-spinner

`bo-loading-spinner` provides an accessible progress indicator with optional status text.

### Basic usage

```vue
<bo-loading-spinner loader-text="Loading data" />
```

<div style="margin: 1rem 0;">
  <bo-loading-spinner loader-text="Loading data" />
</div>

## Props

### Optional

| Name                      | Type                   | Description                                                        |
| ------------------------- | ---------------------- | ------------------------------------------------------------------ |
| `id`                      | `string`               | Unique identifier for the root element.                            |
| `dataTestId`              | `string`               | Deterministic data test id for end-to-end tests.                   |
| `size`                    | `BoSize`               | The visual size of the spinner.                                    |
| `variant`                 | `BoVariant`            | Predefined color palette for the spinner.                          |
| `customColor`             | `string`               | Custom CSS color for the spinner (hex, rgb(a), oklch, or CSS var). |
| `loaderText`              | `string`               | Optional text describing the loading state.                        |
| `textPosition`            | `BoLoaderTextPosition` | Placement of the text relative to the spinner.                     |
| `ariaLive`                | `AriaLive`             | Screen reader politeness for live updates.                         |
| `ariaLabel`               | `string`               | Accessible label describing the loading state.                     |
| `ariaBusy`                | `boolean`              | Marks the region as busy while loading.                            |
| `customContainerCssClass` | `string`               | Additional CSS classes appended to the root element.               |
| `customSpinnerCssClass`   | `string`               | Additional CSS classes appended to the spinner element.            |

## Sizes

The spinner supports the same sizing scale as the rest of the design system via `BoSize`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
  <bo-loading-spinner :size="BoSize.extra_small" loader-text="extra small" />
  <bo-loading-spinner :size="BoSize.small" loader-text="small" />
  <bo-loading-spinner :size="BoSize.default" loader-text="default" />
  <bo-loading-spinner :size="BoSize.large" loader-text="large" />
  <bo-loading-spinner :size="BoSize.extra_large" loader-text="extra large" />
</div>

```vue
<bo-loading-spinner :size="BoSize.extra_small" loader-text="extra small" />
<bo-loading-spinner :size="BoSize.small" loader-text="small" />
<bo-loading-spinner :size="BoSize.default" loader-text="default" />
<bo-loading-spinner :size="BoSize.large" loader-text="large" />
<bo-loading-spinner :size="BoSize.extra_large" loader-text="extra large" />
```

## Variants

Use `variant` to switch between predefined color palettes. For custom brand colors, pass a valid CSS color string to `customColor`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <bo-loading-spinner :variant="BoVariant.primary" loader-text="primary" />
  <bo-loading-spinner :variant="BoVariant.secondary" loader-text="secondary" />
  <bo-loading-spinner :variant="BoVariant.success" loader-text="success" />
  <bo-loading-spinner :variant="BoVariant.warning" loader-text="warning" />
  <bo-loading-spinner :variant="BoVariant.danger" loader-text="danger" />
  <bo-loading-spinner :variant="BoVariant.dark" loader-text="dark" style="background-color: var(--neutral-100); padding: 0.5rem; border-radius: 0.5rem;"/>
  <bo-loading-spinner :variant="BoVariant.light" loader-text="light" style="background-color: #111; padding: 0.5rem; border-radius: 0.5rem;" />
</div>

```vue
<bo-loading-spinner :variant="BoVariant.primary" loader-text="primary" />
<bo-loading-spinner :variant="BoVariant.secondary" loader-text="secondary" />
<bo-loading-spinner :variant="BoVariant.success" loader-text="success" />
<bo-loading-spinner :variant="BoVariant.warning" loader-text="warning" />
<bo-loading-spinner :variant="BoVariant.danger" loader-text="danger" />
<bo-loading-spinner :variant="BoVariant.dark" loader-text="dark" />
<bo-loading-spinner :variant="BoVariant.light" loader-text="light" />
```

## Text positions

Adjust `textPosition` to control where the supporting text appears.

<div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
  <bo-loading-spinner :text-position="BoLoaderTextPosition.top" loader-text="Top" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.before" loader-text="Before" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.after" loader-text="After" />
</div>

```vue
<bo-loading-spinner :text-position="BoLoaderTextPosition.top" loader-text="Top" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.before" loader-text="Before" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.after" loader-text="After" />
```

## Custom text

Provide richer markup via the default slot. The slot replaces the `loaderText` prop entirely, allowing typography or iconography.

```vue
<bo-loading-spinner>
	<span>Syncing files…</span>
</bo-loading-spinner>
```

<bo-loading-spinner>
	<span>Syncing files…</span>
</bo-loading-spinner>

## Custom colors

You can customize the color of the ring by passing a valid CSS color value to the `customColor` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-loading-spinner custom-color="var(--teal-500)" loader-text="CSS Variable" />
  <bo-loading-spinner custom-color="#ff6b6b" loader-text="Hex Color" />
  <bo-loading-spinner custom-color="rgb(255, 107, 107)" loader-text="RGB Color" />
  <bo-loading-spinner custom-color="oklch(0.7 0.15 180)" loader-text="OKLCH Color" />
</div>

```vue
<bo-loading-spinner custom-color="--teal-500" loader-text="CSS Variable" />
<bo-loading-spinner custom-color="#ff6b6b" loader-text="Hex Color" />
<bo-loading-spinner custom-color="rgb(255, 107, 107)" loader-text="RGB Color" />
<bo-loading-spinner custom-color="oklch(0.7 0.15 180)" loader-text="OKLCH Color" />
```

## Accessibility

- Use `aria-live` with the `AriaLive` enum when updates should be announced to screen readers.
- Pass `aria-busy="true"` while the surrounding region updates so assistive tech understands the pending state.
- Provide `loaderText`, an `aria-label`, or slot content so the loading state remains descriptive.

### Interfaces and constants

::: code-group

```ts [bo-loading-spinner.ts]
export interface BoLoadingSpinnerProps {
	id?: string;
	dataTestId?: string;
	size?: BoSize;
	variant?: BoVariant;
	customColor?: string;
	loaderText?: string;
	textPosition?: BoLoaderTextPosition;
	ariaLive?: AriaLive;
	ariaLabel?: string;
	ariaBusy?: boolean;
	customContainerCssClass?: string;
	customSpinnerCssClass?: string;
}
```

```ts [core/accessibility.ts]
export enum AriaLive {
	polite = 'polite',
	assertive = 'assertive',
	off = 'off',
}
```

```ts [shared/loader.ts]
export enum BoVariant {
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
