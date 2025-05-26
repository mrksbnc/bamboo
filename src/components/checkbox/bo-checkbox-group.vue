<template>
	<div
		:class="containerClasses"
		:data-testid="constructAttribute(name, 'checkbox-group')"
		role="group"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, provide, reactive, ref, watch } from 'vue';
import { BoCheckboxGroupOrientation, type BoCheckboxGroupProps } from './bo-checkbox-group.js';

const props = withDefaults(defineProps<BoCheckboxGroupProps>(), {
	name: () => IdentityService.instance.getComponentId(),
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

const { constructAttribute } = useAttributes();

const selectedValues = ref<string[]>(
	modelValue.value?.slice() ?? (props.defaultValue ? props.defaultValue.slice() : []),
);
const registeredItems = ref<Set<string>>(new Set());

const CHECKBOX_GROUP_STYLE = {
	layout: {
		container: /*tw*/ 'bo-checkbox-group flex gap-2',
	},
	orientation: {
		[BoCheckboxGroupOrientation.horizontal]: /*tw*/ 'bo-checkbox-group--horizontal flex-row',
		[BoCheckboxGroupOrientation.vertical]: /*tw*/ 'bo-checkbox-group--vertical flex-col',
	},
} as const;

const containerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		CHECKBOX_GROUP_STYLE.layout.container,
		CHECKBOX_GROUP_STYLE.orientation[props.orientation],
	);
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
