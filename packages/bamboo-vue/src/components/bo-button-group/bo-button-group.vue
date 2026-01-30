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
		mergeTwClasses,
		type BoButtonGroupProps,
	} from '@workspace/bamboo-core';
	import { computed, onMounted, provide, ref, watch } from 'vue';

	const props = withDefaults(defineProps<BoButtonGroupProps>(), {
		...BUTTON_GROUP_MANIFEST.defaults,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string | number | (string | number)[] | undefined];
	}>();

	// Template refs
	const groupRef = ref<HTMLElement>();

	// Internal state
	const selectedValues = ref<Set<string | number>>(new Set());

	// Computed
	const id = computed(() => props.id ?? generateComponentId('button-group'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoButtonGroup'));

	const groupClasses = computed(() => {
		return mergeTwClasses(
			BUTTON_GROUP_MANIFEST.styles.base,
			BUTTON_GROUP_MANIFEST.styles.orientation[props.orientation!],
			props.fullWidth ? BUTTON_GROUP_MANIFEST.styles.fullWidth : '',
		);
	});

	// Initialize selected values from modelValue
	const initializeSelection = () => {
		selectedValues.value.clear();
		if (props.modelValue !== undefined) {
			if (Array.isArray(props.modelValue)) {
				props.modelValue.forEach((value) => selectedValues.value.add(value));
			} else {
				selectedValues.value.add(props.modelValue);
			}
		}
	};

	// Handle button selection
	const handleButtonClick = (buttonValue: string | number) => {
		if (props.multiple) {
			const newSelection = new Set(selectedValues.value);

			if (newSelection.has(buttonValue)) {
				// Deselect if not required or if other buttons are selected
				if (!props.required || newSelection.size > 1) {
					newSelection.delete(buttonValue);
				}
			} else {
				newSelection.add(buttonValue);
			}

			selectedValues.value = newSelection;
			emit('update:modelValue', Array.from(newSelection));
		} else {
			// Single selection
			if (selectedValues.value.has(buttonValue) && !props.required) {
				// Deselect if not required
				selectedValues.value.clear();
				emit('update:modelValue', undefined);
			} else {
				// Select new button
				selectedValues.value.clear();
				selectedValues.value.add(buttonValue);
				emit('update:modelValue', buttonValue);
			}
		}
	};

	// Check if a button is selected
	const isButtonSelected = (buttonValue: string | number): boolean => {
		return selectedValues.value.has(buttonValue);
	};

	// Provide context to child buttons
	provide('buttonGroupSize', props.size);
	provide('buttonGroupVariant', props.variant);
	provide('buttonGroupOrientation', props.orientation);
	provide('buttonGroupAttached', props.attached);
	provide('buttonGroupFullWidth', props.fullWidth);
	provide('buttonGroupHandleClick', handleButtonClick);
	provide('buttonGroupIsSelected', isButtonSelected);

	// Watch for modelValue changes
	watch(() => props.modelValue, initializeSelection, { immediate: true });

	// Apply attached styles to child buttons using CSS classes
	onMounted(() => {
		if (!groupRef.value) return;

		const buttons = Array.from(groupRef.value.querySelectorAll('button'));

		buttons.forEach((button, index) => {
			const isFirst = index === 0;
			const isLast = index === buttons.length - 1;
			const isMiddle = !isFirst && !isLast;
			const isSingle = buttons.length === 1;

			// Add a class to identify buttons in a group
			button.classList.add('group-button');

			// Apply attached styles if enabled
			if (props.attached) {
				if (isSingle) {
					// Single button - no special styling needed
					button.classList.add(
						...BUTTON_GROUP_MANIFEST.styles.attached.single[props.orientation!]
							.split(' ')
							.filter(Boolean),
					);
				} else if (isFirst) {
					button.classList.add(
						...BUTTON_GROUP_MANIFEST.styles.attached.first[props.orientation!]
							.split(' ')
							.filter(Boolean),
					);
				} else if (isLast) {
					button.classList.add(
						...BUTTON_GROUP_MANIFEST.styles.attached.last[props.orientation!]
							.split(' ')
							.filter(Boolean),
					);
				} else if (isMiddle) {
					button.classList.add(
						...BUTTON_GROUP_MANIFEST.styles.attached.middle[props.orientation!]
							.split(' ')
							.filter(Boolean),
					);
				}
			}

			// Apply full width to individual buttons if group is full width
			if (props.fullWidth) {
				button.classList.add('flex-1');
			}

			// Add hover effect for better visual feedback
			button.classList.add('relative', 'hover:z-10', 'focus:z-10');

			// Handle button selection styling and click events
			const buttonValue =
				button.getAttribute('data-value') || button.textContent?.trim() || index.toString();

			// Add click handler for selection
			button.addEventListener('click', (e) => {
				e.preventDefault();
				handleButtonClick(buttonValue);
			});

			// Apply selected styling if button is selected
			const updateButtonSelection = () => {
				if (isButtonSelected(buttonValue)) {
					button.classList.add(...BUTTON_GROUP_MANIFEST.styles.selected.split(' ').filter(Boolean));
					button.setAttribute('aria-pressed', 'true');
				} else {
					button.classList.remove(
						...BUTTON_GROUP_MANIFEST.styles.selected.split(' ').filter(Boolean),
					);
					button.setAttribute('aria-pressed', 'false');
				}
			};

			// Initial selection state
			updateButtonSelection();

			// Watch for selection changes
			watch(selectedValues, updateButtonSelection, { deep: true });
		});
	});
</script>
