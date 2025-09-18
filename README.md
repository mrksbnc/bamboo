<!-- cspell:disable -->

<div style="display: flex; align-items: center; justify-content: center; height: 200px;  margin-bottom: 1rem;">
<img src="./public/logo.webp" alt="bamboo">
</div>

# Bamboo

Bamboo is a lightweight and flexible UI library built with Vue.js

## Prerequisites

- [Node.js](https://nodejs.org/en/) >=18.x
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Installation

To install the library, run the following command in your project directory:

### npm

```npm
npm install @mrksbnc/bamboo
```

### pnpm

```pnpm
pnpm install @mrksbnc/bamboo
```

### yarn

```yarn
yarn add @mrksbnc/bamboo
```

## Usage

After installation import the library styles in your `main.ts` or equivalent file:

```ts
import '@mrksbnc/bamboo/lib.css'
```

This will load the required css for the components and also enables the use of css variables from the library like
colors.

Then import the components you want to use in your Vue components:

```vue
<template>
	<bo-text value="Hello World" />
</template>

<script setup lang="ts">
	import { BoText } from '@mrksbnc/bamboo'
</script>
```

## Available Scripts

| Script       | Description                            |
| ------------ | -------------------------------------- |
| build        | Builds the library                     |
| test         | Runs the unit tests                    |
| lint         | Runs all linters                       |
| lint:spell   | Runs the spell checker                 |
| lint:eslint  | Runs linting using eslint              |
| lint:oxlint  | Runs linting using oxlint              |
| format       | Formats the code using prettier        |
| prepare      | Initializes pre-commit hooks           |
| docs:dev     | Starts the live dev server of the docs |
| docs:build   | Builds the docs                        |
| docs:preview | Previews the built docs bundle         |

## Documentation

To access the documentation, visit [mrksbnc.github.io/bamboo](https://mrksbnc.github.io/bamboo) or run the local version
with the following command:

### npm

```bash
npm run docs:dev
```

### pnpm

```bash
pnpm run docs:dev
```

### yarn

```bash
yarn docs:dev
```

This will spin up a local dev server where the documentation can be viewed.

Alternatively, you can build the documentation by running the following command:

::: code-group

```bash [npm]
npm run docs:build
```

```bash [pnpm]
pnpm run docs:build
```

```bash [yarn]
yarn docs:build
```

:::

and view it after running the preview command

::: code-group

```bash [npm]
npm run docs:preview
```

```bash [pnpm]
pnpm run docs:preview
```

```bash [yarn]
yarn docs:preview
```

:::

## License

[MIT](https://github.com/mrksbnc/bamboo/blob/main/LICENSE)
