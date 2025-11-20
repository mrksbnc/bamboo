---
title: Search Input
description: A search input component with a search icon prefix and optional action button.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoSearchInput } from '@/components/bo-search-input';

const searchQuery = ref('');

function handleSearch(value: string) {
	console.log('Searching for:', value);
}

function handleSubmit(value: string) {
	console.log('Submitted search:', value);
}
</script>

# Search Input

A search input component with a search icon prefix and optional action button, built on top of the `bo-input` component.

## Basic Usage

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoSearchInput } from '@/components';

	const searchQuery = ref('');

	function handleSearch(value: string) {
		console.log('Searching for:', value);
	}
</script>

<template>
	<BoSearchInput v-model="searchQuery" placeholder="Search products..." @search="handleSearch" />
</template>
```

<div style="margin-top: 1rem;">
	<BoSearchInput v-model="searchQuery" placeholder="Search products..." @search="handleSearch" />
</div>

## With Action Button

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoSearchInput } from '@/components';

	const searchQuery = ref('');

	function handleSubmit(value: string) {
		console.log('Submitted search:', value);
		// Perform search action
	}
</script>

<template>
	<BoSearchInput
		v-model="searchQuery"
		placeholder="Search Mockups, Logos..."
		action-text="Search"
		@submit="handleSubmit"
	/>
</template>
```

<div style="margin-top: 1rem;">
	<BoSearchInput
		v-model="searchQuery"
		placeholder="Search Mockups, Logos..."
		action-text="Search"
		@submit="handleSubmit"
	/>
</div>

## Sizes

```vue
<script setup lang="ts">
	import { BoSearchInput } from '@/components';
</script>

<template>
	<div style="display: flex; flex-direction: column; gap: 1rem;">
		<BoSearchInput size="sm" placeholder="Small search" />
		<BoSearchInput size="md" placeholder="Medium search (default)" />
		<BoSearchInput size="lg" placeholder="Large search" />
	</div>
</template>
```

<div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
	<BoSearchInput size="sm" placeholder="Small search" />
	<BoSearchInput size="md" placeholder="Medium search (default)" />
	<BoSearchInput size="lg" placeholder="Large search" />
</div>

## Real-time Search

The component emits a `search` event whenever the input value changes, making it easy to implement real-time search:

```vue
<script setup lang="ts">
	import { ref, watch } from 'vue';
	import { BoSearchInput } from '@/components';

	const searchQuery = ref('');
	const results = ref([]);

	// Real-time search as user types
	function handleSearch(value: string) {
		if (value.length >= 3) {
			// Perform search API call
			fetchResults(value);
		}
	}

	async function fetchResults(query: string) {
		// Your search logic here
		results.value = await api.search(query);
	}
</script>

<template>
	<div>
		<BoSearchInput v-model="searchQuery" placeholder="Type to search..." @search="handleSearch" />

		<div v-if="results.length">
			<!-- Display results -->
		</div>
	</div>
</template>
```

## Disabled State

```vue
<template>
	<BoSearchInput placeholder="Search disabled" :disabled="true" />
</template>
```

## Props

| Prop             | Type          | Default          | Description                           |
| ---------------- | ------------- | ---------------- | ------------------------------------- |
| `modelValue`     | `string`      | `''`             | The search input value (v-model)      |
| `placeholder`    | `string`      | `'Search...'`    | Placeholder text                      |
| `size`           | `BoInputSize` | `BoInputSize.md` | Size of the input (sm, md, lg)        |
| `disabled`       | `boolean`     | `false`          | Whether the input is disabled         |
| `actionText`     | `string`      | `'Search'`       | Text for the action button            |
| `actionDisabled` | `boolean`     | `false`          | Whether the action button is disabled |
| `customCssClass` | `string`      | `undefined`      | Custom CSS class for the form wrapper |

## Events

| Event               | Payload  | Description                                                    |
| ------------------- | -------- | -------------------------------------------------------------- |
| `search`            | `string` | Emitted when the input value changes (real-time)               |
| `submit`            | `string` | Emitted when the form is submitted or action button is clicked |
| `update:modelValue` | `string` | Emitted for v-model binding                                    |

## Features

- **Search Icon**: Automatically includes a search icon prefix
- **Action Button**: Optional action button inside the input
- **Real-time Search**: Emits events on every input change
- **Form Submission**: Handles Enter key and button clicks
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Built with proper ARIA attributes
- **Theme Support**: Works with light and dark themes

## Styling

The component uses the same styling system as `bo-input` and inherits all its CSS variables and theme support.

## Accessibility

The search input component is built with accessibility in mind:

- Proper `type="search"` attribute
- ARIA labels inherited from `bo-input`
- Keyboard navigation support (Enter to submit)
- Focus management
