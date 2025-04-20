<script setup>
import { BoToast, BoToastType, BoToastPosition } from '@/components/bo-toast';
import { ref } from 'vue';

const showToast = ref(false);

function openToast() {
  showToast.value = true;
}
</script>

# Toast

The `BoToast` component provides a way to show non-disruptive notifications to users. It's ideal for displaying success messages, errors, warnings, or general information.

## Usage

### Basic Usage

```vue
<template>
	<button @click="showToast = true">Show Toast</button>

	<bo-toast
		v-if="showToast"
		title="Connected"
		message="You're online now. Internet is connected."
		@close="showToast = false"
	/>
</template>

<script setup>
import { ref } from 'vue';

const showToast = ref(false);
</script>
```

<div class="mb-4">
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="openToast">Show Toast</button>
  
  <bo-toast
    v-if="showToast"
    title="Connected"
    message="You're online now. Internet is connected."
    @close="showToast = false"
  />
</div>

## Props

| Prop        | Type              | Default   | Description                                           |
| ----------- | ----------------- | --------- | ----------------------------------------------------- |
| `title`     | `string`          | -         | The title/header of the toast notification            |
| `message`   | `string`          | -         | The main message content of the toast                 |
| `type`      | `BoToastType`     | `success` | Type of toast (`success`, `error`, `warning`, `info`) |
| `duration`  | `number`          | `3000`    | Duration in milliseconds before auto-closing          |
| `visible`   | `boolean`         | -         | Controls the visibility of the toast                  |
| `autoClose` | `boolean`         | `true`    | Whether the toast should automatically close          |
| `position`  | `BoToastPosition` | `topLeft` | Position of the toast on screen                       |

## Events

| Event   | Description                      |
| ------- | -------------------------------- |
| `close` | Emitted when the toast is closed |

## Toast Types

The Toast component supports different types to communicate various message categories:

```vue
<template>
	<bo-toast
		title="Success"
		message="Operation completed successfully"
		type="success"
	/>

	<bo-toast
		title="Error"
		message="An error occurred during the operation"
		type="error"
	/>

	<bo-toast
		title="Warning"
		message="Please review your input before continuing"
		type="warning"
	/>

	<bo-toast
		title="Information"
		message="Your session will expire in 5 minutes"
		type="info"
	/>
</template>
```

Each type has its own color scheme and icon:

- `success`: Green with a check icon
- `error`: Gray/Red with a disconnected wifi icon
- `warning`: Yellow with a warning triangle icon
- `info`: Blue with an info icon

## Auto-Close Behavior

By default, toasts automatically close after 3 seconds (3000ms). You can customize this duration or disable auto-closing altogether:

```vue
<template>
	<!-- Custom duration of 5 seconds -->
	<bo-toast
		title="Long Toast"
		message="This toast will stay visible for 5 seconds"
		:duration="5000"
	/>

	<!-- Disable auto-close -->
	<bo-toast
		title="Persistent Toast"
		message="This toast will stay visible until manually closed"
		:auto-close="false"
	/>
</template>
```

## Internet Connection Status Example

The Toast component is ideal for notifying users about their internet connection status. Here's how you might use it:

```vue
<template>
	<bo-toast
		v-if="isOnline"
		title="You're online now"
		message="Hurray! Internet is connected."
		type="success"
	/>

	<bo-toast
		v-else
		title="You're offline now"
		message="Oops! Internet is disconnected."
		type="error"
	/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOnline = ref(navigator.onLine);

function updateOnlineStatus() {
	isOnline.value = navigator.onLine;
}

onMounted(() => {
	window.addEventListener('online', updateOnlineStatus);
	window.addEventListener('offline', updateOnlineStatus);
});

onUnmounted(() => {
	window.removeEventListener('online', updateOnlineStatus);
	window.removeEventListener('offline', updateOnlineStatus);
});
</script>
```

## Toast Positioning

The component supports various positions on screen:

```vue
<template>
	<bo-toast
		title="Top Left Toast"
		message="This toast appears in the top left corner"
		position="topLeft"
	/>

	<bo-toast
		title="Top Right Toast"
		message="This toast appears in the top right corner"
		position="topRight"
	/>

	<bo-toast
		title="Bottom Left Toast"
		message="This toast appears in the bottom left corner"
		position="bottomLeft"
	/>

	<bo-toast
		title="Bottom Right Toast"
		message="This toast appears in the bottom right corner"
		position="bottomRight"
	/>
</template>
```

## Animation

The Toast component includes smooth slide-in and slide-out animations for a polished user experience. These animations provide visual feedback when notifications appear and disappear.

## Accessibility Considerations

The Toast component:

- Uses `role="alert"` to announce its content to screen readers
- Maintains sufficient color contrast for all states
- Provides a clear close button with appropriate labeling
- Allows keyboard navigation

For non-critical notifications, consider using longer display durations to ensure users have enough time to read the content, especially for those who read more slowly.
