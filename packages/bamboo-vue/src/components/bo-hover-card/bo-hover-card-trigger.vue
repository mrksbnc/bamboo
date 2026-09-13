<template>
	<span
		ref="triggerRef"
		:class="HOVER_CARD_MANIFEST.styles.trigger"
		@mouseenter="context.scheduleOpen"
		@mouseleave="context.scheduleClose"
		@focusin="context.scheduleOpen"
		@focusout="context.scheduleClose"
	>
		<slot />
	</span>
</template>

<script setup lang="ts">
import { HOVER_CARD_MANIFEST } from '@workspace/bamboo-core';
import { inject, ref, watch } from 'vue';
import { hoverCardContextKey } from './keys';

const context = inject(hoverCardContextKey);
if (!context) throw new Error('BoHoverCardTrigger must be used inside BoHoverCard');
const triggerRef = ref<HTMLElement>();
watch(
	triggerRef,
	(element) => {
		context.triggerRef.value = element;
	},
	{ immediate: true },
);
</script>
