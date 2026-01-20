---
title: Badge
description: A badge component is a small label that is used to indicate the status of an element. It can be used to display information such as new, unread, important or any other status or information.
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

A badge component is a small label that is used to indicate the status of an element. It can be used to display information such as new, unread, important or any other status or information.

## Basic Usage

The component is called `bo-badge` and can be used as follows:

<div class="flex gap-4 items-center">
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

## Sizes

Badges come in different sizes to fit various use cases:

<div class="flex gap-4 items-center">
  <bo-badge label="XS Badge" size="xs" />
  <bo-badge label="SM Badge" size="sm" />
  <bo-badge label="Default Badge" size="default" />
  <bo-badge label="LG Badge" size="lg" />
  <bo-badge label="XL Badge" size="xl" />
</div>

```vue
<bo-badge label="XS Badge" size="xs" />
<bo-badge label="SM Badge" size="sm" />
<bo-badge label="Default Badge" size="default" />
<bo-badge label="LG Badge" size="lg" />
<bo-badge label="XL Badge" size="xl" />
```

## Variants

Badges support multiple color variants:

<div class="flex gap-4 items-center flex-wrap">
  <bo-badge label="Primary" variant="primary" />
  <bo-badge label="Secondary" variant="secondary" />
  <bo-badge label="Success" variant="success" />
  <bo-badge label="Warning" variant="warning" />
  <bo-badge label="Destructive" variant="destructive" />
  <bo-badge label="Light" variant="light" />
  <bo-badge label="Dark" variant="dark" />
</div>

```vue
<bo-badge label="Primary" variant="primary" />
<bo-badge label="Secondary" variant="secondary" />
<bo-badge label="Success" variant="success" />
<bo-badge label="Warning" variant="warning" />
<bo-badge label="Destructive" variant="destructive" />
<bo-badge label="Light" variant="light" />
<bo-badge label="Dark" variant="dark" />
```

## Outline Type

Badges can have an outline style:

<div class="flex gap-4 items-center flex-wrap">
  <bo-badge label="Primary" type="outline" variant="primary" />
  <bo-badge label="Secondary" type="outline" variant="secondary" />
  <bo-badge label="Success" type="outline" variant="success" />
  <bo-badge label="Warning" type="outline" variant="warning" />
  <bo-badge label="Destructive" type="outline" variant="destructive" />
</div>

```vue
<bo-badge label="Primary" type="outline" variant="primary" />
<bo-badge label="Secondary" type="outline" variant="secondary" />
<bo-badge label="Success" type="outline" variant="success" />
<bo-badge label="Warning" type="outline" variant="warning" />
<bo-badge label="Destructive" type="outline" variant="destructive" />
```

## Shapes

Badges support different shapes:

<div class="flex gap-4 items-center">
  <bo-badge label="Default" shape="default" />
  <bo-badge label="Pill" shape="pill" />
  <bo-badge label="Flat" shape="flat" />
</div>

```vue
<bo-badge label="Default" shape="default" />
<bo-badge label="Pill" shape="pill" />
<bo-badge label="Flat" shape="flat" />
```
