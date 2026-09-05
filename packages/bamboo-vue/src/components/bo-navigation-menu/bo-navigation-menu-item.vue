<template>
	<li :id="id" :data-testid="dataTestId" :class="NAVIGATION_MENU_MANIFEST.styles.item">
		<a
			v-if="href"
			:href="href"
			:aria-current="active ? 'page' : undefined"
			:data-active="active ? 'true' : undefined"
			:class="NAVIGATION_MENU_MANIFEST.styles.link"
		>
			{{ label }}
			<slot />
		</a>
		<slot v-else />
	</li>
</template>

<script setup lang="ts">
import type { BoNavigationMenuItemProps } from '@workspace/bamboo-core';
import { NAVIGATION_MENU_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';

withDefaults(defineProps<BoNavigationMenuItemProps>(), {
	id: () => generateComponentId('navigation-item'),
	dataTestId: () => generateDataTestId('navigation-item'),
});
</script>
