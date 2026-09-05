<template>
	<div :class="CONTEXT_MENU_MANIFEST.styles.trigger" @contextmenu.prevent="onContextMenu">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { CONTEXT_MENU_MANIFEST } from '@workspace/bamboo-core';
import { inject } from 'vue';
import { contextMenuContextKey } from './keys';

const context = inject(contextMenuContextKey);
if (!context) throw new Error('BoContextMenuTrigger must be used inside BoContextMenu');
const menuContext = context;

function onContextMenu(event: MouseEvent): void {
	menuContext.openAt(event.clientX, event.clientY);
}
</script>
