<script setup>
import BoDropdown from '@/components/dropdown/bo-dropdown.vue';
import { Icon } from '@/components/icon/bo-icon';
import { BoSize } from '@/shared/bo-size';
import { ref } from 'vue';

const items = [
	{
		id: 'item1',
		label: 'Profile',
		description: 'View and edit your profile',
		icon: Icon.user,
	},
	{
		id: 'item2',
		label: 'Settings',
		description: 'Manage your preferences',
		icon: Icon.settings,
	},
	{
		id: 'item3',
		label: 'Logout',
		description: 'Sign out of your account',
		icon: Icon.log_out,
	},
];

const itemsWithDisabled = [
	{
		id: 'item1',
		label: 'Profile',
		description: 'View and edit your profile',
		icon: Icon.user,
	},
	{
		id: 'item2',
		label: 'Settings',
		description: 'Manage your preferences',
		icon: Icon.settings,
		disabled: true,
	},
	{
		id: 'item3',
		label: 'Logout',
		description: 'Sign out of your account',
		icon: Icon.log_out,
	},
];

const selectedItem = ref('');
const dropdownOpen = ref(false);

const handleItemSelect = (id) => {
	selectedItem.value = id;
	console.log('Selected item:', id);
};

const handleOpenChange = (isOpen) => {
	dropdownOpen.value = isOpen;
	console.log('Dropdown open state:', isOpen);
};
</script>

# Dropdown

Dropdown is a component that allows users to select an option from a predefined list. It provides keyboard navigation, accessibility features, and customizable styling.

```js
import { BoDropdown } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-dropdown default-trigger-text="Select Option" :items="items"/>

```vue
<template>
	<bo-dropdown
		default-trigger-text="Select Option"
		:items="items"
	/>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon';

const items = [
	{
		id: 'item1',
		label: 'Profile',
		description: 'View and edit your profile',
		icon: Icon.user,
	},
	{
		id: 'item2',
		label: 'Settings',
		description: 'Manage your preferences',
		icon: Icon.settings,
	},
	{
		id: 'item3',
		label: 'Logout',
		description: 'Sign out of your account',
		icon: Icon.log_out,
	},
];
</script>
```

## Props

| Name                  | Type                        | Default           | Description                               |
| --------------------- | --------------------------- | ----------------- | ----------------------------------------- |
| `id`                  | `string`                    | `auto`            | Unique ID for the dropdown                |
| `defaultTriggerText`  | `string`                    | `'Select'`        | Default text shown in the trigger button  |
| `disabled`            | `boolean`                   | `false`           | Whether the dropdown is disabled          |
| `size`                | `BoSize`                    | `default`         | Size of the dropdown                      |
| `triggerIcon`         | `Icon`                      | `undefined`       | Custom icon for the trigger button        |
| `open`                | `boolean`                   | `false`           | Controls the dropdown's open state        |
| `items`               | `T = BoDropdownItemProps[]` | `[]`              | Array of items to display in the dropdown |
| `closeOnClickOutside` | `boolean`                   | `true`            | Close dropdown when clicking outside      |
| `closeOnSelect`       | `boolean`                   | `true`            | Close dropdown when selecting an item     |
| `ariaLabel`           | `string`                    | `'Dropdown menu'` | ARIA label for accessibility              |

## Events

| Name          | Payload   | Description                            |
| ------------- | --------- | -------------------------------------- |
| `update:open` | `boolean` | Emitted when the dropdown opens/closes |
| `item-select` | `string`  | Emitted when an item is selected       |

## Slots

| Name      | Description                             | Props                            |
| --------- | --------------------------------------- | -------------------------------- |
| `trigger` | Custom trigger element for the dropdown | `{ onDropdownToggle: Function }` |
| `default` | Custom content for the dropdown menu    | -                                |

### Types

```ts
interface BoDropdownItemProps {
	/** Unique ID for the dropdown item */
	id?: string;
	/** Text label for the dropdown item */
	label?: string;
	/** Description for the dropdown item */
	description?: string;
	/** Icon for the dropdown item */
	icon?: Icon;
	/** Whether the dropdown item is disabled */
	disabled?: boolean;
}

interface BoDropdownTriggerProps {
	/** Unique ID for the dropdown trigger */
	id?: string;
	/** Whether the dropdown trigger is disabled */
	disabled?: boolean;
	/** Size of the dropdown trigger */
	size?: BoSize;
	/** Text label for the dropdown trigger */
	label?: string;
	/** Custom icon for the dropdown trigger */
	prefixIcon?: Icon;
	/** Custom icon for the dropdown trigger */
	suffixIcon?: Icon;
	/** Custom icon for the dropdown trigger */
	triggerIcon?: Icon;
	/** Whether the dropdown is currently open */
	isOpen?: boolean;
}

