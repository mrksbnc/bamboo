<script setup>
import { Icon } from '@/components/icon/bo-icon';
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion

The Accordion component is a collapsible content panel that helps organize and present information in expandable sections. This pattern is useful when you want to provide users with the ability to show and hide related content, saving space and reducing visual clutter. The component includes dark mode support and accessibility features. For managing multiple accordion items with coordinated behavior, use the `BoAccordionContainer` component.

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
		<template #default>
			<div class="flex flex-col gap-2">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
				<p>The answers to all your questions can be found here.</p>
			</div>
		</template>
	</bo-accordion>
</div>

## Accessibility Features

The Accordion component implements accessibility standards:

### ARIA Implementation

- Semantic structure with proper `role` attributes (`group`, `button`, `region`)
- ARIA attributes including `aria-expanded`, `aria-disabled`, `aria-controls`, `aria-labelledby`
- Accessible naming through `aria-label` or automatic fallback to title
- Screen reader support with descriptive labels and state announcements

### Testing Support

- Test IDs for automated accessibility testing
- Accessible name computation for screen reader verification
- State tracking for dynamic content testing
- Group behavior validation for complex interactions

```vue
<template>
	<!-- Accessibility attributes are automatically applied -->
	<bo-accordion
		title="Accessible Accordion"
		aria-label="Custom accessible label"
	>
		<p>This content is fully accessible to screen readers.</p>
	</bo-accordion>
</template>
```

## Keyboard Navigation

The Accordion component supports keyboard navigation when used within an `BoAccordionContainer`:

### Navigation Keys

- **Tab/Shift+Tab**: Navigate between accordion headers and other focusable elements
- **Enter/Space**: Toggle the focused accordion section
- **Arrow Up/Down**: Navigate between accordion headers within a container group
- **Boundary wrapping**: Arrow navigation wraps from last to first item and vice versa

### Keyboard Accessibility Example

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
				<p>Focus is managed during navigation:</p>
				<ul class="list-disc list-inside space-y-1">
					<li>Focus moves to the next/previous accordion header</li>
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

```vue
<template>
	<bo-accordion-container>
		<bo-accordion
			title="Section 1"
			aria-label="First navigation section"
		>
			<p>Use arrow keys to navigate between sections.</p>
		</bo-accordion>
		<bo-accordion
			title="Section 2"
			aria-label="Second navigation section"
		>
			<p>Focus management ensures smooth navigation experience.</p>
		</bo-accordion>
		<bo-accordion
			title="Section 3"
			aria-label="Third navigation section"
		>
			<p>Screen readers announce state changes clearly.</p>
		</bo-accordion>
	</bo-accordion-container>
</template>
```

### Focus Management Features

- Automatic tabindex management: Only the currently focused accordion header is tabbable
- Visual focus indicators: Clear outline for keyboard users
- Focus restoration: Focus returns to appropriate element after interactions
- Disabled state handling: Disabled accordions are excluded from navigation

## Props

### BoAccordion Props

| Name               | Type               | Default             | Description                                   |
| ------------------ | ------------------ | ------------------- | --------------------------------------------- |
| `id`               | `string`           | auto-generated      | Unique ID for the accordion item              |
| `title`            | `string`           | `''`                | Title displayed in the accordion header       |
| `ariaLabel`        | `string`           | `undefined`         | Custom ARIA label for accessibility           |
| `open`             | `boolean`          | `false`             | Whether the accordion is open by default      |
| `disabled`         | `boolean`          | `false`             | Disables the accordion                        |
| `prefixIcon`       | `Icon`             | `Icon.none`         | Icon to display before the title              |
| `customToggleIcon` | `Icon`             | `Icon.chevron_down` | Custom icon for the expand/collapse indicator |
| `shape`            | `BoAccordionShape` | `rounded`           | Visual shape variant of the accordion         |

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

| Name      | Description                                |
| --------- | ------------------------------------------ |
| `default` | The content inside the accordion body slot |

## Types

```ts
interface BoAccordionProps {
	/**
	 * Unique ID for the accordion, used for accessibility and testing
	 */
	id?: string;
	/**
	 * The title of the accordion item
	 */
	title?: string;
	/**
	 * Custom ARIA label for enhanced accessibility
	 */
	ariaLabel?: string;
	/**
	 * Whether the accordion is open by default
	 */
	open?: boolean;
	/**
	 * Whether the accordion is disabled
	 */
	disabled?: boolean;
	/**
	 * Prefix icon for the accordion item
	 */
	prefixIcon?: Icon;
	/**
	 * Custom icon for the expand/collapse indicator
	 */
	customToggleIcon?: Icon;
	/**
	 * Visual shape variant of the accordion
	 */
	shape?: BoAccordionShape;
}

interface BoAccordionContainerProps {
	/**
	 * Unique ID for the accordion container, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Whether to allow multiple accordion items to be open at once
	 */
	allowMultiple?: boolean;
	/**
	 * Whether to keep at least one accordion item open
	 */
	alwaysOpen?: boolean;
	/**
	 * The ID of the accordion item that should be open by default
	 */
	defaultOpenItemId?: string;
}

interface AccordionGroup {
	/**
	 * The currently open accordion items
	 */
	openItems: Set<string>;
	/**
	 * Toggle an accordion item
	 */
	toggle: (id: string) => void;
	/**
	 * Register an accordion item on the accordion group
	 */
	registerItem: (id: string, initialOpen: boolean) => void;
}

enum BoAccordionShape {
	rounded = 'rounded',
	square = 'square',
}
```

## States

### Open by Default

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Open by Default" :open="true">
		<p>This accordion starts in an open state.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Open by Default" :open="true">
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

## With Icons

