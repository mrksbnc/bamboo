<template>
	<label
		:id="id"
		:data-testid="dataTestId"
		:for="props.for"
		:class="classValues"
		:aria-label="ariaLabel"
	>
		<slot />
		<span v-if="required" :class="LABEL_MANIFEST.styles.required" aria-hidden="true">*</span>
	</label>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	LABEL_MANIFEST,
	mergeTwClasses,
	type BoLabelProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoLabelProps>(), {
	id: () => generateComponentId('label'),
	dataTestId: () => generateDataTestId('label'),
	required: () => LABEL_MANIFEST.defaults.required,
	disabled: () => LABEL_MANIFEST.defaults.disabled,
	size: () => LABEL_MANIFEST.defaults.size,
});

const classValues = computed<string>(() =>
	mergeTwClasses(
		LABEL_MANIFEST.styles.base,
		LABEL_MANIFEST.styles.size[props.size || 'default'],
		props.disabled ? LABEL_MANIFEST.styles.disabled : '',
	),
);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/label.manifest.css';
</style>
