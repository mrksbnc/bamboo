<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-hidden="!isActive"
		:class="itemClasses"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
	import {
		CAROUSEL_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoCarouselItemProps,
	} from '@workspace/bamboo-core';
	import { computed, inject, onMounted, ref, type ComputedRef } from 'vue';

	const props = withDefaults(defineProps<BoCarouselItemProps>(), {
		role: 'group',
	});

	// Inject context from parent carousel
	const carouselOrientation = inject<'horizontal' | 'vertical'>(
		'carouselOrientation',
		'horizontal',
	);
	const carouselCurrentIndex = inject<ComputedRef<number>>(
		'carouselCurrentIndex',
		computed(() => 0),
	);

	// State
	const itemIndex = ref(0);

	// Computed
	const id = computed(() => props.id ?? generateComponentId('carousel-item'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoCarouselItem'));

	const isActive = computed(() => carouselCurrentIndex.value === itemIndex.value);

	const itemClasses = computed(() =>
		mergeTwClasses(
			CAROUSEL_MANIFEST.styles.item.base,
			CAROUSEL_MANIFEST.styles.item.orientation[carouselOrientation],
		),
	);

	// Lifecycle
	onMounted(() => {
		// Determine this item's index within the carousel
		const parent = document.querySelector(`[data-testid*="BoCarousel"]`);
		if (parent) {
			const items = Array.from(parent.querySelectorAll('[data-testid*="BoCarouselItem"]'));
			itemIndex.value = items.findIndex((item) => item === document.getElementById(id.value));
		}
	});
</script>
