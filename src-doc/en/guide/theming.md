---
title: Theming
description: Learn how to customize the design system with CSS variables and theme modes
outline: deep
---

# Theming

The component library uses a comprehensive theming system built on CSS custom properties (variables) that supports both light and dark modes out of the box.

## Theme Modes

The library supports two theme modes:

- **Light Mode** (default)
- **Dark Mode**

Theme switching is handled automatically through the `data-theme` attribute on the root element.

### Using the Theme Composable

```vue
<script setup>
	import { useTheme, BoTheme } from '@/composables/useTheme';

	const { activeTheme, setTheme, onThemeToggle, initTheme } = useTheme();

	// Initialize theme on mount
	onMounted(() => {
		initTheme();
	});

	// Toggle between light and dark
	function toggleTheme() {
		onThemeToggle();
	}

	// Set specific theme
	function setLightTheme() {
		setTheme(BoTheme.light);
	}

	function setDarkTheme() {
		setTheme(BoTheme.dark);
	}
</script>
```

## Design Tokens

The design system is built on a foundation of design tokens organized into categories:

### Color Palette

The library uses the OKLCH color space for consistent, perceptually uniform colors across all themes. Colors are organized by hue with 11 shades (50-950):

- **Neutral**: Gray scale colors
- **Primary Colors**: Blue, Indigo, Violet, Purple
- **Success**: Green, Emerald, Teal
- **Warning**: Yellow, Amber, Orange
- **Danger**: Red, Rose, Pink
- **Accent**: Cyan, Sky, Lime, Fuchsia

Example usage:

```css
.my-element {
	color: var(--blue-600);
	background-color: var(--neutral-50);
	border-color: var(--green-300);
}
```

### Spacing Scale

Based on an 8px grid system:

```css
--spacing-0: 0;
--spacing-0-5: 0.125rem; /* 2px */
--spacing-1: 0.25rem; /* 4px */
--spacing-1-5: 0.375rem; /* 6px */
--spacing-2: 0.5rem; /* 8px */
--spacing-2-5: 0.625rem; /* 10px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
--spacing-5: 1.25rem; /* 20px */
--spacing-6: 1.5rem; /* 24px */
--spacing-8: 2rem; /* 32px */
--spacing-10: 2.5rem; /* 40px */
--spacing-12: 3rem; /* 48px */
--spacing-16: 4rem; /* 64px */
```

### Typography Scale

```css
/* Font Sizes */
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */

/* Line Heights */
--line-height-xs: 1rem; /* 16px */
--line-height-sm: 1.25rem; /* 20px */
--line-height-base: 1.5rem; /* 24px */
--line-height-lg: 1.75rem; /* 28px */
--line-height-xl: 2rem; /* 32px */

/* Font Weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.125rem; /* 2px */
--radius-base: 0.25rem; /* 4px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem; /* 8px */
--radius-xl: 0.75rem; /* 12px */
--radius-2xl: 1rem; /* 16px */
--radius-full: 9999px;
```

### Transitions

```css
--transition-fast: 100ms;
--transition-base: 150ms;
--transition-slow: 300ms;
--transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
```

### Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1100;
--z-fixed: 1200;
--z-modal-backdrop: 1300;
--z-modal: 1400;
--z-popover: 1500;
--z-tooltip: 1600;
```

## Component Theming

Each component has its own set of CSS variables that adapt to the active theme. Components follow the BEM (Block Element Modifier) naming convention.

### Shared Variant System

Components use a shared variant system defined in `shared.css` for consistent theming:

```
--variant-{variant}-{property}
```

Examples:

```css
/* Variant colors */
--variant-primary-bg
--variant-primary-bg-hover
--variant-primary-text

/* Subtle variants for alerts */
--variant-success-subtle-bg
--variant-success-subtle-border
--variant-success-subtle-text
```

### Customizing Component Themes

You can override variant variables to customize the appearance across all components:

```css
:root {
	/* Customize primary variant */
	--variant-primary-bg: var(--purple-600);
	--variant-primary-bg-hover: var(--purple-700);
	--variant-primary-text: var(--white);

	/* Customize success variant */
	--variant-success-bg: var(--emerald-600);
	--variant-success-text: var(--white);
}

