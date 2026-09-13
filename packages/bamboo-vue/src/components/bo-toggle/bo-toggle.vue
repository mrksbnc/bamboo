<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		type="button"
		:role="role"
		:disabled="disabled"
		:aria-label="ariaLabel ?? label"
		:aria-labelledby="ariaLabelledBy"
		:aria-pressed="isPressed ? 'true' : 'false'"
		:aria-disabled="disabled ? 'true' : undefined"
		:data-state="isPressed ? 'on' : 'off'"
		:class="toggleClasses"
		@click="toggle"
		@keydown="onKeydown"
	>
		<bo-text v-if="label">{{ label }}</bo-text>
		<slot v-else />
	</button>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import type { BoToggleProps } from '@workspace/bamboo-core';
import { TOGGLE_MANIFEST } from '@workspace/bamboo-core';
import { computed, getCurrentInstance, ref } from 'vue';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoToggleProps>(), {
	id: () => generateComponentId('toggle'),
	dataTestId: () => generateDataTestId('toggle'),
	variant: () => TOGGLE_MANIFEST.defaults.variant,
	size: () => TOGGLE_MANIFEST.defaults.size,
	role: () => TOGGLE_MANIFEST.defaults.role,
});

const model = defineModel<boolean>();
const instance = getCurrentInstance();
const uncontrolledValue = ref(props.defaultValue ?? false);
const isControlled = computed(() => {
	const componentProps = instance?.vnode.props;
	return componentProps !== null && componentProps !== undefined && 'modelValue' in componentProps;
});
const isPressed = computed(() => {
	return isControlled.value ? (props.modelValue ?? false) : uncontrolledValue.value;
});

const toggleClasses = computed(() => {
	return [
		TOGGLE_MANIFEST.styles.base,
		TOGGLE_MANIFEST.styles.variant[props.variant || 'default'],
		TOGGLE_MANIFEST.styles.size[props.size || 'default'],
		isPressed.value ? TOGGLE_MANIFEST.styles.pressed : '',
	];
});

function toggle(): void {
	if (props.disabled) {
		return;
	}

	const nextValue = !isPressed.value;
	if (!isControlled.value) {
		uncontrolledValue.value = nextValue;
	}
	model.value = nextValue;
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}

	event.preventDefault();
	toggle();
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toggle.manifest.css';
</style>
