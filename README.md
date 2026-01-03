# Bamboo

Lightweight, flexible, and type‑safe UI components for Vue 3.

## Prerequisites

- Node.js 18+
- npm, pnpm or yarn

## Install

- npm: `npm install @mrksbnc/bamboo`
- pnpm: `pnpm add @mrksbnc/bamboo`
- yarn: `yarn add @mrksbnc/bamboo`

## Project Structure

Bamboo is organized as a modular component library where each component is a self-contained module.

```
bamboo/
├── src/
│   ├── components/          # UI Components (each component is a module)
│   │   ├── bo-text/
│   │   │   ├── bo-text.vue       # Component template
│   │   │   ├── bo-text.ts        # Types, interfaces, constants and logic
│   │   │   ├── bo-text.test.ts   # Unit tests
│   │   │   └── index.ts          # Module exports
│   │   ├── bo-button/
│   │   ├── bo-icon/
│   │   ├── bo-loading-ring/
│   │   ├── bo-loading-spinner/
│   │   └── index.ts              # Component barrel exports
│   │
│   ├── core/                # Core types and utilities
│   │   ├── accessibility.ts      # Accessibility utilities (AriaLive)
│   │   ├── css.ts                # CSS types (ConditionalCssProperties, BoColor)
│   │   ├── loader.ts             # Loader types
│   │   ├── size.ts               # Size types
│   │   ├── variant.ts            # Variant types
│   │   └── index.ts
│   │
│   ├── services/            # Business logic services
│   │   ├── color-service.ts      # Color manipulation utilities
│   │   ├── identity-service.ts   # Unique ID generation
│   │   ├── theme-service.ts      # Theme management
│   │   └── index.ts
│   │
│   ├── styles/              # Global styles
│   │   ├── colors.css
│   │   ├── components.css
│   │   └── tokens.css
│   │
│   ├── assets/              # Static assets (icons, images)
│   │
│   └── lib.css              # Global styles and CSS variables
│
├── src-docs/                # VitePress documentation
│   ├── en/
│   │   ├── components/           # Component documentation
│   │   ├── guide/                # User guides
│   │   ├── services/             # Service documentation
│   │   └── styles/               # Style documentation
│   └── public/
│
└── dist/                    # Build output (generated)
    ├── components.js
    ├── core.js
    ├── services.js
    └── lib.css
```

### Module Exports

Each top-level directory is exported as a separate module:

```ts
import "@mrksbnc/bamboo/lib.css";
import { BoText, BoIcon } from "@mrksbnc/bamboo/components";
import { ConditionalCssProperties, AriaLive } from "@mrksbnc/bamboo/core";
import { ColorService } from "@mrksbnc/bamboo/services";
```

## Quick Start

Import the library base css file.

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

// Import the main library CSS file
import "@mrksbnc/bamboo/lib.css";

createApp(App).use(Bamboo).mount("#app");
```

Use a component.

```vue
<template>
  <bo-text value="Hello Bamboo" />
  <bo-icon :icon="Icon.heart" />
  <bo-icon :icon="Icon.star" custom-color="var(--blue-600)" />
</template>

<script setup lang="ts">
import { BoText, BoIcon, Icon } from "@mrksbnc/bamboo/components";
</script>
```

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `pnpm build`        | Builds the library           |
| `pnpm test`         | Runs unit tests (vitest)     |
| `pnpm lint`         | Runs all linters             |
| `pnpm lint:spell`   | Runs the spell checker       |
| `pnpm lint:eslint`  | ESLint                       |
| `pnpm lint:oxlint`  | Oxlint                       |
| `pnpm format`       | Prettier                     |
| `pnpm prepare`      | Initializes pre-commit hooks |
| `pnpm docs:dev`     | Starts the docs dev server   |
| `pnpm docs:build`   | Builds the docs              |
| `pnpm docs:preview` | Previews the built docs      |

## Docs

- Website: https://mrksbnc.github.io/bamboo
- Local dev: `pnpm docs:dev` (or `npm run docs:dev`, `yarn docs:dev`)
- Build/preview: `pnpm docs:build && pnpm docs:preview`

See:

- [Getting started](/src-docs/en/guide/getting-started.md)
- [Component overview](/src-docs/en/components/default.md)

### Services

- [Color service](/src-docs/en/services/color-service.md)
- [Identity service](/src-docs/en/services/identity-service.md)
- [Theme service](/src-docs/en/services/theme-service.md)

### Styles

- [Colors](/src-docs/en/styles/colors.md)
- [Typography](/src-docs/en/styles/typography.md)
- [Design Tokens](/src-docs/en/styles/tokens.md)

Color tokens are located under `src/lib.css` and are available via CSS variables, e.g. `var(--blue-600)`.

## License

[MIT](https://github.com/mrksbnc/bamboo/blob/main/LICENSE)
