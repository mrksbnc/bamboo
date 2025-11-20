# Project Structure

This document explains the architecture and organization of the Bamboo component library.

## Overview

Bamboo is a Vue 3 component library built with TypeScript, providing a modular architecture that allows developers to import only what they need. The library is organized into distinct modules with clear responsibilities.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Bamboo Library                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Components  │  │  Composables │  │   Services   │    │
│  │              │  │              │  │              │    │
│  │  BoButton    │  │  useTheme    │  │  ColorSvc    │    │
│  │  BoInput     │  │              │  │  IdentitySvc │    │
│  │  BoIcon      │  │              │  │  TooltipSvc  │    │
│  │  ...         │  │              │  │              │    │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘    │
│         │                 │                 │             │
│         └─────────────────┼─────────────────┘             │
│                           │                               │
│                    ┌──────▼───────┐                       │
│                    │    Shared    │                       │
│                    │              │                       │
│                    │  Types       │                       │
│                    │  Utilities   │                       │
│                    │  Constants   │                       │
│                    └──────────────┘                       │
│                                                            │
│  ┌──────────────────────────────────────────────────┐    │
│  │              Styles (CSS Layers)                 │    │
│  │                                                  │    │
│  │  tokens → colors → components → utilities       │    │
│  └──────────────────────────────────────────────────┘    │
│                                                            │
│  ┌──────────────┐                                         │
│  │   Plugins    │                                         │
│  │              │                                         │
│  │  Bamboo      │  (Global registration + theme init)    │
│  │  Provider    │  (Global registration only)            │
│  └──────────────┘                                         │
└─────────────────────────────────────────────────────────────┘
```

## Directory Structure

```
src/
├── components/          # Vue components
│   ├── bo-button/
│   │   ├── bo-button.vue
│   │   ├── bo-button.test.ts
│   │   └── types.ts
│   ├── bo-input/
│   ├── ...
│   └── index.ts        # Component exports
│
├── composables/        # Vue composables
│   ├── useTheme.ts
│   ├── useTheme.test.ts
│   └── index.ts
│
├── plugins/            # Vue plugins
│   ├── bamboo-plugin.ts    # Full plugin with theme
│   ├── provider.ts         # Lightweight provider
│   └── index.ts
│
├── services/           # Utility services
│   ├── color-service.ts
│   ├── identity-service.ts
│   ├── tooltip-service.ts
│   └── index.ts
│
├── shared/             # Shared utilities and types
│   ├── accessibility.ts
│   ├── css.ts
│   ├── size.ts
│   ├── variant.ts
│   └── index.ts
│
├── styles/             # Global CSS
│   ├── tokens.css      # Design tokens
│   ├── colors.css      # Color system
│   └── components.css  # Component base styles
│
└── lib.css             # Main CSS entry point
```

## Module Organization

### Components (`src/components/`)

Each component is self-contained in its own directory:

- **Component file** (`.vue`): The Vue single-file component
- **Test file** (`.test.ts`): Vitest unit tests
- **Types file** (`.ts`, optional): TypeScript interfaces and types specific to the component

**Naming Convention:**

- Components use the `Bo` prefix (e.g., `BoButton`, `BoInput`)
- Files use kebab-case (e.g., `bo-button.vue`)
- Component directories match the component name

**Component Structure:**

```vue
<script setup lang="ts">
	// 1. Imports
	// 2. Props interface
	// 3. Props definition with defaults
	// 4. Emits definition
	// 5. Computed properties and methods
</script>

<template>
	<!-- Component template -->
</template>

<style scoped>
	/* Component-specific styles */
