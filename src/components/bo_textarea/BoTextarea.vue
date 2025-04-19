<template>
	<div class="textarea-wrapper">
		<label
			v-if="label"
			:for="textareaId"
			class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
		>
			{{ label }}
		</label>
		<div class="relative">
			<textarea
				:id="textareaId"
				v-model="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:name="name"
				:rows="rows"
				:cols="cols"
				:maxlength="maxlength"
				:minlength="minlength"
				:wrap="wrap"
				:class="textareaClass"
				:style="resizeStyle"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
				@input="$emit('input', $event)"
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
				/>
			</div>
		</div>
		<span
			v-if="description && StringUtils.isEmptyStr(errorMessage)"
			class="mt-1 text-sm text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</span>

		<span
			v-if="errorMessage && state === BoTextareaState.invalid"
			class="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-500"
		>
			<bo-icon :icon="Icon.alert_circle" />
			{{ errorMessage }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoSize } from '@/shared'
import { StringUtils, TailwindUtils } from '@/utils'
import { IdentityUtils } from '@/utils/identity_utils'
import { computed, defineModel } from 'vue'
import { BoIcon, Icon } from '../bo_icon'
import { BoTextareaSize, BoTextareaState, BoTextareaVariant } from './constants'
import type { BoTextareaProps } from './types'

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'clear'])

const props = withDefaults(defineProps<BoTextareaProps>(), {
	placeholder: '',
	disabled: false,
	readonly: false,
	required: false,
	state: BoTextareaState.none,
	size: BoTextareaSize.default,
	variant: BoTextareaVariant.default,
	clearable: false,
	rows: 3,
	resize: 'none',
	prefixIcon: null,
	suffixIcon: null,
})

const modelValue = defineModel<string>('modelValue', { required: true })

const textareaId = computed(() => props.id ?? IdentityUtils.generateRandomIdWithPrefix('textarea'))

const resizeStyle = computed(() => {
	return {
		resize: props.resize,
	}
})

const textareaClass = computed(() => {
	const baseClasses = 'block w-full focus:outline-none focus:ring-1 transition-colors leading-tight'

	const sizeClasses = {
		[BoTextareaSize.small]: 'p-2 text-xs',
		[BoTextareaSize.default]: 'p-3 text-xs',
		[BoTextareaSize.large]: 'p-4 text-sm',
	}

	const variantClasses = {
		[BoTextareaVariant.default]:
			'border border-[1px] border-gray-300 rounded-lg bg-transparent text-gray-900 focus:ring-blue-500/20 focus:border-blue-500 dark:border-gray-600 dark:text-white',
		[BoTextareaVariant.filled]:
			'border border-[1px] border-transparent rounded-lg bg-gray-100 text-gray-900 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800 dark:text-white',
	}

	let classes = TailwindUtils.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	)

	if (props.clearable && props.modelValue) {
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

	if (props.state === BoTextareaState.invalid) {
		classes = TailwindUtils.merge(
			classes,
			'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500',
		)
	} else if (props.state === BoTextareaState.valid) {
		classes = TailwindUtils.merge(
			classes,
			'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500',
		)
	}

	return classes
})

const clearTextarea = () => {
	modelValue.value = ''
	emit('clear')
}
</script>
