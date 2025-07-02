<template>
	<div
		:class="groupClasses"
		:data-testid="constructAttribute(name, 'radio-group')"
		role="radiogroup"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useAttributes } from '@/composables/use-attributes.js';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
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

const { constructAttribute } = useAttributes();

const modelValue = defineModel<string>({
	default: '',
	required: false,
});

const selectedValue = ref<string>(modelValue.value ?? props.defaultValue);
const registeredItems = ref<Set<string>>(new Set());

const RADIO_GROUP_STYLE = {
	layout: {
		base: /*tw*/ 'bo-radio-group',
	},
	orientation: {
		[BoRadioGroupOrientation.horizontal]: /*tw*/ 'bo-radio-group--horizontal flex flex-row gap-2',
		[BoRadioGroupOrientation.vertical]: /*tw*/ 'bo-radio-group--vertical flex flex-col gap-2',
	},
} as const;

const groupClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		RADIO_GROUP_STYLE.layout.base,
		RADIO_GROUP_STYLE.orientation[props.orientation],
	);
});

const ariaLabelledBy = computed<string | undefined>(() => {
	return props.ariaLabelledBy;
});

const ariaDescribedBy = computed<string | undefined>(() => {
	return props.ariaDescribedBy;
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
	InjectKey.RadioGroup,
	reactive({
		selectedValue,
		name: props.name,
		disabled: props.disabled,
		select,
		registerItem,
	}),
);
</script>