</style>
```

**Export Pattern:**
All components are exported from `src/components/index.ts` for centralized access:

```typescript
export { default as BoButton } from './bo-button/bo-button.vue';
export { default as BoInput } from './bo-input/bo-input.vue';
// ...
```

### Composables (`src/composables/`)

Vue composables provide reusable stateful logic:

- **`useTheme`**: Theme management (light/dark mode, system preference)

**Composable Pattern:**

```typescript
export function useComposable() {
	// Reactive state
	const state = ref();

	// Computed properties
	const computed = computed(() => {});

	// Methods
	const method = () => {};

	// Return public API
	return {
		state,
		computed,
		method,
	};
}
```

### Services (`src/services/`)

Services provide utility functions without Vue dependencies:

- **ColorService**: Color manipulation and CSS variable handling
- **IdentityService**: Unique ID generation for components
- **TooltipService**: Tooltip positioning and lifecycle management

**Service Pattern:**

```typescript
export const ServiceName = {
	method1(params): ReturnType {
		// Implementation
	},

	method2(params): ReturnType {
		// Implementation
	},
};
```

Services are stateless and can be used in both Vue and non-Vue contexts.

### Shared (`src/shared/`)

Shared utilities and constants used across the library:

- **accessibility.ts**: ARIA utilities and accessibility helpers
- **css.ts**: CSS class manipulation utilities
- **size.ts**: Size enums and utilities (`BoSize`)
- **variant.ts**: Variant enums and utilities (`BoVariant`)
- **local-storage.ts**: Type-safe localStorage wrapper

**Shared Module Benefits:**

- Single source of truth for common types
- Prevents circular dependencies
- Reduces code duplication
- Improves tree-shaking

### Plugins (`src/plugins/`)

Vue plugins for library installation:

1. **BambooPlugin** (`bamboo-plugin.ts`):
   - Registers all components globally
   - Initializes theme system
   - Recommended for most applications

2. **BambooProvider** (`provider.ts`):
   - Registers all components globally
   - No theme initialization
   - Lightweight alternative

**Usage:**

```typescript
// Full plugin
import { createApp } from 'vue';
import { BambooPlugin } from '@mrksbnc/bamboo/plugins';
import '@mrksbnc/bamboo/lib.css';

createApp(App).use(BambooPlugin).mount('#app');

// Or lightweight provider
import { BambooProvider } from '@mrksbnc/bamboo/plugins';
createApp(App).use(BambooProvider).mount('#app');
```

### Styles (`src/styles/`)

CSS organized using cascade layers (see [CSS_LAYERS.md](./CSS_LAYERS.md)):

- **tokens.css**: Design tokens (spacing, typography, shadows)
- **colors.css**: Color system with light/dark theme support
- **components.css**: Base component styles

**CSS Architecture:**

```css
@layer tokens, colors, components, utilities;

/* tokens.css */
@layer tokens {
	:root {
		--spacing-1: 0.25rem;
		--font-size-base: 1rem;
	}
}

/* colors.css */
@layer colors {
	:root {
		--blue-600: #2563eb;
	}
	[data-theme='dark'] {
		--blue-600: #3b82f6;
	}
}

/* components.css */
@layer components {
	.bo-button {
		/* Component styles */
	}
}
```

## Build Output

The library is built using Vite/Rolldown with the following structure:

```
dist/
├── components.js       # All components
├── components.d.ts     # Component types
├── composables.js      # All composables
├── composables.d.ts    # Composable types
├── plugins.js          # Vue plugins
├── plugins.d.ts        # Plugin types
├── services.js         # Utility services
├── services.d.ts       # Service types
├── shared.js           # Shared utilities
├── shared.d.ts         # Shared types
└── lib.css             # Bundled CSS
```

**Import Paths:**

```typescript
// Components
import { BoButton, BoInput } from '@mrksbnc/bamboo/components';

// Composables
import { useTheme } from '@mrksbnc/bamboo/composables';

// Plugins
import { BambooPlugin } from '@mrksbnc/bamboo/plugins';

// Services
import { ColorService } from '@mrksbnc/bamboo/services';

// Shared
import { BoSize, BoVariant } from '@mrksbnc/bamboo/shared';

// CSS
import '@mrksbnc/bamboo/lib.css';
```

## Design Principles

### 1. Modularity

Each module can be imported independently, allowing tree-shaking and smaller bundle sizes.

### 2. Type Safety

Full TypeScript support with exported types for all public APIs.

### 3. Separation of Concerns

- Components handle UI and user interaction
- Composables manage stateful logic
- Services provide pure utility functions
- Shared contains common types and constants

### 4. Testability

Each module is independently testable with co-located test files.

### 5. Accessibility First

Accessibility utilities and patterns are built into the shared module and used consistently across components.

### 6. Theme Support

The theme system is integrated at the plugin level and uses CSS custom properties for runtime theme switching.

## Dependency Graph

```
Components
    ↓
Composables ← Services
    ↓           ↓
    Shared ←────┘
```

- Components can use composables, services, and shared utilities
- Composables can use services and shared utilities
- Services can use shared utilities
- Shared has no internal dependencies

This hierarchy prevents circular dependencies and maintains a clean architecture.

## Adding New Modules

When adding new functionality, consider:

1. **Component**: If it renders UI and accepts props
2. **Composable**: If it manages stateful Vue logic
3. **Service**: If it's a pure utility function
4. **Shared**: If it's used across multiple modules

Follow the existing patterns and update the appropriate `index.ts` file for exports.
