<script setup>
import { Icon } from '@/components/icon/bo-icon';
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion

Collapsible content panel for organizing information in expandable sections.

```js
import { BoAccordion, BoAccordionContainer } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-accordion title="Frequently Asked Questions">
		<p>The answers to all your questions can be found here.</p>
	</bo-accordion>
</template>

<script setup>
import { BoAccordion } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Frequently Asked Questions">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. The answers to all your questions can be found here.</p>
	</bo-accordion>
</div>

## Props

### BoAccordion Props

| Name               | Type      | Default             | Description                                   |
| ------------------ | --------- | ------------------- | --------------------------------------------- |
| `id`               | `string`  | auto-generated      | Unique ID for the accordion item              |
| `title`            | `string`  | `''`                | Title displayed in the accordion header       |
| `ariaLabel`        | `string`  | `undefined`         | Custom ARIA label for accessibility           |
| `open`             | `boolean` | `false`             | Whether the accordion is open by default      |
| `disabled`         | `boolean` | `false`             | Disables the accordion                        |
| `prefixIcon`       | `Icon`    | `Icon.none`         | Icon to display before the title              |
| `customToggleIcon` | `Icon`    | `Icon.chevron_down` | Custom icon for the expand/collapse indicator |

### BoAccordionContainer Props

| Name                | Type      | Default        | Description                                                 |
| ------------------- | --------- | -------------- | ----------------------------------------------------------- |
| `id`                | `string`  | auto-generated | Unique ID for the accordion container                       |
| `allowMultiple`     | `boolean` | `false`        | Whether multiple accordion items can be open simultaneously |
| `alwaysOpen`        | `boolean` | `false`        | Whether at least one accordion item must remain open        |
| `defaultOpenItemId` | `string`  | `''`           | The ID of the accordion item that should be open by default |

## Events

| Name     | Payload                         | Description                                    |
| -------- | ------------------------------- | ---------------------------------------------- |
| `toggle` | `{ id: string, open: boolean }` | Emitted when the accordion is opened or closed |

## Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| `default` | Content inside the accordion body |

## Types

```ts
export interface BoAccordionProps {
	id?: string;
	title?: string;
	ariaLabel?: string;
	open?: boolean;
	disabled?: boolean;
	prefixIcon?: Icon;
	customToggleIcon?: Icon;
}

export interface BoAccordionContainerProps {
	id?: string;
	allowMultiple?: boolean;
	alwaysOpen?: boolean;
	defaultOpenItemId?: string;
}

export interface AccordionGroup {
	openItems: Set<string>;
	toggle: (id: string) => void;
	registerItem: (id: string, initialOpen: boolean) => void;
}
```

## States

Document all component states with examples:

### Default (Closed)

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Closed Accordion">
		<p>This accordion starts in a closed state.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Closed Accordion">
	<p>This accordion starts in a closed state.</p>
</bo-accordion>
```

### Open

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Open Accordion" :open="true">
		<p>This accordion starts in an open state.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Open Accordion" :open="true">
	<p>This accordion starts in an open state.</p>
</bo-accordion>
```

### Disabled

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Disabled Accordion" disabled>
		<p>This content cannot be accessed because the accordion is disabled.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Disabled Accordion" disabled>
	<p>This content cannot be accessed because the accordion is disabled.</p>
</bo-accordion>
```

## Content Variations

### Custom Content

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Rich Content Example">
		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Features</h4>
			<ul class="list-disc list-inside space-y-2">
				<li>Accessible with ARIA attributes</li>
				<li>Keyboard navigation support with arrow keys</li>
				<li>Customizable icons and styling</li>
				<li>Container management for coordinated groups</li>
			</ul>
			<div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
				<p class="text-blue-800 dark:text-blue-200">
					💡 <strong>Tip:</strong> Use accordion containers for coordinated groups with keyboard navigation.
				</p>
			</div>
		</div>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Rich Content Example">
	<div class="space-y-4">
		<h4 class="text-lg font-semibold">Features</h4>
		<ul class="list-disc list-inside space-y-2">
			<li>Accessible with ARIA attributes</li>
			<li>Keyboard navigation support</li>
		</ul>
	</div>
</bo-accordion>
```

### With Icons

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="User Settings" :prefix-icon="Icon.user">
		<p>Configure your user preferences and account settings.</p>
	</bo-accordion>
	<bo-accordion title="Expandable Section" :custom-toggle-icon="Icon.plus">
		<p>This accordion uses a plus/minus icon instead of chevrons.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="User Settings" :prefix-icon="Icon.user">
	<p>Configure your user preferences and account settings.</p>
</bo-accordion>
<bo-accordion title="Expandable Section" :custom-toggle-icon="Icon.plus">
	<p>This accordion uses a plus/minus icon instead of chevrons.</p>
</bo-accordion>
```

## Container Usage

### Basic Container

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container>
		<bo-accordion title="What is Bamboo?">
			Bamboo is a UI component library built with Vue 3 and Tailwind CSS.
		</bo-accordion>
		<bo-accordion title="How do I install it?">
			You can install Bamboo using npm or yarn.
		</bo-accordion>
		<bo-accordion title="Is it customizable?">
			Yes, every component is highly customizable using props and slots.
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container>
	<bo-accordion title="What is Bamboo?">
		Bamboo is a UI component library built with Vue 3 and Tailwind CSS.
	</bo-accordion>
	<bo-accordion title="How do I install it?">
		You can install Bamboo using npm or yarn.
	</bo-accordion>
	<bo-accordion title="Is it customizable?">
		Yes, every component is highly customizable using props and slots.
	</bo-accordion>
