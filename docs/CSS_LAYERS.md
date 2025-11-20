# CSS Layers Architecture

This document explains Bamboo's CSS architecture using CSS Cascade Layers for predictable styling and easy customization.

## Overview

Bamboo uses CSS Cascade Layers (`@layer`) to organize styles in a clear hierarchy. This approach provides:

- **Predictable specificity**: Layer order determines precedence, not selector specificity
- **Easy overrides**: User styles automatically override library styles
- **Maintainable code**: Clear separation of concerns
- **No `!important` needed**: Proper layering eliminates specificity wars

## Layer Hierarchy

```
┌─────────────────────────────────────────────┐
│           User Styles (Unlayered)           │  ← Highest Priority
├─────────────────────────────────────────────┤
│         @layer utilities                    │
├─────────────────────────────────────────────┤
│         @layer components                   │
├─────────────────────────────────────────────┤
│         @layer colors                       │
├─────────────────────────────────────────────┤
│         @layer tokens                       │  ← Lowest Priority
└─────────────────────────────────────────────┘
```

Styles in higher layers override styles in lower layers, regardless of specificity.

## Layer Definitions

### Layer Declaration

All layers are declared at the top of `lib.css`:

```css
@layer tokens, colors, components, utilities;
```

This establishes the layer order. Layers defined later have higher priority.

### 1. Tokens Layer

**Purpose**: Design tokens and foundational CSS custom properties

**Location**: `src/styles/tokens.css`

**Contains**:

- Spacing scale
- Typography scale
- Border radius values
- Shadow definitions
- Transition durations
- Z-index scale

**Example**:

```css
@layer tokens {
	:root {
		/* Spacing */
		--spacing-0: 0;
		--spacing-1: 0.25rem;
		--spacing-2: 0.5rem;
		--spacing-4: 1rem;

		/* Typography */
		--font-size-xs: 0.75rem;
		--font-size-sm: 0.875rem;
		--font-size-base: 1rem;
		--font-size-lg: 1.125rem;

		/* Borders */
		--radius-sm: 0.25rem;
		--radius-md: 0.375rem;
		--radius-lg: 0.5rem;

		/* Shadows */
		--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}
}
```

**Why lowest priority?**
Tokens are the foundation but should be easily overridden by more specific styles.

### 2. Colors Layer

**Purpose**: Color system with theme support

**Location**: `src/styles/colors.css`

**Contains**:

- Color palette (blue, red, green, etc.)
- Semantic colors (primary, success, error)
- Light and dark theme definitions
- Neutral colors (gray scale)

**Example**:

```css
@layer colors {
	:root {
		/* Blue palette */
		--blue-50: #eff6ff;
		--blue-100: #dbeafe;
		--blue-600: #2563eb;
		--blue-700: #1d4ed8;

		/* Semantic colors */
		--color-primary: var(--blue-600);
		--color-success: var(--green-600);
		--color-error: var(--red-600);

		/* Neutral colors */
		--gray-50: #f9fafb;
		--gray-900: #111827;
	}

	[data-theme='dark'] {
		--blue-600: #3b82f6;
		--blue-700: #2563eb;

		--color-primary: var(--blue-600);
		--gray-50: #18181b;
		--gray-900: #fafafa;
	}
}
```

**Theme Switching**:
The `data-theme` attribute on the root element controls the active theme:

```html
<html data-theme="light">
	<!-- Light theme -->
	<html data-theme="dark">
		<!-- Dark theme -->
	</html>
</html>
```

### 3. Components Layer

**Purpose**: Base component styles

**Location**: `src/styles/components.css` and component `<style>` blocks

**Contains**:

- Component base styles
- Component variants
- Component states (hover, focus, disabled)
- Component size variations

**Example**:

```css
@layer components {
	.bo-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-2) var(--spacing-4);
		font-size: var(--font-size-base);
		border-radius: var(--radius-md);
		transition: all 150ms ease;
	}

	.bo-button--primary {
		background-color: var(--color-primary);
		color: white;
	}

	.bo-button--sm {
		padding: var(--spacing-1) var(--spacing-3);
		font-size: var(--font-size-sm);
	}

	.bo-button:hover:not(:disabled) {
		opacity: 0.9;
	}

	.bo-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
}
```

**Component Style Organization**:

```css
/* 1. Base styles */
.bo-component {
}

/* 2. Variants */
.bo-component--variant {
}

/* 3. Sizes */
.bo-component--size {
}

/* 4. States */
.bo-component:hover {
}
.bo-component:focus {
}
.bo-component:disabled {
}

/* 5. Modifiers */
.bo-component--modifier {
}
```

### 4. Utilities Layer

**Purpose**: Utility classes for common patterns

**Location**: `src/styles/components.css`

**Contains**:

- Layout utilities
- Spacing utilities
- Accessibility utilities
- Common patterns

**Example**:

