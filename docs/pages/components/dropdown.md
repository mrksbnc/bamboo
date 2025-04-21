<script setup>
import { BoDropdown, BoDropdownPlacement } from '@/components/bo-dropdown';
import { BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
</script>

# Dropdown

Dropdowns display a list of options that can be selected from a toggle button. They're used to show selectable options or menus in a space-efficient way.

```js
import { BoDropdown, BoDropdownPlacement } from '@mrksbnc/bamboo';
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
import { Icon } from '@mrksbnc/bamboo';
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

| Name            | Type                   | Default                           | Description                                      |
| --------------- | ---------------------- | --------------------------------- | ------------------------------------------------ |
| `id`            | `string`               | Auto-generated                    | Unique identifier for the dropdown               |
| `toggleVariant` | `BoButtonVariant`      | `primary`                         | The variant of the toggle button                 |
| `defaultOption` | `BaseDropdownOption`   | `{ icon: Icon.none, label: '' }`  | The default item shown in the toggle             |
| `options`       | `BaseDropdownOption[]` | `[]`                              | Array of options to display in the dropdown      |
| `component`     | `Component`            | `BoDefaultDropdownItem`           | Component used to render each dropdown item      |
| `placement`     | `BoDropdownPlacement`  | `BoDropdownPlacement.bottomStart` | Placement of the dropdown relative to the toggle |

## Types

```ts
export enum BoDropdownPlacement {
	top = 'top',
	topStart = 'top-start',
	topEnd = 'top-end',
	bottom = 'bottom',
	bottomStart = 'bottom-start',
	bottomEnd = 'bottom-end',
	right = 'right',
	rightStart = 'right-start',
	rightEnd = 'right-end',
	left = 'left',
	leftStart = 'left-start',
	leftEnd = 'left-end',
}

export type BaseDropdownOption = {
	id?: string;
	icon?: Icon;
	label?: string;
	[key: string]: unknown;
};

export type BoDropdownProps = {
	id?: string;
	toggleVariant?: BoButtonVariant;
	defaultOption?: BaseDropdownOption;
	options?: BaseDropdownOption[];
	component?: Component;
	placement?: BoDropdownPlacement;
};
```

## Events

| Name     | Payload              | Description                        |
| -------- | -------------------- | ---------------------------------- |
| `select` | `BaseDropdownOption` | Emitted when an option is selected |

## Slots

| Name     | Description                          |
| -------- | ------------------------------------ |
| `toggle` | Custom content for the toggle button |
| `items`  | Custom content for dropdown items    |

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

## Custom Toggle

<div class="flex gap-4 items-center my-4">
	<bo-dropdown 
		:options="[
			{ label: 'Profile', icon: Icon.user },
			{ label: 'Settings', icon: Icon.settings },
			{ label: 'Logout', icon: Icon.log_out }
		]" 
	>
		<template #toggle>
			<div class="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3 py-2 hover:bg-gray-200">
				<div class="h-8 w-8 overflow-hidden rounded-full bg-blue-500">
					<img src="https://i.pravatar.cc/100" alt="User Avatar" />
				</div>
				<span>John Doe</span>
				<bo-icon :icon="Icon.chevron_down" />
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
	<template #toggle>
		<div class="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3 py-2 hover:bg-gray-200">
			<div class="h-8 w-8 overflow-hidden rounded-full bg-blue-500">
				<img src="https://i.pravatar.cc/100" alt="User Avatar" />
			</div>
			<span>John Doe</span>
			<bo-icon :icon="Icon.chevron_down" />
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
	/>

	<p class="mt-4">Selected: {{ selectedOption.label }}</p>
</template>

<script setup>
import { BoDropdown } from '@mrksbnc/bamboo';
import { Icon } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const options = [
	{ label: 'Option 1', value: 1, icon: Icon.check },
	{ label: 'Option 2', value: 2, icon: Icon.user },
	{ label: 'Option 3', value: 3, icon: Icon.settings },
];

const selectedOption = ref(options[0]);

const onSelect = (option) => {
	selectedOption.value = option;
	// You can access option.value or any custom properties
	console.log('Selected value:', option.value);
};
</script>
```
