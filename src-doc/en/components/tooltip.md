---
title: Tooltip
description: A flexible tooltip component with event-based implementation supporting basic text and custom content.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import BoTooltip from '@/components/bo-tooltip/bo-tooltip.vue';
import BoButton from '@/components/bo-button/bo-button.vue';
import BoText from '@/components/bo-text/bo-text.vue';
import { BoFontSize, BoTextVariant } from '@/components/bo-text/bo-text';

const customTooltipContent = {
  template: `
    <div style="padding: 0.5rem;">
      <div style="font-weight: 600; margin-bottom: 0.25rem;">Custom Tooltip</div>
      <div style="font-size: 0.75rem; opacity: 0.9;">This is a custom component</div>
    </div>
  `
};
</script>

# Tooltip

A flexible and accessible tooltip component that displays helpful information when users hover over or focus on an element. Built with an event-based service architecture for optimal performance and flexibility.

## Basic Usage

Wrap any element with the tooltip component and provide content via the `content` prop.

```vue
<bo-tooltip content="This is a helpful tooltip">
	<button>Hover me</button>
</bo-tooltip>
```

<div style="margin-top: 1rem; padding: 2rem; display: flex; justify-content: center;">
  <bo-tooltip content="This is a helpful tooltip">
    <bo-button>Hover me</bo-button>
  </bo-tooltip>
</div>

## Positioning

Control where the tooltip appears relative to the trigger element using the `position` prop.

```vue
<bo-tooltip content="Top tooltip" position="top">
	<button>Top</button>
</bo-tooltip>

<bo-tooltip content="Bottom tooltip" position="bottom">
	<button>Bottom</button>
</bo-tooltip>

<bo-tooltip content="Left tooltip" position="left">
	<button>Left</button>
</bo-tooltip>

<bo-tooltip content="Right tooltip" position="right">
	<button>Right</button>
</bo-tooltip>
```

<div style="margin-top: 1rem; padding: 3rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
  <bo-tooltip content="Top tooltip" position="top">
    <bo-button>Top</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Bottom tooltip" position="bottom">
    <bo-button>Bottom</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Left tooltip" position="left">
    <bo-button>Left</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Right tooltip" position="right">
    <bo-button>Right</bo-button>
  </bo-tooltip>
</div>

## Delay

Add a delay before the tooltip appears using the `delay` prop (in milliseconds).

```vue
<bo-tooltip content="Appears after 500ms" :delay="500">
	<button>Hover with delay</button>
</bo-tooltip>
```

<div style="margin-top: 1rem; padding: 2rem; display: flex; justify-content: center;">
  <bo-tooltip content="Appears after 500ms" :delay="500">
    <bo-button>Hover with delay</bo-button>
  </bo-tooltip>
</div>

## Custom Content

For more complex tooltips, pass a custom Vue component using the `customComponent` prop.

```vue
<script setup>
	const customTooltipContent = {
		template: `
    <div style="padding: 0.5rem;">
      <div style="font-weight: 600; margin-bottom: 0.25rem;">Custom Tooltip</div>
      <div style="font-size: 0.75rem; opacity: 0.9;">This is a custom component</div>
    </div>
  `,
	};
</script>

<bo-tooltip :custom-component="customTooltipContent">
	<button>Custom tooltip</button>
</bo-tooltip>
```

<div style="margin-top: 1rem; padding: 2rem; display: flex; justify-content: center;">
  <bo-tooltip :custom-component="customTooltipContent">
    <bo-button>Custom tooltip</bo-button>
  </bo-tooltip>
</div>

## Disabled State

Disable the tooltip using the `disabled` prop.

```vue
<bo-tooltip content="This won't show" :disabled="true">
	<button>Disabled tooltip</button>
</bo-tooltip>
```

<div style="margin-top: 1rem; padding: 2rem; display: flex; justify-content: center;">
  <bo-tooltip content="This won't show" :disabled="true">
    <bo-button>Disabled tooltip</bo-button>
  </bo-tooltip>
</div>

## With Text Elements

Tooltips work with any element, including text.

```vue
<bo-tooltip content="Additional information about this text">
	<bo-text value="Hover over this text" />
</bo-tooltip>
```

<div style="margin-top: 1rem; padding: 2rem; display: flex; justify-content: center;">
  <bo-tooltip content="Additional information about this text">
    <bo-text value="Hover over this text" />
  </bo-tooltip>
</div>

## API Reference

### Props

