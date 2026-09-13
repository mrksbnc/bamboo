---
title: Card
description: Group related content into a bordered surface.
category: layout
tags:
  - card
  - layout
  - content
outline: deep
---

<script setup lang="ts">
import { BoButton, BoCard } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-card title="Project settings" description="Manage access and notifications.">
  <p>Choose which updates you receive.</p>
  <template #footer>
    <bo-button size="sm">Save changes</bo-button>
  </template>
</bo-card>`;

const headerlessExample = `<bo-card>
  <p class="font-medium">A headerless card</p>
  <p>Use the body slot when a generated title is not needed.</p>
</bo-card>`;

const mediaOnlyExample = `<bo-card class="h-64">
  <template #media>
    <div class="h-64 bg-gradient-to-br from-blue-500 to-violet-600" />
  </template>
</bo-card>`;

const headerExample = `<bo-card>
  <template #header>
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="font-semibold">Custom header</p>
        <p class="text-sm text-neutral-500">Header content is fully controlled.</p>
      </div>
      <bo-button size="sm" kind="outline">Edit</bo-button>
    </div>
  </template>
  <p>Custom header content can contain actions or other layout.</p>
</bo-card>`;

const footerExample = `<bo-card title="Invite team">
  <p>Send an invitation to a teammate.</p>
  <template #footer>
    <bo-button kind="outline" size="sm">Cancel</bo-button>
    <bo-button size="sm">Send invite</bo-button>
  </template>
</bo-card>`;

const contentExample = `<bo-card title="Usage">
  <div class="grid gap-3">
    <p>Monthly usage is shown here.</p>
    <div class="h-2 rounded-full bg-neutral-200">
      <div class="h-2 w-3/4 rounded-full bg-blue-600" />
    </div>
  </div>
</bo-card>`;
</script>

# Card

Use `bo-card` for a self-contained block of related content, metadata, media, or actions. The component supplies the surface and layout; its slots let you choose how much structure to use.

## Basic Usage

Passing `title` and `description` generates the standard header. The default slot becomes the body, and `footer` places content below it.

<ExampleFrame :code="basicExample">
  <bo-card title="Project settings" description="Manage access and notifications.">
    <p>Choose which updates you receive.</p>
    <template #footer>
      <bo-button size="sm">Save changes</bo-button>
    </template>
  </bo-card>
</ExampleFrame>

## Headerless Card

Omit both `title` and `description` when the content can stand on its own. The header is not rendered unless one of those props or the `header` slot is present.

<ExampleFrame :code="headerlessExample">
  <bo-card>
    <p class="font-medium">A headerless card</p>
    <p>Use the body slot when a generated title is not needed.</p>
  </bo-card>
</ExampleFrame>

## Media-Only Top-Filling Card

The `media` slot is rendered before the body and clips to the card surface. Give the card and media content an explicit height when the media should fill the top area. When the default slot is empty, no empty body wrapper is rendered.

<ExampleFrame :code="mediaOnlyExample">
  <bo-card class="h-64">
    <template #media>
      <div class="h-64 bg-gradient-to-br from-blue-500 to-violet-600" />
    </template>
  </bo-card>
</ExampleFrame>

## Media with Content

Use media together with a generated header and body content for previews, summaries, and other visual cards.

<ExampleFrame :code="contentExample">
  <bo-card title="Usage">
    <div class="grid gap-3">
      <p>Monthly usage is shown here.</p>
      <div class="h-2 rounded-full bg-neutral-200">
        <div class="h-2 w-3/4 rounded-full bg-blue-600" />
      </div>
    </div>
  </bo-card>
</ExampleFrame>

## Header Slot

The `header` slot replaces the generated title and description together. Use it when the header needs actions, a custom hierarchy, or a different layout.

<ExampleFrame :code="headerExample">
  <bo-card>
    <template #header>
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="font-semibold">Custom header</p>
          <p class="text-sm text-neutral-500">Header content is fully controlled.</p>
        </div>
        <bo-button size="sm" kind="outline">Edit</bo-button>
      </div>
    </template>
    <p>Custom header content can contain actions or other layout.</p>
  </bo-card>
</ExampleFrame>

## Footer

The `footer` slot is rendered only when provided. Keep related actions together and use button variants to communicate their priority.

<ExampleFrame :code="footerExample">
  <bo-card title="Invite team">
    <p>Send an invitation to a teammate.</p>
    <template #footer>
      <bo-button kind="outline" size="sm">Cancel</bo-button>
      <bo-button size="sm">Send invite</bo-button>
    </template>
  </bo-card>
</ExampleFrame>

## Custom Content

The default slot accepts arbitrary content. Cards do not impose a data model or interaction pattern on the body.

## Usage Guidance

- Use a concise title when the card needs a visible heading; use the `header` slot for more complex headings.
- Keep the default slot focused on one related topic or task.
- Use `media` for content that should touch the card edges and `footer` for actions below the body.
- Do not use a card as a substitute for a page section when the content has no meaningful boundary.

## API Reference

### Props

| Prop          | Type                           | Default       | Description                              |
| ------------- | ------------------------------ | ------------- | ---------------------------------------- |
| `id`          | `string`                       | Autogenerated | The card id.                             |
| `dataTestId`  | `string`                       | Autogenerated | The test id attribute.                   |
| `title`       | `string`                       | -             | Title rendered in the generated header.  |
| `description` | `string`                       | -             | Supporting text in the generated header. |
| `role`        | `HTMLAttributes['role']`       | -             | Root accessibility role.                 |
| `ariaLabel`   | `HTMLAttributes['aria-label']` | -             | Accessible name for the card.            |

### Slots

| Name      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `header`  | Replaces the generated title and description header.          |
| `media`   | Content rendered above the body.                              |
| `default` | Card body content.                                            |
| `footer`  | Content rendered below the body, usually actions or metadata. |
