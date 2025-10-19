<script setup lang="ts">
import { BoLoadingSpinner, BoLoaderVariant, BoLoaderTextPosition } from "@/components/bo-loading-spinner";

</script>

---

## title: Loading Spinner

# bo-loading-spinner

`bo-loading-spinner` provides an accessible progress indicator with optional status text. It supports semantic defaults out of the box and allows custom styling through variants, sizes, and CSS overrides.

### Basic usage

<div style="margin: 1rem 0;">
  <bo-loading-spinner loader-text="Loading data..." />
</div>

```vue
<bo-loading-spinner loader-text="Loading data..." />
```

## Props

### Optional

| Name             | Type                   | Default                      | Description                                                        |
| ---------------- | ---------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `id`             | `string`               | `auto-generated`             | Unique identifier for the root element.                            |
| `dataTestId`     | `string`               | `auto-generated`             | Deterministic data test id for end-to-end tests.                   |
| `size`           | `BoSize`               | `BoSize.default`             | The visual size of the spinner.                                    |
| `variant`        | `BoLoaderVariant`      | `BoLoaderVariant.primary`    | Predefined color palette for the spinner.                          |
| `customColor`    | `string`               | `undefined`                  | Custom CSS color for the spinner (hex, rgb(a), oklch, or CSS var). |
| `loaderText`     | `string`               | `undefined`                  | Optional text describing the loading state.                        |
| `textPosition`   | `BoLoaderTextPosition` | `BoLoaderTextPosition.after` | Placement of the text relative to the spinner.                     |
| `ariaLive`       | `AriaLive`             | `AriaLive.polite`            | Screen reader politeness for live updates.                         |
| `ariaLabel`      | `string`               | `loaderText`                 | Accessible label describing the loading state.                     |
| `ariaBusy`       | `boolean`              | `true`                       | Marks the region as busy while loading.                            |
| `customCssClass` | `string`               | `undefined`                  | Additional CSS classes appended to the root element.               |

## Variants

Use `variant` to switch between predefined color palettes. For custom brand colors, pass a valid CSS color string to `customColor`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <bo-loading-spinner :variant="BoLoaderVariant.primary" loader-text="primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" loader-text="secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" loader-text="success" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" loader-text="warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" loader-text="danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" loader-text="dark" />
  <bo-loading-spinner :variant="BoLoaderVariant.light" loader-text="light" style="background-color: #111; padding: 0.5rem; border-radius: 0.5rem;" />
</div>

```vue
<bo-loading-spinner :variant="BoLoaderVariant.primary" loader-text="primary" />
<bo-loading-spinner :variant="BoLoaderVariant.secondary" loader-text="secondary" />
<bo-loading-spinner :variant="BoLoaderVariant.success" loader-text="success" />
<bo-loading-spinner :variant="BoLoaderVariant.warning" loader-text="warning" />
<bo-loading-spinner :variant="BoLoaderVariant.danger" loader-text="danger" />
<bo-loading-spinner :variant="BoLoaderVariant.dark" loader-text="dark" />
<bo-loading-spinner :variant="BoLoaderVariant.light" loader-text="light" />
```

## Text positions

Adjust `textPosition` to control where the supporting text appears.

<div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
  <bo-loading-spinner :text-position="BoLoaderTextPosition.top" loader-text="Top" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.before" loader-text="Before" />
  <bo-loading-spinner :text-position="BoLoaderTextPosition.after" loader-text="After (default)" />
</div>

```vue
<bo-loading-spinner :text-position="BoLoaderTextPosition.top" loader-text="Top" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.bottom" loader-text="Bottom" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.before" loader-text="Before" />
<bo-loading-spinner :text-position="BoLoaderTextPosition.after" loader-text="After (default)" />
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
	light = 'light',
}

export enum BoLoaderTextPosition {
	top = 'top',
	bottom = 'bottom',
	before = 'before',
	after = 'after',
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
