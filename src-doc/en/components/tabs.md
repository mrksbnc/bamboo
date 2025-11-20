---
title: Tabs
description: Organize content into separate views with tab navigation.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoTabs, BoTabPanel } from '@/components/bo-tabs';

const activeTab = ref('tab1');

const tabs = [
  { value: 'tab1', label: 'Profile' },
  { value: 'tab2', label: 'Settings' },
  { value: 'tab3', label: 'Messages', badge: 5 },
];
</script>

# Tabs

Organize content into separate views with tab navigation and support for different variants.

## Basic Usage

```vue
<bo-tabs v-model="activeTab" :tabs="tabs">
  <bo-tab-panel value="tab1">Profile content</bo-tab-panel>
  <bo-tab-panel value="tab2">Settings content</bo-tab-panel>
  <bo-tab-panel value="tab3">Messages content</bo-tab-panel>
</bo-tabs>
```

<div style="margin-top: 1rem;">
  <bo-tabs v-model="activeTab" :tabs="tabs">
    <bo-tab-panel value="tab1">Profile content goes here</bo-tab-panel>
    <bo-tab-panel value="tab2">Settings content goes here</bo-tab-panel>
    <bo-tab-panel value="tab3">Messages content goes here</bo-tab-panel>
  </bo-tabs>
</div>

## Variants

### Underline (Default)

```vue
<bo-tabs v-model="activeTab" :tabs="tabs" variant="underline" />
```

### Pills

```vue
<bo-tabs v-model="activeTab" :tabs="tabs" variant="pills" />
```

### Boxed

```vue
<bo-tabs v-model="activeTab" :tabs="tabs" variant="boxed" />
```

## API Reference

### BoTabs Props

| Name         | Type                                | Default       | Description                |
| ------------ | ----------------------------------- | ------------- | -------------------------- |
| `modelValue` | `string`                            | -             | Currently active tab value |
| `tabs`       | `TabItem[]`                         | -             | Array of tab items         |
| `variant`    | `'underline' \| 'pills' \| 'boxed'` | `'underline'` | Visual variant             |

### BoTabPanel Props

| Name    | Type     | Default | Description                |
| ------- | -------- | ------- | -------------------------- |
| `value` | `string` | -       | Value that matches the tab |

### Events

| Event               | Payload  | Description                     |
| ------------------- | -------- | ------------------------------- |
| `update:modelValue` | `string` | Emitted when active tab changes |
| `change`            | `string` | Emitted when tab is clicked     |
