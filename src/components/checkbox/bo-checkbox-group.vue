<template>
	<div :class="orientationClasses">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, provide, reactive, ref, watch } from 'vue';
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
	if (registeredItems.value.has(value)) {
		return;
	}

	registeredItems.value.add(value);

	// Check if this item should be initially selected
	if (props.defaultValue && props.defaultValue.includes(value)) {
		if (!selectedValues.value.includes(value)) {
			selectedValues.value.push(value);
			modelValue.value = selectedValues.value.slice();
		}
	}
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

// Watch for external changes to modelValue
watch(
	() => modelValue.value,
	(newValue) => {
		if (newValue && Array.isArray(newValue)) {
			selectedValues.value = newValue.slice();
		}
	},
	{ deep: true },
);

provide(
	InjectKey.CheckboxGroup,
	reactive({
		selectedValues,
		name: props.name,
		disabled: props.disabled,
		select,
		registerItem,
	}),
);
</script>
