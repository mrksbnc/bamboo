<template>
	<div :class="orientationClasses">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, provide, reactive, ref } from 'vue';
import { BoCheckboxGroupOrientation, type BoCheckboxGroupProps } from './bo-checkbox-group.js';

const props = withDefaults(defineProps<BoCheckboxGroupProps>(), {
	name: () => IdentityService.instance.getComponentId('bo-checkbox-group'),
	disabled: false,
	orientation: BoCheckboxGroupOrientation.vertical,
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string[]): void;
	(e: 'change', value: string[]): void;
}>();

const modelValue = defineModel<string[]>({
	default: [],
	required: false,
});

const selectedValues = ref<string[]>(
	modelValue.value?.slice() ?? (props.defaultValue ? props.defaultValue.slice() : []),
);
const registeredItems = ref<Set<string>>(new Set());

const orientationClasses = computed<string>(() => {
	switch (props.orientation) {
		case BoCheckboxGroupOrientation.horizontal:
			return 'bo-checkbox-group bo-checkbox-group--horizontal flex flex-row gap-2';
		case BoCheckboxGroupOrientation.vertical:
		default:
			return 'bo-checkbox-group bo-checkbox-group--vertical flex flex-col gap-2';
	}
});

function registerItem(value: string): void {
	registeredItems.value.add(value);
}

function select(value: string): void {
	if (props.disabled) {
		return;
	}

	const idx = selectedValues.value.indexOf(value);

	if (idx === -1) {
		selectedValues.value.push(value);
	} else {
		selectedValues.value.splice(idx, 1);
	}

	modelValue.value = selectedValues.value.slice();

	emit('update:modelValue', modelValue.value);
	emit('change', modelValue.value);
}

provide(
	Symbol(InjectKey.CheckboxGroup),
	reactive({
		selectedValues: selectedValues.value,
		name: props.name,
		disabled: props.disabled,
		select,
		registerItem,
	}),
);
</script>
