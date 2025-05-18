<template>
	<div class="bo-dropdown">
		<slot
			name="trigger"
			v-bind="{ onDropdownToggle }"
		>
			<bo-dropdown-trigger
				:label="triggerLabel"
				:disabled="disabled"
				@click="onDropdownToggle"
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
import { Icon } from '@/components/icon/bo-icon.js';
import { IdentityService } from '@/services/identity-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
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

const dropdownContentClasses =
	/*tw*/ 'bo-dropdown-menu absolute z-10 rounded-md bg-white border p-2 font-sans text-base font-normal text-gray-900 shadow-none outline-none transition-opacity dark:bg-gray-800 dark:text-white mt-1';

const showDropdown = ref(props?.open ?? false);
const triggerLabel = ref(props.defaultTriggerText);

const dropdownContentRef = ref<HTMLDivElement>();

const triggerIcon = computed<Icon>(() => {
	if (props.triggerIcon) {
		return props.triggerIcon;
	}

	return showDropdown.value ? Icon.chevron_up : Icon.chevron_down;
});

function onDropdownToggle(): void {
	if (props.disabled) {
		return;
	}

	showDropdown.value = !showDropdown.value;
	emit('update:open', showDropdown.value);
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
