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

## Accessibility Documentation Guidelines

When documenting component accessibility features, follow these standards to ensure coverage of accessibility implementation:

### Required Accessibility Sections

#### 1. Accessibility Features Overview

Provide a summary of accessibility implementation:

```markdown
## Accessibility Features

The ComponentName implements accessibility standards:

### ARIA Implementation

- Semantic structure with proper `role` attributes
- ARIA attributes including `aria-expanded`, `aria-label`, `aria-describedby`
- Accessible naming through automatic computation or custom labels
- Screen reader support with descriptive announcements

### Keyboard Navigation

- Tab navigation with proper focus management
- Enter/Space keys for primary interactions
- Arrow key navigation for related element groups
- Focus indicators with visible outline styles
- Escape key handling for dismissible components

### Testing Support

- Test IDs for automated accessibility testing
- Accessible name computation for verification
- State tracking for dynamic content testing
- WCAG compliance validation points
```

#### 2. Keyboard Navigation Section

Document all keyboard interactions with practical examples:

```markdown
## Keyboard Navigation

### Navigation Keys

- **Tab/Shift+Tab**: Navigate between focusable elements
- **Enter/Space**: Activate primary action
- **Arrow Keys**: Navigate between related items
- **Escape**: Close or cancel (for modals, dropdowns)
- **Home/End**: Jump to first/last item (for lists)

### Keyboard Accessibility Example

<!-- Include interactive example -->
<div class="example-container">
	<component-name title="Navigate with Keyboard">
		<p>Use <kbd>Tab</kbd> to focus, <kbd>Enter</kbd> to activate</p>
	</component-name>
</div>

### Focus Management Features

- Focus trapping in modal contexts
- Focus restoration after interactions
- Visual focus indicators for keyboard users
- Skip to content functionality where applicable
```

#### 3. ARIA Attributes Documentation

List and explain all ARIA attributes used:

```markdown
### ARIA Attributes Reference

| Attribute          | Purpose                       | Values                        | Implementation             |
| ------------------ | ----------------------------- | ----------------------------- | -------------------------- |
| `role`             | Defines element semantic role | `button`, `dialog`, `listbox` | Automatically applied      |
| `aria-expanded`    | Indicates expansion state     | `true`, `false`               | Dynamic state tracking     |
| `aria-label`       | Provides accessible name      | Custom string                 | Props or computed fallback |
| `aria-describedby` | References description        | Element ID                    | Linked to help text        |
| `aria-hidden`      | Hides decorative elements     | `true`, `false`               | Applied to icons           |
```

#### 4. Screen Reader Support

Explain how the component works with assistive technologies:

```markdown
### Screen Reader Support

- State announcements: Changes are announced clearly
- Descriptive labels: Context is provided for all interactive elements
- Relationship mapping: Connections between elements are explicit
- Content structure: Proper heading hierarchy and landmarks
```

#### 5. Testing Guidelines

Provide testing instructions and tools:

````markdown
### Accessibility Testing

#### Automated Testing

```javascript
// Example with jest and @testing-library
test('should have proper accessibility attributes', () => {
	render(<ComponentName title="Test" />);

	const button = screen.getByRole('button');
	expect(button).toHaveAttribute('aria-expanded', 'false');
	expect(button).toHaveAccessibleName('Test');
});
```
````

````

#### Manual Testing Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible and clear
- [ ] Screen reader announces state changes
- [ ] Color contrast meets WCAG AA standards (4.5:1)
- [ ] Component works without mouse interaction

#### Testing Tools

- **axe-core**: Automated accessibility testing
- **NVDA/JAWS**: Screen reader testing
- **Lighthouse**: Accessibility audit
- **Playwright**: End-to-end accessibility testing

```markdown
````

### Accessibility Props Documentation

When documenting accessibility-related props, use this format:

```markdown
### Accessibility Props

| Name              | Type     | Default        | Description                               |
| ----------------- | -------- | -------------- | ----------------------------------------- |
| `ariaLabel`       | `string` | `undefined`    | Custom accessible name for screen readers |
| `ariaDescribedBy` | `string` | `undefined`    | ID of element describing this component   |
| `role`            | `string` | automatic      | Override semantic role (use with caution) |
| `testId`          | `string` | auto-generated | Data attribute for automated testing      |
```

### Documentation Standards

1. **Use Clear Language**: Avoid technical jargon when explaining accessibility features
2. **Provide Examples**: Include code examples showing proper usage
3. **Reference Standards**: Link to WCAG guidelines and WAI-ARIA patterns
4. **Include Testing**: Document how to verify accessibility implementation
5. **Show Progressive Enhancement**: Demonstrate how features work without JavaScript
6. **Document Edge Cases**: Explain behavior in unusual states or configurations

### Common Accessibility Patterns

Reference these standard patterns in your documentation:

- **Button Pattern**: For clickable elements
- **Disclosure Pattern**: For expandable content (accordions, dropdowns)
- **Modal Pattern**: For overlays and dialogs
- **Menu Pattern**: For navigation and action menus
- **Listbox Pattern**: For selectable options
- **Tab Pattern**: For switching between views

### Code Examples Standards

When showing accessibility code examples:

```vue
<!-- ✅ Good: Accessibility implementation -->
<template>
	<component-name
		:aria-label="accessibleName"
		:aria-expanded="isExpanded"
		@keydown.enter="handleActivate"
		@keydown.space.prevent="handleActivate"
	>
		Content
	</component-name>
</template>

<!-- ❌ Bad: Missing accessibility attributes -->
<template>
	<component-name @click="toggle"> Content </component-name>
</template>
```
