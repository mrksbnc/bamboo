<template>
	<div class="checkbox-wrapper">
		<div class="flex items-center">
			<input
				:id="inputId"
				v-model="modelValue"
				type="checkbox"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:name="name"
				:class="checkboxClass"
				:aria-describedby="getAriaDescribedBy"
				:aria-invalid="state === BoCheckboxState.invalid ? 'true' : 'false'"
				:aria-disabled="disabled ? 'true' : 'false'"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
				@change="$emit('change', $event)"
			/>
			<label
				v-if="label"
				:for="inputId"
				class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
				:class="{ 'cursor-not-allowed opacity-70': disabled }"
			>
				{{ label }}
				<span
					v-if="required"
					class="text-red-500"
					aria-hidden="true"
					>*<span class="sr-only">(required)</span></span
				>
			</label>
		</div>
		<span
			v-if="description && StringUtils.isEmptyStr(errorMessage)"
			:id="descriptionId"
			class="mt-1 ml-6 block text-sm text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</span>
		<span
			v-if="errorMessage && state === BoCheckboxState.invalid"
			:id="errorId"
			class="mt-1 ml-6 flex items-center gap-1 text-sm text-red-600 dark:text-red-500"
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
import { BoCheckboxSize, BoCheckboxState } from './constants';
import type { BoCheckboxProps } from './types';

const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur']);

const props = withDefaults(defineProps<BoCheckboxProps>(), {
	disabled: false,
	readonly: false,
	required: false,
	state: BoCheckboxState.none,
	size: BoCheckboxSize.default,
});

const modelValue = defineModel<boolean>('modelValue', { required: true });

const inputId = computed<string>(
	() => props.id ?? IdentityUtils.generateRandomIdWithPrefix('checkbox'),
);

const descriptionId = ref(AccessibilityUtils.generateAccessibleId('checkbox-desc'));
const errorId = ref(AccessibilityUtils.generateAccessibleId('checkbox-error'));

// Compute aria-describedby based on presence of description or error
const getAriaDescribedBy = computed(() => {
	const ids = [];
	if (props.description && StringUtils.isEmptyStr(props.errorMessage)) {
		ids.push(descriptionId.value);
	}
	if (props.errorMessage && props.state === BoCheckboxState.invalid) {
		ids.push(errorId.value);
	}
	return ids.length > 0 ? ids.join(' ') : undefined;
});

const checkboxClass = computed<string>(() => {
	const baseClasses =
		'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600';

	const sizeClasses = {
		[BoCheckboxSize.small]: 'h-3 w-3',
		[BoCheckboxSize.default]: 'h-4 w-4',
		[BoCheckboxSize.large]: 'h-5 w-5',
	};

	let classes = TailwindUtils.merge(baseClasses, sizeClasses[props.size]);

	if (props.disabled) {
		classes = TailwindUtils.merge(classes, 'cursor-not-allowed opacity-50 dark:opacity-40');
	}

	if (props.state === BoCheckboxState.invalid) {
		classes = TailwindUtils.merge(
			classes,
			'border-red-500 focus:ring-red-500 text-red-600 dark:border-red-500 dark:focus:ring-red-500',
		);
	} else if (props.state === BoCheckboxState.valid) {
		classes = TailwindUtils.merge(
			classes,
			'border-green-500 focus:ring-green-500 text-green-600 dark:border-green-500 dark:focus:ring-green-500',
		);
	}

	return classes;
});

// Add a watcher for state changes to announce errors to screen readers
watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoCheckboxState.invalid &&
			props.errorMessage &&
			oldState !== BoCheckboxState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			AccessibilityUtils.announceToScreenReader(props.errorMessage, 'assertive');
		} else if (newState === BoCheckboxState.valid && oldState === BoCheckboxState.invalid) {
			// Announce when field becomes valid after being invalid
			AccessibilityUtils.announceToScreenReader('Field is now valid', 'polite');
		}
	},
);
</script>