### Prefix Icons

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="User Settings" :prefix-icon="Icon.user">
		<p>Configure your user preferences and account settings.</p>
	</bo-accordion>
	<bo-accordion title="Security" :prefix-icon="Icon.shield">
		<p>Manage your security settings and privacy options.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="User Settings" :prefix-icon="Icon.user">
	<p>Configure your user preferences and account settings.</p>
</bo-accordion>
<bo-accordion title="Security" :prefix-icon="Icon.shield">
	<p>Manage your security settings and privacy options.</p>
</bo-accordion>
```

### Custom Toggle Icons

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Expandable Section" :custom-toggle-icon="Icon.plus">
		<p>This accordion uses a plus/minus icon instead of chevrons.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Expandable Section" :custom-toggle-icon="Icon.plus">
	<p>This accordion uses a plus/minus icon instead of chevrons.</p>
</bo-accordion>
```

## Accordion Container

Use `BoAccordionContainer` to manage multiple accordion items with coordinated behavior.

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
<template>
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
</template>

<script setup>
import { BoAccordionContainer, BoAccordion } from '@mrksbnc/bamboo';
</script>
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

### Default Open Item

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container default-open-item-id="section-2">
		<bo-accordion id="section-1" title="Section 1">
			<p>This section starts closed.</p>
		</bo-accordion>
		<bo-accordion id="section-2" title="Section 2">
			<p>This section starts open by default.</p>
		</bo-accordion>
		<bo-accordion id="section-3" title="Section 3">
			<p>This section also starts closed.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container default-open-item-id="section-2">
	<bo-accordion id="section-1" title="Section 1">Content 1</bo-accordion>
	<bo-accordion id="section-2" title="Section 2">Content 2</bo-accordion>
	<bo-accordion id="section-3" title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

## Custom Content

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Rich Content Example">
		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Features</h4>
			<ul class="list-disc list-inside space-y-2">
				<li>Accessible with ARIA attributes</li>
				<li>Keyboard navigation support with arrow keys</li>
				<li>Customizable icons and styling</li>
				<li>Container management for coordinated groups</li>
				<li>Screen reader support</li>
				<li>Accessibility testing support</li>
			</ul>
			<div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
				<p class="text-blue-800 dark:text-blue-200">
					💡 <strong>Tip:</strong> Use `aria-label` props for better screen reader context, and wrap multiple accordions in an `BoAccordionContainer` for keyboard navigation.
				</p>
			</div>
			<div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
				<p class="text-green-800 dark:text-green-200">
					✅ <strong>Testing:</strong> All accordions include test IDs and accessibility attributes for automated testing with tools like axe-core or Playwright.
				</p>
			</div>
		</div>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Rich Content Example" aria-label="Demonstration of accordion features">
	<div class="space-y-4">
		<h4 class="text-lg font-semibold">Features</h4>
		<ul class="list-disc list-inside space-y-2">
			<li>Accessible with ARIA attributes</li>
			<li>Keyboard navigation support with arrow keys</li>
			<li>Screen reader support</li>
			<li>Accessibility testing support</li>
		</ul>
		<div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
			<p class="text-blue-800 dark:text-blue-200">
				💡 <strong>Tip:</strong> Use accordion containers for coordinated groups with keyboard navigation.
			</p>
		</div>
	</div>
</bo-accordion>
```

## Dark Mode

The accordion component automatically adapts to dark mode with optimized colors and contrast.

<div class="flex flex-col gap-4 my-4 dark p-6 bg-gray-900 rounded-lg">
	<div class="text-gray-300 text-sm mb-2">Dark Mode Examples:</div>
	
<bo-accordion title="Dark Mode Accordion">
	<div class="space-y-3">
		<p>This accordion automatically adapts to dark mode with proper contrast and colors.
		</p>
		<p>The header background becomes darker while maintaining good readability for the title text.
		</p>
	</div>
	</bo-accordion>
	<bo-accordion title="With Prefix Icon" :prefix-icon="Icon.star" :open="true">
		<div class="space-y-3">
			<p>Icons and text maintain proper contrast in dark mode.</p>
			<p>The content area uses a darker background while keeping text readable.</p>
		</div>
	</bo-accordion>
	<bo-accordion title="Custom Toggle Icon" :custom-toggle-icon="Icon.plus">
		<p>All interactive elements work in dark mode with hover states adapted for the darker theme.</p>
	</bo-accordion>
    <bo-accordion-container :allow-multiple="true">
    	<bo-accordion title="Container Group - Item 1" :open="true">
    		<p>Accordion containers maintain visual consistency in dark mode.</p>
    	</bo-accordion>
    	<bo-accordion title="Container Group - Item 2">
    		<p>Border colors and spacing are optimized for dark backgrounds.</p>
    	</bo-accordion>
    </bo-accordion-container>
</div>

```vue
<div class="dark">
	<bo-accordion title="Dark Mode Accordion">
		<p>Content automatically adapts to dark mode styling.</p>
	</bo-accordion>
	
	<bo-accordion title="With Prefix Icon" :prefix-icon="Icon.star">
		<p>Icons and text maintain proper contrast in dark mode.</p>
	</bo-accordion>
	
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Container Item 1">
			<p>Container groups work in dark mode.</p>
		</bo-accordion>
		<bo-accordion title="Container Item 2">
			<p>Consistent styling across all variants.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>
```

### Dark Mode Features

- **Automatic theming**: Headers use neutral-50/neutral-800 backgrounds
- **Color adaptation**: Text colors adapt from neutral-700 to neutral-200
- **Content areas**: Body backgrounds transition from white to neutral-900
- **Interactive states**: Hover effects use neutral-100/neutral-700
- **Border adaptation**: Borders change from neutral-200 to neutral-700
- **Icon visibility**: All icons maintain proper contrast ratios

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
