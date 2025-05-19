<template>
	<div class="bo-input-wrapper flex w-full flex-col transition-all duration-200">
		<!-- Label -->
		<div
			v-if="showTopContainer"
			class="flex items-center"
		>
			<div class="flex items-center gap-1 pb-1">
				<bo-text
					v-if="label"
					:value="label"
					:size="BoFontSize.sm"
				/>
				<bo-text
					v-if="required"
					value="*"
					:size="BoFontSize.sm"
					:color="BoTextColor.danger"
					:weight="BoFontWeight.medium"
				/>
			</div>
		</div>
		<!-- Input -->
		<div
			ref="inputContainerRef"
			class="relative flex items-center"
		>
			<!-- Prefix Icon -->
			<bo-icon
				v-if="showPrefixIcon"
				:icon="prefixIcon"
				:size="inputIconSize"
				:color="BoColor.neutral_400"
				:class="['absolute left-3 text-neutral-500 dark:text-gray-400']"
				aria-hidden="true"
			/>
			<!-- Input Container -->
			<input
				ref="inputRef"
				v-model="modelValue"
				:type="inputType"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:autofocus="autofocus"
				:placeholder="placeholder"
				:class="inputClasses"
				:aria-label="ariaLabel"
				:aria-invalid="state === BoInputState.error"
				@input="onInput"
				@focus="onFocus"
				@blur="onBlur"
				@change="onChange"
			/>
			<!-- Suffix Icon -->
			<div :class="['absolute right-3 text-neutral-500 dark:text-gray-400']">
				<bo-icon
					v-if="showSuffixIcon"
					:icon="suffixIcon"
					:size="inputIconSize"
					:color="BoColor.neutral_400"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div
			v-if="showHelperContainer"
			class="flex items-center pt-1"
		>
			<div
				v-if="error"
				class="flex items-center gap-1"
			>
				<bo-icon
					:icon="Icon.alert_circle"
					:size="BoSize.small"
					:color="BoColor.red_600"
					class="mr-1"
				/>
				<bo-text
					:value="error"
					:size="BoFontSize.sm"
					:color="BoTextColor.danger"
				/>
			</div>

			<bo-text
				v-if="required && !error"
				value="This field is required"
				:size="BoFontSize.sm"
				:color="BoTextColor.danger"
			/>
			<bo-text
				v-if="description && !error"
				:value="description"
				:size="BoFontSize.sm"
				:color="BoTextColor.secondary"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { TailwindService } from '@/services';
import { IdentityService } from '@/services/identity-service.js';
import { BoColor } from '@/shared/bo-color.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, ref } from 'vue';
import { BoInputSize, BoInputState, BoInputType, type BoInputProps } from './bo-input.js';

const props = withDefaults(defineProps<BoInputProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-input'),
	name: () => `bo-input-${Date.now()}`,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	type: () => BoInputType.text,
	size: () => BoInputSize.default,
	state: () => BoInputState.default,
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'focus'): void;
	(e: 'blur', event: Event): void;
	(e: 'change', value: string): void;
}>();

const modelValue = defineModel<string>({
	required: true,
	default: '',
});

const passwordVisible = ref(false);

const inputRef = ref<HTMLInputElement>();
const inputContainerRef = ref<HTMLDivElement>();

const showPrefixIcon = computed<boolean>(() => {
	return props.prefixIcon && props.prefixIcon !== Icon.none;
});

const showSuffixIcon = computed<boolean>(() => {
	return props.suffixIcon && props.suffixIcon !== Icon.none;
});

const inputIconSize = computed<BoSize>(() => {
	switch (props.size) {
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

const showTopContainer = computed<boolean>(() => {
	return !!props.label || !!props.required;
});

const showHelperContainer = computed<boolean>(() => {
	return !!props.error || !!props.description || !!props.required;
});

const inputType = computed<string>(() => {
	if (props.type === BoInputType.password && passwordVisible.value) {
		return BoInputType.text;
	}
	return props.type;
});

const heightClasses: Record<string, string> = {
	[BoInputSize.small]: 'h-9', // Small
	[BoInputSize.default]: 'h-10', // Medium
	[BoInputSize.large]: 'h-11', // Large
};

const inputClasses = computed<string>(() => {
	const defaultClass =
		/*tw*/ 'flex w-full items-center justify-start rounded-md border bg-white shadow-[inset_-2px_-2px_6px_0px_rgba(245,245,245,0.25),0px_1px_2px_0px_rgba(16,16,16,0.05)] transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 dark:shadow-[inset_-2px_-2px_6px_0px_rgba(0,0,0,0.25),0px_1px_2px_0px_rgba(0,0,0,0.05)]';

	const focusClasses =
		/*tw*/ 'focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600';

	const disabledClasses =
		/*tw*/ 'disabled:border-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-500 dark:disabled:border-gray-800 dark:disabled:bg-gray-900 dark:disabled:text-gray-400 disabled:cursor-not-allowed';

	const readonlyClasses = props.readonly
		? /*tw*/ 'cursor-not-allowed border-neutral-200 bg-neutral-100 dark:border-gray-800 dark:bg-gray-900'
		: /*tw*/ '';

	let paddingClassArray: string[] = [];

	if (props.size === BoInputSize.small) {
		paddingClassArray.push(/*tw*/ 'py-1.5 px-2 text-sm');
	} else if (props.size === BoInputSize.default) {
		paddingClassArray.push(/*tw*/ 'py-2 px-3 text-sm');
	} else if (props.size === BoInputSize.large) {
		paddingClassArray.push(/*tw*/ 'py-2.5 px-4 text-lg');
	}

	if (props.prefixIcon && props.prefixIcon !== Icon.none) {
		paddingClassArray.push(/*tw*/ 'pl-8');
	}

	if (props.suffixIcon && props.suffixIcon !== Icon.none) {
		paddingClassArray.push(/*tw*/ 'pr-8');
	}

	const paddingClasses = paddingClassArray.join(' ');

	let stateClasses = '';

	if (props.state === BoInputState.error || props.required) {
		stateClasses = /*tw*/ 'border-red-500 ring-red-500 dark:border-red-600 dark:ring-red-600';
	} else if (props.state === BoInputState.success) {
		stateClasses =
			/*tw*/ 'border-green-500 ring-green-500 dark:border-green-600 dark:ring-green-600';
	} else if (props.state === BoInputState.warning) {
		stateClasses =
			/*tw*/ 'border-yellow-500 ring-yellow-500 dark:border-yellow-600 dark:ring-yellow-600';
	} else {
		stateClasses = /*tw*/ 'border-neutral-300 dark:border-gray-700';
	}

	return TailwindService.instance.merge(
		defaultClass,
		disabledClasses,
		paddingClasses,
		heightClasses.value,
		readonlyClasses,
		props.state === BoInputState.default && !props.required ? focusClasses : '',
		stateClasses,
	);
});

function onInput(event: Event): void {
	const target = event.target as HTMLInputElement;
	if (target.value) {
		emit('update:modelValue', target.value);
	}
}

function onFocus(): void {
	emit('focus');
}

function onBlur(event: Event): void {
	emit('blur', event);
}

function onChange(event: Event): void {
	const target = event.target as HTMLInputElement;
	emit('change', target.value);
}

defineExpose({
	inputRef,
	inputContainerRef,
});
</script>
