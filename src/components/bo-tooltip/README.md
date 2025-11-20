# Tooltip Component

A flexible and accessible tooltip component with event-based implementation supporting basic text and custom content.

## Features

- ✅ Event-based architecture using TooltipService
- ✅ Multiple positioning options (top, bottom, left, right)
- ✅ Configurable delay
- ✅ Custom component support
- ✅ Automatic viewport boundary detection
- ✅ Keyboard accessible (focus/blur)
- ✅ Dark mode support
- ✅ Smooth animations
- ✅ Fully tested

## Basic Usage

```vue
<template>
	<bo-tooltip content="This is a helpful tooltip">
		<button>Hover me</button>
	</bo-tooltip>
</template>

<script setup>
	import { BoTooltip } from '@/components/bo-tooltip';
</script>
```

## Setup

**Important:** Add the tooltip container to your app root for tooltips to render properly:

```vue
<template>
	<div id="app">
		<!-- Your app content -->
		<bo-tooltip-container />
	</div>
</template>
```

If using the Bamboo plugin, `BoTooltipContainer` is globally registered. Otherwise, import it:

```vue
<script setup>
	import { BoTooltipContainer } from '@/components/bo-tooltip';
</script>
```

## Props

| Prop              | Type                                     | Default    | Description                       |
| ----------------- | ---------------------------------------- | ---------- | --------------------------------- |
| `content`         | `string`                                 | -          | The tooltip content text          |
| `position`        | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`    | Position relative to trigger      |
| `delay`           | `number`                                 | `200`      | Delay in ms before showing        |
| `disabled`        | `boolean`                                | `false`    | Whether the tooltip is disabled   |
| `customComponent` | `Component`                              | -          | Custom Vue component to render    |
| `customProps`     | `Record<string, any>`                    | -          | Props to pass to custom component |
| `customCssClass`  | `string`                                 | -          | Custom CSS class                  |
| `id`              | `string`                                 | auto       | Unique identifier                 |
| `dataTestId`      | `string`                                 | auto       | Data test ID                      |
| `role`            | `string`                                 | -          | ARIA role                         |
| `ariaLabel`       | `string`                                 | -          | Accessible label                  |
| `ariaLive`        | `AriaLive`                               | `'polite'` | Live region behavior              |

## Examples

### With Positioning

```vue
<bo-tooltip content="Top tooltip" position="top">
	<button>Top</button>
</bo-tooltip>

<bo-tooltip content="Bottom tooltip" position="bottom">
	<button>Bottom</button>
</bo-tooltip>
```

### With Delay

```vue
<bo-tooltip content="Appears after 500ms" :delay="500">
	<button>Hover with delay</button>
</bo-tooltip>
```

### With Custom Component

```vue
<script setup>
	const CustomTooltip = {
		template: `<div class="custom">{{ title }}</div>`,
		props: ['title'],
	};
</script>

<bo-tooltip :custom-component="CustomTooltip" :custom-props="{ title: 'Custom' }">
	<button>Custom tooltip</button>
</bo-tooltip>
```

## Architecture

The tooltip system consists of three main parts:

1. **BoTooltip** - Wrapper component that handles trigger events
2. **BoTooltipContainer** - Renders the actual tooltip using Teleport
3. **TooltipService** - Manages global tooltip state

### Event Flow

```
User hovers → BoTooltip → TooltipService.show() → State update → BoTooltipContainer renders
```

## Testing

```bash
npm test -- bo-tooltip
```

## Documentation

- [Component Docs](../../../src-doc/en/components/tooltip.md)
- [Service Docs](../../../src-doc/en/services/tooltip-service.md)
