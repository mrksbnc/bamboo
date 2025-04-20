<template>
	<div class="radio-wrapper">
		<div class="flex items-center">
			<input
				v-model="modelValue"
				:id="inputId"
				type="radio"
				:name="name"
				:value="value"
				:class="radioClass"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:aria-disabled="disabled"
				:aria-describedby="getAriaDescribedBy"
				:aria-invalid="state === BoRadioState.invalid"
				@blur="emit('blur', $event)"
				@focus="emit('focus', $event)"
				@change="emit('change', $event)"
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
			v-if="description && isEmptyStr(errorMessage)"
			:id="descriptionId"
			class="mt-1 ml-6 block text-sm text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</span>
		<span
			v-if="errorMessage && state === BoRadioState.invalid"
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
import { AriaLivePriority, useAccessibility, useString, useTailwind } from '@/composables';
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { computed, ref, watch } from 'vue';
import { BoRadioSize, BoRadioState, type BoRadioProps } from './bo_radio';

const emit = defineEmits<{
	(e: 'update:modelValue', value: string | number | boolean): void;
	(e: 'change', event: Event): void;
	(e: 'focus', event: FocusEvent): void;
	(e: 'blur', event: FocusEvent): void;
}>();

const props = withDefaults(defineProps<BoRadioProps>(), {
	disabled: false,
	readonly: false,
	required: false,
	state: BoRadioState.none,
	size: BoRadioSize.default,
});

const modelValue = defineModel<string | number | boolean>('modelValue', { required: true });

const { merge } = useTailwind();
const { isEmptyStr } = useString();
const { announceToScreenReader } = useAccessibility();

const errorId = ref<string>(IdentityService.instance.getId('radio-error'));
const descriptionId = ref<string>(IdentityService.instance.getId('radio-desc'));

const inputId = computed<string>(() => props.id ?? IdentityService.instance.getId('radio'));

const getAriaDescribedBy = computed<string | undefined>(() => {
	const ids = [];
	if (props.description && isEmptyStr(props.errorMessage)) {
		ids.push(descriptionId.value);
	}
	if (props.errorMessage && props.state === BoRadioState.invalid) {
		ids.push(errorId.value);
	}
	return ids.length > 0 ? ids.join(' ') : undefined;
});

const radioClass = computed<string>(() => {
	const baseClasses =
		'rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600';

	const sizeClasses = {
		[BoRadioSize.small]: 'h-3 w-3',
		[BoRadioSize.default]: 'h-4 w-4',
		[BoRadioSize.large]: 'h-5 w-5',
	};

	let classes = merge(baseClasses, sizeClasses[props.size]);

	if (props.disabled) {
		classes = merge(classes, 'cursor-not-allowed opacity-50 dark:opacity-40');
	}

	if (props.state === BoRadioState.invalid) {
		classes = merge(
			classes,
			'border-red-500 focus:ring-red-500 text-red-600 dark:border-red-500 dark:focus:ring-red-500',
		);
	} else if (props.state === BoRadioState.valid) {
		classes = merge(
			classes,
			'border-green-500 focus:ring-green-500 text-green-600 dark:border-green-500 dark:focus:ring-green-500',
		);
	}

	return classes;
});

watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoRadioState.invalid &&
			props.errorMessage &&
			oldState !== BoRadioState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			announceToScreenReader(props.errorMessage, AriaLivePriority.assertive);
		} else if (newState === BoRadioState.valid && oldState === BoRadioState.invalid) {
			// Announce when field becomes valid after being invalid
			announceToScreenReader('Field is now valid', AriaLivePriority.polite);
		}
	},
);
</script>
