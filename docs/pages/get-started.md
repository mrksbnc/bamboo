# Getting Started

## Installation

### Prerequisites

You need to have `node` and `npm` installed on your machine as a prerequisite. You can download and install them from [here](https://nodejs.org/en/).

### Install the library

1. To install the library, run the following command

::: code-group

```sh [npm]
$ npm add @mrksbnc/bamboo
```

```sh [yarn]
$ yarn add @mrksbnc/bamboo
```

```sh [pnpm]
$ pnpm add @mrksbnc/bamboo
```

:::

2. Import the bamboo library styles

```js
// main.js or main.ts

import '@mrksbnc/bamboo/lib.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

or in your `main.css` file

```css
@import '@mrksbnc/bamboo/lib.css';
```

3. Start using the components in your files.

```vue
// your-component.vue

<template>
  <bo-button label="Button" />
</template>

<script setup lang="ts">
import { BoButton } from '@mrksbnc/bamboo'
</script>
```
