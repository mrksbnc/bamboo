---
title: Design Tokens
description: A comprehensive guide to Bamboo's design token architecture - only color tokens are centralized, everything else is inline.
outline: deep
---

# Design Tokens

Bamboo uses a **simplified token architecture** with a clear principle: **only color tokens are centralized, everything else is inline**. This approach reduces complexity, improves code readability, and makes the codebase easier to maintain.

## Core Principle

**Colors are tokens. Everything else is explicit.**

- ✅ **Color tokens** - Centralized in `components.css` with light/dark mode variants
- ❌ **Spacing** - Use direct rem values (e.g., `padding: 1rem`)
- ❌ **Border radius** - Use direct rem/pixel values (e.g., `border-radius: 0.5rem`)
- ❌ **Opacity** - Use direct decimal values (e.g., `opacity: 0.8`)
- ❌ **Typography** - Use `<bo-text>` component with props
- ❌ **Icons** - Use `<bo-icon>` component with props

## Token Files

Bamboo's token system is organized into three files:

### colors.css

Contains the base color palette using OKLCH color space. These are the foundational colors that all other tokens reference:

```css
:root {
	--white: oklch(100% 0 0);
	--black: oklch(0% 0 0);
	--neutral-50: oklch(98% 0 0);
	--neutral-100: oklch(96% 0 0);
	/* ... full neutral scale ... */
	--blue-600: oklch(55% 0.2 250);
	--green-600: oklch(60% 0.18 145);
	/* ... all color variants ... */
}
```

**This file is NOT modified** - it provides the raw color values.

### tokens.css

Contains utility tokens for transitions, z-index, and shadows:

```css
:root {
	/* Transitions */
	--transition-fast: 100ms;
	--transition-base: 150ms;
	--transition-slow: 300ms;
	--transition-timing: cubic-bezier(0.4, 0, 0.2, 1);

	/* Z-index scale */
	--z-dropdown: 1000;
	--z-modal: 1400;
	--z-tooltip: 1600;

	/* Shadows */
	--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

**This file is NOT modified** - these utility tokens remain centralized.

### components.css

Contains **ONLY color tokens** for all 33 components with TailwindUI-inspired light and dark mode variants:

```css
:root {
	/* Component: bo-button */
	--button-bg-primary: var(--blue-600);
	--button-bg-primary-hover: var(--blue-700);
	--button-text-primary: var(--white);

	/* Component: bo-input */
	--input-bg: var(--white);
	--input-border: var(--neutral-300);
	--input-border-focus: var(--blue-500);
	--input-text: var(--neutral-900);
}

:root[data-theme='dark'] {
	/* Component: bo-button */
	--button-bg-primary: var(--blue-500);
	--button-bg-primary-hover: var(--blue-600);
	--button-text-primary: var(--white);

	/* Component: bo-input */
	--input-bg: var(--neutral-800);
	--input-border: var(--neutral-600);
	--input-border-focus: var(--blue-400);
	--input-text: var(--neutral-100);
}
```

**This is the ONLY file where component-specific tokens are defined.**

## Spacing - Use Direct Values

**Spacing tokens have been removed.** Use direct rem values instead for better readability and simplicity.

### Recommended Spacing Scale

Use these direct rem values based on an 8px grid:

| Pixels | Rem Value  | Usage Example                  |
| ------ | ---------- | ------------------------------ |
| 4px    | `0.25rem`  | Tight spacing, icon gaps       |
| 6px    | `0.375rem` | Small gaps                     |
| 8px    | `0.5rem`   | Default small spacing          |
| 12px   | `0.75rem`  | Medium spacing                 |
| 16px   | `1rem`     | Default padding, standard gaps |
| 24px   | `1.5rem`   | Large spacing, section gaps    |
| 32px   | `2rem`     | Extra large spacing            |
| 48px   | `3rem`     | Section padding                |
| 64px   | `4rem`     | Large section spacing          |

### Usage Example

```vue
<style scoped>
	.my-component {
		padding: 1rem; /* 16px - clear and explicit */
		margin-bottom: 1.5rem; /* 24px - no indirection */
		gap: 0.5rem; /* 8px - easy to understand */
	}
</style>
```

**Why direct values?**

- Spacing rarely needs theme variations
- Direct values are easier to read and understand
- No need to look up token definitions
- Reduces cognitive load when writing CSS

## Typography - Use bo-text Component

**Typography tokens have been removed.** Use the `<bo-text>` component for all text rendering instead.

### Why bo-text Component?

The `<bo-text>` component centralizes all typography logic and provides:

- Type-safe font size, weight, and family props
- Automatic dark mode color handling
- Consistent text rendering across the library
- Better maintainability (one place to update)
- Reduced CSS duplication

### Usage Example

```vue
<script setup lang="ts">
	import { BoText, BoFontSize, BoFontWeight } from '@mrksbnc/bamboo/components';
