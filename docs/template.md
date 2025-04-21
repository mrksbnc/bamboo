<script setup>
import { ComponentName, ComponentEnum1, ComponentEnum2 } from '@/components/component-name';
import { SharedEnum } from '@/shared'
</script>

# ComponentName

Brief description of the component's purpose and functionality.

```js
import { ComponentName } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<component-name prop="value" />
</template>

<script setup>
import { ComponentName } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<component-name :prop="value" />
</div>

## Props

| Name      | Type             | Default   | Description          |
| --------- | ---------------- | --------- | -------------------- |
| `prop1`   | `Type1`          | `value1`  | Description of prop1 |
| `prop2`   | `Type2`          | `value2`  | Description of prop2 |
| `variant` | `ComponentEnum1` | `default` | Component appearance |
| `size`    | `SharedEnum`     | `default` | Component size       |

## Events

| Name     | Payload          | Description                |
| -------- | ---------------- | -------------------------- |
| `click`  | `MouseEvent`     | Emitted when clicked       |
| `update` | `{ value: any }` | Emitted when value changes |

## Slots

| Name      | Description    |
| --------- | -------------- |
| `default` | Main content   |
| `header`  | Header content |
| `footer`  | Footer content |

## Types

```ts
export enum ComponentEnum1 {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
}

export interface ComponentProps {
	prop1?: string;
	prop2?: boolean;
	variant?: ComponentEnum1;
	size?: SharedEnum;
}
```

## Variants

<div class="flex gap-4 items-center my-4">
	<component-name :variant="ComponentEnum1.default" />
	<component-name :variant="ComponentEnum1.primary" />
	<component-name :variant="ComponentEnum1.secondary" />
</div>

```vue
<component-name :variant="ComponentEnum1.default" />
<component-name :variant="ComponentEnum1.primary" />
<component-name :variant="ComponentEnum1.secondary" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<component-name :size="SharedEnum.small" />
	<component-name :size="SharedEnum.default" />
	<component-name :size="SharedEnum.large" />
</div>

```vue
<component-name :size="SharedEnum.small" />
<component-name :size="SharedEnum.default" />
<component-name :size="SharedEnum.large" />
```

## States

### Disabled

<div class="flex gap-4 items-center my-4">
	<component-name disabled />
</div>

```vue
<component-name disabled />
```

## Custom Content

<div class="flex gap-4 items-center my-4">
	<component-name>
		<div>Custom content</div>
	</component-name>
</div>

```vue
<component-name>
	<div>Custom content</div>
</component-name>
```

## With Icons

<div class="flex gap-4 items-center my-4">
	<component-name prefix-icon="icon-name" />
	<component-name suffix-icon="icon-name" />
</div>

```vue
<component-name prefix-icon="icon-name" />
<component-name suffix-icon="icon-name" />
```

## Event Handling

```vue
<template>
	<component-name
		@click="handleClick"
		@update="handleUpdate"
	/>
</template>

<script setup>
const handleClick = (event) => {
	console.log('Clicked:', event);
};

const handleUpdate = ({ value }) => {
	console.log('Updated value:', value);
};
</script>
```

## Usage Examples

### Basic Form Example

```vue
<form @submit.prevent="submitForm">
	<component-name v-model="formData.value" />
	<bo-button type="submit">Submit</bo-button>
</form>
```

### In a Layout

```vue
<bo-card>
	<template #header>
		<h3>Card Title</h3>
	</template>
	
	<component-name />
	
	<template #footer>
		<bo-button>Action</bo-button>
	</template>
</bo-card>
```
