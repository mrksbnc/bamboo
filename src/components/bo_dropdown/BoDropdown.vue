<template>
	<BoButton
		:id="id"
		:variant="toggleVariant"
		:label="activeOption.label"
		:prefix-icon="defaultOption.icon"
		data-dropdown-toggle="dropdown"
		@click="onDropdownClick"
	></BoButton>
	<div
		v-if="isDropdownOpen"
		id="dropdown"
		class="absolute z-10 bg-white border border-neutral-100 dark:border-gray-800 divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 mt-2"
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
import { ref, shallowRef, toRefs } from 'vue';
import { Icon } from '@/components/bo_icon';
import { BoButton, BoButtonVariant } from '@/components/bo_button';
import { IdentityUtils } from '@/utils';
import type { BaseDropdownOption, BoDropdownProps } from './bo_dropdown';
import BoDefaultDropdownItem from './options/BoDefaultDropdownItem.vue';

const props = withDefaults(defineProps<BoDropdownProps>(), {
	id: () => IdentityUtils.generateRandomIdWithPrefix('bo-dropdown'),
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

const emits = defineEmits<{
	(e: 'select', value: BaseDropdownOption): void;
}>();

const isDropdownOpen = ref<boolean>(false);
const activeOption = ref<BaseDropdownOption>(defaultOption.value);

function onDropdownClick(): void {
	isDropdownOpen.value = !isDropdownOpen.value;
}

function onOptionClick(option: BaseDropdownOption): void {
	activeOption.value = option;
	isDropdownOpen.value = false;
	emits('select', option);
}
</script>
