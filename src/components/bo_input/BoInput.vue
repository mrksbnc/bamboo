<template>
	<div
		:class="defaultContainerClasses"
		class="relative"
	>
		<span
			v-if="label != null"
			:class="labelContainerClasses"
		>
			<bo-text
				:text="label"
				:for="computedInputId"
				:size="BoFontSize.sm"
				:font-family="BoFontFamily.sans"
			/>
			<bo-text
				v-if="required"
				text="Required *"
				:size="BoFontSize.xs"
				:color="BoTextColor.danger"
				:weight="BoFontWeight.medium"
			/>
		</span>
		<span :class="inputContainer">
			<span
				v-if="prefixIcon != null"
				:class="defaultPrefixIconContainerClasses"
			>
				<bo-icon
					:size="iconSize"
					:icon="prefixIcon"
					:color="BoColor.gray_500"
			/></span>
			<input
				v-bind="$attrs"
				:id="computedInputId"
				ref="inputRef"
				:type="type"
				:value="modelValue"
				:readonly="readonly"
				:class="inputClasses"
				:placeholder="placeholder"
				:disabled="disabled || isLoading"
				@input="onInput"
			/>
			<div class="flex flex-row-reverse">
				<span
					v-if="suffixIcon != null"
					:class="defaultSuffixIconContainerClasses"
				>
					<bo-icon
						:size="iconSize"
						:icon="suffixIcon"
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
			v-if="description != null"
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
			v-if="hasError && errorMessage != null"
			:class="errorContainerClasses"
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
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoLoadingPulse } from '@/components/bo_loading_pulse'
import { BoLoadingSpinner } from '@/components/bo_loading_spinner'
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoText,
	BoTextColor,
} from '@/components/bo_text'
import { BoColor } from '@/data'
import { BoSize } from '@/data/bo_size.constant'
import { BoLoaderVariant } from '@/data/loader.constant'
import { HtmlInputType } from '@/global'
import { TailwindUtils } from '@/utils'
import { IdentityUtils } from '@/utils/identity_utils'
import { computed, ref, toRefs, watch } from 'vue'
import { BoInputSize, BoInputState } from './constants'
import type { BoInputProps } from './types'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<BoInputProps>(), {
	placeholder: '',
	description: '',
	prefixIcon: null,
	suffixIcon: null,
	loaderVariant: 'pulse',
	type: () => HtmlInputType.text,
	state: () => BoInputState.none,
	size: () => BoInputSize.default,
})

const {
	id,
	modelValue,
	label,
	description,
	disabled,
	isLoading,
	size,
	readonly,
	placeholder,
	prefixIcon,
	suffixIcon,
	required,
	errorMessage,
	state,
	type,
} = toRefs(props)

const defaultContainerClasses =
	/*tw*/ 'bo-input flex flex-col gap-1 bg-transparent'

const defaultInputClasses =
	/*tw*/ 'bo-input__input rounded-lg border border-gray-300 text-gray-900 text-small bg-white outline-none'

const defaultInputDisabledClasses =
	/*tw*/ 'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-300'

const defaultFocusClasses = /*tw*/ 'focus:ring-blue-600 focus:border-blue-600'

const errorInputClasses =
	/*tw*/ 'bo-input__input rounded-lg border border-red-600'

const errorFocusClasses = /*tw*/ 'focus:ring-red-600 focus:border-red-600 '

const validInputClasses =
	/*tw*/ 'bo-input__input rounded-lg border border-green-600'

const validFocusClasses = /*tw*/ 'focus:ring-green-600 focus:border-green-600'

const labelContainerClasses =
	/*tw*/ 'bo-input__label-container flex items-center gap-1'

const defaultPrefixIconContainerClasses =
	/*tw*/ 'bo-input__prefix-container absolute left-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center'

const defaultSuffixIconContainerClasses =
	/*tw*/ 'bo-input__suffix-container absolute right-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center'

const defaultLoadingContainerClasses =
	/*tw*/ 'bo-input__loading-container absolute right-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center'

const inputContainer = /*tw*/ 'bo-input__container relative flex items-center'

const errorContainerClasses =
	/*tw*/ 'bo-input__error-message flex items-center gap-1'

