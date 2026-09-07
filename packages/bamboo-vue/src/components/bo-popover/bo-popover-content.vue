<template>
	<Teleport to="body">
		<Transition name="bo-popover">
			<div
				v-if="context.open.value"
				:id="id || popoverContext.contentId.value"
				:data-testid="dataTestId"
				:role="role"
				:data-state="'open'"
				:data-placement="placement"
				:data-slot="'popover-content'"
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
import { computed, inject, nextTick, onMounted, onUnmounted, ref, watch, useAttrs } from 'vue';
import { popoverContextKey } from './keys';

const props = withDefaults(defineProps<BoPopoverProps>(), {
	dataTestId: () => generateDataTestId('popover-content'),
	role: () => POPOVER_MANIFEST.defaults.role,
});
defineOptions({ inheritAttrs: false });
const attrs = useAttrs();
const context = inject(popoverContextKey);
if (!context) throw new Error('BoPopoverContent must be used inside BoPopover');
const popoverContext = context;

const contentRef = ref<HTMLElement | null>(null);
const contentStyle = ref<Record<string, string>>({});
const placement = computed(() => {
	return props.placement ?? popoverContext.placement.value;
});
watch(
	() => props.id,
	(value) => {
		if (value) popoverContext.contentId.value = value;
	},
	{ immediate: true },
);
const contentClasses = computed(() => {
	return mergeTwClasses(
		POPOVER_MANIFEST.styles.content,
		POPOVER_MANIFEST.styles.placement[placement.value],
		(attrs.class as string | undefined) ?? '',
	);
});

function updatePosition(): void {
	const trigger = popoverContext.triggerRef.value;
	const content = contentRef.value;
	if (!trigger || !content) return;
	const triggerRect = trigger.getBoundingClientRect();
	const contentRect = content.getBoundingClientRect();
	const gap = props.offset ?? popoverContext.offset.value;
	const [side, alignment] = placement.value.split('-') as [
		'top' | 'bottom' | 'left' | 'right',
		'start' | 'end' | undefined,
	];
	let top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
	let left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;

	if (side === 'top') top = triggerRect.top - contentRect.height - gap;
	if (side === 'bottom') top = triggerRect.bottom + gap;
	if (side === 'left') left = triggerRect.left - contentRect.width - gap;
	if (side === 'right') left = triggerRect.right + gap;

	if (alignment === 'start') {
		if (side === 'top' || side === 'bottom') left = triggerRect.left;
		else top = triggerRect.top;
	}
	if (alignment === 'end') {
		if (side === 'top' || side === 'bottom') left = triggerRect.right - contentRect.width;
		else top = triggerRect.bottom - contentRect.height;
	}

	const padding = 8;
	const maxTop = Math.max(padding, window.innerHeight - contentRect.height - padding);
	const maxLeft = Math.max(padding, window.innerWidth - contentRect.width - padding);
	const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
	const scrollLeft = window.scrollX || document.documentElement.scrollLeft || 0;
	contentStyle.value = {
		top: `${Math.min(Math.max(padding, top), maxTop) + scrollTop}px`,
		left: `${Math.min(Math.max(padding, left), maxLeft) + scrollLeft}px`,
	};
}

function updateAfterOpen(isOpen: boolean): void {
	if (isOpen) {
		void nextTick(() => {
			updatePosition();
			requestAnimationFrame(updatePosition);
		});
	}
}

watch(() => popoverContext.open.value, updateAfterOpen, { immediate: true });
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
