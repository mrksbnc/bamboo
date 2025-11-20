---
title: useTheme
description: A Vue composable for managing light and dark theme modes with automatic system preference detection and localStorage persistence.
outline: deep
---

# useTheme

A composable that provides theme management functionality for Bamboo components. It handles theme switching, persistence, and automatic detection of system preferences.

## Import

```typescript
import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';
```

## Basic Usage

```vue
<script setup lang="ts">
	import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';

	const { activeTheme, setTheme, onThemeToggle } = useTheme();
</script>

<template>
	<div>
		<p>Current theme: {{ activeTheme }}</p>
		<button @click="onThemeToggle">Toggle Theme</button>
	</div>
</template>
```

## API

### Return Value

The `useTheme` composable returns an object with the following properties and methods:

#### `activeTheme`

- **Type:** `ShallowRef<BoTheme>`
- **Description:** A reactive reference to the currently active theme

```typescript
const { activeTheme } = useTheme();
console.log(activeTheme.value); // 'light' or 'dark'
```

#### `setTheme(theme: BoTheme)`

- **Type:** `(theme: BoTheme) => void`
- **Description:** Sets the theme to the specified value
- **Parameters:**
  - `theme`: The theme to set (`BoTheme.light` or `BoTheme.dark`)

```typescript
const { setTheme } = useTheme();

// Set to dark mode
setTheme(BoTheme.dark);

// Set to light mode
setTheme(BoTheme.light);
```

#### `onThemeToggle()`

- **Type:** `() => void`
- **Description:** Toggles between light and dark themes

```typescript
const { onThemeToggle } = useTheme();

// Toggle theme
onThemeToggle();
```

#### `initTheme()`

- **Type:** `() => void`
- **Description:** Initializes the theme based on localStorage or system preference

```typescript
const { initTheme } = useTheme();

// Initialize theme (usually called on app mount)
initTheme();
```

## BoTheme Enum

```typescript
enum BoTheme {
	light = 'light',
	dark = 'dark',
}
```

## Examples

### Simple Theme Toggle Button

```vue
<script setup lang="ts">
	import { useTheme } from '@mrksbnc/bamboo/composables';
	import { BoButton } from '@mrksbnc/bamboo/components';

	const { activeTheme, onThemeToggle } = useTheme();
</script>

<template>
	<bo-button @click="onThemeToggle">
		{{ activeTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode' }}
	</bo-button>
</template>
```

### Theme Selector with Radio Buttons

```vue
<script setup lang="ts">
	import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';

	const { activeTheme, setTheme } = useTheme();
</script>

<template>
	<div class="theme-selector">
		<label>
			<input
				type="radio"
				:checked="activeTheme === BoTheme.light"
				@change="setTheme(BoTheme.light)"
			/>
			Light
		</label>
		<label>
			<input
				type="radio"
				:checked="activeTheme === BoTheme.dark"
				@change="setTheme(BoTheme.dark)"
			/>
			Dark
		</label>
	</div>
</template>
```

### Initialize Theme on App Mount

```vue
<script setup lang="ts">
	import { onMounted } from 'vue';
	import { useTheme } from '@mrksbnc/bamboo/composables';

	const { initTheme } = useTheme();

	onMounted(() => {
		// Initialize theme based on localStorage or system preference
		initTheme();
	});
</script>

<template>
	<div id="app">
		<!-- Your app content -->
	</div>
</template>
```

### Watch Theme Changes

```vue
<script setup lang="ts">
	import { watch } from 'vue';
	import { useTheme } from '@mrksbnc/bamboo/composables';

	const { activeTheme } = useTheme();

	watch(activeTheme, (newTheme) => {
		console.log(`Theme changed to: ${newTheme}`);
		// Perform additional actions when theme changes
	});
</script>
```

### Conditional Rendering Based on Theme

```vue
<script setup lang="ts">
	import { computed } from 'vue';
	import { useTheme, BoTheme } from '@mrksbnc/bamboo/composables';

	const { activeTheme } = useTheme();
	const isDark = computed(() => activeTheme.value === BoTheme.dark);
</script>

<template>
	<div>
		<img v-if="isDark" src="/logo-dark.svg" alt="Logo" />
		<img v-else src="/logo-light.svg" alt="Logo" />
	</div>
</template>
```

## How It Works

### Initialization

When `initTheme()` is called, the composable:

1. Checks localStorage for a saved theme preference
2. If found, applies the saved theme
3. If not found, detects the system preference using `prefers-color-scheme`
4. Applies the detected or default theme

### Theme Persistence

When a theme is set using `setTheme()` or `onThemeToggle()`:

1. The theme value is stored in localStorage under the key `'data-theme'`
2. The `data-theme` attribute is set on `document.documentElement`
3. The `activeTheme` ref is updated

### DOM Updates

The composable sets the `data-theme` attribute on the root HTML element:

```html
<html data-theme="dark">
	<!-- Your app -->
</html>
```

This allows CSS to apply theme-specific styles:

```css
:root[data-theme='dark'] {
	--bg-color: var(--neutral-900);
	--text-color: var(--neutral-50);
}
```

## Plugin Integration

The Bamboo plugin automatically initializes the theme when installed:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import Bamboo from '@mrksbnc/bamboo/config';

const app = createApp(App);
app.use(Bamboo); // Theme is automatically initialized
app.mount('#app');
```

If you're not using the plugin, you need to manually initialize the theme:

```typescript
import { createApp } from 'vue';
import { useTheme } from '@mrksbnc/bamboo/composables';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

// Initialize theme after mounting
const { initTheme } = useTheme();
initTheme();
```

## TypeScript Support

The composable is fully typed:

```typescript
interface UseTheme {
	activeTheme: ShallowRef<BoTheme>;
	setTheme(theme: BoTheme): void;
	onThemeToggle(): void;
	initTheme(): void;
}
```

## Best Practices

### 1. Initialize Once

Call `initTheme()` only once when your app starts. The Bamboo plugin handles this automatically.

```typescript
// ❌ Don't call multiple times
onMounted(() => initTheme());
onBeforeMount(() => initTheme());

// ✅ Let the plugin handle it, or call once
const { initTheme } = useTheme();
initTheme();
```

### 2. Use the Enum

Always use the `BoTheme` enum instead of string literals:

```typescript
// ❌ Don't use strings
setTheme('dark');

// ✅ Use the enum
setTheme(BoTheme.dark);
```

### 3. Avoid Redundant Sets

The composable automatically prevents redundant updates:

```typescript
const { setTheme } = useTheme();
setTheme(BoTheme.dark);
setTheme(BoTheme.dark); // No-op, theme is already dark
```

## Related Documentation

- [Dark Mode](/en/styles/dark-mode) - Complete dark mode guide
- [Design Tokens](/en/styles/design-tokens) - Token system overview
- [Colors](/en/styles/colors) - Color palette and usage
