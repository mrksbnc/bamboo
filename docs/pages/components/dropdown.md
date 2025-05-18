# Dropdown

Dropdown is a component that allows users to select an option from a predefined list.

```js
import { BoDropdown } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-dropdown text="Options">
		<bo-dropdown-item>Profile</bo-dropdown-item>
		<bo-dropdown-item>Settings</bo-dropdown-item>
		<bo-dropdown-item disabled>Help</bo-dropdown-item>
		<bo-dropdown-divider />
		<bo-dropdown-item variant="danger">Logout</bo-dropdown-item>
	</bo-dropdown>
</template>

<script setup>
import { BoDropdown, BoDropdownItem, BoDropdownDivider } from '@mrksbnc/bamboo';
</script>
```

## Props

### Dropdown Props

| Name           | Type                  | Default          | Description                           |
| -------------- | --------------------- | ---------------- | ------------------------------------- |
| `text`         | `string`              | `''`             | Text to display in the trigger button |
| `placement`    | `BoPlacement`         | `'bottom-start'` | Placement of the dropdown menu        |
| `disabled`     | `boolean`             | `false`          | Whether the dropdown is disabled      |
| `size`         | `BoSize`              | `'default'`      | Size of the dropdown trigger          |
| `variant`      | `BoButtonVariant`     | `'secondary'`    | Variant of the trigger button         |
| `icon`         | `string \| Component` | `undefined`      | Icon to show in the trigger button    |
| `hideArrow`    | `boolean`             | `false`          | Hide the dropdown arrow icon          |
| `closeOnClick` | `boolean`             | `true`           | Close dropdown when item is clicked   |
| `offset`       | `number`              | `4`              | Offset from the trigger button        |
| `width`        | `string \| number`    | `'auto'`         | Width of the dropdown menu            |

### Dropdown Item Props

| Name       | Type                  | Default       | Description                    |
| ---------- | --------------------- | ------------- | ------------------------------ |
| `disabled` | `boolean`             | `false`       | Whether the item is disabled   |
| `variant`  | `BoButtonVariant`     | `'secondary'` | Color variant of the item      |
| `icon`     | `string \| Component` | `undefined`   | Icon to show before text       |
| `selected` | `boolean`             | `false`       | Whether the item is selected   |
| `value`    | `any`                 | `undefined`   | Value associated with the item |

## Events

| Name     | Payload | Description                      |
| -------- | ------- | -------------------------------- |
| `show`   | -       | Emitted when dropdown opens      |
| `hide`   | -       | Emitted when dropdown closes     |
| `select` | `value` | Emitted when an item is selected |

## Types

```ts
type BoPlacement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'left'
	| 'left-start'
	| 'left-end';

interface DropdownItem {
	label: string;
	value: any;
	disabled?: boolean;
	icon?: string | Component;
	variant?: BoButtonVariant;
	selected?: boolean;
}
```

## Examples

### With Icons

```vue
<template>
	<bo-dropdown
		text="Account"
		icon="user"
	>
		<bo-dropdown-item icon="user-circle">Profile</bo-dropdown-item>
		<bo-dropdown-item icon="cog">Settings</bo-dropdown-item>
		<bo-dropdown-divider />
		<bo-dropdown-item
			icon="logout"
			variant="danger"
			>Logout</bo-dropdown-item
		>
	</bo-dropdown>
</template>
```

### Custom Trigger

```vue
<template>
	<bo-dropdown>
		<template #trigger="{ toggle, open }">
			<bo-button
				:variant="open ? 'primary' : 'secondary'"
				@click="toggle"
			>
				{{ open ? 'Close' : 'Open' }} Menu
			</bo-button>
		</template>
		<bo-dropdown-item>Option 1</bo-dropdown-item>
		<bo-dropdown-item>Option 2</bo-dropdown-item>
	</bo-dropdown>
</template>
```

### Different Sizes

```vue
<template>
	<div class="space-x-4">
		<bo-dropdown
			text="Small"
			size="small"
		>
			<bo-dropdown-item>Option 1</bo-dropdown-item>
			<bo-dropdown-item>Option 2</bo-dropdown-item>
		</bo-dropdown>

		<bo-dropdown text="Default">
			<bo-dropdown-item>Option 1</bo-dropdown-item>
			<bo-dropdown-item>Option 2</bo-dropdown-item>
		</bo-dropdown>

		<bo-dropdown
			text="Large"
			size="large"
		>
			<bo-dropdown-item>Option 1</bo-dropdown-item>
			<bo-dropdown-item>Option 2</bo-dropdown-item>
		</bo-dropdown>
	</div>
</template>
```

### With Selection

```vue
<template>
	<bo-dropdown
		v-model="selected"
		text="Select Option"
	>
		<bo-dropdown-item
			v-for="option in options"
			:key="option.value"
			:value="option.value"
			:selected="selected === option.value"
		>
			{{ option.label }}
		</bo-dropdown-item>
	</bo-dropdown>
</template>

<script setup>
const selected = ref(null);
const options = [
	{ value: 1, label: 'Option 1' },
	{ value: 2, label: 'Option 2' },
	{ value: 3, label: 'Option 3' },
];
</script>
```

### Different Placements

```vue
<template>
	<div class="grid grid-cols-3 gap-4">
		<bo-dropdown
			text="Top"
			placement="top"
		>
			<bo-dropdown-item>Option 1</bo-dropdown-item>
			<bo-dropdown-item>Option 2</bo-dropdown-item>
		</bo-dropdown>

		<bo-dropdown
			text="Right"
			placement="right"
		>
			<bo-dropdown-item>Option 1</bo-dropdown-item>
			<bo-dropdown-item>Option 2</bo-dropdown-item>
		</bo-dropdown>

		<bo-dropdown
			text="Bottom"
			placement="bottom"
		>
			<bo-dropdown-item>Option 1</bo-dropdown-item>
			<bo-dropdown-item>Option 2</bo-dropdown-item>
		</bo-dropdown>
	</div>
</template>
```

### With Groups

```vue
<template>
	<bo-dropdown text="Edit">
		<bo-dropdown-group label="Text">
			<bo-dropdown-item icon="bold">Bold</bo-dropdown-item>
			<bo-dropdown-item icon="italic">Italic</bo-dropdown-item>
			<bo-dropdown-item icon="underline">Underline</bo-dropdown-item>
		</bo-dropdown-group>
		<bo-dropdown-divider />
		<bo-dropdown-group label="Alignment">
			<bo-dropdown-item icon="align-left">Left</bo-dropdown-item>
			<bo-dropdown-item icon="align-center">Center</bo-dropdown-item>
			<bo-dropdown-item icon="align-right">Right</bo-dropdown-item>
		</bo-dropdown-group>
	</bo-dropdown>
</template>
```

## Slots

| Name      | Props                                   | Description                   |
| --------- | --------------------------------------- | ----------------------------- |
| `trigger` | `{ toggle: () => void, open: boolean }` | Custom trigger element        |
| `icon`    | -                                       | Custom icon in trigger button |
| `default` | -                                       | Dropdown menu content         |

## Accessibility

The dropdown component follows WAI-ARIA Menu Button pattern:

- Uses `button` element for trigger with appropriate ARIA attributes
- Menu items are focusable and support keyboard navigation
- Implements `role="menu"` and `role="menuitem"`
- Supports keyboard interactions (Enter, Space, Arrow keys, Esc)
- Announces selected state and disabled items
- Manages focus when opening/closing menu
