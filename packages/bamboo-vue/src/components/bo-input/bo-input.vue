<template>
	<div :class="baseClasses">
		<!-- Label section -->
		<div v-if="label || required || $slots.topRightContent" :class="labelContainerClasses">
			<div :class="labelClasses">
				<span v-if="label">{{ label }}</span>
				<span v-if="required" :class="requiredClasses">*</span>
			</div>
			<slot name="topRightContent"></slot>
		</div>

		<!-- Input container -->
		<div :class="containerClasses">
			<!-- Prefix icon -->
			<div v-if="prefixIcon" :class="prefixIconClasses" @click="emit('prefixIconClick')">
				<bo-icon :icon="prefixIcon" size="sm" aria-hidden="true" />
			</div>

			<!-- Input field -->
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
				:class="inputClasses"
				:aria-label="ariaLabel"
				:aria-describedby="helperTextId"
				:aria-invalid="state === 'invalid'"
				@focus="emit('focus')"
				@blur="emit('blur', $event)"
				@change="emit('change', $event)"
			/>

			<!-- Suffix/action icons -->
			<div v-if="suffixIcon || showPasswordToggle" :class="suffixIconClasses">
				<bo-icon
					v-if="suffixIcon && !showPasswordToggle"
					:icon="suffixIcon"
					size="sm"
					aria-hidden="true"
				/>
				<bo-icon
					v-if="showPasswordToggle"
					:icon="passwordVisible ? 'eye_off' : 'eye'"
					size="sm"
					@click.stop="togglePasswordVisibility"
				/>
			</div>
		</div>

		<!-- Helper text/error container -->
		<div v-if="error || hint" :class="helperContainerClasses">
			<div v-if="error" :class="errorClasses">
				<bo-icon size="sm" icon="alert_circle" />
				<span :id="helperTextId">{{ error }}</span>
			</div>
			<span v-else-if="hint" :id="helperTextId" class="text-sm text-gray-600 dark:text-gray-400">
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
	import { computed, onMounted, ref } from 'vue';
	import { BoIcon } from '../bo-icon';

	const props = withDefaults(defineProps<BoInputProps>(), {
		id: () => generateComponentId('input'),
		dataTestId: () => generateDataTestId('input'),
		role: () => INPUT_MANIFEST.defaults.role,
		state: () => INPUT_MANIFEST.defaults.state,
		type: () => INPUT_MANIFEST.defaults.type,
	});

	const emit = defineEmits<{
		focus: [];
		blur: [event: FocusEvent];
		change: [event: Event];
		prefixIconClick: [];
		suffixIconClick: [];
	}>();

	// Use defineModel for v-model
	const model = defineModel<string>({ default: '' });

	const inputRef = ref<HTMLInputElement | null>(null);
	const passwordVisible = ref(false);

	const showPasswordToggle = computed<boolean>(() => {
		return props.type === 'password' && !props.disabled && !!model.value && !!props.revealPassword;
	});

	const helperTextId = computed<string>(() => `${props.id}-helper`);

	const inputType = computed<string>(() => {
		if (props.type === 'password' && passwordVisible.value) {
			return 'text';
		}
		return props.type || 'text';
	});

	const baseClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.base, props.fullWidth ? 'w-full' : '');
	});

	const containerClasses = computed<string>(() => {
		const classes = [
			INPUT_MANIFEST.styles.container.base,
			INPUT_MANIFEST.styles.state[props.state || 'default'],
		];

		return mergeTwClasses(...classes);
	});

	const inputClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.input.base);
	});

	const prefixIconClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.icons.prefix);
	});

	const suffixIconClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.icons.suffix);
	});

	const labelContainerClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.container);
	});

	const labelClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.label);
	});

	const requiredClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.required);
	});

	const helperContainerClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.helpers.container);
	});

	const errorClasses = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.helpers.error);
	});

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
