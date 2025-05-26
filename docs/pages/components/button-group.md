<script setup>
import BoButtonGroup from '@/components/button-group/bo-button-group.vue';
import { BoButtonGroupOrientation, BoButtonGroupShape } from '@/components/button-group/bo-button-group';
import { BoButtonVariant } from '@/components/button/bo-button';
import { Icon } from '@/components/icon/bo-icon';
import { BoSize } from '@/shared';
</script>

# Button Group

A customizable button group component for creating a set of related buttons with consistent styling and behavior. Supports single and multi-select modes, icons, accessibility features, and full dark mode support.

```js
import { BoButtonGroup } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-button-group
		:default-active-index="0"
		:items="[
			{ id: 'btn1', label: 'Button 1' },
			{ id: 'btn2', label: 'Button 2' },
			{ id: 'btn3', label: 'Button 3' },
		]"
		@select="handleSelect"
	/>
</template>

<script setup>
import { BoButtonGroup } from '@mrksbnc/bamboo';

const handleSelect = (index) => {
	console.log('Selected button at index:', index);
};
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-button-group
  	:default-active-index="0"
    :items="[
      { id: 'demo1', label: 'Button 1' },
      { id: 'demo2', label: 'Button 2' },
      { id: 'demo3', label: 'Button 3' },
    ]"
  />
</div>

## Props

### Button Group Props

| Name                 | Type                       | Default      | Description                                  |
| -------------------- | -------------------------- | ------------ | -------------------------------------------- |
| `id`                 | `string`                   | `auto`       | Unique ID for the button group               |
| `variant`            | `BoButtonVariant`          | `secondary`  | Color variant of the buttons                 |
| `orientation`        | `BoButtonGroupOrientation` | `horizontal` | Layout orientation of the buttons            |
| `size`               | `BoSize`                   | `default`    | Size of the buttons                          |
| `disabled`           | `boolean`                  | `false`      | Whether all buttons are disabled             |
| `shape`              | `BoButtonGroupShape`       | `rounded`    | Shape of the button group                    |
| `items`              | `BoButtonGroupItemProps[]` | `[]`         | Array of button items to display             |
| `defaultActiveIndex` | `number`                   | `-1`         | The index of the active button in the group  |
| `ariaLabel`          | `string`                   | `auto`       | Custom accessible label for the button group |
| `multiSelect`        | `boolean`                  | `false`      | Whether multiple items can be selected       |

### Button Group Item Props

| Name          | Type                          | Default     | Description                                |
| ------------- | ----------------------------- | ----------- | ------------------------------------------ |
| `id`          | `string`                      | `auto`      | Unique ID for the button                   |
| `label`       | `string`                      | `undefined` | Text label for the button                  |
| `size`        | `BoSize`                      | `default`   | Size of the individual button              |
| `active`      | `boolean`                     | `false`     | Whether the button is in active state      |
| `disabled`    | `boolean`                     | `false`     | Whether the button is disabled             |
| `shape`       | `BoButtonGroupShape`          | `rounded`   | Shape of the individual button             |
| `variant`     | `BoButtonVariant`             | `secondary` | Color variant of the individual button     |
| `orientation` | `BoButtonGroupOrientation`    | `undefined` | Override group orientation for this button |
| `position`    | `ButtonGroupItemListPosition` | `undefined` | Position information in the button group   |
| `prefixIcon`  | `Icon`                        | `Icon.none` | Icon to display before the label           |
| `suffixIcon`  | `Icon`                        | `Icon.none` | Icon to display after the label            |
| `ariaLabel`   | `string`                      | `auto`      | Custom accessible name for the button      |

## Events

| Name          | Payload    | Description                                    |
| ------------- | ---------- | ---------------------------------------------- |
| `select`      | `number`   | Emitted when a button item is clicked (single) |
| `multiSelect` | `number[]` | Emitted when items are selected (multi-select) |

## Types

```ts
/**
 * Defines the orientation of the button group
 */
export enum BoButtonGroupOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

/**
 * Defines the shape of the button group and its items
 */
export enum BoButtonGroupShape {
	square = 'square',
	rounded = 'rounded',
}

/**
 * Position information for a button item within the group
 */
export interface ButtonGroupItemListPosition {
	/** Zero-based index of the button in the group */
	index: number;
	/** Total number of buttons in the group */
	length: number;
	/** Whether this is the last button in the group */
	isLast: boolean;
	/** Whether this is the first button in the group */
	isFirst: boolean;
	/** Index of the currently active button in the group */
	activeIndex: number;
}

