<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:data-orientation="orientation"
		:class="SLIDER_MANIFEST.styles.base"
	>
		<input
			ref="inputRef"
			type="range"
			:class="SLIDER_MANIFEST.styles.input"
			:min="min"
			:max="max"
			:step="step"
			:value="model"
			:name="name"
			:disabled="disabled"
			:inputmode="inputMode"
			:aria-label="ariaLabel"
			:aria-labelledby="ariaLabelledBy"
			:aria-describedby="ariaDescribedBy"
			@input="onInput"
		/>
	</div>
</template>

<script setup lang="ts">
import {
	SLIDER_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoSliderProps,
} from '@workspace/bamboo-core';
import { computed, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<BoSliderProps>(), {
	id: () => generateComponentId('slider'),
	dataTestId: () => generateDataTestId('slider'),
	min: () => SLIDER_MANIFEST.defaults.min,
	max: () => SLIDER_MANIFEST.defaults.max,
	step: () => SLIDER_MANIFEST.defaults.step,
	orientation: () => SLIDER_MANIFEST.defaults.orientation,
});
const model = defineModel<number>({ default: 0 });
const inputRef = useTemplateRef<HTMLInputElement>('inputRef');
const min = computed(() => {
	return props.min ?? 0;
});
const max = computed(() => {
	return props.max ?? 100;
});
const step = computed(() => {
	return props.step ?? 1;
});
function onInput(event: Event): void {
	model.value = Number((event.target as HTMLInputElement).value);
}
defineExpose({ inputRef });
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/slider.manifest.css';
</style>
