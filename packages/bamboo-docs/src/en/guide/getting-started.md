---
title: Getting Started
order: 1
description: Install Bamboo, configure Vue, and build a first accessible screen.
---

# Getting Started

## What is Bamboo?

`bamboo` is a collection of precise, type-safe components for modern Vue applications. It is designed to be easy to use while providing a consistent foundation for responsive product interfaces.

The package has two layers:

- `@mrksbnc/bamboo-vue` contains Vue 3 components, composables, and the bundled CSS entry point.
- `@workspace/bamboo-core` contains the public definitions, manifests, utility types, and styling metadata used to build the Vue package.

Application code normally depends only on `@mrksbnc/bamboo-vue`.

## Requirements

- Vue 3.5 or newer.
- Node.js 18 or newer.
- A bundler that supports Vue single-file components and CSS imports, such as Vite.

Use the package manager already used by your application. Do not install `@workspace/bamboo-core` in an application unless you are extending Bamboo itself.

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

### Import components directly (recommended)

```ts [main.ts]
import App from './App.vue';
import { createApp } from 'vue';

import '@mrksbnc/bamboo-vue/lib.css';

const app = createApp(App);

app.mount('#app');
```

After that, you can start using the components in your application.

```vue [App.vue]
<template>
	<bo-text>Hello, World!</bo-text>
</template>

<script setup lang="ts">
import { BoText } from '@mrksbnc/bamboo-vue';
</script>
```

Direct imports keep the component dependency visible and work well with tree-shaking. The CSS import is still global because component manifests share the same Tailwind theme and design tokens.

### Register globally

```ts [main.ts]
import App from './App.vue';
import { BambooVue } from '@mrksbnc/bamboo-vue';
import { createApp } from 'vue';

import '@mrksbnc/bamboo-vue/lib.css';

const app = createApp(App);

app.use(BambooVue);

app.mount('#app');
```

The plugin registers exported `Bo*` components and provides shared toast, drawer, and modal state. It does not add a router, reset application styles, or replace native form behavior.

## A first form

Use real labels, a form element, and an explicit submit action. Bamboo wires field descriptions and errors to the native control when you use the field props.

```vue [ProfileForm.vue]
<template>
	<form class="grid w-full max-w-md gap-4" @submit.prevent="save">
		<bo-input
			v-model="name"
			name="name"
			label="Name"
			placeholder="Ada Lovelace"
			autocomplete="name"
			required
		/>
		<bo-input
			v-model="email"
			name="email"
			type="email"
			label="Email"
			autocomplete="email"
			:error="emailError"
			required
		/>
		<bo-button type="submit" :is-loading="saving">Save profile</bo-button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoInput } from '@mrksbnc/bamboo-vue';

const name = ref('');
const email = ref('');
const emailError = ref('');
const saving = ref(false);

async function save(): Promise<void> {
	emailError.value = email.value.includes('@') ? '' : 'Enter a valid email address.';
	if (emailError.value) return;
	saving.value = true;
	try {
		await Promise.resolve();
	} finally {
		saving.value = false;
	}
}
</script>
```

## Shared notifications

Use `useToast` for notifications created outside the component that displays them. Mount one `bo-toast-viewport` for every position your application uses, usually in the application shell.

```vue [AppShell.vue]
<template>
	<router-view />
	<bo-toast-viewport position="top-right" />
</template>

<script setup lang="ts">
import { BoToastViewport } from '@mrksbnc/bamboo-vue';
</script>
```

```ts
import { useToast } from '@mrksbnc/bamboo-vue';

const { show } = useToast();

show({
	title: 'Saved',
	description: 'Your changes are available to your team.',
	variant: 'success',
});
```

## Dark mode

Bamboo uses the `.dark` class and Tailwind's custom dark variant. Put the class on `html` or an application root that contains the components.

```ts
document.documentElement.classList.toggle('dark', prefersDarkMode);
```

Keep the preference in application state and update it before the first paint when possible to avoid a flash between themes. See [Color and Theming](./color-and-theming) for token overrides.

## Deployment base paths

If the site is deployed below the domain root, configure the bundler's base path and make generated links base-aware. The Bamboo documentation site uses `VP_BASE=/bamboo/` in its GitHub Pages build; application deployments should use their own Vite `base` value.

## Troubleshooting

### Components render without styling

Confirm that `@mrksbnc/bamboo-vue/lib.css` is imported once before mounting the app. Importing a component without the CSS entry point gives you markup and behavior but not the manifest styles.

### A component is not registered

Use a direct import, or install `BambooVue` before mounting the app. The plugin only registers exported components whose names begin with `Bo`.

### IDs differ between server and client

Do not generate IDs during module evaluation. Pass an explicit `id` when content must be referenced across separately rendered trees, and use the component defaults for normal instances. Bamboo's generated IDs use Vue's `useId` when a component instance is active.

### A notification appears twice

Mount only one toast viewport for a given `position`. A shared queue intentionally renders a toast in every matching viewport.

After that, you can start using the components in your application.

```vue [App.vue]
<template>
	<bo-text>Hello, World!</bo-text>
</template>
```

## Repository structure

The repository is organized into the following packages:

- [`bamboo-core`](https://github.com/mrksbnc/bamboo/tree/main/packages/bamboo-core/README.md): Core components, types, and utilities
- [`bamboo-docs`](https://github.com/mrksbnc/bamboo/tree/main/packages/bamboo-docs/README.md): Documentation website
- [`bamboo-vue`](https://github.com/mrksbnc/bamboo/tree/main/packages/bamboo-vue/README.md): Vue components and utilities

## Security

To report a security vulnerability, please create a new issue using the [Security](https://github.com/mrksbnc/bamboo/blob/main/SECURITY.md) file as a template.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/mrksbnc/bamboo/blob/main/CONTRIBUTING.md) for more information.

## License

Bamboo is licensed under the MIT License. See the [LICENSE](https://github.com/mrksbnc/bamboo/blob/main/LICENSE) file for more information.
