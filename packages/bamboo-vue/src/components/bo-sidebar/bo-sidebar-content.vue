<template>
	<div :class="SIDEBAR_MANIFEST.styles.content"><slot /></div>
</template>

<script setup lang="ts">
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
</script>
