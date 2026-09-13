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
import { useResizeObserver } from '@vueuse/core';
import type { BoScrollAreaProps } from '@workspace/bamboo-core';
import { SCROLL_AREA_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, ref, type StyleValue, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<BoScrollAreaProps>(), {
	id: () => generateComponentId('scroll-area'),
	dataTestId: () => generateDataTestId('scroll-area'),
	masked: () => SCROLL_AREA_MANIFEST.defaults.masked,
});

const viewportRef = useTemplateRef<HTMLElement>('viewportRef');
const viewportTick = ref(0);
const classValues = computed(() => {
	return [SCROLL_AREA_MANIFEST.styles.base, props.masked ? SCROLL_AREA_MANIFEST.styles.masked : ''];
});
const styleValues = computed<StyleValue>(() => {
	return props.maxHeight === undefined ? {} : { maxHeight: `${props.maxHeight}px` };
});

const showVerticalScrollbar = computed(() => {
	void viewportTick.value;
	const { scrollHeight, clientHeight } = metrics();
	return scrollHeight > clientHeight;
});
const showHorizontalScrollbar = computed(() => {
	void viewportTick.value;
	const { scrollWidth, clientWidth } = metrics();
	return scrollWidth > clientWidth;
});

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

function thumbStyle(orientation: 'vertical' | 'horizontal'): Record<string, string> {
	void viewportTick.value;
	const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = metrics();
	if (orientation === 'vertical') {
		const size = Math.min(100, Math.max((clientHeight / Math.max(scrollHeight, 1)) * 100, 10));
		const travel = Math.max(100 - size, 0);
		const position = (scrollTop / Math.max(scrollHeight - clientHeight, 1)) * travel;
		return { height: `${size}%`, top: `${position}%`, left: '1px', right: '1px' };
	}
	const size = Math.min(100, Math.max((clientWidth / Math.max(scrollWidth, 1)) * 100, 10));
	const travel = Math.max(100 - size, 0);
	const position = (scrollLeft / Math.max(scrollWidth - clientWidth, 1)) * travel;
	return { width: `${size}%`, left: `${position}%`, top: '1px', bottom: '1px' };
}

function onScroll(): void {
	viewportTick.value += 1;
}
function onThumbPointerDown(orientation: 'vertical' | 'horizontal', event: PointerEvent): void {
	const viewport = viewportRef.value;
	if (!viewport) {
		return;
	}
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
		if (vertical) {
			viewport.scrollTop = startScroll + delta * scale;
		} else viewport.scrollLeft = startScroll + delta * scale;
		viewportTick.value += 1;
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
	if (!viewport) {
		return;
	}
	const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
	const { scrollHeight, scrollWidth, clientHeight, clientWidth } = metrics();
	if (orientation === 'vertical')
		viewport.scrollTop = Math.min(
			Math.max(
				0,
				((event.clientY - rect.top) / Math.max(rect.height, 1)) * (scrollHeight - clientHeight),
			),
			scrollHeight - clientHeight,
		);
	else
		viewport.scrollLeft = Math.min(
			Math.max(
				0,
				((event.clientX - rect.left) / Math.max(rect.width, 1)) * (scrollWidth - clientWidth),
			),
			scrollWidth - clientWidth,
		);
	viewportTick.value += 1;
}

useResizeObserver(viewportRef, () => {
	viewportTick.value += 1;
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/scroll-area.manifest.css';
</style>
