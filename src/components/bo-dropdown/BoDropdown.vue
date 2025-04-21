<template>
	<div
		class="bo-dropdown relative"
		ref="dropdownContainer"
	>
		<div ref="triggerRef">
			<slot name="toggle">
				<bo-button
					:id="id"
					:variant="toggleVariant"
					:label="activeOption.label"
					:prefix-icon="defaultOption.icon"
					:suffix-icon="isDropdownOpen ? Icon.chevron_up : Icon.chevron_down"
					data-dropdown-toggle="dropdown"
					@click="onDropdownToggle"
				/>
			</slot>
		</div>
		<div
			v-if="isDropdownOpen"
			id="dropdown"
			ref="floatingRef"
			class="z-10 mt-1 w-44 divide-y divide-gray-100 rounded-lg border border-neutral-100 bg-white shadow dark:divide-gray-700 dark:border-gray-800 dark:bg-gray-700"
			:style="{ position: 'absolute', top: `${floatingY}px`, left: `${floatingX}px` }"
		>
			<div class="p-1">
				<component
					:is="component"
					v-for="option in options"
					:key="option.label"
					:icon="option.icon"
					:label="option.label"
					@click="onOptionClick(option)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import { IdentityService } from '@/services';
import { onClickOutside, useElementBounding } from '@vueuse/core';
import { computed, nextTick, ref, shallowRef, toRefs, watch } from 'vue';
import type { BaseDropdownOption, BoDropdownProps } from './bo-dropdown';
import { BoDropdownPlacement } from './bo-dropdown';
import BoDefaultDropdownItem from './BoDefaultDropdownItem.vue';

const slots = defineSlots<{
	toggle(): unknown;
	items(): unknown;
}>();

const emit = defineEmits<{
	(e: 'select', value: BaseDropdownOption): void;
}>();

const props = withDefaults(defineProps<BoDropdownProps>(), {
	id: () => IdentityService.instance.generateId('bo-dropdown'),
	toggleVariant: () => BoButtonVariant.primary,
	options: () => [],
	component: () => shallowRef(BoDefaultDropdownItem),
	defaultOption: () => {
		return {
			icon: Icon.none,
			label: '',
		};
	},
	placement: BoDropdownPlacement.bottomStart,
});

const { defaultOption, options, component, placement } = toRefs(props);

const isDropdownOpen = ref<boolean>(false);
const activeOption = ref<BaseDropdownOption>(defaultOption.value);
const dropdownContainer = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const floatingRef = ref<HTMLElement | null>(null);

// Get the bounds of the trigger element
const triggerBounds = useElementBounding(triggerRef);

// Calculate the positions for the dropdown
const floatingX = computed(() => {
	switch (placement.value) {
		case BoDropdownPlacement.bottom:
		case BoDropdownPlacement.top:
			return (
				triggerBounds.left.value +
				triggerBounds.width.value / 2 -
				(floatingRef.value?.offsetWidth || 0) / 2
			);
		case BoDropdownPlacement.bottomStart:
		case BoDropdownPlacement.topStart:
			return triggerBounds.left.value;
		case BoDropdownPlacement.bottomEnd:
		case BoDropdownPlacement.topEnd:
			return triggerBounds.right.value - (floatingRef.value?.offsetWidth || 0);
		case BoDropdownPlacement.left:
		case BoDropdownPlacement.leftStart:
		case BoDropdownPlacement.leftEnd:
			return triggerBounds.left.value - (floatingRef.value?.offsetWidth || 0) - 4;
		case BoDropdownPlacement.right:
		case BoDropdownPlacement.rightStart:
		case BoDropdownPlacement.rightEnd:
			return triggerBounds.right.value + 4;
		default:
			return triggerBounds.left.value;
	}
});

const floatingY = computed(() => {
	switch (placement.value) {
		case BoDropdownPlacement.bottom:
		case BoDropdownPlacement.bottomStart:
		case BoDropdownPlacement.bottomEnd:
			return triggerBounds.bottom.value + 4;
		case BoDropdownPlacement.top:
		case BoDropdownPlacement.topStart:
		case BoDropdownPlacement.topEnd:
			return triggerBounds.top.value - (floatingRef.value?.offsetHeight || 0) - 4;
		case BoDropdownPlacement.left:
		case BoDropdownPlacement.right:
			return (
				triggerBounds.top.value +
				triggerBounds.height.value / 2 -
				(floatingRef.value?.offsetHeight || 0) / 2
			);
		case BoDropdownPlacement.leftStart:
		case BoDropdownPlacement.rightStart:
			return triggerBounds.top.value;
		case BoDropdownPlacement.leftEnd:
		case BoDropdownPlacement.rightEnd:
			return triggerBounds.bottom.value - (floatingRef.value?.offsetHeight || 0);
		default:
			return triggerBounds.bottom.value + 4;
	}
});

// Close dropdown when clicking outside
onClickOutside(dropdownContainer, () => {
	isDropdownOpen.value = false;
});

function onDropdownToggle(): void {
	isDropdownOpen.value = !isDropdownOpen.value;
}

function onOptionClick(option: BaseDropdownOption): void {
	activeOption.value = option;
	isDropdownOpen.value = false;

	emit('select', option);
}

// Watch for dropdown open state to recalculate position
watch(isDropdownOpen, async (isOpen) => {
	if (isOpen) {
		await nextTick();
		// Ensure DOM is updated before reading dimensions
		window.requestAnimationFrame(() => {
			// Force a recomputation of the computed properties
			triggerBounds.update();
		});
	}
});

defineExpose({
	onDropdownToggle,
});
</script>

<style scoped>
.bo-dropdown {
	display: inline-block;
}
</style>