</script>

<template>
	<!-- Heading -->
	<bo-text
		value="Welcome to Bamboo"
		:font-size="BoFontSize['2xl']"
		:font-weight="BoFontWeight.bold"
	/>

	<!-- Body text -->
	<bo-text value="This is body text with default styling" :font-size="BoFontSize.base" />

	<!-- Small secondary text -->
	<bo-text
		value="Secondary information"
		:font-size="BoFontSize.sm"
		:font-weight="BoFontWeight.medium"
		variant="secondary"
	/>
</template>
```

### Available Font Sizes

Use the `BoFontSize` enum:

```typescript
BoFontSize.xs; // 0.75rem (12px)
BoFontSize.sm; // 0.875rem (14px)
BoFontSize.base; // 1rem (16px)
BoFontSize.lg; // 1.125rem (18px)
BoFontSize.xl; // 1.25rem (20px)
BoFontSize['2xl']; // 1.5rem (24px)
```

### Available Font Weights

Use the `BoFontWeight` enum:

```typescript
BoFontWeight.normal; // 400
BoFontWeight.medium; // 500
BoFontWeight.semibold; // 600
BoFontWeight.bold; // 700
```

**Do NOT use inline typography styles:**

❌ **Don't:**

```vue
<style scoped>
	.text {
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.5;
	}
</style>
```

✅ **Do:**

```vue
<bo-text value="Text content" :font-size="BoFontSize.sm" :font-weight="BoFontWeight.medium" />
```

## Border Radius - Use Direct Values

**Border radius tokens have been removed.** Use direct rem or pixel values instead.

### Recommended Border Radius Scale

| Pixels | Rem Value  | Usage Example             |
| ------ | ---------- | ------------------------- |
| 0      | `0`        | No rounding               |
| 4px    | `0.25rem`  | Small elements, badges    |
| 6px    | `0.375rem` | Buttons, inputs (default) |
| 8px    | `0.5rem`   | Cards, larger elements    |
| 12px   | `0.75rem`  | Large cards               |
| 16px   | `1rem`     | Extra large elements      |
| Circle | `9999px`   | Avatars, circular buttons |

### Usage Example

```vue
<style scoped>
	.card {
		border-radius: 0.5rem; /* 8px - clear and explicit */
	}

	.button {
		border-radius: 0.375rem; /* 6px - standard button radius */
	}

	.avatar {
		border-radius: 9999px; /* Full circle */
	}
</style>
```

**Why direct values?**

- Border radius rarely needs theme variations
- Direct values are self-documenting
- Easier to adjust per-component needs
- No token lookup required

## Icons - Use bo-icon Component

**Icon size tokens have been removed.** Use the `<bo-icon>` component for all icon rendering instead.

### Why bo-icon Component?

The `<bo-icon>` component centralizes all icon logic and provides:

- Type-safe icon selection with the `Icon` enum
- Consistent sizing with the `size` prop (in pixels)
- Automatic dark mode color handling
- Variant support (primary, secondary, success, danger, etc.)
- Better maintainability

### Usage Example

```vue
<script setup lang="ts">
	import { BoIcon, Icon } from '@mrksbnc/bamboo/components';
</script>

<template>
	<!-- Default icon (16px) -->
	<bo-icon :icon="Icon.search" />

	<!-- Large icon (24px) -->
	<bo-icon :icon="Icon.user" :size="24" />

	<!-- Icon with variant color -->
	<bo-icon :icon="Icon.check" :size="20" variant="success" />

	<!-- Icon with custom color -->
	<bo-icon :icon="Icon.alert" :size="20" custom-color="var(--red-500)" />
</template>
```

### Common Icon Sizes

| Size | Pixels | Usage Example                |
| ---- | ------ | ---------------------------- |
| 12   | 12px   | Tiny icons, inline with text |
| 16   | 16px   | Default size, buttons        |
| 20   | 20px   | Medium icons, inputs         |
| 24   | 24px   | Large icons, headers         |
| 32   | 32px   | Extra large icons            |

**Do NOT use inline SVG or icon markup:**

❌ **Don't:**

```vue
<template>
	<svg class="icon" width="16" height="16">...</svg>
</template>

<style scoped>
	.icon {
		width: 1rem;
		height: 1rem;
		color: var(--blue-600);
	}
</style>
```

✅ **Do:**

```vue
<template>
	<bo-icon :icon="Icon.search" :size="16" variant="primary" />
