<template>
	<div :id="id" :data-testid="dataTestId" :class="NUMBER_FIELD_MANIFEST.styles.base">
		<div v-if="label || required" :class="NUMBER_FIELD_MANIFEST.styles.labels.container">
			<label :for="id" :class="NUMBER_FIELD_MANIFEST.styles.labels.label">
				{{ label
				}}<span v-if="required" :class="NUMBER_FIELD_MANIFEST.styles.labels.required">*</span>
			</label>
		</div>

		<div :class="NUMBER_FIELD_MANIFEST.styles.container">
			<input
				ref="inputRef"
				:id="id"
				:data-testid="`${dataTestId}-input`"
				:name="name"
				type="number"
				:inputmode="inputMode"
				:min="min"
				:max="max"
				:step="step"
				:placeholder="placeholder"
				:value="model ?? ''"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:autofocus="autofocus"
				:role="role"
				:aria-label="ariaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="describedBy"
				:aria-invalid="error ? 'true' : undefined"
				:aria-valuemin="min"
				:aria-valuemax="max"
				:aria-valuenow="model"
				:class="NUMBER_FIELD_MANIFEST.styles.input"
				@input="onInput"
				@focus="emit('focus')"
				@blur="emit('blur', $event)"
				@change="emit('change', $event)"
			/>
			<div :class="NUMBER_FIELD_MANIFEST.styles.buttons.container">
				<button
					type="button"
					:class="[
						NUMBER_FIELD_MANIFEST.styles.button,
						NUMBER_FIELD_MANIFEST.styles.buttons.decrement,
					]"
					:disabled="disabled || readOnly || !canDecrement"
					aria-label="Decrease value"
					@click="stepValue(-1)"
				>
					-
				</button>
				<button
					type="button"
					:class="[
						NUMBER_FIELD_MANIFEST.styles.button,
						NUMBER_FIELD_MANIFEST.styles.buttons.increment,
					]"
					:disabled="disabled || readOnly || !canIncrement"
					aria-label="Increase value"
					@click="stepValue(1)"
				>
					+
				</button>
			</div>
		</div>

		<div
			v-if="description || error || hint"
			:class="NUMBER_FIELD_MANIFEST.styles.helpers.container"
		>
			<span v-if="error" :id="helperTextId" :class="NUMBER_FIELD_MANIFEST.styles.helpers.error">{{
				error
			}}</span>
			<span
				v-else-if="description"
				:id="helperTextId"
				:class="NUMBER_FIELD_MANIFEST.styles.helpers.description"
				>{{ description }}</span
			>
			<span v-else :id="helperTextId" :class="NUMBER_FIELD_MANIFEST.styles.helpers.hint">{{
				hint
			}}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoNumberFieldProps } from '@workspace/bamboo-core';
import { NUMBER_FIELD_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<BoNumberFieldProps>(), {
	id: () => generateComponentId('number-field'),
	dataTestId: () => generateDataTestId('number-field'),
	inputMode: 'decimal',
	role: 'spinbutton',
});

const emit = defineEmits<{
	focus: [];
	blur: [event: FocusEvent];
	change: [event: Event];
}>();

const model = defineModel<number | undefined>({ default: undefined });
const inputRef = ref<HTMLInputElement | null>(null);
const helperTextId = computed(() => `${props.id}-helper`);
const describedBy = computed(
	() =>
		props.ariaDescribedBy ||
		(props.description || props.error || props.hint ? helperTextId.value : undefined),
);

function boundValue(value: string | undefined): number | undefined {
	if (value === undefined || value === '') return undefined;
	const number = Number(value);
	return Number.isFinite(number) ? number : undefined;
}

const minimum = computed(() => boundValue(props.min));
const maximum = computed(() => boundValue(props.max));
const step = computed(() => {
	const value = boundValue(props.step);
	return value && value > 0 ? value : 1;
});
const currentValue = computed(() => model.value ?? minimum.value ?? 0);
const canDecrement = computed(
	() => minimum.value === undefined || currentValue.value - step.value >= minimum.value,
);
const canIncrement = computed(
	() => maximum.value === undefined || currentValue.value + step.value <= maximum.value,
);

function onInput(event: Event): void {
	model.value = boundValue((event.target as HTMLInputElement).value);
}

function stepValue(direction: -1 | 1): void {
	if (props.disabled || props.readOnly) return;
	const next = currentValue.value + step.value * direction;
	const bounded = Math.min(maximum.value ?? next, Math.max(minimum.value ?? next, next));
	model.value = Number.isFinite(bounded) ? bounded : undefined;
}

function focus(): void {
	inputRef.value?.focus();
}

defineExpose({ focus });

onMounted(() => {
	if (props.autofocus) focus();
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/number-field.manifest.css';
</style>
