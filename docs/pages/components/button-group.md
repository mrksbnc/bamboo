<script setup>
import { BoButtonGroup, BoButtonGroupOrientation, BoButtonShape } from '@/components/bo-button-group';
import { BoButtonVariant } from '@/components/bo-button/bo-button';
import { BoSize } from '@/shared';
</script>

# Button Group

A customizable button group component for creating a set of related buttons with consistent styling and behavior.

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
	/>
</template>

<script setup>
import { BoButtonGroup } from '@mrksbnc/bamboo';
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
| `fullWidth`          | `boolean`                  | `false`      | Whether the group takes full container width |
| `disabled`           | `boolean`                  | `false`      | Whether all buttons are disabled             |
| `shape`              | `BoButtonShape`            | `rounded`    | Shape of the button group                    |
| `items`              | `BoButtonGroupItemProps[]` | `[]`         | Array of button items to display             |
| `defaultActiveIndex` | `number`                   | `-1`         | The index of the active button in the group  |

### Button Group Item Props

| Name          | Type                          | Default     | Description                                |
| ------------- | ----------------------------- | ----------- | ------------------------------------------ |
| `id`          | `string`                      | Required    | Unique ID for the button                   |
| `label`       | `string`                      | Required    | Text label for the button                  |
| `size`        | `BoSize`                      | `default`   | Size of the individual button              |
| `active`      | `boolean`                     | `false`     | Whether the button is in active state      |
| `disabled`    | `boolean`                     | `false`     | Whether the button is disabled             |
| `shape`       | `BoButtonShape`               | `rounded`   | Shape of the individual button             |
| `variant`     | `BoButtonVariant`             | `secondary` | Color variant of the individual button     |
| `orientation` | `BoButtonGroupOrientation`    | `undefined` | Override group orientation for this button |
| `position`    | `ButtonGroupItemListPosition` | `undefined` | Position information in the button group   |

## Events

| Name     | Payload  | Description                           |
| -------- | -------- | ------------------------------------- |
| `select` | `number` | Emitted when a button item is clicked |

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
export enum BoButtonShape {
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
	id: string;
	/** Text label to display on the button */
	label: string;
	/** Size of the button */
	size?: BoSize;
	/** Whether the button is in active state */
	active?: boolean;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Shape of the button */
	shape?: BoButtonShape;
	/** Color variant of the button */
	variant?: BoButtonVariant;
	/** Override the group's orientation for this button */
	orientation?: BoButtonGroupOrientation;
	/** Position information within the button group */
	position?: ButtonGroupItemListPosition;
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
	/** Whether the group should take full width of its container */
	fullWidth?: boolean;
	/** Whether all buttons in the group are disabled */
	disabled?: boolean;
	/** Shape for all buttons in the group */
	shape?: BoButtonShape;
	/** Array of button items to display */
	items?: T[];
	/** The index of the active button in the group */
	defaultActiveIndex?: number;
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
<!-- Other variants: success, danger, warning, dark -->
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
	:items="[
		{ id: 'btn1', label: 'Active', active: true },
		{ id: 'btn2', label: 'Normal' },
	]"
/>
```
