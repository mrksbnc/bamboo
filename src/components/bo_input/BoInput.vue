<template>
	<div
		:class="containerClasses.default"
		class="relative"
	>
		<span
			v-if="label"
			:class="textClasses.label"
		>
			<bo-text
				:text="label"
				:for="computedInputId"
				:size="BoFontSize.sm"
				:font-family="BoFontFamily.sans"
			/>
			<bo-text
				v-if="attributes.required"
				text="Required *"
				:size="BoFontSize.xs"
				:color="BoTextColor.danger"
				:weight="BoFontWeight.medium"
			/>
		</span>
		<span :class="containerClasses.input">
			<span
				v-if="prefixIcon && prefixIcon != Icon.none"
				:class="containerClasses.icon.prefix"
			>
				<bo-icon
					:icon="prefixIcon"
					:size="BoSize.default"
					:color="BoColor.gray_500"
			/></span>
			<input
				v-bind="attributes"
				:id="computedInputId"
				ref="inputRef"
				:value="modelValue"
				:class="classConstruct"
				:type="attributes.type"
				:readonly="attributes.readonly"
				:placeholder="attributes.placeholder"
				:disabled="attributes.disabled || isLoading"
				@input="onInput"
			/>
			<div class="flex flex-row-reverse">
				<span
					v-if="suffixIcon && suffixIcon != Icon.none && !isLoading"
					:class="containerClasses.icon.suffix"
				>
					<bo-icon
						:icon="suffixIcon"
						:size="BoSize.default"
						:color="BoColor.gray_500"
				/></span>
				<span
					v-if="isLoading"
					:class="loadingContainerClasses"
				>
					<bo-loading-spinner
						v-if="loaderVariant === 'spinner'"
						:variant="BoLoaderVariant.secondary"
						:size="BoSize.small"
					/>
					<bo-loading-pulse
						v-else
						:variant="BoLoaderVariant.secondary"
						:size="BoSize.extra_small"
					/>
				</span>
			</div>
		</span>
		<span
			v-if="description"
			class="bo-input__description"
		>
			<bo-text
				:text="description"
				:size="BoFontSize.xs"
				:color="BoTextColor.secondary"
				:font-family="BoFontFamily.sans"
			/>
		</span>
		<span
			v-if="hasError && errorMessage"
			:class="containerClasses.error"
		>
			<bo-icon
				:icon="Icon.alert_triangle"
				:color="BoColor.red_600"
				:size="BoSize.small"
			/>
			<bo-text
				:text="errorMessage"
				:size="BoFontSize.xs"
				:color="BoTextColor.danger"
				:font-family="BoFontFamily.sans"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoLoadingPulse } from '@/components/bo_loading_pulse';
import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoFontFamily, BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo_text';
import { BoColor } from '@/shared';
import { BoSize } from '@/shared/bo_size';
import { BoLoaderVariant } from '@/shared/bo_loader';
import { StringUtils, TailwindUtils } from '@/utils';
import { IdentityUtils } from '@/utils/identity_utils';
import { computed, ref, toRefs, watch } from 'vue';
import { BoInputSize, BoInputState } from './constants';
import type { BoInputProps } from './types';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<BoInputProps>(), {
	prefixIcon: Icon.none,
	suffixIcon: Icon.none,
	loaderVariant: 'pulse',
	state: () => BoInputState.none,
	size: () => BoInputSize.default,
	attributes: () => {
		return {
			type: 'text',
			placeholder: '',
			disabled: false,
			required: false,
			readonly: false,
		};
	},
});

const {
	id,
	modelValue,
	label,
	description,
	isLoading,
	size,
	prefixIcon,
	suffixIcon,
	errorMessage,
	state,
	attributes,
} = toRefs(props);

const containerClasses = {
	default: /*tw*/ 'bo-input flex flex-col gap-1 bg-transparent',
	loading:
		/*tw*/ 'bo-input__loading-container absolute right-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center',
	error: /*tw*/ 'bo-input__error-container flex items-center gap-1',
	input: /*tw*/ 'bo-input__container relative flex items-center',
	icon: {
		prefix:
			/*tw*/ 'bo-input__prefix-container absolute left-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center',
		suffix:
			/*tw*/ 'bo-input__suffix-container absolute right-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center',
	},
};

