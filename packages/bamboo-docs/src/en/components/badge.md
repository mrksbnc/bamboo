---
title: Badge
description: A badge is a small label that is used to indicate the status of an element. It can be used to display information such as new, unread, important or any other status or information.
category: display
tags:
  - badge
  - status
  - tag
outline: deep
---

<script setup>
import { BoBadge } from '@mrksbnc/bamboo-vue';
</script>

# Badge

A badge is a small label that is used to indicate the status of an element. It can be used to display information such as new, unread, important or any other status or information.

## Basic Usage

The component is called `bo-badge` and can be used as follows:

<div class="flex gap-4">
  <bo-badge label="Badge" />
  <bo-badge label="Badge" variant="warning" />
  <bo-badge label="Badge" variant="success" />
  <bo-badge label="Badge" variant="destructive" />
</div>

```vue
<!-- With label -->
<bo-badge label="Badge" />

<!-- With label and variant -->
<bo-badge label="Badge" variant="warning" />

<!-- With label and variant -->
<bo-badge label="Badge" variant="success" />

<!-- With label and variant -->
<bo-badge label="Badge" variant="destructive" />
```
