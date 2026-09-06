---
title: Toggle
description: A pressed or unpressed action control.
category: forms
tags: [toggle, pressed, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
const enabled = ref(false);
const basicExample = `<bo-toggle v-model="enabled" label="Notifications" />`;
const slotExample = `<bo-toggle v-model="enabled" aria-label="Pin item"><bo-icon icon="pin" /></bo-toggle>`;
</script>

# Toggle

Use `bo-toggle` for a reversible action whose pressed state is meaningful.

## Controlled state

<ExampleFrame :code="basicExample"><div class="flex items-center gap-3"><bo-toggle v-model="enabled" label="Notifications" /><span class="text-sm text-neutral-500">{{ enabled ? 'On' : 'Off' }}</span></div></ExampleFrame>

## Slotted content

Use an accessible label when the toggle contains only an icon.

<ExampleFrame :code="slotExample"><bo-toggle v-model="enabled" aria-label="Pin item"><bo-icon icon="pin" /></bo-toggle></ExampleFrame>

The component exposes `aria-pressed` and `data-state` and supports `disabled`, `size`, and `variant` props.
