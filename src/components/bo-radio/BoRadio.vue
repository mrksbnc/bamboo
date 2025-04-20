<template>
	<label
		class="flex items-center"
		:class="labelClass"
	>
		<input
			v-model="modelValue"
			type="radio"
			:value="value"
			:id="inputId"
			:name="name"
			:disabled="disabled"
			:class="inputClass"
		/>
		<span
			v-if="text"
			class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			:class="{ 'text-gray-400 dark:text-gray-500': disabled }"
		>
			{{ text }}
		</span>
		<slot></slot>
		<p
			v-if="description"
			class="mt-1 text-xs text-gray-500 dark:text-gray-400"
		>
			{{ description }}
		</p>
	</label>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { computed } from 'vue';
import type { BoRadioProps } from './bo-radio';

const props = withDefaults(
	defineProps<
		BoRadioProps & {
			modelValue?: any;
		}
	>(),
	{
		id: undefined,
		text: undefined,
		description: undefined,
		disabled: false,
		size: BoSize.default,
		name: undefined,
	},
);

const emit = defineEmits<{
	(e: 'update:modelValue', value: any): void;
}>();

const inputId = computed(() => props.id ?? IdentityService.instance.getId('radio'));

const modelValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emit('update:modelValue', val);
	},
});

const sizeClasses = computed(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return 'w-3 h-3';
		case BoSize.small:
			return 'w-3.5 h-3.5';
		case BoSize.default:
			return 'w-4 h-4';
		case BoSize.large:
			return 'w-5 h-5';
		case BoSize.extra_large:
			return 'w-6 h-6';
		default:
			return 'w-4 h-4';
	}
});

const inputClass = computed(() => {
	return [
		sizeClasses.value,
		'text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
	];
});

const labelClass = computed(() => {
	return props.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
});
</script>
