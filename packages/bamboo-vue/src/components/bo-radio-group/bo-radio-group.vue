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

		<!-- Radio Group -->
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
		RADIO_GROUP_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoRadioGroupProps,
	} from '@workspace/bamboo-core';
	import { computed, provide } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoRadioGroupProps>(), {
		...RADIO_GROUP_MANIFEST.defaults,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string | number | boolean];
		change: [value: string | number | boolean];
	}>();

	// Computed
	const id = computed(() => props.id ?? generateComponentId('radio-group'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoRadioGroup'));

	const groupClasses = computed(() =>
		mergeTwClasses(
			RADIO_GROUP_MANIFEST.styles.base,
			RADIO_GROUP_MANIFEST.styles.orientation[props.orientation!],
		),
	);

	const labelClasses = computed(() => RADIO_GROUP_MANIFEST.styles.label);
	const descriptionClasses = computed(() => RADIO_GROUP_MANIFEST.styles.description);
	const errorClasses = computed(() => RADIO_GROUP_MANIFEST.styles.error);
	const errorIconClasses = computed(() => RADIO_GROUP_MANIFEST.styles.errorIcon);

	// Methods
	const updateValue = (value: string | number | boolean) => {
		emit('update:modelValue', value);
		emit('change', value);
	};

	// Provide context to child radio buttons
	provide(
		'radioGroupValue',
		computed(() => props.modelValue),
	);
	provide('radioGroupName', props.name);
	provide('radioGroupSize', props.size);
	provide('radioGroupDisabled', props.disabled);
	provide('radioGroupRequired', props.required);
	provide('radioGroupUpdateValue', updateValue);
</script>
