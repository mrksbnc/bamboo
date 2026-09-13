<template>
	<div :class="DROPDOWN_MANIFEST.styles.content" role="menu"><slot /></div>
</template>
<script setup lang="ts">
import { DROPDOWN_MANIFEST } from '@workspace/bamboo-core';
</script>
<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dropdown.manifest.css';
</style>
