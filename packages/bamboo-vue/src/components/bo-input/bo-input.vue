<template>
	<div :class="baseClasses">
		<div
			v-if="label || required || $slots['topRightContent']"
			:class="INPUT_MANIFEST.styles.labels.container"
		>
			<label :for="id" :class="INPUT_MANIFEST.styles.labels.label">
				<span v-if="label">{{ label }}</span>
				<span v-if="required" :class="INPUT_MANIFEST.styles.labels.required">*</span>
			</label>
			<slot name="topRightContent"></slot>
		</div>

		<div :class="containerClasses">
			<div
				v-if="prefixIcon"
				:class="INPUT_MANIFEST.styles.icons.prefix"
				@click="emit('prefixIconClick')"
			>
				<bo-icon :icon="prefixIcon" size="sm" aria-hidden="true" />
			</div>

			<input
				ref="inputRef"
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				:type="inputType"
				v-model="model"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:autofocus="autofocus"
				:placeholder="placeholder"
				:class="INPUT_MANIFEST.styles.input.base"
				:aria-label="ariaLabel"
				:aria-describedby="helperTextId"
				:aria-invalid="state === 'invalid' ? 'true' : undefined"
				:aria-errormessage="error ? helperTextId : undefined"
				@focus="emit('focus')"
				@blur="emit('blur', $event)"
				@change="emit('change', $event)"
			/>

			<div
				v-if="suffixIcon || showPasswordToggle"
				:class="INPUT_MANIFEST.styles.icons.suffix"
				@click="emit('suffixIconClick')"
			>
				<bo-icon
					v-if="suffixIcon && !showPasswordToggle"
					:icon="suffixIcon"
					size="sm"
					aria-hidden="true"
				/>
				<button
					v-if="showPasswordToggle"
					type="button"
					:class="INPUT_MANIFEST.styles.icons.passwordToggle"
					:aria-label="passwordVisible ? 'Hide password' : 'Show password'"
					:aria-pressed="passwordVisible ? 'true' : 'false'"
					@click="togglePasswordVisibility"
				>
					<bo-icon :icon="passwordVisible ? 'eye_off' : 'eye'" size="sm" aria-hidden="true" />
				</button>
			</div>
		</div>

		<div v-if="error || hint" :class="INPUT_MANIFEST.styles.helpers.container">
			<div v-if="error" :class="INPUT_MANIFEST.styles.helpers.error">
				<bo-icon size="sm" icon="alert_circle" />
				<span :id="helperTextId">{{ error }}</span>
			</div>
			<span v-else-if="hint" :id="helperTextId" :class="INPUT_MANIFEST.styles.helpers.hint">
				{{ hint }}
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	generateComponentId,
	generateDataTestId,
	INPUT_MANIFEST,
	mergeTwClasses,
	type BoInputProps,
} from '@workspace/bamboo-core';
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoInputProps>(), {
	id: () => generateComponentId('input'),
	dataTestId: () => generateDataTestId('input'),
	role: () => INPUT_MANIFEST.defaults.role,
	state: () => INPUT_MANIFEST.defaults.state,
	type: () => INPUT_MANIFEST.defaults.type,
});

const emit = defineEmits<{
	(event: 'focus'): void;
	(eventName: 'blur', event: FocusEvent): void;
	(eventName: 'change', event: Event): void;
	(event: 'prefixIconClick'): void;
	(event: 'suffixIconClick'): void;
}>();

defineSlots<{
	default?: () => unknown;
	topRightContent?: () => unknown;
}>();

const model = defineModel<string>({ default: '' });

const inputRef = useTemplateRef<HTMLInputElement>('inputRef');
const passwordVisible = ref(false);

const showPasswordToggle = computed<boolean>(() => {
	return props.type === 'password' && !props.disabled && !!model.value && !!props.revealPassword;
});

const helperTextId = computed<string>(() => {
	return `${props.id}-helper`;
});

const inputType = computed<string>(() => {
	if (props.type === 'password' && passwordVisible.value) {
		return 'text';
	}
	return props.type || 'text';
});

const baseClasses = computed<string>(() => {
	return mergeTwClasses(
		INPUT_MANIFEST.styles.base,
		props.fullWidth ? INPUT_MANIFEST.styles.width.full : INPUT_MANIFEST.styles.width.default,
	);
});

const containerClasses = computed<string>(() => {
	const classes: string[] = [
		INPUT_MANIFEST.styles.container.base,
		INPUT_MANIFEST.styles.state[props.state || 'default'],
	];

	if (props.disabled) {
		classes.push(INPUT_MANIFEST.styles.container.disabled);
	}

	return mergeTwClasses(...classes);
});

function togglePasswordVisibility(): void {
	passwordVisible.value = !passwordVisible.value;
}

function focus(): void {
	inputRef.value?.focus();
}

defineExpose({ focus });

onMounted(() => {
	if (props.autofocus) {
		setTimeout(() => inputRef.value?.focus(), 200);
	}
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/input.manifest.css';
</style>
