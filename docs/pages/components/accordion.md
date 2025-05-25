<script setup>
import { Icon } from '@/components/icon/bo-icon';
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion

The Accordion component is a collapsible content panel that helps organize and present information in expandable sections. This pattern is especially useful when you want to provide users with the ability to show and hide related content, saving space and reducing visual clutter. For managing multiple accordion items with coordinated behavior, use the `BoAccordionContainer` component.

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

## Props

### BoAccordion Props

| Name               | Type      | Default             | Description                                   |
| ------------------ | --------- | ------------------- | --------------------------------------------- |
| `id`               | `string`  | auto-generated      | Unique ID for the accordion item              |
| `title`            | `string`  | `''`                | Title displayed in the accordion header       |
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

| Name      | Description                                |
| --------- | ------------------------------------------ |
| `default` | The content inside the accordion body slot |

## Types

```ts
interface BoAccordionProps {
	/** Unique ID for the accordion, used for accessibility and testing */
	id?: string;
	/** The title of the accordion item */
	title?: string;
	/** Whether the accordion is open by default */
	open?: boolean;
	/** Whether the accordion is disabled */
	disabled?: boolean;
	/** Prefix icon for the accordion item */
	prefixIcon?: Icon;
	/** Custom icon for the expand/collapse indicator */
	customToggleIcon?: Icon;
}

interface BoAccordionContainerProps {
	/** Unique ID for the accordion container, used for accessibility and testing */
	id?: string;
	/** Whether to allow multiple accordion items to be open at once */
	allowMultiple?: boolean;
	/** Whether to keep at least one accordion item open */
	alwaysOpen?: boolean;
	/** The ID of the accordion item that should be open by default */
	defaultOpenItemId?: string;
}

interface AccordionGroup {
	/** The currently open accordion items */
	openItems: Set<string>;
	/** Toggle an accordion item */
	toggle: (id: string) => void;
	/** Register an accordion item on the accordion group */
	registerItem: (id: string, initialOpen: boolean) => void;
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
			<h4 class="text-lg font-semibold">Advanced Features</h4>
			<ul class="list-disc list-inside space-y-2">
				<li>Fully accessible with ARIA attributes</li>
				<li>Keyboard navigation support</li>
				<li>Customizable icons and styling</li>
				<li>Container management for groups</li>
			</ul>
			<div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
				<p class="text-blue-800 dark:text-blue-200">
					💡 <strong>Tip:</strong> Use accordion containers to create coordinated groups of related content.
				</p>
			</div>
		</div>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Rich Content Example">
	<div class="space-y-4">
		<h4 class="text-lg font-semibold">Advanced Features</h4>
		<ul class="list-disc list-inside space-y-2">
			<li>Fully accessible with ARIA attributes</li>
			<li>Keyboard navigation support</li>
			<li>Customizable icons and styling</li>
			<li>Container management for groups</li>
		</ul>
		<div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
			<p class="text-blue-800 dark:text-blue-200">
				💡 <strong>Tip:</strong> Use accordion containers to create coordinated groups.
			</p>
		</div>
	</div>
</bo-accordion>
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