/**
 * Props for individual button items within the group
 */
export interface BoButtonGroupItemProps {
	/** Unique identifier for the button */
	id?: string;
	/** Text label to display on the button */
	label?: string;
	/** Size of the button */
	size?: BoSize;
	/** Whether the button is in active state */
	active?: boolean;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Shape of the button */
	shape?: BoButtonGroupShape;
	/** Color variant of the button */
	variant?: BoButtonVariant;
	/** Override the group's orientation for this button */
	orientation?: BoButtonGroupOrientation;
	/** Position information within the button group */
	position?: ButtonGroupItemListPosition;
	/** Icon to display before the label */
	prefixIcon?: Icon;
	/** Icon to display after the label */
	suffixIcon?: Icon;
	/** Custom accessible name for the button */
	ariaLabel?: string;
}

/**
 * Props for the button group component
 */
export interface BoButtonGroupProps<T = Record<string, unknown>> {
	/** Unique identifier for the group */
	id?: string;
	/** Color variant for all buttons in the group */
	variant?: BoButtonVariant;
	/** Layout orientation of the buttons */
	orientation?: BoButtonGroupOrientation;
	/** Size for all buttons in the group */
	size?: BoSize;
	/** Whether all buttons in the group are disabled */
	disabled?: boolean;
	/** Shape for all buttons in the group */
	shape?: BoButtonGroupShape;
	/** Array of button items to display */
	items?: T[];
	/** The index of the active button in the group */
	defaultActiveIndex?: number;
	/** Custom accessible label for the button group */
	ariaLabel?: string;
	/** Whether multiple items can be selected at once */
	multiSelect?: boolean;
}
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <div class="flex gap-4">
    <bo-button-group
      :variant="BoButtonVariant.primary"
      :items="[
        { id: 'primary1', label: 'Primary 1' },
        { id: 'primary2', label: 'Primary 2' },
      ]"
    />
    <bo-button-group
      :variant="BoButtonVariant.secondary"
      :items="[
        { id: 'secondary1', label: 'Secondary 1' },
        { id: 'secondary2', label: 'Secondary 2' },
      ]"
    />
  </div>
  <div class="flex gap-4">
    <bo-button-group
      :variant="BoButtonVariant.success"
      :items="[
        { id: 'success1', label: 'Success 1' },
        { id: 'success2', label: 'Success 2' },
      ]"
    />
    <bo-button-group
      :variant="BoButtonVariant.danger"
      :items="[
        { id: 'danger1', label: 'Danger 1' },
        { id: 'danger2', label: 'Danger 2' },
      ]"
    />
  </div>
  <div class="flex gap-4">
    <bo-button-group
      :variant="BoButtonVariant.warning"
      :items="[
        { id: 'warning1', label: 'Warning 1' },
        { id: 'warning2', label: 'Warning 2' },
      ]"
    />
    <bo-button-group
      :variant="BoButtonVariant.light"
      :items="[
        { id: 'light1', label: 'Light 1' },
        { id: 'light2', label: 'Light 2' },
      ]"
    />
  </div>
  <div class="flex gap-4">
    <bo-button-group
      :variant="BoButtonVariant.dark"
      :items="[
        { id: 'dark1', label: 'Dark 1' },
        { id: 'dark2', label: 'Dark 2' },
      ]"
    />
  </div>
</div>

```vue
<bo-button-group
	:variant="BoButtonVariant.primary"
	:items="[
		{ id: 'btn1', label: 'Primary 1' },
		{ id: 'btn2', label: 'Primary 2' },
	]"
/>
<bo-button-group
	:variant="BoButtonVariant.secondary"
	:items="[
		{ id: 'btn1', label: 'Secondary 1' },
		{ id: 'btn2', label: 'Secondary 2' },
	]"
/>
<!-- Other variants: success, danger, warning, light, dark -->
```

## Sizes

