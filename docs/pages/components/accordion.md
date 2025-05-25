<script setup>
import { Icon } from '@/components/icon/bo-icon';
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion

The Accordion component is a collapsible content panel that helps organize and present information in expandable sections. This pattern is especially useful when you want to provide users with the ability to show and hide related content, saving space and reducing visual clutter. To use multiple accordion components, use the `BoAccordionContainer` component.

```js
import { BoAccordion } from '@mrksbnc/bamboo';
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

| Name               | Type      | Default             | Description                                   |
| ------------------ | --------- | ------------------- | --------------------------------------------- |
| `id`               | `string`  | auto-generated      | Unique ID for the accordion item              |
| `title`            | `string`  | `''`                | Title displayed in the accordion header       |
| `open`             | `boolean` | `false`             | Whether the accordion is open by default      |
| `disabled`         | `boolean` | `false`             | Disables the accordion                        |
| `prefixIcon`       | `Icon`    | `Icon.none`         | Icon to display before the title              |
| `customToggleIcon` | `Icon`    | `Icon.chevron_down` | Custom icon for the expand/collapse indicator |

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
```
