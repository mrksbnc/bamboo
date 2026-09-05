<template>
	<div :class="CHECKBOX_MANIFEST.styles.base">
		<bo-label
			:for="id"
			:required="required"
			:disabled="disabled"
			:class="CHECKBOX_MANIFEST.styles.container"
		>
			<input
				ref="inputRef"
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				:value="value"
				type="checkbox"
				:checked="model"
				:disabled="disabled"
				:required="required"
				:role="role"
				:class="CHECKBOX_MANIFEST.styles.input"
				:aria-label="ariaLabel"
				:aria-describedby="helperTextId"
				:aria-invalid="error ? 'true' : undefined"
				:data-state="state"
				@change="onChange"
			/>
			<span :class="boxClasses" aria-hidden="true">
				<bo-icon
					v-if="model || indeterminate"
					:icon="indeterminate ? 'minus' : 'check'"
					:size="iconSize"
					:class="iconClasses"
					aria-hidden="true"
				/>
			</span>
			<span v-if="label || $slots['default']" :class="CHECKBOX_MANIFEST.styles.labelGroup">
				<span v-if="label" :class="CHECKBOX_MANIFEST.styles.label">{{ label }}</span>
				<slot />
			</span>
		</bo-label>

		<div v-if="error || hint" :class="CHECKBOX_MANIFEST.styles.helpers.container">
			<span v-if="error" :id="helperTextId" :class="CHECKBOX_MANIFEST.styles.helpers.error">
				{{ error }}
			</span>
			<span v-else :id="helperTextId" :class="CHECKBOX_MANIFEST.styles.helpers.hint">
				{{ hint }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	CHECKBOX_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoCheckboxProps,
	type BoIconSize,
} from '@workspace/bamboo-core';
import { computed, onMounted, useTemplateRef, watch } from 'vue';
import { BoIcon } from '../bo-icon';
import { BoLabel } from '../bo-label';

const props = withDefaults(defineProps<BoCheckboxProps>(), {
	id: () => generateComponentId('checkbox'),
	dataTestId: () => generateDataTestId('checkbox'),
	size: () => CHECKBOX_MANIFEST.defaults.size,
});

const model = defineModel<boolean>({ default: false });
const inputRef = useTemplateRef<HTMLInputElement>('inputRef');

const helperTextId = computed(() => `${props.id}-helper`);
const state = computed(() =>
	props.indeterminate ? 'indeterminate' : model.value ? 'checked' : 'unchecked',
);
const boxClasses = computed(() => CHECKBOX_MANIFEST.styles.box[props.size || 'default']);
const iconClasses = computed(() => CHECKBOX_MANIFEST.styles.icon[props.size || 'default']);
const iconSize = computed<BoIconSize>(() => (props.size === 'lg' ? 'default' : 'sm'));

function setIndeterminate(value: boolean): void {
	if (inputRef.value) {
		inputRef.value.indeterminate = value;
	}
}

function onChange(event: Event): void {
	model.value = (event.target as HTMLInputElement).checked;
}

watch(
	() => props.indeterminate,
	(value) => setIndeterminate(!!value),
	{ immediate: true },
);

onMounted(() => setIndeterminate(!!props.indeterminate));
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/checkbox.manifest.css';
</style>
