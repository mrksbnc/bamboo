<script setup>
import { BoDropdown, BoDropdownPlacement, BoDropdownTriggerType } from '@/components/bo-dropdown';
import { BoButtonVariant } from '@/components/bo-button';
import { BoIcon, Icon } from '@/components/bo-icon';
</script>

# Dropdown

Dropdowns display a list of options that can be selected from a toggle button. They're used to show selectable options or menus in a space-efficient way.

```js
import { BoDropdown, BoDropdownPlacement, BoDropdownTriggerType } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-dropdown
		:options="options"
		:default-option="options[0]"
		@select="handleSelect"
	/>
</template>

<script setup>
import { BoDropdown } from '@mrksbnc/bamboo';
import { BoIcon, Icon } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const options = [
	{ label: 'Option 1', icon: Icon.check },
	{ label: 'Option 2', icon: Icon.user },
	{ label: 'Option 3', icon: Icon.settings },
];

const handleSelect = (option) => {
	console.log('Selected option:', option);
};
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-dropdown 
		:options="[
			{ label: 'Edit', icon: Icon.edit },
			{ label: 'Delete', icon: Icon.trash },
			{ label: 'Share', icon: Icon.share }
		]" 
		:default-option="{ label: 'Actions', icon: Icon.more_vertical }"
	/>
</div>

## Props

| Name                  | Type                    | Default                           | Description                                              |
| --------------------- | ----------------------- | --------------------------------- | -------------------------------------------------------- |
| `id`                  | `string`                | Auto-generated                    | Unique identifier for the dropdown                       |
| `options`             | `BaseDropdownOption[]`  | `[]`                              | Array of options to display in the dropdown              |
| `component`           | `Component`             | `BoDefaultDropdownItem`           | Component used to render each dropdown item              |
| `defaultOption`       | `BaseDropdownOption`    | `{ icon: Icon.none, label: '' }`  | The default item shown in the toggle                     |
| `placement`           | `BoDropdownPlacement`   | `BoDropdownPlacement.bottomStart` | Placement of the dropdown relative to the toggle element |
| `toggleVariant`       | `BoButtonVariant`       | `primary`                         | The variant of the toggle button                         |
| `toggleIcon`          | `Icon`                  | `undefined`                       | Icon to display for the toggle button                    |
| `header`              | `string`                | `undefined`                       | Optional header text for the dropdown                    |
| `subheader`           | `string`                | `undefined`                       | Optional subheader text for the dropdown                 |
| `defaultLabel`        | `string`                | `'Select option'`                 | Default label text when no option is selected            |
| `width`               | `string`                | `''`                              | Set a fixed width for the dropdown menu (e.g., '200px')  |
| `closeOnSelect`       | `boolean`               | `true`                            | Close the dropdown when an option is selected            |
| `closeOnClickOutside` | `boolean`               | `true`                            | Close the dropdown when clicked outside                  |
| `keyboardNav`         | `boolean`               | `true`                            | Allow keyboard navigation                                |
| `search`              | `boolean`               | `false`                           | Enable search functionality                              |
| `triggerType`         | `BoDropdownTriggerType` | `BoDropdownTriggerType.click`     | Trigger type: click or hover                             |
| `delay`               | `number`                | `300`                             | Delay for hover trigger (ms)                             |
| `maxHeight`           | `boolean`               | `false`                           | Max height with scrolling                                |
| `toggleClasses`       | `string`                | `''`                              | CSS classes for the toggle button                        |

## Types

```ts
export enum BoDropdownPlacement {
	bottom = 'bottom',
	bottomStart = 'bottom-start',
	bottomEnd = 'bottom-end',
	top = 'top',
	topStart = 'top-start',
	topEnd = 'top-end',
	left = 'left',
	leftStart = 'left-start',
	leftEnd = 'left-end',
	right = 'right',
	rightStart = 'right-start',
	rightEnd = 'right-end',
}

export enum BoDropdownTriggerType {
	click = 'click',
	hover = 'hover',
}

export interface BaseDropdownOption {
	id?: string | number;
	label: string;
	icon?: Icon;
	disabled?: boolean;
	description?: string;
	divider?: boolean;
	[key: string]: any;
}

