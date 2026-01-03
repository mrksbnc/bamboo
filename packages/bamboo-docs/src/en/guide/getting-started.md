---
title: getting started
---

<!-- cspell:disable -->

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en) 18.x or higher
- npm, yarn, or pnpm package manager (`npm` is installed with Node.js out of the box)

## Install Bamboo

::: code-group

```bash [npm]
npm install @mrksbnc/bamboo
```

```bash [yarn]
yarn add @mrksbnc/bamboo
```

```bash [pnpm]
pnpm add @mrksbnc/bamboo
```

:::

## Usage

1. Register the library `css` file in your root entry.

::: code-group

```ts [main.ts]
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// Import the main library CSS file
import '@mrksbnc/bamboo/lib.css';

createApp(App).mount('#app');
```

:::

2. Import the components you want to use.

::: code-group

```ts [App.vue]
<template>
	<bo-text value="Hello Bamboo" />
	<bo-icon :icon="Icon.heart" />
	<bo-icon :icon="Icon.star" custom-color="var(--blue-600)" />
</template>

<script setup lang="ts">
	import { BoText, BoIcon, Icon } from '@mrksbnc/bamboo/components'
</script>
```
