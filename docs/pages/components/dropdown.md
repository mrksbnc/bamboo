<script setup>
import BoDropdown from '@/components/dropdown/bo-dropdown.vue';
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

# Dropdown

Dropdown is a component that allows users to select an option from a predefined list.

```js
import { BoDropdown } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-dropdown default-trigger-text="Select Option" :items="items"/>

```vue
<template>
	<bo-dropdown default-trigger-text="Select Option" :items="items" />
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
]
```

## Props

| Name                  | Type                        | Default     | Description                               |
| --------------------- | --------------------------- | ----------- | ----------------------------------------- |
| `id`                  | `string`                    | `auto`      | Unique ID for the dropdown                |
| `defaultTriggerText`  | `string`                    | `'Select'`  | Default text shown in the trigger button  |
| `disabled`            | `boolean`                   | `false`     | Whether the dropdown is disabled          |
| `size`                | `BoSize`                    | `default`   | Size of the dropdown                      |
| `triggerIcon`         | `Icon`                      | `undefined` | Custom icon for the trigger button        |
| `open`                | `boolean`                   | `false`     | Controls the dropdown's open state        |
| `items`               | `T = BoDropdownItemProps[]` | `[]`        | Array of items to display in the dropdown |
| `closeOnClickOutside` | `boolean`                   | `true`      | Close dropdown when clicking outside      |
| `closeOnSelect`       | `boolean`                   | `true`      | Close dropdown when selecting an item     |

## Events

| Name          | Payload   | Description                            |
| ------------- | --------- | -------------------------------------- |
| `update:open` | `boolean` | Emitted when the dropdown opens/closes |
| `item-select` | `string`  | Emitted when an item is selected       |

## Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `trigger` | Custom trigger element for the dropdown |
| `default` | Custom content for the dropdown menu    |

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
}
```

## Disabled

<bo-dropdown default-trigger-text="Select Option" :items="items" disabled />

```vue
<template>
	<bo-dropdown
		default-trigger-text="Select Option"
		:items="items"
		disabled
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

## Sizes

<bo-dropdown default-trigger-text="Select Option" :items="items" size="small" />

```vue
<template>
	<bo-dropdown
		default-trigger-text="Select Option"
		:items="items"
		size="small"
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

## Custom Trigger

Use the `trigger` slot to customize the dropdown trigger. In case this slot is being used, the emitted
event must be used to update the trigger label.

<bo-dropdown :items="items">
	<template #trigger="{ onDropdownToggle }">
		<button
			class="px-4 py-2 bg-blue-500 text-white rounded-md"
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
				class="rounded-md bg-blue-500 px-4 py-2 text-white"
				@click="onDropdownToggle"
			>
				Custom Trigger
			</button>
		</template>
	</bo-dropdown>
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

## Custom Content

Use the default slot to provide custom content for the dropdown menu:

<bo-dropdown default-trigger-text="Custom Content">
	<div class="p-4">
		<h3 class="text-lg font-semibold mb-2">Custom Menu</h3>
		<p class="text-gray-600">This is a custom dropdown menu content.</p>
	</div>
</bo-dropdown>

```vue
<template>
	<bo-dropdown default-trigger-text="Custom Content">
		<div class="p-4">
			<h3 class="mb-2 text-lg font-semibold">Custom Menu</h3>
			<p class="text-gray-600">This is a custom dropdown menu content.</p>
		</div>
	</bo-dropdown>
</template>
```
