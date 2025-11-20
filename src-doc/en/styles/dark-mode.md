---
title: Dark Mode
description: Complete guide to Bamboo's dark mode implementation, including automatic theme detection, manual switching, and component theming.
outline: deep
---

# Dark Mode

Bamboo provides comprehensive dark mode support out of the box. All components automatically adapt to dark mode with carefully designed color palettes that maintain WCAG AA accessibility standards.

## How It Works

Dark mode in Bamboo is implemented using CSS custom properties with the `data-theme` attribute on the root element:

```css
:root {
	/* Light mode colors */
	--text-color-default: var(--neutral-800);
	--bg-color: var(--white);
}

:root[data-theme='dark'] {
	/* Dark mode colors */
	--text-color-default: var(--neutral-50);
	--bg-color: var(--neutral-900);
}
```

## Enabling Dark Mode

### Using the useTheme Composable (Recommended)

Bamboo provides a `useTheme` composable that handles theme management, persistence, and system preference detection:

```vue
<script setup lang="ts">
	import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';

	const { activeTheme, onThemeToggle } = useTheme();
</script>

<template>
	<button @click="onThemeToggle">
		{{ activeTheme === BoTheme.dark ? '☀️ Light' : '🌙 Dark' }}
	</button>
</template>
```

The composable automatically:

- Detects system preferences
- Persists theme choice to localStorage
- Updates the DOM with the `data-theme` attribute

See the [useTheme documentation](/en/composables/use-theme) for complete API details.

### Manual Toggle

You can also manually set the `data-theme` attribute on the root HTML element:

```javascript
// Enable dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Enable light mode
document.documentElement.setAttribute('data-theme', 'light');

// Remove attribute (defaults to light mode)
document.documentElement.removeAttribute('data-theme');
```

### Automatic Initialization

When using the Bamboo plugin, the theme is automatically initialized on app startup:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import Bamboo from '@mrksbnc/bamboo/config';

const app = createApp(App);
app.use(Bamboo); // Theme automatically initialized
app.mount('#app');
```

If you're not using the plugin, manually initialize the theme:

```typescript
import { useTheme } from '@mrksbnc/bamboo/composables';

const { initTheme } = useTheme();
initTheme(); // Detects system preference or loads from localStorage
```

## Component Dark Mode Support

All Bamboo components automatically support dark mode. Here's how different component types handle theming:

### Text Components

```css
:root {
	--bo-text-color-default: var(--neutral-800);
	--bo-text-color-primary: var(--blue-600);
}

:root[data-theme='dark'] {
	--bo-text-color-default: var(--neutral-50);
	--bo-text-color-primary: var(--blue-400);
}
```

### Button Components

```css
:root {
	--variant-primary-bg: var(--blue-600);
	--variant-primary-bg-hover: var(--blue-700);
}

:root[data-theme='dark'] {
	--variant-primary-bg: var(--blue-600);
	--variant-primary-bg-hover: var(--blue-500);
}
```

### Input Components

```css
:root {
	--input-bg: transparent;
	--input-border: var(--neutral-200);
	--input-text: var(--neutral-700);
}

:root[data-theme='dark'] {
	--input-bg: transparent;
	--input-border: var(--neutral-700);
	--input-text: var(--neutral-200);
}
```

### Icon Components

```css
:root {
	--bo-icon-color-primary: var(--blue-600);
	--bo-icon-color-secondary: var(--neutral-600);
}