export interface BoDropdownProps {
	id?: string;
	options?: BaseDropdownOption[];
	component?: Component;
	defaultOption?: BaseDropdownOption;
	placement?: BoDropdownPlacement;
	toggleVariant?: BoButtonVariant;
	toggleIcon?: Icon;
	header?: string;
	subheader?: string;
	defaultLabel?: string;
	width?: string;
	closeOnSelect?: boolean;
	closeOnClickOutside?: boolean;
	keyboardNav?: boolean;
	search?: boolean;
	triggerType?: BoDropdownTriggerType;
	delay?: number;
	maxHeight?: boolean;
	toggleClasses?: string;
}
```

## Events

| Name     | Payload              | Description                                        |
| -------- | -------------------- | -------------------------------------------------- |
| `select` | `BaseDropdownOption` | Emitted when an option is selected                 |
| `open`   | `void`               | Emitted when the dropdown opens                    |
| `close`  | `void`               | Emitted when the dropdown closes                   |
| `search` | `string`             | Emitted when the search query changes (if enabled) |

## Slots

| Name     | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `toggle` | Custom content for the toggle button. Overrides default button. |
| `items`  | Custom content for dropdown items. Overrides default list.      |
| `footer` | Custom content for the dropdown footer area.                    |

## Exposes

| Name           | Type                      | Description                                       |
| -------------- | ------------------------- | ------------------------------------------------- |
| `isOpen`       | `Ref<boolean>`            | Reactive ref indicating if the dropdown is open.  |
| `activeOption` | `Ref<BaseDropdownOption>` | Reactive ref of the currently active option.      |
| `open`         | `() => void`              | Function to programmatically open the dropdown.   |
| `close`        | `() => void`              | Function to programmatically close the dropdown.  |
| `toggle`       | `() => void`              | Function to programmatically toggle the dropdown. |
| `search`       | `Ref<string>`             | Reactive ref of the current search query.         |

## Toggle Button Variants

<div class="flex gap-4 items-center my-4">
	<bo-dropdown 
		:options="[
			{ label: 'Option 1' },
			{ label: 'Option 2' },
			{ label: 'Option 3' }
		]" 
		:toggle-variant="BoButtonVariant.primary"
		:default-option="{ label: 'Primary' }"
	/>
	
	<bo-dropdown 
		:options="[
			{ label: 'Option 1' },
			{ label: 'Option 2' },
			{ label: 'Option 3' }
		]" 
		:toggle-variant="BoButtonVariant.secondary"
		:default-option="{ label: 'Secondary' }"
	/>
	
	<bo-dropdown 
		:options="[
			{ label: 'Option 1' },
			{ label: 'Option 2' },
			{ label: 'Option 3' }
		]" 
		:toggle-variant="BoButtonVariant.danger"
		:default-option="{ label: 'Danger' }"
	/>
</div>

```vue
<bo-dropdown
	:options="options"
	:toggle-variant="BoButtonVariant.primary"
	:default-option="{ label: 'Primary' }"
/>

<bo-dropdown
	:options="options"
	:toggle-variant="BoButtonVariant.secondary"
	:default-option="{ label: 'Secondary' }"
/>

<bo-dropdown
	:options="options"
	:toggle-variant="BoButtonVariant.danger"
	:default-option="{ label: 'Danger' }"
/>
```

## Different Placements

<div class="grid grid-cols-2 gap-4 my-4">
	<div>
		<p class="mb-2">Bottom Start (Default)</p>
		<bo-dropdown 
			:options="[
				{ label: 'Option 1' },
				{ label: 'Option 2' },
				{ label: 'Option 3' }
			]" 
			:default-option="{ label: 'Dropdown' }"
			:placement="BoDropdownPlacement.bottomStart"
		/>
	</div>
	
	<div>
		<p class="mb-2">Bottom End</p>
		<bo-dropdown 
			:options="[
				{ label: 'Option 1' },
				{ label: 'Option 2' },
				{ label: 'Option 3' }
			]" 
			:default-option="{ label: 'Dropdown' }"
			:placement="BoDropdownPlacement.bottomEnd"
		/>
	</div>
	
	<div>
		<p class="mb-2">Bottom Center</p>
		<bo-dropdown 
			:options="[
				{ label: 'Option 1' },
				{ label: 'Option 2' },
				{ label: 'Option 3' }
			]" 
			:default-option="{ label: 'Dropdown' }"
			:placement="BoDropdownPlacement.bottom"
		/>
	</div>
</div>

```vue
<bo-dropdown
	:options="options"
	:default-option="{ label: 'Dropdown' }"
	:placement="BoDropdownPlacement.bottomStart"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Dropdown' }"
	:placement="BoDropdownPlacement.bottomEnd"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Dropdown' }"
	:placement="BoDropdownPlacement.bottom"
