<template>
	<button
		ref="triggerRef"
		type="button"
		:class="POPOVER_MANIFEST.styles.trigger"
		:aria-expanded="context.open.value ? 'true' : 'false'"
		:aria-controls="contentId"
		@click="context.open.value = !context.open.value"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { POPOVER_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId } from '@workspace/bamboo-core';
import { computed, inject, ref, watch } from 'vue';
import { popoverContextKey } from './keys';

const context = inject(popoverContextKey);
if (!context) throw new Error('BoPopoverTrigger must be used inside BoPopover');

const triggerRef = ref<HTMLElement>();
const contentId = computed(() => `${generateComponentId('popover')}-content`);
watch(
	triggerRef,
	(element) => {
		context.triggerRef.value = element;
	},
	{ immediate: true },
);
</script>
