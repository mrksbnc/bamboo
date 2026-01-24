<template>
	<div :id="id" :data-testid="dataTestId">
		<!-- Label -->
		<div v-if="label" :class="labelClasses">
			{{ label }}
		</div>

		<!-- Description -->
		<div v-if="description" :class="descriptionClasses">
			{{ description }}
		</div>

		<!-- Checkbox Group -->
		<div
			:role="role"
			:aria-labelledby="label ? `${id}-label` : undefined"
			:aria-describedby="description ? `${id}-description` : undefined"
			:aria-invalid="!!error"
			:class="groupClasses"
		>
			<slot />
		</div>

		<!-- Error message -->
		<div v-if="error" :class="errorClasses">
			<bo-icon :class="errorIconClasses" size="sm" icon="alert_circle" />
			<span :id="`${id}-error`">{{ error }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		CHECKBOX_GROUP_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoCheckboxGroupProps,
	} from '@workspace/bamboo-core';
	import { computed, provide } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoCheckboxGroupProps>(), {
		...CHECKBOX_GROUP_MANIFEST.defaults,
		modelValue: () => [],
	});

	const emit = defineEmits<{
		'update:modelValue': [value: (string | number | boolean)[]];
		change: [value: (string | number | boolean)[]];
	}>();

	// Computed
	const id = computed(() => props.id ?? generateComponentId('checkbox-group'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoCheckboxGroup'));

	const groupClasses = computed(() =>
		mergeTwClasses(
			CHECKBOX_GROUP_MANIFEST.styles.base,
			CHECKBOX_GROUP_MANIFEST.styles.orientation[props.orientation!],
		),
	);

	const labelClasses = computed(() => CHECKBOX_GROUP_MANIFEST.styles.label);
	const descriptionClasses = computed(() => CHECKBOX_GROUP_MANIFEST.styles.description);
	const errorClasses = computed(() => CHECKBOX_GROUP_MANIFEST.styles.error);
	const errorIconClasses = computed(() => CHECKBOX_GROUP_MANIFEST.styles.errorIcon);

	// Methods
	const updateValue = (value: string | number | boolean, checked: boolean) => {
		const currentValue = [...(props.modelValue || [])];

		if (checked) {
			if (!currentValue.includes(value)) {
				currentValue.push(value);
			}
		} else {
			const index = currentValue.indexOf(value);
			if (index > -1) {
				currentValue.splice(index, 1);
			}
		}

		emit('update:modelValue', currentValue);
		emit('change', currentValue);
	};

	const isChecked = (value: string | number | boolean): boolean => {
		return (props.modelValue || []).includes(value);
	};

	// Provide context to child checkboxes
	provide(
		'checkboxGroupValue',
		computed(() => props.modelValue || []),
	);
	provide('checkboxGroupSize', props.size);
	provide('checkboxGroupDisabled', props.disabled);
	provide('checkboxGroupRequired', props.required);
	provide('checkboxGroupUpdateValue', updateValue);
	provide('checkboxGroupIsChecked', isChecked);
</script>