<div class="flex flex-col gap-4 items-start my-4">
  <bo-button-group
    :size="BoSize.extra_small"
    :items="[
      { id: 'xs1', label: 'Extra Small 1' },
      { id: 'xs2', label: 'Extra Small 2' },
    ]"
  />
  <bo-button-group
    :size="BoSize.small"
    :items="[
      { id: 'sm1', label: 'Small 1' },
      { id: 'sm2', label: 'Small 2' },
    ]"
  />
  <bo-button-group
    :size="BoSize.default"
    :items="[
      { id: 'def1', label: 'Default 1' },
      { id: 'def2', label: 'Default 2' },
    ]"
  />
  <bo-button-group
    :size="BoSize.large"
    :items="[
      { id: 'lg1', label: 'Large 1' },
      { id: 'lg2', label: 'Large 2' },
    ]"
  />
  <bo-button-group
    :size="BoSize.extra_large"
    :items="[
      { id: 'xl1', label: 'Extra Large 1' },
      { id: 'xl2', label: 'Extra Large 2' },
    ]"
  />
</div>

```vue
<bo-button-group :size="BoSize.extra_small" :items="items" />
<bo-button-group :size="BoSize.small" :items="items" />
<bo-button-group :size="BoSize.default" :items="items" />
<bo-button-group :size="BoSize.large" :items="items" />
<bo-button-group :size="BoSize.extra_large" :items="items" />
```

## Shapes

<div class="flex gap-4 items-center my-4">
  <bo-button-group
    :shape="BoButtonGroupShape.square"
    :items="[
      { id: 'square1', label: 'Square 1' },
      { id: 'square2', label: 'Square 2' },
      { id: 'square3', label: 'Square 3' },
    ]"
  />
  <bo-button-group
    :shape="BoButtonGroupShape.rounded"
    :items="[
      { id: 'rounded1', label: 'Rounded 1' },
      { id: 'rounded2', label: 'Rounded 2' },
      { id: 'rounded3', label: 'Rounded 3' },
    ]"
  />
</div>

```vue
<bo-button-group
	:shape="BoButtonGroupShape.square"
	:items="[
		{ id: 'square1', label: 'Square 1' },
		{ id: 'square2', label: 'Square 2' },
		{ id: 'square3', label: 'Square 3' },
	]"
/>
<bo-button-group
	:shape="BoButtonGroupShape.rounded"
	:items="[
		{ id: 'rounded1', label: 'Rounded 1' },
		{ id: 'rounded2', label: 'Rounded 2' },
		{ id: 'rounded3', label: 'Rounded 3' },
	]"
/>
```

## Orientations

<div class="flex gap-8 my-4">
  <bo-button-group
    :orientation="BoButtonGroupOrientation.horizontal"
    :items="[
      { id: 'h1', label: 'Horizontal 1' },
      { id: 'h2', label: 'Horizontal 2' },
      { id: 'h3', label: 'Horizontal 3' },
    ]"
  />
  <bo-button-group
    :orientation="BoButtonGroupOrientation.vertical"
    :items="[
      { id: 'v1', label: 'Vertical 1' },
      { id: 'v2', label: 'Vertical 2' },
      { id: 'v3', label: 'Vertical 3' },
    ]"
  />
</div>

```vue
<bo-button-group :orientation="BoButtonGroupOrientation.horizontal" :items="items" />
<bo-button-group :orientation="BoButtonGroupOrientation.vertical" :items="items" />
```

## With Icons

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :items="[
      { id: 'icon1', label: 'Save', prefixIcon: Icon.save },
      { id: 'icon2', label: 'Delete', prefixIcon: Icon.trash },
      { id: 'icon3', label: 'Edit', prefixIcon: Icon.edit },
    ]"
  />
  <bo-button-group
    :items="[
      { id: 'suffix1', label: 'Next', suffixIcon: Icon.arrow_right },
      { id: 'suffix2', label: 'External', suffixIcon: Icon.external_link },
    ]"
  />
  <bo-button-group
    :items="[
      { id: 'icononly1', prefixIcon: Icon.star, ariaLabel: 'Favorite' },
      { id: 'icononly2', prefixIcon: Icon.heart, ariaLabel: 'Like' },
      { id: 'icononly3', prefixIcon: Icon.bookmark, ariaLabel: 'Bookmark' },
    ]"
  />
</div>

```vue
<!-- With prefix icons -->
<bo-button-group
	:items="[
		{ id: 'save', label: 'Save', prefixIcon: Icon.save },
		{ id: 'delete', label: 'Delete', prefixIcon: Icon.trash },
	]"
/>

<!-- With suffix icons -->
<bo-button-group
	:items="[
		{ id: 'next', label: 'Next', suffixIcon: Icon.arrow_right },
		{ id: 'external', label: 'External', suffixIcon: Icon.external_link },
	]"
/>

<!-- Icon-only buttons -->
<bo-button-group
	:items="[
		{ id: 'star', prefixIcon: Icon.star, ariaLabel: 'Favorite' },
		{ id: 'heart', prefixIcon: Icon.heart, ariaLabel: 'Like' },
	]"
/>
```

