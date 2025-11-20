---
title: Timeline
description: Display a list of events in chronological order.
outline: deep
---

<script setup lang="ts">
import { BoTimeline, BoTimelineItem } from '@/components/bo-timeline';
import { BoVariant } from '@/shared/variant';
</script>

# Timeline

Display a list of events in chronological order with support for icons and variants.

## Basic Usage

```vue
<bo-timeline>
  <bo-timeline-item title="Event 1" timestamp="2 hours ago" />
  <bo-timeline-item title="Event 2" timestamp="1 day ago" />
  <bo-timeline-item title="Event 3" timestamp="3 days ago" />
</bo-timeline>
```

<div style="margin-top: 1rem;">
  <bo-timeline>
    <bo-timeline-item
      title="Order Placed"
      description="Your order has been placed successfully"
      timestamp="2 hours ago"
      :variant="BoVariant.success"
    />
    <bo-timeline-item
      title="Processing"
      description="Your order is being processed"
      timestamp="1 hour ago"
      :variant="BoVariant.primary"
    />
    <bo-timeline-item
      title="Shipped"
      description="Your order has been shipped"
      timestamp="30 minutes ago"
      :variant="BoVariant.warning"
    />
  </bo-timeline>
</div>

## API Reference

### BoTimelineItem Props

| Name          | Type        | Default     | Description                |
| ------------- | ----------- | ----------- | -------------------------- |
| `title`       | `string`    | -           | Title of the timeline item |
| `description` | `string`    | -           | Description text           |
| `timestamp`   | `string`    | -           | Timestamp or date          |
| `icon`        | `Icon`      | -           | Icon to display            |
| `variant`     | `BoVariant` | `'primary'` | Variant color              |
