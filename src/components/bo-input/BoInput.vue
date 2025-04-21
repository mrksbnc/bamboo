<template>
	<div class="bo-input relative flex w-full flex-col transition-all duration-200">
		<div
			v-if="showTopContainer"
			class="flex justify-between gap-2"
		>
			<div class="mb-1 flex items-center gap-1">
				<bo-text
					v-if="label"
					:for="inputId"
					:value="label"
					:size="BoFontSize.sm"
				/>
				<span
					v-if="required"
					class="pl-0.5 text-red-500"
					>*</span
				>
			</div>
			<slot name="topRightContent"></slot>
		</div>

		<!-- Input container -->
		<div
			class="relative flex w-full items-center justify-start rounded-md border bg-white shadow-[inset_-2px_-2px_6px_0px_rgba(245,245,245,0.25),0px_1px_2px_0px_rgba(16,16,16,0.05)] transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 dark:shadow-[inset_-2px_-2px_6px_0px_rgba(0,0,0,0.25),0px_1px_2px_0px_rgba(0,0,0,0.05)]"
			:class="[
				sizeClasses,
				state === BoInputState.error
					? 'border-red-500'
					: required && !modelValue
						? 'border-red-100 dark:border-red-900'
						: 'border-neutral-300 dark:border-gray-700',
				disabled
					? 'cursor-not-allowed border-neutral-200 bg-neutral-100 dark:border-gray-800 dark:bg-gray-900'
					: 'bg-white dark:bg-gray-800',
				pills && pills.length > 0 ? 'h-auto' : '',
				variantClasses[variant][state],
			]"
		>
			<!-- Prefix icon -->
			<div
				v-if="prefixIcon && prefixIcon !== Icon.none"
				class="absolute text-neutral-500 dark:text-gray-400"
				:class="iconPositionClasses"
				@click="onPrefixIconClick"
			>
				<bo-icon
					:icon="prefixIcon"
					:size="iconSize"
					class="bo-input__prefix-icon"
					aria-hidden="true"
				/>
			</div>

			<!-- Input field and pills container -->
			<div
				ref="inputContainerRef"
				class="flex max-h-[124px] w-full gap-1.5 overflow-y-auto"
				:class="[
					inputContainerPadding,
					horizontalScroll ? 'scrollbar-none flex-nowrap overflow-x-auto' : 'flex-wrap',
					prefixIcon && prefixIcon !== Icon.none ? 'ml-8' : '',
					suffixIcon && suffixIcon !== Icon.none ? 'mr-8' : '',
				]"
			>
				<!-- Pills section -->
				<BoInputPill
					v-for="(pill, index) in pills"
					:key="index"
					:pill="pill"
					@remove="onPillRemove"
				/>

				<!-- Input field -->
				<input
					:id="inputId"
					:name="name"
					:type="inputType"
					:value="modelValue"
					:disabled="disabled"
					:readonly="readonly"
					:required="required"
					:autofocus="autofocus"
					:placeholder="placeholder"
					:class="[
						'w-full flex-1 border-none bg-transparent text-sm font-normal outline-none dark:text-white dark:placeholder-gray-400',
						pills && pills.length > 0 ? 'min-w-[100px]' : '',
					]"
					:aria-label="ariaLabel"
					:aria-describedby="helperTextId"
					:aria-invalid="state === BoInputState.error"
					@input="onInput"
					@focus="onFocus"
					@blur="onBlur"
					@change="onChange"
					ref="inputRef"
				/>
			</div>

			<!-- Suffix/action icons -->
			<div
				v-if="(suffixIcon && suffixIcon !== Icon.none) || showPasswordToggle"
				class="absolute right-3 text-neutral-500 dark:text-gray-400"
				:class="iconPositionClasses"
				@click="onSuffixIconClick"
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

		<!-- Helper text/error container -->
		<div
			v-if="showHelperContainer"
			class="mt-1 flex flex-col gap-1"
		>
			<div
				v-if="error"
				class="flex items-center gap-1"
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
				v-if="description && !error"
				:id="helperTextId"
				:value="description"
				:size="BoFontSize.sm"
				:class="helperTextClasses"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoText } from '@/components/bo-text';
import { IdentityService } from '@/services';
import { BoColor, BoSize } from '@/shared';
import { useDebounceFn, useMutationObserver, useResizeObserver } from '@vueuse/core';
import { computed, onMounted, ref, toRefs, useSlots } from 'vue';
import {
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
	type BoInputProps,
} from './bo-input';
import BoInputPill from './BoInputPill.vue';
const slots = useSlots();

// Extend the existing BoInputProps to support pills
const props = withDefaults(defineProps<BoInputProps>(), {
	id: () => IdentityService.instance.generateId('bo-input'),
	variant: () => BoInputVariant.default,
	state: () => BoInputState.default,
	size: () => BoInputSize.default,
	type: () => BoInputType.text,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	revealPassword: false,
	pills: () => [],
	horizontalScroll: false,
});