:root[data-theme='dark'] {
	--bo-icon-color-primary: var(--blue-400);
	--bo-icon-color-secondary: var(--neutral-400);
}
```

## Color Adjustments for Dark Mode

Bamboo uses lighter shades of colors in dark mode to maintain proper contrast:

| Light Mode    | Dark Mode     | Usage                |
| ------------- | ------------- | -------------------- |
| `blue-600`    | `blue-400`    | Primary interactive  |
| `neutral-800` | `neutral-50`  | Default text         |
| `neutral-600` | `neutral-400` | Secondary text       |
| `neutral-400` | `neutral-600` | Disabled text        |
| `green-600`   | `green-400`   | Success states       |
| `yellow-600`  | `yellow-400`  | Warning states       |
| `red-600`     | `red-400`     | Error/danger states  |
| `neutral-100` | `neutral-800` | Background surfaces  |
| `neutral-200` | `neutral-700` | Borders and dividers |

## Accessibility

All dark mode colors are carefully selected to maintain WCAG AA contrast ratios:

- **Text on backgrounds**: Minimum 4.5:1 contrast ratio
- **Interactive elements**: Minimum 3:1 contrast ratio
- **Focus indicators**: Enhanced visibility in both modes

### Focus Ring

The focus ring color is adjusted for better visibility in dark mode:

```css
:root {
	--focus-ring-color: var(--blue-500);
}

:root[data-theme='dark'] {
	--focus-ring-color: var(--blue-400);
}
```

## Custom Component Theming

When creating custom components, follow this pattern:

```vue
<style scoped>
	:root {
		/* Light mode */
		--my-component-bg: var(--white);
		--my-component-text: var(--neutral-800);
		--my-component-border: var(--neutral-200);
	}

	:root[data-theme='dark'] {
		/* Dark mode */
		--my-component-bg: var(--neutral-900);
		--my-component-text: var(--neutral-50);
		--my-component-border: var(--neutral-700);
	}

	.my-component {
		background-color: var(--my-component-bg);
		color: var(--my-component-text);
		border: 1px solid var(--my-component-border);
	}
</style>
```

## Best Practices

### 1. Use Semantic Color Variables

❌ **Don't:**

```css
.element {
	color: var(--blue-600);
}

:root[data-theme='dark'] .element {
	color: var(--blue-400);
}
```

✅ **Do:**

```css
:root {
	--element-color: var(--blue-600);
}

:root[data-theme='dark'] {
	--element-color: var(--blue-400);
}

.element {
	color: var(--element-color);
}
```

### 2. Test Both Modes

Always test your components in both light and dark modes to ensure:

- Proper contrast ratios
- Readable text
- Visible borders and dividers
- Clear focus indicators

### 3. Avoid Hardcoded Colors

❌ **Don't:**

```css
.element {
	background-color: #ffffff;
	color: #000000;
}
```

✅ **Do:**

```css
.element {
	background-color: var(--component-bg);
	color: var(--component-text);
}
```

### 4. Consider Images and Media

For images that don't work well in dark mode, consider:

```css
:root[data-theme='dark'] img {
	opacity: 0.8;
	filter: brightness(0.9);
}
```

Or provide separate images:

```vue
<template>
	<img :src="isDark ? darkLogo : lightLogo" alt="Logo" />
</template>
```

## Complete Theme Toggle Examples

### Simple Toggle Button

```vue
<script setup lang="ts">
	import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';
	import { BoButton } from '@mrksbnc/bamboo/components';

	const { activeTheme, onThemeToggle } = useTheme();
</script>

<template>
	<bo-button @click="onThemeToggle">
		{{ activeTheme === BoTheme.dark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
	</bo-button>
</template>
```

### Theme Selector

```vue
<script setup lang="ts">
	import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';
	import { BoButton } from '@mrksbnc/bamboo/components';

	const { activeTheme, setTheme } = useTheme();
</script>

<template>
	<div class="theme-selector">
		<bo-button
			:variant="activeTheme === BoTheme.light ? 'primary' : 'secondary'"
			@click="setTheme(BoTheme.light)"
		>
			☀️ Light
		</bo-button>
		<bo-button
			:variant="activeTheme === BoTheme.dark ? 'primary' : 'secondary'"
			@click="setTheme(BoTheme.dark)"
		>
			🌙 Dark
		</bo-button>
	</div>
</template>

<style scoped>
	.theme-selector {
		display: flex;
		gap: var(--spacing-2);
	}
</style>
```

## Related Documentation

- [useTheme Composable](/en/composables/use-theme) - Complete API reference
- [Colors](/en/styles/colors) - Color palette and usage
- [Design Tokens](/en/styles/design-tokens) - Token system overview
- [Typography](/en/styles/typography) - Typography system
