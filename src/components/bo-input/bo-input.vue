<template>
	<div class="bo-input relative flex w-full flex-col transition-all duration-200">
		<div
			v-if="showTopContainer"
			class="flex justify-between gap-2"
			:data-testid="`bo-input-top-${inputId}`"
		>
			<div class="mb-1 flex items-center gap-1">
				<bo-text
					v-if="label"
					:for="inputId"
					:value="label"
					:size="BoFontSize.sm"
					:data-testid="`bo-input-label-${inputId}`"
				/>
				<span
					v-if="required"
					class="pl-0.5 text-red-500"
				>
					*
				</span>
			</div>
			<slot
				name="topRightContent"
				:data-testid="`bo-input-top-right-${inputId}`"
			></slot>
		</div>
		<div
			:class="inputWrapperClasses"
			:data-testid="`bo-input-container-${inputId}`"
		>
			<div
				v-if="prefixIcon && prefixIcon !== Icon.none"
				class="absolute text-neutral-500 dark:text-gray-400"
				:class="prefixIconPositionClasses"
				@click="onPrefixIconClick"
				:data-testid="`bo-input-prefix-icon-${inputId}`"
			>
				<bo-icon
					:icon="prefixIcon"
					:size="iconSize"
					class="bo-input__prefix-icon"
					aria-hidden="true"
				/>
			</div>
			<div
				ref="inputContainerRef"
				:class="inputContainerClasses"
				:data-testid="`bo-input-content-${inputId}`"
			>
				<bo-input-pill
					v-for="(pill, index) in pills"
					:key="index"
					:id="pill.id"
					:icon="pill.icon"
					:value="pill.value"
					@remove="onPillRemove"
					:data-testid="`bo-input-pill-${inputId}-${pill.id}`"
				/>

				<input
					v-model="modelValue"
					:id="inputId"
					:name="name"
					:type="inputType"
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
					@keydown="onKeyDown"
					@focus="onFocus"
					@blur="onBlur"
					@change="onChange"
					ref="inputRef"
					:data-testid="`bo-input-field-${inputId}`"
				/>
			</div>
			<div
				v-if="(suffixIcon && suffixIcon !== Icon.none) || showPasswordToggle"
				class="absolute right-3 text-neutral-500 dark:text-gray-400"
				:class="suffixIconPositionClasses"
				@click="onSuffixIconClick"
				:data-testid="`bo-input-suffix-icon-${inputId}`"
			>
				<bo-icon
					v-if="suffixIcon && suffixIcon !== Icon.none"
					:icon="suffixIcon"
					:size="iconSize"
					class="bo-input__suffix-icon"
					aria-hidden="true"
				/>
				<bo-icon
					v-if="showPasswordToggle && passwordVisible"
					:icon="Icon.eye_off"
					:size="iconSize"
					class="cursor-pointer"
					@click.stop="togglePasswordVisibility"
					:data-testid="`bo-input-password-toggle-${inputId}`"
				/>
				<bo-icon
					v-if="showPasswordToggle && !passwordVisible"
					:icon="Icon.eye"
					:size="iconSize"
					class="cursor-pointer"
					@click.stop="togglePasswordVisibility"
				/>
			</div>
		</div>
		<div
			v-if="showHelperContainer"
			class="mt-1 flex flex-col gap-1"
			:data-testid="`bo-input-helper-${inputId}`"
		>
			<div
				v-if="error"
				class="flex items-center gap-1"
				:data-testid="`bo-input-error-${inputId}`"
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
					:data-testid="`bo-input-error-${inputId}`"
				/>
			</div>
			<bo-text
				v-if="description && !error"
				:id="helperTextId"
				:value="description"
				:size="BoFontSize.sm"
				:class="helperTextClasses"
				:data-testid="`bo-input-description-${inputId}`"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/bo-icon/bo-icon.js';
import BoIcon from '@/components/bo-icon/bo-icon.vue';
import BoText from '@/components/bo-text/BoText.vue';
import { BoFontSize } from '@/components/bo-text/bo-text.js';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoColor } from '@/shared/bo-color.js';
import { BoSize } from '@/shared/bo-size.js';
import { useDebounceFn, useMutationObserver, useResizeObserver } from '@vueuse/core';
import { computed, onMounted, ref, useSlots } from 'vue';
import BoInputPill from './bo-input-pill.vue';
import {
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
	type BoInputProps,
} from './bo-input.js';
const slots = useSlots();

