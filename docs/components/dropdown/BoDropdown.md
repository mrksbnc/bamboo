# BoDropdown

A dropdown component for displaying a list of selectable options that appear when the toggle button is clicked.

## Component API

### Props

```ts
interface BoDropdownProps {
	id?: string;
	toggleVariant?: BoButtonVariant;
	defaultOption?: BaseDropdownOption;
	options?: BaseDropdownOption[];
	component?: Component;
}

interface BaseDropdownOption {
	icon: Icon;
	label: string;
}
```

### Enums

```ts
enum BoButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	info = 'info',
	light = 'light',
	dark = 'dark',
	outline = 'outline',
}

// Icon enum from BoIcon component
enum Icon {
	user = 'user',
	settings = 'settings',
	// ... many more icons
	none = 'none',
}
```

### Emits

```ts
const emits = defineEmits<{
	(e: 'select', value: BaseDropdownOption): void;
}>();
```

### Slots

| Slot     | Description                                    |
| -------- | ---------------------------------------------- |
| `toggle` | Custom toggle button or element                |
| `items`  | Custom dropdown items instead of using options |

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
import { BoDropdown } from '@/components/bo-dropdown';
import { Icon } from '@/components/bo-icon';

const options = [
	{ label: 'Profile', icon: Icon.user },
	{ label: 'Settings', icon: Icon.settings },
	{ label: 'Logout', icon: Icon.log_out },
];

const handleSelect = (option) => {
	console.log('Selected option:', option);
};
</script>
```

## Examples

<script setup>
import { ref } from 'vue';
import { BoDropdown } from '@/components/bo-dropdown';
import { BoButton, BoButtonVariant } from '@/components/bo-button';
import { bo-text, BoTextColor } from '@/components/bo-text';
import { Icon } from '@/components/bo-icon';

const options = [
  { label: 'Profile', icon: Icon.user },
  { label: 'Settings', icon: Icon.settings },
  { label: 'Messages', icon: Icon.mail },
  { label: 'Logout', icon: Icon.log_out }
];

const selectedOption = ref(options[0]);
const handleSelect = (option) => {
  selectedOption.value = option;
};
</script>

### Default Dropdown

<div class="flex flex-col gap-4">
  <BoDropdown 
    :options="options" 
    :default-option="options[0]"
    @select="handleSelect"
  />
  
  <bo-text 
    :text="`Selected: ${selectedOption.label}`" 
    :color="BoTextColor.secondary" 
  />
</div>

### Button Variants

You can customize the toggle button's appearance using the `toggleVariant` prop:

```vue
<bo-dropdown :options="options" toggle-variant="secondary" @select="handleSelect" />
```

Available toggle variants:

- primary (default)
- secondary
- success
- danger
- warning
- light
- dark
- outline

### Custom Toggle

You can customize the toggle button using the `toggle` slot:

```vue
<bo-dropdown :options="options" @select="handleSelect">
  <template #toggle>
    <bo-button 
      label="Custom Toggle" 
      prefix-icon="Icon.menu" 
      variant="outline"
    />
  </template>
</bo-dropdown>
```

### Custom Items

You can customize the dropdown items by providing a custom component through the `component` prop:

```vue
<bo-dropdown :options="options" :component="MyCustomItemComponent" @select="handleSelect" />
```

Or use the `items` slot to completely customize the dropdown items:

```vue
<bo-dropdown @select="handleSelect">
  <template #toggle>
    <bo-button label="Options" />
  </template>
  <template #items>
    <div class="p-2 hover:bg-gray-100 cursor-pointer">Custom Item 1</div>
    <div class="p-2 hover:bg-gray-100 cursor-pointer">Custom Item 2</div>
    <div class="p-2 hover:bg-gray-100 cursor-pointer">Custom Item 3</div>
  </template>
</bo-dropdown>
```

## Advanced Usage

Example of defining props in your component:

```vue
<script setup lang="ts">
import { BoDropdown } from '@/components/bo-dropdown';
import { BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import MyCustomDropdownItem from './MyCustomDropdownItem.vue';

const dropdownProps = {
	id: 'user-menu-dropdown',
	toggleVariant: BoButtonVariant.outline,
	defaultOption: { label: 'User Menu', icon: Icon.user },
	options: [
		{ label: 'Profile', icon: Icon.user },
		{ label: 'Settings', icon: Icon.settings },
		{ label: 'Logout', icon: Icon.log_out },
	],
	// Optional custom component for items
	component: MyCustomDropdownItem,
};

const handleSelect = (option) => {
	console.log('Selected:', option.label);
};
</script>

<template>
	<bo-dropdown
		v-bind="dropdownProps"
		@select="handleSelect"
	/>
</template>
```
