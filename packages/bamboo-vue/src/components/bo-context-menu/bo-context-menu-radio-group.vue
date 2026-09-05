<template>
	<div role="group"><slot /></div>
</template>

<script setup lang="ts">
import type { BoContextMenuRadioGroupProps } from '@workspace/bamboo-core';
import { provide } from 'vue';
import { contextMenuRadioValueKey } from './keys';

defineProps<BoContextMenuRadioGroupProps>();
const value = defineModel<string | number>('value');
provide(contextMenuRadioValueKey, value);
</script>
