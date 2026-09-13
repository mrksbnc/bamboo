<template>
	<nav :class="SIDEBAR_MANIFEST.styles.menu"><slot /></nav>
</template>

<script setup lang="ts">
import { SIDEBAR_MANIFEST } from '@workspace/bamboo-core';
</script>
