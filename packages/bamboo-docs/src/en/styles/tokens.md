---
title: design tokens
---

# Design Tokens

Bamboo provides a comprehensive set of design tokens for spacing, transitions, z-index, and shadows. These tokens are defined as CSS custom properties and can be used throughout your application.

## Spacing

Spacing tokens are used for consistent sizing and spacing throughout the library.

| Token       | Value     | Pixels |
| ----------- | --------- | ------ |
| `--size-xs` | `0.75rem` | 12px   |
| `--size-sm` | `1rem`    | 16px   |
| `--size-md` | `1.5rem`  | 24px   |
| `--size-lg` | `2rem`    | 32px   |
| `--size-xl` | `3rem`    | 48px   |

### Usage

```css
.container {
	padding: var(--size-md);
	gap: var(--size-sm);
}
```

## Transitions

Transition tokens define animation durations and timing functions for consistent motion across components.

| Token                 | Value                          |
| --------------------- | ------------------------------ |
| `--transition-fast`   | `100ms`                        |
| `--transition-base`   | `150ms`                        |
| `--transition-slow`   | `300ms`                        |
| `--transition-timing` | `cubic-bezier(0.4, 0, 0.2, 1)` |

### Usage

```css
.element {
	transition: all var(--transition-base) var(--transition-timing);
}
```

## Z-Index

Z-index tokens establish a consistent stacking order for layered components.

| Token                | Value  | Purpose                    |
| -------------------- | ------ | -------------------------- |
| `--z-base`           | `0`    | Default stacking context   |
| `--z-elevated`       | `1`    | Slightly elevated elements |
| `--z-dropdown`       | `1000` | Dropdown menus             |
| `--z-sticky`         | `1100` | Sticky headers/footers     |
| `--z-fixed`          | `1200` | Fixed positioning          |
| `--z-modal-backdrop` | `1300` | Modal backdrop overlay     |
| `--z-modal`          | `1400` | Modal dialogs              |
| `--z-popover`        | `1500` | Popovers and tooltips      |
| `--z-tooltip`        | `1600` | Tooltips (highest)         |

### Usage

```css
.modal {
	position: fixed;
	z-index: var(--z-modal);
}

.tooltip {
	z-index: var(--z-tooltip);
}
```

## Shadows

Shadow tokens provide consistent elevation and depth throughout the design system.

| Token          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| `--shadow-xs`  | `0 1px 2px 0 rgb(0 0 0 / 5%)`                                         |
| `--shadow-sm`  | `0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%)`       |
| `--shadow-md`  | `0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%)`    |
| `--shadow-lg`  | `0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%)`  |
| `--shadow-xl`  | `0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%)` |
| `--shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 25%)`                                  |

### Usage

```css
.card {
	box-shadow: var(--shadow-md);
}

.elevated-card {
	box-shadow: var(--shadow-lg);
}
```

## Reference

All tokens are available as CSS custom properties on the `:root` element and can be used in any CSS context throughout your application.
