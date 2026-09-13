<template>
	<section
		:id="id"
		:data-testid="dataTestId"
		:aria-label="ariaLabel"
		:data-orientation="orientation"
		:class="CAROUSEL_MANIFEST.styles.base"
		@mouseenter="pause"
		@mouseleave="resume"
	>
		<div ref="viewportRef" :class="CAROUSEL_MANIFEST.styles.viewport">
			<div
				:class="CAROUSEL_MANIFEST.styles.content"
				:style="transformStyle"
				@keydown.left.prevent="previous"
				@keydown.right.prevent="next"
			>
				<div v-for="(_, index) in itemCount" :key="index" :class="CAROUSEL_MANIFEST.styles.item">
					<slot :name="`item-${index}`" :index="index" />
				</div>
				<slot v-if="!itemCount" />
			</div>
		</div>
		<div v-if="itemCount > 1" :class="CAROUSEL_MANIFEST.styles.controls">
			<button
				type="button"
				:class="CAROUSEL_MANIFEST.styles.button"
				:disabled="!loop && current === 0"
				aria-label="Previous slide"
				@click="previous"
			>
				‹
			</button>
			<button
				v-for="index in itemCount"
				:key="index"
				type="button"
				:class="[
					CAROUSEL_MANIFEST.styles.indicator,
					index - 1 === current ? CAROUSEL_MANIFEST.styles.indicatorActive : '',
				]"
				:aria-label="`Go to slide ${index}`"
				:aria-current="index - 1 === current ? 'true' : undefined"
				@click="goTo(index - 1)"
			/>
			<button
				type="button"
				:class="CAROUSEL_MANIFEST.styles.button"
				:disabled="!loop && current === itemCount - 1"
				aria-label="Next slide"
				@click="next"
			>
				›
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import {
	CAROUSEL_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoCarouselProps,
} from '@workspace/bamboo-core';
import { computed, onMounted, onUnmounted, useSlots, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<BoCarouselProps>(), {
	id: () => generateComponentId('carousel'),
	dataTestId: () => generateDataTestId('carousel'),
	loop: () => CAROUSEL_MANIFEST.defaults.loop,
	autoplay: () => CAROUSEL_MANIFEST.defaults.autoplay,
	interval: () => CAROUSEL_MANIFEST.defaults.interval,
	orientation: () => CAROUSEL_MANIFEST.defaults.orientation,
});
const viewportRef = useTemplateRef<HTMLElement>('viewportRef');
const slots = useSlots();
const model = defineModel<number>({ default: 0 });
const current = computed(() => {
	return model.value;
});
const itemCount = computed(() => {
	return Object.keys(slots).filter((name) => name.startsWith('item-')).length;
});
const transformStyle = computed(() => {
	return {
		transform:
			props.orientation === 'vertical'
				? `translateY(-${current.value * 100}%)`
				: `translateX(-${current.value * 100}%)`,
	};
});
let timer: ReturnType<typeof setInterval> | undefined;
function goTo(index: number): void {
	model.value = Math.max(0, Math.min(index, itemCount.value - 1));
}
function next(): void {
	if (itemCount.value)
		goTo(
			current.value === itemCount.value - 1 ? (props.loop ? 0 : current.value) : current.value + 1,
		);
}
function previous(): void {
	if (itemCount.value)
		goTo(current.value === 0 ? (props.loop ? itemCount.value - 1 : 0) : current.value - 1);
}
function pause(): void {
	if (timer) clearInterval(timer);
	timer = undefined;
}
function resume(): void {
	if (props.autoplay) {
		pause();
		timer = setInterval(next, props.interval);
	}
}
onMounted(resume);
onUnmounted(pause);
defineExpose({ next, previous, goTo, pause, resume, viewportRef });
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/carousel.manifest.css';
</style>