const emit = defineEmits<{
	'update:modelValue': [value: string];
	focus: [];
	blur: [event: Event];
	change: [value: string];
	prefixIconClick: [];
	suffixIconClick: [];
	pillRemove: [id: string];
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
	pills,
	horizontalScroll,
	revealPassword,
} = toRefs(props);

const inputRef = ref<HTMLInputElement | null>(null);
const inputContainerRef = ref<HTMLDivElement | null>(null);
const passwordVisible = ref(false);

const inputId = computed<string>(() => {
	return id.value;
});

const helperTextId = computed<string>(() => {
	return `${inputId.value}-helper`;
});

const showTopContainer = computed<boolean>(() => {
	return !!label.value || !!required.value || !!slots.topRightContent;
});

const showHelperContainer = computed<boolean>(() => {
	return !!error.value || !!description.value;
});

const showPasswordToggle = computed<boolean>(() => {
	return (
		type.value === BoInputType.password &&
		!disabled.value &&
		!!modelValue.value &&
		revealPassword.value
	);
});

const inputType = computed<string>(() => {
	if (type.value === BoInputType.password && passwordVisible.value) {
		return BoInputType.text;
	}
	return type.value;
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

// Update height classes to match Flowbite
const heightClasses: Record<string, string> = {
	[BoInputSize.small]: 'h-9', // 36px
	[BoInputSize.default]: 'h-10', // 40px
	[BoInputSize.large]: 'h-11', // 44px
};

// Update the sizeClasses computed property
const sizeClasses = computed<string>(() => {
	const currentSize = size.value;
	const height = heightClasses[currentSize];
	const minHeight = pills.value && pills.value.length > 0 ? `min-h-${height.split('-')[1]}` : '';

	return `${pills.value && pills.value.length > 0 ? minHeight : height}`;
});

// Update the icon positioning for each size
const iconPositionClasses = computed<string>(() => {
	switch (size.value) {
		case BoInputSize.small:
			return 'left-3 top-1/2 transform -translate-y-1/2'; // Center vertically
		case BoInputSize.large:
			return 'left-3 top-1/2 transform -translate-y-1/2'; // Center vertically
		case BoInputSize.default:
		default:
			return 'left-3 top-1/2 transform -translate-y-1/2'; // Center vertically
	}
});

// Input container padding needs to be adjusted
const inputContainerPadding = computed<string>(() => {
	switch (size.value) {
		case BoInputSize.small:
			return 'py-2 px-3'; // Less padding for small
		case BoInputSize.large:
			return 'py-2.5 px-4'; // More padding for large
		case BoInputSize.default:
		default:
			return 'py-2.5 px-3.5'; // Standard padding
	}
});

// Replace the existing variant classes if needed
const variantClasses = computed(() => ({
	[BoInputVariant.default]: {
		[BoInputState.default]:
			'bg-white dark:bg-gray-800 focus-within:border-blue-500 dark:focus-within:border-blue-400',
		[BoInputState.error]: 'bg-white dark:bg-gray-800 focus-within:border-red-500',
		[BoInputState.success]: 'bg-white dark:bg-gray-800 focus-within:border-green-600',
	},
	[BoInputVariant.filled]: {
		[BoInputState.default]:
			'bg-neutral-100 dark:bg-gray-700 focus-within:border-blue-500 dark:focus-within:border-blue-400',
		[BoInputState.error]: 'bg-neutral-100 dark:bg-gray-700 focus-within:border-red-500',
		[BoInputState.success]: 'bg-neutral-100 dark:bg-gray-700 focus-within:border-green-600',
	},
}));

const helperTextClasses = computed<string>(() => {
	return {
		[BoInputState.default]: 'text-neutral-600 dark:text-gray-300',
		[BoInputState.error]: 'text-red-500',
		[BoInputState.success]: 'text-green-600',
	}[state.value];
});

function getIconTopClass(): string {
	switch (size.value) {
		case BoInputSize.small:
			return 'top-1.5';
		case BoInputSize.default:
			return 'top-2.5';
		case BoInputSize.large:
			return 'top-3.5';
		default:
			return 'top-2.5';
	}
}

function onInput(event: Event) {
	if (event.target instanceof HTMLInputElement) {
		emit('update:modelValue', event.target.value);
	}
}

function onFocus() {
	emit('focus');
}

function onBlur(event: Event) {
	emit('blur', event);
}

function onChange(event: Event) {
	if (event.target instanceof HTMLInputElement) {
		emit('change', event.target.value);
	}
}

function togglePasswordVisibility() {
	passwordVisible.value = !passwordVisible.value;
}

function onPrefixIconClick() {
	emit('prefixIconClick');
}

function onSuffixIconClick() {
	emit('suffixIconClick');
}

function onPillRemove(id: string) {
	emit('pillRemove', id);
}

function scrollToEnd(): void {
	if (inputContainerRef.value != null) {
		if (horizontalScroll.value) {
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

defineExpose({
	focus,
});

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
</script>

<style>
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
