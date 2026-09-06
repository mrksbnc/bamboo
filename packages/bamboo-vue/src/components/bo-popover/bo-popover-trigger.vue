<template>
	<button
		ref="triggerRef"
		v-bind="$attrs"
		type="button"
		:class="POPOVER_MANIFEST.styles.trigger"
		:aria-expanded="context.open.value ? 'true' : 'false'"
		:aria-controls="context.contentId.value"
		@click="context.open.value = !context.open.value"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { POPOVER_MANIFEST } from '@workspace/bamboo-core';
import { inject, useTemplateRef, watch } from 'vue';
import { popoverContextKey } from './keys';

defineOptions({ inheritAttrs: false });
const context = inject(popoverContextKey);
if (!context) throw new Error('BoPopoverTrigger must be used inside BoPopover');

const triggerRef = useTemplateRef<HTMLElement>('triggerRef');
watch(
	triggerRef,
	(element) => {
		context.triggerRef.value = element;
	},
	{ immediate: true },
);
</script>
