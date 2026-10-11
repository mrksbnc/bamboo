---
title: Toast
description: Show brief feedback after an action.
category: feedback
tags:
  - toast
  - notification
  - feedback
  - viewport
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoToast, BoToastViewport, useToast } from '@mrksbnc/bamboo-vue';

const open = ref(false);
const defaultToastOpen = ref(true);
const primaryToastOpen = ref(true);
const successToastOpen = ref(true);
const warningToastOpen = ref(true);
const destructiveToastOpen = ref(true);
const closeMessage = ref('The toast is open.');
const lastToastId = ref('');

const { show, dismiss, clear } = useToast();

function showBasicToast(): void {
  show({
    title: 'Saved',
    description: 'Your changes were saved.',
    duration: 0,
  });
}

function showAt(position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'): void {
  show({
    title: 'Positioned toast',
    description: `This toast is shown at ${position}.`,
    position,
    duration: 1800,
  });
}

function addManagedToast(): void {
  lastToastId.value = show({
    title: 'Queued notification',
    description: 'This id can be dismissed from the caller.',
    duration: 0,
  });
}

function dismissManagedToast(): void {
  if (lastToastId.value) dismiss(lastToastId.value);
}

const basicExample = `<bo-button @click="showBasicToast">Show toast</bo-button>
<bo-toast-viewport position="top-right" />`;

const variantsExample = `<bo-toast v-model:open="defaultToastOpen" title="Default" :duration="0" />
<bo-toast v-model:open="primaryToastOpen" variant="primary" title="Primary" :duration="0" />
<bo-toast v-model:open="successToastOpen" variant="success" title="Success" :duration="0" />
<bo-toast v-model:open="warningToastOpen" variant="warning" title="Warning" :duration="0" />
<bo-toast v-model:open="destructiveToastOpen" variant="destructive" title="Destructive" :duration="0" />`;

const positionsExample = `<bo-button @click="showAt('top-left')">Top left</bo-button>
<bo-button @click="showAt('top-center')">Top center</bo-button>
<bo-button @click="showAt('top-right')">Top right</bo-button>
<bo-button @click="showAt('bottom-left')">Bottom left</bo-button>
<bo-button @click="showAt('bottom-center')">Bottom center</bo-button>
<bo-button @click="showAt('bottom-right')">Bottom right</bo-button>

<bo-toast-viewport position="top-left" />
<!-- Mount one viewport for each position your app uses. -->`;

const closeExample = `<bo-toast
  v-model:open="open"
  title="Dismissible toast"
  description="Close it with the button or programmatically."
  :duration="0"
  @close="closeMessage = 'Toast closed'"
/>`;

const stackingExample = `<bo-button @click="addManagedToast">Add queued toast</bo-button>
<bo-button kind="outline" @click="dismissManagedToast">Dismiss last</bo-button>
<bo-button kind="outline" @click="clear">Clear all</bo-button>
   <bo-toast-viewport position="top-right" />`;
</script>

# Toast

Use `bo-toast` for brief feedback that does not interrupt the current task. Use `useToast` with one or more `bo-toast-viewport` components when notifications originate from different parts of the application or need a shared queue.

## Basic Usage

`bo-toast` is a single notification. Use `v-model:open` when rendering it directly; use `useToast` with a viewport for application notifications. The default duration is ten seconds, while `duration="0"` keeps a demonstration toast open until it is closed.

<ExampleFrame :code="basicExample">
  <div class="flex w-full justify-start">
    <bo-button @click="showBasicToast">Show toast</bo-button>
  </div>
  <bo-toast-viewport position="top-right" />
</ExampleFrame>

## Title and Description

Use `title` for the short result and `description` for optional supporting detail. When the default slot is supplied, it replaces both generated text blocks.

## Variants

The supported variants are `default`, `primary`, `success`, `warning`, and `destructive`. The semantic variants also provide a corresponding status icon.

<ExampleFrame :code="variantsExample">
  <div class="grid max-w-xl gap-2">
    <bo-toast v-model:open="defaultToastOpen" title="Default" :duration="0" />
    <bo-toast v-model:open="primaryToastOpen" variant="primary" title="Primary" :duration="0" />
    <bo-toast v-model:open="successToastOpen" variant="success" title="Success" :duration="0" />
    <bo-toast v-model:open="warningToastOpen" variant="warning" title="Warning" :duration="0" />
    <bo-toast v-model:open="destructiveToastOpen" variant="destructive" title="Destructive" :duration="0" />
  </div>
</ExampleFrame>

## Toast Container and Positions