## Multi-Select Mode

<div class="flex gap-4 my-4">
  <bo-button-group
    :multi-select="true"
    :items="[
      { id: 'multi1', label: 'Option 1' },
      { id: 'multi2', label: 'Option 2' },
      { id: 'multi3', label: 'Option 3' },
    ]"
  />
</div>

```vue
<template>
	<bo-button-group
		:multi-select="true"
		:items="[
			{ id: 'opt1', label: 'Option 1' },
			{ id: 'opt2', label: 'Option 2' },
			{ id: 'opt3', label: 'Option 3' },
		]"
		@multi-select="handleMultiSelect"
	/>
</template>

<script setup>
const handleMultiSelect = (selectedIndices) => {
	console.log('Selected indices:', selectedIndices);
};
</script>
```

## States

### Active Button

<div class="flex gap-4 my-4">
  <bo-button-group
    :default-active-index="0"
    :items="[
      { id: 'active1', label: 'Active' },
      { id: 'active2', label: 'Normal' },
    ]"
  />
</div>

```vue
<bo-button-group
	:default-active-index="0"
	:items="[
		{ id: 'btn1', label: 'Active' },
		{ id: 'btn2', label: 'Normal' },
	]"
/>
```

### Disabled Group

<div class="flex gap-4 my-4">
  <bo-button-group
    disabled
    :items="[
      { id: 'disabled1', label: 'Disabled 1' },
      { id: 'disabled2', label: 'Disabled 2' },
    ]"
  />
</div>

```vue
<bo-button-group
	disabled
	:items="[
		{ id: 'btn1', label: 'Disabled 1' },
		{ id: 'btn2', label: 'Disabled 2' },
	]"
/>
```

### Individual Disabled Items

<div class="flex gap-4 my-4">
  <bo-button-group
    :items="[
      { id: 'normal', label: 'Normal' },
      { id: 'disabled', label: 'Disabled', disabled: true },
      { id: 'normal2', label: 'Normal' },
    ]"
  />
</div>

```vue
<bo-button-group
	:items="[
		{ id: 'normal', label: 'Normal' },
		{ id: 'disabled', label: 'Disabled', disabled: true },
		{ id: 'normal2', label: 'Normal' },
	]"
/>
```

## Accessibility

The Button Group component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `role="group"`, `aria-label`, and `aria-pressed` attributes
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Descriptive labels and hidden decorative icons
- **Semantic HTML**: Uses proper `<button>` elements for all interactive items

### Custom Accessibility Labels

```vue
<bo-button-group
	aria-label="Document actions"
	:items="[
		{ id: 'save', prefixIcon: Icon.save, ariaLabel: 'Save document' },
		{ id: 'print', prefixIcon: Icon.printer, ariaLabel: 'Print document' },
	]"
/>
```

## Dark Mode Support

The Button Group component includes full dark mode support with automatic color adjustments:

- **Text Colors**: Optimized contrast for both light and dark themes
- **Background Colors**: Appropriate backgrounds for active and hover states
- **Border Colors**: Consistent border styling across themes
- **Hover Effects**: Smooth transitions that work in both modes

Dark mode is automatically applied when the `dark` class is present on a parent element.

## Event Handling

```vue
<template>
	<bo-button-group
		:items="items"
		:multi-select="isMultiSelect"
		@select="handleSingleSelect"
		@multi-select="handleMultiSelect"
	/>
</template>

<script setup>
import { ref } from 'vue';

const isMultiSelect = ref(false);
const items = ref([
	{ id: 'btn1', label: 'Button 1' },
	{ id: 'btn2', label: 'Button 2' },
	{ id: 'btn3', label: 'Button 3' },
]);

const handleSingleSelect = (index) => {
	console.log('Single select - Index:', index);
	console.log('Selected item:', items.value[index]);
};

const handleMultiSelect = (indices) => {
	console.log('Multi select - Indices:', indices);
	console.log(
		'Selected items:',
		indices.map((i) => items.value[i]),
	);
};
</script>
```
