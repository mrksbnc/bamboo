<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-orientation="direction"
		:role="role"
		:class="[RESIZABLE_MANIFEST.styles.base, RESIZABLE_MANIFEST.styles.direction[direction]]"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { BoResizableProps } from '@workspace/bamboo-core';
import { RESIZABLE_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, provide } from 'vue';
import { resizableDirectionKey } from './keys.js';

const props = withDefaults(defineProps<BoResizableProps>(), {
	id: () => generateComponentId('resizable'),
	dataTestId: () => generateDataTestId('resizable'),
	role: () => RESIZABLE_MANIFEST.defaults.role,
	direction: () => RESIZABLE_MANIFEST.defaults.direction,
});

const direction = computed(() => props.direction || RESIZABLE_MANIFEST.defaults.direction);
provide(resizableDirectionKey, direction);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/resizable.manifest.css';
</style>
