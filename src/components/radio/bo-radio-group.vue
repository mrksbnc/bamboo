<template>
	<div :class="orientationClasses">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { InjectionKey } from '@/shared/injection-key.js';
import { computed, provide, reactive, ref } from 'vue';
import { BoRadioGroupOrientation, type BoRadioGroupProps } from './bo-radio-group.js';

const props = withDefaults(defineProps<BoRadioGroupProps>(), {
	name: () => IdentityService.instance.getComponentId('bo-radio-group'),
	disabled: false,
	orientation: BoRadioGroupOrientation.vertical,
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'change', value: string): void;
}>();

const modelValue = defineModel<string>({
	default: '',
	required: false,
});

const selectedValue = ref<string>(modelValue.value ?? props.defaultValue);
const registeredItems = ref<Set<string>>(new Set());

const orientationClasses = computed<string>(() => {
	switch (props.orientation) {
		case BoRadioGroupOrientation.horizontal:
			return 'bo-radio-group bo-radio-group--horizontal flex flex-row gap-2';
		case BoRadioGroupOrientation.vertical:
		default:
			return 'bo-radio-group bo-radio-group--vertical flex flex-col gap-2';
	}
});

function registerItem(value: string, isDefault: boolean): void {
	if (registeredItems.value.has(value)) {
		return;
	}

	registeredItems.value.add(value);

	if (isDefault || value === props.defaultValue) {
		selectedValue.value = value;
		modelValue.value = value;
	}
}

function select(value: string): void {
	if (props.disabled) {
		return;
	}

	selectedValue.value = value;
	modelValue.value = value;
	emit('update:modelValue', value);
	emit('change', value);
}

provide(
	InjectionKey.RadioGroup,
	reactive({
		selectedValue,
		name: props.name,
		disabled: props.disabled,
		select,
		registerItem,
	}),
);
</script>
