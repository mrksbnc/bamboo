<template>
	<Teleport to="body">
		<Transition name="bo-popover">
			<div
				v-if="context.open.value"
				:id="id || popoverContext.contentId.value"
				:data-testid="dataTestId"
				:role="role"
				:data-state="'open'"
				:class="contentClasses"
				:style="contentStyle"
				ref="contentRef"
				tabindex="-1"
				@keydown.escape.stop.prevent="context.close"
			>
				<slot />
				<div :class="POPOVER_MANIFEST.styles.arrow" aria-hidden="true" />
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import type { BoPopoverProps } from '@workspace/bamboo-core';
import { POPOVER_MANIFEST } from '@workspace/bamboo-core';
import { generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import { computed, inject, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { popoverContextKey } from './keys';

const props = withDefaults(defineProps<BoPopoverProps>(), {
	dataTestId: () => generateDataTestId('popover-content'),
	role: () => POPOVER_MANIFEST.defaults.role,
});
const context = inject(popoverContextKey);
if (!context) throw new Error('BoPopoverContent must be used inside BoPopover');
const popoverContext = context;

const contentRef = ref<HTMLElement>();
const contentStyle = ref<Record<string, string>>({});
const placement = computed(() => props.placement ?? popoverContext.placement.value);
watch(
	() => props.id,
	(value) => {
		if (value) popoverContext.contentId.value = value;
	},
	{ immediate: true },
);
const contentClasses = computed(() =>
	mergeTwClasses(
		POPOVER_MANIFEST.styles.content,
		POPOVER_MANIFEST.styles.placement[placement.value],
	),
);

function updatePosition(): void {
	const trigger = popoverContext.triggerRef.value;
	const content = contentRef.value;
	if (!trigger || !content) return;
	const triggerRect = trigger.getBoundingClientRect();
	const contentRect = content.getBoundingClientRect();
	const gap = props.offset ?? popoverContext.offset.value;
	let top = triggerRect.bottom + gap;
	let left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
	const value = placement.value;
	if (value.startsWith('top')) top = triggerRect.top - contentRect.height - gap;
	if (value.startsWith('left')) {
		top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
		left = triggerRect.left - contentRect.width - gap;
	}
	if (value.startsWith('right')) {
		top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
		left = triggerRect.right + gap;
	}
	if (value.endsWith('-start')) {
		top = value.startsWith('top') ? triggerRect.top - contentRect.height - gap : triggerRect.top;
		left = value.startsWith('left') ? triggerRect.left - contentRect.width - gap : triggerRect.left;
	}
	if (value.endsWith('-end')) {
		top = value.startsWith('top')
			? triggerRect.top - contentRect.height - gap
			: triggerRect.bottom - contentRect.height;
		left = value.startsWith('right')
			? triggerRect.right + gap
			: triggerRect.right - contentRect.width;
	}
	contentStyle.value = { top: `${Math.max(8, top)}px`, left: `${Math.max(8, left)}px` };
}

function updateAfterOpen(isOpen: boolean): void {
	if (isOpen) nextTick(updatePosition);
}

watch(() => popoverContext.open.value, updateAfterOpen);
onMounted(() => {
	window.addEventListener('resize', updatePosition);
	window.addEventListener('scroll', updatePosition, true);
});
onUnmounted(() => {
	window.removeEventListener('resize', updatePosition);
	window.removeEventListener('scroll', updatePosition, true);
});
watch(
	contentRef,
	(element) => {
		popoverContext.contentRef.value = element;
	},
	{ immediate: true },
);
</script>
