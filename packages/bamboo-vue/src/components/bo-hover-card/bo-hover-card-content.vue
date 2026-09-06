<template>
	<Teleport to="body">
		<Transition name="bo-hover-card">
			<div
				v-if="context.open.value"
				:id="id"
				:data-testid="dataTestId"
				:role="role"
				:data-state="'open'"
				:class="contentClasses"
				:style="contentStyle"
				ref="contentRef"
				@mouseenter="context.scheduleOpen"
				@mouseleave="context.scheduleClose"
			>
				<slot />
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import {
	HOVER_CARD_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoHoverCardProps,
} from '@workspace/bamboo-core';
import { computed, inject, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { hoverCardContextKey } from './keys';

const props = withDefaults(defineProps<BoHoverCardProps>(), {
	id: () => generateComponentId('hover-card-content'),
	dataTestId: () => generateDataTestId('hover-card-content'),
	role: () => HOVER_CARD_MANIFEST.defaults.role,
});
const context = inject(hoverCardContextKey);
if (!context) throw new Error('BoHoverCardContent must be used inside BoHoverCard');
const hoverContext = context;

const contentRef = ref<HTMLElement>();
const contentStyle = ref<Record<string, string>>({});
const placement = computed(() => props.placement ?? hoverContext.placement.value);
const contentClasses = computed(() =>
	mergeTwClasses(
		HOVER_CARD_MANIFEST.styles.content,
		HOVER_CARD_MANIFEST.styles.placement[placement.value],
	),
);

function updatePosition(): void {
	const trigger = hoverContext.triggerRef.value;
	const content = contentRef.value;
	if (!trigger || !content) return;
	const triggerRect = trigger.getBoundingClientRect();
	const contentRect = content.getBoundingClientRect();
	const gap = props.offset ?? hoverContext.offset.value;
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

watch(
	() => hoverContext.open.value,
	(isOpen) => {
		if (isOpen) nextTick(updatePosition);
	},
);
watch(
	contentRef,
	(element) => {
		hoverContext.contentRef.value = element;
	},
	{ immediate: true },
);
onMounted(() => {
	window.addEventListener('resize', updatePosition);
	window.addEventListener('scroll', updatePosition, true);
});
onUnmounted(() => {
	window.removeEventListener('resize', updatePosition);
	window.removeEventListener('scroll', updatePosition, true);
});
</script>
