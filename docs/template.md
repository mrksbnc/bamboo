<script setup>
import { ComponentName, ComponentEnum1, ComponentEnum2 } from '@/components/component-name';
import { SharedEnum } from '@/shared'
</script>

# component-name

Brief description of what the component is and when to use it.

## Basic Example

```html
<component-name :prop="value" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <component-name :prop="value" />
</div>

### Props

| Prop name | Type    | Default        | Description          |
| --------- | ------- | -------------- | -------------------- |
| `prop1`   | `Type1` | `DefaultValue` | Description of prop1 |
| `prop2`   | `Type2` | `DefaultValue` | Description of prop2 |
| `prop3`   | `Type3` | `DefaultValue` | Description of prop3 |

### Slots

| Slot name | Description |
| --------- | ----------- |
| `default` | Description |

### Events

| Event name | Description |
| ---------- | ----------- |
| `event1`   | Description |
| `event2`   | Description |

### Types

```ts
export interface ComponentDataType {
	property1?: string; // Description of property1
	property2?: string; // Description of property2
}

export enum ComponentEnum1 {
	value1 = 'value1', // Description of value1
	value2 = 'value2', // Description of value2
}

export enum ComponentEnum2 {
	option1 = 'option1', // Description of option1
	option2 = 'option2', // Description of option2
}
```

## Example Section 1

Description of this example and when to use this variation.

<div class="flex gap-4 items-center">
  <component-name :prop="value1" />
  <component-name :prop="value2" />
</div>

```html
<component-name :prop="value1" /> <component-name :prop="value2" />
```

## Example Section 2

Description of another variation of the component.

<div class="flex gap-4 items-center">
  <component-name :prop1="value1" :prop2="value2" />
  <component-name :prop1="value3" :prop2="value4" />
</div>

```html
<component-name
	:prop1="value1"
	:prop2="value2"
/>
<component-name
	:prop1="value3"
	:prop2="value4"
/>
```

## Variants

Different style variants of the component.

<div class="flex gap-4 items-center">
  <component-name :variant="ComponentEnum1.value1" />
  <component-name :variant="ComponentEnum1.value2" />
</div>

```html
<component-name :variant="ComponentEnum1.value1" />
<component-name :variant="ComponentEnum1.value2" />
```

## Sizes

Available sizes for the component.

<div class="flex items-center gap-4">
  <component-name :size="SharedEnum.small" />
  <component-name :size="SharedEnum.default" />
  <component-name :size="SharedEnum.large" />
</div>

```html
<component-name :size="SharedEnum.small" />
<component-name :size="SharedEnum.default" />
<component-name :size="SharedEnum.large" />
```

## Shapes

Available shapes for the component.

<div class="flex gap-4 items-center">
  <component-name :shape="ComponentEnum1.value1" />
  <component-name :shape="ComponentEnum1.value2" />
</div>

```html
<component-name :shape="ComponentEnum1.value1" /> <component-name :shape="ComponentEnum1.value2" />
```
