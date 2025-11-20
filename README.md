# Bamboo

Lightweight, flexible, and type‑safe UI components for Vue 3.

## Prerequisites

- Node.js 18+
- npm, pnpm, yarn, or bun

## Install

- npm: `npm install @mrksbnc/bamboo`
- pnpm: `pnpm add @mrksbnc/bamboo`
- yarn: `yarn add @mrksbnc/bamboo`
- bun: `bun add @mrksbnc/bamboo`

## Quick Start

Import the library base css file.

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// Import the main library CSS file
import '@mrksbnc/bamboo/lib.css';

createApp(App).use(Bamboo).mount('#app');
```

Use a component.

```vue
<template>
	<bo-text value="Hello Bamboo" />
	<bo-icon :icon="Icon.heart" />
	<bo-icon :icon="Icon.star" custom-color="var(--blue-600)" />
</template>

<script setup lang="ts">
	import { BoText, Icon, Icon } from '@mrksbnc/bamboo/components';
</script>
```

## Scripts

- build: Builds the library
- test: Runs unit tests (vitest)
- lint: Runs all linters
- lint:spell: Runs the spell checker
- lint:eslint: ESLint
- lint:oxlint: Oxlint
- format: Prettier
- prepare: Initializes pre-commit hooks
- docs:dev: Starts the docs dev server
- docs:build: Builds the docs
- docs:preview: Previews the built docs

## Docs

- Website: https://mrksbnc.github.io/bamboo
- Local dev: `pnpm docs:dev` (or `npm run docs:dev`, `yarn docs:dev`)
- Build/preview: `pnpm docs:build && pnpm docs:preview`

See:

- [Getting started](/src-doc/en/guide/getting-started.md)
- [Component overview](/src-doc/en/components/default.md)

### Services

- [Color service](/src-doc/en/services/color-service.md)
- [Identity service](/src-doc/en/services/identity-service.md)

### Colors and Typography

- [Colors](/src-doc/en/styles/colors.md)
- [Typography](/src-doc/en/styles/typography.md)

Color tokens are located under `src/lib.css` and are available via CSS variables, e.g. `var(--blue-600)`.

## Architecture

Bamboo is organized into modular packages for optimal tree-shaking:

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
│  │         Styles (CSS Cascade Layers)              │    │
│  │                                                  │    │
│  │  tokens → colors → components → utilities       │    │
│  └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Documentation

### Project Documentation

- [Project Structure](./docs/PROJECT_STRUCTURE.md) - Module organization and architecture
- [CSS Layers Architecture](./docs/CSS_LAYERS.md) - CSS cascade layers implementation
- [Testing Approach](./docs/TESTING.md) - Testing strategy and patterns
- [Contributing Guide](./CONTRIBUTING.md) - How to contribute to Bamboo

### Component Documentation

See the [documentation site](https://mrksbnc.github.io/bamboo) for detailed component documentation.

## License

[MIT](https://github.com/mrksbnc/bamboo/blob/main/LICENSE)
