<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role || 'radiogroup'"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-required="required ? 'true' : undefined"
		:aria-disabled="disabled ? 'true' : undefined"
		:aria-orientation="orientation"
		:class="groupClasses"
		@keydown="onKeydown"
	>
		<slot />
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
import {
	radioGroupDisabledKey,
	radioGroupNameKey,
	radioGroupOrientationKey,
	radioGroupSetValueKey,
	radioGroupValueKey,
} from './keys.js';

const props = withDefaults(defineProps<BoRadioGroupProps>(), {
	id: () => generateComponentId('radio-group'),
	dataTestId: () => generateDataTestId('radio-group'),
	orientation: () => RADIO_GROUP_MANIFEST.defaults.orientation,
});

const model = defineModel<string | number>();
const orientation = computed(() => props.orientation || RADIO_GROUP_MANIFEST.defaults.orientation);
const groupName = computed(() => props.name || props.id || generateComponentId('radio-group'));
const groupClasses = computed(() =>
	mergeTwClasses(
		RADIO_GROUP_MANIFEST.styles.base,
		RADIO_GROUP_MANIFEST.styles.orientation[orientation.value],
	),
);

function setValue(value: string | number): void {
	model.value = value;
}

function onKeydown(event: KeyboardEvent): void {
	if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) {
		return;
	}

	const group = event.currentTarget as HTMLElement;
	const items = Array.from(
		group.querySelectorAll<HTMLInputElement>('input[type="radio"]:not(:disabled)'),
	);

	if (items.length === 0) {
		return;
	}

	event.preventDefault();
	const activeIndex = items.indexOf(document.activeElement as HTMLInputElement);
	const checkedIndex = items.findIndex((item) => item.checked);
	const currentIndex = activeIndex >= 0 ? activeIndex : checkedIndex;
	const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
	const nextIndex = (currentIndex + direction + items.length) % items.length;
	const next = items[nextIndex];

	if (next) {
		next.focus();
		next.dispatchEvent(new Event('change', { bubbles: true }));
	}
}

provide(radioGroupValueKey, model);
provide(radioGroupSetValueKey, setValue);
provide(
	radioGroupDisabledKey,
	computed(() => !!props.disabled),
);
provide(radioGroupNameKey, groupName);
provide(radioGroupOrientationKey, orientation);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/radio-group.manifest.css';
</style>