const focusClasses = {
	default: /*tw*/ 'focus:ring-blue-600 focus:border-blue-600',
	error: /*tw*/ 'focus:ring-red-600 focus:border-red-600',
	valid: /*tw*/ 'focus:ring-green-600 focus:border-green-600',
};

const inputClasses = {
	default:
		/*tw*/ 'bo-input__input rounded-lg border border-gray-300 text-gray-900 text-small bg-white outline-none',
	error: /*tw*/ 'bo-input__input rounded-lg border border-red-600',
	valid: /*tw*/ 'bo-input__input rounded-lg border border-green-600',
};

const stateClasses = {
	disabled:
		/*tw*/ 'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-300',
};

const textClasses = {
	label: /*tw*/ 'bo-input__label-container flex items-center gap-1',
};

const inputState = ref<BoInputState>(state.value);
const inputRef = ref<HTMLInputElement | null>(null);

const computedInputId = computed<string>(() => {
	return id.value ?? IdentityUtils.generateRandomIdWithPrefix('bo-input');
});

const hasError = computed<boolean>(() => {
	return !StringUtils.isEmptyStr(errorMessage.value);
});

const loadingContainerClasses = computed<string>(() => {
	return TailwindUtils.merge('right-[14px]', containerClasses.loading);
});

const inputPaddingClasses = computed<string>(() => {
	const bothIconsSet =
		prefixIcon.value !== null &&
		prefixIcon.value !== undefined &&
		prefixIcon.value !== Icon.none &&
		suffixIcon.value !== null &&
		suffixIcon.value !== undefined &&
		suffixIcon.value !== Icon.none;

	const prefixIconSet = prefixIcon.value && prefixIcon.value !== Icon.none;
	const suffixIconSet = suffixIcon.value && suffixIcon.value !== Icon.none;

	if (bothIconsSet) {
		switch (size.value) {
			case BoInputSize.default:
			default:
				return /*tw*/ 'px-8 py-[9px]';
			case BoInputSize.large:
				return /*tw*/ 'px-8 py-3';
		}
	} else if (prefixIconSet) {
		switch (size.value) {
			case BoInputSize.default:
			default:
				return /*tw*/ 'pl-8 pr-4 py-[9px]';
			case BoInputSize.large:
				return /*tw*/ 'pl-8 pr-4 py-3';
		}
	} else if (suffixIconSet) {
		switch (size.value) {
			case BoInputSize.default:
			default:
				return /*tw*/ 'pl-4 pr-8 py-[9px]';
			case BoInputSize.large:
				return /*tw*/ 'pl-4 pr-8 py-3';
		}
	} else {
		switch (size.value) {
			case BoInputSize.default:
			default:
				return /*tw*/ 'pl-4 pr-4 py-[9px]';
			case BoInputSize.large:
				return /*tw*/ 'pl-4 pr-4 py-3';
		}
	}
});

const inputFontSize = computed<string>(() => {
	switch (size.value) {
		case BoInputSize.default:
		default:
			return /*tw*/ 'text-sm';
		case BoInputSize.large:
			return /*tw*/ 'text-base';
	}
});

const classConstruct = computed<string>(() => {
	let classes = inputClasses.default;
	let focus = focusClasses.default;

	if (inputState.value === BoInputState.invalid) {
		classes = inputClasses.error;
		focus = focusClasses.error;
	} else if (state.value === BoInputState.valid) {
		classes = inputClasses.valid;
		focus = focusClasses.valid;
	}

	return TailwindUtils.merge(
		'flex w-full',
		focus,
		classes,
		inputFontSize.value,
		stateClasses.disabled,
		inputPaddingClasses.value,
	);
});

function onInput(e: Event): void {
	const target = e.target as HTMLInputElement;

	if (attributes?.value?.type === 'tel' || attributes?.value?.type === 'number') {
		if (inputRef.value) {
			inputRef.value.value = target.value.replace(/[^\d].+/, '');
		}
	}

	emit('update:modelValue', target.value);
}

watch(
	() => hasError.value,
	(val) => {
		if (val) {
			state.value = BoInputState.invalid;
		} else {
			state.value = BoInputState.none;
		}
	},
);

watch(
	() => attributes.value?.required,
	(val) => {
		if (val) {
			state.value = BoInputState.invalid;
		} else {
			state.value = BoInputState.none;
		}
	},
);
</script>
