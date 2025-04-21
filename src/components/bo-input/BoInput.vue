<template>
	<div class="bo-input w-full">
		<div class="flex items-center gap-1">
			<bo-text
				v-if="label"
				:for="inputId"
				:value="label"
				:size="BoFontSize.sm"
				class="mb-1"
			/>
			<span
				v-if="required"
				class="pl-0.5 text-red-500"
			>
				*
			</span>
		</div>
		<div class="relative flex items-center">
			<div
				v-if="prefixIcon && prefixIcon !== Icon.none"
				class="pointer-events-none absolute inset-y-0 left-0 flex translate-x-[4px] items-center"
			>
				<bo-icon
					:icon="prefixIcon"
					:size="iconSize"
					class="bo-input__prefix-icon"
					aria-hidden="true"
				/>
			</div>
			<input
				:id="inputId"
				:name="name"
				:type="type"
				:value="modelValue"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:autofocus="autofocus"
				:placeholder="placeholder"
				:class="inputClasses"
				:aria-label="ariaLabel"
				:aria-describedby="helperTextId"
				:aria-invalid="state === BoInputState.error"
				@input="onInput"
				ref="inputRef"
			/>
			<div
				v-if="suffixIcon && suffixIcon !== Icon.none"
				class="pointer-events-none absolute inset-y-0 right-0 flex -translate-x-[4px] items-center"
			>
				<bo-icon
					:icon="suffixIcon"
					:size="iconSize"
					class="bo-input__suffix-icon"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div
			v-if="error"
			class="flex items-center gap-1 pt-1.5"
		>
			<bo-icon
				:size="BoSize.small"
				:icon="Icon.alert_circle"
				:color="BoColor.red_600"
			/>
			<bo-text
				:id="helperTextId"
				:size="BoFontSize.sm"
				:class="helperTextClasses"
				:value="error"
			/>
		</div>
		<bo-text
			v-if="description"
			:id="helperTextId"
			:value="description"
			:size="BoFontSize.sm"
			:class="helperTextClasses"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoText } from '@/components/bo-text';
import { IdentityService, TailwindService } from '@/services';
import { BoColor, BoSize } from '@/shared';
import { computed, ref, toRefs } from 'vue';
import {
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
	type BoInputProps,
} from './bo-input';

const props = withDefaults(defineProps<BoInputProps>(), {
	id: () => IdentityService.instance.generateId('bo-input'),
	variant: () => BoInputVariant.default,
	state: () => BoInputState.default,
	size: () => BoInputSize.default,
	type: () => BoInputType.text,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	revealPassword: false,
});

const emit = defineEmits<{
	'update:modelValue': [value: string];
}>();

const {
	modelValue,
	variant,
	state,
	size,
	label,
	disabled,
	required,
	type,
	description,
	error,
	prefixIcon,
	suffixIcon,
	id,
} = toRefs(props);

const inputRef = ref<HTMLInputElement | null>(null);

const inputId = computed<string>(() => {
	return id.value;
});

const helperTextId = computed<string>(() => {
	return `${inputId.value}-helper`;
});

const baseInputClasses: Record<string, string> = {
	common: /*tw*/ 'bo-input__field w-full transition-colors duration-200',
	disabled:
		/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50 disabled:text-neutral-400 disabled:bg-neutral-100',
	readonly: /*tw*/ 'readonly:cursor-not-allowed',
	required: /*tw*/ 'required:border required:border-red-500',
};

const sizeClasses: Record<BoInputSize, string> = {
	[BoInputSize.small]: /*tw*/ 'py-2 text-xs',
	[BoInputSize.default]: /*tw*/ 'py-2.5 text-sm',
	[BoInputSize.large]: /*tw*/ 'py-3 text-base',
};

const variantClasses: Record<BoInputVariant, Record<BoInputState, string>> = {
	[BoInputVariant.default]: {
		[BoInputState.default]: /*tw*/ 'bg-transparent border border-neutral-300 focus:border-blue-500',
		[BoInputState.error]: /*tw*/ 'bg-transparent border border-red-500 focus:border-red-500',
		[BoInputState.success]: /*tw*/ 'bg-transparent border border-green-600 focus:border-green-600',
	},
	[BoInputVariant.filled]: {
		[BoInputState.default]: /*tw*/ 'bg-neutral-100 focus:border-blue-500',
		[BoInputState.error]: /*tw*/ 'bg-neutral-100 focus:border-red-500',
		[BoInputState.success]: /*tw*/ 'bg-neutral-100 focus:border-green-600',
	},
	[BoInputVariant.underlined]: {
		[BoInputState.default]:
			/*tw*/ 'bg-transparent border-b border-neutral-300 focus:border-blue-500 rounded-none focus:outline-none dark:border-neutral-600 dark:text-white',
		[BoInputState.error]:
			/*tw*/ 'bg-transparent border-b border-red-700 focus:border-red-700 rounded-none focus:outline-none dark:border-red-700 dark:text-white',
		[BoInputState.success]:
			/*tw*/ 'bg-transparent border-b border-green-700 focus:border-green-700 rounded-none focus:outline-none dark:border-green-700 dark:text-white',
	},
};

const sizeTextClasses: Record<BoInputSize, string> = {
	[BoInputSize.small]: /*tw*/ 'text-sm',
	[BoInputSize.default]: /*tw*/ 'text-sm',
	[BoInputSize.large]: /*tw*/ 'text-base',
};

const helperTextColorClasses: Record<BoInputState, string> = {
	[BoInputState.default]: /*tw*/ 'text-neutral-600 dark:text-neutral-500',
	[BoInputState.error]: /*tw*/ 'text-red-500 dark:text-red-500',
	[BoInputState.success]: /*tw*/ 'text-green-600 dark:text-green-600',
};

const inputType = computed<string>(() => {
	return type.value ?? BoInputType.text;
});

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoInputSize.small:
			return BoSize.small;
		case BoInputSize.default:
			return BoSize.default;
		case BoInputSize.large:
			return BoSize.large;
		default:
			return BoSize.default;
	}
});

const iconPadding = computed<string>(() => {
	const hasPrefixIcon = prefixIcon.value && prefixIcon.value !== Icon.none;
	const hasSuffixIcon = suffixIcon.value && suffixIcon.value !== Icon.none;

	if (hasPrefixIcon && hasSuffixIcon) {
		return /*tw*/ 'px-8';
	}

	if (hasPrefixIcon) {
		if (size.value === BoInputSize.small) {
			return /*tw*/ 'pl-8 pr-2';
		}
		return /*tw*/ 'pl-8 pr-4';
	}

	if (hasSuffixIcon) {
		if (size.value === BoInputSize.small) {
			return /*tw*/ 'pl-2 pr-8';
		}
		return /*tw*/ 'pl-4 pr-8';
	}

	return /*tw*/ 'px-3';
});

const roundedClasses = computed<string>(() => {
	return variant.value === BoInputVariant.underlined ? /*tw*/ '' : /*tw*/ 'rounded-lg';
});

const inputClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		iconPadding.value,
		roundedClasses.value,
		baseInputClasses.common,
		baseInputClasses.disabled,
		baseInputClasses.readonly,
		baseInputClasses.required,
		sizeClasses[size.value],
		sizeTextClasses[size.value],
		variantClasses[variant.value][state.value],
	);
});

const helperTextClasses = computed<string>(() => {
	return helperTextColorClasses[state.value];
});

function onInput(event: Event) {
	emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>
