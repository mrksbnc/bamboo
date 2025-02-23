# Getting Started

## Installation

### Prerequisites

You need to have `node` and `npm` installed on your machine as a prerequisite. You can download and install them from [here](https://nodejs.org/en/).

### Install the library

1. To install the library, run the following command

::: code-group

```sh [npm]
$ npm i @mrksbnc/bamboo
```

```sh [yarn]
$ yarn i @mrksbnc/bamboo
```

```sh [pnpm]
$ pnpm i @mrksbnc/bamboo
```

:::

2. Import the bamboo library styles

```js
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';

import '@mrksbnc/bamboo/lib.css';

createApp(App).mount('#app');
```

3. Start using the components in your files.

```js
// your-component.vue

<template>
	<bo-button label="Button" />
</template>

<script setup lang="ts">
import { BoButton } from '@mrksbnc/bamboo';
</script>
```