`bo-toast-viewport` is the container for queued notifications. It teleports a fixed, pointer-aware region to `body`, announces it as a polite live region, and filters queued toasts by `position`. The default position is `top-right`. Supported positions are `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, and `bottom-right`.

Mount one viewport for each position that the application uses. A toast shown with `useToast` is rendered only by the viewport with the matching position.

<ExampleFrame :code="positionsExample">
  <div class="flex max-w-xl flex-wrap gap-2">
    <bo-button size="sm" @click="showAt('top-left')">Top left</bo-button>
    <bo-button size="sm" @click="showAt('top-center')">Top center</bo-button>
    <bo-button size="sm" @click="showAt('top-right')">Top right</bo-button>
    <bo-button size="sm" @click="showAt('bottom-left')">Bottom left</bo-button>
    <bo-button size="sm" @click="showAt('bottom-center')">Bottom center</bo-button>
    <bo-button size="sm" @click="showAt('bottom-right')">Bottom right</bo-button>
  </div>
  <bo-toast-viewport position="top-left" />
  <bo-toast-viewport position="top-center" />
  <bo-toast-viewport position="bottom-left" />
  <bo-toast-viewport position="bottom-center" />
</ExampleFrame>

## Close and Dismiss

Toasts are closable by default. The close button updates `open` to false and emits `close`; set `closable` to `false` when an automatic duration or programmatic dismissal is the only close path. `useToast().dismiss(id)` removes one queued toast, while `clear()` removes all queued toasts.

<ExampleFrame :code="closeExample">
  <div class="grid max-w-xl gap-2">
    <bo-button @click="open = true">Open dismissible toast</bo-button>
    <bo-toast
      v-model:open="open"
      title="Dismissible toast"
      description="Close it with the button or programmatically."
      :duration="0"
      @close="closeMessage = 'Toast closed'"
    />
    <span class="text-sm text-neutral-500">{{ closeMessage }}</span>
  </div>
</ExampleFrame>

## Stacking and the `useToast` API

Each call to `show` appends a toast to the shared queue and returns its id. Viewports stack their matching toasts with a small overlap. Hover or focus the stack to unwrap it; the individual close buttons remain available in both states. Timers pause while the stack is hovered and resume when the pointer leaves, so a toast still closes automatically when its remaining duration expires.

<ExampleFrame :code="stackingExample">
  <div class="flex flex-wrap gap-2">
    <bo-button @click="addManagedToast">Add queued toast</bo-button>
    <bo-button kind="outline" @click="dismissManagedToast">Dismiss last</bo-button>
    <bo-button kind="outline" @click="clear">Clear all</bo-button>
  </div>
  <bo-toast-viewport position="bottom-right" />
</ExampleFrame>

`useToast` is a shared composable. Call it in any component and mount the corresponding viewport once in the application shell.

## Usage Guidance

- Keep a toast short and useful; do not put required decisions in it.
- Use `success` for completed work, `warning` for attention, and `destructive` for failed or dangerous outcomes.
- Use a stable position per application region and avoid mounting duplicate viewports for the same position.
- Give long-lived or persistent notifications an explicit close path.

## API Reference

### `BoToast` Props

| Prop             | Type                     | Default              | Description                                                   |
| ---------------- | ------------------------ | -------------------- | ------------------------------------------------------------- |
| `id`             | `string`                 | Autogenerated        | Toast id.                                                     |
| `dataTestId`     | `string`                 | Autogenerated        | The test id attribute.                                        |
| `open`           | `boolean`                | `true`               | Visibility state used by `v-model:open`.                      |
| `title`          | `string`                 | -                    | Short notification title.                                     |
| `description`    | `string`                 | -                    | Supporting notification text.                                 |
| `variant`        | `BoToastVariant`         | `default`            | `default`, `primary`, `success`, `warning`, or `destructive`. |
| `duration`       | `number`                 | `10000`              | Auto-close delay in milliseconds; `0` disables it.            |
| `closable`       | `boolean`                | `true`               | Whether to render a close button.                             |
| `closeAriaLabel` | `string`                 | `Close notification` | Accessible close-button label.                                |
| `role`           | `HTMLAttributes['role']` | `status`             | Notification accessibility role.                              |

### `BoToast` Events and Slots

| Name          | Type      | Description                                |
| ------------- | --------- | ------------------------------------------ |
| `update:open` | `boolean` | Emitted when visibility changes.           |
| `close`       | -         | Emitted after automatic or manual closing. |
| `default`     | slot      | Replaces generated title and description.  |

### `BoToastViewport` Props and Slots

| Prop       | Type              | Default         | Description                               |
| ---------- | ----------------- | --------------- | ----------------------------------------- |
| `position` | `BoToastPosition` | `top-right`     | Queue position rendered by this viewport. |
| `label`    | `string`          | `Notifications` | Accessible label for the live region.     |
| `default`  | slot              | -               | Additional content inside the viewport.   |

### `ToastOptions`

`useToast().show` accepts all `BoToast` options except `id`, `dataTestId`, and `open`, plus `position`.

| Field            | Type                     | Default              | Description                                    |
| ---------------- | ------------------------ | -------------------- | ---------------------------------------------- |
| `title`          | `string`                 | -                    | Short notification title.                      |
| `description`    | `string`                 | -                    | Supporting notification text.                  |
| `variant`        | `BoToastVariant`         | `default`            | Notification style.                            |
| `duration`       | `number`                 | `10000`              | Auto-dismiss delay in milliseconds.            |
| `closable`       | `boolean`                | `true`               | Whether the rendered toast has a close button. |
| `closeAriaLabel` | `string`                 | `Close notification` | Accessible close label.                        |
| `role`           | `HTMLAttributes['role']` | `status`             | Notification role.                             |
| `position`       | `BoToastPosition`        | `top-right`          | Viewport that renders the toast.               |

### `useToast()`

| Method / value | Type                                     | Description                                |
| -------------- | ---------------------------------------- | ------------------------------------------ |
| `toasts`       | `Readonly<Ref<readonly ToastMessage[]>>` | Read-only shared queue.                    |
| `show`         | `(options: ToastOptions) => string`      | Adds a toast and returns its generated id. |
| `dismiss`      | `(id: string) => void`                   | Removes one queued toast by id.            |
| `clear`        | `() => void`                             | Removes every queued toast.                |

### `ToastMessage`

| Field         | Type           | Description                              |
| ------------- | -------------- | ---------------------------------------- |
| `id`          | `string`       | Generated id returned by `show`.         |
| Toast options | `ToastOptions` | Options used to render the notification. |
