---
title: Dropdown
description: A clean dropdown select component with support for icons, subtitles, multiselect, and hover effects.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import BoDropdown from '@/components/bo-dropdown/bo-dropdown.vue';
import { Icon } from '@/components/bo-icon';

const selectedValue = ref('');
const multiSelectedValues = ref([]);

const simpleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
];

const optionsWithIcons = [
  { label: 'Edit', value: 'edit', icon: Icon.edit },
  { label: 'Duplicate', value: 'duplicate', icon: Icon.copy },
  { label: 'Archive', value: 'archive', icon: Icon.archive },
  { label: 'Move', value: 'move', icon: Icon.move },
  { label: 'Delete', value: 'delete', icon: Icon.trash },
];

const optionsWithSubtitles = [
  { label: 'Personal Account', value: 'personal', subtitle: 'For individual use', icon: Icon.user },
  { label: 'Team Account', value: 'team', subtitle: 'Collaborate with your team', icon: Icon.users },
  { label: 'Enterprise', value: 'enterprise', subtitle: 'Advanced features and support', icon: Icon.building },
];

const optionsWithDisabled = [
  { label: 'Available Option', value: 'available' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  { label: 'Another Available', value: 'another' },
];
</script>

# Dropdown

A clean and accessible dropdown select component for choosing from a list of options. Features include icon support, subtitles, multiselect mode, smooth hover effects, and full keyboard navigation.

## Basic Usage

The dropdown component uses v-model for two-way binding and automatically handles keyboard navigation and accessibility.

```vue
<bo-dropdown v-model="selectedValue" :options="simpleOptions" placeholder="Select an option" />
```

<div style="margin-top: 1rem;">
  <bo-dropdown v-model="selectedValue" :options="simpleOptions" placeholder="Select an option" />
</div>

## With Icons

Options can include icons for better visual identification.

```vue
<script setup>
	import { Icon } from '@/components/bo-icon';

	const optionsWithIcons = [
		{ label: 'Edit', value: 'edit', icon: Icon.edit },
		{ label: 'Duplicate', value: 'duplicate', icon: Icon.copy },
		{ label: 'Archive', value: 'archive', icon: Icon.archive },
		{ label: 'Move', value: 'move', icon: Icon.move },
		{ label: 'Delete', value: 'delete', icon: Icon.trash },
	];
</script>

<bo-dropdown v-model="selectedValue" :options="optionsWithIcons" placeholder="Select action" />
```

<div style="margin-top: 1rem;">
  <bo-dropdown v-model="selectedValue" :options="optionsWithIcons" placeholder="Select action" />
</div>

## With Subtitles

Add descriptive subtitles to provide additional context for each option.

```vue
<script setup>
	const optionsWithSubtitles = [
		{
			label: 'Personal Account',
			value: 'personal',
			subtitle: 'For individual use',
			icon: Icon.user,
		},
		{
			label: 'Team Account',
			value: 'team',
			subtitle: 'Collaborate with your team',
			icon: Icon.users,
		},
		{
			label: 'Enterprise',
			value: 'enterprise',
			subtitle: 'Advanced features and support',
			icon: Icon.building,
		},
	];
</script>

<bo-dropdown
	v-model="selectedValue"
	:options="optionsWithSubtitles"
	placeholder="Choose account type"
/>
```

<div style="margin-top: 1rem;">
  <bo-dropdown v-model="selectedValue" :options="optionsWithSubtitles" placeholder="Choose account type" />
</div>

## Multiselect

Enable multiselect mode to allow selecting multiple options. The dropdown stays open after selection and displays a count of selected items.

```vue
<script setup>
	const multiSelectedValues = ref([]);
</script>

<bo-dropdown
	v-model="multiSelectedValues"
	:options="simpleOptions"
	:multiselect="true"
	placeholder="Select multiple options"
/>
```

<div style="margin-top: 1rem;">
  <bo-dropdown
    v-model="multiSelectedValues"
    :options="simpleOptions"
    :multiselect="true"
    placeholder="Select multiple options"
  />
</div>

## Disabled State

The entire dropdown can be disabled using the `disabled` prop.

```vue
<bo-dropdown
	v-model="selectedValue"
	:options="simpleOptions"
	:disabled="true"
	placeholder="Disabled dropdown"
/>
```

<div style="margin-top: 1rem;">
  <bo-dropdown
    v-model="selectedValue"
    :options="simpleOptions"
    :disabled="true"
    placeholder="Disabled dropdown"
  />
</div>

## Disabled Options

Individual options can be disabled while keeping the dropdown interactive.

```vue
<script setup>
	const optionsWithDisabled = [
		{ label: 'Available Option', value: 'available' },
		{ label: 'Disabled Option', value: 'disabled', disabled: true },
		{ label: 'Another Available', value: 'another' },
	];
</script>

<bo-dropdown v-model="selectedValue" :options="optionsWithDisabled" placeholder="Select option" />
```

<div style="margin-top: 1rem;">
  <bo-dropdown v-model="selectedValue" :options="optionsWithDisabled" placeholder="Select option" />
</div>

## Handling Selection

Use v-model for two-way binding or listen to the `change` event.

```vue
<script setup>
	import { ref } from 'vue';

	const selectedValue = ref('');

	function handleChange(value: string) {
	  console.log('Selected:', value);
	  // Handle the selection
	}
</script>

<bo-dropdown
	v-model="selectedValue"
	:options="simpleOptions"
	placeholder="Select option"
	@change="handleChange"
/>
```

## API Reference

### Props

| Name              | Type                 | Default              | Description                                |
| ----------------- | -------------------- | -------------------- | ------------------------------------------ |
| `id`              | `string`             | auto-generated       | Unique identifier for the dropdown element |
| `dataTestId`      | `string`             | `'bo-dropdown'`      | Data test ID for testing                   |
| `disabled`        | `boolean`            | `false`              | Whether the dropdown is disabled           |
| `placeholder`     | `string`             | `'Select an option'` | Placeholder text when no option selected   |
| `modelValue`      | `string \| string[]` | -                    | Currently selected value(s) (v-model)      |
| `options`         | `BoDropdownOption[]` | required             | Array of dropdown options                  |
| `icon`            | `Icon`               | -                    | Icon to display in the trigger button      |
| `multiselect`     | `boolean`            | `false`              | Enable multiselect mode                    |
| `customCssClass`  | `string`             | -                    | Custom CSS class for styling               |
| `role`            | `string`             | -                    | ARIA role attribute                        |
| `ariaLabel`       | `string`             | -                    | Accessible label for screen readers        |
| `ariaLabelledBy`  | `string`             | -                    | ID of element that labels the dropdown     |
| `ariaDescribedBy` | `string`             | -                    | ID of element that describes the dropdown  |
| `ariaLive`        | `AriaLive`           | `'polite'`           | Live region behavior                       |
| `tabIndex`        | `number`             | -                    | Tab index for keyboard navigation          |

### BoDropdownOption Interface

```ts
interface BoDropdownOption {
	/** The label of the option */
	label: string;
	/** The value of the option */
	value: string;
	/** Optional subtitle for the option */
	subtitle?: string;
	/** Whether the option is disabled */
	disabled?: boolean;
	/** Optional icon for the option */
	icon?: Icon;
}
```

### Events

| Name                | Payload              | Description                              |
| ------------------- | -------------------- | ---------------------------------------- |
| `update:modelValue` | `string \| string[]` | Emitted when selection changes (v-model) |
| `change`            | `string \| string[]` | Emitted when selection changes           |

## Styling Features

The dropdown includes several visual enhancements:

- **Hover Effects**: Smooth background color transitions on hover
- **Focus States**: Clear focus indicators with blue ring
- **Selected State**: Highlighted background for selected items
- **Custom Scrollbar**: Styled scrollbar for long option lists
- **Smooth Animations**: Fade and scale transitions when opening/closing
- **Dark Mode**: Automatic adaptation to dark theme

## Accessibility

The dropdown component includes comprehensive accessibility features:

- **Keyboard Navigation**:
  - `Enter`, `Space`, `ArrowDown` - Open dropdown
  - `ArrowUp`/`ArrowDown` - Navigate options
  - `Enter`, `Space` - Select option
  - `Escape` - Close dropdown
- **ARIA Attributes**: `aria-expanded`, `aria-haspopup`, `aria-selected`, `role="listbox"`
- **Focus Management**: Proper focus handling and visible focus indicators
- **Click Outside**: Automatically closes when clicking outside
- **Screen Reader Support**: Proper labeling and live region updates

```vue
<bo-dropdown
	v-model="selectedValue"
	:options="simpleOptions"
	aria-label="User options menu"
	placeholder="Select option"
/>
```

## Dark Mode

The dropdown automatically adapts to dark mode with appropriate colors:

- Background: `neutral-800`
- Border: `neutral-600`
- Text: `neutral-200`
- Hover: `neutral-700`
- Selected: `blue-900` with `blue-200` text

## Type Definitions

```ts
interface BoDropdownOption {
	/** The label of the option */
	label: string;
	/** The value of the option */
	value: string;
	/** Optional subtitle for the option */
	subtitle?: string;
	/** Whether the option is disabled */
	disabled?: boolean;
	/** Optional icon for the option */
	icon?: Icon;
}

interface BoDropdownProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** Whether the dropdown is disabled. */
	disabled?: boolean;
	/** The placeholder text when no option is selected. */
	placeholder?: string;
	/** The currently selected value (single select) or values (multiselect) */
	modelValue?: string | string[];
	/** The list of options */
	options: BoDropdownOption[];
	/** Icon to display in the trigger button */
	icon?: Icon;
	/** Enable multiselect mode */
	multiselect?: boolean;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** The role of the element. */
	role?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string;
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string;
	/** Indicates that an element will be updated. */
	ariaLive?: AriaLive;
	/** Tab index of the element. */
	tabIndex?: number;
}
```

## Related Components

- [Button](/en/components/button) - Action buttons
- [Icon](/en/components/icon) - Icon component used in options
- [Text](/en/components/text) - Text component for labels
