---
title: Side Panel
description: A sliding panel that appears from the side of the screen.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoSidePanel, BoSidePanelShape } from '@/components/bo-side-panel';
import { BoButton } from '@/components/bo-button';

const isOpen = ref(false);
const isOpenRounded = ref(false);
</script>

# Side Panel

A sliding panel that appears from the side of the screen with overlay backdrop.

## Basic Usage

```vue
<bo-button label="Open Panel" @click="isOpen = true" />
<bo-side-panel v-model="isOpen" title="Panel Title">
  Panel content goes here
</bo-side-panel>
```

<div style="margin-top: 1rem;">
  <bo-button label="Open Panel" @click="isOpen = true" />
  <bo-side-panel v-model="isOpen" title="Panel Title">
    <p>Panel content goes here</p>
    <p>You can add any content you want</p>
  </bo-side-panel>
</div>

## Position

### Right (Default)

```vue
<bo-side-panel v-model="isOpen" position="right">
  Content
</bo-side-panel>
```

### Left

```vue
<bo-side-panel v-model="isOpen" position="left">
  Content
</bo-side-panel>
```

## Shape

### Square (Default)

The default square shape extends from edge to edge.

```vue
<bo-side-panel v-model="isOpen" :shape="BoSidePanelShape.Square">
  Content
</bo-side-panel>
```

### Rounded

The rounded shape creates a floating panel with rounded borders, offset from the edges.

```vue
<bo-side-panel v-model="isOpen" :shape="BoSidePanelShape.Rounded">
  Content
</bo-side-panel>
```

<div style="margin-top: 1rem;">
  <bo-button label="Open Rounded Panel" @click="isOpenRounded = true" />
  <bo-side-panel v-model="isOpenRounded" title="Rounded Panel" :shape="BoSidePanelShape.Rounded">
    <p>This is a floating panel with rounded corners</p>
    <p>Notice the offset from the edges and rounded borders</p>
  </bo-side-panel>
</div>

## API Reference

### Props

| Name         | Type                | Default                   | Description                                                               |
| ------------ | ------------------- | ------------------------- | ------------------------------------------------------------------------- |
| `modelValue` | `boolean`           | `false`                   | Whether the panel is open                                                 |
| `position`   | `'left' \| 'right'` | `'right'`                 | Position of the panel                                                     |
| `width`      | `string \| number`  | `'24rem'`                 | Width of the panel                                                        |
| `title`      | `string`            | -                         | Title of the panel                                                        |
| `shape`      | `BoSidePanelShape`  | `BoSidePanelShape.Square` | Shape of the panel. Rounded creates a floating panel with rounded borders |

### Events

| Event               | Payload   | Description                         |
| ------------------- | --------- | ----------------------------------- |
| `update:modelValue` | `boolean` | Emitted when panel is opened/closed |
