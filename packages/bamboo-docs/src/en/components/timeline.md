---
title: Timeline
description: Display a sequence of events or steps in chronological order with visual indicators
category: display
tags:
  - timeline
  - events
  - chronological
  - steps
  - progress
outline: deep
---

<script setup lang="ts">
import { BoTimeline } from '@mrksbnc/bamboo-vue'
</script>

# Timeline

The `bo-timeline` component displays a sequence of events, steps, or milestones in chronological order with visual indicators and connecting lines.

## Basic Usage

::: raw
<bo-timeline>
<bo-timeline-item>
<template #title>Project Started</template>
<template #description>Initial project setup and planning phase</template>
<template #time>2024-01-15</template>
</bo-timeline-item>

  <bo-timeline-item>
    <template #title>Development Phase</template>
    <template #description>Core features implementation and testing</template>
    <template #time>2024-02-01</template>
  </bo-timeline-item>
  
  <bo-timeline-item>
    <template #title>Beta Release</template>
    <template #description>Released beta version for user testing</template>
    <template #time>2024-03-15</template>
  </bo-timeline-item>
  
  <bo-timeline-item>
    <template #title>Production Launch</template>
    <template #description>Official launch to production environment</template>
    <template #time>2024-04-01</template>
  </bo-timeline-item>
</bo-timeline>
:::

```vue
<bo-timeline>
  <bo-timeline-item>
    <template #title>Project Started</template>
    <template #description>Initial project setup and planning phase</template>
    <template #time>2024-01-15</template>
  </bo-timeline-item>
  
  <bo-timeline-item>
    <template #title>Development Phase</template>
    <template #description>Core features implementation and testing</template>
    <template #time>2024-02-01</template>
  </bo-timeline-item>
  
  <bo-timeline-item>
    <template #title>Beta Release</template>
    <template #description>Released beta version for user testing</template>
    <template #time>2024-03-15</template>
  </bo-timeline-item>
</bo-timeline>
```

## With Icons

Timeline items can include icons to better represent different types of events.

::: raw
<bo-timeline>
<bo-timeline-item icon="play-circle" variant="success">
<template #title>Order Placed</template>
<template #description>Your order has been successfully placed</template>
<template #time>10:30 AM</template>
</bo-timeline-item>

  <bo-timeline-item icon="truck" variant="warning">
    <template #title>In Transit</template>
    <template #description>Package is on its way to your location</template>
    <template #time>2:15 PM</template>
  </bo-timeline-item>
  
  <bo-timeline-item icon="check-circle" variant="success">
    <template #title>Delivered</template>
    <template #description>Package delivered successfully</template>
    <template #time>4:45 PM</template>
  </bo-timeline-item>
</bo-timeline>
:::

```vue
<bo-timeline>
  <bo-timeline-item icon="play-circle" variant="success">
    <template #title>Order Placed</template>
    <template #description>Your order has been successfully placed</template>
    <template #time>10:30 AM</template>
  </bo-timeline-item>
  
  <bo-timeline-item icon="truck" variant="warning">
    <template #title>In Transit</template>
    <template #description>Package is on its way to your location</template>
    <template #time>2:15 PM</template>
  </bo-timeline-item>
  
  <bo-timeline-item icon="check-circle" variant="success">
    <template #title>Delivered</template>
    <template #description>Package delivered successfully</template>
    <template #time>4:45 PM</template>
  </bo-timeline-item>
</bo-timeline>
```

## Variants

Timeline items support different variants to indicate status or importance.

::: raw
<bo-timeline>
<bo-timeline-item variant="default">
<template #title>Default Event</template>
<template #description>Standard timeline event</template>
</bo-timeline-item>

  <bo-timeline-item variant="primary">
    <template #title>Primary Event</template>
    <template #description>Important milestone or event</template>
  </bo-timeline-item>
  
  <bo-timeline-item variant="success">
    <template #title>Success Event</template>
    <template #description>Completed successfully</template>
  </bo-timeline-item>
  
  <bo-timeline-item variant="warning">
    <template #title>Warning Event</template>
    <template #description>Requires attention</template>
  </bo-timeline-item>
  
  <bo-timeline-item variant="error">
    <template #title>Error Event</template>
    <template #description>Failed or encountered an error</template>
  </bo-timeline-item>
