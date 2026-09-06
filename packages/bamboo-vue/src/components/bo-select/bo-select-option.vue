<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		role="option"
		:disabled="disabled || context?.isDisabled.value"
		:aria-selected="selected ? 'true' : 'false'"
		:data-state="selected ? 'checked' : 'unchecked'"
		:class="optionClasses"
		@click="select"
	>
		<span :class="SELECT_MANIFEST.styles.optionLabel">
			<span>{{ label }}</span>
			<bo-icon v-if="selected" icon="check" size="sm" aria-hidden="true" />
		</span>
		<span v-if="description" :class="SELECT_MANIFEST.styles.optionDescription">
			{{ description }}
		</span>
	</button>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoSelectOption } from '@workspace/bamboo-core';
import { SELECT_MANIFEST } from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { BoIcon } from '../bo-icon';
import { selectContextKey } from './keys.js';

interface BoSelectOptionProps extends BoSelectOption {
	id?: string;
	dataTestId?: string;
}

const props = withDefaults(defineProps<BoSelectOptionProps>(), {
	id: () => generateComponentId('select-option'),
	dataTestId: () => generateDataTestId('select-option'),
});

const context = inject(selectContextKey);
const selected = computed(() => context?.isSelected(props.value) ?? false);
const optionClasses = computed(() =>
	mergeTwClasses(
		SELECT_MANIFEST.styles.option,
		selected.value ? SELECT_MANIFEST.styles.optionSelected : '',
	),
);

function select(): void {
	context?.select(props.value, props.disabled);
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/select.manifest.css';
</style>