</bo-accordion-container>
```

### Allow Multiple Open

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Section 1">
			<p>Content for section 1. Multiple sections can be open simultaneously.</p>
		</bo-accordion>
		<bo-accordion title="Section 2">
			<p>Content for section 2. Try opening multiple sections at once.</p>
		</bo-accordion>
		<bo-accordion title="Section 3">
			<p>Content for section 3. All sections can be open together.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container :allow-multiple="true">
	<bo-accordion title="Section 1">Content 1</bo-accordion>
	<bo-accordion title="Section 2">Content 2</bo-accordion>
	<bo-accordion title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

### Always Keep One Open

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container :always-open="true">
		<bo-accordion title="Section 1" :open="true">
			<p>At least one section must always remain open.</p>
		</bo-accordion>
		<bo-accordion title="Section 2">
			<p>Try closing all sections - one will always stay open.</p>
		</bo-accordion>
		<bo-accordion title="Section 3">
			<p>This ensures important content is always visible.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container :always-open="true">
	<bo-accordion title="Section 1" :open="true">Content 1</bo-accordion>
	<bo-accordion title="Section 2">Content 2</bo-accordion>
	<bo-accordion title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

## Event Handling

```vue
<template>
	<bo-accordion-container>
		<bo-accordion
			title="Section 1"
			@toggle="onToggle"
		>
			Content 1
		</bo-accordion>
		<bo-accordion
			title="Section 2"
			@toggle="onToggle"
		>
			Content 2
		</bo-accordion>
	</bo-accordion-container>
</template>

<script setup>
const onToggle = (event) => {
	console.log(`Accordion ${event.id} is now ${event.open ? 'open' : 'closed'}`);
};
</script>
```

## Accessibility

### Features

- Semantic HTML structure with proper roles (`group`, `button`, `region`)
- ARIA attributes for state and relationships
- Keyboard navigation support with arrow keys
- Screen reader compatibility with state announcements
- Focus management with tabindex control

### Keyboard Navigation

| Key           | Action                                                  |
| ------------- | ------------------------------------------------------- |
| Tab/Shift+Tab | Navigate between accordion headers and other elements   |
| Enter/Space   | Toggle the focused accordion section                    |
| Arrow Up/Down | Navigate between accordion headers in container groups  |
| Home/End      | Not applicable (accordion pattern doesn't use Home/End) |

### ARIA Attributes

| Attribute         | Purpose                     | Values                      |
| ----------------- | --------------------------- | --------------------------- |
| `role`            | Semantic role               | `group`, `button`, `region` |
| `aria-expanded`   | Expansion state             | `true`, `false`             |
| `aria-controls`   | References content region   | Element ID                  |
| `aria-labelledby` | Header-content relationship | Element ID                  |
| `aria-disabled`   | Disabled state              | `true`, `false`             |
| `aria-label`      | Custom accessible name      | Custom string               |

### Testing

````markdown
```javascript
test('accessibility attributes', () => {
	render(<BoAccordion title="Test Accordion" />);
	const button = screen.getByRole('button');
	const region = screen.getByRole('region', { hidden: true });

	expect(button).toHaveAttribute('aria-expanded', 'false');
	expect(button).toHaveAttribute('aria-controls', region.id);
	expect(button).toHaveAccessibleName('Test Accordion');
	expect(region).toHaveAttribute('aria-labelledby', button.id);
});
```
````

### Accessibility Props

| Name        | Type     | Default        | Description                               |
| ----------- | -------- | -------------- | ----------------------------------------- |
| `ariaLabel` | `string` | `undefined`    | Custom accessible name for screen readers |
| `title`     | `string` | `''`           | Fallback accessible name and visual title |
| `id`        | `string` | auto-generated | Unique identifier for ARIA relationships  |

### Keyboard Navigation Example

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container>
		<bo-accordion title="Navigate with Tab or Arrow Keys">
			<div class="space-y-2">
				<p><strong>Keyboard Instructions:</strong></p>
				<ul class="list-disc list-inside space-y-1">
					<li>Use <kbd class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">Tab</kbd> to reach this accordion</li>
					<li>Press <kbd class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">Enter</kbd> or <kbd class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">Space</kbd> to toggle</li>
					<li>Use <kbd class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">↑</kbd>/<kbd class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">↓</kbd> arrow keys to navigate between sections</li>
				</ul>
			</div>
		</bo-accordion>
		<bo-accordion title="Focus Management">
			<div class="space-y-2">
				<p>Focus behavior during navigation:</p>
				<ul class="list-disc list-inside space-y-1">
					<li>Focus moves to next/previous accordion header</li>
					<li>Disabled accordions are skipped during navigation</li>
					<li>Focus wraps around at boundaries for continuous navigation</li>
				</ul>
			</div>
		</bo-accordion>
		<bo-accordion title="Screen Reader Support">
			<div class="space-y-2">
				<p>Experience for assistive technologies:</p>
				<ul class="list-disc list-inside space-y-1">
					<li>State changes are announced (expanded/collapsed)</li>
					<li>Relationships between headers and content are clear</li>
					<li>Descriptive labels provide context for each section</li>
				</ul>
			</div>
		</bo-accordion>
	</bo-accordion-container>
</div>
