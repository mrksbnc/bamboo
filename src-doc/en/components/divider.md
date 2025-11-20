---
title: Divider
description: A visual separator for content sections.
outline: deep
---

<script setup lang="ts">
import { BoDivider } from '@/components/bo-divider';
</script>

# Divider

A visual separator for content sections with support for horizontal and vertical orientations.

## Basic Usage

```vue
<bo-divider />
```

<div style="margin-top: 1rem;">
  Content above
  <bo-divider />
  Content below
</div>

## With Text

```vue
<bo-divider text="OR" />
```

<div style="margin-top: 1rem;">
  <bo-divider text="OR" />
</div>

## Vertical

```vue
<div style="display: flex; align-items: center;">
  <span>Left</span>
  <bo-divider orientation="vertical" />
  <span>Right</span>
</div>
```

<div style="display: flex; align-items: center; margin-top: 1rem;">
  <span>Left</span>
  <bo-divider orientation="vertical" />
  <span>Right</span>
</div>

## API Reference

### Props

| Name          | Type                         | Default        | Description                    |
| ------------- | ---------------------------- | -------------- | ------------------------------ |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation of the divider     |
| `text`        | `string`                     | -              | Text to display in the divider |
