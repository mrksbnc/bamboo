---
title: Radio
description: A radio button component for selecting a single option from a group.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoRadio, BoRadioGroup } from '@/components/bo-radio';

const selected = ref('option1');
const selectedOption = ref('option1');
const options = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];
</script>

# Radio

A radio button component for selecting a single option from a group.

## Basic Usage

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoRadio } from '@/components';

	const selected = ref('option1');
</script>

<template>
	<BoRadio v-model="selected" value="option1" label="Option 1" />
	<BoRadio v-model="selected" value="option2" label="Option 2" />
</template>
```

<div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
	<BoRadio v-model="selected" value="option1" label="Option 1" />
	<BoRadio v-model="selected" value="option2" label="Option 2" />
	<BoRadio v-model="selected" value="option3" label="Option 3" />
</div>

## Radio Group

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoRadioGroup } from '@/components';

	const selectedOption = ref('option1');
	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	];
</script>

<template>
	<BoRadioGroup v-model="selectedOption" :options="options" />
</template>
```

<div style="margin-top: 1rem;">
	<BoRadioGroup v-model="selectedOption" :options="options" />
</div>
