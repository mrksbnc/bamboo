<template>
	<div
		role="combobox"
		:aria-label="ariaLabel"
		:aria-expanded="showDropdown"
		:class="containerClasses"
		:data-testid="constructAttribute(id, 'dropdown')"
		@keydown="onKeyDown"
	>
		<slot
			name="trigger"
			v-bind="{ onDropdownToggle }"
		>
			<bo-dropdown-trigger
				:size="size"
				:label="triggerLabel"
				:disabled="disabled"
				:is-open="showDropdown"
				:trigger-icon="props.triggerIcon"
				:data-testid="constructAttribute(id, 'dropdown-trigger')"
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
				role="menu"
				ref="dropdownContentRef"
				:class="contentClasses"
				:data-testid="constructAttribute(id, 'dropdown-content')"
				@keydown="onMenuKeyDown"
			>
				<slot name="default">
					<div
						:class="DROPDOWN_STYLE.layout.itemsContainer"
						:data-testid="constructAttribute(id, 'dropdown-items')"
					>
						<BoDropdownItem
							v-for="(item, index) in items"
							:key="item.id"
							:id="item.id"
							:icon="item.icon"
							:label="item.label"
							:disabled="item.disabled"
							:description="item.description"
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
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { onClickOutside } from '@vueuse/core';
import { computed, nextTick, ref } from 'vue';
import BoDropdownItem from './base/bo-dropdown-item.vue';
import BoDropdownTrigger from './base/bo-dropdown-trigger.vue';
import { BoDropdownItemProps } from './base/dropdown-defaults.js';
import { BoDropdownProps } from './bo-dropdown.js';

const props = withDefaults(defineProps<BoDropdownProps<BoDropdownItemProps>>(), {
	id: () => IdentityService.instance.getComponentId(),
	closeOnSelect: true,
	closeOnClickOutside: true,
	defaultTriggerText: 'Select',
	items: () => [],
	size: () => BoSize.default,
	ariaLabel: 'Dropdown menu',
});

const emit = defineEmits<{
	(e: 'update:open', value: boolean): void;
	(e: 'item-select', id: string): void;
}>();

const { constructAttribute } = useAttributes();

const DROPDOWN_STYLE = {
	layout: {
		wrapper: /*tw*/ 'bo-dropdown relative inline-block',
		content:
			/*tw*/ 'bo-dropdown__content absolute z-50 rounded-md border p-2 font-sans text-base font-normal shadow-lg outline-none transition-opacity mt-1',
		itemsContainer: /*tw*/ 'bo-dropdown__items flex flex-col gap-1',
	},
	appearance: {
		background: /*tw*/ 'bg-white dark:bg-gray-800',
		text: /*tw*/ 'text-gray-900 dark:text-white',
		border: /*tw*/ 'border-gray-200 dark:border-gray-600',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'bo-dropdown--extra-small min-w-[120px]',
		[BoSize.small]: /*tw*/ 'bo-dropdown--small min-w-[160px]',
		[BoSize.default]: /*tw*/ 'bo-dropdown--default min-w-[200px]',
		[BoSize.large]: /*tw*/ 'bo-dropdown--large min-w-[240px]',
		[BoSize.extra_large]: /*tw*/ 'bo-dropdown--extra-large min-w-[280px]',
	},
	state: {
		disabled: /*tw*/ 'bo-dropdown--disabled opacity-50 cursor-not-allowed',
		open: /*tw*/ 'bo-dropdown--open',
	},
} as const;

const showDropdown = ref<boolean>(props?.open ?? false);
const triggerLabel = ref<string>(props.defaultTriggerText);
const focusedItemIndex = ref<number>(-1);
const itemRefs = ref<any[]>([]);

const dropdownContentRef = ref<HTMLDivElement>();

const ariaLabel = computed<string>(() => {
	return props.ariaLabel || 'Dropdown menu';
});

const containerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		DROPDOWN_STYLE.layout.wrapper,
		props.disabled ? DROPDOWN_STYLE.state.disabled : '',
		showDropdown.value ? DROPDOWN_STYLE.state.open : '',
	);
});

const contentClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		DROPDOWN_STYLE.layout.content,
		DROPDOWN_STYLE.appearance.background,
		DROPDOWN_STYLE.appearance.text,
		DROPDOWN_STYLE.appearance.border,
		DROPDOWN_STYLE.size[props.size],
	);
});

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
	emit('update:open', showDropdown.value);

	if (showDropdown.value) {
		focusedItemIndex.value = -1;
		nextTick(() => {
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
	if (props.disabled) {
		return;
	}

	if (event.key === 'Escape') {
		event.preventDefault();
		showDropdown.value = false;
		emit('update:open', false);
	} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
		event.preventDefault();

		if (!showDropdown.value) {
			showDropdown.value = true;
			emit('update:open', true);
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
			emit('update:open', false);
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
		emit('update:open', false);
	}

	emit('item-select', id);
}

onClickOutside(dropdownContentRef, () => {
	if (props.closeOnClickOutside && showDropdown.value) {
		showDropdown.value = false;
		emit('update:open', false);
	}
});

defineExpose({
	showDropdown,
	triggerLabel,
	focusedItemIndex,
	onDropdownToggle,
});
</script>
