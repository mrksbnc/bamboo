<template>
	<div class="select-wrapper w-full">
		<label
			v-if="label"
			:for="selectId"
			class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
		>
			{{ label }}
			<span
				v-if="required"
				class="text-red-500"
				>*<span class="sr-only">(required)</span></span
			>
		</label>
		<div class="relative">
			<select
				:id="selectId"
				v-model="modelValue"
				:name="name"
				:class="selectClass"
				:disabled="disabled"
				:required="required"
				:multiple="multiple"
				:aria-describedby="getAriaDescribedBy"
				:aria-invalid="state === BoSelectState.invalid ? 'true' : 'false'"
				:aria-disabled="disabled ? 'true' : 'false'"
				@focus="$emit('focus')"
				@blur="$emit('blur')"
				@change="handleChange"
			>
				<option
					v-if="placeholder"
					value=""
					disabled
					class="text-gray-400 dark:text-gray-500"
				>
					{{ placeholder }}
				</option>
				<option
					v-for="option in options"
					:key="option.value || option"
					:value="option.value || option"
					:disabled="option.disabled"
				>
					{{ option.label || option }}
				</option>
			</select>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
				aria-hidden="true"
			>
				<bo-icon
					:icon="Icon.chevron_down"
					:size="BoSize.small"
				/>
			</div>
		</div>
		<span
			v-if="description && StringUtils.isEmptyStr(errorMessage)"
			:id="descriptionId"
			class="mt-1 text-sm text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</span>
		<span
			v-if="errorMessage && state === BoSelectState.invalid"
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
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoSize } from '@/shared'
import { AccessibilityUtils, StringUtils, TailwindUtils } from '@/utils'
import { IdentityUtils } from '@/utils/identity_utils'
import { computed, ref, watch } from 'vue'
import { BoSelectSize, BoSelectState, BoSelectVariant } from './constants'
import type { BoSelectProps } from './types'

const props = withDefaults(defineProps<BoSelectProps>(), {
	placeholder: '',
	disabled: false,
	required: false,
	multiple: false,
	state: BoSelectState.none,
	size: BoSelectSize.default,
	variant: BoSelectVariant.default,
})

const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur'])

const modelValue = defineModel<string | number | string[] | number[]>('modelValue', {
	required: true,
})

const selectId = computed<string>(
	() => props.id ?? IdentityUtils.generateRandomIdWithPrefix('select'),
)

const descriptionId = ref(AccessibilityUtils.generateAccessibleId('select-desc'))
const errorId = ref(AccessibilityUtils.generateAccessibleId('select-error'))

// Compute aria-describedby based on presence of description or error
const getAriaDescribedBy = computed(() => {
	const ids = []
	if (props.description && StringUtils.isEmptyStr(props.errorMessage)) {
		ids.push(descriptionId.value)
	}
	if (props.errorMessage && props.state === BoSelectState.invalid) {
		ids.push(errorId.value)
	}
	return ids.length > 0 ? ids.join(' ') : undefined
})

const selectClass = computed<string>(() => {
	const baseClasses =
		'block w-full appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors'

	const sizeClasses = {
		[BoSelectSize.small]: 'px-3 py-1.5 text-xs',
		[BoSelectSize.default]: 'px-3 py-2 text-sm',
		[BoSelectSize.large]: 'px-4 py-3 text-base',
	}

	const variantClasses = {
		[BoSelectVariant.default]:
			'border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500/30 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500/40 dark:focus:border-blue-500',
		[BoSelectVariant.filled]:
			'border border-transparent rounded-md bg-gray-100 text-gray-900 focus:ring-blue-500/30 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-500/40 dark:focus:border-blue-500',
		[BoSelectVariant.underline]:
			'border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 focus:ring-0 focus:ring-offset-0 text-gray-900 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 outline-none',
	}

	let classes = TailwindUtils.merge(
		baseClasses,
		sizeClasses[props.size],
		variantClasses[props.variant],
	)

	if (props.disabled) {
		classes = TailwindUtils.merge(
			classes,
			'cursor-not-allowed bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
		)
	}

	if (props.state === BoSelectState.invalid) {
		classes = TailwindUtils.merge(
			classes,
			'border-red-500 focus:ring-red-500/30 focus:border-red-500 text-red-900 dark:border-red-500 dark:focus:border-red-500',
		)
	} else if (props.state === BoSelectState.valid) {
		classes = TailwindUtils.merge(
			classes,
			'border-green-500 focus:ring-green-500/30 focus:border-green-500 text-green-900 dark:border-green-500 dark:focus:border-green-500',
		)
	}

	return classes
})

function handleChange(event: Event) {
	const target = event.target as HTMLSelectElement
	const selectedText = getSelectedOptionText(target)
	emit('change', { event, selectedText })
	// Announce selection for screen readers
	if (selectedText) {
		AccessibilityUtils.announceToScreenReader(`Selected: ${selectedText}`, 'polite')
	}
}

function getSelectedOptionText(selectElement: HTMLSelectElement): string {
	if (props.multiple) {
		// For multiple select, get all selected options
		const selectedOptions = Array.from(selectElement.selectedOptions)
		return selectedOptions.map((option) => option.text).join(', ')
	} else {
		// For single select, get the selected option
		const selectedOption = selectElement.options[selectElement.selectedIndex]
		return selectedOption?.text || ''
	}
}

// Add a watcher for state changes to announce errors to screen readers
watch(
	() => props.state,
	(newState, oldState) => {
		if (
			newState === BoSelectState.invalid &&
			props.errorMessage &&
			oldState !== BoSelectState.invalid
		) {
			// Announce error message to screen readers when state becomes invalid
			AccessibilityUtils.announceToScreenReader(props.errorMessage, 'assertive')
		} else if (newState === BoSelectState.valid && oldState === BoSelectState.invalid) {
			// Announce when field becomes valid after being invalid
			AccessibilityUtils.announceToScreenReader('Field is now valid', 'polite')
		}
	},
)

// Add a watcher for error message changes
watch(
	() => props.errorMessage,
	(newMessage, oldMessage) => {
		if (newMessage && props.state === BoSelectState.invalid && newMessage !== oldMessage) {
			// Announce new error messages
			AccessibilityUtils.announceToScreenReader(newMessage, 'assertive')
		}
	},
)
</script>
