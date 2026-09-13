<template>
	<form
		:id="id"
		:data-testid="dataTestId"
		:aria-label="ariaLabel"
		:novalidate="novalidate"
		:class="FORM_MANIFEST.styles.base"
		@submit="onSubmit"
		@reset="onReset"
	>
		<slot />
	</form>
</template>

<script setup lang="ts">
import type { BoFormProps } from '@workspace/bamboo-core';
import { FORM_MANIFEST, generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoFormProps>(), {
	id: () => generateComponentId('form'),
	dataTestId: () => generateDataTestId('form'),
	novalidate: false,
});

const emit = defineEmits<{
	(event: 'submit', payload: SubmitEvent): void;
	(event: 'reset', payload: Event): void;
}>();

const id = computed(() => {
	return props.id;
});
const dataTestId = computed(() => {
	return props.dataTestId;
});
const ariaLabel = computed(() => {
	return props.ariaLabel;
});
const novalidate = computed(() => {
	return props.novalidate;
});

function onSubmit(event: SubmitEvent): void {
	emit('submit', event);
}

function onReset(event: Event): void {
	emit('reset', event);
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/form.manifest.css';
</style>