</bo-timeline>
:::

```vue
<bo-timeline>
  <bo-timeline-item variant="default">
    <template #title>Default Event</template>
    <template #description>Standard timeline event</template>
  </bo-timeline-item>
  
  <bo-timeline-item variant="success">
    <template #title>Success Event</template>
    <template #description>Completed successfully</template>
  </bo-timeline-item>
  
  <bo-timeline-item variant="warning">
    <template #title>Warning Event</template>
    <template #description>Requires attention</template>
  </bo-timeline-item>
  
  <bo-timeline-item variant="error">
    <template #title>Error Event</template>
    <template #description>Failed or encountered an error</template>
  </bo-timeline-item>
</bo-timeline>
```

## Orientation

Timelines can be displayed vertically (default) or horizontally.

::: raw

<div class="space-y-8">
  <div>
    <h4 class="mb-4 font-medium">Vertical Timeline (default)</h4>
    <bo-timeline orientation="vertical">
      <bo-timeline-item>
        <template #title>Step 1</template>
        <template #description>First step completed</template>
      </bo-timeline-item>
      <bo-timeline-item>
        <template #title>Step 2</template>
        <template #description>Second step in progress</template>
      </bo-timeline-item>
      <bo-timeline-item>
        <template #title>Step 3</template>
        <template #description>Final step pending</template>
      </bo-timeline-item>
    </bo-timeline>
  </div>
  
  <div>
    <h4 class="mb-4 font-medium">Horizontal Timeline</h4>
    <bo-timeline orientation="horizontal">
      <bo-timeline-item>
        <template #title>Step 1</template>
        <template #description>Completed</template>
      </bo-timeline-item>
      <bo-timeline-item>
        <template #title>Step 2</template>
        <template #description>In Progress</template>
      </bo-timeline-item>
      <bo-timeline-item>
        <template #title>Step 3</template>
        <template #description>Pending</template>
      </bo-timeline-item>
    </bo-timeline>
  </div>
</div>
:::

```vue
<!-- Vertical Timeline (default) -->
<bo-timeline orientation="vertical">
  <bo-timeline-item>
    <template #title>Step 1</template>
    <template #description>First step completed</template>
  </bo-timeline-item>
  <bo-timeline-item>
    <template #title>Step 2</template>
    <template #description>Second step in progress</template>
  </bo-timeline-item>
</bo-timeline>

<!-- Horizontal Timeline -->
<bo-timeline orientation="horizontal">
  <bo-timeline-item>
    <template #title>Step 1</template>
    <template #description>Completed</template>
  </bo-timeline-item>
  <bo-timeline-item>
    <template #title>Step 2</template>
    <template #description>In Progress</template>
  </bo-timeline-item>
</bo-timeline>
```

## Rich Content

Timeline items can contain rich HTML content and custom layouts.

::: raw
<bo-timeline>
<bo-timeline-item icon="user-plus" variant="primary">
<template #title>New User Registration</template>
<template #content>
<div class="space-y-2">
<p class="text-sm text-gray-600">John Doe registered for an account</p>
<div class="flex gap-2">
<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">New User</span>
<span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Verified</span>
</div>
</div>
</template>
<template #time>2 hours ago</template>
</bo-timeline-item>

  <bo-timeline-item icon="shopping-cart" variant="success">
    <template #title>Purchase Completed</template>
    <template #content>
      <div class="space-y-2">
        <p class="text-sm text-gray-600">Order #12345 for $299.99</p>
        <div class="text-xs text-gray-500">
          Items: MacBook Pro, USB-C Cable
        </div>
      </div>
    </template>
    <template #time>1 day ago</template>
  </bo-timeline-item>
</bo-timeline>
:::

```vue
<bo-timeline>
  <bo-timeline-item icon="user-plus" variant="primary">
    <template #title>New User Registration</template>
    <template #content>
      <div class="space-y-2">
        <p class="text-sm text-gray-600">John Doe registered for an account</p>
        <div class="flex gap-2">
          <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">New User</span>
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Verified</span>
        </div>
      </div>
    </template>
    <template #time>2 hours ago</template>
  </bo-timeline-item>
</bo-timeline>
```
