<template>
	<div
		class="bo-dropdown"
		:data-testid="`bo-dropdown-${id}`"
		role="combobox"
		@keydown="onKeyDown"
	>
		<slot
			name="trigger"
			v-bind="{ onDropdownToggle }"
		>
			<bo-dropdown-trigger
				:label="triggerLabel"
				:disabled="disabled"
				:is-open="showDropdown"
				:trigger-icon="props.triggerIcon"
				:data-testid="`bo-dropdown-trigger-${id}`"
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
				:data-testid="`bo-dropdown-content-${id}`"
				@keydown="onMenuKeyDown"
			>
				<slot name="default">
					<div
						ref="dropdownContentRef"
						class="flex flex-col gap-1"
						:data-testid="`bo-dropdown-items-${id}`"
					>
						<BoDropdownItem
							v-for="(item, index) in items"
							:key="item.id"
							:id="item.id"
							:label="item.label"
							:description="item.description"
							:icon="item.icon"
							:disabled="item.disabled"
							:ref="(el) => setItemRef(el, index)"
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
import { nextTick, ref } from 'vue';
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
const focusedItemIndex = ref<number>(-1);
const itemRefs = ref<any[]>([]);

const dropdownContentRef = ref<HTMLDivElement>();

function setItemRef(el: any, index: number) {
	if (el) {
		itemRefs.value[index] = el;
	}
}

function onDropdownToggle(): void {
	if (props.disabled) {
		return;
	}

	showDropdown.value = !showDropdown.value;

	if (showDropdown.value) {
		focusedItemIndex.value = -1;
		nextTick(() => {
			// Focus the first non-disabled item
			focusFirstItem();
		});
	}
}

function focusFirstItem(): void {
	const firstEnabledIndex = props.items.findIndex((item) => !item.disabled);
	if (firstEnabledIndex !== -1) {
		focusedItemIndex.value = firstEnabledIndex;
		focusItem(firstEnabledIndex);
	}
}

function focusItem(index: number): void {
	const item = itemRefs.value[index];
	if (item && item.$el) {
		item.$el.focus();
	}
}

function onKeyDown(event: KeyboardEvent): void {
	if (event.key === 'Escape') {
		event.preventDefault();
		showDropdown.value = false;
	} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
		event.preventDefault();
		if (!showDropdown.value) {
			showDropdown.value = true;
			nextTick(() => focusFirstItem());
		}
	}
}

function onMenuKeyDown(event: KeyboardEvent): void {
	if (!showDropdown.value) return;

	switch (event.key) {
		case 'Escape':
			event.preventDefault();
			showDropdown.value = false;
			break;
		case 'ArrowDown':
			event.preventDefault();
			navigateItems(1);
			break;
		case 'ArrowUp':
			event.preventDefault();
			navigateItems(-1);
			break;
		case 'Enter':
		case ' ':
			event.preventDefault();
			if (focusedItemIndex.value >= 0) {
				const item = props.items[focusedItemIndex.value];
				if (item && !item.disabled && item.id) {
					onDropdownItemSelect(item.id);
				}
			}
			break;
		case 'Home':
			event.preventDefault();
			focusFirstItem();
			break;
		case 'End':
			event.preventDefault();
			focusLastItem();
			break;
	}
}

function navigateItems(direction: number): void {
	const enabledItems = props.items
		.map((item, index) => ({ item, index }))
		.filter(({ item }) => !item.disabled);

	if (enabledItems.length === 0) return;

	const currentEnabledIndex = enabledItems.findIndex(
		({ index }) => index === focusedItemIndex.value,
	);
	let nextEnabledIndex = currentEnabledIndex + direction;

	if (nextEnabledIndex < 0) {
		nextEnabledIndex = enabledItems.length - 1;
	} else if (nextEnabledIndex >= enabledItems.length) {
		nextEnabledIndex = 0;
	}

	const nextIndex = enabledItems[nextEnabledIndex].index;
	focusedItemIndex.value = nextIndex;
	focusItem(nextIndex);
}

function focusLastItem(): void {
	const lastEnabledIndex = props.items
		.map((item, index) => ({ item, index }))
		.filter(({ item }) => !item.disabled)
		.pop()?.index;

	if (lastEnabledIndex !== undefined) {
		focusedItemIndex.value = lastEnabledIndex;
		focusItem(lastEnabledIndex);
	}
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