const props = withDefaults(defineProps<BoInputProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-input'),
	name: () => `bo-input-${Date.now()}`,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	type: () => BoInputType.text,
	size: () => BoInputSize.default,
	state: () => BoInputState.default,
	variant: () => BoInputVariant.default,
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'focus'): void;
	(e: 'blur', event: Event): void;
	(e: 'change', value: string): void;
	(e: 'prefixIconClick'): void;
	(e: 'suffixIconClick'): void;
	(e: 'pillRemove', id: string): void;
}>();

const modelValue = defineModel<string>({
	required: true,
	default: '',
});

const passwordVisible = ref(false);

const inputRef = ref<HTMLInputElement | null>(null);
const inputContainerRef = ref<HTMLDivElement | null>(null);

const inputId = computed<string>(() => {
	return props.id;
});

const helperTextId = computed<string>(() => {
	return `${inputId.value}-helper`;
});

const showTopContainer = computed<boolean>(() => {
	return !!props.label || !!props.required || !!slots.topRightContent;
});

const showHelperContainer = computed<boolean>(() => {
	return !!props.error || !!props.description;
});

const showPasswordToggle = computed<boolean>(() => {
	return (
		props.type === BoInputType.password &&
		!props.disabled &&
		!!modelValue.value &&
		props.revealPassword
	);
});

const inputType = computed<string>(() => {
	if (props.type === BoInputType.password && passwordVisible.value) {
		return BoInputType.text;
	}
	return props.type;
});

const iconSize = computed<BoSize>(() => {
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

const heightClasses: Record<string, string> = {
	[BoInputSize.small]: 'h-9', // Small
	[BoInputSize.default]: 'h-10', // Medium
	[BoInputSize.large]: 'h-11', // Large
};

const sizeClasses = computed<string>(() => {
	const currentSize = props.size;
	const height = heightClasses[currentSize];
	const minHeight = props.pills && props.pills.length > 0 ? `min-h-${height.split('-')[1]}` : '';

	return `${props.pills && props.pills.length > 0 ? minHeight : height}`;
});

const prefixIconPositionClasses = computed<string>(() => {
	switch (props.size) {
		case BoInputSize.small:
			return 'left-3 top-1/2 transform -translate-y-1/2'; // Center vertically
		case BoInputSize.large:
			return 'left-3 top-1/2 transform -translate-y-1/2'; // Center vertically
		case BoInputSize.default:
		default:
			return 'left-3 top-1/2 transform -translate-y-1/2'; // Center vertically
	}
});

const suffixIconPositionClasses = computed<string>(() => {
	switch (props.size) {
		case BoInputSize.small:
			return 'right-3 top-1/2 transform -translate-y-1/2'; // Center vertically
		case BoInputSize.large:
			return 'right-3 top-1/2 transform -translate-y-1/2'; // Center vertically
		case BoInputSize.default:
		default:
			return 'right-3 top-1/2 transform -translate-y-1/2'; // Center vertically
	}
});

const inputContainerPadding = computed<string>(() => {
	switch (props.size) {
		case BoInputSize.small:
			return 'py-1.5 px-3';
		case BoInputSize.large:
			return 'py-2.5 px-5';
		case BoInputSize.default:
		default:
			return 'py-2 px-4';
	}
});

const inputWrapperClasses = computed<string>(() => {
	const defaultClass =
		/*tw*/ 'relative flex w-full items-center justify-start rounded-md border bg-white shadow-[inset_-2px_-2px_6px_0px_rgba(245,245,245,0.25),0px_1px_2px_0px_rgba(16,16,16,0.05)] transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 dark:shadow-[inset_-2px_-2px_6px_0px_rgba(0,0,0,0.25),0px_1px_2px_0px_rgba(0,0,0,0.05)]';

	let stateClasses = '';

	if (props.state === BoInputState.error) {
		stateClasses = /*tw*/ 'border-red-500 ring-red-500 dark:border-red-600 dark:ring-red-600';
	} else if (props.state === BoInputState.success) {
		stateClasses =
			/*tw*/ 'border-green-500 ring-green-500 dark:border-green-600 dark:ring-green-600';
	} else if (props.state === BoInputState.warning) {
		stateClasses =
			/*tw*/ 'border-yellow-500 ring-yellow-500 dark:border-yellow-600 dark:ring-yellow-600';
	} else if (props.required && !modelValue.value) {
		stateClasses = /*tw*/ 'border-red-500 ring-red-500 dark:border-red-600 dark:ring-red-600';
	} else {
		stateClasses = /*tw*/ 'border-neutral-300 dark:border-gray-700';
	}

	const disabledClasses = props.disabled
		? /*tw*/ 'cursor-not-allowed border-neutral-200 bg-neutral-100 dark:border-gray-800 dark:bg-gray-900'
		: /*tw*/ 'bg-white dark:bg-gray-800';

	return TailwindService.instance.merge(
		stateClasses,
		defaultClass,
		disabledClasses,
		sizeClasses.value,
	);
});

const inputClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		/*tw*/ 'w-full flex-1 border-none bg-transparent text-sm font-normal outline-none dark:text-white dark:placeholder-gray-400',
		props.pills && props.pills.length > 0 ? 'min-w-[100px]' : '',
	);
});

