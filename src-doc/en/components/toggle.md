---
title: Toggle
description: A toggle switch component for binary on/off states.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoToggle } from '@/components/bo-toggle';
import { BoSize } from '@/shared/size';

const enabled = ref(false);
</script>

# Toggle

A toggle switch component for binary on/off states.

## Basic Usage

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoToggle } from '@/components';

	const enabled = ref(false);
</script>

<template>
	<BoToggle v-model="enabled" label="Enable notifications" />
</template>
```

<div style="margin-top: 1rem;">
	<BoToggle v-model="enabled" label="Enable notifications" />
</div>

## Sizes

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoToggle, BoSize } from '@/components';

	const enabled = ref(false);
</script>

<template>
	<BoToggle v-model="enabled" :size="BoSize.sm" label="Small" />
	<BoToggle v-model="enabled" :size="BoSize.md" label="Medium" />
	<BoToggle v-model="enabled" :size="BoSize.lg" label="Large" />
</template>
```

<div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
	<BoToggle v-model="enabled" :size="BoSize.sm" label="Small" />
	<BoToggle v-model="enabled" :size="BoSize.md" label="Medium" />
	<BoToggle v-model="enabled" :size="BoSize.lg" label="Large" />
</div>