const inputState = ref<BoInputState>(state.value)
const inputRef = ref<HTMLInputElement | null>(null)

const computedInputId = computed<string>(() => {
	return id.value ?? IdentityUtils.generateRandomIdWithPrefix('bo-input')
})

const hasError = computed<boolean>(() => {
	return errorMessage.value != null
})

const loadingContainerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		isLoading.value
			? suffixIcon.value != null
				? 'right-[35px]'
				: 'right-[14px]'
			: '',
		defaultLoadingContainerClasses,
	)
})

const inputSizeClasses = computed<string>(() => {
	if (prefixIcon.value != null && suffixIcon.value != null) {
		switch (size.value) {
			case BoInputSize.small:
				return /*tw*/ 'flex w-full h-[32px] text-bo-sm'
			case BoInputSize.default:
			default:
				return /*tw*/ 'flex w-full h-[40px] px-8 text-bo-base'
			case BoInputSize.large:
				return /*tw*/ 'flex w-full px-8 text-bo-xl'
		}
	}

	if (prefixIcon.value != null) {
		switch (size.value) {
			case BoInputSize.small:
				return /*tw*/ 'flex w-full h-[32px] pl-6 pr-4 text-bo-sm'
			case BoInputSize.default:
			default:
				return /*tw*/ 'flex w-full h-[40px] pl-8 pr-4 text-bo-base'
			case BoInputSize.large:
				return /*tw*/ 'flex w-full h-[48px] pl-8 pr-4 text-bo-xl'
		}
	}

	if (suffixIcon.value != null) {
		switch (size.value) {
			case BoInputSize.small:
				return isLoading.value
					? /*tw*/ 'flex w-full h-[32px] pl-4 pr-6 text-bo-sm'
					: /*tw*/ 'flex w-full h-[32px] pl-4 pr-14 text-bo-sm'
			case BoInputSize.default:
			default:
				return isLoading.value
					? /*tw*/ 'flex w-full h-[40px] pl-4 pr-8 text-bo-base'
					: /*tw*/ 'flex w-full h-[40px] pl-4 pr-14 text-bo-base'
			case BoInputSize.large:
				return isLoading.value
					? /*tw*/ 'flex w-full h-[48px] pl-4 pr-8 text-bo-xl'
					: /*tw*/ 'flex w-full h-[48px] pl-4 pr-14 text-bo-xl'
		}
	}

	switch (size.value) {
		case BoInputSize.small:
			return /*tw*/ 'flex w-full h-[32px] px-3 text-bo-sm'
		case BoInputSize.default:
		default:
			return /*tw*/ 'flex w-full h-[40px] px-3 text-bo-base'
		case BoInputSize.large:
			return /*tw*/ 'flex w-full h-[48px] px-3 text-bo-xl'
	}
})

const inputClasses = computed<string>(() => {
	let disabledClasses = ''
	let classes = defaultInputClasses
	let focusClasses = defaultFocusClasses

	if (inputState.value === BoInputState.none) {
		disabledClasses = defaultInputDisabledClasses
	}

	if (inputState.value === BoInputState.invalid) {
		classes = errorInputClasses
		focusClasses = errorFocusClasses
	} else if (state.value === BoInputState.valid) {
		classes = validInputClasses
		focusClasses = validFocusClasses
	}

	return TailwindUtils.merge(
		classes,
		focusClasses,
		disabledClasses,
		defaultInputClasses,
		inputSizeClasses.value,
	)
})

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoInputSize.small:
			return BoSize.small
		case BoInputSize.default:
		default:
			return BoSize.default
	}
})

function onInput(e: Event): void {
	const target = e.target as HTMLInputElement

	if (type.value === HtmlInputType.number) {
		if (inputRef.value != null) {
			inputRef.value.value = target.value.replace(/[^\d].+/, '')
		}
	}

	emit('update:modelValue', target.value)
}

watch(
	() => hasError.value,
	(val) => {
		if (val) {
			state.value = BoInputState.invalid
		} else {
			state.value = BoInputState.none
		}
	},
)

watch(
	() => required.value,
	(val) => {
		if (val) {
			state.value = BoInputState.invalid
		} else {
			state.value = BoInputState.none
		}
	},
)
</script>
