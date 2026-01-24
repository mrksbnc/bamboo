---
title: Alert
description: Display important messages and notifications to users with various styles and states
category: feedback
tags:
  - alert
  - notification
  - message
  - feedback
outline: deep
---

<script setup lang="ts">
import { BoAlert } from '@mrksbnc/bamboo-vue'
</script>

# Alert

The `bo-alert` component is used to display important messages, notifications, or feedback to users. It supports various variants to indicate different types of information.

## Basic Usage

::: raw
<bo-alert>This is a basic alert message</bo-alert>
:::

```vue
<bo-alert>This is a basic alert message</bo-alert>
```

## Variants

The `variant` prop allows you to customize the color and style of the alert to match different message types.

::: raw

<div class="space-y-4">
  <bo-alert variant="info">This is an info alert</bo-alert>
  <bo-alert variant="success">This is a success alert</bo-alert>
  <bo-alert variant="warning">This is a warning alert</bo-alert>
  <bo-alert variant="error">This is an error alert</bo-alert>
</div>
:::

```vue
<bo-alert variant="info">This is an info alert</bo-alert>
<bo-alert variant="success">This is a success alert</bo-alert>
<bo-alert variant="warning">This is a warning alert</bo-alert>
<bo-alert variant="error">This is an error alert</bo-alert>
```

## With Icons

Alerts can include icons to enhance visual communication and make the message type more apparent.

::: raw

<div class="space-y-4">
  <bo-alert variant="info" icon="info">Information with icon</bo-alert>
  <bo-alert variant="success" icon="check_circle">Success with icon</bo-alert>
  <bo-alert variant="warning" icon="alert_triangle">Warning with icon</bo-alert>
  <bo-alert variant="error" icon="alert_circle">Error with icon</bo-alert>
</div>
:::

```vue
<bo-alert variant="info" icon="info">Information with icon</bo-alert>
<bo-alert variant="success" icon="check_circle">Success with icon</bo-alert>
<bo-alert variant="warning" icon="alert_triangle">Warning with icon</bo-alert>
<bo-alert variant="error" icon="alert_circle">Error with icon</bo-alert>
```

## Dismissible

Alerts can be made dismissible by adding a close button that allows users to hide the alert.

::: raw

<div class="space-y-4">
  <bo-alert variant="info" :dismissible="true">This alert can be dismissed</bo-alert>
  <bo-alert variant="warning" :dismissible="true" icon="alert_triangle">Dismissible warning alert</bo-alert>
</div>
:::

```vue
<bo-alert variant="info" :dismissible="true">This alert can be dismissed</bo-alert>
<bo-alert
	variant="warning"
	:dismissible="true"
	icon="alert_triangle"
>Dismissible warning alert</bo-alert>
```

## With Title

Alerts can include a title to provide additional context or hierarchy to the message.

::: raw

<div class="space-y-4">
  <bo-alert variant="success" title="Success!" icon="check_circle">
    Your changes have been saved successfully.
  </bo-alert>
  <bo-alert variant="error" title="Error occurred" icon="alert_circle" :dismissible="true">
    There was a problem processing your request. Please try again.
  </bo-alert>
</div>
:::

```vue
<bo-alert variant="success" title="Success!" icon="check_circle">
  Your changes have been saved successfully.
</bo-alert>
<bo-alert variant="error" title="Error occurred" icon="alert_circle" :dismissible="true">
  There was a problem processing your request. Please try again.
</bo-alert>
```

## Sizes

The `size` prop allows you to customize the size of the alert.

::: raw

<div class="space-y-4">
  <bo-alert size="sm" variant="info">Small alert</bo-alert>
  <bo-alert size="default" variant="info">Default alert</bo-alert>
  <bo-alert size="lg" variant="info">Large alert</bo-alert>
</div>
:::

```vue
<bo-alert size="sm" variant="info">Small alert</bo-alert>
<bo-alert size="default" variant="info">Default alert</bo-alert>
<bo-alert size="lg" variant="info">Large alert</bo-alert>
```
