<template>
	<div
		:class="wrapperClasses"
		:data-testid="constructAttribute(id, 'input-wrapper')"
	>
		<div
			v-if="showTopContainer"
			:class="INPUT_STYLE.layout.labelContainer"
			:data-testid="constructAttribute(id, 'input-label-container')"
		>
			<div :class="INPUT_STYLE.layout.labelGroup">
				<bo-text
					v-if="label"
					:id="constructAttribute(id, 'label')"
					:value="label"
					:size="BoFontSize.sm"
					:data-testid="constructAttribute(id, 'input-label')"
				/>
				<bo-text
					v-if="required"
					value="*"
					:size="BoFontSize.sm"
					:color="BoTextColor.danger"
					:weight="BoFontWeight.medium"
					:data-testid="constructAttribute(id, 'input-required-indicator')"
				/>
			</div>
		</div>
		<div
			ref="inputContainerRef"
			:class="INPUT_STYLE.layout.inputContainer"
			:data-testid="constructAttribute(id, 'input-container')"
		>
			<bo-icon
				v-if="showPrefixIcon"
				:icon="prefixIcon"
				:size="inputIconSize"
				:color="BoColor.neutral_400"
				:class="INPUT_STYLE.layout.prefixIcon"
				:data-testid="constructAttribute(id, 'input-prefix-icon')"
				:aria-hidden="true"
			/>
			<input
				ref="inputRef"
				v-bind="$attrs"
				v-model="modelValue"
				:type="inputType"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:autofocus="autofocus"
				:placeholder="placeholder"
				:class="inputClasses"
				:aria-label="ariaLabel"
				:aria-labelledby="label ? constructAttribute(id, 'label') : undefined"
				:aria-describedby="ariaDescribedBy"
				:aria-invalid="state === BoInputState.error"
				:aria-required="required ?? false"
				:data-testid="constructAttribute(id, 'input-field')"
				@input="onInput"
				@focus="onFocus"
				@blur="onBlur"
				@change="onChange"
			/>
			<div :class="INPUT_STYLE.layout.suffixIconContainer">
				<bo-icon
					v-if="showSuffixIcon"
					:icon="suffixIcon"
					:size="inputIconSize"
					:color="BoColor.neutral_400"
					:data-testid="constructAttribute(id, 'input-suffix-icon')"
					:aria-hidden="true"
				/>
			</div>
		</div>
		<div
			v-if="showHelperContainer"
			:class="INPUT_STYLE.layout.helperContainer"
			:data-testid="constructAttribute(id, 'input-helper-container')"
			role="group"
		>
			<div
				v-if="error"
				:id="constructAttribute(id, 'error')"
				:class="INPUT_STYLE.layout.errorContainer"
				role="alert"
				:data-testid="constructAttribute(id, 'input-error')"
			>
				<bo-icon
					:icon="Icon.alert_circle"
					:size="BoSize.small"
					:color="BoColor.red_600"
					:class="INPUT_STYLE.layout.errorIcon"
					:aria-hidden="true"
				/>
				<bo-text
					:value="error"
					:size="BoFontSize.sm"
					:color="BoTextColor.danger"
				/>
			</div>
			<bo-text
				v-if="required && !error"
				:id="constructAttribute(id, 'required')"
				value="This field is required"
				:size="BoFontSize.sm"
				:color="BoTextColor.danger"
				:data-testid="constructAttribute(id, 'input-required-message')"
			/>
			<bo-text
				v-if="description && !error"
				:id="constructAttribute(id, 'description')"
				:value="description"
				:size="BoFontSize.sm"
				:color="BoTextColor.secondary"
				:data-testid="constructAttribute(id, 'input-description')"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
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
	(e: 'focus'): void;
	(e: 'blur', event: Event): void;
	(e: 'change', value: string): void;
}>();

const modelValue = defineModel<string>({
	required: true,
	default: '',
});

const { constructAttribute } = useAttributes();

const passwordVisible = ref(false);

const inputRef = ref<HTMLInputElement>();
const inputContainerRef = ref<HTMLDivElement>();

