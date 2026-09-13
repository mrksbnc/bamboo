<template>
	<div ref="rootRef" :id="id" :data-testid="dataTestId" :class="PIN_INPUT_MANIFEST.styles.base">
		<div v-if="label || required" :class="PIN_INPUT_MANIFEST.styles.labels.container">
			<label :for="inputId(0)" :class="PIN_INPUT_MANIFEST.styles.labels.label">
				{{ label }}<span v-if="required" :class="PIN_INPUT_MANIFEST.styles.labels.required">*</span>
			</label>
		</div>

		<div
			:class="PIN_INPUT_MANIFEST.styles.group"
			:role="role"
			:aria-label="ariaLabel || label || 'PIN'"
			:aria-labelledby="ariaLabelledBy"
			:aria-describedby="describedBy"
			:aria-disabled="disabled ? 'true' : undefined"
			:aria-required="required ? 'true' : undefined"
			@paste="onPaste"
		>
			<input
				v-for="index in inputCount"
				:key="inputId(index - 1)"
				:id="inputId(index - 1)"
				:data-testid="`${dataTestId}-${index}`"
				:name="index === 1 ? name : undefined"
				:type="type || PIN_INPUT_MANIFEST.defaults.type"
				:inputmode="inputMode || PIN_INPUT_MANIFEST.defaults.inputMode"
				:pattern="pattern || PIN_INPUT_MANIFEST.defaults.pattern"
				:placeholder="placeholder"
				:maxlength="1"
				:value="characterAt(index - 1)"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:autofocus="index === 1 && autofocus"
				:aria-label="`${ariaLabel || label || 'PIN'} digit ${index} of ${inputCount}`"
				:aria-describedby="describedBy"
				:aria-invalid="error ? 'true' : undefined"
				:class="PIN_INPUT_MANIFEST.styles.input"
				@input="onInput(index - 1, $event)"
				@keydown="onKeydown(index - 1, $event)"
				@focus="emit('focus')"
				@blur="emit('blur', $event)"
			/>
		</div>

		<div v-if="description || error || hint" :class="PIN_INPUT_MANIFEST.styles.helpers.container">
			<span v-if="error" :id="helperTextId" :class="PIN_INPUT_MANIFEST.styles.helpers.error">{{
				error
			}}</span>
			<span
				v-else-if="description"
				:id="helperTextId"
				:class="PIN_INPUT_MANIFEST.styles.helpers.description"
				>{{ description }}</span
			>
			<span v-else :id="helperTextId" :class="PIN_INPUT_MANIFEST.styles.helpers.hint">{{
				hint
			}}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoPinInputProps } from '@workspace/bamboo-core';
import { PIN_INPUT_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, nextTick, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<BoPinInputProps>(), {
	id: () => generateComponentId('pin-input'),
	dataTestId: () => generateDataTestId('pin-input'),
	length: () => PIN_INPUT_MANIFEST.defaults.length,
	type: () => PIN_INPUT_MANIFEST.defaults.type,
	inputMode: () => PIN_INPUT_MANIFEST.defaults.inputMode,
	pattern: () => PIN_INPUT_MANIFEST.defaults.pattern,
	role: 'group',
});

const emit = defineEmits<{ complete: [value: string]; focus: []; blur: [event: FocusEvent] }>();
const model = defineModel<string>({ default: '' });
const rootRef = ref<HTMLElement | null>(null);
const inputCount = computed(() => Math.max(1, props.length || PIN_INPUT_MANIFEST.defaults.length));
const helperTextId = computed(() => `${props.id}-helper`);
const describedBy = computed(
	() =>
		props.ariaDescribedBy ||
		(props.description || props.error || props.hint ? helperTextId.value : undefined),
);

function inputId(index: number): string {
	return `${props.id}-${index + 1}`;
}
function characterAt(index: number): string {
	return model.value.charAt(index);
}
function inputs(): HTMLInputElement[] {
	return rootRef.value ? Array.from(rootRef.value.querySelectorAll<HTMLInputElement>('input')) : [];
}
function focusInput(index: number): void {
	void nextTick(() => inputs()[Math.max(0, Math.min(index, inputCount.value - 1))]?.focus());
}
function validCharacters(value: string): string {
	try {
		const matcher = new RegExp(props.pattern || PIN_INPUT_MANIFEST.defaults.pattern);
		return Array.from(value)
			.filter((character) => matcher.test(character))
			.join('');
	} catch {
		return value;
	}
}
function updateValue(index: number, value: string): void {
	const nextValue = model.value.split('');
	nextValue.splice(index, 1, ...validCharacters(value).slice(0, inputCount.value - index));
	model.value = nextValue.slice(0, inputCount.value).join('');
	if (model.value.length === inputCount.value) emit('complete', model.value);
}
function onInput(index: number, event: Event): void {
	const input = event.target as HTMLInputElement;
	const value = validCharacters(input.value);
	input.value = value.charAt(0);
	updateValue(index, value);
	if (value) focusInput(index + 1);
}
function onPaste(event: ClipboardEvent): void {
	if (props.disabled || props.readOnly) return;
	event.preventDefault();
	const value = validCharacters(event.clipboardData?.getData('text') || '').slice(
		0,
		inputCount.value,
	);
	model.value = value;
	if (value.length === inputCount.value) emit('complete', value);
	focusInput(value.length);
}
function onKeydown(index: number, event: KeyboardEvent): void {
	if (event.key === 'ArrowLeft') {
		event.preventDefault();
		focusInput(index - 1);
	} else if (event.key === 'ArrowRight') {
		event.preventDefault();
		focusInput(index + 1);
	} else if (event.key === 'Backspace' && !characterAt(index)) {
		event.preventDefault();
		focusInput(index - 1);
	}
}
function focus(): void {
	focusInput(0);
}
defineExpose({ focus });
onMounted(() => {
	if (props.autofocus) focus();
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/pin-input.manifest.css';
</style>
