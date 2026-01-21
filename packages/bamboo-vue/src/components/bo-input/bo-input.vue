<template>
	<div :class="classValues">
		<!-- Label section -->
		<div v-if="label || required || $slots.topRightContent" :class="labelContainerClassValues">
			<div :class="labelClassValues">
				<bo-text v-if="label" :value="label" :font-size="labelFontSize" />
				<span v-if="required" :class="requiredIndicatorClassValues">*</span>
			</div>
			<slot name="topRightContent"></slot>
		</div>

		<!-- Input container -->
		<div :class="containerClassValues">
			<!-- Prefix icon -->
			<div
				v-if="prefixIcon && prefixIcon !== 'none'"
				:class="prefixIconClassValues"
				@click="emit('prefixIconClick')"
			>
				<bo-icon :icon="prefixIcon" :size="iconSize" aria-hidden="true" />
			</div>

			<!-- Input field and pills container -->
			<div ref="inputContainerRef" :class="inputContainerClassValues">
				<!-- Input field -->
				<input
					ref="inputRef"
					:id="id"
					:data-testid="dataTestId"
					:name="name"
					:type="inputType"
					:value="modelValue"
					:disabled="disabled"
					:readonly="readOnly"
					:required="required"
					:autofocus="autofocus"
					:placeholder="placeholder"
					:class="inputClassValues"
					:aria-label="ariaLabel"
					:aria-describedby="helperTextId"
					:aria-invalid="state === 'invalid'"
					@input="onInput"
					@focus="emit('focus')"
					@blur="onBlur"
					@change="onChange"
				/>
			</div>

			<!-- Suffix/action icons -->
			<div
				v-if="(suffixIcon && suffixIcon !== 'none') || showPasswordToggle"
				:class="suffixIconClassValues"
				@click="emit('suffixIconClick')"
			>
				<bo-icon
					v-if="suffixIcon && suffixIcon !== 'none' && !showPasswordToggle"
					:icon="suffixIcon"
					:size="iconSize"
					aria-hidden="true"
				/>
				<bo-icon
					v-if="showPasswordToggle"
					:icon="passwordVisible ? 'eye_off' : 'eye'"
					:size="iconSize"
					class="cursor-pointer"
					@click.stop="togglePasswordVisibility"
				/>
			</div>
		</div>

		<!-- Helper text/error container -->
		<div v-if="error || hint" :class="helperContainerClassValues">
			<div v-if="error" :class="errorContainerClassValues">
				<bo-icon size="sm" icon="alert_circle" variant="destructive" />
				<bo-text
					:id="helperTextId"
					:font-size="hintFontSize"
					variant="destructive"
					:value="error"
				/>
			</div>
			<bo-text
				v-if="hint && !error"
				:id="helperTextId"
				:value="hint"
				:font-size="hintFontSize"
				variant="secondary"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		INPUT_MANIFEST,
		mergeTwClasses,
		type BoFontSize,
		type BoIconSize,
		type BoInputProps,
	} from '@workspace/bamboo-core';
	import { computed, onMounted, ref, type StyleValue } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoText } from '../bo-text';

	interface Props extends BoInputProps {
		modelValue?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		id: () => generateComponentId('input'),
		dataTestId: () => generateDataTestId('input'),
		role: () => INPUT_MANIFEST.defaults.role,
		size: () => INPUT_MANIFEST.defaults.size,
		state: () => INPUT_MANIFEST.defaults.state,
		variant: () => INPUT_MANIFEST.defaults.variant,
		type: () => INPUT_MANIFEST.defaults.type,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		focus: [];
		blur: [event: FocusEvent];
		change: [value: string];
		prefixIconClick: [];
		suffixIconClick: [];
	}>();

	const inputRef = ref<HTMLInputElement | null>(null);
	const inputContainerRef = ref<HTMLDivElement | null>(null);
	const passwordVisible = ref(false);

	const iconSize = computed<BoIconSize>(() => {
		return INPUT_MANIFEST.styles.icons.size[props.size || 'default'];
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return INPUT_MANIFEST.styles.labels.fontSize;
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return INPUT_MANIFEST.styles.helpers.fontSize;
	});

	const showPasswordToggle = computed<boolean>(() => {
		return (
			props.type === 'password' && !props.disabled && !!props.modelValue && !!props.revealPassword
		);
	});

	const helperTextId = computed<string>(() => `${props.id}-helper`);

	const inputType = computed<string>(() => {
		if (props.type === 'password' && passwordVisible.value) {
			return 'text';
		}
		return props.type || 'text';
	});

	const containerClassValues = computed<string>(() => {
		const baseClasses: string[] = [
			INPUT_MANIFEST.styles.container.base,
			INPUT_MANIFEST.styles.variant[props.variant || 'default'],
			INPUT_MANIFEST.styles.state[props.state || 'default'],
			INPUT_MANIFEST.styles.size[props.size || 'default'],
		];

		if (props.disabled) {
			baseClasses.push(INPUT_MANIFEST.styles.container.disabled as string);
		}

		return mergeTwClasses(...baseClasses);
	});

	const inputClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.input.base);
	});

	const inputContainerClassValues = computed<string>(() => {
		const classes: string[] = [
			INPUT_MANIFEST.styles.inputContainer.base,
			INPUT_MANIFEST.styles.padding[props.size || 'default'],
		];

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push(INPUT_MANIFEST.styles.inputContainer.withPrefixIcon as string);
		}

		if ((props.suffixIcon && props.suffixIcon !== 'none') || showPasswordToggle.value) {
			classes.push(INPUT_MANIFEST.styles.inputContainer.withSuffixIcon as string);
		}

		return mergeTwClasses(...classes);
	});

	const prefixIconClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.icons.prefix);
	});

	const suffixIconClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.icons.suffix);
	});

	const labelContainerClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.container);
	});

	const labelClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.label);
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.required);
	});

	const helperContainerClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.helpers.container);
	});

	const errorContainerClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.helpers.error);
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.base);
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

	function onInput(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			emit('update:modelValue', event.target.value);
		}
	}

	function onBlur(event: FocusEvent) {
		emit('blur', event);
	}

	function onChange(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			emit('change', event.target.value);
		}
	}

	function togglePasswordVisibility() {
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
	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		display: none;
	}

	input[type='password']::-ms-reveal,
	input[type='password']::-ms-clear {
		display: none;
	}
</style>
