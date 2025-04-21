<script setup>
import { BoDropdown } from '@/components/bo-dropdown';
import { BoButtonVariant } from '@/components/bo-button';
</script>

# Dropdown

The Dropdown component is a versatile menu that displays a list of options when triggered. It supports various customization options including custom toggle buttons, icons, and component-based options. The component is designed with accessibility in mind, supporting keyboard navigation and screen reader announcements.

## Basic Example

```html
<bo-dropdown
	:options="[
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' }
  ]"
/>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-dropdown 
    :options="[
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' }
    ]"
  />
</div>

### Props

| Prop name       | Type                   | Default   | Description                            |
| --------------- | ---------------------- | --------- | -------------------------------------- |
| `id`            | `string`               | Auto      | Unique identifier for the dropdown     |
| `toggleVariant` | `BoButtonVariant`      | `primary` | Style variant for the toggle button    |
| `defaultOption` | `BaseDropdownOption`   | -         | Default selected option                |
| `options`       | `BaseDropdownOption[]` | -         | Array of dropdown options              |
| `component`     | `Component`            | -         | Custom component for rendering options |

### Types

```ts
export type BaseDropdownOption = {
	id?: string; // Unique identifier for the option
	icon?: Icon; // Icon to display with the option
	label?: string; // Text label for the option
	[key: string]: unknown; // Additional custom properties
};

export type BoDropdownProps = {
	id?: string; // Unique identifier
	toggleVariant?: BoButtonVariant; // Toggle button style
	defaultOption?: BaseDropdownOption; // Default selection
	options?: BaseDropdownOption[]; // Available options
	component?: Component; // Custom option component
};
```

## Basic Usage

A simple dropdown with text options:

<div class="flex flex-col gap-4">
  <bo-dropdown 
    :options="[
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' }
    ]"
  />
</div>

```html
<bo-dropdown
	:options="[
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' }
  ]"
/>
```

## With Icons

Dropdown options can include icons:

<div class="flex flex-col gap-4">
  <bo-dropdown 
    :options="[
      { label: 'Edit', icon: 'pencil' },
      { label: 'Delete', icon: 'trash' },
      { label: 'Share', icon: 'share' }
    ]"
  />
</div>

```html
<bo-dropdown
	:options="[
    { label: 'Edit', icon: 'pencil' },
    { label: 'Delete', icon: 'trash' },
    { label: 'Share', icon: 'share' }
  ]"
/>
```

## Custom Toggle Button

You can customize the toggle button style:

<div class="flex flex-col gap-4">
  <bo-dropdown 
    :toggleVariant="BoButtonVariant.secondary"
    :options="[
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' }
    ]"
  />
</div>

```html
<bo-dropdown
	:toggleVariant="BoButtonVariant.secondary"
	:options="[
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' }
  ]"
/>
```

## Default Selection

Set a default selected option:

<div class="flex flex-col gap-4">
  <bo-dropdown 
    :defaultOption="{ label: 'Option 2' }"
    :options="[
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' }
    ]"
  />
</div>

```html
<bo-dropdown
	:defaultOption="{ label: 'Option 2' }"
	:options="[
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' }
  ]"
/>
```

## Accessibility Features

The Dropdown component includes several accessibility features:

- Keyboard navigation support (Arrow keys, Enter, Escape)
- ARIA attributes for screen readers
- Proper focus management
- Screen reader announcements
- Support for custom accessible names
- Focus trapping within the dropdown

## Best Practices

When using the Dropdown component:

1. Provide clear and concise option labels
2. Use icons to enhance option meaning
3. Consider using appropriate toggle button variants
4. Test keyboard navigation and screen reader compatibility
5. Use default selections appropriately
6. Consider custom components for complex options
7. Maintain consistent dropdown usage throughout your application
