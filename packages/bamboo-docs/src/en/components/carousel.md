---
title: Carousel
description: Display a rotating set of content items with navigation controls and indicators
category: display
tags:
  - carousel
  - slider
  - slideshow
  - navigation
  - gallery
outline: deep
---

<script setup lang="ts">
import { BoCarousel } from '@mrksbnc/bamboo-vue'
</script>

# Carousel

The `bo-carousel` component displays a rotating set of content items, such as images, cards, or any custom content, with navigation controls and indicators.

## Basic Usage

::: raw
<bo-carousel>
<bo-carousel-item>

<div class="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
Slide 1
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-64 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
      Slide 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
      Slide 3
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-64 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
      Slide 4
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel>
  <bo-carousel-item>
    <div class="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
      Slide 1
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-64 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
      Slide 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
      Slide 3
    </div>
  </bo-carousel-item>
</bo-carousel>
```

## Auto-play

Enable automatic slide progression with customizable intervals.

::: raw
<bo-carousel :autoplay="true" :interval="3000">
<bo-carousel-item>

<div class="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
Auto-play Slide 1
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Auto-play Slide 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-violet-500 to-emerald-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Auto-play Slide 3
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel :autoplay="true" :interval="3000">
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Auto-play Slide 1
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Auto-play Slide 2
    </div>
  </bo-carousel-item>
</bo-carousel>
```

## Navigation Controls

Customize the appearance and behavior of navigation arrows.

::: raw
<bo-carousel :show-arrows="true" arrow-position="outside">
<bo-carousel-item>

<div class="h-56 bg-gradient-to-r from-rose-500 to-orange-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
Navigation Slide 1
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-56 bg-gradient-to-r from-indigo-500 to-rose-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Navigation Slide 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-56 bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Navigation Slide 3
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel :show-arrows="true" arrow-position="outside">
  <bo-carousel-item>
    <div class="h-56 bg-gradient-to-r from-rose-500 to-orange-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Navigation Slide 1
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-56 bg-gradient-to-r from-indigo-500 to-rose-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Navigation Slide 2
    </div>
  </bo-carousel-item>
</bo-carousel>
```

## Indicators

Control the display and position of slide indicators.

::: raw
<bo-carousel :show-indicators="true" indicator-position="bottom">
<bo-carousel-item>

<div class="h-52 bg-gradient-to-r from-amber-500 to-pink-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
Indicator Slide 1
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-52 bg-gradient-to-r from-lime-500 to-amber-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Indicator Slide 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-52 bg-gradient-to-r from-sky-500 to-lime-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Indicator Slide 3
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel :show-indicators="true" indicator-position="bottom">
  <bo-carousel-item>
    <div class="h-52 bg-gradient-to-r from-amber-500 to-pink-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Indicator Slide 1
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-52 bg-gradient-to-r from-lime-500 to-amber-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Indicator Slide 2
    </div>
  </bo-carousel-item>
</bo-carousel>
```

## Loop and Infinite Scroll

Enable looping to create an infinite scrolling experience.

::: raw
<bo-carousel :loop="true" :autoplay="true" :interval="2500">
<bo-carousel-item>

<div class="h-48 bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
Loop Slide 1
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Loop Slide 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Loop Slide 3
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel :loop="true" :autoplay="true" :interval="2500">
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Loop Slide 1
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Loop Slide 2
    </div>
  </bo-carousel-item>
</bo-carousel>
```

## Multiple Items

Display multiple slides at once with customizable spacing.

::: raw
<bo-carousel :items-per-view="2" :spacing="16">
<bo-carousel-item>

<div class="h-40 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold rounded-lg">
Multi Item 1
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-40 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold rounded-lg">
      Multi Item 2
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-40 bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center text-white font-semibold rounded-lg">
      Multi Item 3
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-40 bg-gradient-to-r from-yellow-400 to-green-400 flex items-center justify-center text-white font-semibold rounded-lg">
      Multi Item 4
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel :items-per-view="2" :spacing="16">
  <bo-carousel-item>
    <div class="h-40 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold rounded-lg">
      Multi Item 1
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-40 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold rounded-lg">
      Multi Item 2
    </div>
  </bo-carousel-item>
</bo-carousel>
```

## Touch and Swipe Support

Carousels support touch gestures and mouse dragging for navigation.

::: raw
<bo-carousel :touch="true" :drag="true">
<bo-carousel-item>

<div class="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
Swipe me! 👆
</div>
</bo-carousel-item>

  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-pink-600 to-indigo-600 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Touch enabled! ✋
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-teal-600 to-pink-600 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Drag to navigate! 🖱️
    </div>
  </bo-carousel-item>
</bo-carousel>
:::

```vue
<bo-carousel :touch="true" :drag="true">
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Swipe me! 👆
    </div>
  </bo-carousel-item>
  
  <bo-carousel-item>
    <div class="h-48 bg-gradient-to-r from-pink-600 to-indigo-600 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
      Touch enabled! ✋
    </div>
  </bo-carousel-item>
</bo-carousel>
```
