<template>
	<div class="bo-checkbox-container flex items-center gap-2">
		<div class="bo-checkbox__input-container flex items-center justify-center">
			<input
				:id="id"
				v-model="modelValue"
				type="checkbox"
				:value="value"
				:name="name"
				:disabled="disabled"
				:class="inputClasses"
				@input="onInput"
				@change="onChange"
			/>
		</div>
		<div :class="labelClasses">
			<slot name="label">
				<bo-text
					v-if="label"
					:value="label"
					:color="BoTextColor.default"
					:size="checkBoxLabelFontSize"
					:weight="BoFontWeight.medium"
				/>
				<bo-text
					v-if="description"
					:value="description"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
				/>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import BoText from '@/components/bo-text/BoText.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '../bo-text/bo-text.js';
import { BoCheckboxProps } from './bo-checkbox.js';

const props = withDefaults(defineProps<BoCheckboxProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-checkbox'),
	name: () => IdentityService.instance.getComponentId('checkbox'),
	size: () => BoSize.default,
});

const emits = defineEmits<{
	(e: 'input', event: Event): void;
	(e: 'change', event: Event): void;
	(e: 'update:modelValue', value: boolean): void;
}>();

const modelValue = defineModel<boolean>({
	required: true,
	default: false,
});

const inputSizeClass = computed<string>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return /*tw*/ 'w-2 h-2';
		case BoSize.small:
			return /*tw*/ 'w-3 h-3';
		case BoSize.large:
			return /*tw*/ 'w-5 h-5';
		case BoSize.extra_large:
			return /*tw*/ 'w-6 h-6';
		case BoSize.default:
		default:
			return /*tw*/ 'w-4 h-4';
	}
});

const inputClasses = computed<string>(() => {
	const defaultClasses = /*tw*/ 'bo-checkbox__input cursor-pointer';
	const disabledClasses =
		/*tw*/ 'bo-checkbox__input-disabled disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500';

	return TailwindService.instance.merge(defaultClasses, disabledClasses, inputSizeClass.value);
});

const labelClasses = computed<string>(() => {
	const defaultClasses = /*tw*/ 'bo-checkbox__label';
	const disabledClasses = /*tw*/ 'text-gray-500';
	const checkedClasses = /*tw*/ 'text-primary-500';

	return TailwindService.instance.merge(
		defaultClasses,
		disabledClasses,
		checkedClasses,
		props.disabled ? 'opacity-50' : '',
	);
});

const checkBoxLabelFontSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return BoFontSize.xs;
		case BoSize.small:
			return BoFontSize.sm;
		case BoSize.default:
			return BoFontSize.base;
		case BoSize.large:
			return BoFontSize.lg;
		case BoSize.extra_large:
			return BoFontSize.xl;
	}
});

function onChange(event: Event): void {
	emits('change', event);
}

function onInput(event: Event): void {
	emits('input', event);
}
</script>
