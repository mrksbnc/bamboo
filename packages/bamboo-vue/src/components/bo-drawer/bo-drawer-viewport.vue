<template>
	<BoDrawer
		v-for="drawer in drawers"
		:key="drawer.id"
		:id="drawer.id"
		:data-testid="drawer.id"
		:open="true"
		v-bind="drawer.props"
		@close="dismiss(drawer.id)"
	>
		<component :is="drawer.content" v-if="drawer.content" v-bind="drawer.contentProps" />
	</BoDrawer>
</template>

<script setup lang="ts">
import { useDrawer } from '../../composables/use-drawer.js';
import BoDrawer from './bo-drawer.vue';

const { drawers, dismiss } = useDrawer();
</script>
