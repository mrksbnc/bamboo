<script setup lang="ts">
import { BoLoadingSpinner, BoLoaderVariant, BoLoaderTextPosition } from "@/components/bo-loading-spinner";
import { BoSize } from "@/core/bo-size";
</script>

---

## title: Loading Spinner

# bo-loading-spinner

`bo-loading-spinner` provides an accessible progress indicator with optional status text. It supports semantic defaults out of the box and allows custom styling through variants, sizes, and CSS overrides.

### Basic usage

```vue
<bo-loading-spinner loader-text="Loading data" />
```

## Props

### Required

| Name   | Type | Default | Description                                 |
| ------ | ---- | ------- | ------------------------------------------- |
| _none_ |      |         | The component works with sensible defaults. |

### Optional

| Name             | Type                   | Default                       | Description                                                        |
| ---------------- | ---------------------- | ----------------------------- | ------------------------------------------------------------------ |
| `id`             | `string`               | `auto-generated`              | Unique identifier for the root element.                            |
| `dataTestId`     | `string`               | `auto-generated`              | Deterministic data test id for end-to-end tests.                   |
| `size`           | `BoSize`               | `BoSize.default`              | The visual size of the spinner.                                    |
| `variant`        | `BoLoaderVariant`      | `BoLoaderVariant.primary`     | Predefined color palette for the spinner.                          |
| `customColor`    | `string`               | `undefined`                   | Custom CSS color for the spinner (hex, rgb(a), oklch, or CSS var). |
| `loaderText`     | `string`               | `undefined`                   | Optional text describing the loading state.                        |
| `textPosition`   | `BoLoaderTextPosition` | `BoLoaderTextPosition.bottom` | Placement of the text relative to the spinner.                     |
| `ariaLive`       | `AriaLive`             | `AriaLive.polite`             | Screen reader politeness for live updates.                         |
| `ariaLabel`      | `string`               | `loaderText`                  | Accessible label describing the loading state.                     |
| `ariaBusy`       | `boolean`              | `true`                        | Marks the region as busy while loading.                            |
| `customCssClass` | `string`               | `undefined`                   | Additional CSS classes appended to the root element.               |

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
  <bo-loading-spinner :variant="BoLoaderVariant.primary" loader-text="primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" loader-text="secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" loader-text="success" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" loader-text="warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" loader-text="danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" loader-text="dark" />
  <bo-loading-spinner :variant="BoLoaderVariant.white" loader-text="white" style="background-color: #111; padding: 0.5rem; border-radius: 0.5rem;" />
</div>

```vue
<bo-loading-spinner :variant="BoLoaderVariant.primary" loader-text="primary" />
<bo-loading-spinner :variant="BoLoaderVariant.secondary" loader-text="secondary" />
<bo-loading-spinner :variant="BoLoaderVariant.success" loader-text="success" />
<bo-loading-spinner :variant="BoLoaderVariant.warning" loader-text="warning" />
<bo-loading-spinner :variant="BoLoaderVariant.danger" loader-text="danger" />
<bo-loading-spinner :variant="BoLoaderVariant.dark" loader-text="dark" />
<bo-loading-spinner :variant="BoLoaderVariant.white" loader-text="white" />
```

## Text positions

Adjust `textPosition` to control where the supporting text appears.

<div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
  <bo-loading-spinner :text-position="BoLoaderTextPosition.top" loader-text="Top" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.side" loader-text="Side" />
</div>

```vue
<bo-loading-spinner :text-position="BoLoaderTextPosition.top" loader-text="Top" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.side" loader-text="Side" />
```

## Custom text

Provide richer markup via the default slot. The slot replaces the `loaderText` prop entirely, allowing typography or iconography.

```vue
<bo-loading-spinner>
	<template #default>
		<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
			<bo-icon :icon="Icon.cloud" />
			<span>Syncing files…</span>
		</span>
	</template>
</bo-loading-spinner>
```

## Accessibility

- `aria-live` defaults to `polite` so announcements occur without interrupting the user.
- `aria-busy` is set to `true` while the spinner is visible, signalling assistive tech that the region is updating.
- `aria-label` falls back to `loaderText`, so always provide descriptive text or a slot for accessible messaging.

### Interfaces and constants

::: code-group

```ts [bo-loading-spinner.ts]
export enum BoLoaderVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	dark = 'dark',
	white = 'white',
}

export enum BoLoaderTextPosition {
	top = 'top',
	bottom = 'bottom',
	side = 'side',
}
```

```ts [bo-size.ts]
export enum BoSize {
	extra_small = 'extra-small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra-large',
}
```

```ts [bo-loading-spinner.ts]
export interface BoLoadingSpinnerProps {
	id?: string
	dataTestId?: string
	size?: BoSize
	variant?: BoLoaderVariant
	customColor?: string
	loaderText?: string
	textPosition?: BoLoaderTextPosition
	ariaLive?: AriaLive
	ariaLabel?: string
	ariaBusy?: boolean
	customCssClass?: string
}
```

:::