```css
@layer utilities {
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
```

**Why highest priority (in layers)?**
Utilities are intentionally specific and should override component styles.

### 5. Unlayered Styles (User Styles)

**Purpose**: User customizations

**Location**: User's application CSS

**Contains**:

- Custom overrides
- Application-specific styles
- Theme customizations

**Example**:

```css
/* User's app.css - automatically overrides all layers */
.bo-button {
	border-radius: 0; /* Override library border radius */
}

:root {
	--color-primary: #8b5cf6; /* Custom primary color */
}
```

Unlayered styles have the highest priority and will override any layered styles, regardless of specificity.

## CSS Layers Diagram

```
┌──────────────────────────────────────────────────────────┐
│                    lib.css Entry Point                    │
└───────────────────────┬──────────────────────────────────┘
                        │
        ┌───────────────┴───────────────┐
        │  @layer tokens, colors,       │
        │  components, utilities;       │
        └───────────────┬───────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ tokens.css   │ │ colors.css   │ │components.css│
│              │ │              │ │              │
│ @layer       │ │ @layer       │ │ @layer       │
│ tokens {     │ │ colors {     │ │ components { │
│   :root {    │ │   :root {    │ │   .bo-* {    │
│     --var    │ │     --color  │ │     styles   │
│   }          │ │   }          │ │   }          │
│ }            │ │   [dark] {   │ │ }            │
│              │ │     --color  │ │              │
│              │ │   }          │ │ @layer       │
│              │ │ }            │ │ utilities {  │
│              │ │              │ │   .sr-only   │
│              │ │              │ │ }            │
└──────────────┘ └──────────────┘ └──────────────┘
```

## Benefits of This Architecture

### 1. Predictable Overrides

Users can override any library style without using `!important`:

```css
/* User's CSS - no !important needed */
.bo-button {
	background: purple;
}
```

This works because unlayered styles beat layered styles.

### 2. No Specificity Wars

Within layers, specificity still matters, but layer order is the primary determinant:

```css
@layer components {
	/* Low specificity but in components layer */
	.bo-button {
		color: blue;
	}
}

@layer utilities {
	/* Even lower specificity but in higher layer - wins! */
	.text-red {
		color: red;
	}
}
```

### 3. Clear Organization

Each layer has a specific purpose, making the codebase easier to understand and maintain.

### 4. Easy Theme Customization

Users can customize themes by overriding CSS custom properties:

```css
:root {
	/* Override any token */
	--spacing-4: 1.5rem;
	--color-primary: #8b5cf6;
	--radius-md: 0.5rem;
}
```

### 5. Component Isolation

Component styles are isolated in the components layer, preventing unintended side effects.

## Best Practices

### For Library Developers

1. **Always use layers**: Put all library styles in appropriate layers
2. **Use CSS custom properties**: Makes customization easier
3. **Keep specificity low**: Let layer order handle precedence
4. **Document layer usage**: Make it clear which layer styles belong to
5. **Test overrides**: Ensure users can easily customize styles

### For Library Users

1. **Don't use layers in app CSS**: Unlayered styles automatically win
2. **Override custom properties**: Easiest way to customize
3. **Use specific selectors when needed**: For targeted overrides
4. **Avoid `!important`**: Not needed with proper layer architecture
5. **Check dark theme**: Test customizations in both themes

## Customization Examples

### Example 1: Change Primary Color

```css
/* app.css */
:root {
	--color-primary: #8b5cf6;
	--blue-600: #8b5cf6;
}

[data-theme='dark'] {
	--color-primary: #a78bfa;
	--blue-600: #a78bfa;
}
```

### Example 2: Customize Button Styles

```css
/* app.css */
.bo-button {
	border-radius: 9999px; /* Pill-shaped buttons */
	font-weight: 600;
	text-transform: uppercase;
}
```

### Example 3: Adjust Spacing Scale

```css
/* app.css */
:root {
	--spacing-1: 0.5rem; /* Larger spacing */
	--spacing-2: 1rem;
	--spacing-4: 2rem;
}
```

### Example 4: Custom Component Variant

```css
/* app.css */
.bo-button--custom {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border: none;
}
```

## Browser Support

CSS Cascade Layers are supported in:

- Chrome 99+
- Firefox 97+
- Safari 15.4+
- Edge 99+

For older browsers, consider using a PostCSS plugin or providing a fallback stylesheet.

## Migration from Traditional CSS

If migrating from traditional CSS to layers:

1. Identify style categories (tokens, colors, components, utilities)
2. Wrap existing styles in appropriate `@layer` blocks
3. Declare layer order at the top of your main CSS file
4. Test that overrides still work as expected
5. Remove unnecessary `!important` declarations

## Further Reading

- [MDN: CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [CSS Cascade Layers Specification](https://www.w3.org/TR/css-cascade-5/#layering)
- [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/)
