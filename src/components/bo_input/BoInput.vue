<template>
	<div class="input-wrapper">
		<label
			v-if="label"
			:for="inputId"
			class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
		>
			{{ label }}
			<span
				v-if="required"
				class="ml-1 text-red-500"
			>
				*
			</span>
		</label>
		<div
			class="relative"
			:class="{ flex: prefixIcon || suffixIcon }"
		>
			<div
				v-if="prefixIcon"
				class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
			>
				<bo-icon
					:icon="prefixIcon"
					class="h-5 w-5 text-gray-500 dark:text-gray-400"
				/>
			</div>
			<input
				:id="inputId"
				v-model="modelValue"
				:type="type"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:name="name"
				:class="inputClass"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
				@input="$emit('input', $event)"
			/>
			<bo-icon
				v-if="clearable && modelValue"
				:icon="Icon.x"
				@click="clearInput"
				class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
			/>
			<div
				v-if="suffixIcon && !clearable"
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
			>
				<bo-icon
					:icon="suffixIcon"
					class="h-5 w-5 text-gray-500 dark:text-gray-400"
				/>
			</div>
		</div>
		<span
			v-if="description && StringUtils.isEmptyStr(errorMessage)"
			class="text-sm text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</span>

		<span
			v-if="errorMessage && state === BoInputState.invalid"
			class="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-500"
		>
			<bo-icon :icon="Icon.alert_circle" />
			{{ errorMessage }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { StringUtils, TailwindUtils } from '@/utils'
import { IdentityUtils } from '@/utils/identity_utils'
import { computed, defineModel } from 'vue'
import { BoIcon, Icon } from '../bo_icon'
import { BoInputSize, BoInputState, BoInputType, BoInputVariant } from './constants'
import type { BoInputProps } from './types'

// Define emits
const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'clear'])

const props = withDefaults(defineProps<BoInputProps>(), {
	modelValue: '',
	type: BoInputType.text,
	placeholder: '',
	disabled: false,
	readonly: false,
	required: false,
	state: BoInputState.none,
	size: BoInputSize.default,
	variant: BoInputVariant.default,
	clearable: false,
	prefixIcon: null,
	suffixIcon: null,
})

const modelValue = defineModel()

const inputId = computed(() => props.id ?? IdentityUtils.generateRandomIdWithPrefix('input'))

const inputClass = computed(() => {
	const baseClasses = 'block w-full focus:outline-none focus:ring-1 transition-colors'

	const sizeClasses = {
		[BoInputSize.small]: 'p-2 text-xs',
		[BoInputSize.default]: 'p-2.5 text-sm',
		[BoInputSize.large]: 'p-4 text-base',
	}

	const variantClasses = {
		[BoInputVariant.default]:
			'border border-[1px] border-gray-300 rounded-lg bg-transparent text-gray-900 focus:ring-blue-500/20 focus:border-blue-500 dark:border-gray-600 dark:text-white',
		[BoInputVariant.filled]:
			'border border-[1px] border-transparent rounded-lg bg-gray-100 text-gray-900 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800 dark:text-white',
		[BoInputVariant.underline]:
			'border-0 border-b-[1px] border-gray-300 rounded-none bg-transparent px-0 focus:ring-0 focus:outline-none text-gray-900 focus:border-blue-500 dark:border-gray-600 dark:text-white',
	}

	let classes = TailwindUtils.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	)

	if (props.prefixIcon) {
		classes = TailwindUtils.merge(classes, 'pl-10')
	}

	if ((props.suffixIcon && !props.clearable) || (props.clearable && props.modelValue)) {
		classes = TailwindUtils.merge(classes, 'pr-10')
	}

	if (props.disabled) {
		classes = TailwindUtils.merge(
			classes,
			'cursor-not-allowed bg-gray-100 text-gray-500 placeholder-gray-400',
		)
	} else if (props.readonly) {
		classes = TailwindUtils.merge(classes, 'text-gray-500 placeholder-gray-400')
	}

	if (props.state === BoInputState.invalid) {
		classes = TailwindUtils.merge(
			classes,
			'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500',
		)
	} else if (props.state === BoInputState.valid) {
		classes = TailwindUtils.merge(
			classes,
			'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500',
		)
	}

	return classes
})

const clearInput = () => {
	modelValue.value = ''
	emit('clear')
}
</script>
