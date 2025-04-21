# Components

Bamboo provides a collection of UI components to help you build beautiful and functional applications.

## Available Components

### Core Components

- [Avatar](/pages/components/avatar) - Display user profile images with fallback options
- [Badge](/pages/components/badge) - Show status indicators or counters
- [Button](/pages/components/button) - Trigger actions with a single click
- [Card](/pages/components/card) - Contain content in a styled container
- [Divider](/pages/components/divider) - Separate content sections
- [Dropdown](/pages/components/dropdown) - Display menus and selection options
- [Icon](/pages/components/icon) - Display vector icons from our icon library
- [Input](/pages/components/input) - Collect user input with support for pills
- [Table](/pages/components/table) - Display tabular data

## Input Component

The [Input](/pages/components/input) component has been enhanced with pill functionality, allowing it to work as a multi-value input field.

### Key Features

- Display pills (tags/tokens) within the input field
- Support for horizontal scrolling when many pills are present
- Remove pills by clicking the close icon
- Support for icons within pills
- Password visibility toggle
- Various sizing and state options

```vue
<template>
	<bo-input
		placeholder="Add more tags..."
		:pills="pills"
		:horizontal-scroll="true"
		@pill-remove="removePill"
	/>
</template>

<script setup>
import { BoInput } from '@mrksbnc/bamboo';
import { ref } from 'vue';

const pills = ref([
	{ id: '1', text: 'JavaScript' },
	{ id: '2', text: 'Vue', icon: 'code' },
	{ id: '3', text: 'TailwindCSS', icon: 'wind' },
]);

const removePill = (id) => {
	pills.value = pills.value.filter((pill) => pill.id !== id);
};
</script>
```

Visit the [Input component documentation](/pages/components/input) for full details and examples.
