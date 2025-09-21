<!-- cspell:disable -->

<div style="display: flex; align-items: center; justify-content: center; height: 200px;  margin-bottom: 1rem;">
<img src="./public/logo.webp" alt="bamboo">
</div>

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
import { createApp } from 'vue'
import App from './App.vue'

// Import the main library CSS file
import '@mrksbnc/bamboo/style.css'

createApp(App).use(Bamboo).mount('#app')
```

Use a component.

```vue
<template>
	<bo-text value="Hello Bamboo" />
	<bo-icon :icon="Icon.heart" />
	<bo-icon :icon="Icon.star" custom-color="var(--blue-600)" />
</template>

<script setup lang="ts">
	import { BoIcon, Icon } from '@mrksbnc/bamboo'
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

- Components: `docs/en/components`
- Styles: `docs/en/styles/colors.md`, `docs/en/styles/typography.md`

Tip: Color tokens live in `src/lib.css` and are available via CSS variables, e.g. `var(--blue-600)`.

## License

[MIT](https://github.com/mrksbnc/bamboo/blob/main/LICENSE)
