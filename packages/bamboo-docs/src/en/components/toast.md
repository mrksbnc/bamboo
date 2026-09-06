---
title: Toast
description: A temporary feedback notification with viewport positioning.
category: feedback
tags:
  - toast
  - notification
  - feedback
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoToast, BoToastViewport, useToast } from '@mrksbnc/bamboo-vue';
import type { ToastPosition } from '@mrksbnc/bamboo-vue';

const open = ref(false);
const { show } = useToast();
const toastPositions: ToastPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];
const basicExample = `<div><bo-button @click="open = true">Show toast</bo-button><bo-toast v-model:open="open" title="Saved" description="Your changes were saved." duration="0" /></div>`;
const viewportExample = `<bo-toast-viewport position="top-right" label="Status notifications" />`;
const composableExample = `<bo-button @click="show({ title: 'Saved', description: 'Your changes were saved.', position: 'top-center' })">Show toast</bo-button>`;

function showAt(position: ToastPosition): void {
  show({
    title: 'Saved',
    description: `This toast was placed at ${position}.`,
    position,
    variant: 'success',
  });
}
</script>

# Toast

`bo-toast` displays a temporary notification. It is open by default, closes automatically after `duration` milliseconds, and can be placed in a teleported `bo-toast-viewport`.

## Controlled Toast

<ExampleFrame :code="basicExample">
  <div><bo-button @click="open = true">Show toast</bo-button><bo-toast v-model:open="open" title="Saved" description="Your changes were saved." duration="0" /></div>
</ExampleFrame>

## Viewport and Variants

`BoToastViewport` accepts six positions: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, and `bottom-right`. Use `duration="0"` to disable automatic closing.

<ExampleFrame :code="viewportExample"><bo-toast-viewport position="top-right" label="Status notifications" /></ExampleFrame>

## Composable Queue

`useToast` queues notifications for a viewport. Set `position` to any of the six supported locations; mount one `bo-toast-viewport` for each location you use. The controls below exercise every position through the composable.

<ExampleFrame :code="composableExample">
  <div class="flex max-w-xl flex-wrap justify-center gap-2">
    <bo-button v-for="position in toastPositions" :key="position" size="sm" variant="outline" @click="showAt(position)">
      {{ position }}
    </bo-button>
  </div>
  <bo-toast-viewport v-for="position in toastPositions" :key="`viewport-${position}`" :position="position" />
</ExampleFrame>

## API Reference

| Component / prop        | Type                                                                | Default              | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------- |
| `BoToast`               | component                                                           | -                    | Notification item.                                                  |
| `open`                  | `boolean`                                                           | `true`               | Visibility used by `v-model:open`.                                  |
| `title` / `description` | `string`                                                            | -                    | Default notification content.                                       |
| `variant`               | `'default' \| 'primary' \| 'success' \| 'warning' \| 'destructive'` | `default`            | Visual variant and status icon.                                     |
| `duration`              | `number`                                                            | `5000`               | Auto-close delay in milliseconds; `0` disables it.                  |
| `closable`              | `boolean`                                                           | `true`               | Shows the close button.                                             |
| `closeAriaLabel`        | `string`                                                            | `Close notification` | Close button label.                                                 |
| `role`                  | `HTMLAttributes['role']`                                            | `status`             | Notification role.                                                  |
| `BoToastViewport`       | component                                                           | -                    | Teleported live region that renders queued toasts for its position. |
| `position`              | `BoToastPosition`                                                   | `bottom-right`       | Viewport position.                                                  |
| `label`                 | `string`                                                            | `Notifications`      | Viewport accessible label.                                          |
| `useToast().show`       | `ToastOptions`                                                      | -                    | Adds a toast to the global queue.                                   |
| `ToastOptions.position` | `BoToastPosition`                                                   | -                    | Selects the viewport location.                                      |

The toast default slot replaces generated title and description content. `BoToast` emits `update:open` and `close`.
