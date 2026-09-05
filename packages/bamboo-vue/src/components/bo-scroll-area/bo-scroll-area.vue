<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="ariaLabel ? 'region' : undefined"
		:aria-label="ariaLabel"
		:class="classValues"
		:style="styleValues"
	>
		<div
			ref="viewportRef"
			data-slot="scroll-area-viewport"
			tabindex="0"
			:class="SCROLL_AREA_MANIFEST.styles.viewport"
			@scroll="onScroll"
			@pointerenter="onPointerEnter"
			@pointerleave="onPointerLeave"
		>
			<slot />
		</div>
		<div
			v-if="showVerticalScrollbar"
			data-slot="scroll-area-scrollbar"
			data-orientation="vertical"
			:class="SCROLL_AREA_MANIFEST.styles.scrollbar.vertical"
			@pointerdown="onTrackPointerDown('vertical', $event)"
		>
			<div
				data-slot="scroll-area-thumb"
				:class="SCROLL_AREA_MANIFEST.styles.thumb"
				:style="thumbStyle('vertical')"
				@pointerdown.stop="onThumbPointerDown('vertical', $event)"
			/>
		</div>
		<div
			v-if="showHorizontalScrollbar"
			data-slot="scroll-area-scrollbar"
			data-orientation="horizontal"
			:class="SCROLL_AREA_MANIFEST.styles.scrollbar.horizontal"
			@pointerdown="onTrackPointerDown('horizontal', $event)"
		>
			<div
				data-slot="scroll-area-thumb"
				:class="SCROLL_AREA_MANIFEST.styles.thumb"
				:style="thumbStyle('horizontal')"
				@pointerdown.stop="onThumbPointerDown('horizontal', $event)"
			/>
		</div>
		<div
			v-if="showVerticalScrollbar && showHorizontalScrollbar"
			data-slot="scroll-area-corner"
			:class="SCROLL_AREA_MANIFEST.styles.corner"
		/>
	</div>
</template>

<script setup lang="ts">
import type { BoScrollAreaProps } from '@workspace/bamboo-core';
import { SCROLL_AREA_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, onBeforeUnmount, onMounted, ref, type StyleValue } from 'vue';

const props = withDefaults(defineProps<BoScrollAreaProps>(), {
	id: () => generateComponentId('scroll-area'),
	dataTestId: () => generateDataTestId('scroll-area'),
	masked: () => SCROLL_AREA_MANIFEST.defaults.masked,
});

const viewportRef = ref<HTMLElement>();
const isPointerOver = ref(false);
const viewportTick = ref(0);
const classValues = computed(() => [
	SCROLL_AREA_MANIFEST.styles.base,
	props.masked ? SCROLL_AREA_MANIFEST.styles.masked : '',
]);
const styleValues = computed<StyleValue>(() =>
	props.maxHeight === undefined ? {} : { maxHeight: `${props.maxHeight}px` },
);

function metrics() {
	const viewport = viewportRef.value;
	return viewport
		? {
				scrollTop: viewport.scrollTop,
				scrollLeft: viewport.scrollLeft,
				scrollHeight: viewport.scrollHeight,
				scrollWidth: viewport.scrollWidth,
				clientHeight: viewport.clientHeight,
				clientWidth: viewport.clientWidth,
			}
		: {
				scrollTop: 0,
				scrollLeft: 0,
				scrollHeight: 0,
				scrollWidth: 0,
				clientHeight: 0,
				clientWidth: 0,
			};
}

const showVerticalScrollbar = computed(() => {
	void viewportTick.value;
	const { scrollHeight, clientHeight } = metrics();
	return isPointerOver.value && scrollHeight > clientHeight;
});
const showHorizontalScrollbar = computed(() => {
	void viewportTick.value;
	const { scrollWidth, clientWidth } = metrics();
	return isPointerOver.value && scrollWidth > clientWidth;
});

function thumbStyle(orientation: 'vertical' | 'horizontal'): Record<string, string> {
	void viewportTick.value;
	const { scrollHeight, scrollWidth, clientHeight, clientWidth } = metrics();
	return orientation === 'vertical'
		? { height: `${Math.max((clientHeight / Math.max(scrollHeight, 1)) * 100, 10)}%` }
		: { width: `${Math.max((clientWidth / Math.max(scrollWidth, 1)) * 100, 10)}%` };
}

function onScroll(): void {
	viewportTick.value += 1;
}
function onPointerEnter(): void {
	isPointerOver.value = true;
}
function onPointerLeave(): void {
	isPointerOver.value = false;
}

function onThumbPointerDown(orientation: 'vertical' | 'horizontal', event: PointerEvent): void {
	const viewport = viewportRef.value;
	if (!viewport) return;
	event.preventDefault();
	const vertical = orientation === 'vertical';
	const startPointer = vertical ? event.clientY : event.clientX;
	const startScroll = vertical ? viewport.scrollTop : viewport.scrollLeft;
	const { scrollHeight, scrollWidth, clientHeight, clientWidth } = metrics();
	const maxScroll = vertical ? scrollHeight - clientHeight : scrollWidth - clientWidth;
	const trackSize = vertical ? clientHeight : clientWidth;
	const thumbSize = vertical
		? (clientHeight / Math.max(scrollHeight, 1)) * trackSize
		: (clientWidth / Math.max(scrollWidth, 1)) * trackSize;
	const scale = trackSize > thumbSize && maxScroll > 0 ? maxScroll / (trackSize - thumbSize) : 0;
	const onMove = (moveEvent: PointerEvent) => {
		const delta = (vertical ? moveEvent.clientY : moveEvent.clientX) - startPointer;
		if (vertical) viewport.scrollTop = startScroll + delta * scale;
		else viewport.scrollLeft = startScroll + delta * scale;
	};
	const onUp = () => {
		document.removeEventListener('pointermove', onMove);
		document.removeEventListener('pointerup', onUp);
	};
	document.addEventListener('pointermove', onMove);
	document.addEventListener('pointerup', onUp);
}

function onTrackPointerDown(orientation: 'vertical' | 'horizontal', event: PointerEvent): void {
	const viewport = viewportRef.value;
	if (!viewport) return;
	const rect = viewport.getBoundingClientRect();
	const { scrollHeight, scrollWidth, clientHeight, clientWidth } = metrics();
	if (orientation === 'vertical')
		viewport.scrollTop =
			((event.clientY - rect.top) / Math.max(rect.height, 1)) * (scrollHeight - clientHeight);
	else
		viewport.scrollLeft =
			((event.clientX - rect.left) / Math.max(rect.width, 1)) * (scrollWidth - clientWidth);
}

let resizeObserver: ResizeObserver | undefined;
onMounted(() => {
	if (typeof ResizeObserver !== 'undefined' && viewportRef.value) {
		resizeObserver = new ResizeObserver(() => {
			viewportTick.value += 1;
		});
		resizeObserver.observe(viewportRef.value);
	}
});
onBeforeUnmount(() => resizeObserver?.disconnect());
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/scroll-area.manifest.css';
</style>
