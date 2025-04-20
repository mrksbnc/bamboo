<template>
	<slot name="toggle">
		<bo-button
			:id="id"
			:variant="toggleVariant"
			:label="activeOption.label"
			:prefix-icon="defaultOption.icon"
			data-dropdown-toggle="dropdown"
			@click="onDropdownClick"
		/>
	</slot>
	<div
		v-if="isDropdownOpen"
		id="dropdown"
		class="absolute z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg border border-neutral-100 bg-white shadow dark:divide-gray-700 dark:border-gray-800 dark:bg-gray-700"
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
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import { IdentityService } from '@/services';
import { ref, shallowRef, toRefs } from 'vue';
import type { BaseDropdownOption, BoDropdownProps } from './bo-dropdown';
import BoDefaultDropdownItem from './BoDefaultDropdownItem.vue';

const slots = defineSlots<{
	toggle(): unknown;
	items(): unknown;
}>();

const emit = defineEmits<{
	(e: 'select', value: BaseDropdownOption): void;
}>();

const props = withDefaults(defineProps<BoDropdownProps>(), {
	id: () => IdentityService.instance.getId('bo-dropdown'),
	toggleVariant: () => BoButtonVariant.primary,
	defaultOption: () => {
		return {
			icon: Icon.none,
			label: '',
		};
	},
	options: () => [],
	component: () => shallowRef(BoDefaultDropdownItem),
});

const { defaultOption, options, component } = toRefs(props);

const isDropdownOpen = ref<boolean>(false);
const activeOption = ref<BaseDropdownOption>(defaultOption.value);

function onDropdownClick(): void {
	isDropdownOpen.value = !isDropdownOpen.value;
}

function onOptionClick(option: BaseDropdownOption): void {
	activeOption.value = option;
	isDropdownOpen.value = false;
	emit('select', option);
}
</script>