/>
```

## With Icons

<div class="flex gap-4 items-center my-4">
	<bo-dropdown 
		:options="[
			{ label: 'Edit', icon: Icon.edit },
			{ label: 'Duplicate', icon: Icon.copy },
			{ label: 'Delete', icon: Icon.trash },
			{ label: 'Share', icon: Icon.share }
		]" 
		:default-option="{ label: 'Actions', icon: Icon.more_vertical }"
	/>
</div>

```vue
<bo-dropdown
	:options="[
		{ label: 'Edit', icon: Icon.edit },
		{ label: 'Duplicate', icon: Icon.copy },
		{ label: 'Delete', icon: Icon.trash },
		{ label: 'Share', icon: Icon.share },
	]"
	:default-option="{ label: 'Actions', icon: Icon.more_vertical }"
/>
```

## With Search

<div class="flex gap-4 items-center my-4">
	<bo-dropdown 
		:options="[
			{ label: 'Apple' },
			{ label: 'Banana' },
			{ label: 'Cherry' },
			{ label: 'Date' },
			{ label: 'Elderberry' },
		]" 
		search
		default-label="Select Fruit"
		width="200px"
	/>
</div>

```vue
<bo-dropdown :options="fruitOptions" search default-label="Select Fruit" width="200px" />
```

## Custom Toggle

<div class="flex gap-4 items-center my-4">
	<bo-dropdown 
		:options="[
			{ label: 'Profile', icon: Icon.user },
			{ label: 'Settings', icon: Icon.settings },
			{ label: 'Logout', icon: Icon.log_out }
		]" 
	>
		<template #toggle="{ toggle, isOpen }">
			<div @click="toggle" class="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3 py-2 hover:bg-gray-200">
				<div class="h-8 w-8 overflow-hidden rounded-full bg-blue-500">
					<img src="https://i.pravatar.cc/100" alt="User Avatar" />
				</div>
				<span>John Doe</span>
				<bo-icon :icon="isOpen ? Icon.chevron_up : Icon.chevron_down" />
			</div>
		</template>
	</bo-dropdown>
</div>

```vue
<bo-dropdown
	:options="[
		{ label: 'Profile', icon: Icon.user },
		{ label: 'Settings', icon: Icon.settings },
		{ label: 'Logout', icon: Icon.log_out },
	]"
>
	<template #toggle="{ toggle, isOpen }">
		<div @click="toggle" class="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3 py-2 hover:bg-gray-200">
			<div class="h-8 w-8 overflow-hidden rounded-full bg-blue-500">
				<img src="https://i.pravatar.cc/100" alt="User Avatar" />
			</div>
			<span>John Doe</span>
			<bo-icon :icon="isOpen ? Icon.chevron_up : Icon.chevron_down" />
		</div>
	</template>
</bo-dropdown>
```

## Event Handling

```vue
<template>
	<bo-dropdown
		:options="options"
		:default-option="selectedOption"
		@select="onSelect"
		@open="onOpen"
		@close="onClose"
		@search="onSearch"
	/>

	<p class="mt-4">Selected: {{ selectedOption.label }}</p>
	<p>Dropdown state: {{ dropdownState }}</p>
	<p>Search query: {{ currentSearchQuery }}</p>
</template>

<script setup>
import { BoDropdown } from '@mrksbnc/bamboo';
import { BoIcon, Icon } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const options = [
	{ label: 'Option 1', value: 1, icon: Icon.check },
	{ label: 'Option 2', value: 2, icon: Icon.user },
	{ label: 'Option 3', value: 3, icon: Icon.settings },
];

const selectedOption = ref(options[0]);
const dropdownState = ref('closed');
const currentSearchQuery = ref('');

const onSelect = (option) => {
	selectedOption.value = option;
	console.log('Selected value:', option.value);
};

const onOpen = () => {
	dropdownState.value = 'open';
	console.log('Dropdown opened');
};

const onClose = () => {
	dropdownState.value = 'closed';
	console.log('Dropdown closed');
};

const onSearch = (query) => {
	currentSearchQuery.value = query;
	console.log('Search query:', query);
};
</script>
```
