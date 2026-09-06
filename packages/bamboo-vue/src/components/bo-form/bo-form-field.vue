<template>
	<fieldset
		:id="id"
		:data-testid="dataTestId"
		:disabled="disabled"
		:class="FORM_FIELD_MANIFEST.styles.base"
	>
		<label v-if="label || required" :for="controlId" :class="FORM_FIELD_MANIFEST.styles.label">
			{{ label }}<span v-if="required" aria-hidden="true"> *</span>
		</label>
		<p v-if="description" :id="descriptionId" :class="FORM_FIELD_MANIFEST.styles.description">
			{{ description }}
		</p>
		<div :class="FORM_FIELD_MANIFEST.styles.control">
			<slot
				:id="controlId"
				:aria-describedby="describedBy"
				:aria-invalid="error ? 'true' : undefined"
			/>
		</div>
		<p v-if="error" :id="errorId" :class="FORM_FIELD_MANIFEST.styles.error" role="alert">
			{{ error }}
		</p>
	</fieldset>
</template>

<script setup lang="ts">
import type { BoFormFieldProps } from '@workspace/bamboo-core';
import {
	FORM_FIELD_MANIFEST,
	generateComponentId,
	generateDataTestId,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoFormFieldProps>(), {
	id: () => generateComponentId('form-field'),
	dataTestId: () => generateDataTestId('form-field'),
	required: false,
	disabled: false,
});

const id = computed(() => {
	return props.id;
});
const dataTestId = computed(() => {
	return props.dataTestId;
});
const controlId = computed(() => {
	return `${props.id}-control`;
});
const descriptionId = computed(() => {
	return `${props.id}-description`;
});
const errorId = computed(() => {
	return `${props.id}-error`;
});
const describedBy = computed(() => {
	const ids = [];
	if (props.description) ids.push(descriptionId.value);
	if (props.error) ids.push(errorId.value);
	return ids.join(' ') || undefined;
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/form.manifest.css';
</style>
