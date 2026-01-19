# Getting Started

## Installation

`bamboo` is distributed via [npm](https://www.npmjs.com/package/@mrksbnc/bamboo-vue) and can be installed using the following command:

### Vue.js

::: code-group

```npm
npm install @mrksbnc/bamboo-vue
```

```yarn
yarn add @mrksbnc/bamboo-vue
```

```pnpm
pnpm add @mrksbnc/bamboo-vue
```

:::

## Usage

Once the package is installed, you need to import the component styles in your application entry point.

### Individual Component Import (Recommended)

```ts[main.ts]
import App from './App.vue';
import { createApp } from 'vue';

<!-- Import the component styles -->
import '@mrksbnc/bamboo-vue/lib.css';

const app = createApp(App);

app.mount('#app');
```

After that, you can start using the components in your application.

```vue[App.vue]
<template>
    <bo-text value="Hello, World!" />
</template>

<script setup lang="ts">
import { BoText } from '@mrksbnc/bamboo-vue';
</script>
```

### Register Globally

```ts[main.ts]
import App from './App.vue';
import { createApp } from 'vue';

<!-- Import the component styles -->
import '@mrksbnc/bamboo-vue/lib.css';

const app = createApp(App);
app.use(BambooVue);

app.mount('#app');
```

After that, you can start using the components in your application.

```vue[App.vue]
<template>
    <bo-text value="Hello, World!" />
</template>
```
