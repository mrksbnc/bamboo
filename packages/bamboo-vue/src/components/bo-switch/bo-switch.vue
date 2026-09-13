<template>
	<div
		:data-testid="dataTestId"
		:data-orientation="orientation"
		:class="SWITCH_MANIFEST.styles.base"
	>
		<button
			:id="id"
			:type="'button'"
			:aria-checked="isChecked ? 'true' : 'false'"
			:aria-label="ariaLabel ?? (!label ? undefined : label)"
			:aria-labelledby="ariaLabel ? undefined : ariaLabelledBy || (label ? labelId : undefined)"
			:aria-describedby="ariaDescribedBy || (description ? descriptionId : undefined)"
			:disabled="disabled"
			:aria-disabled="disabled ? 'true' : undefined"
			:aria-required="required ? 'true' : undefined"
			:name="name"
			:value="value"
			:required="required"
			:role="role"
			:data-state="isChecked ? 'checked' : 'unchecked'"
			:class="SWITCH_MANIFEST.styles.control"
			:style="controlStyleValues"
			@click="toggle"
			@keydown="onKeydown"
		>
			<span
				:data-state="isChecked ? 'checked' : 'unchecked'"
				:class="SWITCH_MANIFEST.styles.thumb"
				:style="thumbStyleValues"
			/>
		</button>
		<span
			v-if="label || description || $slots['default']"
			:class="SWITCH_MANIFEST.styles.labelGroup"
		>
			<bo-text v-if="label" :id="labelId" :class="SWITCH_MANIFEST.styles.label">{{
				label
			}}</bo-text>
			<bo-text v-if="description" :id="descriptionId" :class="SWITCH_MANIFEST.styles.description">
				{{ description }}
			</bo-text>
			<slot />
		</span>
	</div>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
} from '@workspace/bamboo-core';
import type { BoSwitchProps } from '@workspace/bamboo-core';
import { SWITCH_MANIFEST } from '@workspace/bamboo-core';
import { computed, getCurrentInstance, ref, type StyleValue } from 'vue';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoSwitchProps>(), {
	id: () => generateComponentId('switch'),
	dataTestId: () => generateDataTestId('switch'),
	orientation: () => SWITCH_MANIFEST.defaults.orientation,
	role: () => SWITCH_MANIFEST.defaults.role,
});

const model = defineModel<boolean>();
const instance = getCurrentInstance();
const uncontrolledValue = ref(props.defaultValue ?? false);
const isControlled = computed(() => {
	const componentProps = instance?.vnode.props;
	return componentProps !== null && componentProps !== undefined && 'modelValue' in componentProps;
});
const isChecked = computed(() => {
	return isControlled.value ? (props.modelValue ?? false) : uncontrolledValue.value;
});
const labelId = computed(() => {
	return `${props.id}-label`;
});
const descriptionId = computed(() => {
	return `${props.id}-description`;
});
const controlStyleValues = computed<StyleValue>(() => {
	const customColor = props.customColor;
	if (!customColor) return {};

	if (typeof customColor === 'string') {
		return { backgroundColor: getValidOrFallbackColorFromStr(customColor) };
	}

	const background = isChecked.value
		? (customColor.checkedBackground ?? customColor.background)
		: customColor.background;
	const style: StyleValue = {};
	if (background) style.backgroundColor = getValidOrFallbackColorFromStr(background);
	if (customColor.border) style.borderColor = getValidOrFallbackColorFromStr(customColor.border);
	if (customColor.text) style.color = getValidOrFallbackColorFromStr(customColor.text);
	return style;
});
const thumbStyleValues = computed<StyleValue>(() => {
	const customColor = props.customColor;
	const customThumbColor = props.customThumbColor;
	const thumbColor =
		customThumbColor ||
		(typeof customColor === 'string'
			? undefined
			: isChecked.value
				? (customColor?.checkedThumb ?? customColor?.thumb)
				: customColor?.thumb);

	return thumbColor ? { backgroundColor: getValidOrFallbackColorFromStr(thumbColor) } : {};
});

function toggle(): void {
	if (props.disabled) return;

	const nextValue = !isChecked.value;
	if (!isControlled.value) uncontrolledValue.value = nextValue;
	model.value = nextValue;
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key !== 'Enter' && event.key !== ' ') return;

	event.preventDefault();
	toggle();
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/switch.manifest.css';
</style>
