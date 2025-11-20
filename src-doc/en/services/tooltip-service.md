---
title: Tooltip Service
description: Event-based service for managing tooltip state globally across your application.
outline: deep
---

# Tooltip Service

The `TooltipService` is a singleton service that manages tooltip state using an event-based architecture. It ensures only one tooltip is displayed at a time and provides optimal performance through centralized state management.

## Overview

The tooltip service uses a publish-subscribe pattern to notify components when tooltip state changes. This approach allows for:

- **Single Source of Truth**: One tooltip visible at a time
- **Performance**: Efficient state updates without prop drilling
- **Flexibility**: Works with any trigger element
- **Testability**: Easy to mock and test

## Basic Usage

```ts
import { TooltipService } from '@/services/tooltip-service';

const tooltipService = TooltipService.instance;

// Show a tooltip
tooltipService.show(element, {
	content: 'Helpful information',
	position: 'top',
	delay: 200,
});

// Hide the tooltip
tooltipService.hide();
```

## API Reference

### Methods

#### `show(element: HTMLElement, config: TooltipConfig): void`

Displays a tooltip relative to the specified element.

**Parameters:**

- `element` - The HTML element to position the tooltip relative to
- `config` - Configuration object for the tooltip

**Example:**

```ts
const button = document.querySelector('button');
tooltipService.show(button, {
	content: 'Click to submit',
	position: 'top',
	delay: 300,
});
```

#### `hide(delay?: number): void`

Hides the currently visible tooltip.

**Parameters:**

- `delay` (optional) - Delay in milliseconds before hiding

**Example:**

```ts
// Hide immediately
tooltipService.hide();

// Hide after 200ms
tooltipService.hide(200);
```

#### `subscribe(listener: (state: TooltipState) => void): () => void`

Subscribes to tooltip state changes. Returns an unsubscribe function.

**Parameters:**

- `listener` - Callback function that receives the new state

**Returns:**

- Function to unsubscribe from state changes

**Example:**

```ts
const unsubscribe = tooltipService.subscribe((state) => {
	console.log('Tooltip visible:', state.isVisible);
	console.log('Content:', state.content);
	console.log('Position:', state.position);
});

// Later, clean up
unsubscribe();
```

#### `getState(): TooltipState`

Returns a copy of the current tooltip state.

**Returns:**

- `TooltipState` - Current state object

**Example:**

```ts
const state = tooltipService.getState();
if (state.isVisible) {
	console.log('Tooltip is showing:', state.content);
}
```

## Type Definitions

### TooltipConfig

Configuration object for showing a tooltip.

```ts
interface TooltipConfig {
	/** The tooltip content text */
	content: string;
	/** Position relative to trigger element */
	position?: 'top' | 'bottom' | 'left' | 'right';
	/** Delay in milliseconds before showing */
	delay?: number;
	/** Custom Vue component to render */
	customComponent?: any;
	/** Props to pass to custom component */
	customProps?: Record<string, any>;
}
```

### TooltipState

Current state of the tooltip system.

```ts
interface TooltipState {
	/** Whether the tooltip is currently visible */
	isVisible: boolean;
	/** The tooltip content text */
	content: string;
	/** Calculated position on screen */
	position: TooltipPosition;
	/** Placement relative to trigger */
	placement: 'top' | 'bottom' | 'left' | 'right';
	/** Custom component being rendered */
	customComponent?: any;
	/** Props for custom component */
	customProps?: Record<string, any>;
}
```

### TooltipPosition

Absolute position coordinates for the tooltip.

```ts
interface TooltipPosition {
	/** Top position in pixels */
	top: number;
	/** Left position in pixels */
	left: number;
}
```

## Advanced Usage

### Custom Components

You can render custom Vue components in tooltips:

```ts
import CustomTooltip from './CustomTooltip.vue';

tooltipService.show(element, {
	content: '', // Not used with custom component
	customComponent: CustomTooltip,
	customProps: {
		title: 'Custom Title',
		data: { foo: 'bar' },
	},
});
```

### Position Calculation

The service automatically calculates tooltip position based on:

1. Trigger element's bounding rectangle
2. Desired placement (top, bottom, left, right)
3. Viewport boundaries (prevents overflow)
4. Scroll position

The tooltip will stay within the viewport even if the calculated position would place it outside.

### State Management

The service maintains a single state object that includes:

- Visibility status
- Content or custom component
- Calculated position
- Placement preference

When state changes, all subscribers are notified synchronously.

## Integration with Components

The `BoTooltip` component uses this service internally:

```vue
<template>
	<bo-tooltip content="Helpful text">
		<button>Hover me</button>
	</bo-tooltip>
</template>
```

The component handles:

- Mouse enter/leave events
- Focus/blur events
- Cleanup on unmount
- Service method calls

## Best Practices

1. **Always Unsubscribe**: Clean up subscriptions to prevent memory leaks

```ts
onUnmounted(() => {
	unsubscribe();
});
```

2. **Use Delays Wisely**: Add delays to prevent tooltips from appearing too quickly

```ts
tooltipService.show(element, {
	content: 'Text',
	delay: 200, // Good default
});
```

3. **Handle Edge Cases**: Check if elements exist before showing tooltips

```ts
const element = document.querySelector('.my-element');
if (element) {
	tooltipService.show(element, { content: 'Text' });
}
```

4. **Prefer the Component**: Use `BoTooltip` component instead of the service directly when possible

## Singleton Pattern

The service uses a singleton pattern to ensure only one instance exists:

```ts
const instance1 = TooltipService.instance;
const instance2 = TooltipService.instance;

console.log(instance1 === instance2); // true
```

This guarantees consistent state across your entire application.

## Testing

The service is designed to be easily testable:

```ts
import { TooltipService } from '@/services/tooltip-service';
import { vi } from 'vitest';

describe('MyComponent', () => {
	it('shows tooltip on hover', () => {
		const service = TooltipService.instance;
		const showSpy = vi.spyOn(service, 'show');

		// Trigger hover
		wrapper.trigger('mouseenter');

		expect(showSpy).toHaveBeenCalledWith(expect.anything(), {
			content: 'Expected text',
			position: 'top',
		});
	});
});
```

## Related

- [Tooltip Component](/en/components/tooltip) - Vue component that uses this service
- [Identity Service](/en/services/identity-service) - For generating unique IDs
