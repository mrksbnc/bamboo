# Toast

The `bo-toast` component is a notification system that provides feedback to users about their actions or system status. It supports different types of notifications, customizable durations, and various positions on the screen.

## Features

- Multiple types (success, error, warning, info)
- Customizable duration
- Closable option
- Different positions (top-left, top-right, bottom-left, bottom-right)
- Multiple sizes
- Minimal variant
- Auto-dismissal
- Service-based API for easy usage

## Basic Usage

```vue
<template>
	<bo-toast
		message="Operation completed successfully"
		type="success"
		duration="3000"
		closable
		position="top-right"
	/>
</template>

<script setup lang="ts">
import { BoToast } from '@/components/bo-toast';
</script>
```

## Service Usage

```vue
<template>
	<div>
		<bo-button @click="showSuccess">Show Success</bo-button>
		<bo-button @click="showError">Show Error</bo-button>
	</div>
</template>

<script setup lang="ts">
import { toast } from '@/components/bo-toast';

const showSuccess = () => {
	toast.success('Operation completed successfully');
};

const showError = () => {
	toast.error('An error occurred');
};
</script>
```

## Props

| Prop     | Type                                                         | Default                | Description                                                              |
| -------- | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------ |
| message  | string                                                       | -                      | The message to display in the toast                                      |
| type     | 'success' \| 'error' \| 'warning' \| 'info'                  | 'info'                 | The type of toast                                                        |
| duration | number                                                       | 3000                   | Duration in milliseconds before auto-dismissal (0 for no auto-dismissal) |
| closable | boolean                                                      | true                   | Whether to show the close button                                         |
| position | 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' | 'top-right'            | Position of the toast on the screen                                      |
| size     | BoSize                                                       | BoSize.medium          | Size of the toast                                                        |
| variant  | BoToastVariant                                               | BoToastVariant.default | Variant of the toast                                                     |
| id       | string                                                       | -                      | Unique identifier for the toast                                          |

## Events

| Event | Parameters | Description                      |
| ----- | ---------- | -------------------------------- |
| close | -          | Emitted when the toast is closed |

## Variants

### Default

The default variant includes an icon and a close button.

```vue
<bo-toast message="Default toast" type="info" />
```

### Minimal

The minimal variant removes the icon and uses a simpler design.

```vue
<bo-toast message="Minimal toast" variant="minimal" type="info" />
```

## Examples

### Different Types

```vue
<template>
	<div>
		<bo-toast
			message="Success message"
			type="success"
		/>
		<bo-toast
			message="Error message"
			type="error"
		/>
		<bo-toast
			message="Warning message"
			type="warning"
		/>
		<bo-toast
			message="Info message"
			type="info"
		/>
	</div>
</template>
```

### Different Positions

```vue
<template>
	<div>
		<bo-toast
			message="Top left"
			position="top-left"
		/>
		<bo-toast
			message="Top right"
			position="top-right"
		/>
		<bo-toast
			message="Bottom left"
			position="bottom-left"
		/>
		<bo-toast
			message="Bottom right"
			position="bottom-right"
		/>
	</div>
</template>
```

### Different Sizes

```vue
<template>
	<div>
		<bo-toast
			message="Small toast"
			size="small"
		/>
		<bo-toast
			message="Medium toast"
			size="medium"
		/>
		<bo-toast
			message="Large toast"
			size="large"
		/>
	</div>
</template>
```

## Best Practices

1. Use appropriate toast types:

   - Success: For successful operations
   - Error: For errors and failures
   - Warning: For warnings and important notices
   - Info: For general information

2. Keep messages concise and clear.

3. Use appropriate duration:

   - Short duration (2000-3000ms) for simple notifications
   - Longer duration (5000ms+) for important information
   - No auto-dismissal (duration: 0) for critical information

4. Consider using the service API for programmatic toast creation.

5. Use the minimal variant for less intrusive notifications.

## Accessibility

- The toast component is accessible by default.
- Screen readers will announce the toast message.
- Keyboard navigation is supported.
- ARIA attributes are automatically applied.

## Browser Support

The toast component is supported in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
