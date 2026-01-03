# Bamboo Vue

Lightweight, and flexible component library for Vue.

## Installation

```bash
# npm
npm install @mrksbnc/bamboo-vue

# pnpm
pnpm add @mrksbnc/bamboo-vue

# yarn
yarn add @mrksbnc/bamboo-vue
```

## Usage

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import "@mrksbnc/bamboo-vue/lib.css";

createApp(App).use(Bamboo).mount("#app");
```

```ts
// Your vue component

<script setup lang="ts">
import { BoButton } from "@mrksbnc/bamboo-vue";
</script>

<template>
  <bo-button>Hello, World!</bo-button>
</template>
```

## License

[MIT](https://github.com/mrksbnc/bamboo/blob/main/LICENSE)
