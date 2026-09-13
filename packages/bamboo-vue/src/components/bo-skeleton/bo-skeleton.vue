<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel ?? 'Loading...'"
		:aria-busy="true"
		:class="classValues"
		:style="styleValues"
	/>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	SKELETON_MANIFEST,
	type BoSkeletonProps,
} from '@workspace/bamboo-core';
import { computed, type StyleValue } from 'vue';

const props = withDefaults(defineProps<BoSkeletonProps>(), {
	id: () => generateComponentId('skeleton'),
	dataTestId: () => generateDataTestId('skeleton'),
	variant: () => SKELETON_MANIFEST.defaults.variant,
	animated: () => SKELETON_MANIFEST.defaults.animated,
	role: () => SKELETON_MANIFEST.defaults.role,
});

const classValues = computed<string>(() => {
	return mergeTwClasses(
		SKELETON_MANIFEST.styles.base,
		SKELETON_MANIFEST.styles.variant[props.variant || 'rect'],
		props.animated ? SKELETON_MANIFEST.styles.animated : '',
	);
});

const styleValues = computed<StyleValue>(() => {
	return {
		width: props.width ?? undefined,
		height: props.height ?? undefined,
	};
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/skeleton.manifest.css';
</style>