const helperTextClasses = computed<string>(() => {
	return {
		[BoInputState.default]: 'text-neutral-600 dark:text-gray-300',
		[BoInputState.error]: 'text-red-500',
		[BoInputState.success]: 'text-green-600',
		[BoInputState.warning]: 'text-yellow-500',
	}[props.state];
});

function onInput(event: Event): void {
	if (event.target instanceof HTMLInputElement) {
		emit('update:modelValue', event.target.value);
	}
}

function onKeyDown(event: KeyboardEvent): void {
	// If backspace is pressed, input is empty, and there are pills, remove the last pill
	if (event.key === 'Backspace' && !modelValue.value && props.pills && props.pills.length > 0) {
		const lastPill = props.pills[props.pills.length - 1];
		emit('pillRemove', lastPill.id ?? '');
	}
}

function onFocus(): void {
	emit('focus');
}

function onBlur(event: Event): void {
	emit('blur', event);
}

function onChange(event: Event): void {
	if (event.target instanceof HTMLInputElement) {
		emit('change', event.target.value);
	}
}

function togglePasswordVisibility(): void {
	passwordVisible.value = !passwordVisible.value;
}

function onPrefixIconClick(): void {
	emit('prefixIconClick');
}

function onSuffixIconClick(): void {
	emit('suffixIconClick');
}

function onPillRemove(id: string): void {
	emit('pillRemove', id);
}

function scrollToEnd(): void {
	if (inputContainerRef.value != null) {
		if (props.horizontalScroll) {
			inputContainerRef.value.scrollLeft = inputContainerRef.value.scrollWidth;
		} else {
			inputContainerRef.value.scrollTop = inputContainerRef.value.scrollHeight;
		}
	}
}

function focus(): void {
	inputRef.value?.focus();
}

const debouncedScrollToEnd = useDebounceFn(scrollToEnd, 10);

useResizeObserver(inputContainerRef, () => {
	debouncedScrollToEnd();
});

onMounted(() => {
	if (props.autofocus) {
		setTimeout(() => inputRef.value?.focus(), 200);
	}

	useMutationObserver(
		inputContainerRef,
		(mutationsList) => {
			let shouldScroll = false;

			for (const mutation of mutationsList) {
				if (mutation.type === 'childList') {
					shouldScroll = true;
					break;
				}
			}

			if (shouldScroll) {
				debouncedScrollToEnd();
			}
		},
		{
			childList: true,
			subtree: true,
		},
	);
});

defineExpose({
	focus,
});
</script>

<style scoped>
/* Hide browser-specific elements */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
	display: none;
}

input[type='password']::-ms-reveal,
input[type='password']::-ms-clear {
	display: none;
}

/* Hide scrollbar for horizontal scroll containers */
.scrollbar-none::-webkit-scrollbar {
	display: none;
}

.scrollbar-none {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

/* Dark mode overrides for input focus */
.dark input:focus {
	outline: none;
	box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>
