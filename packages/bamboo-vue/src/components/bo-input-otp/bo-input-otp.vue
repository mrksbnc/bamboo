<template>
	<div ref="rootRef" :id="id" :data-testid="dataTestId" :class="INPUT_OTP_MANIFEST.styles.base">
		<div v-if="label || required" :class="INPUT_OTP_MANIFEST.styles.labels.container">
			<label :for="inputId(0)" :class="INPUT_OTP_MANIFEST.styles.labels.label">
				{{ label }}<span v-if="required" :class="INPUT_OTP_MANIFEST.styles.labels.required">*</span>
			</label>
		</div>

		<div
			:class="INPUT_OTP_MANIFEST.styles.group"
			:role="role || INPUT_OTP_MANIFEST.defaults.role"
			:aria-label="ariaLabel || label || 'One-time password'"
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
				:type="type || INPUT_OTP_MANIFEST.defaults.type"
				:inputmode="inputMode || INPUT_OTP_MANIFEST.defaults.inputMode"
				:pattern="pattern || INPUT_OTP_MANIFEST.defaults.pattern"
				:maxlength="1"
				:value="characterAt(index - 1)"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:autofocus="index === 1 && autofocus"
				:aria-label="`${ariaLabel || label || 'One-time password'} digit ${index} of ${inputCount}`"
				:aria-describedby="describedBy"
				:aria-invalid="error ? 'true' : undefined"
				:class="INPUT_OTP_MANIFEST.styles.input"
				@input="onInput(index - 1, $event)"
				@keydown="onKeydown(index - 1, $event)"
				@focus="emit('focus')"
				@blur="emit('blur', $event)"
			/>
		</div>

		<div v-if="description || error || hint" :class="INPUT_OTP_MANIFEST.styles.helpers.container">
			<span v-if="error" :id="helperTextId" :class="INPUT_OTP_MANIFEST.styles.helpers.error">{{
				error
			}}</span>
			<span
				v-else-if="description"
				:id="helperTextId"
				:class="INPUT_OTP_MANIFEST.styles.helpers.description"
				>{{ description }}</span
			>
			<span v-else :id="helperTextId" :class="INPUT_OTP_MANIFEST.styles.helpers.hint">{{
				hint
			}}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoInputOtpProps } from '@workspace/bamboo-core';
import { INPUT_OTP_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, nextTick, onMounted, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<BoInputOtpProps>(), {
	id: () => generateComponentId('input-otp'),
	dataTestId: () => generateDataTestId('input-otp'),
	length: () => INPUT_OTP_MANIFEST.defaults.length,
	type: () => INPUT_OTP_MANIFEST.defaults.type,
	inputMode: () => INPUT_OTP_MANIFEST.defaults.inputMode,
	pattern: () => INPUT_OTP_MANIFEST.defaults.pattern,
	role: () => INPUT_OTP_MANIFEST.defaults.role,
});

const emit = defineEmits<{
	(event: 'complete', value: string): void;
	(event: 'focus'): void;
	(eventName: 'blur', event: FocusEvent): void;
}>();

const model = defineModel<string>({ default: '' });
const rootRef = useTemplateRef<HTMLElement>('rootRef');
const inputCount = computed(() => {
	return Math.max(1, props.length || INPUT_OTP_MANIFEST.defaults.length);
});
const helperTextId = computed(() => {
	return `${props.id}-helper`;
});
const describedBy = computed(() => {
	return (
		props.ariaDescribedBy ||
		(props.description || props.error || props.hint ? helperTextId.value : undefined)
	);
});

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
		const matcher = new RegExp(props.pattern || INPUT_OTP_MANIFEST.defaults.pattern);
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
@import '@workspace/bamboo-core/manifests/input-otp.manifest.css';
</style>
