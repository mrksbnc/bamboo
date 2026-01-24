<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:class="baseClasses"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
	>
		<!-- Viewport -->
		<div :class="viewportClasses">
			<div ref="containerRef" :class="containerClasses" :style="containerStyle">
				<slot />
			</div>
		</div>

		<!-- Navigation Arrows -->
		<div v-if="showArrows && itemCount > 1" :class="controlsClasses">
			<button
				:class="prevArrowClasses"
				:disabled="!loop && currentIndex === 0"
				@click="prev"
				aria-label="Previous slide"
			>
				<bo-icon icon="chevron_left" size="sm" />
			</button>

			<button
				:class="nextArrowClasses"
				:disabled="!loop && currentIndex === itemCount - 1"
				@click="next"
				aria-label="Next slide"
			>
				<bo-icon icon="chevron_right" size="sm" />
			</button>
		</div>

		<!-- Indicators -->
		<div v-if="showIndicators && itemCount > 1" :class="indicatorsClasses">
			<button
				v-for="(_, index) in itemCount"
				:key="index"
				:class="getIndicatorClasses(index)"
				:aria-label="`Go to slide ${index + 1}`"
				@click="goTo(index)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		CAROUSEL_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoCarouselProps,
	} from '@workspace/bamboo-core';
	import { computed, onMounted, onUnmounted, provide, ref, watch, type StyleValue } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoCarouselProps>(), {
		...CAROUSEL_MANIFEST.defaults,
	});

	const emit = defineEmits<{
		'update:modelValue': [index: number];
		change: [index: number];
		slideChange: [{ from: number; to: number }];
	}>();

	// Template refs
	const containerRef = ref<HTMLElement>();

	// State
	const currentIndex = ref(props.modelValue!);
	const itemCount = ref(0);
	const isHovered = ref(false);
	const autoplayTimer = ref<ReturnType<typeof setInterval> | null>(null);

	// Computed
	const id = computed(() => props.id ?? generateComponentId('carousel'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoCarousel'));

	const ariaLabel = computed(() => `Carousel with ${itemCount.value} slides`);

	const baseClasses = computed(() => CAROUSEL_MANIFEST.styles.base);

	const viewportClasses = computed(() =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.viewport.base,
			CAROUSEL_MANIFEST.styles.viewport.orientation[props.orientation!],
		),
	);

	const containerClasses = computed(() =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.container.base,
			CAROUSEL_MANIFEST.styles.container.orientation[props.orientation!],
		),
	);

	const containerStyle = computed((): StyleValue => {
		const isHorizontal = props.orientation === 'horizontal';
		const translateProperty = isHorizontal ? 'translateX' : 'translateY';
		const percentage = -currentIndex.value * 100;

		return {
			transform: `${translateProperty}(${percentage}%)`,
		};
	});

	const controlsClasses = computed(() => CAROUSEL_MANIFEST.styles.controls.base);

	const prevArrowClasses = computed(() =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.controls.arrow.base,
			CAROUSEL_MANIFEST.styles.controls.arrow.orientation[props.orientation!],
			CAROUSEL_MANIFEST.styles.controls.arrow.prev[props.orientation!],
		),
	);

	const nextArrowClasses = computed(() =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.controls.arrow.base,
			CAROUSEL_MANIFEST.styles.controls.arrow.orientation[props.orientation!],
			CAROUSEL_MANIFEST.styles.controls.arrow.next[props.orientation!],
		),
	);

	const indicatorsClasses = computed(() =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.controls.indicators.base,
			CAROUSEL_MANIFEST.styles.controls.indicators.orientation[props.orientation!],
		),
	);

	const getIndicatorClasses = (index: number) =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.controls.indicators.indicator,
			index === currentIndex.value ? CAROUSEL_MANIFEST.styles.controls.indicators.active : '',
		);

	// Methods
	const updateItemCount = () => {
		if (containerRef.value) {
			itemCount.value = containerRef.value.children.length;
		}
	};

	const goTo = (index: number) => {
		if (index < 0 || index >= itemCount.value) return;

		const from = currentIndex.value;
		currentIndex.value = index;

		emit('update:modelValue', index);
		emit('change', index);
		emit('slideChange', { from, to: index });
	};

	const next = () => {
		if (currentIndex.value >= itemCount.value - 1) {
			if (props.loop) {
				goTo(0);
			}
		} else {
			goTo(currentIndex.value + 1);
		}
	};

	const prev = () => {
		if (currentIndex.value <= 0) {
			if (props.loop) {
				goTo(itemCount.value - 1);
			}
		} else {
			goTo(currentIndex.value - 1);
		}
	};

	const startAutoplay = () => {
		if (!props.autoplay || autoplayTimer.value) return;

		autoplayTimer.value = setInterval(() => {
			if (!isHovered.value || !props.pauseOnHover) {
				next();
			}
		}, props.interval);
	};

	const stopAutoplay = () => {
		if (autoplayTimer.value) {
			clearInterval(autoplayTimer.value);
			autoplayTimer.value = null;
		}
	};

	const handleMouseEnter = () => {
		isHovered.value = true;
	};

	const handleMouseLeave = () => {
		isHovered.value = false;
	};

	// Watch for prop changes
	watch(
		() => props.modelValue,
		(newValue) => {
			if (newValue !== undefined && newValue !== currentIndex.value) {
				goTo(newValue);
			}
		},
	);

	watch(
		() => props.autoplay,
		(newValue) => {
			if (newValue) {
				startAutoplay();
			} else {
				stopAutoplay();
			}
		},
	);

	// Provide context to carousel items
	provide('carouselOrientation', props.orientation);
	provide(
		'carouselCurrentIndex',
		computed(() => currentIndex.value),
	);

	// Lifecycle
	onMounted(() => {
		updateItemCount();

		if (props.autoplay) {
			startAutoplay();
		}

		// Watch for slot changes
		const observer = new MutationObserver(() => {
			updateItemCount();
		});

		if (containerRef.value) {
			observer.observe(containerRef.value, { childList: true });
		}

		onUnmounted(() => {
			observer.disconnect();
		});
	});

	onUnmounted(() => {
		stopAutoplay();
	});

	// Expose methods for external control
	defineExpose({
		next,
		prev,
		goTo,
		currentIndex: computed(() => currentIndex.value),
		itemCount: computed(() => itemCount.value),
	});
</script>
