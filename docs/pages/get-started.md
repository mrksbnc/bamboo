# Getting Started

## Prerequisites

- Node.js 16.x or higher
- npm, yarn, or pnpm package manager

## Installation

### 1. Add to project

::: code-group

```sh [npm]
npm install @mrksbnc/bamboo
```

```sh [yarn]
yarn add @mrksbnc/bamboo
```

```sh [pnpm]
pnpm add @mrksbnc/bamboo
```

:::

### 2. Import styles

::: code-group

```js [main.js]
import { createApp } from 'vue';
import App from './App.vue';

import '@mrksbnc/bamboo/lib.css';

createApp(App).mount('#app');
```

```js [main.ts]
import { createApp } from 'vue';
import App from './App.vue';

import '@mrksbnc/bamboo/lib.css';

createApp(App).mount('#app');
```

:::

### 3. Use components

```vue
<template>
	<div>
		<bo-button label="Primary Button" />
		<bo-button
			label="Secondary Button"
			variant="secondary"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoButton } from '@mrksbnc/bamboo';
</script>
```

## Component Registration

### Local Registration (Recommended)

Import components as needed in your Vue files:

```js
import { BoButton, BoInput } from '@mrksbnc/bamboo';
```

### Global Registration

Register components for use throughout your application:

```js
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { BoButton, BoInput, BoCard } from '@mrksbnc/bamboo';

import '@mrksbnc/bamboo/lib.css';

const app = createApp(App);

app.component('BoButton', BoButton);
app.component('BoInput', BoInput);
app.component('BoCard', BoCard);

app.mount('#app');
```

### Vite

Bamboo works seamlessly with Vite projects. Follow the standard installation steps above.

## TypeScript Support

Bamboo includes comprehensive TypeScript definitions. Type hints and autocompletion work automatically in supported editors.

## Customization

Bamboo components can be customized through props or classes. Refer to the individual component documentation for available options.
