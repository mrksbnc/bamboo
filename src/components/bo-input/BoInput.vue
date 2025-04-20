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
				v-model="modelValue"
				:type="type"
				:name="name"
				:id="inputId"
				:class="inputClass"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:aria-disabled="disabled"
				:aria-readonly="readonly"
				:placeholder="placeholder"
				:aria-describedby="getAriaDescribedBy"
				:aria-invalid="state === BoInputState.invalid"
				@blur="$emit('blur', $event)"
				@focus="$emit('focus', $event)"
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
			v-if="description && StringService.instance.isEmptyStr(errorMessage)"
			:id="descriptionId"
			class="bo-input__description mt-1 text-sm text-gray-500 dark:text-gray-400"
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
import { BoIcon, Icon } from '@/components/bo-icon';
import {
	AccessibilityService,
	AriaLivePriority,
	IdentityService,
	StringService,
	TailwindService,
} from '@/services';
import { BoSize } from '@/shared';
import { computed, ref, watch } from 'vue';
import {
	BoInputLoaderVariant,
	type BoInputProps,
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
} from './bo-input';

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'input', event: Event): void;
	(e: 'focus', event: FocusEvent): void;
	(e: 'blur', event: FocusEvent): void;
	(e: 'clear'): void;
}>();

const props = withDefaults(defineProps<BoInputProps>(), {
	id: () => IdentityService.instance.getId('input'),
	placeholder: '',
	disabled: false,
	readonly: false,
	required: false,
	clearable: false,
	type: BoInputType.text,
	state: BoInputState.none,
	size: BoInputSize.default,
	variant: BoInputVariant.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	loaderVariant: BoInputLoaderVariant.spinner,
});

const modelValue = defineModel<string>('modelValue', { required: true });

const errorId = ref<string>(IdentityService.instance.getId('input-error'));
const descriptionId = ref<string>(IdentityService.instance.getId('input-desc'));

const inputId = computed<string>(() => props.id ?? IdentityService.instance.getId('input'));

const getAriaDescribedBy = computed<string | undefined>(() => {
	const ids = [];
	if (props.description && StringService.instance.isEmptyStr(props.errorMessage)) {
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

	let classes = TailwindService.instance.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	);

	if (props.prefixIcon) {
		classes = TailwindService.instance.merge(classes, 'pl-10');
	}

	if ((props.suffixIcon && !props.clearable) || (props.clearable && props.modelValue)) {
		classes = TailwindService.instance.merge(classes, 'pr-10');
	}

	if (props.disabled) {
		classes = TailwindService.instance.merge(
			classes,
			'cursor-not-allowed bg-gray-100 text-gray-500 placeholder-gray-400 dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-500',
		);
	} else if (props.readonly) {
		classes = TailwindService.instance.merge(
			classes,
			'text-gray-500 placeholder-gray-400 dark:text-gray-400 dark:placeholder-gray-500',
		);
	}

	if (props.state === BoInputState.invalid) {
		classes = TailwindService.instance.merge(
			classes,
			'border-red-500 focus:ring-red-500/30 focus:border-red-500 text-red-900 placeholder-red-400 dark:border-red-500 dark:focus:border-red-500',
		);
	} else if (props.state === BoInputState.valid) {
		classes = TailwindService.instance.merge(
			classes,
			'border-green-500 focus:ring-green-500/30 focus:border-green-500 text-green-900 placeholder-green-400 dark:border-green-500 dark:focus:border-green-500',
		);
	}

	return classes;
});

function handleClear(): void {
	modelValue.value = '';
	emit('clear');
}

watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoInputState.invalid &&
			props.errorMessage &&
			oldState !== BoInputState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			AccessibilityService.instance.announceToScreenReader(
				props.errorMessage,
				AriaLivePriority.assertive,
			);
		} else if (newState === BoInputState.valid && oldState === BoInputState.invalid) {
			// Announce when field becomes valid after being invalid
			AccessibilityService.instance.announceToScreenReader(
				'Field is now valid',
				AriaLivePriority.polite,
			);
		}
	},
);

watch(
	() => props.errorMessage,
	(newMessage, oldMessage) => {
		if (newMessage && props.state === BoInputState.invalid && newMessage !== oldMessage) {
			// Announce new error messages
			AccessibilityService.instance.announceToScreenReader(newMessage, AriaLivePriority.assertive);
		}
	},
);
</script>
