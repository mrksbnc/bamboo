<template>
	<div class="flex items-center">
		<input
			type="radio"
			:id="id || name"
			:name="name"
			:value="value"
			:checked="isChecked"
			:disabled="disabled"
			@change="handleChange"
			:class="[
				variantClasses,
				sizeClasses,
				disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
				error ? 'border-red-500' : '',
			]"
		/>
		<bo-text
			v-if="label"
			:for="id ?? name"
			:size="labelSizeClasses"
			:value="label"
			:class="[
				'ml-2',
				disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer',
				error ? 'text-red-500' : 'text-gray-700',
			]"
		/>
	</div>
	<div
		v-if="error"
		class="mt-1 text-sm text-red-500"
	>
		{{ error }}
	</div>
</template>

<script setup lang="ts">
import { BoFontSize } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { type BoRadioProps, BoRadioVariant } from './bo-radio';

const props = withDefaults(defineProps<BoRadioProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-radio'),
	disabled: false,
	size: BoSize.default,
	variant: BoRadioVariant.primary,
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const isChecked = computed(() => props.modelValue === props.value);

const variantClasses = computed(() => {
	const baseClasses = 'form-radio transition-all duration-200 ease-in-out';

	if (props.customColor) {
		return `${baseClasses} text-[${props.customColor}]`;
	}

	const variants = {
		[BoRadioVariant.primary]: /**tw*/ 'text-blue-600 checked:bg-blue-600',
		[BoRadioVariant.success]: /**tw*/ 'text-green-600 checked:bg-green-600',
		[BoRadioVariant.danger]: /**tw*/ 'text-red-600 checked:bg-red-600',
		[BoRadioVariant.warning]: /**tw*/ 'text-yellow-600 checked:bg-yellow-600',
		[BoRadioVariant.dark]: /**tw*/ 'text-gray-900 checked:bg-gray-900',
	};

	switch (props.variant) {
		case BoRadioVariant.primary:
			return TailwindService.instance.merge(baseClasses, variants.primary);
		case BoRadioVariant.success:
			return TailwindService.instance.merge(baseClasses, variants.success);
		case BoRadioVariant.danger:
			return TailwindService.instance.merge(baseClasses, variants.danger);
		case BoRadioVariant.warning:
			return TailwindService.instance.merge(baseClasses, variants.warning);
		case BoRadioVariant.dark:
			return TailwindService.instance.merge(baseClasses, variants.dark);
		default:
			return baseClasses;
	}
});

const sizeClasses = computed<string>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return 'h-3 w-3';
		case BoSize.small:
			return 'h-4 w-4';

		case BoSize.large:
			return 'h-6 w-6';
		case BoSize.extra_large:
			return 'h-7 w-7';
		case BoSize.default:
		default:
			return 'h-5 w-5';
	}
});

const labelSizeClasses = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return BoFontSize.xs;
		case BoSize.small:
			return BoFontSize.sm;
		case BoSize.large:
			return BoFontSize.lg;
		case BoSize.extra_large:
			return BoFontSize.xl;
		case BoSize.default:
		default:
			return BoFontSize.base;
	}
});

const handleChange = () => {
	if (!props.disabled) {
		emit('update:modelValue', props.value);
	}
};
</script>
