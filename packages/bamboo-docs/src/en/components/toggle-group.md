---
title: Toggle Group
description: Single or multiple pressed-state controls.
category: forms
tags: [toggle-group, toggle, selection, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
const format = ref('list');
const filters = ref<string[]>([]);
const singleExample = `<bo-toggle-group v-model="format"><bo-toggle-group-item value="list">List</bo-toggle-group-item><bo-toggle-group-item value="grid">Grid</bo-toggle-group-item></bo-toggle-group>`;
const multipleExample = `<bo-toggle-group v-model="filters" multiple><bo-toggle-group-item value="open">Open</bo-toggle-group-item><bo-toggle-group-item value="owned">Owned</bo-toggle-group-item></bo-toggle-group>`;
</script>

# Toggle Group

Use `bo-toggle-group` when related toggles share a selection model.

## Single selection

<ExampleFrame :code="singleExample"><bo-toggle-group v-model="format" aria-label="View format"><bo-toggle-group-item value="list">List</bo-toggle-group-item><bo-toggle-group-item value="grid">Grid</bo-toggle-group-item></bo-toggle-group></ExampleFrame>

## Multiple selection

<ExampleFrame :code="multipleExample"><bo-toggle-group v-model="filters" multiple aria-label="Filters"><bo-toggle-group-item value="open">Open</bo-toggle-group-item><bo-toggle-group-item value="owned">Owned</bo-toggle-group-item></bo-toggle-group></ExampleFrame>

Use `disabled`, `orientation`, `size`, and `variant` to match the surrounding control group.