</template>
```

## Opacity - Use Direct Values

**Opacity tokens have been removed.** Use direct decimal values for opacity.

### Recommended Opacity Values

| Value | Usage Example          |
| ----- | ---------------------- |
| `1`   | Fully opaque (default) |
| `0.9` | Slightly transparent   |
| `0.8` | Disabled states        |
| `0.6` | Secondary elements     |
| `0.4` | Placeholder text       |
| `0.2` | Subtle overlays        |
| `0`   | Fully transparent      |

### Usage Example

```vue
<style scoped>
	.disabled {
		opacity: 0.5; /* Clear and explicit */
	}

	.overlay {
		opacity: 0.8; /* Easy to understand */
	}
</style>
```

## Utility Tokens (Keep Using These)

Some tokens remain centralized because they provide utility across components:

### Transitions

```css
--transition-fast: 100ms;
--transition-base: 150ms;
--transition-slow: 300ms;
--transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
```

**Usage:**

```vue
<style scoped>
	.button {
		transition: background-color var(--transition-base) var(--transition-timing);
	}
</style>
```

### Z-Index Scale

```css
--z-dropdown: 1000;
--z-modal: 1400;
--z-popover: 1500;
--z-tooltip: 1600;
```

**Usage:**

```vue
<style scoped>
	.modal {
		z-index: var(--z-modal);
	}
</style>
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

**Usage:**

```vue
<style scoped>
	.card {
		box-shadow: var(--shadow-md);
	}
</style>
```

**Why keep these tokens?**

- Transitions, z-index, and shadows are used consistently across components
- They provide standardization for layering and animation timing
- They're utility values, not design decisions that vary per component

## Color Tokens - The Only Centralized Tokens

**Only color tokens are centralized** in `components.css`. All 33 components have comprehensive color tokens with TailwindUI-inspired light and dark mode variants.

### Color Token Naming Convention

```
--{component}-{element?}-{property}-{state?}-{variant?}
```

**Examples:**

- `--button-bg-primary` - Primary button background
- `--button-bg-primary-hover` - Primary button background on hover
- `--input-border-focus` - Input border when focused
- `--alert-bg-danger` - Danger alert background
- `--dropdown-item-bg-hover` - Dropdown item background on hover

### Component Color Token Structure

Each component has color tokens defined for both light and dark modes:

```css
:root {
	/* Component: bo-button */
	--button-bg-primary: var(--blue-600);
	--button-bg-primary-hover: var(--blue-700);
	--button-bg-primary-active: var(--blue-800);
	--button-text-primary: var(--white);
	--button-border-primary: var(--blue-600);
	--button-focus-ring: var(--blue-500);

	/* Component: bo-input */
	--input-bg: var(--white);
	--input-border: var(--neutral-300);
	--input-border-focus: var(--blue-500);
	--input-border-error: var(--red-500);
	--input-text: var(--neutral-900);
	--input-placeholder: var(--neutral-400);

	/* Component: bo-alert */
	--alert-bg-success: var(--green-50);
	--alert-border-success: var(--green-200);
	--alert-text-success: var(--green-800);
	--alert-icon-success: var(--green-600);
}

:root[data-theme='dark'] {
	/* Component: bo-button */
	--button-bg-primary: var(--blue-500);
	--button-bg-primary-hover: var(--blue-600);
	--button-bg-primary-active: var(--blue-700);
	--button-text-primary: var(--white);
	--button-border-primary: var(--blue-500);
	--button-focus-ring: var(--blue-400);

	/* Component: bo-input */
	--input-bg: var(--neutral-800);
	--input-border: var(--neutral-600);
	--input-border-focus: var(--blue-400);
	--input-border-error: var(--red-400);
	--input-text: var(--neutral-100);
	--input-placeholder: var(--neutral-500);

	/* Component: bo-alert */
	--alert-bg-success: var(--green-900);
	--alert-border-success: var(--green-700);
	--alert-text-success: var(--green-100);
	--alert-icon-success: var(--green-400);
}
```

### TailwindUI Color Patterns

Bamboo follows TailwindUI's approach to light and dark mode colors:

**Light Mode:**

- Backgrounds: `white`, `neutral-50`, `neutral-100`
- Borders: `neutral-200`, `neutral-300`
- Text primary: `neutral-900`, `neutral-800`
- Text secondary: `neutral-600`, `neutral-500`
- Interactive: Brand colors (`blue-600`, `green-600`, etc.)

**Dark Mode:**

- Backgrounds: `neutral-900`, `neutral-800`, `neutral-700`
- Borders: `neutral-700`, `neutral-600`
- Text primary: `white`, `neutral-100`, `neutral-200`
- Text secondary: `neutral-400`, `neutral-500`
- Interactive: Lighter brand colors (`blue-400`, `green-400`, etc.)

### Using Color Tokens

```vue
<style scoped>
	.bo-button--primary {
		background-color: var(--button-bg-primary);
		color: var(--button-text-primary);
		border-color: var(--button-border-primary);
	}

	.bo-button--primary:hover {
		background-color: var(--button-bg-primary-hover);
	}

	.bo-button--primary:focus-visible {
		outline-color: var(--button-focus-ring);
	}
</style>
```