:root[data-theme='dark'] {
	/* Dark theme overrides */
	--variant-primary-bg: var(--purple-500);
	--variant-primary-bg-hover: var(--purple-400);

	--variant-success-bg: var(--emerald-400);
}
```

## Shared Component Variables

Common variables used across multiple components:

```css
:root {
	/* Component backgrounds */
	--component-bg: var(--white);
	--component-bg-hover: var(--neutral-50);
	--component-bg-active: var(--neutral-100);

	/* Component borders */
	--component-border: var(--neutral-300);
	--component-border-hover: var(--neutral-400);

	/* Focus ring */
	--focus-ring-color: var(--blue-500);
	--focus-ring-width: 2px;
	--focus-ring-offset: 2px;
}

:root[data-theme='dark'] {
	/* Component backgrounds */
	--component-bg: var(--neutral-900);
	--component-bg-hover: var(--neutral-800);
	--component-bg-active: var(--neutral-700);

	/* Component borders */
	--component-border: var(--neutral-700);
	--component-border-hover: var(--neutral-600);

	/* Focus ring */
	--focus-ring-color: var(--blue-400);
}
```

## BEM Naming Convention

All components follow the BEM (Block Element Modifier) methodology for CSS class names:

### Block

The component itself:

```css
.bo-button {
}
.bo-icon {
}
.bo-alert {
}
```

### Element

Parts of the component:

```css
.bo-button__content {
}
.bo-button__loader {
}
.bo-alert__icon {
}
.bo-alert__title {
}
.bo-alert__message {
}
```

### Modifier

Variations of the component:

```css
.bo-button--variant-primary {
}
.bo-button--size-lg {
}
.bo-button--disabled {
}
.bo-icon--variant-success {
}
.bo-alert--variant-danger {
}
```

## Best Practices

### 1. Use Design Tokens

Always use design tokens instead of hardcoded values:

```css
/* ✅ Good */
.my-component {
	padding: var(--spacing-4);
	font-size: var(--font-size-sm);
	color: var(--neutral-700);
	border-radius: var(--radius-md);
}

/* ❌ Bad */
.my-component {
	padding: 16px;
	font-size: 14px;
	color: #374151;
	border-radius: 6px;
}
```

### 2. Support Both Themes

When creating custom styles, always provide both light and dark theme values:

```css
:root {
	--my-custom-bg: var(--neutral-50);
	--my-custom-text: var(--neutral-900);
}

:root[data-theme='dark'] {
	--my-custom-bg: var(--neutral-900);
	--my-custom-text: var(--neutral-100);
}
```

### 3. Follow BEM Naming

Keep class names consistent with the BEM methodology:

```css
/* Component block */
.my-component {
}

/* Component elements */
.my-component__header {
}
.my-component__body {
}
.my-component__footer {
}

/* Component modifiers */
.my-component--large {
}
.my-component--primary {
}
.my-component--disabled {
}
```

### 4. Use Semantic Color Names

Use semantic color names from the variant system:

```css
/* ✅ Good - Semantic */
.success-message {
	color: var(--variant-success-bg);
	background-color: var(--variant-success-subtle-bg);
}

/* ❌ Bad - Direct color reference */
.success-message {
	color: var(--green-600);
	background-color: rgba(34, 197, 94, 0.1);
}
```

## Accessibility

The theming system is designed with accessibility in mind:

- **WCAG 2.2 Compliant**: All color combinations meet WCAG AA standards for contrast
- **Focus Indicators**: Clear focus rings with 3:1 contrast ratio
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **High Contrast**: Works well with high contrast modes

## Performance

The theming system is optimized for performance:

- **CSS Variables**: Native browser support, no JavaScript overhead
- **Minimal Repaints**: Theme switching only updates CSS variables
- **Cached Icons**: Icon components cache loaded SVGs to avoid redundant loading
- **Scoped Styles**: Component styles are scoped to prevent global pollution

## Migration Guide

If you're migrating from an older version, here's how to update:

### Old Approach (Component-Specific Variables)

```css
.bo-button {
	background-color: var(--button-color-primary-bg);
}

.bo-alert {
	background-color: var(--alert-color-success-bg);
}
```

### New Approach (Shared Variant System)

```css
.bo-button {
	background-color: var(--variant-primary-bg);
}

.bo-alert {
	background-color: var(--variant-success-subtle-bg);
}
```

Components now use a shared variant system instead of component-specific proxy variables, reducing redundancy and improving consistency.
