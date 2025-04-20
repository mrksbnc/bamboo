<template>
	<div class="input-wrapper w-full">
		<label
			v-if="label"
			:for="inputId"
			class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
		>
			{{ label }}
			<span
				v-if="required"
				class="text-red-500"
				aria-hidden="true"
				>*<span class="sr-only">(required)</span></span
			>
		</label>
		<div
			class="relative"
			:class="{ flex: prefixIcon || suffixIcon }"
		>
			<div
				v-if="prefixIcon"
				class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
				aria-hidden="true"
			>
				<bo-icon
					:icon="prefixIcon"
					class="h-5 w-5 text-gray-500 dark:text-gray-400"
				/>
			</div>
			<input
				:id="inputId"
				v-model="modelValue"
				:type="type"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:name="name"
				:class="inputClass"
				:aria-describedby="getAriaDescribedBy"
				:aria-invalid="state === BoInputState.invalid ? 'true' : 'false'"
				:aria-disabled="disabled ? 'true' : 'false'"
				:aria-readonly="readonly ? 'true' : 'false'"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
				@input="$emit('input', $event)"
			/>
			<button
				v-if="clearable && modelValue"
				type="button"
				class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
				aria-label="Clear input"
				@click="handleClear"
			>
				<bo-icon
					:icon="Icon.x"
					:size="BoSize.small"
					aria-hidden="true"
				/>
			</button>
			<div
				v-else-if="suffixIcon"
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
				aria-hidden="true"
			>
				<bo-icon
					:icon="suffixIcon"
					class="text-gray-500 dark:text-gray-400"
				/>
			</div>
			<div
				v-if="isLoading"
				class="loading-indicator absolute inset-y-0 right-0 flex items-center pr-3"
				aria-hidden="true"
			>
				<span
					v-if="loaderVariant === BoInputLoaderVariant.spinner"
					class="loading-spinner"
				>
					<!-- Spinner content -->
				</span>
				<span
					v-else-if="loaderVariant === BoInputLoaderVariant.pulse"
					class="loading-pulse"
				>
					<!-- Pulse content -->
				</span>
			</div>
		</div>
		<span
			v-if="description && StringUtils.isEmptyStr(errorMessage)"
			:id="descriptionId"
			class="mt-1 text-sm text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</span>
		<span
			v-if="errorMessage && state === BoInputState.invalid"
			:id="errorId"
			class="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-500"
			role="alert"
			aria-live="assertive"
		>
			<bo-icon
				:icon="Icon.alert_circle"
				:size="BoSize.small"
				aria-hidden="true"
			/>
			{{ errorMessage }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoSize } from '@/shared';
import { AccessibilityUtils, StringUtils, TailwindUtils } from '@/utils';
import { IdentityUtils } from '@/utils/identity_utils';
import { computed, ref, watch } from 'vue';
import {
	BoInputLoaderVariant,
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
} from './constants';
import type { BoInputProps } from './types';

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'clear']);

const props = withDefaults(defineProps<BoInputProps>(), {
	type: BoInputType.text,
	placeholder: '',
	disabled: false,
	readonly: false,
	required: false,
	state: BoInputState.none,
	size: BoInputSize.default,
	variant: BoInputVariant.default,
	clearable: false,
	prefixIcon: null,
	suffixIcon: null,
	loaderVariant: BoInputLoaderVariant.spinner,
});

const modelValue = defineModel<string>('modelValue', { required: true });

const inputId = computed<string>(
	() => props.id ?? IdentityUtils.generateRandomIdWithPrefix('input'),
);

const descriptionId = ref(AccessibilityUtils.generateAccessibleId('input-desc'));
const errorId = ref(AccessibilityUtils.generateAccessibleId('input-error'));

// Compute aria-describedby based on presence of description or error
const getAriaDescribedBy = computed(() => {
	const ids = [];
	if (props.description && StringUtils.isEmptyStr(props.errorMessage)) {
		ids.push(descriptionId.value);
	}
	if (props.errorMessage && props.state === BoInputState.invalid) {
		ids.push(errorId.value);
	}
	return ids.length > 0 ? ids.join(' ') : undefined;
});

const inputClass = computed<string>(() => {
	const baseClasses =
		'block w-full focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors';

	const sizeClasses = {
		[BoInputSize.small]: 'px-3 py-1.5 text-xs',
		[BoInputSize.default]: 'px-3 py-2 text-sm',
		[BoInputSize.large]: 'px-4 py-3 text-base',
	};

	const variantClasses = {
		[BoInputVariant.default]:
			'border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500/30 focus:border-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:ring-blue-500/40 dark:focus:border-blue-500',
		[BoInputVariant.filled]:
			'border border-transparent rounded-md bg-gray-100 text-gray-900 focus:ring-blue-500/30 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-500/40 dark:focus:border-blue-500',
		[BoInputVariant.underline]:
			'border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 focus:ring-0 focus:ring-offset-0 text-gray-900 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 outline-none',
	};

	let classes = TailwindUtils.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	);

	if (props.prefixIcon) {
		classes = TailwindUtils.merge(classes, 'pl-10');
	}

	if ((props.suffixIcon && !props.clearable) || (props.clearable && props.modelValue)) {
		classes = TailwindUtils.merge(classes, 'pr-10');
	}

	if (props.disabled) {
		classes = TailwindUtils.merge(
			classes,
			'cursor-not-allowed bg-gray-100 text-gray-500 placeholder-gray-400 dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-500',
		);
	} else if (props.readonly) {
		classes = TailwindUtils.merge(
			classes,
			'text-gray-500 placeholder-gray-400 dark:text-gray-400 dark:placeholder-gray-500',
		);
	}

	if (props.state === BoInputState.invalid) {
		classes = TailwindUtils.merge(
			classes,
			'border-red-500 focus:ring-red-500/30 focus:border-red-500 text-red-900 placeholder-red-400 dark:border-red-500 dark:focus:border-red-500',
		);
	} else if (props.state === BoInputState.valid) {
		classes = TailwindUtils.merge(
			classes,
			'border-green-500 focus:ring-green-500/30 focus:border-green-500 text-green-900 placeholder-green-400 dark:border-green-500 dark:focus:border-green-500',
		);
	}

	return classes;
});

function handleClear() {
	modelValue.value = '';
	emit('clear');
}

// Add a watcher for state changes to announce errors to screen readers
watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoInputState.invalid &&
			props.errorMessage &&
			oldState !== BoInputState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			AccessibilityUtils.announceToScreenReader(props.errorMessage, 'assertive');
		} else if (newState === BoInputState.valid && oldState === BoInputState.invalid) {
			// Announce when field becomes valid after being invalid
			AccessibilityUtils.announceToScreenReader('Field is now valid', 'polite');
		}
	},
);

// Add a watcher for error message changes
watch(
	() => props.errorMessage,
	(newMessage, oldMessage) => {
		if (newMessage && props.state === BoInputState.invalid && newMessage !== oldMessage) {
			// Announce new error messages
			AccessibilityUtils.announceToScreenReader(newMessage, 'assertive');
		}
	},
);
</script>
