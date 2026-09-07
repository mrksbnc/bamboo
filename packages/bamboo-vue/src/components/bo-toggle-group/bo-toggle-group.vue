<template>
	<div
		ref="groupRef"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-disabled="disabled ? 'true' : undefined"
		:aria-orientation="orientation"
		:class="groupClasses"
		@keydown="onKeydown"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoToggleGroupProps } from '@workspace/bamboo-core';
import { TOGGLE_GROUP_MANIFEST } from '@workspace/bamboo-core';
import { computed, getCurrentInstance, provide, ref, useTemplateRef } from 'vue';
import { toggleGroupContextKey } from './keys.js';

const props = withDefaults(defineProps<BoToggleGroupProps>(), {
	id: () => generateComponentId('toggle-group'),
	dataTestId: () => generateDataTestId('toggle-group'),
	variant: () => TOGGLE_GROUP_MANIFEST.defaults.variant,
	size: () => TOGGLE_GROUP_MANIFEST.defaults.size,
	orientation: () => TOGGLE_GROUP_MANIFEST.defaults.orientation,
	role: () => TOGGLE_GROUP_MANIFEST.defaults.role,
});

const model = defineModel<string | string[]>();
const instance = getCurrentInstance();
const groupRef = useTemplateRef<HTMLElement>('groupRef');
const uncontrolledValue = ref<string | string[] | undefined>(props.defaultValue);
const isControlled = computed(() => {
	const componentProps = instance?.vnode.props;
	return componentProps !== null && componentProps !== undefined && 'modelValue' in componentProps;
});
const orientation = computed(() => {
	return props.orientation || TOGGLE_GROUP_MANIFEST.defaults.orientation;
});
const selectedValues = computed(() => {
	const value = isControlled.value ? props.modelValue : uncontrolledValue.value;
	if (Array.isArray(value)) return new Set(value);
	return value === undefined ? new Set<string>() : new Set([value]);
});
const variant = computed(() => {
	return props.variant || TOGGLE_GROUP_MANIFEST.defaults.variant;
});
const size = computed(() => {
	return props.size || TOGGLE_GROUP_MANIFEST.defaults.size;
});
const groupClasses = computed(() => {
	return mergeTwClasses(
		TOGGLE_GROUP_MANIFEST.styles.base,
		TOGGLE_GROUP_MANIFEST.styles.orientation[orientation.value],
	);
});

function updateValue(value: string | string[] | undefined): void {
	if (!isControlled.value) uncontrolledValue.value = value;
	model.value = value;
}

function select(value: string): void {
	if (props.disabled) return;
	if (props.multiple) {
		const values = new Set(selectedValues.value);
		if (values.has(value)) values.delete(value);
		else values.add(value);
		updateValue(Array.from(values));
		return;
	}
	updateValue(selectedValues.value.has(value) ? undefined : value);
}

function onKeydown(event: KeyboardEvent): void {
	const previousKey = orientation.value === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
	const nextKey = orientation.value === 'vertical' ? 'ArrowDown' : 'ArrowRight';
	const group = groupRef.value;

	if (!group || ![previousKey, nextKey, 'Home', 'End'].includes(event.key)) {
		return;
	}

	const items = Array.from(group.querySelectorAll<HTMLButtonElement>('button')).filter(
		(item) => !item.disabled,
	);
	const currentItem = event.target as HTMLButtonElement;
	const currentIndex = items.indexOf(currentItem);
	if (items.length === 0 || currentIndex === -1) return;

	event.preventDefault();
	let nextIndex = currentIndex;
	if (event.key === 'Home') nextIndex = 0;
	else if (event.key === 'End') nextIndex = items.length - 1;
	else {
		const direction = event.key === nextKey ? 1 : -1;
		nextIndex = (currentIndex + direction + items.length) % items.length;
	}

	items[nextIndex]?.focus();
}

provide(toggleGroupContextKey, {
	selected: (value) => selectedValues.value.has(value),
	select,
	disabled: computed(() => {
		return !!props.disabled;
	}),
	variant,
	size,
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toggle-group.manifest.css';
</style>
