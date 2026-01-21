# Getting Started

## What is Bamboo?

`bamboo` is a collection of lightweight and flexible components for Vue 3 and Svelte. It is designed to be easy to use and type-safe, providing a solid foundation for building modern, responsive web applications.

## Installation

::: code-group

```bash [npm]
npm install @mrksbnc/bamboo-vue
```

```bash [yarn]
yarn add @mrksbnc/bamboo-vue
```

```bash [pnpm]
pnpm add @mrksbnc/bamboo-vue
```

:::

## Usage

Once the package is installed, you need to import the component styles in your application entry point.

### Individual Component Import (Recommended)

```ts [main.ts]
import App from './App.vue';
import { createApp } from 'vue';

<!-- Import the component styles -->
import '@mrksbnc/bamboo-vue/lib.css';

const app = createApp(App);

app.mount('#app');
```

After that, you can start using the components in your application.

```vue [App.vue]
<template>
	<bo-text value="Hello, World!" />
</template>

<script setup lang="ts">
	import { BoText } from '@mrksbnc/bamboo-vue';
</script>
```

### Register Globally

```ts [main.ts]
import App from './App.vue';
import { createApp } from 'vue';

// Import the component styles
import '@mrksbnc/bamboo-vue/lib.css';

const app = createApp(App);

// Register the BambooVue plugin
app.use(BambooVue);

app.mount('#app');
```

After that, you can start using the components in your application.

```vue [App.vue]
<template>
	<bo-text value="Hello, World!" />
</template>
```

## Repository structure

The repository is organized into the following packages:

- [`bamboo-core`](https://github.com/mrksbnc/bamboo/tree/main/packages/bamboo-core/README.md): Core components, types, and utilities
- [`bamboo-docs`](https://github.com/mrksbnc/bamboo/tree/main/packages/bamboo-docs/README.md): Documentation website
- [`bamboo-vue`](https://github.com/mrksbnc/bamboo/tree/main/packages/bamboo-vue/README.md): Vue 3 components and utilities

## Security

To report a security vulnerability, please create a new issue using the [Security](https://github.com/mrksbnc/bamboo/blob/main/SECURITY.md) file as a template.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/mrksbnc/bamboo/blob/main/CONTRIBUTING.md) for more information.

## License

Bamboo is licensed under the MIT License. See the [LICENSE](https://github.com/mrksbnc/bamboo/blob/main/LICENSE) file for more information.
