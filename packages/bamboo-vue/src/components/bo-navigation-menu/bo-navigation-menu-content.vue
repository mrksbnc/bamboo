<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="NAVIGATION_MENU_MANIFEST.styles.content"
		role="menu"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { BoNavigationMenuContentProps } from '@workspace/bamboo-core';
import { NAVIGATION_MENU_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoNavigationMenuContentProps>(), {
	id: () => generateComponentId('navigation-content'),
	dataTestId: () => generateDataTestId('navigation-content'),
});
</script>
