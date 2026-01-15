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
				<!-- Pills section -->
				<bo-input-pill v-for="pill in pills" :key="pill.id" :pill="pill" @remove="onPillRemove" />

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
				<bo-icon size="sm" icon="alert_circle" variant="danger" />
				<bo-text :id="helperTextId" :font-size="hintFontSize" variant="danger" :value="error" />
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
	import { IdentityService, useBoInput, type BoInputProps } from '@mrksbnc/bamboo-core';
	import { useDebounceFn, useResizeObserver } from '@vueuse/core';

	import { computed, onMounted, ref } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoText } from '../bo-text';
	import BoInputPill from './bo-input-pill.vue';

	interface Props extends BoInputProps {
		modelValue?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		id: () => IdentityService.instance.getComponentId('bo-input'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-input'),
		size: 'md',
		state: 'default',
		variant: 'default',
		type: 'text',
		prefixIcon: 'none',
		suffixIcon: 'none',
		revealPassword: false,
		pills: () => [],
		horizontalScroll: false,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		focus: [];
		blur: [event: FocusEvent];
		change: [value: string];
		prefixIconClick: [];
		suffixIconClick: [];
		pillRemove: [id: string];
	}>();

	const inputRef = ref<HTMLInputElement | null>(null);
	const inputContainerRef = ref<HTMLDivElement | null>(null);
	const passwordVisible = ref(false);

	const {
		containerClassValues,
		inputClassValues,
		inputContainerClassValues,
		prefixIconClassValues,
		suffixIconClassValues,
		labelContainerClassValues,
		labelClassValues,
		requiredIndicatorClassValues,
		helperContainerClassValues,
		errorContainerClassValues,
		iconSize,
		labelFontSize,
		hintFontSize,
		showPasswordToggle,
		classValues,
	} = useBoInput(props, {
		modelValue: props.modelValue,
		passwordVisible: passwordVisible.value,
	});

	const helperTextId = computed<string>(() => `${props.id}-helper`);

	const inputType = computed<string>(() => {
		if (props.type === 'password' && passwordVisible.value) {
			return 'text';
		}
		return props.type || 'text';
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

	function onPillRemove(id: string) {
		emit('pillRemove', id);
	}

	function scrollToEnd(): void {
		if (inputContainerRef.value != null) {
			if (props.horizontalScroll) {
				inputContainerRef.value.scrollLeft = inputContainerRef.value.scrollWidth;
			} else {
				inputContainerRef.value.scrollTop = inputContainerRef.value.scrollHeight;
			}
		}
	}

	function focus(): void {
		inputRef.value?.focus();
	}

	const debouncedScrollToEnd = useDebounceFn(scrollToEnd, 10);

	defineExpose({ focus });

	useResizeObserver(inputContainerRef, () => {
		debouncedScrollToEnd();
	});

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

	.scrollbar-none::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-none {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