## Best Practices

### 1. Use Color Tokens, Direct Values for Everything Else

❌ **Don't:**

```css
.my-component {
	padding: var(--spacing-4);
	font-size: var(--font-size-sm);
	border-radius: var(--radius-md);
	background-color: #3b82f6;
}
```

✅ **Do:**

```css
.my-component {
	padding: 1rem; /* Direct value - clear and explicit */
	border-radius: 0.375rem; /* Direct value - no indirection */
	background-color: var(--component-bg); /* Color token - centralized theming */
}
```

### 2. Use bo-text for Typography

❌ **Don't:**

```vue
<template>
	<span class="label">{{ label }}</span>
</template>

<style scoped>
	.label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--neutral-700);
	}
</style>
```

✅ **Do:**

```vue
<template>
	<bo-text
		:value="label"
		:font-size="BoFontSize.sm"
		:font-weight="BoFontWeight.medium"
		custom-css-class="label"
	/>
</template>
```

### 3. Use bo-icon for Icons

❌ **Don't:**

```vue
<template>
	<svg class="icon" width="16" height="16">...</svg>
</template>

<style scoped>
	.icon {
		color: var(--blue-600);
	}
</style>
```

✅ **Do:**

```vue
<template>
	<bo-icon :icon="Icon.search" :size="16" variant="primary" />
</template>
```

### 4. Use Semantic Color Tokens

❌ **Don't:**

```css
.button {
	background-color: var(--blue-600);
}

:root[data-theme='dark'] .button {
	background-color: var(--blue-400);
}
```

✅ **Do:**

```css
.button {
	background-color: var(--button-bg-primary);
}
```

The dark mode variant is already defined in `components.css`.

### 5. Follow BEM Naming Convention

❌ **Don't:**

```css
.component .label {
}
.component.primary {
}
```

✅ **Do:**

```css
.bo-component__label {
}
.bo-component--primary {
}
```

## Creating New Components

When creating new components, follow this pattern:

```vue
<template>
	<div class="bo-new-component">
		<bo-text :value="label" :font-size="BoFontSize.sm" custom-css-class="bo-new-component__label" />
		<bo-icon :icon="Icon.check" :size="20" custom-css-class="bo-new-component__icon" />
	</div>
</template>

<style scoped lang="scss">
	.bo-new-component {
		/* Use direct values for spacing, radius, opacity */
		padding: 1rem;
		border-radius: 0.5rem;
		opacity: 0.9;

		/* Use tokens for colors only */
		background-color: var(--new-component-bg);
		border-color: var(--new-component-border);

		/* Use utility tokens for transitions, z-index, shadows */
		transition: background-color var(--transition-base) var(--transition-timing);
		box-shadow: var(--shadow-md);

		/* BEM element */
		&__label {
			color: var(--new-component-label);
		}

		/* BEM modifier */
		&--primary {
			background-color: var(--new-component-bg-primary);
		}
	}
</style>
```

Then add color tokens to `components.css`:

```css
:root {
	--new-component-bg: var(--white);
	--new-component-border: var(--neutral-300);
	--new-component-label: var(--neutral-700);
	--new-component-bg-primary: var(--blue-600);
}

:root[data-theme='dark'] {
	--new-component-bg: var(--neutral-800);
	--new-component-border: var(--neutral-600);
	--new-component-label: var(--neutral-200);
	--new-component-bg-primary: var(--blue-500);
}
```

## Summary

**Bamboo's token architecture is simple:**

1. ✅ **Colors** - Use tokens from `components.css` (light/dark mode variants)
2. ❌ **Spacing** - Use direct rem values (e.g., `padding: 1rem`)
3. ❌ **Border Radius** - Use direct rem/pixel values (e.g., `border-radius: 0.5rem`)
4. ❌ **Opacity** - Use direct decimal values (e.g., `opacity: 0.8`)
5. ✅ **Typography** - Use `<bo-text>` component with props
6. ✅ **Icons** - Use `<bo-icon>` component with props
7. ✅ **Utilities** - Use tokens for transitions, z-index, shadows (from `tokens.css`)

**Why this approach?**

- Reduces complexity and cognitive load
- Makes code more readable and maintainable
- Eliminates unnecessary indirection
- Centralizes only what needs theming (colors)
- Provides clear patterns for component development

## Related Documentation

- [Colors](/en/styles/colors) - Base color palette
- [Dark Mode](/en/styles/dark-mode) - Dark mode implementation
- [Typography](/en/styles/typography) - bo-text component guide
- [bo-text Component](/en/components/text) - Complete API reference
- [bo-icon Component](/en/components/icon) - Complete API reference
