---
title: Card
description: A flexible container component for displaying content.
outline: deep
---

<script setup lang="ts">
import { BoCard } from '@/components/bo-card';
import { BoButton } from '@/components/bo-button';
</script>

# Card

A flexible container component for displaying content with header, body, and footer sections.

## Basic Usage

```vue
<bo-card title="Card Title">
  Card content goes here
</bo-card>
```

<div style="margin-top: 1rem;">
  <bo-card title="Card Title">
    Card content goes here
  </bo-card>
</div>

## With Subtitle

```vue
<bo-card title="Card Title" subtitle="Card subtitle">
  Card content with subtitle
</bo-card>
```

<div style="margin-top: 1rem;">
  <bo-card title="Card Title" subtitle="Card subtitle">
    Card content with subtitle
  </bo-card>
</div>

## With Footer

```vue
<bo-card title="Card Title">
  <template #default>
    Card content
  </template>
  <template #footer>
    <bo-button label="Action" />
  </template>
</bo-card>
```

<div style="margin-top: 1rem;">
  <bo-card title="Card Title">
    <template #default>
      Card content
    </template>
    <template #footer>
      <bo-button label="Action" />
    </template>
  </bo-card>
</div>

## Hoverable

```vue
<bo-card title="Hoverable Card" :hoverable="true">
  Hover over this card
</bo-card>
```

<div style="margin-top: 1rem;">
  <bo-card title="Hoverable Card" :hoverable="true">
    Hover over this card
  </bo-card>
</div>

## API Reference

### Props

| Name        | Type      | Default | Description                       |
| ----------- | --------- | ------- | --------------------------------- |
| `title`     | `string`  | -       | Card title                        |
| `subtitle`  | `string`  | -       | Card subtitle                     |
| `hoverable` | `boolean` | `false` | Whether the card has hover effect |
| `clickable` | `boolean` | `false` | Whether the card is clickable     |

### Slots

| Name      | Description           |
| --------- | --------------------- |
| `header`  | Custom header content |
| `default` | Main content          |
| `footer`  | Footer content        |

### Events

| Event   | Payload      | Description                                 |
| ------- | ------------ | ------------------------------------------- |
| `click` | `MouseEvent` | Emitted when card is clicked (if clickable) |