interface BoDropdownProps<T = BoDropdownItemProps> {
	/** Unique ID for the dropdown */
	id?: string;
	/** Text to display in the trigger button */
	defaultTriggerText?: string;
	/** Whether the dropdown is disabled */
	disabled?: boolean;
	/** Size of the dropdown menu */
	size?: BoSize;
	/** Custom icon for the dropdown trigger */
	triggerIcon?: Icon;
	/** Whether the dropdown menu is open */
	open?: boolean;
	/** Items to display in the dropdown menu */
	items?: T[];
	/** Whether the dropdown menu should close when clicking outside */
	closeOnClickOutside?: boolean;
	/** Whether the dropdown menu should close when selecting an item */
	closeOnSelect?: boolean;
	/** ARIA label for accessibility */
	ariaLabel?: string;
}
```

## Sizes

The dropdown component supports five different sizes:

<div class="flex gap-4 flex-wrap items-center">
	<bo-dropdown default-trigger-text="Extra Small" :items="items" :size="BoSize.extra_small" />
	<bo-dropdown default-trigger-text="Small" :items="items" :size="BoSize.small" />
	<bo-dropdown default-trigger-text="Default" :items="items" :size="BoSize.default" />
	<bo-dropdown default-trigger-text="Large" :items="items" :size="BoSize.large" />
	<bo-dropdown default-trigger-text="Extra Large" :items="items" :size="BoSize.extra_large" />
</div>

```vue
<template>
	<bo-dropdown
		default-trigger-text="Extra Small"
		:items="items"
		:size="BoSize.extra_small"
	/>
	<bo-dropdown
		default-trigger-text="Small"
		:items="items"
		:size="BoSize.small"
	/>
	<bo-dropdown
		default-trigger-text="Default"
		:items="items"
		:size="BoSize.default"
	/>
	<bo-dropdown
		default-trigger-text="Large"
		:items="items"
		:size="BoSize.large"
	/>
	<bo-dropdown
		default-trigger-text="Extra Large"
		:items="items"
		:size="BoSize.extra_large"
	/>
</template>
```

## Disabled State

You can disable the entire dropdown or individual items:

### Disabled Dropdown

<bo-dropdown default-trigger-text="Disabled Dropdown" :items="items" disabled />

```vue
<template>
	<bo-dropdown
		default-trigger-text="Disabled Dropdown"
		:items="items"
		disabled
	/>
</template>
```

### Disabled Items

<bo-dropdown default-trigger-text="Select Option" :items="itemsWithDisabled" />

```vue
<template>
	<bo-dropdown
		default-trigger-text="Select Option"
		:items="itemsWithDisabled"
	/>
</template>

<script setup lang="ts">
const itemsWithDisabled = [
	{
		id: 'item1',
		label: 'Profile',
		description: 'View and edit your profile',
		icon: Icon.user,
	},
	{
		id: 'item2',
		label: 'Settings',
		description: 'Manage your preferences',
		icon: Icon.settings,
		disabled: true,
	},
	{
		id: 'item3',
		label: 'Logout',
		description: 'Sign out of your account',
		icon: Icon.log_out,
	},
];
</script>
```

## Event Handling

<div class="space-y-2">
	<bo-dropdown 
		default-trigger-text="Select Option" 
		:items="items"
		@item-select="handleItemSelect"
		@update:open="handleOpenChange"
	/>
	<p v-if="selectedItem" class="text-sm text-gray-600">Selected: {{ selectedItem }}</p>
	<p class="text-sm text-gray-600">Dropdown is: {{ dropdownOpen ? 'Open' : 'Closed' }}</p>
</div>

```vue
<template>
	<bo-dropdown
		default-trigger-text="Select Option"
		:items="items"
		@item-select="handleItemSelect"
		@update:open="handleOpenChange"
	/>
	<p v-if="selectedItem">Selected: {{ selectedItem }}</p>
	<p>Dropdown is: {{ dropdownOpen ? 'Open' : 'Closed' }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedItem = ref('');
const dropdownOpen = ref(false);

const handleItemSelect = (id: string) => {
	selectedItem.value = id;
	console.log('Selected item:', id);
};

const handleOpenChange = (isOpen: boolean) => {
	dropdownOpen.value = isOpen;
	console.log('Dropdown open state:', isOpen);
};
</script>
```

## Custom Trigger

Use the `trigger` slot to customize the dropdown trigger:

<bo-dropdown :items="items">
	<template #trigger="{ onDropdownToggle }">
		<button
			class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
			@click="onDropdownToggle"
		>
			Custom Trigger
		</button>
	</template>
</bo-dropdown>

```vue
<template>
	<bo-dropdown :items="items">
		<template #trigger="{ onDropdownToggle }">
			<button
				class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
				@click="onDropdownToggle"
			>
				Custom Trigger
			</button>
		</template>
	</bo-dropdown>
</template>
```

## Custom Content

Use the default slot to provide custom content for the dropdown menu:

<bo-dropdown default-trigger-text="Custom Content">
	<div class="p-4">
		<h3 class="text-lg font-semibold mb-2">Custom Menu</h3>
		<p class="text-gray-600 dark:text-gray-400">This is a custom dropdown menu content.</p>
		<div class="mt-3 flex gap-2">
			<button class="px-3 py-1 bg-blue-500 text-white rounded">Action 1</button>
			<button class="px-3 py-1 bg-gray-200 text-gray-700 rounded">Action 2</button>
		</div>
	</div>
</bo-dropdown>

```vue
<template>
	<bo-dropdown default-trigger-text="Custom Content">
		<div class="p-4">
			<h3 class="mb-2 text-lg font-semibold">Custom Menu</h3>
			<p class="text-gray-600 dark:text-gray-400">This is a custom dropdown menu content.</p>
			<div class="mt-3 flex gap-2">
				<button class="rounded bg-blue-500 px-3 py-1 text-white">Action 1</button>
				<button class="rounded bg-gray-200 px-3 py-1 text-gray-700">Action 2</button>
			</div>
		</div>
	</bo-dropdown>
</template>
```

## Keyboard Navigation

The dropdown component supports comprehensive keyboard navigation:

- **Arrow Down/Up**: Open the dropdown or navigate through items
- **Enter/Space**: Select the focused item
- **Escape**: Close the dropdown
- **Home**: Focus the first item
- **End**: Focus the last item
