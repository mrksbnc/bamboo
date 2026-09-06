<template>
	<div ref="groupRef" :id="id" :data-testid="dataTestId" :role="role" :class="groupClasses">
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	BUTTON_GROUP_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoButtonGroupProps,
} from '@workspace/bamboo-core';
import { computed, onMounted, provide, ref, useTemplateRef, watch } from 'vue';

const props = withDefaults(defineProps<BoButtonGroupProps>(), {
	...BUTTON_GROUP_MANIFEST.defaults,
});

const model = defineModel<string | number | (string | number)[]>();
const groupRef = useTemplateRef<HTMLElement>('groupRef');
const selectedValues = ref<Set<string | number>>(new Set());

const id = computed(() => {
	return props.id ?? generateComponentId('button-group');
});
const dataTestId = computed(() => {
	return props.dataTestId ?? generateDataTestId('BoButtonGroup');
});

const groupClasses = computed(() => {
	const orientation = props.orientation ?? BUTTON_GROUP_MANIFEST.defaults.orientation;
	const attached = props.attached ?? BUTTON_GROUP_MANIFEST.defaults.attached;

	const classes = [
		BUTTON_GROUP_MANIFEST.styles.base,
		BUTTON_GROUP_MANIFEST.styles.orientation[orientation],
		props.fullWidth ? BUTTON_GROUP_MANIFEST.styles.fullWidth : '',
		attached ? BUTTON_GROUP_MANIFEST.styles.attached.orientation[orientation] : '',
	];

	return classes.filter(Boolean).join(' ');
});

const initializeSelection = () => {
	selectedValues.value.clear();
	if (model.value !== undefined) {
		if (Array.isArray(model.value)) {
			model.value.forEach((value) => selectedValues.value.add(value));
		} else {
			selectedValues.value.add(model.value);
		}
	}
};

const handleButtonClick = (buttonValue: string | number) => {
	if (props.multiple) {
		const newSelection = new Set(selectedValues.value);

		if (newSelection.has(buttonValue)) {
			if (!props.required || newSelection.size > 1) {
				newSelection.delete(buttonValue);
			}
		} else {
			newSelection.add(buttonValue);
		}

		selectedValues.value = newSelection;
		model.value = Array.from(newSelection);
	} else {
		if (selectedValues.value.has(buttonValue) && !props.required) {
			selectedValues.value.clear();
			model.value = undefined;
		} else {
			selectedValues.value.clear();
			selectedValues.value.add(buttonValue);
			model.value = buttonValue;
		}
	}
};

const isButtonSelected = (buttonValue: string | number): boolean => {
	return selectedValues.value.has(buttonValue);
};

provide('buttonGroupSize', props.size);
provide('buttonGroupVariant', props.variant);
provide('buttonGroupOrientation', props.orientation);
provide('buttonGroupAttached', props.attached);
provide('buttonGroupFullWidth', props.fullWidth);
provide('buttonGroupHandleClick', handleButtonClick);
provide('buttonGroupIsSelected', isButtonSelected);

watch(model, initializeSelection, { immediate: true });

onMounted(() => {
	if (!groupRef.value) return;

	const buttons = Array.from(groupRef.value.querySelectorAll('button'));

	buttons.forEach((button, index) => {
		const buttonValue =
			button.getAttribute('data-value') || button.textContent?.trim() || index.toString();

		button.addEventListener('click', (e) => {
			e.preventDefault();
			handleButtonClick(buttonValue);
		});

		const updateButtonSelection = () => {
			const selectedClass = BUTTON_GROUP_MANIFEST.styles.selected;

			if (isButtonSelected(buttonValue)) {
				button.classList.add(selectedClass);
				button.setAttribute('aria-pressed', 'true');
			} else {
				button.classList.remove(selectedClass);
				button.setAttribute('aria-pressed', 'false');
			}
		};

		updateButtonSelection();

		watch(selectedValues, updateButtonSelection, { deep: true });
	});
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/button-group.manifest.css';
</style>
