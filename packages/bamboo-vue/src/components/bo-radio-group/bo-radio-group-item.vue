<template>
	<bo-label
		:for="id"
		:disabled="isDisabled"
		:class="RADIO_GROUP_ITEM_MANIFEST.styles.base"
		:aria-label="ariaLabel"
	>
		<input
			:id="id"
			:data-testid="dataTestId"
			:name="groupName"
			:value="value"
			type="radio"
			:checked="isSelected"
			:disabled="isDisabled"
			:role="role"
			:aria-label="ariaLabel"
			:aria-describedby="ariaDescribedBy"
			:class="RADIO_GROUP_ITEM_MANIFEST.styles.input"
			@change="onChange"
		/>
		<span :class="RADIO_GROUP_ITEM_MANIFEST.styles.indicator" aria-hidden="true">
			<span :class="RADIO_GROUP_ITEM_MANIFEST.styles.dot" />
		</span>
		<span
			v-if="label || description || $slots['default']"
			:class="RADIO_GROUP_ITEM_MANIFEST.styles.labelGroup"
		>
			<span v-if="label" :class="RADIO_GROUP_ITEM_MANIFEST.styles.label">{{ label }}</span>
			<span v-if="description" :class="RADIO_GROUP_ITEM_MANIFEST.styles.description">
				{{ description }}
			</span>
			<slot />
		</span>
	</bo-label>
</template>

<script setup lang="ts">
import {
	RADIO_GROUP_ITEM_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoRadioGroupItemProps,
} from '@workspace/bamboo-core';
import { computed, inject } from 'vue';
import { BoLabel } from '../bo-label';
import {
	radioGroupDisabledKey,
	radioGroupNameKey,
	radioGroupSetValueKey,
	radioGroupValueKey,
} from './keys.js';

const props = withDefaults(defineProps<BoRadioGroupItemProps>(), {
	id: () => generateComponentId('radio-item'),
	dataTestId: () => generateDataTestId('radio-item'),
});

const groupValue = inject(radioGroupValueKey);
const setGroupValue = inject(radioGroupSetValueKey);
const groupDisabled = inject(
	radioGroupDisabledKey,
	computed(() => {
		return false;
	}),
);
const groupName = inject(
	radioGroupNameKey,
	computed(() => {
		return generateComponentId('radio-group');
	}),
);

const isSelected = computed(() => {
	return groupValue?.value === props.value;
});
const isDisabled = computed(() => {
	return !!props.disabled || groupDisabled.value;
});

function onChange(): void {
	if (!isDisabled.value) {
		setGroupValue?.(props.value);
	}
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/radio-group-item.manifest.css';
</style>
