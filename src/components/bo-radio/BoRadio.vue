<template>
	<label
		class="flex gap-2"
		:class="labelClass"
	>
		<input
			v-model="modelValue"
			type="radio"
			:id="id"
			:name="name"
			:disabled="disabled"
			:class="inputClass"
		/>
		<div class="flex flex-col gap-1">
			<bo-text
				v-if="text"
				:text="text"
				:size="BoFontSize.sm"
				:weight="BoFontWeight.medium"
				class="ms-2 text-gray-900 disabled:text-gray-400 dark:text-gray-300 dark:disabled:text-gray-500"
			/>
			<bo-text
				v-if="description"
				:text="description"
				:size="BoFontSize.sm"
				:weight="BoFontWeight.medium"
				class="text-gray-500 dark:text-gray-400"
			/>
		</div>
	</label>
</template>

<script setup lang="ts">
import { IdentityService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed } from 'vue';
import { BoFontSize, BoFontWeight } from '../bo-text';
import type { BoRadioProps } from './bo-radio';

const props = withDefaults(defineProps<BoRadioProps>(), {
	id: () => IdentityService.instance.getId('radio'),
	size: BoSize.default,
	name: 'radio',
});

const modelValue = defineModel<boolean>({
	required: true,
});

const classes = {
	default: 'flex gap-2 items-center cursor-pointer',
	disabled: 'disabled:cursor-not-allowed',
};

const sizeClasses = computed<string>(() => {
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

const inputClass = computed<string>(() => {
	return TailwindService.instance.merge(classes.default, classes.disabled, sizeClasses.value);
});

const labelClass = computed<string>(() => {
	return props.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
});
</script>
