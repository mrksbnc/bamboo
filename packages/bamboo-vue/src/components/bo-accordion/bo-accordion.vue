<template>
	<div
		:id="id"
		data-slot="accordion"
		:data-disabled="disabled ? 'true' : undefined"
		:data-testid="dataTestId"
		:class="ACCORDION_MANIFEST.styles.base"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import {
	ACCORDION_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoAccordionProps,
	type BoAccordionValue,
} from '@workspace/bamboo-core';
import { computed, getCurrentInstance, provide, ref, watch } from 'vue';
import {
	accordionDisabledKey,
	accordionMultipleKey,
	accordionOpenValuesKey,
	accordionToggleKey,
} from './keys.js';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => generateComponentId('accordion'),
	dataTestId: () => generateDataTestId('accordion'),
	multiple: () => ACCORDION_MANIFEST.defaults.multiple,
	collapsible: () => ACCORDION_MANIFEST.defaults.collapsible,
});

const model = defineModel<BoAccordionValue>();
const instance = getCurrentInstance();

function toSet(value: BoAccordionValue | undefined): Set<string | number> {
	const result = new Set<string | number>();

	if (value === undefined) {
		return result;
	}

	if (Array.isArray(value)) {
		const items = props.multiple ? value : [value[value.length - 1]];

		items.forEach((item) => result.add(item));
	} else {
		result.add(value);
	}

	return result;
}

const isControlled = computed(() => {
	const componentProps = instance?.vnode.props;

	return componentProps !== null && componentProps !== undefined && 'modelValue' in componentProps;
});
const uncontrolled = ref<Set<string | number>>(toSet(props.defaultValue));

const openValues = computed<Set<string | number>>(() =>
	isControlled.value ? toSet(model.value) : uncontrolled.value,
);

// If modelValue appears again after uncontrolled usage, reset the internal state so
// switching between modes never leaves stale values behind.
watch(isControlled, (controlled) => {
	if (controlled) {
		uncontrolled.value = toSet(model.value);
	} else {
		uncontrolled.value = toSet(props.defaultValue);
	}
});

function toggle(value: string | number): void {
	const current = openValues.value;
	const next = new Set(current);

	if (current.has(value)) {
		if (!props.collapsible && next.size <= 1) {
			return;
		}

		next.delete(value);
	} else {
		if (!props.multiple) {
			next.clear();
		}

		next.add(value);
	}

	const nextValue: BoAccordionValue = props.multiple
		? Array.from(next)
		: (Array.from(next)[0] ?? undefined);

	if (isControlled.value) {
		model.value = nextValue;
	} else {
		uncontrolled.value = next;
		model.value = nextValue;
	}
}

provide(accordionOpenValuesKey, openValues);
provide(accordionToggleKey, toggle);
provide(
	accordionMultipleKey,
	computed(() => props.multiple),
);
provide(
	accordionDisabledKey,
	computed(() => props.disabled),
);
</script>
