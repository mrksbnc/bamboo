<template>
	<button type="button" :class="DROPDOWN_MANIFEST.styles.trigger" @click="context?.toggle()">
		<slot />
	</button>
</template>
<script setup lang="ts">
import { DROPDOWN_MANIFEST } from '@workspace/bamboo-core';
import { inject } from 'vue';
import { dropdownContextKey } from './keys';
const context = inject(dropdownContextKey);
</script>
<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dropdown.manifest.css';
</style>
