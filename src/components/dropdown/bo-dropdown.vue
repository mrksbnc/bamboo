<template>
	<div class="bo-dropdown">
		<slot
			name="trigger"
			v-bind="{ onDropdownToggle }"
		>
			<bo-dropdown-trigger
				:label="triggerLabel"
				:disabled="disabled"
				:is-open="showDropdown"
				:trigger-icon="props.triggerIcon"
				@trigger-click="onDropdownToggle"
			/>
		</slot>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<div
				v-if="showDropdown"
				:class="dropdownContentClasses"
				role="menu"
			>
				<slot name="default">
					<div
						ref="dropdownContentRef"
						class="flex flex-col gap-1"
					>
						<BoDropdownItem
							v-for="item in items"
							:key="item.id"
							:id="item.id"
							:label="item.label"
							:description="item.description"
							:icon="item.icon"
							:disabled="item.disabled"
							@select="onDropdownItemSelect"
						/>
					</div>
				</slot>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import BoDropdownItem from './base/bo-dropdown-item.vue';
import BoDropdownTrigger from './base/bo-dropdown-trigger.vue';
import { BoDropdownItemProps } from './base/dropdown-defaults.js';
import { BoDropdownProps } from './bo-dropdown.js';

const props = withDefaults(defineProps<BoDropdownProps<BoDropdownItemProps>>(), {
	id: () => IdentityService.instance.getComponentId('bo-dropdown'),
	closeOnSelect: true,
	closeOnClickOutside: true,
	defaultTriggerText: 'Select',
	items: () => [],
	size: () => BoSize.default,
});

const emit = defineEmits<{
	(e: 'update:open', value: boolean): void;
	(e: 'item-select', id: string): void;
}>();

const dropdownContentClasses: string =
	/*tw*/ 'bo-dropdown-menu absolute z-50 rounded-md bg-white border p-2 font-sans text-base font-normal text-gray-900 shadow-none outline-none transition-opacity dark:bg-gray-800 dark:text-white mt-1';

const showDropdown = ref<boolean>(props?.open ?? false);
const triggerLabel = ref<string>(props.defaultTriggerText);

const dropdownContentRef = ref<HTMLDivElement>();

function onDropdownToggle(): void {
	if (props.disabled) {
		return;
	}

	showDropdown.value = !showDropdown.value;
}

function onDropdownItemSelect(id: string): void {
	const item = props.items.find((item) => item.id === id);

	if (!item) {
		return;
	}

	if (item && item.label) {
		triggerLabel.value = item.label;
	}

	if (props.closeOnSelect) {
		showDropdown.value = false;
	}

	emit('item-select', id);
}

onClickOutside(dropdownContentRef, () => {
	if (props.closeOnClickOutside && showDropdown.value) {
		showDropdown.value = false;
	}
});

defineExpose({
	onDropdownToggle,
});
</script>