| Name              | Type                                     | Default        | Description                                  |
| ----------------- | ---------------------------------------- | -------------- | -------------------------------------------- |
| `id`              | `string`                                 | auto-generated | Unique identifier for the tooltip element    |
| `dataTestId`      | `string`                                 | `'bo-tooltip'` | Data test ID for testing                     |
| `content`         | `string`                                 | -              | The tooltip content text                     |
| `position`        | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`        | Position of the tooltip relative to trigger  |
| `delay`           | `number`                                 | `200`          | Delay in milliseconds before showing tooltip |
| `disabled`        | `boolean`                                | `false`        | Whether the tooltip is disabled              |
| `customComponent` | `Component`                              | -              | Custom Vue component to render in tooltip    |
| `customProps`     | `Record<string, any>`                    | -              | Props to pass to custom component            |
| `customCssClass`  | `string`                                 | -              | Custom CSS class for styling                 |
| `role`            | `string`                                 | -              | ARIA role attribute                          |
| `ariaLabel`       | `string`                                 | -              | Accessible label for screen readers          |
| `ariaLive`        | `AriaLive`                               | `'polite'`     | Live region behavior                         |

## Tooltip Service

The tooltip system is powered by an event-based service that manages tooltip state globally. This ensures only one tooltip is shown at a time and provides optimal performance.

### Using the Service Directly

You can also use the `TooltipService` directly in your code:

```ts
import { TooltipService } from '@/services/tooltip-service';

const tooltipService = TooltipService.instance;

// Show a tooltip
tooltipService.show(element, {
	content: 'Tooltip text',
	position: 'top',
	delay: 200,
});

// Hide the tooltip
tooltipService.hide();

// Subscribe to tooltip state changes
const unsubscribe = tooltipService.subscribe((state) => {
	console.log('Tooltip state:', state);
});

// Clean up
unsubscribe();
```

### Service API

#### Methods

- `show(element: HTMLElement, config: TooltipConfig): void` - Show a tooltip
- `hide(delay?: number): void` - Hide the current tooltip
- `subscribe(listener: (state: TooltipState) => void): () => void` - Subscribe to state changes
- `getState(): TooltipState` - Get the current tooltip state

#### TooltipConfig Interface

```ts
interface TooltipConfig {
	content: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	delay?: number;
	customComponent?: any;
	customProps?: Record<string, any>;
}
```

#### TooltipState Interface

```ts
interface TooltipState {
	isVisible: boolean;
	content: string;
	position: TooltipPosition;
	placement: 'top' | 'bottom' | 'left' | 'right';
	customComponent?: any;
	customProps?: Record<string, any>;
}
```

## Styling Features

The tooltip includes several visual enhancements:

- **Smooth Animations**: Fade and slide transitions when appearing/disappearing
- **Arrow Indicator**: Visual arrow pointing to the trigger element
- **Auto-positioning**: Automatically adjusts to stay within viewport
- **Dark Mode**: Automatic adaptation to dark theme
- **Max Width**: Prevents tooltips from becoming too wide
- **Word Wrap**: Long text wraps naturally

## Accessibility

The tooltip component includes comprehensive accessibility features:

- **Keyboard Support**: Shows on focus, hides on blur
- **ARIA Attributes**: `role="tooltip"`, `aria-live="polite"`
- **Screen Reader Support**: Proper labeling and announcements
- **Focus Management**: Works with keyboard navigation
- **Non-blocking**: Tooltips don't interfere with page interaction

```vue
<bo-tooltip content="Accessible tooltip" aria-label="Help information">
	<button>Accessible button</button>
</bo-tooltip>
```

## Dark Mode

The tooltip automatically adapts to dark mode with appropriate colors:

- Background: `neutral-900` (light mode) / `neutral-700` (dark mode)
- Text: `neutral-50`
- Shadow: Adjusted for better visibility

## Best Practices

1. **Keep it Short**: Tooltips should be concise and helpful
2. **Don't Repeat**: Avoid repeating visible text in tooltips
3. **Use for Context**: Provide additional context, not essential information
4. **Consider Mobile**: Tooltips may not work well on touch devices
5. **Test Positioning**: Ensure tooltips don't overflow viewport edges

## Related Components

- [Button](/en/components/button) - Action buttons that work well with tooltips
- [Icon](/en/components/icon) - Icons often benefit from tooltips
- [Text](/en/components/text) - Text component for tooltip content

## Setup

The tooltip system is automatically configured when you install the Bamboo plugin. However, you need to add the `BoTooltipContainer` component to your app root to render tooltips:

```vue
<template>
	<div id="app">
		<!-- Your app content -->
		<bo-tooltip-container />
	</div>
</template>
```

The `BoTooltipContainer` is globally registered when using the Bamboo plugin, so no import is needed. This container component listens to the tooltip service and renders tooltips as needed.

Alternatively, if you're not using the plugin, you can import it directly:

```vue
<script setup>
	import { BoTooltipContainer } from '@mrksbnc/bamboo';
</script>
```
