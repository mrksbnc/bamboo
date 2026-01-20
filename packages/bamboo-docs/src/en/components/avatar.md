---
title: Avatar
description: Avatar component for displaying user profile pictures, initials, or default images with support for indicators, sizes, and more
category: display
tags:
  - avatar
  - profile
  - user
  - image
  - initials
  - status
outline: deep
---

<script setup>
import { BoAvatar } from '@mrksbnc/bamboo-vue';
</script>

# Avatar

The `bo-avatar` component is used to display user profile pictures, initials, or default images with support for indicators, sizes, and more.

## Basic Usage

<div class="flex gap-4">
  <bo-avatar label="Avatar" />
  <bo-avatar src="../../assets/avatar.jpeg" />
  <bo-avatar />
</div>
