---
title: Tabs
description: A keyboard-accessible tab list and associated content panels.
category: navigation
tags:
  - tabs
  - navigation
  - keyboard
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoTabs, BoTabsContent, BoTabsList, BoTabsTrigger } from '@mrksbnc/bamboo-vue';

const active = ref('overview');
const basicExample = `<bo-tabs v-model="active">
  <bo-tabs-list aria-label="Project sections"><bo-tabs-trigger value="overview">Overview</bo-tabs-trigger><bo-tabs-trigger value="activity">Activity</bo-tabs-trigger></bo-tabs-list>
  <bo-tabs-content value="overview">Project overview.</bo-tabs-content>
  <bo-tabs-content value="activity">Recent project activity.</bo-tabs-content>
</bo-tabs>`;
const verticalExample = `<bo-tabs v-model="active" orientation="vertical" activation-mode="manual">
  <bo-tabs-list aria-label="Settings sections"><bo-tabs-trigger value="profile">Profile</bo-tabs-trigger><bo-tabs-trigger value="security">Security</bo-tabs-trigger></bo-tabs-list>
  <bo-tabs-content value="profile">Profile settings.</bo-tabs-content>
  <bo-tabs-content value="security">Security settings.</bo-tabs-content>
</bo-tabs>`;
</script>

# Tabs

`bo-tabs` coordinates a list of triggers and content panels. If no value is supplied, the first enabled trigger becomes active when it registers.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-tabs v-model="active"><bo-tabs-list aria-label="Project sections"><bo-tabs-trigger value="overview">Overview</bo-tabs-trigger><bo-tabs-trigger value="activity">Activity</bo-tabs-trigger></bo-tabs-list><bo-tabs-content value="overview">Project overview.</bo-tabs-content><bo-tabs-content value="activity">Recent project activity.</bo-tabs-content></bo-tabs>
</ExampleFrame>

## Orientation and Activation

`orientation` changes the tab-list direction and arrow-key navigation. `activationMode="automatic"` selects while focus moves; `manual` moves focus without selecting until Enter or Space.

<ExampleFrame :code="verticalExample">
  <bo-tabs v-model="active" orientation="vertical" activation-mode="manual"><bo-tabs-list aria-label="Settings sections"><bo-tabs-trigger value="profile">Profile</bo-tabs-trigger><bo-tabs-trigger value="security">Security</bo-tabs-trigger></bo-tabs-list><bo-tabs-content value="profile">Profile settings.</bo-tabs-content><bo-tabs-content value="security">Security settings.</bo-tabs-content></bo-tabs>
</ExampleFrame>

## API Reference

| Component / prop | Type                         | Default      | Description                                                               |
| ---------------- | ---------------------------- | ------------ | ------------------------------------------------------------------------- |
| `BoTabs`         | component                    | -            | Root selection context.                                                   |
| `modelValue`     | `string \| number`           | -            | Active value used by `v-model`.                                           |
| `defaultValue`   | `string \| number`           | -            | Initial uncontrolled value.                                               |
| `orientation`    | `'horizontal' \| 'vertical'` | `horizontal` | Layout and navigation axis.                                               |
| `activationMode` | `'automatic' \| 'manual'`    | `automatic`  | Focus activation behavior.                                                |
| `disabled`       | `boolean`                    | `false`      | Disables the tab set.                                                     |
| `BoTabsList`     | component                    | -            | `tablist`; accepts `ariaLabel`.                                           |
| `BoTabsTrigger`  | component                    | -            | Trigger with required `value` and optional `disabled`, `ariaLabel`.       |
| `BoTabsContent`  | component                    | -            | Panel with required `value`; `forceMount` keeps inactive content mounted. |

The root emits `update:modelValue`. Triggers support Enter/Space, Home, End, and axis-appropriate arrow keys.
