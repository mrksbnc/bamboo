<script setup>
import { BoDropdown } from '@/components/bo-dropdown';
import { BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import { ref } from 'vue';

const options = ref([
  { label: 'Option 1', icon: Icon.check },
  { label: 'Option 2', icon: Icon.settings },
  { label: 'Option 3', icon: Icon.bell }
]);

const dropdown = ref(null);
</script>

# Dropdown

Dropdowns display a list of options that can be used to select a single value. They are useful for forms and filtering content.

## Basic Example

```html
<bo-dropdown
	:options="[
    { label: 'Option 1', icon: Icon.check },
    { label: 'Option 2', icon: Icon.settings },
    { label: 'Option 3', icon: Icon.bell }
  ]"
	:default-option="{ label: 'Select an option', icon: Icon.chevronDown }"
	@select="handleSelect"
/>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-dropdown 
    :options="options"
    :default-option="{ label: 'Select an option', icon: Icon.chevronDown }"
  />
</div>

### Props

| Prop name       | Type                   | Default                          | Description                     |
| --------------- | ---------------------- | -------------------------------- | ------------------------------- |
| `id`            | `string`               | Auto-generated                   | Unique ID for the dropdown      |
| `toggleVariant` | `BoButtonVariant`      | `primary`                        | Variant of the toggle button    |
| `defaultOption` | `BaseDropdownOption`   | `{ icon: Icon.none, label: '' }` | Initial/default option          |
| `options`       | `BaseDropdownOption[]` | `[]`                             | Array of dropdown options       |
| `component`     | `Component`            | `BoDefaultDropdownItem`          | Custom component for list items |

### Events

| Event name | Description                        |
| ---------- | ---------------------------------- |
| `select`   | Emitted when an option is selected |

### Slots

| Slot name | Description                            |
| --------- | -------------------------------------- |
| `toggle`  | Custom content for the dropdown toggle |
| `items`   | Custom content for dropdown items      |

### Exposed Methods

| Method name        | Parameters | Description                                 |
| ------------------ | ---------- | ------------------------------------------- |
| `onDropdownToggle` | None       | Toggles the dropdown open state when called |

### Types

```ts
export type BaseDropdownOption = {
	id?: string; // Unique identifier for the option
	icon?: Icon; // Icon to display with the option
	label?: string; // Text label for the option
	[key: string]: unknown; // Additional custom properties
};

export type BoDropdownProps = {
	id?: string; // ID for the dropdown
	toggleVariant?: BoButtonVariant; // Button variant for the toggle
	defaultOption?: BaseDropdownOption; // Initial selected option
	options?: BaseDropdownOption[]; // List of available options
	component?: Component; // Custom component for rendering options
};
```

## Basic Dropdown

A basic dropdown with icon options.

<div class="flex gap-4 items-center">
  <bo-dropdown 
    :options="options"
    :default-option="{ label: 'Select an option', icon: Icon.chevronDown }"
  />
</div>

```html
<script setup>
	import { ref } from 'vue';
	import { Icon } from '@/components/bo-icon';

	const options = ref([
		{ label: 'Option 1', icon: Icon.check },
		{ label: 'Option 2', icon: Icon.settings },
		{ label: 'Option 3', icon: Icon.bell },
	]);
</script>

<template>
	<bo-dropdown
		:options="options"
		:default-option="{ label: 'Select an option', icon: Icon.chevronDown }"
		@select="(option) => console.log('Selected:', option)"
	/>
</template>
```

## Button Variants

Dropdowns support different button variants for the toggle.

<div class="flex flex-wrap gap-1 items-center">
  <div>
    <bo-dropdown 
      :options="options"
      :default-option="{ label: 'Primary', icon: Icon.chevronDown }"
      :toggle-variant="BoButtonVariant.primary"
    />
    <p class="text-sm mt-2">Primary</p>
  </div>
  <div>
    <bo-dropdown 
      :options="options"
      :default-option="{ label: 'Secondary', icon: Icon.chevronDown }"
      :toggle-variant="BoButtonVariant.secondary"
    />
    <p class="text-sm mt-2">Secondary</p>
  </div>
  <div>
    <bo-dropdown 
      :options="options"
      :default-option="{ label: 'Danger', icon: Icon.chevronDown }"
      :toggle-variant="BoButtonVariant.danger"
    />
    <p class="text-sm mt-2">Danger</p>
  </div>
  <div>
    <bo-dropdown 
      :options="options"
      :default-option="{ label: 'Warning', icon: Icon.chevronDown }"
      :toggle-variant="BoButtonVariant.warning"
    />
    <p class="text-sm mt-2">Warning</p>
  </div>
  <div>
    <bo-dropdown 
      :options="options"
      :default-option="{ label: 'Success', icon: Icon.chevronDown }"
      :toggle-variant="BoButtonVariant.success"
    />
    <p class="text-sm mt-2">Success</p>
  </div>
  <div>
    <bo-dropdown 
      :options="options"
      :default-option="{ label: 'Dark', icon: Icon.chevronDown }"
      :toggle-variant="BoButtonVariant.dark"
    />
    <p class="text-sm mt-2">Dark</p>
  </div>
</div>

```html
<bo-dropdown
	:options="options"
	:default-option="{ label: 'Primary', icon: Icon.chevronDown }"
	:toggle-variant="BoButtonVariant.primary"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Secondary', icon: Icon.chevronDown }"
	:toggle-variant="BoButtonVariant.secondary"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Danger', icon: Icon.chevronDown }"
	:toggle-variant="BoButtonVariant.danger"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Warning', icon: Icon.chevronDown }"
	:toggle-variant="BoButtonVariant.warning"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Success', icon: Icon.chevronDown }"
	:toggle-variant="BoButtonVariant.success"
/>

<bo-dropdown
	:options="options"
	:default-option="{ label: 'Dark', icon: Icon.chevronDown }"
	:toggle-variant="BoButtonVariant.dark"
/>
```

## Custom Toggle

Use the toggle slot to create a custom toggle button. You can access the exposed `onDropdownToggle` function to handle opening and closing the dropdown.

<div class="flex gap-4 items-center">
  <bo-dropdown :options="options" ref="dropdown">
    <template #toggle>
      <button 
        class="px-4 py-2 bg-purple-600 text-white rounded-full flex items-center gap-2"
        @click="dropdown.onDropdownToggle"
      >
        <span>Custom Toggle</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </template>
  </bo-dropdown>
</div>

```html
<script setup>
	import { ref } from 'vue';

	const dropdown = ref(null);
</script>

<template>
	<bo-dropdown
		:options="options"
		ref="dropdown"
	>
		<template #toggle>
			<button
				class="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-white"
				@click="dropdown.onDropdownToggle"
			>
				<span>Custom Toggle</span>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19 9L12 16L5 9"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</template>
	</bo-dropdown>
</template>
```

## Custom Options

You can pass additional data to options and handle it in the select event.

<div class="flex gap-4 items-center">
  <bo-dropdown 
    :options="[
      { label: 'Edit', icon: Icon.edit, action: 'edit' },
      { label: 'Delete', icon: Icon.trash, action: 'delete', dangerous: true },
      { label: 'View', icon: Icon.eye, action: 'view' }
    ]"
    :default-option="{ label: 'Actions', icon: Icon.menu }"
  />
</div>

```html
<bo-dropdown
	:options="[
    { label: 'Edit', icon: Icon.edit, action: 'edit' },
    { label: 'Delete', icon: Icon.trash, action: 'delete', dangerous: true },
    { label: 'View', icon: Icon.eye, action: 'view' }
  ]"
	:default-option="{ label: 'Actions', icon: Icon.menu }"
	@select="(option) => {
    if (option.action === 'delete' && option.dangerous) {
      // Show confirmation dialog
    } else {
      // Handle other actions
    }
  }"
/>
```
