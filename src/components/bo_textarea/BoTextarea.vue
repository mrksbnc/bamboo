<template>
	<div class="textarea-wrapper w-full">
		<label
			v-if="label"
			:for="textareaId"
			class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
		>
			{{ label }}
			<span
				v-if="required"
				class="text-red-500"
				aria-hidden="true"
			>
				* <span class="sr-only">(required)</span>
			</span>
		</label>
		<div class="relative">
			<textarea
				:id="textareaId"
				v-model="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:name="name"
				:rows="rows"
				:wrap="wrap"
				:class="textareaClass"
				:style="{ resize: props.resize }"
				:aria-describedby="getAriaDescribedBy"
				:aria-invalid="state === BoTextareaState.invalid ? 'true' : 'false'"
				:aria-disabled="disabled ? 'true' : 'false'"
				:aria-readonly="readonly ? 'true' : 'false'"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
				@input="$emit('input', $event)"
			></textarea>
			<div
				v-if="clearable && modelValue"
				class="absolute top-2 right-2 cursor-pointer"
				@click="clearTextarea"
			>
				<bo-icon
					:icon="Icon.x"
					:size="BoSize.small"
					class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
					aria-hidden="true"
				/>
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
			v-if="errorMessage && state === BoTextareaState.invalid"
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
import { BoTextareaResize, BoTextareaSize, BoTextareaState, BoTextareaVariant } from './constants';
import type { BoTextareaProps } from './types';

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'clear']);

const props = withDefaults(defineProps<BoTextareaProps>(), {
	placeholder: '',
	disabled: false,
	readonly: false,
	required: false,
	rows: 3,
	state: BoTextareaState.none,
	size: BoTextareaSize.default,
	variant: BoTextareaVariant.default,
	resize: BoTextareaResize.none,
	clearable: false,
});

const modelValue = defineModel<string>('modelValue', { required: true });

const textareaId = computed<string>(
	() => props.id ?? IdentityUtils.generateRandomIdWithPrefix('textarea'),
);

const descriptionId = ref(AccessibilityUtils.generateAccessibleId('textarea-desc'));
const errorId = ref(AccessibilityUtils.generateAccessibleId('textarea-error'));

// Compute aria-describedby based on presence of description or error
const getAriaDescribedBy = computed(() => {
	const ids = [];
	if (props.description && StringUtils.isEmptyStr(props.errorMessage)) {
		ids.push(descriptionId.value);
	}
	if (props.errorMessage && props.state === BoTextareaState.invalid) {
		ids.push(errorId.value);
	}
	return ids.length > 0 ? ids.join(' ') : undefined;
});

const textareaClass = computed<string>(() => {
	const baseClasses =
		'block w-full focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors';

	const sizeClasses = {
		[BoTextareaSize.small]: 'px-3 py-1.5 text-xs',
		[BoTextareaSize.default]: 'px-3 py-2 text-sm',
		[BoTextareaSize.large]: 'px-4 py-3 text-base',
	};

	const variantClasses = {
		[BoTextareaVariant.default]:
			'border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500/30 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500/40 dark:focus:border-blue-500',
		[BoTextareaVariant.filled]:
			'border border-transparent rounded-md bg-gray-100 text-gray-900 focus:ring-blue-500/30 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-500/40 dark:focus:border-blue-500',
	};

	let classes = TailwindUtils.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	);

	if (props.disabled) {
		classes = TailwindUtils.merge(
			classes,
			'cursor-not-allowed bg-gray-100 text-gray-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-500',
		);
	} else if (props.readonly) {
		classes = TailwindUtils.merge(
			classes,
			'text-gray-500 placeholder-gray-400 dark:text-gray-400 dark:placeholder-gray-500',
		);
	}

	if (props.state === BoTextareaState.invalid) {
		classes = TailwindUtils.merge(
			classes,
			'border-red-500 focus:ring-red-500/30 focus:border-red-500 text-red-900 placeholder-red-400 dark:border-red-500 dark:focus:border-red-500',
		);
	} else if (props.state === BoTextareaState.valid) {
		classes = TailwindUtils.merge(
			classes,
			'border-green-500 focus:ring-green-500/30 focus:border-green-500 text-green-900 placeholder-green-400 dark:border-green-500 dark:focus:border-green-500',
		);
	}

	return classes;
});

const clearTextarea = () => {
	modelValue.value = '';
	emit('clear');
};

// Add a watcher for state changes to announce errors to screen readers
watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoTextareaState.invalid &&
			props.errorMessage &&
			oldState !== BoTextareaState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			AccessibilityUtils.announceToScreenReader(props.errorMessage, 'assertive');
		} else if (newState === BoTextareaState.valid && oldState === BoTextareaState.invalid) {
			// Announce when field becomes valid after being invalid
			AccessibilityUtils.announceToScreenReader('Field is now valid', 'polite');
		}
	},
);

// Add a watcher for error message changes
watch(
	() => props.errorMessage,
	(newMessage, oldMessage) => {
		if (newMessage && props.state === BoTextareaState.invalid && newMessage !== oldMessage) {
			// Announce new error messages
			AccessibilityUtils.announceToScreenReader(newMessage, 'assertive');
		}
	},
);
</script>
