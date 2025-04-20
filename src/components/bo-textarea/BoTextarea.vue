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
				v-model="modelValue"
				:id="textareaId"
				:rows="rows"
				:wrap="wrap"
				:name="name"
				:required="required"
				:readonly="readonly"
				:disabled="disabled"
				:class="textareaClass"
				:placeholder="placeholder"
				:style="textareaStyle"
				:aria-readonly="readonly"
				:aria-disabled="disabled"
				:aria-invalid="ariaInvalid"
				:aria-describedby="ariaDescribedBy"
				@input="$emit('input', $event)"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
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
			v-if="description && StringService.instance.isEmptyStr(errorMessage)"
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
import { BoIcon, Icon } from '@/components/bo-icon';
import {
	AccessibilityService,
	AriaLivePriority,
	IdentityService,
	StringService,
	TailwindService,
} from '@/services';
import { BoSize } from '@/shared';
import { computed, ref, watch, type StyleValue } from 'vue';
import {
	BoTextareaResize,
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
	type BoTextareaProps,
} from './bo-textarea';

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'clear']);

const props = withDefaults(defineProps<BoTextareaProps>(), {
	rows: 3,
	placeholder: '',
	disabled: false,
	readonly: false,
	required: false,
	clearable: false,
	state: BoTextareaState.none,
	size: BoTextareaSize.default,
	resize: BoTextareaResize.none,
	variant: BoTextareaVariant.default,
});

const modelValue = defineModel<string>('modelValue', { required: true });

const errorId = ref(IdentityService.instance.getId('textarea-error'));
const descriptionId = ref(IdentityService.instance.getId('textarea-desc'));

const textareaId = computed<string>(() => props.id ?? IdentityService.instance.getId('textarea'));

const getAriaDescribedBy = computed<string | undefined>(() => {
	const ids = [];
	if (props.description && StringService.instance.isEmptyStr(props.errorMessage)) {
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

	let classes = TailwindService.instance.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	);

	if (props.disabled) {
		classes = TailwindService.instance.merge(
			classes,
			'cursor-not-allowed bg-gray-100 text-gray-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-500',
		);
	} else if (props.readonly) {
		classes = TailwindService.instance.merge(
			classes,
			'text-gray-500 placeholder-gray-400 dark:text-gray-400 dark:placeholder-gray-500',
		);
	}

	if (props.state === BoTextareaState.invalid) {
		classes = TailwindService.instance.merge(
			classes,
			'border-red-500 focus:ring-red-500/30 focus:border-red-500 text-red-900 placeholder-red-400 dark:border-red-500 dark:focus:border-red-500',
		);
	} else if (props.state === BoTextareaState.valid) {
		classes = TailwindService.instance.merge(
			classes,
			'border-green-500 focus:ring-green-500/30 focus:border-green-500 text-green-900 placeholder-green-400 dark:border-green-500 dark:focus:border-green-500',
		);
	}

	return classes;
});

const textareaStyle = computed<StyleValue>(() => {
	return { resize: props.resize };
});

const ariaDescribedBy = computed<string | undefined>(() => {
	return getAriaDescribedBy.value;
});

const ariaInvalid = computed<boolean>(() => {
	return props.state === BoTextareaState.invalid;
});

function clearTextarea(): void {
	modelValue.value = '';
	emit('clear');
}

watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoTextareaState.invalid &&
			props.errorMessage &&
			oldState !== BoTextareaState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			AccessibilityService.instance.announceToScreenReader(
				props.errorMessage,
				AriaLivePriority.assertive,
			);
		} else if (newState === BoTextareaState.valid && oldState === BoTextareaState.invalid) {
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
		if (newMessage && props.state === BoTextareaState.invalid && newMessage !== oldMessage) {
			// Announce new error messages
			AccessibilityService.instance.announceToScreenReader(newMessage, AriaLivePriority.assertive);
		}
	},
);
</script>