const INPUT_STYLE = {
	layout: {
		wrapper: /*tw*/ 'bo-input-wrapper flex w-full flex-col transition-all duration-200',
		labelContainer: /*tw*/ 'flex items-center',
		labelGroup: /*tw*/ 'flex items-center gap-1 pb-1',
		inputContainer: /*tw*/ 'relative flex items-center',
		prefixIcon: /*tw*/ 'absolute left-3 text-neutral-500 dark:text-gray-400',
		suffixIconContainer: /*tw*/ 'absolute right-3 text-neutral-500 dark:text-gray-400',
		helperContainer: /*tw*/ 'flex items-center pt-1',
		errorContainer: /*tw*/ 'flex items-center gap-1',
		errorIcon: /*tw*/ 'mr-1',
		input:
			/*tw*/ 'flex w-full items-center justify-start rounded-md border bg-white shadow-[inset_-2px_-2px_6px_0px_rgba(245,245,245,0.25),0px_1px_2px_0px_rgba(16,16,16,0.05)] transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 dark:shadow-[inset_-2px_-2px_6px_0px_rgba(0,0,0,0.25),0px_1px_2px_0px_rgba(0,0,0,0.05)]',
	},
	size: {
		[BoInputSize.small]: /*tw*/ 'h-9 py-1.5 px-2 text-sm',
		[BoInputSize.default]: /*tw*/ 'h-10 py-2 px-3 text-sm',
		[BoInputSize.large]: /*tw*/ 'h-11 py-2.5 px-4 text-lg',
	},
	padding: {
		prefixIcon: /*tw*/ 'pl-8',
		suffixIcon: /*tw*/ 'pr-8',
	},
	state: {
		default: /*tw*/ 'border-neutral-300 dark:border-gray-700',
		error: /*tw*/ 'border-red-500 ring-red-500 dark:border-red-600 dark:ring-red-600',
		success: /*tw*/ 'border-green-500 ring-green-500 dark:border-green-600 dark:ring-green-600',
		warning: /*tw*/ 'border-yellow-500 ring-yellow-500 dark:border-yellow-600 dark:ring-yellow-600',
		focus:
			/*tw*/ 'focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600',
		disabled:
			/*tw*/ 'disabled:border-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-500 dark:disabled:border-gray-800 dark:disabled:bg-gray-900 dark:disabled:text-gray-400 disabled:cursor-not-allowed',
		readonly:
			/*tw*/ 'cursor-not-allowed border-neutral-200 bg-neutral-100 dark:border-gray-800 dark:bg-gray-900',
	},
} as const;

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

const wrapperClasses = computed<string>(() => {
	return INPUT_STYLE.layout.wrapper;
});

const inputClasses = computed<string>(() => {
	const paddingClasses = [];

	if (showPrefixIcon.value) {
		paddingClasses.push(INPUT_STYLE.padding.prefixIcon);
	}

	if (showSuffixIcon.value) {
		paddingClasses.push(INPUT_STYLE.padding.suffixIcon);
	}

	let stateClass: string = INPUT_STYLE.state.default;

	if (props.state === BoInputState.error || props.required) {
		stateClass = INPUT_STYLE.state.error;
	} else if (props.state === BoInputState.success) {
		stateClass = INPUT_STYLE.state.success;
	} else if (props.state === BoInputState.warning) {
		stateClass = INPUT_STYLE.state.warning;
	}

	const focusClass =
		props.state === BoInputState.default && !props.required ? INPUT_STYLE.state.focus : '';

	const readonlyClass = props.readonly ? INPUT_STYLE.state.readonly : '';

	return TailwindService.instance.merge(
		INPUT_STYLE.layout.input,
		INPUT_STYLE.size[props.size],
		INPUT_STYLE.state.disabled,
		...paddingClasses,
		readonlyClass,
		focusClass,
		stateClass,
	);
});

// Computed property for aria-describedby
const ariaDescribedBy = computed<string | undefined>(() => {
	const describedBy: string[] = [];

	if (props.error) {
		describedBy.push(constructAttribute(props.id!, 'error'));
	} else if (props.required && !props.error) {
		describedBy.push(constructAttribute(props.id!, 'required'));
	} else if (props.description && !props.error) {
		describedBy.push(constructAttribute(props.id!, 'description'));
	}

	return describedBy.length > 0 ? describedBy.join(' ') : undefined;
});

function onInput(event: Event): void {
	const target = event.target as HTMLInputElement;
	emit('change', target.value);
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
