<script setup>
import { ComponentName, ComponentEnum1, ComponentEnum2 } from '@/components/component-name';
import { SharedEnum } from '@/shared'
</script>

# ComponentName

Brief description of component purpose and functionality.

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
| .....     | .....            | .....     | .....                |

## Events

| Name     | Payload          | Description                |
| -------- | ---------------- | -------------------------- |
| `click`  | `MouseEvent`     | Emitted when clicked       |
| `update` | `{ value: any }` | Emitted when value changes |
| .....    | .....            | .....                      |

## Slots

| Name      | Description    |
| --------- | -------------- |
| `default` | Main content   |
| `header`  | Header content |
| `footer`  | Footer content |
| .....     | .....          |

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

All variant values must be documented with visual examples:

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

All size values must be documented with visual examples:

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

Document all component states with examples:

### Disabled

<div class="flex gap-4 items-center my-4">
	<component-name disabled />
</div>

```vue
<component-name disabled />
```

### Loading

<div class="flex gap-4 items-center my-4">
	<component-name loading />
</div>

```vue
<component-name loading />
```

### Error

<div class="flex gap-4 items-center my-4">
	<component-name error />
</div>

```vue
<component-name error />
```

### Active/Selected

<div class="flex gap-4 items-center my-4">
	<component-name active />
	<component-name selected />
</div>

```vue
<component-name active />
<component-name selected />
```

## Content Variations

### Custom Content

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

### With Icons

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

## Accessibility

### Features

- Semantic HTML structure with proper roles
- ARIA attributes for state and properties
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Keyboard Navigation

| Key           | Action                  |
| ------------- | ----------------------- |
| Tab/Shift+Tab | Navigate focus          |
| Enter/Space   | Activate component      |
| Arrow Keys    | Navigate between items  |
| Escape        | Close/cancel            |
| Home/End      | Jump to first/last item |

### ARIA Attributes

| Attribute          | Purpose               | Values             |
| ------------------ | --------------------- | ------------------ |
| `role`             | Semantic role         | `button`, `dialog` |
| `aria-expanded`    | Expansion state       | `true`, `false`    |
| `aria-label`       | Accessible name       | Custom string      |
| `aria-describedby` | Description reference | Element ID         |
| `aria-disabled`    | Disabled state        | `true`, `false`    |

### Testing

````markdown
```javascript
test('accessibility attributes', () => {
	render(<ComponentName title="Test" />);
	const element = screen.getByRole('button');
	expect(element).toHaveAttribute('aria-expanded', 'false');
	expect(element).toHaveAccessibleName('Test');
});
```
````

````

### Manual Testing

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader announces changes
- [ ] Color contrast meets WCAG AA
- [ ] Works without mouse

### Accessibility Props

| Name              | Type     | Default        | Description                               |
| ----------------- | -------- | -------------- | ----------------------------------------- |
| `ariaLabel`       | `string` | `undefined`    | Custom accessible name for screen readers |
| `ariaDescribedBy` | `string` | `undefined`    | ID of element describing this component   |
| `role`            | `string` | automatic      | Override semantic role (use with caution) |
| `testId`          | `string` | auto-generated | Data attribute for automated testing      |

## Component Documentation Requirements

### Mandatory Sections

1. **All Variants**: Every enum value must have visual example
2. **All Sizes**: Every size option must be documented
3. **All States**: Disabled, loading, error, active states required
4. **Accessibility**: Full ARIA and keyboard documentation
5. **Event Handling**: All events with examples
6. **Props Table**: Complete with types and defaults
7. **Types**: All interfaces and enums defined

### Optional Sections

- Dark mode examples (if supported)
- Complex usage patterns
- Integration examples
- Performance considerations

### Visual Examples Required

Every prop that affects appearance must include:
- Interactive demo
- Code example
- Visual comparison where applicable

### Code Standards

```vue
<!-- ✅ Good: Complete prop documentation -->
<component-name
	:variant="ComponentEnum1.primary"
	:size="SharedEnum.large"
	:disabled="false"
	aria-label="Custom label"
	@click="handleClick"
/>

<!-- ❌ Bad: Undocumented props or states -->
<component-name @click="toggle" />
```
````
