---
title: Tooltip
description: Display helpful information or context when hovering over or focusing on elements
category: overlay
tags:
  - tooltip
  - overlay
  - help
  - information
  - hint
outline: deep
---

<script setup lang="ts">
import { BoTooltip, BoButton } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-tooltip content="This is a helpful tooltip">
  <bo-button>Hover me</bo-button>
</bo-tooltip>`;

const placementExample = `<div class="grid grid-cols-3 gap-4 place-items-center">
  <bo-tooltip content="Top tooltip" placement="top">
    <bo-button>Top</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Top start tooltip" placement="top-start">
    <bo-button>Top Start</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Top end tooltip" placement="top-end">
    <bo-button>Top End</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Left tooltip" placement="left">
    <bo-button>Left</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Center tooltip" placement="bottom">
    <bo-button>Center</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Right tooltip" placement="right">
    <bo-button>Right</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Bottom start tooltip" placement="bottom-start">
    <bo-button>Bottom Start</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Bottom tooltip" placement="bottom">
    <bo-button>Bottom</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Bottom end tooltip" placement="bottom-end">
    <bo-button>Bottom End</bo-button>
  </bo-tooltip>
</div>`;

const variantsExample = `<div class="flex gap-4 flex-wrap">
  <bo-tooltip content="Default tooltip" variant="default">
    <bo-button>Default</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Dark tooltip" variant="dark">
    <bo-button>Dark</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Light tooltip" variant="light">
    <bo-button>Light</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Success tooltip" variant="success">
    <bo-button variant="success">Success</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Warning tooltip" variant="warning">
    <bo-button variant="warning">Warning</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Error tooltip" variant="error">
    <bo-button variant="destructive">Error</bo-button>
  </bo-tooltip>
</div>`;

const triggersExample = `<div class="flex gap-4 flex-wrap">
  <bo-tooltip content="Hover to show" trigger="hover">
    <bo-button>Hover</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Click to show" trigger="click">
    <bo-button>Click</bo-button>
  </bo-tooltip>
  <bo-tooltip content="Focus to show" trigger="focus">
    <bo-button>Focus</bo-button>
  </bo-tooltip>
</div>`;

const delayExample = `<div class="flex gap-4 flex-wrap">
  <bo-tooltip content="No delay" :delay="0">
    <bo-button>No Delay</bo-button>
  </bo-tooltip>
  <bo-tooltip content="500ms delay" :delay="500">
    <bo-button>500ms Delay</bo-button>
  </bo-tooltip>
  <bo-tooltip content="1000ms delay" :delay="1000">
    <bo-button>1s Delay</bo-button>
  </bo-tooltip>
</div>`;

const richContentExample = `<bo-tooltip>
  <template #content>
    <div class="space-y-2">
      <div class="font-semibold">Rich Tooltip</div>
      <div class="text-sm">This tooltip contains <strong>formatted</strong> content with multiple lines and <em>styling</em>.</div>
      <div class="text-xs text-neutral-500 dark:text-neutral-400">Additional context information</div>
    </div>
  </template>
  <bo-button>Rich Content</bo-button>
</bo-tooltip>`;

const disabledExample = `<div class="flex gap-4">
  <bo-tooltip content="This tooltip is enabled">
    <bo-button>Enabled Tooltip</bo-button>
  </bo-tooltip>
  <bo-tooltip content="This tooltip is disabled" :disabled="true">
    <bo-button>Disabled Tooltip</bo-button>
  </bo-tooltip>
</div>`;
</script>

# Tooltip

The `bo-tooltip` component displays helpful information or context when users hover over or focus on elements. It's perfect for providing additional details without cluttering the interface.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-tooltip content="This is a helpful tooltip">
    <bo-button>Hover me</bo-button>
  </bo-tooltip>
</ExampleFrame>

## Placement

The `placement` prop controls where the tooltip appears relative to the target element.

<ExampleFrame :code="placementExample">
  <div class="grid grid-cols-3 gap-4 place-items-center">
  <bo-tooltip content="Top tooltip" placement="top">
    <bo-button>Top</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Top start tooltip" placement="top-start">
    <bo-button>Top Start</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Top end tooltip" placement="top-end">
    <bo-button>Top End</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Left tooltip" placement="left">
    <bo-button>Left</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Center tooltip" placement="bottom">
    <bo-button>Center</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Right tooltip" placement="right">
    <bo-button>Right</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Bottom start tooltip" placement="bottom-start">
    <bo-button>Bottom Start</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Bottom tooltip" placement="bottom">
    <bo-button>Bottom</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Bottom end tooltip" placement="bottom-end">
    <bo-button>Bottom End</bo-button>
  </bo-tooltip>
</div>
</ExampleFrame>

## Variants

Tooltips support different variants to match various contexts and importance levels.

<ExampleFrame :code="variantsExample">
  <div class="flex gap-4 flex-wrap">
  <bo-tooltip content="Default tooltip" variant="default">
    <bo-button>Default</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Dark tooltip" variant="dark">
    <bo-button>Dark</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Light tooltip" variant="light">
    <bo-button>Light</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Success tooltip" variant="success">
    <bo-button variant="success">Success</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Warning tooltip" variant="warning">
    <bo-button variant="warning">Warning</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Error tooltip" variant="error">
    <bo-button variant="destructive">Error</bo-button>
  </bo-tooltip>
</div>
</ExampleFrame>

## Trigger Events

Control when the tooltip appears using different trigger events.

<ExampleFrame :code="triggersExample">
  <div class="flex gap-4 flex-wrap">
  <bo-tooltip content="Hover to show" trigger="hover">
    <bo-button>Hover</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Click to show" trigger="click">
    <bo-button>Click</bo-button>
  </bo-tooltip>

  <bo-tooltip content="Focus to show" trigger="focus">
    <bo-button>Focus</bo-button>
  </bo-tooltip>
</div>
</ExampleFrame>

## Delay

Control the delay before showing and hiding the tooltip.

<ExampleFrame :code="delayExample">
  <div class="flex gap-4 flex-wrap">
  <bo-tooltip content="No delay" :delay="0">
    <bo-button>No Delay</bo-button>
  </bo-tooltip>

  <bo-tooltip content="500ms delay" :delay="500">
    <bo-button>500ms Delay</bo-button>
  </bo-tooltip>

  <bo-tooltip content="1000ms delay" :delay="1000">
    <bo-button>1s Delay</bo-button>
  </bo-tooltip>
</div>
</ExampleFrame>

## Rich Content

Tooltips can contain rich HTML content using the content slot.

<ExampleFrame :code="richContentExample">
  <bo-tooltip>
    <template #content>
      <div class="space-y-2">
        <div class="font-semibold">Rich Tooltip</div>
        <div class="text-sm">This tooltip contains <strong>formatted</strong> content with multiple lines and <em>styling</em>.</div>
        <div class="text-xs text-neutral-500 dark:text-neutral-400">Additional context information</div>
      </div>
    </template>
    <bo-button>Rich Content</bo-button>
  </bo-tooltip>
</ExampleFrame>

## Disabled State

Tooltips can be disabled to prevent them from showing.

<ExampleFrame :code="disabledExample">
  <div class="flex gap-4">
  <bo-tooltip content="This tooltip is enabled">
    <bo-button>Enabled Tooltip</bo-button>
  </bo-tooltip>

  <bo-tooltip content="This tooltip is disabled" :disabled="true">
    <bo-button>Disabled Tooltip</bo-button>
  </bo-tooltip>
</div>
</ExampleFrame>
